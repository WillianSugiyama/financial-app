import { Test, TestingModule } from '@nestjs/testing';
import { AiChatServiceController } from './ai-chat-service.controller';
import { AiChatServiceService } from './ai-chat-service.service';

describe('AiChatServiceController', () => {
  let aiChatServiceController: AiChatServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AiChatServiceController],
      providers: [AiChatServiceService],
    }).compile();

    aiChatServiceController = app.get<AiChatServiceController>(AiChatServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(aiChatServiceController.getHello()).toBe('Hello World!');
    });
  });
});
