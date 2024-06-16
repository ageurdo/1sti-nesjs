import { User } from '../entities/user.entity';

export class ResponseUserDto {
  id: string;
  name: string;
  dateOfBirth: Date;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;

  static fromUser(user: User): ResponseUserDto {
    const dto = new ResponseUserDto();
    dto.id = user.id.toString();
    dto.name = user.name;
    dto.dateOfBirth = user.dateOfBirth;
    dto.street = user.street;
    dto.number = user.number;
    dto.complement = user.complement;
    dto.neighborhood = user.neighborhood;
    dto.city = user.city;
    dto.state = user.state;
    dto.zipCode = user.zipCode;
    return dto;
  }
}
