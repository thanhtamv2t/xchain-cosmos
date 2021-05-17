import { Msg } from "../../../types/msg";
import { ValAddress } from "../../../types/address/val-address";
export class MsgUnjail extends Msg {
    /**
     * @param address
     */
    constructor(address) {
        super();
        this.address = address;
    }
    /**
     *
     * @param value
     */
    static fromJSON(value) {
        return new MsgUnjail(ValAddress.fromBech32(value.address));
    }
}
