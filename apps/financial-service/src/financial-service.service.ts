import { Injectable } from '@nestjs/common';

@Injectable()
export class FinancialServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
