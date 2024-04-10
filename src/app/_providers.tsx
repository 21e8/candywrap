"use client";
import { WagmiProvider, createConfig, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  mainnet,
  blast,
  degen,
  bsc,
  avalanche,
  base,
  optimism,
  polygon,
  filecoin,
  fuse,
  fantom,
  zora,
  scroll,
} from "wagmi/chains";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { SUPPORTED_CHAINS } from "./_constants";
import { ToastProvider } from "./_toast-provider";

const queryClient = new QueryClient();

export const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: SUPPORTED_CHAINS,
    transports: {
      // RPC URL for each chain
      [avalanche.id]: http("https://avalanche.drpc.org"),
      [base.id]: http("https://base-rpc.publicnode.com"),
      [blast.id]: http("https://rpc.blast.io"),
      [bsc.id]: http("https://bsc-rpc.publicnode.com"),
      [degen.id]: http("https://rpc.degen.tips"),
      [mainnet.id]: http(`https://ethereum-rpc.publicnode.com`),
      [optimism.id]: http("https://optimism-rpc.publicnode.com"),
      [polygon.id]: http("https://polygon-bor-rpc.publicnode.com"),
      [filecoin.id]: http("https://filecoin.drpc.org"),
      [fuse.id]: http("https://fuse.drpc.org"),
      [fantom.id]: http("https://rpc3.fantom.network"),
      [zora.id]: http("https://rpc.zora.energy"),
      [scroll.id]: http("https://scroll.drpc.org"),
    },

    // Required API Keys
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,

    // Required App Info
    appName: "CandyWrap",

    // Optional App Info
    appDescription: "Wrap and unwrap your ETH/WETH with ease",
    appUrl: "https://candywrap.dev", // your app's url
    // appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
    ssr: true,
  })
);

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ToastProvider>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ConnectKitProvider>{children}</ConnectKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ToastProvider>
  );
};
