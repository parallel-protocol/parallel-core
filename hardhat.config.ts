import "dotenv/config";

import "hardhat-deploy";

import { HardhatUserConfig, HttpNetworkAccountsUserConfig } from "hardhat/types";

import { getRpcURL } from "./utils/getRpcURL";
import { getVerifyConfig } from "./utils/getVerifyConfig";

const PRIVATE_KEY = process.env.PRIVATE_KEY;

if (!PRIVATE_KEY) {
  throw new Error(
    "Could not find MNEMONIC or PRIVATE_KEY environment variables. It will not be possible to execute transactions in your example.",
  );
}
const accounts: HttpNetworkAccountsUserConfig | undefined = [PRIVATE_KEY];

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.28",
        settings: {
          optimizer: {
            enabled: true,
            runs: 10_000,
          },
        },
      },
    ],
  },
  networks: {
    mainnet: {
      accounts,
      url: getRpcURL("mainnet"),
      verify: getVerifyConfig("mainnet"),
    },
    sepolia: {
      accounts,
      url: getRpcURL("sepolia"),
      verify: getVerifyConfig("sepolia"),
    },
    arbiSepolia: {
      accounts,
      url: getRpcURL("arbiSepolia"),
      verify: getVerifyConfig("arbiSepolia"),
    },
    fantom: {
      accounts,
      url: getRpcURL("fantom"),
      verify: getVerifyConfig("fantom"),
    },
    polygon: {
      accounts,
      url: getRpcURL("polygon"),
      verify: getVerifyConfig("polygon"),
    },
    optimism: {
      url: getRpcURL("optimism"),
      verify: getVerifyConfig("optimism"),
      accounts,
    },
    base: {
      url: getRpcURL("base"),
      verify: getVerifyConfig("base"),
      accounts,
    },
    arbitrum: {
      url: getRpcURL("arbitrum"),
      verify: getVerifyConfig("arbitrum"),
      accounts,
    },
    sonic: {
      url: getRpcURL("sonic"),
      verify: getVerifyConfig("sonic"),
      accounts,
    },
    sei: {
      url: getRpcURL("sei"),
      verify: getVerifyConfig("sei"),
      accounts,
    },
    avalanche: {
      url: getRpcURL("avalanche"),
      verify: getVerifyConfig("avalanche"),
      accounts,
    },
    bsc: {
      url: getRpcURL("bsc"),
      verify: getVerifyConfig("bsc"),
      accounts,
    },
    berachain: {
      url: getRpcURL("berachain"),
      verify: getVerifyConfig("berachain"),
      accounts,
    },
    scroll: {
      url: getRpcURL("scroll"),
      verify: getVerifyConfig("scroll"),
      accounts,
    },
    mantle: {
      url: getRpcURL("mantle"),
      verify: getVerifyConfig("mantle"),
      accounts,
    },
    gnosis: {
      url: getRpcURL("gnosis"),
      verify: getVerifyConfig("gnosis"),
      accounts,
    },
    unichain: {
      url: getRpcURL("unichain"),
      verify: getVerifyConfig("unichain"),
      accounts,
    },
    ink: {
      url: getRpcURL("ink"),
      verify: getVerifyConfig("ink"),
      accounts,
    },
    hyperevm: {
      url: getRpcURL("hyperevm"),
      verify: getVerifyConfig("hyperevm"),
      accounts,
    },
    tac: {
      url: getRpcURL("tac"),
      verify: getVerifyConfig("tac"),
      accounts,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};

export default config;
