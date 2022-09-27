import { Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Invite {
    
    @PrimaryGeneratedColumn('uuid')
    public uuid: string;
}