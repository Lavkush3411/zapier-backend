import { Controller, Param, Post } from '@nestjs/common';
import { GithubService } from './services/github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly gitHub: GithubService) {}
  @Post('/:userId/:zapId')
  createEntryInDb(
    @Param('userId') userId: string,
    @Param('zapId') zapId: string,
  ) {
    return this.createEntryInDb(userId, zapId);
  }
}
