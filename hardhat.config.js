require("@nomiclabs/hardhat-waffle");
require('solidity-coverage');
require("hardhat-gas-reporter");

require("dotenv").config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    },
    networks: {
      ganache: {
        url: "https://rpc0.altcoinchain.org/rpc"
      },
      "bsc-testnet": {
        url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
        accounts: [process.env.ACCOUNT_PRIVATE_KEY]
      }
    }
  },
};
