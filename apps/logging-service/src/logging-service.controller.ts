import { Controller, Get } from '@nestjs/common';
import { LoggingServiceService } from './logging-service.service';

@Controller()
export class LoggingServiceController {
  constructor(private readonly loggingServiceService: LoggingServiceService) {}

  @Get()
  getHello(): string {
    return this.loggingServiceService.getHello();
  }
}
