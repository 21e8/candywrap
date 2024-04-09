import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./_providers";

const inter = Inter({ subsets: ["latin"] });
const title = "CandyWrap";
const description =
  "Wrap and unwrap your ETH/WETH in a few clicks right from your wallet. Supports multiple chains.";
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
