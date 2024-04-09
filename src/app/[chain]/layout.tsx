import type { Metadata, ResolvingMetadata } from "next";
import { BASE_METADATA } from "../_base-metadata";
import { IDS, NAMES, SYMBOLS } from "../_constants";

type Props = {
  params: { chain: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { chain } = params;
  const symb = SYMBOLS[IDS[chain]] || 'ETH';
  const description = `Easily wrap and unwrap your ${symb} or W${symb} in a few clicks right from your wallet. Supports multiple chains. Swap now on ${
    NAMES[IDS[chain]]
  }!`;
  return {
    ...BASE_METADATA,
    title: `CandyWrap - ${NAMES[IDS[chain]] || "Ethereum"}`,
    description,
    openGraph: {
      title: `CandyWrap - ${NAMES[IDS[chain]] || "Ethereum"}`,
      url: `https://candywrap.dev/${chain}`,
      description,
    },
    twitter: {
      title: `CandyWrap - ${NAMES[IDS[chain]] || "Ethereum"}`,
      description,
      creator: "@thereal0xalice",
    },
  };
}

export async function generateStaticParams() {
  return Object.values(NAMES).map((name) => ({ chain: name }));
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
