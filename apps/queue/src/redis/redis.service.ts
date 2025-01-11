import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private redisClient: Redis;
  private isProcessing = true;
  async onModuleInit() {
    console.log('redis service');
    this.redisClient = new Redis({
      host: 'localhost',
      port: 6379,
    });
    this.startQueueProcessing('queue');
  }
  async onModuleDestroy() {
    this.isProcessing = false;
    await this.redisClient.quit();
  }

  async startQueueProcessing(queueName: string) {
    console.log('Starting queue processing...');
    while (this.isProcessing) {
      const task = await this.redisClient.lpop(queueName);
      console.log(task);
      await new Promise((resolve) => setTimeout(() => resolve(true), 2000));
    }
  }
}
