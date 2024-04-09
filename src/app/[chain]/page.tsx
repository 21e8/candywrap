import { Metadata, ResolvingMetadata } from "next";
import Ui from "../_ui";
import { SYMBOLS, CHAINS, NAMES, IDS } from "../_constants";
import { BASE_METADATA } from "../_base-metadata";

type Props = {
  params: { chain: string };
};

export async function generateStaticParams() {
  return Object.values(NAMES);
}

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

export default function Home({ params }: { params: { chain: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center px-8 py-6 max-w-7xl mx-auto">
      <h1 className="text-3xl mb-4">Candywrap</h1>
      <h1 className="text-2xl mb-12">
        Wrap/Umwrap {CHAINS[params.chain]?.nativeCurrency?.symbol || 'ETH'}
      </h1>
      <Ui />
    </main>
  );
}
