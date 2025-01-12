import { Injectable, OnModuleInit } from '@nestjs/common';
import { Consumer, Kafka } from 'kafkajs';
import { KAFKA_BROKER } from 'libs/constansts/kafka.constants';

@Injectable()
export class KafkaConsumerService implements OnModuleInit {
  consumer: Consumer;
  private kafka: Kafka;

  async onModuleInit() {
    this.kafka = new Kafka({
      brokers: KAFKA_BROKER,
    });
    this.consumer = this.kafka.consumer({ groupId: 'main' });
    await this.consumer.connect();
  }

  async subScribeToTopic(onMessage: (message: any) => Promise<void>) {
    await this.consumer.subscribe({
      topic: 'first_topic',
      fromBeginning: true,
    });

    await this.consumer.run({
      eachMessage: async ({ message, topic, partition }) => {
        await onMessage({ topic, partition, message });
      },
      autoCommit: false,
    });
  }

  async commitMessage(offset: string) {
    await this.consumer.commitOffsets([
      { topic: 'first_topic', offset, partition: 0 },
    ]);
  }

  // async onModuleDestroy() {
  //   await this.consumer.disconnect();
  // }
}
