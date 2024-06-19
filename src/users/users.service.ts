import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { Repository } from 'typeorm';
import { RecordStatus, User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { ResponseUserDto } from './dto/user-response.dto';
import { UpdateUserPasswordDto } from './dto/user-password-update.dto';
import { PasswordException } from 'src/exceptions';
import { Response } from 'express';
import {
  EntityNotFoundException,
  CpfUniqueViolationException,
} from 'src/exceptions';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<ResponseUserDto> {
    try {
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      const user = this.usersRepository.create({
        ...createUserDto,
        password: hashedPassword,
      });
      const response = await this.usersRepository.save(user);
      return ResponseUserDto.fromUser(response);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new CpfUniqueViolationException();
      } else {
        throw error;
      }
    }
  }

  async findAll(): Promise<ResponseUserDto[]> {
    const users = await this.usersRepository.find();
    return users.map((user) => ResponseUserDto.fromUser(user));
  }

  async findOne(id: number): Promise<ResponseUserDto> {
    const user = await this.usersRepository.findOne({
      where: { id: id },
    });

    if (!user) {
      throw new EntityNotFoundException();
    }

    return ResponseUserDto.fromUser(user);
  }

  async findByIdAndReturnUserResponse(id: number) {
    try {
      return await this.usersRepository.findOneOrFail({
        where: { id: id },
      });
    } catch (error) {
      throw new EntityNotFoundException();
    }
  }

  async findByCpf(cpf: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { cpf: cpf } });
    if (!user) {
      throw new EntityNotFoundException();
    }
    return user;
  }

  async update(id: number, dto: UpdateUserDto): Promise<ResponseUserDto> {
    const userDb = await this.findByIdAndReturnUserResponse(id);

    userDb.city = dto.city;
    userDb.name = dto.name;
    userDb.state = dto.state;
    userDb.street = dto.street;
    userDb.zipCode = dto.zipCode;
    userDb.number = dto.number;
    userDb.neighborhood = dto.neighborhood;
    userDb.complement = dto.complement;
    userDb.dateOfBirth = dto.dateOfBirth;

    const response = await this.usersRepository.save(userDb);

    const updatedUser = ResponseUserDto.fromUser(response);

    return updatedUser;
  }

  async updatePassword(id: number, dto: UpdateUserPasswordDto, res: Response) {
    const userDb = await this.findByIdAndReturnUserResponse(id);

    if (!bcrypt.compareSync(dto.currentPassword, userDb.password)) {
      throw new PasswordException('Senha não confere');
    }

    if (bcrypt.compareSync(dto.newPassword, userDb.password)) {
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

    userDb.password = await bcrypt.hash(dto.newPassword, 10);

    await this.usersRepository.save(userDb);

    return res.status(HttpStatus.NO_CONTENT).send();
  }

  async softDelete(id: number, reqUserId: number): Promise<void> {
    const userDb = await this.findByIdAndReturnUserResponse(id);
    userDb.deletedBy = reqUserId || 0;
    userDb.status = RecordStatus.REMOVED;
    await this.usersRepository.save(userDb);
    await this.usersRepository.softDelete(id);
  }
}
