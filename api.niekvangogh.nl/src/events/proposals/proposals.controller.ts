import { Body, Controller, Post } from '@nestjs/common';
import { CreateProposalRequest } from './dto/request/create-proposal.request';
import { Proposal } from './entity/proposal.entity';
import { ProposalsService } from './proposals.service';

@Controller('proposals')
export class ProposalsController {

    constructor(
        private readonly proposalsService: ProposalsService,
    ) { }

    @Post()
    public async createProposal(
        @Body() dto: CreateProposalRequest
    ): Promise<Proposal> {
        return this.proposalsService.createProposal(dto);
    }
}
