import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-viem"; // Add this line!
import * as dotenv from "dotenv";

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    fhevm: {
      type: "http",
      url: "https://devnet.fhenix.zone",
      accounts: PRIVATE_KEY !== "" ? [PRIVATE_KEY] : [],
    },
  },
};

export default config;
