"use client";
import { WagmiProvider, createConfig, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mainnet, blast } from "wagmi/chains";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { SUPPORTED_CHAINS } from "./_constants";

const queryClient = new QueryClient();

export const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: SUPPORTED_CHAINS,
    transports: {
      // RPC URL for each chain
      [mainnet.id]: http(
        `https://eth-mainnet.g.alchemy.com/v2/${
          process.env.NEXT_PUBLIC_ALCHEMY_ID || ""
        }`
      ),
      [blast.id]: http("https://rpc.blast.io"),
    },

    // Required API Keys
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,

    // Required App Info
    appName: "Loop da Woop",

    // Optional App Info
    appDescription: "Buy, lock, borrow. Repeat. Unwind.",
    appUrl: "https://loopdawoop.xyz/", // your app's url
    // appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
    ssr: true,
  })
);

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ConnectKitProvider>{children}</ConnectKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
};
