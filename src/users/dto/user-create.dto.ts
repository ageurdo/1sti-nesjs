import { IsCPF } from 'class-validator-cpf';
export class CreateUserDto {
  @IsCPF({ message: 'O CPF fornecido é inválido.' })
  cpf: string;
  password: string;
  name: string;
  dateOfBirth: Date;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}
