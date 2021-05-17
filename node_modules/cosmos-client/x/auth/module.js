import { StdTx } from "./types/std-tx";
import { AuthApi, TransactionsApi, } from "../../api";
import { codec } from "../../codec";
/**
 *
 * @param privKey
 * @param stdTx
 * @param accountNumber
 * @param sequence
 */
export function signStdTx(sdk, privKey, stdTx, accountNumber, sequence) {
    const signBytes = stdTx.getSignBytes(sdk.chainID, accountNumber, sequence);
    const signature = {
        pub_key: privKey.getPubKey(),
        signature: privKey.sign(signBytes).toString("base64"),
    };
    const newStdTx = new StdTx(stdTx.msg, stdTx.fee, stdTx.signatures ? [...stdTx.signatures, signature] : [signature], stdTx.memo);
    return newStdTx;
}
export function accountsAddressGet(sdk, address) {
    return sdk
        .wrapResponseWithHeight(new AuthApi(undefined, sdk.url).authAccountsAddressGet(address.toBech32()))
        .then((res) => {
        res.data.result = codec.fromJSONString(JSON.stringify(res.data.result));
        return res;
    });
}
export function txsDecodePost(sdk, req) {
    return new TransactionsApi(undefined, sdk.url)
        .txsDecodePost(req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function txsEncodePost(sdk, req) {
    return new TransactionsApi(undefined, sdk.url)
        .txsEncodePost(req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function txsGet(sdk, messageAction, messageSender, page, limit, txMinHeight, txMaxHeight) {
    return new TransactionsApi(undefined, sdk.url)
        .txsGet(messageAction, messageSender, page, limit, txMinHeight, txMaxHeight)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function txsHashGet(sdk, hash) {
    return new TransactionsApi(undefined, sdk.url)
        .txsHashGet(hash)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function txsPost(sdk, tx, mode) {
    return new TransactionsApi(undefined, sdk.url).txsPost({
        tx: JSON.parse(codec.toJSONString(tx)).value,
        mode: mode,
    });
}
