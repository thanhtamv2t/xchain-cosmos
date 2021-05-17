import { AccAddress } from "../../../types/address/acc-address";
export class MsgMintNFT {
    /**
     * @param sender
     * @param recipient
     * @param id
     * @param denom
     * @param token_uri
     */
    constructor(sender, recipient, id, denom, token_uri) {
        this.sender = sender;
        this.recipient = recipient;
        this.id = id;
        this.denom = denom;
        this.token_uri = token_uri;
    }
    static fromJSON(value) {
        return new MsgMintNFT(AccAddress.fromBech32(value.sender ? value.sender : value.recipient), AccAddress.fromBech32(value.recipient), value.id, value.denom, value.token_uri);
    }
}
