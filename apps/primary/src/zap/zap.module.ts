import { Module } from '@nestjs/common';
import { ZapController } from './zap.controller';
import { ZapService } from './services/zap.service';

@Module({
  controllers: [ZapController],
  providers: [ZapService],
})
export class ZapModule {}
