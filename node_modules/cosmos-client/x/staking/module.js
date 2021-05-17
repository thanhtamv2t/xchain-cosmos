import { StakingApi, } from "../../api";
import { codec } from "../../codec";
export function delegatorsDelegatorAddrDelegationsGet(sdk, address) {
    return sdk.wrapResponseWithHeight(new StakingApi(undefined, sdk.url).stakingDelegatorsDelegatorAddrDelegationsGet(address.toBech32()));
}
export function delegatorsDelegatorAddrDelegationsPost(sdk, delegator, req) {
    return new StakingApi(undefined, sdk.url)
        .stakingDelegatorsDelegatorAddrDelegationsPost(delegator.toBech32(), req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function delegatorsDelegatorAddrDelegationsValidatorAddrGet(sdk, delegator, validator) {
    return sdk.wrapResponseWithHeight(new StakingApi(undefined, sdk.url).stakingDelegatorsDelegatorAddrDelegationsValidatorAddrGet(delegator.toBech32(), validator.toBech32()));
}
export function delegatorsDelegatorAddrRedelegationsPost(sdk, delegator, req) {
    return new StakingApi(undefined, sdk.url)
        .stakingDelegatorsDelegatorAddrRedelegationsPost(delegator.toBech32(), req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function delegatorsDelegatorAddrUnbondingDelegationsGet(sdk, delegator) {
    return sdk.wrapResponseWithHeight(new StakingApi(undefined, sdk.url).stakingDelegatorsDelegatorAddrUnbondingDelegationsGet(delegator.toBech32()));
}
export function delegatorsDelegatorAddrUnbondingDelegationsPost(sdk, delegator, req) {
    return new StakingApi(undefined, sdk.url)
        .stakingDelegatorsDelegatorAddrUnbondingDelegationsPost(delegator.toBech32(), req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function delegatorsDelegatorAddrUnbondingDelegationsValidatorAddrGet(sdk, delegator, validator) {
    return sdk.wrapResponseWithHeight(new StakingApi(undefined, sdk.url).stakingDelegatorsDelegatorAddrUnbondingDelegationsValidatorAddrGet(delegator.toBech32(), validator.toBech32()));
}
export function delegatorsDelegatorAddrValidatorsGet(sdk, delegator) {
    return sdk.wrapResponseWithHeight(new StakingApi(undefined, sdk.url).stakingDelegatorsDelegatorAddrValidatorsGet(delegator.toBech32()));
}
export function delegatorsDelegatorAddrValidatorsValidatorAddrGet(sdk, delegator, validator) {
    return sdk.wrapResponseWithHeight(new StakingApi(undefined, sdk.url).stakingDelegatorsDelegatorAddrValidatorsValidatorAddrGet(delegator.toBech32(), validator.toBech32()));
}
export function parametersGet(sdk) {
    return sdk.wrapResponseWithHeight(new StakingApi(undefined, sdk.url).stakingParametersGet());
}
export function poolGet(sdk) {
    return sdk.wrapResponseWithHeight(new StakingApi(undefined, sdk.url).stakingPoolGet());
}
export function redelegationsGet(sdk, delegator, validatorFrom, validatorTo) {
    return sdk.wrapResponseWithHeight(new StakingApi(undefined, sdk.url).stakingRedelegationsGet(delegator === null || delegator === void 0 ? void 0 : delegator.toBech32(), validatorFrom === null || validatorFrom === void 0 ? void 0 : validatorFrom.toBech32(), validatorTo === null || validatorTo === void 0 ? void 0 : validatorTo.toBech32()));
}
export function validatorsGet(sdk, status, page, limit) {
    return sdk.wrapResponseWithHeight(new StakingApi(undefined, sdk.url).stakingValidatorsGet(status, page, limit));
}
export function validatorsValidatorAddrDelegationsGet(sdk, validator) {
    return sdk.wrapResponseWithHeight(new StakingApi(undefined, sdk.url).stakingValidatorsValidatorAddrDelegationsGet(validator.toBech32()));
}
export function validatorsValidatorAddrGet(sdk, validator) {
    return sdk.wrapResponseWithHeight(new StakingApi(undefined, sdk.url).stakingValidatorsValidatorAddrGet(validator.toBech32()));
}
export function validatorsValidatorAddrUnbondingDelegationsGet(sdk, validator) {
    return sdk.wrapResponseWithHeight(new StakingApi(undefined, sdk.url).stakingValidatorsValidatorAddrUnbondingDelegationsGet(validator.toBech32()));
}
