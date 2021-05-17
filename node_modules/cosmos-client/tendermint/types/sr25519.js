import * as crypto from "crypto";
// const sr25519 = await import("sr25519");
let sr25519;
import("sr25519").then((mod) => (sr25519 = mod));
/**
 * sr25519
 */
export class PrivKeySr25519 {
    /**
     *
     * @param privKey
     */
    constructor(privKey) {
        const keypair = sr25519.keypair_from_seed(new Uint8Array(privKey));
        this.pubKey = new PubKeySr25519(Buffer.from(keypair.slice(64, 96)));
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
        const keypair = sr25519.keypair_from_seed(new Uint8Array(this.privKey));
        const privKey = keypair.slice(0, 64);
        return Buffer.from(sr25519.sign(Uint8Array.from([]), this.pubKey.toBuffer(), privKey, message));
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
        return new PrivKeySr25519(buffer);
    }
    static fromJSON(value) {
        return PrivKeySr25519.fromBase64(value);
    }
}
/**
 * sr25519
 */
export class PubKeySr25519 {
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
     *
     * @param message
     * @param signature
     */
    verify(signature, message) {
        return sr25519.verify(Uint8Array.from([]), new Uint8Array(signature), new Uint8Array(message), new Uint8Array(this.pubKey));
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
        return new PubKeySr25519(buffer);
    }
    static fromJSON(value) {
        return PubKeySr25519.fromBase64(value);
    }
}
