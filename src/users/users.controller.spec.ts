import { Test, TestingModule } from '@nestjs/testing';
import { passwordMock, reqUserMock, userMock } from './user.mock.spec';
import { UsersController } from './users.controller';
import { Response } from 'express';
import { UpdateUserPasswordDto } from './dto/user-password-update.dto';
import { UserInsideHeaderRequestDto } from './dto/user-request-header.dto';
import { userServiceMock } from './user-service-mock';
import { CpfUniqueViolationException } from 'src/exceptions';
describe('UsersController Tests', () => {
  let usersController: UsersController; // Altere o nome da variável aqui

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [userServiceMock],
    }).compile();

    usersController = moduleFixture.get<UsersController>(UsersController); // E aqui
  });

  it('Should get user', async () => {
    const result = await usersController.findOne(userMock.id);
    expect(result.name).toEqual(userMock.name);
  });

  it('Should get users', async () => {
    const result = await usersController.findAll();
    expect(result.length).toEqual(1);
  });

  it('Should create a user entity successfully', async () => {
    const newUser = { ...userMock };
    delete newUser.id;
    const result = await usersController.create(newUser);
    expect(result.id).toEqual(userMock.id);
  });

  it('Should not duplicate user', async () => {
    const newUser = { ...userMock };
    delete newUser.id;
    await expect(async () => {
      await usersController.create(newUser);
    }).rejects.toThrow(CpfUniqueViolationException);
  });

  it('Should update user', async () => {
    const userData = { ...userMock };
    delete userData.id;
    const result = await usersController.update(userMock.id, userData);
    expect(result.id).toEqual(userMock.id);
  });

  it('Should update user password', async () => {
    const passwordData = { ...passwordMock };
    const res: Response = null;
    const result = await usersController.updatePassword(
      userMock.id,
      passwordData as UpdateUserPasswordDto,
      res as Response<any, Record<string, any>>,
    );
    expect(result).toBeTruthy();
  });

  it('Should return custom exception', async () => {
    const passwordData = { ...passwordMock };
    passwordData.newPassword = '12345676';
    const res: Response = null;
    const result = await usersController.updatePassword(
      userMock.id,
      passwordData as UpdateUserPasswordDto,
      res as Response<any, Record<string, any>>,
    );
    expect(result).toBeTruthy();
  });

  it('Should delete user', async () => {
    const result = await usersController.remove(
      userMock.id,
      reqUserMock as UserInsideHeaderRequestDto,
    );
    expect(result).toBeTruthy();
  });
});
