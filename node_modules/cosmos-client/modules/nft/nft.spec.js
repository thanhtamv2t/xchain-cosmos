var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CosmosSDK } from "../../";
import { PrivKeySecp256k1 } from "../../tendermint";
import { AccAddress } from "../../types";
import { auth } from "../../x/auth";
import { nft } from ".";
test("nft", () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sdk = new CosmosSDK("https://gaia.lcnem.net", "cosmoshub-3");
        // get account info
        let privKey = new PrivKeySecp256k1(Buffer.from("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "hex"));
        let fromAddress = AccAddress.fromPublicKey(privKey.getPubKey());
        console.log(fromAddress.toBech32());
        const account = yield auth
            .accountsAddressGet(sdk, fromAddress)
            .then((res) => res.data.result);
        // get unsigned tx
        let toAddress = fromAddress;
        const unsignedStdTx = yield nft
            .mintPost(sdk, {
            base_req: {
                from: fromAddress.toBech32(),
                memo: "",
                chain_id: sdk.chainID,
                account_number: account.account_number.toString(),
                sequence: account.sequence.toString(),
                fees: [],
                gas: "",
                gas_adjustment: "",
                simulate: false,
            },
            recipient: toAddress.toBech32(),
            denom: "aaa",
            id: "aaa",
            tokenURI: "https://google.com",
        })
            .then((res) => res.data);
        // sign
        const signedStdTx = auth.signStdTx(sdk, privKey, unsignedStdTx, account.account_number.toString(), account.sequence.toString());
        // broadcast
        const result = yield auth.txsPost(sdk, signedStdTx, "sync");
        console.log(result.data);
        expect(result.status).toBe(200);
    }
    catch (_) {
        console.error(_);
    }
}));
