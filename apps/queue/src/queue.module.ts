import { Module } from '@nestjs/common';
import { QueueService } from './queue.service';
import { KafkaModule } from '@app/kafka/index';
import { PrismaModule } from '@app/prisma';

@Module({
  imports: [KafkaModule, PrismaModule],
  providers: [QueueService],
})
export class QueueModule {}
