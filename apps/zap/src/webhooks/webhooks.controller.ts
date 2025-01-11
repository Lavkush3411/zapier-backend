import { Controller, Param, Post } from '@nestjs/common';
import { ZapCreateParamDto } from './dtos/zap-create.dto';
import { WebhooksService } from './services/webhooks.service';

@Controller('webhooks')
export class WebhooksController {
  constructor(private readonly webhookService: WebhooksService) {}
  /**
   *
   * @param createZapParamDto
   * @returns creates a zap run and zap run out box when webhook is hit from github.
   */
  @Post('/catch/:userId/:zapId')
  createZapRun(@Param() createZapParamDto: ZapCreateParamDto) {
    return this.webhookService.createZapRun(
      createZapParamDto.userId,
      createZapParamDto.zapId,
    );
  }
}
