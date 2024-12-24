import { NestFactory } from '@nestjs/core';
import { FinancialServiceModule } from './financial-service.module';

async function bootstrap() {
  const app = await NestFactory.create(FinancialServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
