import { Msg } from "../../../types/msg";
import { AccAddress } from "../../../types/address/acc-address";
import { ValAddress } from "../../../types/address/val-address";
export class MsgWithdrawDelegatorReward extends Msg {
    /**
     *
     * @param delegator_address
     * @param validator_address
     */
    constructor(delegator_address, validator_address) {
        super();
        this.delegator_address = delegator_address;
        this.validator_address = validator_address;
    }
    /**
     *
     * @param value
     */
    static fromJSON(value) {
        return new MsgWithdrawDelegatorReward(AccAddress.fromBech32(value.delegator_address), ValAddress.fromBech32(value.validator_address));
    }
}
