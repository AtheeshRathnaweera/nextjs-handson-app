import { HttpErrorCode } from "@/app/_constants/HttpErrorCode";
import { HttpException } from "./HttpException";

export class ExternalApiException extends HttpException {
  constructor(message: string, statusCode: number, errors?: unknown) {
    super(message, HttpErrorCode.EXTERNAL_API_ERROR, statusCode, errors);
  }
}