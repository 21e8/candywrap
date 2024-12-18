import { redirect } from "next/navigation";
import Ui from "../../components/ui";
import { CHAINS, IDS, SYMBOLS } from "../../util/constants";
import { Logo } from "@/components/logo";

export default function Home({ params }: { params: { chain: string } }) {
  const actualSymbol = SYMBOLS[IDS[params.chain]] || "ETH";
  if (params.chain === "mainnet") {
    return redirect("/ethereum");
  }

  if (!params.chain) {
    return redirect("/ethereum");
  }
  
  return (
    <>
      <div className="my-12 lg:mx-12 text-secondary max-w-xl">
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
