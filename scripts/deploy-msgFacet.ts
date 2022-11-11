import { ethers, network } from 'hardhat';

// npx hardhat run scripts/deploy-msgFacet.ts --network polygonMumbai
// npx hardhat verify --network polygonMumbai 0x0x270...

async function main() {
  const MsgFacet = await ethers.getContractFactory('MsgFacet');
  const msgFacet = await MsgFacet.deploy();
  await msgFacet.deployed();

  const WAIT_BLOCK_CONFIRMATIONS = 6;
  await msgFacet.deployTransaction.wait(WAIT_BLOCK_CONFIRMATIONS);

  console.log(`MsgFacet deployed to: ${msgFacet.address} on ${network.name}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
