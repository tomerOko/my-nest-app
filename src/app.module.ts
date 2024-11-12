import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoDBModule } from './config/mongo';
import { TestController } from './test_http/test.controller';
import { ElasticsearchModule } from './config/elasticsearch';
import { TestElasticController } from './test_elastic/test_elastic.controller';
import { TestMongoController } from './test_mongo/test_mongo.controller';

@Module({
  imports: [MongoDBModule, ElasticsearchModule],
  controllers: [
    AppController,
    TestController,
    TestElasticController,
    TestMongoController,
  ],
  providers: [AppService],
})
export class AppModule {}
