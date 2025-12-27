import hre from "hardhat";

async function main() {
  console.log("Starting deployment...");

  // ⬇️ TEMP FIX: silence TS until Hardhat fixes viem typings
  const hreAny = hre as any;

  const publicClient = await hreAny.viem.getPublicClient();
  const [walletClient] = await hreAny.viem.getWalletClients();

  const contract = await hreAny.viem.deployContract(
    "PrivateVoting",
    [],
    {
      client: {
        public: publicClient,
        wallet: walletClient,
      },
    }
  );

  console.log("PrivateVoting deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
