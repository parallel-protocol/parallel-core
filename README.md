# Parallel Core

## Summary

This repository own all global contracts used by the Parallel Protocol

## Architecture

The Parallel Core own the following contracts:

- The [AccessManager](./contracts/access/AccessManager.sol) inherit of
  [Openzeppelin AccessManager](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/manager/AccessManager.sol)
  contract. Handle all access for the protocol.

## 4. Getting Started

### Foundry

[Install foundry following the instructions.](https://book.getfoundry.sh/getting-started/installation)

### Install js dependencies

```bash
bun i
```

### Fill the `.env` file with your data

The Foundry script relies solely on the PRIVATE_KEY. The MNEMONIC is used on the Hardhat side and will override the
PRIVATE_KEY if it is defined.

```bash
# You don't need to set both of these values, just pick the one that you prefer and set that one
PRIVATE_KEY="PRIVATE KEY"
ALCHEMY_API_KEY="ALCHEMY_API_KEY"
```

### Compile contracts

```bash
bun run compile
```

### Run tests

```bash
bun run test
```

You will find other useful commands in the [package.json](./package.json) file.

## Licences

All contracts is under the `MIT` License, see [`LICENSE`](./LICENSE).
