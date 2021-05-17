import { Msg } from "../../../types/msg";
import { AccAddress } from "../../../types/address/acc-address";
export class MsgDeposit extends Msg {
    /**
     * @param proposal_id
     * @param depositor
     * @param amount
     */
    constructor(proposal_id, depositor, amount) {
        super();
        this.proposal_id = proposal_id;
        this.depositor = depositor;
        this.amount = amount;
    }
    /**
     *
     * @param value
     */
    static fromJSON(value) {
        return new MsgDeposit(value.proposal_id, AccAddress.fromBech32(value.depositer), value.amount);
    }
}
