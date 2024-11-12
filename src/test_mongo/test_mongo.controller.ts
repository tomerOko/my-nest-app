import { Controller, Get, Post } from '@nestjs/common';
import { MongoDBProvider } from 'src/config/mongo';

@Controller('mongo')
export class TestMongoController {
  constructor(private readonly mongodbProvider: MongoDBProvider) {}

  @Get()
  async insertOne() {
    const db = this.mongodbProvider.getDb();
    const collection = db.collection('test');
    const result = await collection.find({}).toArray();
    return result;
  }

  @Post()
  async set() {
    const db = this.mongodbProvider.getDb();
    const collection = db.collection('test');
    const nowAsString = new Date().toISOString();
    const result = await collection.insertOne({
      time: nowAsString,
      message: `Hello MongoDB! ${nowAsString}`,
    });
    return result;
  }
}
