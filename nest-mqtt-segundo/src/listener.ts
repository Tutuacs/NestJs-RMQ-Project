import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { env } from 'process';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [`${env.RMQ_URL}`],
      queue: 'main_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
  app.listen();
}
bootstrap();
