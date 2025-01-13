import { PrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import { CreateZapDto } from '../dtos/zap-create.dto';

@Injectable()
export class ZapService {
  constructor(private readonly prisma: PrismaService) {}

  create(createZapDto: CreateZapDto) {
    return this.prisma.zap.create({
      data: { ...createZapDto },
    });
  }
}
