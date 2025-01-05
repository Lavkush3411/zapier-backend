import { Test, TestingModule } from '@nestjs/testing';
import { ZapController } from './zap.controller';
import { ZapService } from './zap.service';

describe('ZapController', () => {
  let zapController: ZapController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ZapController],
      providers: [ZapService],
    }).compile();

    zapController = app.get<ZapController>(ZapController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(zapController.getHello()).toBe('Hello World!');
    });
  });
});
