import { AccAddress } from "../../../types/address/acc-address";
export class MsgEditNFTMetadata {
    /**
     * @param sender
     * @param id
     * @param denom
     * @param token_uri
     */
    constructor(sender, id, denom, token_uri) {
        this.sender = sender;
        this.id = id;
        this.denom = denom;
        this.token_uri = token_uri;
    }
    static fromJSON(value) {
        return new MsgEditNFTMetadata(AccAddress.fromBech32(value.sender), value.id, value.denom, value.token_uri);
    }
}
