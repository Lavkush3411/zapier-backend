import { PrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubRepository {
  constructor(private readonly prisma: PrismaService) {}

  createEntryInDb() {
    return this.prisma.$transaction([
      this.prisma.zapRun.create({ data: { zapId: '', metaData: '' } }),
    ]);
  }
}
