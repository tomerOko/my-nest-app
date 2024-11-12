import { Global, Injectable, Module } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Injectable()
export class ElasticsearchService {
  private readonly client: Client;

  constructor() {
    this.client = new Client({
      node: 'http://localhost:9200', // Replace with your Elasticsearch server URL
      headers: {
        'Content-Type': 'application/json', // Force application/json Content-Type
      },
    });
  }

  async indexDocument(index: string, body: Record<string, any>) {
    const result = await this.client.index({
      index,
      body,
    });
    return result;
  }

  async search(index: string, query: Record<string, any>) {
    const result = await this.client.search({
      index,
      body: {
        query,
      },
    });
    return result;
  }
}

@Global()
@Module({
  providers: [ElasticsearchService],
  exports: [ElasticsearchService],
})
export class ElasticsearchModule {}
