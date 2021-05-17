import { SupplyApi } from "../../api";
export function totalDenominationGet(sdk, denomination) {
    return sdk.wrapResponseWithHeight(new SupplyApi(undefined, sdk.url).supplyTotalDenominationGet(denomination));
}
export function totalGet(sdk) {
    return sdk.wrapResponseWithHeight(new SupplyApi(undefined, sdk.url).supplyTotalGet());
}
