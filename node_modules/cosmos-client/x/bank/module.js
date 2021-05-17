import { BankApi } from "../../api";
import { codec } from "../../codec";
export function balancesAddressGet(sdk, address) {
    return sdk.wrapResponseWithHeight(new BankApi(undefined, sdk.url).bankBalancesAddressGet(address.toBech32()));
}
export function accountsAddressTransfersPost(sdk, address, req) {
    return new BankApi(undefined, sdk.url)
        .bankAccountsAddressTransfersPost(address.toBech32(), req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
