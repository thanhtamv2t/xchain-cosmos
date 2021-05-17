import * as crypto from "crypto";
import * as nacl from "tweetnacl";
/**
 * ed25519
 */
export class PrivKeyEd25519 {
    /**
     *
     * @param privKey
     */
    constructor(privKey) {
        const keypair = nacl.sign.keyPair.fromSeed(new Uint8Array(privKey));
        this.pubKey = new PubKeyEd25519(Buffer.from(keypair.publicKey));
        this.privKey = privKey;
    }
    /**
     *
     */
    getPubKey() {
        return this.pubKey;
    }
    /**
     *
     * @param message
     */
    sign(message) {
        const keypair = nacl.sign.keyPair.fromSeed(new Uint8Array(this.privKey));
        return Buffer.from(nacl.sign(new Uint8Array(message), new Uint8Array(keypair.secretKey)));
    }
    /**
     *
     */
    toBuffer() {
        return Buffer.from(this.privKey);
    }
    /**
     *
     */
    toBase64() {
        return this.privKey.toString("base64");
    }
    toJSONInCodec() {
        return this.toBase64();
    }
    /**
     *
     * @param value
     */
    static fromBase64(value) {
        const buffer = Buffer.from(value, "base64");
        return new PrivKeyEd25519(buffer);
    }
    static fromJSON(value) {
        return PrivKeyEd25519.fromBase64(value);
    }
}
/**
 * ed25519
 */
export class PubKeyEd25519 {
    /**
     *
     * @param pubKey
     */
    constructor(pubKey) {
        this.pubKey = pubKey;
    }
    getAddress() {
        const hash = crypto.createHash("sha256").update(this.pubKey).digest();
        return hash.subarray(0, 20);
    }
    /**
     * message is not needed
     * @param signature
     */
    verify(signature) {
        return (nacl.sign.open(new Uint8Array(signature), new Uint8Array(this.pubKey)) !==
            null);
    }
    /**
     *
     */
    toBuffer() {
        return Buffer.from(this.pubKey);
    }
    /**
     *
     */
    toBase64() {
        return this.pubKey.toString("base64");
    }
    toJSONInCodec() {
        return this.toBase64();
    }
    /**
     *
     */
    static fromBase64(value) {
        const buffer = Buffer.from(value, "base64");
        return new PubKeyEd25519(buffer);
    }
    static fromJSON(value) {
        return PubKeyEd25519.fromBase64(value);
    }
}
