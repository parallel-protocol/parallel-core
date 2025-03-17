import assert from "assert";
import { type DeployFunction } from "hardhat-deploy/types";

const contractName = "AccessManager";

const deploy: DeployFunction = async (hre) => {
  const { getNamedAccounts, deployments } = hre;

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  assert(deployer, "Missing deployer account");

  console.log(`Deploying contract: ${contractName}, network: ${hre.network.name}, deployer: ${deployer}`);

  const contract = await deploy(contractName, {
    from: deployer,
    args: [],
    log: true,
    skipIfAlreadyDeployed: false,
  });

  console.log(`Deployed contract: ${contractName}, network: ${hre.network.name}, address: ${contract.address}`);
};

deploy.tags = [contractName];
export default deploy;
