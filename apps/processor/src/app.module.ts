import { Module } from '@nestjs/common';
import { PrismaModule } from '@app/prisma';
import { KafkaModule } from '@app/kafka';
import { ProcessorService } from './processor.service';

@Module({
  imports: [PrismaModule, KafkaModule],
  controllers: [],
  providers: [ProcessorService],
})
export class AppModule {}
