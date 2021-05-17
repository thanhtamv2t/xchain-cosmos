import { Msg } from "../../../types/msg";
import { AccAddress } from "../../../types/address/acc-address";
import { ValAddress } from "../../../types/address/val-address";
export class MsgBeginRedelegate extends Msg {
    /**
     *
     * @param delegator_address
     * @param validator_src_address
     * @param validator_dst_address
     * @param amount
     */
    constructor(delegator_address, validator_src_address, validator_dst_address, amount) {
        super();
        this.delegator_address = delegator_address;
        this.validator_src_address = validator_src_address;
        this.validator_dst_address = validator_dst_address;
        this.amount = amount;
    }
    /**
     *
     * @param value
     */
    static fromJSON(value) {
        return new MsgBeginRedelegate(AccAddress.fromBech32(value.delegator_address), ValAddress.fromBech32(value.validator_src_address), ValAddress.fromBech32(value.validator_dst_address), value.amount);
    }
}
