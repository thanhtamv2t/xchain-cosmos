import { CosmosSDK, AccAddress, PrivKey } from 'cosmos-client';
import { BroadcastTxCommitResult, Coin } from 'cosmos-client/api';
import { StdTx } from 'cosmos-client/x/auth';
import { SearchTxParams, TransferParams, TxHistoryResponse, CosmosSDKClientParams, TxResponse, RPCTxSearchResult } from './types';
export declare class CosmosSDKClient {
    sdk: CosmosSDK;
    server: string;
    chainId: string;
    prefix: string;
    derive_path: string;
    constructor({ server, chainId, prefix, derive_path }: CosmosSDKClientParams);
    setPrefix: () => void;
    getAddressFromPrivKey: (privkey: PrivKey) => string;
    getPrivKeyFromMnemonic: (mnemonic: string) => PrivKey;
    checkAddress: (address: string) => boolean;
    getBalance: (address: string) => Promise<Coin[]>;
    searchTx: ({ messageAction, messageSender, page, limit, txMinHeight, txMaxHeight, }: SearchTxParams) => Promise<TxHistoryResponse>;
    searchTxFromRPC: ({ messageAction, messageSender, transferSender, transferRecipient, page, limit, txMinHeight, txMaxHeight, rpcEndpoint, }: SearchTxParams & {
        rpcEndpoint: string;
    }) => Promise<RPCTxSearchResult>;
    txsHashGet: (hash: string) => Promise<TxResponse>;
    transfer: ({ privkey, from, to, amount, asset, memo, fee, }: TransferParams) => Promise<BroadcastTxCommitResult>;
    signAndBroadcast: (unsignedStdTx: StdTx, privkey: PrivKey, signer: AccAddress) => Promise<BroadcastTxCommitResult>;
}
