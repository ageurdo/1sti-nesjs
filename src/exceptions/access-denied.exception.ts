import { HttpException, HttpStatus } from '@nestjs/common';

export class AccessDeniedException extends HttpException {
  constructor() {
    super(
      'Você não tem permissão para realizar esta ação',
      HttpStatus.FORBIDDEN,
    );
  }
}
