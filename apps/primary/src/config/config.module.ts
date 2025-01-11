import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [ConfigService],
})
export class ConfigModule {
  static forRoot(option: string) {
    return {
      module: ConfigModule,
      providers: [{ provide: 'option', useValue: option }, ConfigService],
      exports: [ConfigService],
    };
  }
}
