import { AccAddress } from "../../../types/address/acc-address";
export class MsgTransferNFT {
    constructor(sender, recipient, denom, id) {
        this.sender = sender;
        this.recipient = recipient;
        this.denom = denom;
        this.id = id;
    }
    static fromJSON(value) {
        return new MsgTransferNFT(AccAddress.fromBech32(value.sender), AccAddress.fromBech32(value.recipient), value.denom, value.id);
    }
}
