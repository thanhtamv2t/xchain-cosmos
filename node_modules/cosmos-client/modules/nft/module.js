import Axios from "axios";
import { codec } from "../../codec";
export function supplyDenomGet(sdk, denom) {
    return sdk.wrapResponseWithHeight(Axios.get(`${sdk.url}/nft/supply/${denom}`));
}
export function ownerDelegatorAddrGet(sdk, delegatorAddress) {
    return sdk.wrapResponseWithHeight(Axios.get(`${sdk.url}/nft/owner/${delegatorAddress.toBech32()}`));
}
export function ownerDelegatorAddrCollectionDenomGet(sdk, delegatorAddress, denom) {
    return sdk.wrapResponseWithHeight(Axios.get(`${sdk.url}/nft/owner/${delegatorAddress.toBech32()}/collection/${denom}`));
}
export function collectionDenomGet(sdk, denom) {
    return sdk.wrapResponseWithHeight(Axios.get(`${sdk.url}/nft/collection/${denom}`));
}
export function DenomsGet(sdk) {
    return sdk.wrapResponseWithHeight(Axios.get(`${sdk.url}/nft/denoms`));
}
export function collectionDenomNftIdGet(sdk, denom, id) {
    return sdk.wrapResponseWithHeight(Axios.get(`${sdk.url}/collection/${denom}/nft/${id}`));
}
export function mintPost(sdk, req) {
    return Axios.post(`${sdk.url}/nfts/mint`, req).then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function transferPost(sdk, req) {
    return Axios.post(`${sdk.url}/nfts/transfer`, req).then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function collectionDenomNftIdMetadataPut(sdk, req) {
    return Axios.put(`${sdk.url}/nfts/collection/${req.denom}/nft/${req.id}/metadata`, req).then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function collectionDenomNftIdBurnPut(sdk, req) {
    return Axios.put(`${sdk.url}/nfts/collection/${req.denom}/nft/${req.id}/burn`, req).then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
