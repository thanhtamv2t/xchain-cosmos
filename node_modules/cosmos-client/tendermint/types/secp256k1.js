import * as crypto from "crypto";
import * as secp256k1 from "tiny-secp256k1";
/**
 * secp256k1
 */
export class PrivKeySecp256k1 {
    /**
     *
     * @param privKey
     */
    constructor(privKey) {
        this.pubKey = new PubKeySecp256k1(secp256k1.pointFromScalar(privKey));
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
        const hash = crypto.createHash("sha256").update(message).digest();
        const signature = secp256k1.sign(hash, this.privKey);
        return signature;
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
        return new PrivKeySecp256k1(buffer);
    }
    static fromJSON(value) {
        return PrivKeySecp256k1.fromBase64(value);
    }
}
/**
 * secp256k1公開鍵。
 */
export class PubKeySecp256k1 {
    /**
     *
     * @param pubKey
     */
    constructor(pubKey) {
        this.pubKey = pubKey;
    }
    hash160(buffer) {
        const sha256Hash = crypto
            .createHash("sha256")
            .update(buffer)
            .digest();
        try {
            return crypto.createHash("rmd160").update(sha256Hash).digest();
        }
        catch (err) {
            return crypto.createHash("ripemd160").update(sha256Hash).digest();
        }
    }
    getAddress() {
        return this.hash160(this.pubKey);
    }
    /**
     *
     * @param message
     * @param signature
     */
    verify(signature, message) {
        const hash = crypto.createHash("sha256").update(message).digest();
        return secp256k1.verify(hash, signature, this.pubKey);
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
        return new PubKeySecp256k1(buffer);
    }
    static fromJSON(value) {
        return PubKeySecp256k1.fromBase64(value);
    }
}
