import type { AppProps } from "next/app";
import { WagmiProvider, createConfig, http } from "wagmi";
import { injected } from "wagmi/connectors";
import { defineChain } from "viem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Fhenix Devnet
const fhenix = defineChain({
  id: 8008135,
  name: "Fhenix Devnet",
  nativeCurrency: {
    name: "FHE",
    symbol: "FHE",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://devnet.fhenix.zone"],
    },
  },
});

const config = createConfig({
  chains: [fhenix],
  connectors: [injected()],
  transports: {
    [fhenix.id]: http("https://devnet.fhenix.zone"),
  },
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <Component {...pageProps} />
      </WagmiProvider>
    </QueryClientProvider>
  );
}
