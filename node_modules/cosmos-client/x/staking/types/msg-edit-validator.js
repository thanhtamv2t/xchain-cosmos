import { Msg } from "../../../types/msg";
import { ValAddress } from "../../../types/address/val-address";
export class MsgEditValidator extends Msg {
    /**
     * @param description
     * @param validator_address
     * @param commission_rate
     * @param min_self_delegation
     */
    constructor(description, validator_address, committion_rate, min_self_delegation) {
        super();
        this.description = description;
        this.validator_address = validator_address;
        this.committion_rate = committion_rate;
        this.min_self_delegation = min_self_delegation;
    }
    /**
     *
     * @param value
     */
    static fromJSON(value) {
        return new MsgEditValidator(value.description, ValAddress.fromBech32(value.validator_address), value.commission_rate, value.min_self_delegation);
    }
}
