import { KafkaConsumerService } from '@app/kafka';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class ProcessorService implements OnModuleInit {
  constructor(private readonly consumer: KafkaConsumerService) {}
  onModuleInit() {
    this.consumer.subScribeToTopic(async ({ message, topic, partition }) => {
      await this.consumer.commitMessage(String(parseInt(message.offset) + 1));
      console.log(
        'message',
        message.offset,
        message.value.toString(),
        topic,
        partition,
      );
    });
  }
}
