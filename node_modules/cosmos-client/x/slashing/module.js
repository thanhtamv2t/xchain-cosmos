import { SlashingApi } from "../../api";
import { codec } from "../../codec";
export function parametersGet(sdk) {
    return sdk.wrapResponseWithHeight(new SlashingApi(undefined, sdk.url).slashingParametersGet());
}
export function signingInfosGet(sdk, page, limit) {
    return sdk.wrapResponseWithHeight(new SlashingApi(undefined, sdk.url).slashingSigningInfosGet(page, limit));
}
export function validatorsValidatorAddrUnjailPost(sdk, validator, req) {
    return new SlashingApi(undefined, sdk.url)
        .slashingValidatorsValidatorAddrUnjailPost(validator.toBech32(), req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
