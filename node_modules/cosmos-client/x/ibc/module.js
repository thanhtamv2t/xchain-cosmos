import { IBCApi, } from "../../api";
import { codec } from "../../codec";
export function channelsOpenInitPost(sdk, channelOpenInitRequestBody) {
    return new IBCApi(undefined, sdk.url).ibcChannelsOpenInitPost(channelOpenInitRequestBody);
}
export function channelsOpenTryPost(sdk, req) {
    return new IBCApi(undefined, sdk.url).ibcChannelsOpenTryPost(req);
}
export function clientsClientIdClientStateGet(sdk, clientID, prove) {
    return new IBCApi(undefined, sdk.url).ibcClientsClientIdClientStateGet(clientID, prove);
}
export function clientsClientIdConnectionsGet(sdk, clientID, prove) {
    return new IBCApi(undefined, sdk.url).ibcClientsClientIdConnectionsGet(clientID, prove);
}
export function clientsClientIdConsensusStateGet(sdk, clientID, prove) {
    return new IBCApi(undefined, sdk.url).ibcClientsClientIdConsensusStateGet(clientID, prove);
}
export function clientsClientIdMisbehaviourPost(sdk, clientID, req) {
    return new IBCApi(undefined, sdk.url)
        .ibcClientsClientIdMisbehaviourPost(clientID, req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function clientsClientIdRootsHeightGet(sdk, clientID, height, prove) {
    return new IBCApi(undefined, sdk.url).ibcClientsClientIdRootsHeightGet(clientID, height, prove);
}
export function clientsClientIdUpdatePost(sdk, clientID, req) {
    return new IBCApi(undefined, sdk.url)
        .ibcClientsClientIdUpdatePost(clientID, req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function clientsPost(sdk, req) {
    return new IBCApi(undefined, sdk.url).ibcClientsPost(req).then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function connectionsConnectionIdGet(sdk, connectionID, prove) {
    return new IBCApi(undefined, sdk.url).ibcConnectionsConnectionIdGet(connectionID, prove);
}
export function connectionsConnectionIdOpenAckPost(sdk, connectionID, req) {
    return new IBCApi(undefined, sdk.url)
        .ibcConnectionsConnectionIdOpenAckPost(connectionID, req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function connectionsConnectionIdOpenConfirmPost(sdk, connectionID, req) {
    return new IBCApi(undefined, sdk.url)
        .ibcConnectionsConnectionIdOpenConfirmPost(connectionID, req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function connectionsOpenInitPost(sdk, req) {
    return new IBCApi(undefined, sdk.url)
        .ibcConnectionsOpenInitPost(req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function connectionsOpenTryPost(sdk, req) {
    return new IBCApi(undefined, sdk.url)
        .ibcConnectionsOpenTryPost(req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function headerGet(sdk) {
    return new IBCApi(undefined, sdk.url).ibcHeaderGet();
}
export function nodeStateGet(sdk) {
    return new IBCApi(undefined, sdk.url).ibcNodeStateGet();
}
export function packetsReceivePost(sdk, req) {
    return new IBCApi(undefined, sdk.url)
        .ibcPacketsReceivePost(req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function pathGet(sdk) {
    return new IBCApi(undefined, sdk.url).ibcPathGet();
}
export function portsPortIdChannelsChannelIdCloseConfirmPost(sdk, portID, channelID, req) {
    return new IBCApi(undefined, sdk.url)
        .ibcPortsPortIdChannelsChannelIdCloseConfirmPost(portID, channelID, req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function portsPortIdChannelsChannelIdCloseInitPost(sdk, portID, channelID, req) {
    return new IBCApi(undefined, sdk.url)
        .ibcPortsPortIdChannelsChannelIdCloseInitPost(portID, channelID, req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function portsPortIdChannelsChannelIdGet(sdk, portID, channelID, prove) {
    return new IBCApi(undefined, sdk.url).ibcPortsPortIdChannelsChannelIdGet(portID, channelID, prove);
}
export function portsPortIdChannelsChannelIdNextSequenceRecvGet(sdk, portID, channelID) {
    return new IBCApi(undefined, sdk.url).ibcPortsPortIdChannelsChannelIdNextSequenceRecvGet(portID, channelID);
}
export function portsPortIdChannelsChannelIdOpenAckPost(sdk, portID, channelID, req) {
    return new IBCApi(undefined, sdk.url)
        .ibcPortsPortIdChannelsChannelIdOpenAckPost(portID, channelID, req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function portsPortIdChannelsChannelIdOpenConfirmPost(sdk, portID, channelID, req) {
    return new IBCApi(undefined, sdk.url)
        .ibcPortsPortIdChannelsChannelIdOpenConfirmPost(portID, channelID, req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
export function portsPortIdChannelsChannelIdTransferPost(sdk, portID, channelID, req) {
    return new IBCApi(undefined, sdk.url)
        .ibcPortsPortIdChannelsChannelIdTransferPost(portID, channelID, req)
        .then((res) => {
        res.data = codec.fromJSONString(JSON.stringify(res.data));
        return res;
    });
}
