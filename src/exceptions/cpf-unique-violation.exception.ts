import { HttpException, HttpStatus } from '@nestjs/common';

export class CpfUniqueViolationException extends HttpException {
  constructor() {
    super('CPF already exists', HttpStatus.CONFLICT);
  }
}
