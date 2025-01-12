import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka, Producer } from 'kafkajs';
import { KAFKA_BROKER } from 'libs/constansts/kafka.constants';

@Injectable()
export class KafkaService implements OnModuleInit {
  private kafka: Kafka;
  producer: Producer;
  async onModuleInit() {
    this.kafka = new Kafka({
      brokers: KAFKA_BROKER,
    });

    this.producer = this.kafka.producer();

    await Promise.all([this.producer.connect()]);
  }

  // async onModuleDestroy() {
  //   try {
  //     if (this.producer) {
  //       await this.producer.disconnect();
  //       console.log('Kafka producer disconnected');
  //     }
  //   } catch (error) {
  //     console.error('Error disconnecting Kafka producer:', error);
  //   }
  // }

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
