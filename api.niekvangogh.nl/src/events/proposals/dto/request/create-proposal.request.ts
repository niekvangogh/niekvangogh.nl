import { DateComment } from "../../types";

export class CreateProposalRequest {
    public name: string;
    public dates: DateComment[];
}