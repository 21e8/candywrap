import type { Metadata, ResolvingMetadata } from "next";
import { BASE_METADATA } from "../_base-metadata";
import { IDS, CHAIN_IDS, SYMBOLS, NAMES } from "../_constants";

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
  const symb = SYMBOLS[IDS[chain]] || "ETH";
  const description = `Easily wrap and unwrap your ${symb} or W${symb} in a few clicks right from your wallet. Supports multiple chains. Instead of swapping for a high fee use this instead. Convert now on ${
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
  return Object.values(CHAIN_IDS).map((name) => ({ chain: name }));
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
          >
            <i>
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={48}
                height={48}
              >
                {" "}
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
              </svg>
            </i>
          </a>
        </div>
      </main>
    </div>
  );
}
