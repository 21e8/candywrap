import { Logo } from "@/components/logo";
import Ui from "../components/ui";
import { CHAIN_IDS, SUPPORTED_CHAINS } from "@/util/constants";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-8 py-6 max-w-7xl mx-auto">
      <div className="my-12 lg:mx-12 text-secondary max-w-xl">
        <Logo />
      </div>
      <h1 className="text-2xl mt-4 lg:mt-8 mb-6 lg:mb-12 text-center hidden">
        Wrap/Unwrap ETH/ wETH on <span> Ethereum</span>
      </h1>
      <Ui chain="ethereum" />
      <div className="hidden">
        {SUPPORTED_CHAINS.map((chain) => {
          return (
            <Link href={`/${CHAIN_IDS[chain.id]}`} key={chain.id}>
              {chain.name}
            </Link>
          );
        })}
      </div>
    </main>
  );
}
