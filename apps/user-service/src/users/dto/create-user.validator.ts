import { CreateUserRequest } from '@app/common/interfaces/proto';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserValidator implements CreateUserRequest {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @MinLength(2)
  name: string;
}