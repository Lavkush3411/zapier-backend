import { Module } from '@nestjs/common';
import { GithubController } from './github.controller';
import { GithubService } from './services/github.service';

@Module({
  controllers: [GithubController],
  providers: [GithubService],
})
export class GithubModule {}
