import Ui from "./_ui";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-8 py-6 max-w-7xl mx-auto">
      <h1 className="text-3xl mb-4">Candywrap</h1>
      <h1 className="text-2xl mb-12">Wrap/Umwrap ETH/WETH</h1>
      <Ui />
    </main>
  );
}
