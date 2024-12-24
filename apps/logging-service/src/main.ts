import { NestFactory } from '@nestjs/core';
import { LoggingServiceModule } from './logging-service.module';

async function bootstrap() {
  const app = await NestFactory.create(LoggingServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
