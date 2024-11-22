import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByName(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
//Реализация авторизации через google
    async validateGoogleUser(accessToken: string, refreshToken: string, profile: any) {
      const { name, emails, id, photos } = profile;
      const user = await this.usersService.findByName(emails[0].value);
      if (user) {
        return user;
      }

    const user_tmp = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      tmp: 'user authenticated',
      accessToken,
      refreshToken,
    };

      const newUser = await this.usersService.create({
        username: name,
        email: emails[0].value,
        password: id,
      });

      return user_tmp;
    }


  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
