import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Event {

    @PrimaryGeneratedColumn('uuid')
    public uuid: string;

    @Column()
    public name: string;

    
}