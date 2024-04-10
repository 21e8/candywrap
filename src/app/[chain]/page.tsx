import Ui from "../_ui";
import { CHAINS, IDS, SYMBOLS } from "../_constants";
export default function Home({ params }: { params: { chain: string } }) {
  const actualSymbol = SYMBOLS[IDS[params.chain]] || "ETH";
  return (
    <>
      <h1 className="text-3xl mb-2 lg:mb-4">Candywrap</h1>
      <h1 className="text-2xl mt-4 lg:mt-8 mb-6 lg:mb-12 text-center">
        Wrap/Unwrap {actualSymbol} on <span> {CHAINS[params.chain]?.name}</span>
      </h1>
      <Ui chain={params.chain} />
    </>
  );
}
