import { Module } from '@nestjs/common';
import { WebhooksModule } from './webhooks/webhooks.module';
import { PrismaModule } from '@app/prisma';
import { ZapModule } from './zap/zap.module';

@Module({
  imports: [WebhooksModule, PrismaModule, ZapModule],
})
export class AppModule {}
