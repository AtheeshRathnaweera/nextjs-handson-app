import { NextResponse } from 'next/server';
import { TodaysFactResponse } from '../../_dto/TodaysFactResponse';
import { HttpErrorCode } from '../../../_constants/HttpErrorCode';
import { HttpException } from '../../_exceptions/HttpException';
import { ExternalApiException } from '../../_exceptions/ExternalApiException';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: Request) {
  const today = new Date();
  const day: number = today.getDate();
  const month: number = today.getMonth() + 1;
  const apiUrl = `http://numbersapi.com/${month}/${day}/date`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new ExternalApiException('Failed to retrieve data from Numbers API', response.status);
    }

    const data: string = await response.text();
    const factResponse = new TodaysFactResponse();
    factResponse.fact = data;
    factResponse.date = today.toISOString().split("T")[0];

    return NextResponse.json(factResponse);
  } catch (error) {
    console.error("Error fetching today's fact:", error);

    if (error instanceof HttpException) {
      return NextResponse.json({ error: error.message, errorCode: error.errorCode, errors: error.errors }, { status: error.statusCode });
    }
    return NextResponse.json({ error: 'Internal Server Error', errorCode: HttpErrorCode.FETCH_FAILED }, { status: 500 });
  }
}
