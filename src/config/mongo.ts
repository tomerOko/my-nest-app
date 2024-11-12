import { Module, Global } from '@nestjs/common';
// src/mongodb/mongodb.provider.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';

@Injectable()
export class MongoDBProvider implements OnModuleInit {
  private client: MongoClient;
  private db: Db;

  async onModuleInit() {
    this.client = new MongoClient('mongodb://localhost:27017');
    await this.client.connect();
    this.db = this.client.db('main'); // Replace 'your-db-name' with your database name
    console.log('Connected to MongoDB');
  }

  getDb(): Db {
    return this.db;
  }

  async onModuleDestroy() {
    await this.client.close();
  }
}

@Global()
@Module({
  providers: [MongoDBProvider],
  exports: [MongoDBProvider],
})
export class MongoDBModule {}
