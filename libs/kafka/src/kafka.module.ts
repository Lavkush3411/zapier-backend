import { Module } from '@nestjs/common';
import { KafkaService } from './services/kafka.service';
import { KafkaConsumerService } from './services/kafka.consumer.service';

@Module({
  providers: [KafkaService, KafkaConsumerService],
  exports: [KafkaService, KafkaConsumerService],
})
export class KafkaModule {}
