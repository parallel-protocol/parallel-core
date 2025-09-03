# Parallel Core

## Summary

This repository own all global contracts used by the Parallel Protocol

## Architecture

The Parallel Core own the following contracts:

- The [AccessManager](./contracts/access/AccessManager.sol) inherit of
  [Openzeppelin AccessManager](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/manager/AccessManager.sol)
  contract. Handle all access for the protocol.

## Documentation Links

## Deployment Addresses

## Security

### Assumptions

- Roles and wallets assigned to roles will must be tracked
- Admin of AccessManager must be a multisig wallet

### Audits

## Development

### Foundry

[Install foundry following the instructions.](https://book.getfoundry.sh/getting-started/installation)

### Install js dependencies

```bash
bun install
```

### Setup `.env` file

In order to interact with non local networks, you must create an `.env` that has:

```bash
PRIVATE_KEY="PRIVATE KEY"
ALCHEMY_API_KEY="ALCHEMY_API_KEY"
MAINNET_ETHERSCAN_API_KEY="MAINNET_ETHERSCAN_API_KEY"
```

For additional keys, you can check the [`.env.example`](/.env.example) file.

**Warning: always keep your confidential information safe**

### Compile contracts

```bash
bun run compile
```

### Run tests

```bash
bun run test
```

### [Slither](https://github.com/crytic/slither)

```bash
bun run slither
```

You will find other useful commands in the [package.json](./package.json) file.

## Contributing

If you're interested in contributing, please see our [contributions guidelines](./CONTRIBUTING.md).

## Questions & Feedback

For any question or feedback you can use [discord](https://discord.com/invite/mimodao). Don't hesitate to reach out on
[Twitter](https://twitter.com/mimo_labs) as well.

## Licences

All contracts is under the `MIT` License, see [`LICENSE`](./LICENSE).
