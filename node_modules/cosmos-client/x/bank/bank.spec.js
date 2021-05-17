var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CosmosSDK, AccAddress } from "../../";
import { auth } from "../auth";
import { bank } from "../bank";
import { PrivKeySecp256k1 } from "../../tendermint";
test("bank", () => __awaiter(void 0, void 0, void 0, function* () {
    const sdk = new CosmosSDK("", "test");
    // get account info
    const privKeyBuffer = Buffer.from("36d1043c6e23eb15c928da41043bfd183b6ce13f9e592c9a45ac431c4a08b924", "hex");
    const privKey = new PrivKeySecp256k1(privKeyBuffer);
    const fromAddress = AccAddress.fromPublicKey(privKey.getPubKey());
    const account = yield auth
        .accountsAddressGet(sdk, fromAddress)
        .then((res) => res.data.result);
    // get unsigned tx
    const toAddress = fromAddress;
    const unsignedStdTx = yield bank
        .accountsAddressTransfersPost(sdk, toAddress, {
        base_req: {
            from: fromAddress.toBech32(),
            memo: "Hello, world!",
            chain_id: sdk.chainID,
            account_number: account.account_number.toString(),
            sequence: account.sequence.toString(),
            gas: "",
            gas_adjustment: "",
            fees: [],
            simulate: false,
        },
        amount: [{ denom: "token", amount: "1000" }],
    })
        .then((res) => res.data);
    // sign
    const signedStdTx = auth.signStdTx(sdk, privKey, unsignedStdTx, account.account_number.toString(), account.sequence.toString());
    // broadcast
    const result = yield auth
        .txsPost(sdk, signedStdTx, "sync")
        .then((res) => res.data);
    console.log(result);
}));
