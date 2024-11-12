import { Controller, Get, Post } from '@nestjs/common';
import { ElasticsearchService } from 'src/config/elasticsearch';
import { MongoDBProvider } from 'src/config/mongo';

@Controller('test')
export class TestController {
  constructor(
    private readonly mongodbProvider: MongoDBProvider,
    private readonly elasticsearchService: ElasticsearchService,
  ) {}

  @Get()
  async test() {
    const db = this.mongodbProvider.getDb();
    const collection = db.collection('test');
    const result = await collection.insertOne({ name: 'test' });
    return result;
  }

  @Post('put-in-elastic')
  async putInElastic() {
    const now = new Date();
    const nowString = now.toISOString();
    const result = await this.elasticsearchService.indexDocument('test', {
      '@timestamp': now,
      message: `Hello Elastic! ${nowString}`,
    });
    return result;
  }

  @Get('get-from-elastic')
  async getFromElastic() {
    const result = await this.elasticsearchService.search('test', {
      match_all: {},
    });
    return result;
  }
}
