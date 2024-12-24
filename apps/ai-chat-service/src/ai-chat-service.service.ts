import { Injectable } from '@nestjs/common';

@Injectable()
export class AiChatServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
