import { Msg } from "../../../types/msg";
import { AccAddress } from "../../../types/address/acc-address";
import { ValAddress } from "../../../types/address/val-address";
export class MsgDelegate extends Msg {
    /**
     * @param delegator_address
     * @param validator_address
     * @param amount
     */
    constructor(delegator_address, validator_address, amount) {
        super();
        this.delegator_address = delegator_address;
        this.validator_address = validator_address;
        this.amount = amount;
    }
    /**
     *
     * @param value
     */
    static fromJSON(value) {
        return new MsgDelegate(AccAddress.fromBech32(value.delegator_address), ValAddress.fromBech32(value.validator_address), value.amount);
    }
}
