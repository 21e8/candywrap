"use client";
import { WagmiProvider, createConfig } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { RPCS, SUPPORTED_CHAINS } from "../util/constants";
import { ToastProvider } from "../context/toast-provider";

const queryClient = new QueryClient();

export const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: SUPPORTED_CHAINS,
    transports: RPCS,

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
