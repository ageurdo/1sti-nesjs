import { IsString } from 'class-validator';
import { IsCPF } from 'class-validator-cpf';

export class AuthRequestBody {
  @IsCPF({ message: 'O CPF fornecido é inválido.' })
  cpf: string;

  @IsString()
  password: string;
}
