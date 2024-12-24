import { Injectable } from '@nestjs/common';

@Injectable()
export class BankServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
