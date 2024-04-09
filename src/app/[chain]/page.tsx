import { Metadata, ResolvingMetadata } from "next";
import Ui from "../_ui";
import { SYMBOLS, CHAINS, NAMES, IDS } from "../_constants";

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
  const symb = SYMBOLS[IDS[chain]];
  const description = `Wrap and unwrap your ${symb}/W${symb} in a few clicks right from your wallet. Supports multiple chains. Swap now on ${
    NAMES[IDS[chain]]
  }!`;
  return {
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
}

export default function Home({ params }: { params: { chain: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center px-8 py-6 max-w-7xl mx-auto">
      <h1 className="text-3xl mb-4">Candywrap</h1>
      <h1 className="text-2xl mb-12">
        Wrap/Umwrap {CHAINS[params.chain].nativeCurrency.symbol}
      </h1>
      <Ui />
    </main>
  );
}
