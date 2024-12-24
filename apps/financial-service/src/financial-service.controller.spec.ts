import { Test, TestingModule } from '@nestjs/testing';
import { FinancialServiceController } from './financial-service.controller';
import { FinancialServiceService } from './financial-service.service';

describe('FinancialServiceController', () => {
  let financialServiceController: FinancialServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FinancialServiceController],
      providers: [FinancialServiceService],
    }).compile();

    financialServiceController = app.get<FinancialServiceController>(FinancialServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(financialServiceController.getHello()).toBe('Hello World!');
    });
  });
});
