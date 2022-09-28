import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventOptions } from './dto/options/create-event.options';
import { Event } from './entity/event.entity';

@Injectable()
export class EventsService {

    constructor(
        @InjectRepository(Event)
        private readonly eventsRepository: Repository<Event>,
    ) { }

    public async createEvent(options: CreateEventOptions): Promise<Event> {
        const event = new Event();
        return this.eventsRepository.save(event);
    }

    public getEvent(uuid: string): Promise<Event> {
        return this.eventsRepository.findOne({ where: { uuid } });
    }
}
