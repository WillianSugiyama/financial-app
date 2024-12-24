import { CreateUserRequest, UpdateUserRequest, UserResponse } from '@app/common/interfaces/proto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async create(data: CreateUserRequest): Promise<UserResponse> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = new this.userModel({
      ...data,
      password: hashedPassword,
    });
    const createdUser = await user.save();
    
    return this.toUserResponse(createdUser);
  }

  async findOne(id: string): Promise<UserResponse> {
    const user = await this.userModel.findById(id).exec();
    return this.toUserResponse(user);
  }

  async findAll(): Promise<UserResponse[]> {
    const users = await this.userModel.find().exec();
    return users.map(this.toUserResponse);
  }

  async update(id: string, data: UpdateUserRequest): Promise<UserResponse> {
    const updateData: any = { ...data };
    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 10);
    }

    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
    
    return this.toUserResponse(updatedUser);
  }

  async delete(id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(id).exec();
  }

  private toUserResponse(user: UserDocument): UserResponse {
    return {
      id: user._id.toString(),
      email: user.email,
      name: user.name,
      photoUrl: user.photoUrl || undefined,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    };
  }
}