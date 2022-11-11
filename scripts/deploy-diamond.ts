import { ethers, network } from 'hardhat';

// npx hardhat run scripts/deploy-diamond.ts --network polygonMumbai
// npx hardhat verify --network polygonMumbai 0x9EB...

async function main() {
  const Diamond = await ethers.getContractFactory('Diamond');
  const diamond = await Diamond.deploy();
  await diamond.deployed();

  // wait for 6 blocks to confirm deployment
  const WAIT_BLOCK_CONFIRMATIONS = 6;
  await diamond.deployTransaction.wait(WAIT_BLOCK_CONFIRMATIONS);

  console.log(`Diamond deployed to: ${diamond.address} on ${network.name}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
