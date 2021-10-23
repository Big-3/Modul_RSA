import * as bcu from 'bigint-crypto-utils';
export class PublicKey
{
    private e: bigint;
    private n: bigint;

    constructor(e:bigint, n:bigint)
    {
        this.e = e;
        this.n = n;
    }

    public getExpE(): bigint 
    {
      return this.e;  
    }

    public getModN(): bigint 
    {
      return this.n;  
    }

    public encrypt (m:bigint): bigint 
    {
        return bcu.modPow(m, this.e, this.n) //obtenim c (missatge encriptat)
    }
    public verify (s:bigint): bigint 
    {
        return bcu.modPow(s, this.e, this.n) //obtenim h (hash encriptat)
    }
}
export class PrivateKey
{
    private d: bigint;
    private pubKey: PublicKey;

    constructor(d:bigint, pubKey:PublicKey)
    {
        this.d = d;
        this.pubKey = pubKey;
    }

    public getExpD(): bigint 
    {
      return this.d;  
    }

    public getPublicKey(): PublicKey 
    {
      return this.pubKey;  
    }

    public decrypt (c:bigint): bigint 
    {
        return bcu.modPow(c, this.d, this.pubKey.getModN()) //obtenim m (missatge enviat)
    }
    public sign (h:bigint): bigint 
    {
        return bcu.modPow(h, this.d, this.pubKey.getModN()) //obtenim s (resum hash)
    }
}
export async function generatekey (nbits=2048)
{
    bcu.prime(2048)
}