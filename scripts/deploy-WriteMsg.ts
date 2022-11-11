import { ethers, network } from 'hardhat';

// npx hardhat run scripts/deploy-WriteMsg.ts --network polygonMumbai
// npx hardhat verify --network polygonMumbai 0x5a3...

async function main() {
  const WriteMsg = await ethers.getContractFactory('WriteMsg');
  const writeMsg = await WriteMsg.deploy();
  await writeMsg.deployed();

  const WAIT_BLOCK_CONFIRMATIONS = 6;
  await writeMsg.deployTransaction.wait(WAIT_BLOCK_CONFIRMATIONS);

  console.log(`WriteMsg deployed to: ${writeMsg.address} on ${network.name}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
