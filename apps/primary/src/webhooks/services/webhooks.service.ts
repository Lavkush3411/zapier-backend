import { Injectable } from '@nestjs/common';
import { WebhooksRepository } from './webhooks.repository';

@Injectable()
export class WebhooksService {
  constructor(private readonly webhooks: WebhooksRepository) {}
  createZapRun(userId: string, zapId: string) {
    return this.webhooks.createZapRun(userId, zapId);
  }
}
