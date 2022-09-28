import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateEventDto } from './dto/request/create-event.dto';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {

    constructor(
        private readonly eventsService: EventsService,
    ) { }

    @Post()
    public async createEvent(
        @Body() dto: CreateEventDto,
    ) {
        const event = await this.eventsService.createEvent(dto);

        return event;
    }

    @Get()
    public getEvents() {

    }

    @Get()
    public getAllEvents() {

    }
}
