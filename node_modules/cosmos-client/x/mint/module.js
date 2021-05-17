import { MintApi } from "../../api";
export function annualProvisionsGet(sdk) {
    return sdk.wrapResponseWithHeight(new MintApi(undefined, sdk.url).mintingAnnualProvisionsGet());
}
export function inflationGet(sdk) {
    return sdk.wrapResponseWithHeight(new MintApi(undefined, sdk.url).mintingInflationGet());
}
export function parametersGet(sdk) {
    return sdk.wrapResponseWithHeight(new MintApi(undefined, sdk.url).mintingParametersGet());
}
