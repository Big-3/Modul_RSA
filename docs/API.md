# @criptografia/modul-rsa - v0.1.0

Mòdul que genera un parell de claus RSA.

**`remarks`**
Ús de bigint-crypto-utils.

## Table of contents

### Classes

- [PrivateKey](classes/PrivateKey.md)
- [PublicKey](classes/PublicKey.md)

### Functions

- [generateKeys](API.md#generatekeys)

## Functions

### generateKeys

▸ **generateKeys**(`nbits?`): `Promise`<[`PrivateKey`](classes/PrivateKey.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `nbits` | `number` | `2048` |

#### Returns

`Promise`<[`PrivateKey`](classes/PrivateKey.md)\>

#### Defined in

[RSA.ts:76](https://github.com/Big-3/Modul_RSA/blob/bdf934f/src/ts/RSA.ts#L76)
