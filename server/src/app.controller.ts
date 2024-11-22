import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { GoogleStrategy } from './auth/google.strategy';
import { GoogleAuthGuard } from './auth/google-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private googleStrategy: GoogleStrategy,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/logout')
  async logout(@Request() req) {
    return req.logout();
  }

  @UseGuards(GoogleAuthGuard)
  @Get('auth/google-login')
  async googleLogin(@Request() req) {
    console.log('request', req);
    return this.googleStrategy.authenticate(req);
  }

  @UseGuards(GoogleAuthGuard)
  @Get('auth/google/google-redirect')
  async googleLoginCallback(@Request() req) {
    console.log(req);
    console.log('REDIrect');
    return req.user;
    // return this.googleStrategy.validate(req);
  }
}
