import { Module } from '@nestjs/common';
import { AiChatServiceController } from './ai-chat-service.controller';
import { AiChatServiceService } from './ai-chat-service.service';

@Module({
  imports: [],
  controllers: [AiChatServiceController],
  providers: [AiChatServiceService],
})
export class AiChatServiceModule {}
