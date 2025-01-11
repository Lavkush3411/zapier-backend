import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Consumer, Kafka } from 'kafkajs';
import { KAFKA_BROKER } from 'libs/constansts/kafka.constants';

@Injectable()
export class KafkaConsumerService implements OnModuleInit, OnModuleDestroy {
  consumer: Consumer;
  private kafka: Kafka;

  async onModuleInit() {
    this.kafka = new Kafka({
      brokers: KAFKA_BROKER,
    });
    this.consumer = this.kafka.consumer({ groupId: 'main' });
    await this.consumer.connect();
  }

  async subScribeToTopic(onMessage: (message: any) => void) {
    await this.consumer.subscribe({
      topic: 'first_topic',
      fromBeginning: true,
    });

    await this.consumer.run({
      eachMessage: async ({ message, topic, partition }) => {
        const value = message.value?.toString();
        onMessage({ topic, partition, value });
      },
    });
  }

  async onModuleDestroy() {
    await this.consumer.disconnect();
  }
}
