import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: '0.8.9',
  networks: {
    polygonMumbai: {
      url: process.env.ALCHEMY_MUMBAI,
      accounts: [`${process.env.PRI_KEY}`],
    },
    goerli: {
      url: process.env.INFURA_GOERLI,
      accounts: [`${process.env.PRI_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      goerli: `${process.env.ETHER_KEY}`,
      polygonMumbai: `${process.env.POLY_KEY}`,
    },
  },
};

export default config;
