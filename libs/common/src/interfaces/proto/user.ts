import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "user";

export interface Empty {
}

export interface CreateUserRequest {
  email: string;
  password: string;
  name: string;
}

export interface FindOneRequest {
  id: string;
}

export interface UpdateUserRequest {
  id: string;
  email?: string | undefined;
  password?: string | undefined;
  name?: string | undefined;
}

export interface UserResponse {
  id: string;
  email: string;
  name: string;
  photoUrl?: string | undefined;
  createdAt: string;
  updatedAt: string;
}

export interface UsersResponse {
  users: UserResponse[];
}

export interface PhotoUpload {
  data: Uint8Array;
  filename: string;
  contentType: string;
}

export interface PhotoResponse {
  url: string;
}

export const USER_PACKAGE_NAME = "user";

export interface UserServiceClient {
  create(request: CreateUserRequest): Observable<UserResponse>;

  findOne(request: FindOneRequest): Observable<UserResponse>;

  findAll(request: Empty): Observable<UsersResponse>;

  update(request: UpdateUserRequest): Observable<UserResponse>;

  delete(request: FindOneRequest): Observable<Empty>;

  uploadPhoto(request: Observable<PhotoUpload>): Observable<PhotoResponse>;
}

export interface UserServiceController {
  create(request: CreateUserRequest): Promise<UserResponse> | Observable<UserResponse> | UserResponse;

  findOne(request: FindOneRequest): Promise<UserResponse> | Observable<UserResponse> | UserResponse;

  findAll(request: Empty): Promise<UsersResponse> | Observable<UsersResponse> | UsersResponse;

  update(request: UpdateUserRequest): Promise<UserResponse> | Observable<UserResponse> | UserResponse;

  delete(request: FindOneRequest): Promise<Empty> | Observable<Empty> | Empty;

  uploadPhoto(request: Observable<PhotoUpload>): Promise<PhotoResponse> | Observable<PhotoResponse> | PhotoResponse;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["create", "findOne", "findAll", "update", "delete"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = ["uploadPhoto"];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USER_SERVICE_NAME = "UserService";
