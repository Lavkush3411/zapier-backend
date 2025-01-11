import { PrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhooksRepository {
  constructor(private readonly prisma: PrismaService) {}

  createZapRun(userId: string, zapId: string) {
    return this.prisma.$transaction([
      this.prisma.zapRun.create({ data: { zapId, metaData: 'do something ' } }),
      this.prisma.zapRunOutBox.create({
        data: { zapId, metaData: 'do something' },
      }),
    ]);
  }
}
