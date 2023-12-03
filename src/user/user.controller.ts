import { UserService } from '@/src/user/user.service';
import { UserDTO } from '../app/dtos/user.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  public async createUser(@Body() userData: UserDTO) {
    const hashedPassword = await this.userService.hashPassword(userData.password);
    const hashedUserData = {
      ...userData,
      password: hashedPassword,
    };
    return this.userService.createUser(hashedUserData);
  }
}
