import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { SignInDto, SignUpDto } from './dto';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { RefreshToken } from './entitites/refresh-token.entitty';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
    @InjectRepository(RefreshToken)
    private readonly rtRepo: Repository<RefreshToken>,
  ) {}

  async signIn(input: SignInDto) {
    const user = await this.validateUser(input);

    const access_token = await this.generateToken(user.id);
    const refresh_token = await this.generateRefreshToken(user.id);

    await this.updateRefreshToken(user.id, refresh_token);

    return {
      access_token,
      refresh_token,
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

  async signOut(userId: string) {
    const token = await this.rtRepo.findOneBy({ user: { id: userId } });

    if (!token.refresh_token) throw new NotFoundException('No record found');

    try {
      await this.rtRepo.update(token.id, { refresh_token: null });
    } catch (error) {
      throw error;
    }
  }

  async refreshToken(userId: string, refresh_token: string) {
    const token = await this.rtRepo.findOneBy({ user: { id: userId } });

    if (!token) throw new NotFoundException('No record found');
    if (!token.refresh_token) throw new ForbiddenException('Invalid token');

    const validateToken = await argon2.verify(
      token.refresh_token,
      refresh_token,
    );

    if (!validateToken) throw new ForbiddenException('Invalid refresh token');

    const access_token = await this.generateToken(userId);
    const refresh_token_new = await this.generateRefreshToken(userId);

    await this.updateRefreshToken(userId, refresh_token_new);

    return {
      access_token,
      refresh_token: refresh_token_new,
    };
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

  async updateRefreshToken(userId: string, refresh_token: string) {
    const token = await this.rtRepo.findOneBy({ user: { id: userId } });
    const hashedRefreshToken = await this.hashData(refresh_token);

    if (!token) {
      const newToken = this.rtRepo.create({
        user: { id: userId },
        refresh_token: hashedRefreshToken,
      });
      return await this.rtRepo.save(newToken);
    } else {
      token.refresh_token = hashedRefreshToken;
      return await this.rtRepo.save(token);
    }
  }

  async generateToken(userId: string) {
    const access_token = this.jwtService.signAsync(
      { sub: userId },
      {
        expiresIn: 60 * 15,
        secret: this.configService.get<string>('JWT_SECRET'),
      },
    );

    return access_token;
  }

  async generateRefreshToken(userId: string) {
    const refresh_token = this.jwtService.signAsync(
      { sub: userId },
      {
        expiresIn: 60 * 60 * 24 * 7,
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      },
    );

    return refresh_token;
  }
}
