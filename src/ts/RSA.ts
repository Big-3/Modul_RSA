import * as bcu from 'bigint-crypto-utils'
export class PublicKey {
  private readonly e: bigint
  private readonly n: bigint

  constructor (e: bigint, n: bigint) {
    this.e = e
    this.n = n
  }

  public getExpE (): bigint {
    return this.e
  }

  public getModN (): bigint {
    return this.n
  }

  public encrypt (m: bigint): bigint {
    return bcu.modPow(m, this.e, this.n) // obtenim c (missatge encriptat)
  }

  public verify (s: bigint): bigint {
    return bcu.modPow(s, this.e, this.n) // obtenim h (hash encriptat)
  }
}
export class PrivateKey {
  private readonly d: bigint
  private readonly pubKey: PublicKey

  constructor (d: bigint, pubKey: PublicKey) {
    this.d = d
    this.pubKey = pubKey
  }

  public getExpD (): bigint {
    return this.d
  }

  public getPublicKey (): PublicKey {
    return this.pubKey
  }

  public decrypt (c: bigint): bigint {
    return bcu.modPow(c, this.d, this.pubKey.getModN()) // obtenim m (missatge enviat)
  }

  public sign (h: bigint): bigint {
    return bcu.modPow(h, this.d, this.pubKey.getModN()) // obtenim s (resum hash)
  }
}

async function genPrime (nbits: number): Promise<bigint> {
  let n: bigint = BigInt(10)
  while (!await bcu.isProbablyPrime(n)) {
    n = await bcu.prime(nbits)
  }

  return n
}

function isCoprime (a: bigint, b: bigint): boolean {
  const exp: bigint = BigInt(1)
  return bcu.gcd(a, b) === exp
}

function genE (mcm: bigint, nbits: number): bigint {
  let e: bigint = bcu.randBetween(mcm, BigInt(1))
  while (!isCoprime(e, mcm)) {
    e = bcu.randBetween(mcm, BigInt(1))
  }

  return e
}

export async function generateKeys (nbits = 2048): Promise<PrivateKey> {
  // Qualsevol 2 nombres primers
  const p: bigint = await genPrime(nbits)
  const q: bigint = await genPrime(nbits)

  // Calculem el mòdul
  const n: bigint = p * q
  const phiN: bigint = BigInt((p - BigInt(1)) * (q - BigInt(1)))

  // Generem l'exponent e:
  const mcm: bigint = bcu.lcm(p - BigInt(1), q - BigInt(1))
  const e: bigint = await genE(mcm, nbits)

  // Generem l'exponent d:
  const d: bigint = bcu.modInv(e, phiN) // ed = 1 mod(phiN)

  const pubKey: PublicKey = new PublicKey(e, n)
  const privKey: PrivateKey = new PrivateKey(d, pubKey)

  return privKey
}
