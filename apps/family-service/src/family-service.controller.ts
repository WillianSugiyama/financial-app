import { Controller, Get } from '@nestjs/common';
import { FamilyServiceService } from './family-service.service';

@Controller()
export class FamilyServiceController {
  constructor(private readonly familyServiceService: FamilyServiceService) {}

  @Get()
  getHello(): string {
    return this.familyServiceService.getHello();
  }
}
