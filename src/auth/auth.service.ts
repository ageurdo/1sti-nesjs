import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { AuthRequest } from './models/AuthRequest';
import { UnauthorizedException } from 'src/exceptions/unauthorized.error.exception';
import env from '../utils';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) {}

  async auth(user: AuthRequest): Promise<UserToken> {
    const payload: UserPayload = {
      sub: user.user.id,
      cpf: user.user.cpf,
      name: user.user.name,
    };

    return {
      access_token: this.jwtService.sign(payload, {
        expiresIn: env.JWT_EXPIRES_IN,
      }),
    };
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findByCpf(email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new UnauthorizedException(
      'Falha na autenticação. Por favor, verifique seu CPF e senha.',
    );
  }
}
