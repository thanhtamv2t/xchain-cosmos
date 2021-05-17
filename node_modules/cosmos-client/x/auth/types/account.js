import { AccAddress } from "../../../types/address/acc-address";
/**
 *
 */
export class BaseAccount {
    /**
     *
     * @param address
     * @param public_key
     * @param coins
     * @param account_number
     * @param sequence
     */
    constructor(address, public_key, coins = [], account_number = 0, sequence = 0) {
        this.address = address;
        this.public_key = public_key;
        this.coins = coins;
        this.account_number = account_number;
        this.sequence = sequence;
    }
    /**
     *
     * @param value
     */
    static fromJSON(value) {
        return new BaseAccount(!!value.address ? AccAddress.fromBech32(value.address) : undefined, !!value.public_key ? value.public_key : undefined, value.coins, value.account_number, value.sequence);
    }
}
