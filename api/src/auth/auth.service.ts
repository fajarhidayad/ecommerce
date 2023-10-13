import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { SignInDto, SignUpDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(input: SignInDto) {
    const user = await this.validateUser(input);

    return {
      access_token: this.jwtService.sign({ sub: user.id }),
    };
  }

  async signUp(user: SignUpDto) {
    const checkUser = await this.userService.findByEmail(user.email);
    if (checkUser) {
      throw new ForbiddenException('Email already exists, try sign in instead');
    }

    const hashedPassword = await this.hashData(user.password);
    const newUser = await this.userService.create({
      ...user,
      password: hashedPassword,
    });

    return this.signIn(newUser);
  }

  async validateUser(input: SignInDto) {
    const user = await this.userService.findByEmail(input.email);

    if (!user) throw new NotFoundException('No record found');

    const checkPassword = await this.validatePassword(
      input.password,
      user.password,
    );

    if (!checkPassword) {
      throw new ForbiddenException('Invalid credentials');
    }

    return user;
  }

  async validatePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    try {
      if (await argon2.verify(hashedPassword, password)) {
        return true;
      }

      return false;
    } catch (error) {
      throw error;
    }
  }

  async hashData(input: string): Promise<string> {
    try {
      return await argon2.hash(input);
    } catch (error) {
      throw error;
    }
  }
}
