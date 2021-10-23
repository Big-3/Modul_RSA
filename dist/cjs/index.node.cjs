'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bcu = require('bigint-crypto-utils');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var bcu__namespace = /*#__PURE__*/_interopNamespace(bcu);

class PublicKey {
    constructor(e, n) {
        this.e = e;
        this.n = n;
    }
    getExpE() {
        return this.e;
    }
    getModN() {
        return this.n;
    }
    encrypt(m) {
        return bcu__namespace.modPow(m, this.e, this.n); // obtenim c (missatge encriptat)
    }
    verify(s) {
        return bcu__namespace.modPow(s, this.e, this.n); // obtenim h (hash encriptat)
    }
}
class PrivateKey {
    constructor(d, pubKey) {
        this.d = d;
        this.pubKey = pubKey;
    }
    getExpD() {
        return this.d;
    }
    getPublicKey() {
        return this.pubKey;
    }
    decrypt(c) {
        return bcu__namespace.modPow(c, this.d, this.pubKey.getModN()); // obtenim m (missatge enviat)
    }
    sign(h) {
        return bcu__namespace.modPow(h, this.d, this.pubKey.getModN()); // obtenim s (resum hash)
    }
}
async function genPrime(nbits) {
    let n = BigInt(10);
    while (!await bcu__namespace.isProbablyPrime(n)) {
        n = await bcu__namespace.prime(nbits);
    }
    return n;
}
function isCoprime(a, b) {
    const exp = BigInt(1);
    return bcu__namespace.gcd(a, b) === exp;
}
function genE(mcm, nbits) {
    let e = bcu__namespace.randBetween(mcm, BigInt(1));
    while (!isCoprime(e, mcm)) {
        e = bcu__namespace.randBetween(mcm, BigInt(1));
    }
    return e;
}
async function generateKeys(nbits = 2048) {
    // Qualsevol 2 nombres primers
    const p = await genPrime(nbits);
    const q = await genPrime(nbits);
    // Calculem el mòdul
    const n = p * q;
    const phiN = BigInt((p - BigInt(1)) * (q - BigInt(1)));
    // Generem l'exponent e:
    const mcm = bcu__namespace.lcm(p - BigInt(1), q - BigInt(1));
    const e = await genE(mcm);
    // Generem l'exponent d:
    const d = bcu__namespace.modInv(e, phiN); // ed = 1 mod(phiN)
    const pubKey = new PublicKey(e, n);
    const privKey = new PrivateKey(d, pubKey);
    return privKey;
}

exports.PrivateKey = PrivateKey;
exports.PublicKey = PublicKey;
exports.generateKeys = generateKeys;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubm9kZS5janMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cy9SU0EudHMiXSwic291cmNlc0NvbnRlbnQiOm51bGwsIm5hbWVzIjpbImJjdSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFDYSxTQUFTO0lBSXBCLFlBQWEsQ0FBUyxFQUFFLENBQVM7UUFDL0IsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDVixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtLQUNYO0lBRU0sT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQTtLQUNkO0lBRU0sT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQTtLQUNkO0lBRU0sT0FBTyxDQUFFLENBQVM7UUFDdkIsT0FBT0EsY0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDckM7SUFFTSxNQUFNLENBQUUsQ0FBUztRQUN0QixPQUFPQSxjQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNyQztDQUNGO01BQ1ksVUFBVTtJQUlyQixZQUFhLENBQVMsRUFBRSxNQUFpQjtRQUN2QyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0tBQ3JCO0lBRU0sT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQTtLQUNkO0lBRU0sWUFBWTtRQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7S0FDbkI7SUFFTSxPQUFPLENBQUUsQ0FBUztRQUN2QixPQUFPQSxjQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtLQUNwRDtJQUVNLElBQUksQ0FBRSxDQUFTO1FBQ3BCLE9BQU9BLGNBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO0tBQ3BEO0NBQ0Y7QUFFRCxlQUFlLFFBQVEsQ0FBRSxLQUFhO0lBQ3BDLElBQUksQ0FBQyxHQUFXLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUMxQixPQUFPLENBQUMsTUFBTUEsY0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNwQyxDQUFDLEdBQUcsTUFBTUEsY0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUMzQjtJQUVELE9BQU8sQ0FBQyxDQUFBO0FBQ1YsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFFLENBQVMsRUFBRSxDQUFTO0lBQ3RDLE1BQU0sR0FBRyxHQUFXLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUM3QixPQUFPQSxjQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUE7QUFDOUIsQ0FBQztBQUVELFNBQVMsSUFBSSxDQUFFLEdBQVcsRUFBRSxLQUFhO0lBQ3ZDLElBQUksQ0FBQyxHQUFXQSxjQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMvQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRTtRQUN6QixDQUFDLEdBQUdBLGNBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ3BDO0lBRUQsT0FBTyxDQUFDLENBQUE7QUFDVixDQUFDO0FBRU0sZUFBZSxZQUFZLENBQUUsS0FBSyxHQUFHLElBQUk7O0lBRTlDLE1BQU0sQ0FBQyxHQUFXLE1BQU0sUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3ZDLE1BQU0sQ0FBQyxHQUFXLE1BQU0sUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBOztJQUd2QyxNQUFNLENBQUMsR0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3ZCLE1BQU0sSUFBSSxHQUFXLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7O0lBRzlELE1BQU0sR0FBRyxHQUFXQSxjQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3pELE1BQU0sQ0FBQyxHQUFXLE1BQU0sSUFBSSxDQUFDLEdBQVUsQ0FBQyxDQUFBOztJQUd4QyxNQUFNLENBQUMsR0FBV0EsY0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFFckMsTUFBTSxNQUFNLEdBQWMsSUFBSSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzdDLE1BQU0sT0FBTyxHQUFlLElBQUksVUFBVSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUVyRCxPQUFPLE9BQU8sQ0FBQTtBQUNoQjs7Ozs7OyJ9
