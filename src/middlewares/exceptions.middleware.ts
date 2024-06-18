import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

import {
  UnauthorizedException,
  AccessDeniedException,
  CpfUniqueViolationException,
  EntityNotFoundException,
  PasswordException,
} from 'src/exceptions';

@Catch(
  UnauthorizedException,
  AccessDeniedException,
  PasswordException,
  EntityNotFoundException,
  CpfUniqueViolationException,
  AccessDeniedException,
)
export class ExceptionsMiddleware implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status =
      exception instanceof HttpException ? exception.getStatus() : 500;

    console.error(exception);

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: (exception as HttpException).message,
    });
  }
}
