import { ethers, network } from 'hardhat';

// npx hardhat run scripts/deploy-ReadMsg.ts --network polygonMumbai
// npx hardhat verify --network polygonMumbai 0xaA1...

async function main() {
  const ReadMsg = await ethers.getContractFactory('ReadMsg');
  const readMsg = await ReadMsg.deploy();
  await readMsg.deployed();

  const WAIT_BLOCK_CONFIRMATIONS = 6;
  await readMsg.deployTransaction.wait(WAIT_BLOCK_CONFIRMATIONS);

  console.log(`ReadMsg deployed to: ${readMsg.address} on ${network.name}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
