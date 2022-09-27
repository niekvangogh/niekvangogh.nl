import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { InvitesModule } from './invites/invites.module';

@Module({
  controllers: [EventsController],
  providers: [EventsService],
  imports: [InvitesModule]
})
export class EventsModule {}
