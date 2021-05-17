import { Tx } from "../../../types/tx";
import { codec } from "../../../codec";
import { canonicalizeJSON } from "./canonicalize-json";
if (typeof process !== "undefined" &&
    process.versions &&
    process.versions.node) {
    global.TextEncoder = require("util").TextEncoder;
}
/**
 *
 */
export class StdTx extends Tx {
    /**
     *
     * @param msg
     * @param fee
     * @param signatures
     * @param memo
     */
    constructor(msg, fee, signatures, memo) {
        super();
        this.msg = msg;
        this.fee = fee;
        this.signatures = signatures;
        this.memo = memo;
    }
    getSignBytes(chainID, accountNumber, sequence) {
        const stdSignMsg = {
            account_number: accountNumber,
            chain_id: chainID,
            fee: this.fee,
            memo: this.memo,
            msgs: this.msg,
            sequence,
        };
        const obj = JSON.parse(codec.toJSONString(stdSignMsg));
        const canonicalized = canonicalizeJSON(obj);
        const encoder = new TextEncoder();
        const encoded = encoder.encode(JSON.stringify(canonicalized));
        return Buffer.from(encoded);
    }
    static fromJSON(value) {
        return new StdTx(value.msg, value.fee, value.signatures, value.memo);
    }
}
