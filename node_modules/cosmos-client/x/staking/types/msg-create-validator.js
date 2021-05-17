import { Msg } from "../../../types/msg";
import { AccAddress } from "../../../types/address/acc-address";
import { ValAddress } from "../../../types/address/val-address";
export class MsgCreateValidator extends Msg {
    /**
     * @param description
     * @param commission
     * @param min_self_delegation
     * @param delegator_address
     * @param validator_address
     * @param pubkey
     * @param value
     */
    constructor(description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value) {
        super();
        this.description = description;
        this.commission = commission;
        this.min_self_delegation = min_self_delegation;
        this.delegator_address = delegator_address;
        this.validator_address = validator_address;
        this.pubkey = pubkey;
        this.value = value;
    }
    /**
     *
     * @param value
     */
    static fromJSON(value) {
        return new MsgCreateValidator(value.description, value.commission, value.min_self_delegation, AccAddress.fromBech32(value.delegator_address), ValAddress.fromBech32(value.validator_address), value.pubkey, value.value);
    }
}
