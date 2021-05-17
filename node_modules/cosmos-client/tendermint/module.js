import { TendermintRPCApi } from "../api";
export function blocksHeightGet(sdk, height) {
    return new TendermintRPCApi(undefined, sdk.url).blocksHeightGet(height);
}
export function blocksLatestGet(sdk) {
    return new TendermintRPCApi(undefined, sdk.url).blocksLatestGet();
}
export function syncingGet(sdk) {
    return new TendermintRPCApi(undefined, sdk.url).syncingGet();
}
export function validatorsetsHeightGet(sdk, height) {
    return new TendermintRPCApi(undefined, sdk.url).validatorsetsHeightGet(height);
}
export function validatorsetsLatestGet(sdk) {
    return new TendermintRPCApi(undefined, sdk.url).validatorsetsLatestGet();
}
