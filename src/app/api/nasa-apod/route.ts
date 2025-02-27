import { plainToInstance } from 'class-transformer';
import { APODResponse } from '../_dto/APODResponse';
import { HttpErrorCode } from '@/app/_constants/HttpErrorCode';
import { HttpException } from '../_exceptions/HttpException';
import { NextResponse } from 'next/server';
import { ExternalApiException } from '../_exceptions/ExternalApiException';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: Request) {
  try {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new ExternalApiException('Failed to retrieve data from Public NASA API', response.status);
    }

    const data = await response.json();
    const apodResponse = plainToInstance(APODResponse, data);

    return NextResponse.json(apodResponse);
  } catch (error) {
    console.error("Error fetching APOD:", error);
    
    if (error instanceof HttpException) {
      return NextResponse.json({ error: error.message, errorCode: error.errorCode, errors: error.errors }, { status: error.statusCode });
    }
    return NextResponse.json({ error: 'Internal Server Error', errorCode: HttpErrorCode.FETCH_FAILED }, { status: 500 });
  }
}
