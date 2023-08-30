require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-foundry");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  settings: {
    metadata: {
      // Not including the metadata hash
      // https://github.com/paulrberg/hardhat-template/issues/31
      bytecodeHash: "none",
    },
    // Disable the optimizer when debugging
    // https://hardhat.org/hardhat-network/#solidity-optimizer-support
    optimizer: {
      enabled: true,
      runs: 200,
    },
    viaIR: true,
  }
};
