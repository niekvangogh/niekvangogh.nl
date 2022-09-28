import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entity/event.entity';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { InvitesModule } from './invites/invites.module';
import { ProposalsModule } from './proposals/proposals.module';

@Module({
  controllers: [EventsController],
  providers: [EventsService],
  imports: [
    InvitesModule,
    TypeOrmModule.forFeature([Event]),
    ProposalsModule
  ]
})
export class EventsModule { }
