import { Msg } from "../../../types/msg";
import { AccAddress } from "../../../types/address/acc-address";
export class MsgSubmitProposal extends Msg {
    /**
     * @param content
     * @param initial_deposit
     * @param proposer
     */
    constructor(content, initial_deposit, proposer) {
        super();
        this.content = content;
        this.initial_deposit = initial_deposit;
        this.proposer = proposer;
    }
    /**
     * @param value
     */
    static fromJSON(value) {
        return new MsgSubmitProposal(value.content, value.initial_deposit, AccAddress.fromBech32(value.proposer));
    }
}
