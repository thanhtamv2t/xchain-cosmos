import { BigSource } from 'big.js';
import { PrivKey, Msg, codec } from 'cosmos-client';
import { BaseAccount, StdTx } from 'cosmos-client/x/auth';
import { StdTxFee } from 'cosmos-client/api';
import { RootDerivationPaths, Network } from '@xchainjs/xchain-client';
export declare type CosmosSDKClientParams = {
    server: string;
    chainId: string;
    prefix?: string;
    network?: Network;
    rootDerivationPaths?: RootDerivationPaths;
};
export declare type SearchTxParams = {
    messageAction?: string;
    messageSender?: string;
    transferSender?: string;
    transferRecipient?: string;
    page?: number;
    limit?: number;
    txMinHeight?: number;
    txMaxHeight?: number;
};
export declare type TransferParams = {
    privkey: PrivKey;
    from: string;
    to: string;
    amount: BigSource;
    asset: string;
    memo?: string;
    fee?: StdTxFee;
};
export declare type BaseAccountResponse = {
    type?: string;
    value?: BaseAccount;
};
export declare type RawTxResponse = {
    body: {
        messages: Msg[];
    };
};
export declare type TxEventAttribute = {
    key: string;
    value: string;
};
export declare type TxEvent = {
    type: string;
    attributes: TxEventAttribute[];
};
export declare type TxLog = {
    msg_index: number;
    log: string;
    events: TxEvent[];
};
export declare type TxResponse = {
    height?: number;
    txhash?: string;
    data: string;
    raw_log?: string;
    logs?: TxLog[];
    gas_wanted?: string;
    gas_used?: string;
    tx?: StdTx | RawTxResponse | codec.AminoWrapping;
    timestamp: string;
};
export declare type TxHistoryResponse = {
    total_count?: number;
    count?: number;
    page_number?: number;
    page_total?: number;
    limit?: number;
    txs?: Array<TxResponse>;
};
export declare type APIQueryParam = {
    [x: string]: string;
};
export declare type RPCTxResult = {
    hash: string;
    height: string;
    index: number;
    tx_result: {
        code: number;
        data: string;
        log: string;
        info: string;
        gas_wanted: string;
        gas_used: string;
        events: TxEvent[];
        codespace: string;
    };
    tx: string;
};
export declare type RPCTxSearchResult = {
    txs: RPCTxResult[];
    total_count: string;
};
export declare type RPCResponse<T> = {
    jsonrpc: string;
    id: number;
    result: T;
};
