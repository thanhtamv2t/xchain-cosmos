import { Msg } from "../../../types/msg";
import { AccAddress } from "../../../types/address/acc-address";
export class MsgVote extends Msg {
    /**
     * @param proposal_id
     * @param voter
     * @param option
     */
    constructor(proposal_id, voter, option) {
        super();
        this.proposal_id = proposal_id;
        this.voter = voter;
        this.option = option;
    }
    /**
     * @param value
     */
    static fromJSON(value) {
        return new MsgVote(value.proposal_id, AccAddress.fromBech32(value.voter), value.option);
    }
}
