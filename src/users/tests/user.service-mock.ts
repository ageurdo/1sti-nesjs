import { UsersService } from '../users.service';
import { reqUserMock, userListMock } from './user.mock';
import {
  CpfUniqueViolationException,
  EntityNotFoundException,
  PasswordException,
} from 'src/exceptions';
import { ResponseUserDto } from '../dto/user-response.dto';
import { CreateUserDto } from '../dto/user-create.dto';
import { RecordStatus, User } from '../entities/user.entity';
import { UpdateUserPasswordDto } from '../dto/user-password-update.dto';
import { HttpStatus } from '@nestjs/common';
import { UpdateUserDto } from '../dto/user-update.dto';

const methodExternal = {
  getUserById: jest.fn().mockImplementation(function (id: number) {
    const existingUser = userListMock.find((u: ResponseUserDto) => u.id === id);

    if (!existingUser) {
      throw new EntityNotFoundException();
    } else return existingUser;
  }),
};

export const userServiceMock = {
  provide: UsersService,
  useValue: {
    findAll: jest.fn().mockImplementation(() => {
      return userListMock.map((userData: ResponseUserDto) =>
        ResponseUserDto.fromUser(userData as User),
      );
    }),

    update: jest.fn().mockImplementation((id, data: UpdateUserDto) => {
      const existingUser = methodExternal.getUserById(id);
      existingUser.name = data.name;
      existingUser.dateOfBirth = data.dateOfBirth;
      existingUser.street = data.street;
      existingUser.number = data.number;
      existingUser.complement = data.complement;
      existingUser.neighborhood = data.neighborhood;
      existingUser.city = data.city;
      existingUser.state = data.state;
      existingUser.zipCode = data.zipCode;
      return ResponseUserDto.fromUser(existingUser as User);
    }),

    softDelete: jest.fn().mockImplementation((id) => {
      const existingUser: User = methodExternal.getUserById(id, reqUserMock);
      existingUser.deletedBy = reqUserMock.user.id;
      existingUser.deletedAt = new Date();
      existingUser.status = RecordStatus.REMOVED;
      return HttpStatus.NO_CONTENT;
    }),

    findOne: jest.fn().mockImplementation((id: number) => {
      const existingUser = methodExternal.getUserById(id);
      return ResponseUserDto.fromUser(existingUser as User);
    }),

    create: jest.fn().mockImplementation((user: CreateUserDto) => {
      const existingUser = userListMock.find(
        (u: ResponseUserDto) => u.cpf === user.cpf,
      );
      if (existingUser) {
        throw new CpfUniqueViolationException();
      }
      return ResponseUserDto.fromUser(user as User);
    }),

    updatePassword: jest
      .fn()
      .mockImplementation((id, dto: UpdateUserPasswordDto) => {
        const existingUser = methodExternal.getUserById(id);

        if (!existingUser) {
          throw new EntityNotFoundException();
        }

        if (dto.currentPassword !== existingUser.password) {
          throw new PasswordException('Senha não confere');
        }

        if (dto.newPassword === existingUser.password) {
          throw new PasswordException('Nova senha não pode ser igual a atual');
        }

        if (dto.newPassword !== dto.confirmPassword) {
          throw new PasswordException(
            'Nova senha e confirmação de senha não conferem',
          );
        }

        if (dto.newPassword.length != 8) {
          throw new PasswordException(
            'Nova senha deve conter exatamente 8 caracteres',
          );
        }

        existingUser.password = dto.newPassword;

        return HttpStatus.NO_CONTENT;
      }),
  },
};
