import { NestFactory } from '@nestjs/core';
import { BankServiceModule } from './bank-service.module';

async function bootstrap() {
  const app = await NestFactory.create(BankServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
