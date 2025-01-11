import { Injectable, OnModuleInit } from '@nestjs/common';
import { KafkaService } from '../../../libs/kafka/src/services/kafka.service';
import { PrismaService } from '@app/prisma';

@Injectable()
export class QueueService implements OnModuleInit {
  constructor(
    private readonly kafka: KafkaService,
    private readonly prisma: PrismaService,
  ) {}

  async onModuleInit() {
    while (1) {
      const zaps = await this.prisma.zapRunOutBox.findMany({ take: 10 });
      console.log(zaps);
      this.kafka.sendMessage(zaps.map((zap) => zap.zapId));
      await new Promise((resolve) => setTimeout(() => resolve(true), 1000));
    }
  }
}
