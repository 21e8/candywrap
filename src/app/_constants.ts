import { Address } from "viem";
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

export const WETH_BLAST_ADDRESS: Address =
  "0x4300000000000000000000000000000000000004";
export const WETH_MAINNET_ADDRESS: Address =
  "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
export const WETH_OP_ADDRESS: Address =
  "0x4200000000000000000000000000000000000006";
export const WETH_BASE_ADDRESS: Address =
  "0x4200000000000000000000000000000000000006";
export const WMATIC_POLYGON_ADDRESS: Address =
  "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270";
export const WAVAX_AVAX_ADDRESS: Address =
  "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7";
export const WBNB_BSC_ADDRESS: Address =
  "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
export const WDEGEN_DEGEN_ADDRESS: Address =
  "0xEb54dACB4C2ccb64F8074eceEa33b5eBb38E5387";

export const WETH_ADDRESSES: Record<number, Address> = {
  [mainnet.id]: WETH_MAINNET_ADDRESS,
  [blast.id]: WETH_BLAST_ADDRESS,
  [optimism.id]: WETH_OP_ADDRESS,
  [polygon.id]: WMATIC_POLYGON_ADDRESS,
  [avalanche.id]: WAVAX_AVAX_ADDRESS,
  [base.id]: WETH_BASE_ADDRESS,
  [bsc.id]: WBNB_BSC_ADDRESS,
  [degen.id]: WDEGEN_DEGEN_ADDRESS,
};

export const SUPPORTED_CHAINS = [
  mainnet,
  blast,
  optimism,
  polygon,
  avalanche,
  base,
  bsc,
  degen,
] as const;
export const SUPPORTED_CHAIN_IDS = SUPPORTED_CHAINS.map(
  (chain) => chain.id
) as number[];
export const LOGOS: Record<number, string> = {
  [avalanche.id]: "https://icons.llamao.fi/icons/chains/rsz_avalanche.jpg",
  [base.id]: "https://icons.llamao.fi/icons/chains/rsz_base.jpg",
  [blast.id]: "https://icons.llamao.fi/icons/chains/rsz_blast.jpg",
  [bsc.id]: "https://icons.llamao.fi/icons/chains/rsz_bsc.jpg",
  [degen.id]: "https://icons.llamao.fi/icons/chains/rsz_degen.jpg",
  [mainnet.id]: "https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg",
  [optimism.id]: "https://icons.llamao.fi/icons/chains/rsz_optimism.jpg",
  [polygon.id]: "https://icons.llamao.fi/icons/chains/rsz_polygon.jpg",
};

export const SYMBOLS: Record<number, string> = {
  [mainnet.id]: mainnet.nativeCurrency.symbol,
  [blast.id]: blast.nativeCurrency.symbol,
  [optimism.id]: optimism.nativeCurrency.symbol,
  [polygon.id]: polygon.nativeCurrency.symbol,
  [avalanche.id]: avalanche.nativeCurrency.symbol,
  [base.id]: base.nativeCurrency.symbol,
  [bsc.id]: bsc.nativeCurrency.symbol,
  [degen.id]: degen.nativeCurrency.symbol,
};

export const NAMES: Record<number, string> = {
  [blast.id]: "blast",
  [base.id]: "base",
  [polygon.id]: "polygon",
  [bsc.id]: "bsc",
  [degen.id]: "degen",
  [mainnet.id]: "ethereum",
  [optimism.id]: "optimism",
  [avalanche.id]: "avalanche",
};

export const CHAINS: Record<string, any> = {
  blast: blast,
  base: base,
  polygon: polygon,
  bsc: bsc,
  degen: degen,
  ethereum: mainnet,
  optimism: optimism,
  avalanche: avalanche,
};

export const IDS: Record<string, number> = {
  blast: blast.id,
  base: base.id,
  polygon: polygon.id,
  bsc: bsc.id,
  degen: degen.id,
  ethereum: mainnet.id,
  optimism: optimism.id,
  avalanche: avalanche.id,
};
