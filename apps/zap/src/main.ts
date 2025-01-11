import { NestFactory } from '@nestjs/core';
import { ZapModule } from './zap.module';

async function bootstrap() {
  const app = await NestFactory.create(ZapModule);
  await app.listen(process.env.port ?? 3003);
}
bootstrap();
