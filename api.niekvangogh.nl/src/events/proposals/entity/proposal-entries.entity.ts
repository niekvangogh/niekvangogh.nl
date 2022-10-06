import { Event } from "../../entity/event.entity";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProposalEntry {

    @PrimaryColumn()
    public user: any;

    @PrimaryColumn()
    public event: Event;

    @Column()
    public status: string;

    @Column({ nullable: true })
    public comment: string;

}