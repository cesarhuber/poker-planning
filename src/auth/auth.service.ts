import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserLoginDTO } from '../app/dtos/userLogin.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(userData: UserLoginDTO): Promise<any> {
    const user = await this.userService.findByEmail(userData.email);

    const isValidPassword = await this.userService.checkPassword(
      userData.password,
      user.password,
    );

    if (!user || !isValidPassword)
      throw new UnauthorizedException('Wrong email or password.');

    const payload = { sub: user.id, username: user.email };
    console.log('Payload generated:', payload);
    console.log('jwt secret:', process.env.JWT_SECRET);
    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET,
      }),
    };
  }
}
