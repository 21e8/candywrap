import Ui from "../_ui";
import { CHAINS, IDS, SYMBOLS } from "../_constants";
import { Logo } from "@/components/logo";

export default function Home({ params }: { params: { chain: string } }) {
  const actualSymbol = SYMBOLS[IDS[params.chain]] || "ETH";
  return (
    <>
      <div className="my-12 lg:mx-12 text-secondary">
        <Logo />
      </div>
      <h1 className="text-2xl mt-4 lg:mt-8 mb-6 lg:mb-12 text-center hidden">
        Wrap/Unwrap {actualSymbol}/ w{actualSymbol} on{" "}
        <span> {CHAINS[params.chain]?.name}</span>
      </h1>
      <Ui chain={params.chain} />
    </>
  );
}
