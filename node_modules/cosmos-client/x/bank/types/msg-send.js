import { AccAddress } from "../../../types/address/acc-address";
import { Msg } from "../../../types/msg";
/**
 *
 */
export class MsgSend extends Msg {
    /**
     *
     * @param from_address
     * @param to_address
     * @param amount
     */
    constructor(from_address, to_address, amount) {
        super();
        this.from_address = from_address;
        this.to_address = to_address;
        this.amount = amount;
    }
    /**
     *
     * @param value
     */
    static fromJSON(value) {
        return new MsgSend(AccAddress.fromBech32(value.from_address), AccAddress.fromBech32(value.to_address), value.amount);
    }
}
