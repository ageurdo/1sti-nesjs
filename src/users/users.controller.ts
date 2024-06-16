import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { UpdateUserPasswordDto } from './dto/user-password-update.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Patch(':id')
  updatePassword(
    @Param('id') id: string,
    @Body() updateUserPasswordDto: UpdateUserPasswordDto,
    @Res() res: Response,
  ) {
    return this.usersService.updatePassword(id, updateUserPasswordDto, res);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.softDeleteUser(parseInt(id));
  }
}
