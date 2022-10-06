import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProposalOptions } from './dto/request/options/create-proposal.options';
import { ProposalDate } from './entity/proposal-date.entity';
import { Proposal } from './entity/proposal.entity';
import { DateComment } from './types';

@Injectable()
export class ProposalsService {

    constructor(
        @InjectRepository(Proposal)
        private readonly proposalsRepository: Repository<Proposal>,
    ) { }

    public async createProposal(options: CreateProposalOptions): Promise<Proposal> {
        const proposal = new Proposal();
        proposal.name = options.name;
        proposal.dateProposals = options.dates.map((date: DateComment) => {
            const comment = new ProposalDate;
            comment.dateStart = date.dateStart;
            comment.dateEnd = date.dateEnd;
            comment.comment = date.comment;
            return comment;
        })
        return this.proposalsRepository.save(proposal);
    }
}
