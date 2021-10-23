# Class: PublicKey

## Table of contents

### Constructors

- [constructor](PublicKey.md#constructor)

### Properties

- [e](PublicKey.md#e)
- [n](PublicKey.md#n)

### Methods

- [encrypt](PublicKey.md#encrypt)
- [getExpE](PublicKey.md#getexpe)
- [getModN](PublicKey.md#getmodn)
- [verify](PublicKey.md#verify)

## Constructors

### constructor

• **new PublicKey**(`e`, `n`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `bigint` |
| `n` | `bigint` |

#### Defined in

[RSA.ts:6](https://github.com/Big-3/Modul_RSA/blob/bdf934f/src/ts/RSA.ts#L6)

## Properties

### e

• `Private` `Readonly` **e**: `bigint`

#### Defined in

[RSA.ts:3](https://github.com/Big-3/Modul_RSA/blob/bdf934f/src/ts/RSA.ts#L3)

___

### n

• `Private` `Readonly` **n**: `bigint`

#### Defined in

[RSA.ts:4](https://github.com/Big-3/Modul_RSA/blob/bdf934f/src/ts/RSA.ts#L4)

## Methods

### encrypt

▸ **encrypt**(`m`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `bigint` |

#### Returns

`bigint`

#### Defined in

[RSA.ts:19](https://github.com/Big-3/Modul_RSA/blob/bdf934f/src/ts/RSA.ts#L19)

___

### getExpE

▸ **getExpE**(): `bigint`

#### Returns

`bigint`

#### Defined in

[RSA.ts:11](https://github.com/Big-3/Modul_RSA/blob/bdf934f/src/ts/RSA.ts#L11)

___

### getModN

▸ **getModN**(): `bigint`

#### Returns

`bigint`

#### Defined in

[RSA.ts:15](https://github.com/Big-3/Modul_RSA/blob/bdf934f/src/ts/RSA.ts#L15)

___

### verify

▸ **verify**(`s`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `bigint` |

#### Returns

`bigint`

#### Defined in

[RSA.ts:23](https://github.com/Big-3/Modul_RSA/blob/bdf934f/src/ts/RSA.ts#L23)
