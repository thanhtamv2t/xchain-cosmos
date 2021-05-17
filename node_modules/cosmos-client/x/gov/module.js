import { GovernanceApi, } from "../../api";
import { codec } from "../../codec";
export function parametersDepositGet(sdk) {
    return sdk.wrapResponseWithHeight(new GovernanceApi(undefined, sdk.url).govParametersDepositGet());
}
export function parametersTallyingGet(sdk) {
    return sdk.wrapResponseWithHeight(new GovernanceApi(undefined, sdk.url).govParametersTallyingGet());
}
export function parametersVotingGet(sdk) {
    return sdk.wrapResponseWithHeight(new GovernanceApi(undefined, sdk.url).govParametersVotingGet());
}
export function proposalsGet(sdk, voter, depositor, status) {
    return sdk.wrapResponseWithHeight(new GovernanceApi(undefined, sdk.url).govProposalsGet(voter === null || voter === void 0 ? void 0 : voter.toBech32(), depositor === null || depositor === void 0 ? void 0 : depositor.toBech32(), status));
}
export function proposalsParamChangePost(sdk, req) {
    return new GovernanceApi(undefined, sdk.url)
        .govProposalsParamChangePost(req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function proposalsPost(sdk, req) {
    return new GovernanceApi(undefined, sdk.url)
        .govProposalsPost(req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function proposalsProposalIdDepositsDepositorGet(sdk, proposalID, depositor) {
    return sdk.wrapResponseWithHeight(new GovernanceApi(undefined, sdk.url).govProposalsProposalIdDepositsDepositorGet(proposalID, depositor.toBech32()));
}
export function proposalsProposalIdDepositsGet(sdk, proposalID) {
    return sdk.wrapResponseWithHeight(new GovernanceApi(undefined, sdk.url).govProposalsProposalIdDepositsGet(proposalID));
}
export function proposalsProposalIdDepositsPost(sdk, proposalID, req) {
    return new GovernanceApi(undefined, sdk.url)
        .govProposalsProposalIdDepositsPost(proposalID, req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function proposalsProposalIdGet(sdk, proposalID) {
    return sdk.wrapResponseWithHeight(new GovernanceApi(undefined, sdk.url).govProposalsProposalIdGet(proposalID));
}
export function proposalsProposalIdProposerGet(sdk, proposalID) {
    return sdk.wrapResponseWithHeight(new GovernanceApi(undefined, sdk.url).govProposalsProposalIdProposerGet(proposalID));
}
export function proposalsProposalIdTallyGet(sdk, proposalID) {
    return sdk.wrapResponseWithHeight(new GovernanceApi(undefined, sdk.url).govProposalsProposalIdTallyGet(proposalID));
}
export function proposalsProposalIdVotesGet(sdk, proposalID) {
    return sdk.wrapResponseWithHeight(new GovernanceApi(undefined, sdk.url).govProposalsProposalIdVotesGet(proposalID));
}
export function proposalsProposalIdVotesPost(sdk, proposalID, req) {
    return new GovernanceApi(undefined, sdk.url)
        .govProposalsProposalIdVotesPost(proposalID, req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function proposalsProposalIdVotesVoterGet(sdk, proposalID, voter) {
    return sdk.wrapResponseWithHeight(new GovernanceApi(undefined, sdk.url).govProposalsProposalIdVotesVoterGet(proposalID, voter.toBech32()));
}
