import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = this.usersRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: string) {
    return this.usersRepository.findOne({ where: { id: parseInt(id, 10) } });
  }

  findByCpf(cpf: string) {
    return this.usersRepository.findBy({ cpf });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    this.usersRepository.update(id, updateUserDto);
    return this.usersRepository.findOne({ where: { id: parseInt(id, 10) } });
  }

  remove(id: string) {
    return this.usersRepository.delete(id);
  }
}
