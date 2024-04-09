import { Metadata, ResolvingMetadata } from "next";
import {
  avalanche,
  base,
  blast,
  bsc,
  degen,
  mainnet,
  optimism,
  polygon,
} from "viem/chains";
import Ui from "../_ui";
import { SYMBOLS } from "../_constants";

const names = {
  [blast.id]: "blast",
  [base.id]: "base",
  [polygon.id]: "polygon",
  [bsc.id]: "bsc",
  [degen.id]: "degen",
  [mainnet.id]: "mainnet",
  [optimism.id]: "optimism",
  [avalanche.id]: "avalanche",
};
const ids: Record<string, number> = {
  blast: blast.id,
  base: base.id,
  polygon: polygon.id,
  bsc: bsc.id,
  degen: degen.id,
  mainnet: mainnet.id,
  optimism: optimism.id,
  avalanche: avalanche.id,
};

type Props = {
  params: { chain: string };
};

export async function generateStaticParams() {
  return Object.values(names);
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { chain } = params;

  return {
    title: `Wrap and unwrap ${SYMBOLS[ids[chain]]} and W${SYMBOLS[ids[chain]]}`,
  };
}

export default function Home({ params }: { params: { chain: string } }) {
  return <Ui />;
}
