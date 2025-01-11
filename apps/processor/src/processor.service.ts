import { KafkaConsumerService } from '@app/kafka';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class ProcessorService implements OnModuleInit {
  constructor(private readonly consumer: KafkaConsumerService) {}
  onModuleInit() {
    this.consumer.subScribeToTopic(({ value, topic }) => {
      console.log('message', value, topic);
    });
  }
}
