import { Request } from 'express';

export class UserInsideHeaderRequestDto extends Request {
  user: UserRequestHeaderDto;
}
export class UserRequestHeaderDto {
  id: number;
  cpf: string;
  name: string;
}
