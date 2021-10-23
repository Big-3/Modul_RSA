# Class: PrivateKey

## Table of contents

### Constructors

- [constructor](PrivateKey.md#constructor)

### Properties

- [d](PrivateKey.md#d)
- [pubKey](PrivateKey.md#pubkey)

### Methods

- [decrypt](PrivateKey.md#decrypt)
- [getExpD](PrivateKey.md#getexpd)
- [getPublicKey](PrivateKey.md#getpublickey)
- [sign](PrivateKey.md#sign)

## Constructors

### constructor

• **new PrivateKey**(`d`, `pubKey`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `bigint` |
| `pubKey` | [`PublicKey`](PublicKey.md) |

#### Defined in

[RSA.ts:31](https://github.com/Big-3/Modul_RSA/blob/bdf934f/src/ts/RSA.ts#L31)

## Properties

### d

• `Private` `Readonly` **d**: `bigint`

#### Defined in

[RSA.ts:28](https://github.com/Big-3/Modul_RSA/blob/bdf934f/src/ts/RSA.ts#L28)

___

### pubKey

• `Private` `Readonly` **pubKey**: [`PublicKey`](PublicKey.md)

#### Defined in

[RSA.ts:29](https://github.com/Big-3/Modul_RSA/blob/bdf934f/src/ts/RSA.ts#L29)

## Methods

### decrypt

▸ **decrypt**(`c`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `bigint` |

#### Returns

`bigint`

#### Defined in

[RSA.ts:44](https://github.com/Big-3/Modul_RSA/blob/bdf934f/src/ts/RSA.ts#L44)

___

### getExpD

▸ **getExpD**(): `bigint`

#### Returns

`bigint`

#### Defined in

[RSA.ts:36](https://github.com/Big-3/Modul_RSA/blob/bdf934f/src/ts/RSA.ts#L36)

___

### getPublicKey

▸ **getPublicKey**(): [`PublicKey`](PublicKey.md)

#### Returns

[`PublicKey`](PublicKey.md)

#### Defined in

[RSA.ts:40](https://github.com/Big-3/Modul_RSA/blob/bdf934f/src/ts/RSA.ts#L40)

___

### sign

▸ **sign**(`h`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `h` | `bigint` |

#### Returns

`bigint`

#### Defined in

[RSA.ts:48](https://github.com/Big-3/Modul_RSA/blob/bdf934f/src/ts/RSA.ts#L48)
