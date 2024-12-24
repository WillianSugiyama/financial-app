import {
  CreateUserRequest,
  Empty,
  FindOneRequest,
  UpdateUserRequest,
  UserResponse,
  UsersResponse
} from '@app/common/interfaces/proto';
import { Controller, UseInterceptors } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ValidationInterceptor } from '../interceptors/validation.interceptor';
import { CreateUserValidator } from './dto/create-user.validator';
import { UpdateUserValidator } from './dto/update-user.validator';
import { UsersService } from './user-service.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(new ValidationInterceptor(CreateUserValidator))
  @GrpcMethod('UserService', 'Create')
  async create(request: CreateUserRequest): Promise<UserResponse> {
    return this.usersService.create(request);
  }

  @GrpcMethod('UserService', 'FindOne')
  async findOne(request: FindOneRequest): Promise<UserResponse> {
    return this.usersService.findOne(request.id);
  }

  @GrpcMethod('UserService', 'FindAll')
  async findAll(): Promise<UsersResponse> {
    const users = await this.usersService.findAll();
    return { users };
  }

  @UseInterceptors(new ValidationInterceptor(UpdateUserValidator))
  @GrpcMethod('UserService', 'Update')
  async update(request: UpdateUserRequest): Promise<UserResponse> {
    return this.usersService.update(request.id, request);
  }

  @GrpcMethod('UserService', 'Delete')
  async delete(request: FindOneRequest): Promise<Empty> {
    await this.usersService.delete(request.id);
    return {};
  }
}