import { HttpErrorCode } from "@/app/_constants/HttpErrorCode";
import { HttpException } from "./HttpException";

export class BadRequestException extends HttpException {
  constructor(message: string, errors?: unknown) {
    super(message, HttpErrorCode.INVALID_REQUEST, 400, errors);
  }
}