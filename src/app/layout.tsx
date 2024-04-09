import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./_providers";

const inter = Inter({ subsets: ["latin"] });
const title = "CandyWrap";
const description =
  "Wrap and unwrap your ETH/WETH in a few clicks right from your wallet. Supports multiple chains. Swap now on Ethereum!";
export const metadata: Metadata = {
  title: title,
  description,
  openGraph: {
    title: title,
    description,
    url: "https://candywrap.dev",
  },
  twitter: {
    title: title,
    description,
    creator: "@thereal0xalice",
  },
  authors: [{ name: "0xAlice" }],
  category: "Finance",
  creator: "0xAlice",
  keywords: [
    "wrap",
    "unwrap",
    "token",
    "exchange",
    "defi",
    "candywrap",
    "candy",
    "swap",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
