import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
    UsersModule,
    EventsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
