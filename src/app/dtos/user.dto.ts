import { Roles } from '@/src/auth/auth.roles';
import { IsEmail, IsNotEmpty, MinLength, Matches, IsOptional } from 'class-validator';

export class UserDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/)
  password: string;

  @IsOptional()
  role: Roles;
}
