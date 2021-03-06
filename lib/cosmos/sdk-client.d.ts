import { CosmosSDK, AccAddress, PrivKey } from 'cosmos-client';
import { BroadcastTxCommitResult, Coin } from 'cosmos-client/api';
import { StdTx } from 'cosmos-client/x/auth';
import { SearchTxParams, TransferParams, TxHistoryResponse, CosmosSDKClientParams, TxResponse, RPCTxSearchResult } from './types';
export declare class CosmosSDKClient {
    sdk: CosmosSDK;
    server: string;
    chainId: string;
    prefix: string;
    constructor({ server, chainId, prefix }: CosmosSDKClientParams);
    updatePrefix: (prefix: string) => void;
    setPrefix: () => void;
    getAddressFromPrivKey: (privkey: PrivKey) => string;
    getAddressFromMnemonic: (mnemonic: string, derivationPath: string) => string;
    getPrivKeyFromMnemonic: (mnemonic: string, derivationPath: string) => PrivKey;
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
