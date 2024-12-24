import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'user',
          protoPath: join(__dirname, '../../../libs/common/src/proto/user.proto'),
          url: 'localhost:50051',
        },
      },
    ]),
  ],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}