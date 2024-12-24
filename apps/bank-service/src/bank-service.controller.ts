import { Controller, Get } from '@nestjs/common';
import { BankServiceService } from './bank-service.service';

@Controller()
export class BankServiceController {
  constructor(private readonly bankServiceService: BankServiceService) {}

  @Get()
  getHello(): string {
    return this.bankServiceService.getHello();
  }
}
