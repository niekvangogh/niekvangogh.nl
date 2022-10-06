import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Proposal } from "./proposal.entity";

@Entity()
export class ProposalDate {

    @PrimaryGeneratedColumn('uuid')
    public uuid: string;

    @ManyToOne(() => Proposal, proposal => proposal.dateProposals)
    public proposal: Proposal;

    @Column()
    public dateStart: Date;

    @Column({ nullable: true })
    public dateEnd: Date;

    @Column({ nullable: true })
    public comment: string;
}