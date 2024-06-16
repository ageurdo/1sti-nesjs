import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: string) {
    return this.usersRepository.findOne({ where: { id: parseInt(id, 10) } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    this.usersRepository.update(id, updateUserDto);
    return this.usersRepository.findOne({ where: { id: parseInt(id, 10) } });
  }

  remove(id: string) {
    return this.usersRepository.delete(id);
  }
}
