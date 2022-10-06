import { DateComment } from "src/events/proposals/types";

export interface CreateProposalOptions {
    name: string;
    dates: DateComment[];
}