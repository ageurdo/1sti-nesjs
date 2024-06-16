import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AccessDeniedException } from 'src/exceptions/access-denied.exception';
import { CpfUniqueViolationException } from 'src/exceptions/cpf-unique-violation.exception';
import { EntityNotFoundException } from 'src/exceptions/entity-not-found.exception';
import { PasswordException } from 'src/exceptions/password.exception';

@Catch(
  AccessDeniedException,
  PasswordException,
  EntityNotFoundException,
  CpfUniqueViolationException,
)
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status =
      exception instanceof HttpException ? exception.getStatus() : 500;

    console.error(exception); // Aqui fazemos o log do erro

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: (exception as HttpException).message, // Aqui adicionamos a mensagem da exceção
    });
  }
}
