import { Test, TestingModule } from '@nestjs/testing';
import { BankServiceController } from './bank-service.controller';
import { BankServiceService } from './bank-service.service';

describe('BankServiceController', () => {
  let bankServiceController: BankServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BankServiceController],
      providers: [BankServiceService],
    }).compile();

    bankServiceController = app.get<BankServiceController>(BankServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bankServiceController.getHello()).toBe('Hello World!');
    });
  });
});
