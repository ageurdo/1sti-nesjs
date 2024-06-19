import { Test, TestingModule } from '@nestjs/testing';
import { passwordMock, reqUserMock, userMock } from './user.mock';
import { UsersController } from '../users.controller';
import { Response } from 'express';
import { UpdateUserPasswordDto } from '../dto/user-password-update.dto';
import { UserInsideHeaderRequestDto } from '../dto/user-request-header.dto';
import { userServiceMock } from './user.service-mock';
import {
  CpfUniqueViolationException,
  EntityNotFoundException,
  PasswordException,
} from 'src/exceptions';
import { HttpStatus } from '@nestjs/common';
describe('UsersController Tests', () => {
  let usersController: UsersController;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [userServiceMock],
    }).compile();

    usersController = moduleFixture.get<UsersController>(UsersController);
  });

  it('should get user', async () => {
    const result = await usersController.findOne(8);
    expect(result.id).toEqual(8);
  });
  it('Should return 404 for user not found or deleted', async () => {
    await expect(async () => {
      await usersController.findOne(0);
    }).rejects.toThrow(EntityNotFoundException);
  });

  it('should get users', async () => {
    const result = await usersController.findAll();
    expect(result.length === 15);
  });

  it('should create a user entity successfully', async () => {
    const newUser = { ...userMock };
    delete newUser.id;
    newUser.cpf = '74928889029';
    const result = await usersController.create(newUser);
    expect(result.cpf).toEqual(newUser.cpf);
  });

  it('should not duplicate user', async () => {
    const newUser = { ...userMock };
    delete newUser.id;
    await expect(async () => {
      await usersController.create(newUser);
    }).rejects.toThrow(CpfUniqueViolationException);
  });

  it('should update user', async () => {
    const userData = { ...userMock };
    userData.name = 'Henrique Dubugras';
    const result = await usersController.update(userData.id, userData);
    expect(result.name).toEqual(userData.name);
  });

  it('should accept password change', async () => {
    const passwordData = { ...passwordMock };
    const res: Response = null;
    const result = await usersController.updatePassword(
      userMock.id,
      passwordData as UpdateUserPasswordDto,
      res as Response<any, Record<string, any>>,
    );
    expect(result).toBe(HttpStatus.NO_CONTENT);
  });

  it('should not accept incorrect user password', async () => {
    const passwordData = { ...passwordMock };
    passwordData.currentPassword = '12345676';
    const res: Response = null;

    await expect(async () => {
      await usersController.updatePassword(
        userMock.id,
        passwordData as UpdateUserPasswordDto,
        res as Response<any, Record<string, any>>,
      );
    }).rejects.toThrow(PasswordException);
  });

  it('should not accept new password and password confirmation are different', async () => {
    const passwordData = { ...passwordMock };
    passwordData.newPassword = '11111111';
    passwordData.confirmPassword = '00000000';
    const res: Response = null;

    await expect(async () => {
      await usersController.updatePassword(
        userMock.id,
        passwordData as UpdateUserPasswordDto,
        res as Response<any, Record<string, any>>,
      );
    }).rejects.toThrow(PasswordException);
  });

  it('should not accept that new password is be the same as the current one', async () => {
    const passwordData = { ...passwordMock };
    passwordData.newPassword = '123456789';
    passwordData.confirmPassword = '123456789';
    const res: Response = null;

    await expect(async () => {
      await usersController.updatePassword(
        userMock.id,
        passwordData as UpdateUserPasswordDto,
        res as Response<any, Record<string, any>>,
      );
    }).rejects.toThrow(PasswordException);
  });

  it('Should not accept password longer or less than 8 digits', async () => {
    const passwordData = { ...passwordMock };
    passwordData.newPassword = '1';
    passwordData.confirmPassword = '1';
    const res: Response = null;

    await expect(async () => {
      await usersController.updatePassword(
        userMock.id,
        passwordData as UpdateUserPasswordDto,
        res as Response<any, Record<string, any>>,
      );
    }).rejects.toThrow(PasswordException);
  });

  it('should delete user', async () => {
    const result = await usersController.softDelete(
      userMock.id,
      reqUserMock as UserInsideHeaderRequestDto,
    );
    expect(result).toBe(HttpStatus.NO_CONTENT);
  });
});
