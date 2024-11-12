import { Controller, Get, Post } from '@nestjs/common';
import { ElasticsearchService } from 'src/config/elasticsearch';

@Controller('elastic')
export class TestElasticController {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  @Post()
  async putInElastic() {
    const now = new Date();
    const nowString = now.toISOString();
    const result = await this.elasticsearchService.indexDocument('test', {
      '@timestamp': now,
      message: `Hello Elastic! ${nowString}`,
    });
    return result;
  }

  @Get()
  async getFromElastic() {
    const result = await this.elasticsearchService.search('test', {
      match_all: {},
    });
    return result;
  }
}
