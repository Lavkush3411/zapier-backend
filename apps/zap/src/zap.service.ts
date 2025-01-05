import { Injectable } from '@nestjs/common';

@Injectable()
export class ZapService {
  getHello(): string {
    return 'Hello World!';
  }
}
