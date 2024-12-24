import { Test, TestingModule } from '@nestjs/testing';
import { FamilyServiceController } from './family-service.controller';
import { FamilyServiceService } from './family-service.service';

describe('FamilyServiceController', () => {
  let familyServiceController: FamilyServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FamilyServiceController],
      providers: [FamilyServiceService],
    }).compile();

    familyServiceController = app.get<FamilyServiceController>(FamilyServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(familyServiceController.getHello()).toBe('Hello World!');
    });
  });
});
