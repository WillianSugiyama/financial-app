import { Module } from '@nestjs/common';
import { BankServiceController } from './bank-service.controller';
import { BankServiceService } from './bank-service.service';

@Module({
  imports: [],
  controllers: [BankServiceController],
  providers: [BankServiceService],
})
export class BankServiceModule {}
