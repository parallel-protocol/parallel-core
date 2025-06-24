import assert from "assert";

import { type DeployFunction } from "hardhat-deploy/types";

const contractName = "SiloVaultsMorphoAdapter";

const siloVault = "0x92ebF5A1fB4061B45222a6d76ACCF4698bdE4b95";
const siloDecimalsOffset = 18;

const deploy: DeployFunction = async (hre) => {
  const { getNamedAccounts, deployments, network } = hre;

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  assert(deployer, "Missing deployer account");

  console.log(`Deploying contract: ${contractName}, network: ${network.name}, deployer: ${deployer}`);

  const contract = await deploy(contractName, {
    from: deployer,
    args: [siloVault, siloDecimalsOffset],
  });

  console.log(`Deployed contract: ${contractName}, network: ${network.name}, address: ${contract.address}`);
};

deploy.tags = [contractName];
export default deploy;
