import { NestFactory } from '@nestjs/core';
import { FamilyServiceModule } from './family-service.module';

async function bootstrap() {
  const app = await NestFactory.create(FamilyServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
