var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as bip32 from "bip32";
import * as bip39 from "bip39";
/**
 *
 */
export class CosmosSDK {
    /**
     * @param url
     * @param chainID
     */
    constructor(url, chainID) {
        this.url = url;
        this.chainID = chainID;
    }
    generatePrivKeyFromMnemonic(mnemonic) {
        return __awaiter(this, void 0, void 0, function* () {
            const seed = yield bip39.mnemonicToSeed(mnemonic);
            const node = bip32.fromSeed(seed);
            const child = node.derivePath("44'/118'/0'/0/0");
            return child.privateKey;
        });
    }
    wrapResponseWithHeight(res) {
        return res;
    }
}
