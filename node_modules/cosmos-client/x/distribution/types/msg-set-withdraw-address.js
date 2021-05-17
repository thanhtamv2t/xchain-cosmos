import { Msg } from "../../../types/msg";
import { AccAddress } from "../../../types/address/acc-address";
export class MsgSetWithdrawAddress extends Msg {
    /**
     * @param delegator_address
     * @param withdraw_address
     */
    constructor(delegator_address, withdraw_address) {
        super();
        this.delegator_address = delegator_address;
        this.withdraw_address = withdraw_address;
    }
    /**
     *
     * @param value
     */
    static fromJSON(value) {
        return new MsgSetWithdrawAddress(AccAddress.fromBech32(value.delegator_address), AccAddress.fromBech32(value.withdraw_address));
    }
}
