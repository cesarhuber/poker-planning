import { Body, Controller, Post } from '@nestjs/common';
import { UserLoginDTO } from '../app/dtos/userLogin.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() userDto: UserLoginDTO): Promise<{ accessToken: string }> {
    return this.authService.login(userDto);
  }
}
