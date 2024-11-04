import { HttpErrorCode } from "../../_constants/HttpErrorCode";

export class HttpException extends Error {
  message: string;
  errorCode: HttpErrorCode | null;
  statusCode: number;
  errors: unknown;

  constructor(message: string, errorCode: HttpErrorCode | null, statusCode: number, errors?: unknown) {
    super(message)
    this.message = message
    this.errorCode = errorCode
    this.statusCode = statusCode
    this.errors = errors
  }
}