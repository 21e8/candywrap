import type { Metadata, ResolvingMetadata } from "next";
import {
  IDS,
  CHAIN_IDS,
  SYMBOLS,
  NAMES,
  BASE_METADATA,
} from "../../util/constants";
import { GithubIcon } from "@/components/github-icon";

type Props = {
  params: { chain: string };
};

const config = {
  author: "0xAlice",
  githubRepo: "https://github.com/21e8/candywrap",
  twitter: "https://twitter.com/thereal0xalice",
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { chain } = params;
  const symb = chain === "boba" ? "BOBA" : SYMBOLS[IDS[chain]] === "" || "ETH";
  const description = `Easily wrap and unwrap your ${symb} or w${symb} in a few clicks right from your wallet. Supports multiple chains. Instead of swapping for a high fee use this instead. Convert now on ${
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
  return Object.values(CHAIN_IDS).map((chain) => ({ chain }));
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pb-24">
      <main className="flex min-h-screen flex-col items-center px-8 py-6 max-w-7xl mx-auto">
        {children}
        <div className="flex flex-col justify-center items-center text-center mt-16">
          <span className="mb-8">
            Made With ❤️ by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-blue-400"
              href={config.twitter}
            >
              {config.author}
            </a>
          </span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-400"
            href={config.githubRepo}
            aria-label="Fork me on GitHub"
            title="Fork me on GitHub"
          >
            <i>
              <GithubIcon className="h-12 w-12" />
            </i>
          </a>
        </div>
      </main>
    </div>
  );
}
