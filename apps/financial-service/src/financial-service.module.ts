import { Module } from '@nestjs/common';
import { FinancialServiceController } from './financial-service.controller';
import { FinancialServiceService } from './financial-service.service';

@Module({
  imports: [],
  controllers: [FinancialServiceController],
  providers: [FinancialServiceService],
})
export class FinancialServiceModule {}
