import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProposalDate } from "./proposal-date.entity";

@Entity()
export class Proposal {

    @PrimaryGeneratedColumn('uuid')
    public uuid: string;

    @Column()
    public name: string;

    @OneToMany(() => ProposalDate, dateComment => dateComment.proposal, { cascade: true })
    public dateProposals: ProposalDate[];

}