import { HttpException, HttpStatus } from '@nestjs/common';

export class AccessDeniedException extends HttpException {
  constructor() {
    super('Access denied', HttpStatus.FORBIDDEN);
  }
}
