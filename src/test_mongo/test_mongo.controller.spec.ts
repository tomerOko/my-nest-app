import { Test, TestingModule } from '@nestjs/testing';
import { TestMongoController } from './test_mongo.controller';

describe('TestMongoController', () => {
  let controller: TestMongoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestMongoController],
    }).compile();

    controller = module.get<TestMongoController>(TestMongoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
