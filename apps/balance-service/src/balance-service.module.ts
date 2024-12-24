import { Module } from '@nestjs/common';
import { BalanceServiceController } from './balance-service.controller';
import { BalanceServiceService } from './balance-service.service';

@Module({
  imports: [],
  controllers: [BalanceServiceController],
  providers: [BalanceServiceService],
})
export class BalanceServiceModule {}
