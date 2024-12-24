import { NestFactory } from '@nestjs/core';
import { AiChatServiceModule } from './ai-chat-service.module';

async function bootstrap() {
  const app = await NestFactory.create(AiChatServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
