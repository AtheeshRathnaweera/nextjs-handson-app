import { IpInfoRequest } from '../_dto/IpInfoRequest';
import { plainToInstance } from 'class-transformer';
import { IpInfoResponse } from '../_dto/IpInfoResponse';
import { BadRequestException } from '../_exceptions/BadRequestException';
import { HttpException } from '../_exceptions/HttpException';
import { HttpErrorCode } from '@/app/_constants/HttpErrorCode';
import { NextResponse } from 'next/server';
import { ExternalApiException } from '../_exceptions/ExternalApiException';

export async function POST(request: Request) {
  try {
    const requestData = await request.json();
    const validatedData = plainToInstance(IpInfoRequest, requestData);

    if (!validatedData.ip) {
      throw new BadRequestException('The IP property is required and must be provided.');
    }
    
    const apiUrl = `https://api.ip2location.io/?key=${process.env.IP2LOCATION_API_KEY}&ip=${validatedData.ip}`;
    const response = await fetch(apiUrl);

    if (!response.ok) { 
      throw new ExternalApiException('Failed to retrieve data from ip2location API', response.status);
    }

    const data = await response.json();
    const ipInfoResponse = plainToInstance(IpInfoResponse, data);

    return NextResponse.json(ipInfoResponse);
  } catch (error) {
    console.error("Error fetching user's ip info:", error);

    if (error instanceof HttpException) {
      return NextResponse.json({ error: error.message, errorCode: error.errorCode, errors: error.errors }, { status: error.statusCode });
    }
    return NextResponse.json({ error: 'Internal Server Error', errorCode: HttpErrorCode.FETCH_FAILED }, { status: 500 });
  }
}
