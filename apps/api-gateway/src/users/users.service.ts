import { UserResponse, UserServiceClient } from '@app/common/interfaces/proto/user';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService implements OnModuleInit {
  private userService: UserServiceClient;

  constructor(@Inject('USER_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.client.getService<UserServiceClient>('UserService');
  }

  async create(data: CreateUserInput): Promise<UserResponse> {
    return firstValueFrom(this.userService.create(data));
  }

  async findOne(id: string): Promise<UserResponse> {
    return firstValueFrom(this.userService.findOne({ id }));
  }

  async findAll(): Promise<UserResponse[]> {
    const response = await firstValueFrom(this.userService.findAll({}));
    return response.users;
  }

  async update(data: UpdateUserInput): Promise<UserResponse> {
    return firstValueFrom(this.userService.update(data));
  }

  async delete(id: string): Promise<void> {
    await firstValueFrom(this.userService.delete({ id }));
  }
}