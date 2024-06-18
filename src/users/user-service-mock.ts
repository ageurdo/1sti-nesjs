import { UsersService } from './users.service';
import { userMock } from './user.mock.spec';
import { CpfUniqueViolationException } from 'src/exceptions';

export const userServiceMock = {
  provide: UsersService,
  useValue: {
    findAll: jest.fn().mockResolvedValue([userMock]),
    findOne: jest.fn().mockResolvedValue(userMock),
    update: jest.fn().mockResolvedValue(userMock),
    updatePassword: jest.fn().mockResolvedValue(userMock),
    softDeleteUser: jest.fn().mockResolvedValue(true),
    create: jest.fn().mockImplementation((userMock) => {
      const existingUser = [userMock].find((u) => u.cpf === userMock.cpf);
      if (existingUser) {
        throw new CpfUniqueViolationException();
      }
      return Promise.resolve(userMock);
    }),
  },
};
