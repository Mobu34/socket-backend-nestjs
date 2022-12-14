import { Module } from '@nestjs/common';
import { EventsGateway } from '../events/events.gateway';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  providers: [AppService, EventsGateway],
})
export class AppModule {}
