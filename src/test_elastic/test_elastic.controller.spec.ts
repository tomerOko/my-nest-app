import { Test, TestingModule } from '@nestjs/testing';
import { TestElasticController } from './test_elastic.controller';

describe('TestElasticController', () => {
  let controller: TestElasticController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestElasticController],
    }).compile();

    controller = module.get<TestElasticController>(TestElasticController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
