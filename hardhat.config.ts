import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-web3";
import { HardhatUserConfig, task } from "hardhat/config";

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config : HardhatUserConfig = {
  solidity: "0.8.4",
  
};

export default config