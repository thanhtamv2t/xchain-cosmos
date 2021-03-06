import { Address, Balances, Fees, Network, Tx, TxParams, TxHash, TxHistoryParams, TxsPage, XChainClient, XChainClientParams } from '@xchainjs/xchain-client';
import { Asset } from '@xchainjs/xchain-util';
import { CosmosSDKClient } from './cosmos/sdk-client';
/**
 * Interface for custom Cosmos client
 */
export interface CosmosClient {
    getMainAsset(): Asset;
}
/**
 * Custom Cosmos client
 */
declare class Client implements CosmosClient, XChainClient {
    private network;
    private phrase;
    private rootDerivationPaths;
    private sdkClients;
    /**
     * Constructor
     *
     * Client has to be initialised with network type and phrase.
     * It will throw an error if an invalid phrase has been passed.
     *
     * @param {XChainClientParams} params
     *
     * @throws {"Invalid phrase"} Thrown if the given phase is invalid.
     */
    constructor({ network, phrase, rootDerivationPaths, }: XChainClientParams);
    /**
     * Purge client.
     *
     * @returns {void}
     */
    purgeClient(): void;
    /**
     * Set/update the current network.
     *
     * @param {Network} network `mainnet` or `testnet`.
     * @returns {void}
     *
     * @throws {"Network must be provided"}
     * Thrown if network has not been set before.
     */
    setNetwork: (network: Network) => void;
    /**
     * Get the current network.
     *
     * @returns {Network} The current network. (`mainnet` or `testnet`)
     */
    getNetwork(): Network;
    /**
     * Get the client url.
     *
     * @returns {string} The client url for cosmos chain based on the network.
     */
    getClientUrl: () => string;
    /**
     * Get the chain id.
     *
     * @returns {string} The chain id based on the network.
     */
    getChainId: () => string;
    /**
     * @private
     * Register message codecs.
     *
     * @returns {void}
     */
    private registerCodecs;
    /**
     * Get the explorer url.
     *
     * @returns {string} The explorer url.
     */
    getExplorerUrl: () => string;
    /**
     * Get the explorer url for the given address.
     *
     * @param {Address} address
     * @returns {string} The explorer url for the given address.
     */
    getExplorerAddressUrl: (address: Address) => string;
    /**
     * Get the explorer url for the given transaction id.
     *
     * @param {string} txID
     * @returns {string} The explorer url for the given transaction id.
     */
    getExplorerTxUrl: (txID: string) => string;
    /**
     * Set/update a new phrase
     *
     * @param {string} phrase A new phrase.
     * @returns {Address} The address from the given phrase
     *
     * @throws {"Invalid phrase"}
     * Thrown if the given phase is invalid.
     */
    setPhrase: (phrase: string, walletIndex?: number) => Address;
    /**
     * @private
     * Get private key.
     *
     * @returns {PrivKey} The private key generated from the given phrase
     *
     * @throws {"Phrase not set"}
     * Throws an error if phrase has not been set before
     * */
    private getPrivateKey;
    getSDKClient: () => CosmosSDKClient;
    /**
     * Get getFullDerivationPath
     *
     * @param {number} index the HD wallet index
     * @returns {string} The bitcoin derivation path based on the network.
     */
    getFullDerivationPath(index: number): string;
    /**
     * Get the current address.
     *
     * @returns {Address} The current address.
     *
     * @throws {Error} Thrown if phrase has not been set before. A phrase is needed to create a wallet and to derive an address from it.
     */
    getAddress: (index?: number) => string;
    /**
     * Validate the given address.
     *
     * @param {Address} address
     * @returns {boolean} `true` or `false`
     */
    validateAddress: (address: Address) => boolean;
    /**
     * Get the main asset based on the network.
     *
     * @returns {string} The main asset based on the network.
     */
    getMainAsset: () => Asset;
    /**
     * Get the balance of a given address.
     *
     * @param {Address} address By default, it will return the balance of the current wallet. (optional)
     * @param {Asset} asset If not set, it will return all assets available. (optional)
     * @returns {Array<Balance>} The balance of the address.
     */
    getBalance: (address: Address, assets?: Asset[] | undefined) => Promise<Balances>;
    /**
     * Get transaction history of a given address with pagination options.
     * By default it will return the transaction history of the current wallet.
     *
     * @param {TxHistoryParams} params The options to get transaction history. (optional)
     * @returns {TxsPage} The transaction history.
     */
    getTransactions: (params?: TxHistoryParams | undefined) => Promise<TxsPage>;
    /**
     * Get the transaction details of a given transaction id.
     *
     * @param {string} txId The transaction id.
     * @returns {Tx} The transaction details of the given transaction id.
     */
    getTransactionData: (txId: string) => Promise<Tx>;
    /**
     * Transfer balances.
     *
     * @param {TxParams} params The transfer options.
     * @returns {TxHash} The transaction hash.
     */
    transfer: ({ walletIndex, asset, amount, recipient, memo }: TxParams) => Promise<TxHash>;
    /**
     * Get the current fee.
     *
     * @returns {Fees} The current fee.
     */
    getFees: () => Promise<Fees>;
}
export { Client };
