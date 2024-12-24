import { UpdateUserRequest } from '@app/common/interfaces/proto';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserValidator implements Omit<UpdateUserRequest, 'id'> {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  name?: string;
}