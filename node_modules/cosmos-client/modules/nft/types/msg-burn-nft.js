import { AccAddress } from "../../../types/address/acc-address";
export class MsgBurnNFT {
    /**
     * @param sender
     * @param id
     * @param denom
     */
    constructor(sender, id, denom) {
        this.sender = sender;
        this.id = id;
        this.denom = denom;
    }
    static fromJSON(value) {
        return new MsgBurnNFT(AccAddress.fromBech32(value.sender), value.id, value.denom);
    }
}
