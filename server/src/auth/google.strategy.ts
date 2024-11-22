import { OAuth2Strategy } from 'passport-google-oauth';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { googleAuthConfig } from './google-auth';

@Injectable()
export class GoogleStrategy extends PassportStrategy(OAuth2Strategy) {
  constructor(private authService: AuthService) {
    super(
        googleAuthConfig
);
  }

  async validate(req: any, accessToken: string, refreshToken: string, profile: any, done: Function) {
    const user = await this.authService.validateGoogleUser(accessToken, refreshToken, profile);

    
    done(null, user);
  }
}

