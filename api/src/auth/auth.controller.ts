import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';
import { JwtAuthGuard, JwtRefreshGuard } from './guards';
import { GetCurrentUser } from './decorators';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  async signIn(@Body() input: SignInDto) {
    return await this.authService.signIn(input);
  }

  @Post('signup')
  async signUp(@Body() input: SignUpDto) {
    return this.authService.signUp(input);
  }

  @UseGuards(JwtAuthGuard)
  @Post('signout')
  async signOut(@GetCurrentUser('id') userId: string) {
    return this.authService.signOut(userId);
  }

  @UseGuards(JwtRefreshGuard)
  @Post('refresh-token')
  async refreshToken(
    @GetCurrentUser('sub') userId: string,
    @GetCurrentUser('refresh_token') refresh_token: string,
  ) {
    return this.authService.refreshToken(userId, refresh_token);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@GetCurrentUser() user) {
    return user;
  }
}
