import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Kafka, Producer } from 'kafkajs';

@Injectable()
export class KafkaService implements OnModuleInit, OnModuleDestroy {
  private kafka: Kafka;
  producer: Producer;
  async onModuleInit() {
    this.kafka = new Kafka({
      clientId: 'kafka',
      brokers: ['localhost:9092'],
    });

    this.producer = this.kafka.producer();

    await this.producer.connect();
  }

  async onModuleDestroy() {
    try {
      if (this.producer) {
        await this.producer.disconnect();
        console.log('Kafka producer disconnected');
      }
    } catch (error) {
      console.error('Error disconnecting Kafka producer:', error);
    }
  }

  async sendMessage(messages: string[]) {
    console.log('message received');
    await this.producer.send({
      topic: 'first_topic',
      messages: messages.map((message) => ({
        value: message,
      })),
    });
    console.log('message sent');
  }
}
