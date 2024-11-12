import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoDBModule } from './config/mongo';
import { TestController } from './test/test.controller';
import { ElasticsearchModule } from './config/elasticsearch';

@Module({
  imports: [MongoDBModule, ElasticsearchModule],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}
