import { Module } from '@nestjs/common';
import { FamilyServiceController } from './family-service.controller';
import { FamilyServiceService } from './family-service.service';

@Module({
  imports: [],
  controllers: [FamilyServiceController],
  providers: [FamilyServiceService],
})
export class FamilyServiceModule {}
