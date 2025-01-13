import { Body, Controller, Post } from '@nestjs/common';
import { ZapService } from './services/zap.service';
import { CreateZapDto } from './dtos/zap-create.dto';

@Controller('zap')
export class ZapController {
  constructor(private readonly zapService: ZapService) {}
  @Post()
  createZap(@Body() createZapDto: CreateZapDto) {
    return this.zapService.create(createZapDto);
  }
}
