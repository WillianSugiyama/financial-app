import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  
  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(3000);
  console.log(`Application is running on: http://localhost:3000/graphql`);
}
bootstrap();