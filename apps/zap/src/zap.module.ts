import { Module } from '@nestjs/common';
import { WebhooksModule } from './webhooks/webhooks.module';
import { PrismaModule } from '@app/prisma';

@Module({
  imports: [WebhooksModule, PrismaModule],
})
export class ZapModule {}
