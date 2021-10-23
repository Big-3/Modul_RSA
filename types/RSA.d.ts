export declare class PublicKey {
    private readonly e;
    private readonly n;
    constructor(e: bigint, n: bigint);
    getExpE(): bigint;
    getModN(): bigint;
    encrypt(m: bigint): bigint;
    verify(s: bigint): bigint;
}
export declare class PrivateKey {
    private readonly d;
    private readonly pubKey;
    constructor(d: bigint, pubKey: PublicKey);
    getExpD(): bigint;
    getPublicKey(): PublicKey;
    decrypt(c: bigint): bigint;
    sign(h: bigint): bigint;
}
export declare function generateKeys(nbits?: number): Promise<PrivateKey>;
//# sourceMappingURL=RSA.d.ts.map