import { DistributionApi, } from "../../api";
import { codec } from "../../codec";
export function communityPoolGet(sdk) {
    return sdk.wrapResponseWithHeight(new DistributionApi(undefined, sdk.url).distributionCommunityPoolGet());
}
export function delegatorsDelegatorAddrRewardsGet(sdk, delegator) {
    return sdk.wrapResponseWithHeight(new DistributionApi(undefined, sdk.url).distributionDelegatorsDelegatorAddrRewardsGet(delegator.toBech32()));
}
export function delegatorsDelegatorAddrRewardsPost(sdk, delegator, req) {
    return new DistributionApi(undefined, sdk.url)
        .distributionDelegatorsDelegatorAddrRewardsPost(delegator.toBech32(), req)
        .then((res) => codec.fromJSONString(JSON.stringify(res.data)));
}
export function delegatorsDelegatorAddrRewardsValidatorAddrGet(sdk, delegator, validator) {
    return sdk.wrapResponseWithHeight(new DistributionApi(undefined, sdk.url).distributionDelegatorsDelegatorAddrRewardsValidatorAddrGet(delegator.toBech32(), validator.toBech32()));
}
export function delegatorsDelegatorAddrRewardsValidatorAddrPost(sdk, delegator, validator, req) {
    return new DistributionApi(undefined, sdk.url)
        .distributionDelegatorsDelegatorAddrRewardsValidatorAddrPost(delegator.toBech32(), validator.toBech32(), req)
        .then((res) => codec.fromJSONString(JSON.stringify(res.data)));
}
export function delegatorsDelegatorAddrWithdrawAddressGet(sdk, delegator) {
    return sdk.wrapResponseWithHeight(new DistributionApi(undefined, sdk.url).distributionDelegatorsDelegatorAddrWithdrawAddressGet(delegator.toBech32()));
}
export function delegatorsDelegatorAddrWithdrawAddressPost(sdk, delegator, req) {
    return new DistributionApi(undefined, sdk.url)
        .distributionDelegatorsDelegatorAddrWithdrawAddressPost(delegator.toBech32(), req)
        .then((res) => codec.fromJSONString(JSON.stringify(res.data)));
}
export function parametersGet(sdk) {
    return sdk.wrapResponseWithHeight(new DistributionApi(undefined, sdk.url).distributionParametersGet());
}
export function validatorsValidatorAddrGet(sdk, validator) {
    return new DistributionApi(undefined, sdk.url)
        .distributionValidatorsValidatorAddrGet(validator.toBech32())
        .then((res) => codec.fromJSONString(JSON.stringify(res.data)));
}
export function validatorsValidatorAddrOutstandingRewardsGet(sdk, validator) {
    return sdk.wrapResponseWithHeight(sdk.wrapResponseWithHeight(new DistributionApi(undefined, sdk.url).distributionValidatorsValidatorAddrOutstandingRewardsGet(validator.toBech32())));
}
export function validatorsValidatorAddrRewardsGet(sdk, validator) {
    return sdk.wrapResponseWithHeight(new DistributionApi(undefined, sdk.url).distributionValidatorsValidatorAddrRewardsGet(validator.toBech32()));
}
export function validatorsValidatorAddrRewardsPost(sdk, validator, req) {
    return new DistributionApi(undefined, sdk.url)
        .distributionValidatorsValidatorAddrRewardsPost(validator.toBech32(), req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
