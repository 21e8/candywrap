import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./_providers";
import { BASE_METADATA } from "./_base-metadata";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  ...BASE_METADATA,
  openGraph: {
    title: BASE_METADATA.title,
    description: BASE_METADATA.description,
    url: "https://candywrap.dev",
  },
  twitter: {
    title: BASE_METADATA.title,
    description: BASE_METADATA.description,
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
      <body className={`${inter.className} dark`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
