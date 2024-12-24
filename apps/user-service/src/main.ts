import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { createWinstonLogger } from '../../logging-service/src/winston.config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    logger: createWinstonLogger('user-service'),
    transport: Transport.GRPC,
    options: {
      package: 'user',
      protoPath: join(__dirname, '../../../libs/common/src/proto/user.proto'),
      url: '0.0.0.0:50051',
    },
  });

  await app.listen();
  console.log('User service is listening on port 50051');
}

bootstrap();