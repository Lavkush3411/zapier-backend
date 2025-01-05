import { Module } from '@nestjs/common';
import { ZapController } from './zap.controller';
import { ZapService } from './zap.service';

@Module({
  imports: [],
  controllers: [ZapController],
  providers: [ZapService],
})
export class ZapModule {}
