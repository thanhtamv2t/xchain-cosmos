import { Txs, Fees } from '@xchainjs/xchain-client';
import { Asset } from '@xchainjs/xchain-util';
import { Msg } from 'cosmos-client';
import { MsgMultiSend, MsgSend } from 'cosmos-client/x/bank';
import { TxResponse, APIQueryParam } from './cosmos/types';
/**
 * The decimal for cosmos chain.
 */
export declare const DECIMAL = 6;
/**
 * Type guard for MsgSend
 *
 * @param {Msg} msg
 * @returns {boolean} `true` or `false`.
 */
export declare const isMsgSend: (msg: Msg) => msg is MsgSend;
/**
 * Type guard for MsgMultiSend
 *
 * @param {Msg} msg
 * @returns {boolean} `true` or `false`.
 */
export declare const isMsgMultiSend: (msg: Msg) => msg is MsgMultiSend;
/**
 * Get denomination from Asset
 *
 * @param {Asset} asset
 * @returns {string} The denomination of the given asset.
 */
export declare const getDenom: (asset: Asset) => string;
/**
 * Get Asset from denomination
 *
 * @param {string} denom
 * @returns {Asset|null} The asset of the given denomination.
 */
export declare const getAsset: (denom: string) => Asset | null;
/**
 * Parse transaction type
 *
 * @param {Array<TxResponse>} txs The transaction response from the node.
 * @param {Asset} mainAsset Current main asset which depends on the network.
 * @returns {Txs} The parsed transaction result.
 */
export declare const getTxsFromHistory: (txs: Array<TxResponse>, mainAsset: Asset) => Txs;
/**
 * Get Query String
 *
 * @param {APIQueryParam}
 * @returns {string} The query string.
 */
export declare const getQueryString: (params: APIQueryParam) => string;
/**
 * Get the default fee.
 *
 * @returns {Fees} The default fee.
 */
export declare const getDefaultFees: () => Fees;
/**
 * Get address prefix based on the network.
 *
 * @returns {string} The address prefix based on the network.
 *
 **/
export declare const getPrefix: () => string;
