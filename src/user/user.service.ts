import { UserDTO } from '@/src/app/dtos/user.dto';
import { UserRepository } from '@/src/user/user.repository';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  public async hashPassword(password: string): Promise<string> {
    const saltRounds = Number(process.env.SALT);
    const result = await bcrypt.hash(password, saltRounds);
    console.log(result);
    return result;
  }

  public async checkPassword(receivedPassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(receivedPassword, hashedPassword);
  }

  public async createUser(userData: UserDTO) {
    return this.userRepository.createUser(userData);
  }

  public async findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }
}
