import { Test, TestingModule } from '@nestjs/testing';
import { BalanceServiceController } from './balance-service.controller';
import { BalanceServiceService } from './balance-service.service';

describe('BalanceServiceController', () => {
  let balanceServiceController: BalanceServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BalanceServiceController],
      providers: [BalanceServiceService],
    }).compile();

    balanceServiceController = app.get<BalanceServiceController>(BalanceServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(balanceServiceController.getHello()).toBe('Hello World!');
    });
  });
});
