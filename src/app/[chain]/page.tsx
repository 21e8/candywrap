import Ui from "../_ui";
import { CHAINS } from "../_constants";
export default function Home({ params }: { params: { chain: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center px-8 py-6 max-w-7xl mx-auto">
      <h1 className="text-3xl mb-2 lg:mb-4">Candywrap</h1>
      <h1 className="text-2xl mt-4 lg:mt-8 mb-6 lg:mb-12 text-center">
        Wrap/Unwrap {CHAINS[params.chain]?.nativeCurrency?.symbol || "ETH"} on{" "}
        <span> {CHAINS[params.chain]?.name}</span>
      </h1>
      <Ui chain={params.chain} />
    </main>
  );
}
