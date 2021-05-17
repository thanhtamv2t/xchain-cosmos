import { Msg } from "../../../types/msg";
import { AccAddress } from "../../../types/address/acc-address";
export class MsgSubmitProposalBase extends Msg {
    /**
     * @param initial_deposit
     * @param proposer
     */
    constructor(initial_deposit, proposer) {
        super();
        this.initial_deposit = initial_deposit;
        this.proposer = proposer;
    }
    /**
     * @param value
     */
    static fromJSON(value) {
        return new MsgSubmitProposalBase(value.initial_deposit, AccAddress.fromBech32(value.proposer));
    }
}
