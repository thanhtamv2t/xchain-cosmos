import { Msg } from "../../../types/msg";
import { ValAddress } from "../../../types/address/val-address";
export class MsgWithdrawValidatorCommission extends Msg {
    /**
     * @param validator_address
     */
    constructor(validator_address) {
        super();
        this.validator_address = validator_address;
    }
    /**
     *
     * @param value
     */
    static fromJSON(value) {
        return new MsgWithdrawValidatorCommission(ValAddress.fromBech32(value.validator_address));
    }
}
