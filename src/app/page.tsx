import Image from "next/image";
import { SUPPORTED_CHAINS } from "./_constants";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <button className="btn btn-primary">
          Hello
        </button>

        {SUPPORTED_CHAINS.map((chain) => (
          <div key={chain.id} className="flex items-center justify-center">
            <h2 className="text-3xl font-bold">{chain.name}</h2>
          </div>
        ))}
    </main>
  );
}
