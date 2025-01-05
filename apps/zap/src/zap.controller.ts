import { Controller, Get } from '@nestjs/common';
import { ZapService } from './zap.service';

@Controller()
export class ZapController {
  constructor(private readonly zapService: ZapService) {}

  @Get()
  getHello(): string {
    return this.zapService.getHello();
  }
}
