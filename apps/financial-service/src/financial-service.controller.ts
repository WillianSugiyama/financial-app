import { Controller, Get } from '@nestjs/common';
import { FinancialServiceService } from './financial-service.service';

@Controller()
export class FinancialServiceController {
  constructor(private readonly financialServiceService: FinancialServiceService) {}

  @Get()
  getHello(): string {
    return this.financialServiceService.getHello();
  }
}
