import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  constructor(@Inject('option') private readonly option: string) {
    console.log(option);
  }
}
