import { Column } from 'typeorm';

export class CreateUserDto {
  @Column()
  cpf: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zipCode: string;
}
