import { Controller, Get } from '@nestjs/common';
import { AiChatServiceService } from './ai-chat-service.service';

@Controller()
export class AiChatServiceController {
  constructor(private readonly aiChatServiceService: AiChatServiceService) {}

  @Get()
  getHello(): string {
    return this.aiChatServiceService.getHello();
  }
}
