import { Controller, Get } from '@nestjs/common';
import { BalanceServiceService } from './balance-service.service';

@Controller()
export class BalanceServiceController {
  constructor(private readonly balanceServiceService: BalanceServiceService) {}

  @Get()
  getHello(): string {
    return this.balanceServiceService.getHello();
  }
}
