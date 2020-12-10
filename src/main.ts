import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import nms from './media-server';

// TODO: add configuration mechanism https://docs.nestjs.com/techniques/configuration
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  nms.run();
  await app.listen(3000);
}
bootstrap();
