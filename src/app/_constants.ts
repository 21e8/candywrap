import { Abi, Address, http } from "viem";
import {
  avalanche,
  base,
  blast,
  bsc,
  degen,
  fantom,
  filecoin,
  fuse,
  mainnet,
  optimism,
  polygon,
  scroll,
  zora,
} from "viem/chains";
import {
  WETH_MAINNET_ABI,
  WETH_BLAST_ABI,
  WETH_OP_ABI,
  WMATIC_POLYGON_ABI,
  WAVAX_AVAX_ABI,
  WETH_BASE_ABI,
  WBNB_BSC_ABI,
  WDEGEN_DEGEN_ABI,
} from "./_abis";

export const WETH_BLAST_ADDRESS: Address =
  "0x4300000000000000000000000000000000000004";
export const WETH_MAINNET_ADDRESS: Address =
  "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
export const WETH_OP_ADDRESS: Address =
  "0x4200000000000000000000000000000000000006";
export const WETH_BASE_ADDRESS: Address =
  "0x4200000000000000000000000000000000000006";
export const WETH_ZORA_ADDRESS: Address =
  "0x4200000000000000000000000000000000000006";
export const WMATIC_POLYGON_ADDRESS: Address =
  "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270";
export const WAVAX_AVAX_ADDRESS: Address =
  "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7";
export const WBNB_BSC_ADDRESS: Address =
  "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
export const WDEGEN_DEGEN_ADDRESS: Address =
  "0xEb54dACB4C2ccb64F8074eceEa33b5eBb38E5387";
export const FILECOIN_WFIL_ADDRESS: Address =
  "0x60E1773636CF5E4A227d9AC24F20fEca034ee25A";
export const FANTOM_WFTM_ADDRESS: Address =
  "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83";
export const FUSE_WFUSE_ADDRESS: Address =
  "0x0BE9e53fd7EDaC9F859882AfdDa116645287C629";
export const WETH_SCROLL_ADDRESS: Address =
  "0x5300000000000000000000000000000000000004";
export const WETH_ADDRESSES: Record<number, Address> = {
  [mainnet.id]: WETH_MAINNET_ADDRESS,
  [blast.id]: WETH_BLAST_ADDRESS,
  [optimism.id]: WETH_OP_ADDRESS,
  [polygon.id]: WMATIC_POLYGON_ADDRESS,
  [avalanche.id]: WAVAX_AVAX_ADDRESS,
  [base.id]: WETH_BASE_ADDRESS,
  [bsc.id]: WBNB_BSC_ADDRESS,
  [degen.id]: WDEGEN_DEGEN_ADDRESS,
  [filecoin.id]: FILECOIN_WFIL_ADDRESS,
  [fantom.id]: FANTOM_WFTM_ADDRESS,
  [fuse.id]: FUSE_WFUSE_ADDRESS,
  [zora.id]: WETH_ZORA_ADDRESS,
  [scroll.id]: WETH_ZORA_ADDRESS,
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
  filecoin,
  fuse,
  fantom,
  zora,
  scroll,
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
  [filecoin.id]: "https://icons.llamao.fi/icons/chains/rsz_filecoin.jpg",
  [fuse.id]: "https://icons.llamao.fi/icons/chains/rsz_fuse.jpg",
  [fantom.id]: "https://icons.llamao.fi/icons/chains/rsz_fantom.jpg",
  [zora.id]: "/logos/zora.png",
  [scroll.id]: "/logos/scroll.png",
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
  [filecoin.id]: filecoin.nativeCurrency.symbol,
  [fuse.id]: fuse.nativeCurrency.symbol,
  [fantom.id]: fantom.nativeCurrency.symbol,
  [zora.id]: zora.nativeCurrency.symbol,
  [scroll.id]: scroll.nativeCurrency.symbol,
};

export const NAMES: Record<number, string> = {
  [blast.id]: blast.name,
  [base.id]: base.name,
  [polygon.id]: polygon.name,
  [bsc.id]: bsc.name,
  [degen.id]: degen.name,
  [mainnet.id]: mainnet.name,
  [optimism.id]: optimism.name,
  [avalanche.id]: avalanche.name,
  [filecoin.id]: filecoin.name,
  [fuse.id]: fuse.name,
  [fantom.id]: fantom.name,
  [zora.id]: zora.name,
  [scroll.id]: scroll.name,
};

export const CHAIN_IDS: Record<number, string> = {
  [blast.id]: "blast",
  [base.id]: "base",
  [polygon.id]: "polygon",
  [bsc.id]: "bsc",
  [degen.id]: "degen",
  [mainnet.id]: "ethereum",
  [optimism.id]: "optimism",
  [avalanche.id]: "avalanche",
  [filecoin.id]: "filecoin",
  [fuse.id]: "fuse",
  [fantom.id]: "fantom",
  [zora.id]: "zora",
  [scroll.id]: "scroll",
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
  filecoin: filecoin,
  fuse: fuse,
  fantom: fantom,
  zora: zora,
  scroll: scroll,
};

export const WETH_ABIS: Record<string, Abi> = {
  [mainnet.id]: WETH_MAINNET_ABI,
  [blast.id]: WETH_BLAST_ABI,
  [optimism.id]: WETH_OP_ABI,
  [polygon.id]: WMATIC_POLYGON_ABI,
  [avalanche.id]: WAVAX_AVAX_ABI,
  [base.id]: WETH_BASE_ABI,
  [bsc.id]: WBNB_BSC_ABI,
  [degen.id]: WDEGEN_DEGEN_ABI,
  [filecoin.id]: WDEGEN_DEGEN_ABI,
  [fuse.id]: WDEGEN_DEGEN_ABI,
  [fantom.id]: WDEGEN_DEGEN_ABI,
  [zora.id]: WDEGEN_DEGEN_ABI,
  [scroll.id]: WDEGEN_DEGEN_ABI,
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
  filecoin: filecoin.id,
  fuse: fuse.id,
  fantom: fantom.id,
  zora: zora.id,
  scroll: scroll.id,
};

export const RPCS = {
  // RPC URL for each chain
  [avalanche.id]: http("https://avalanche.drpc.org"),
  [base.id]: http("https://base-rpc.publicnode.com"),
  [blast.id]: http("https://rpc.blast.io"),
  [bsc.id]: http("https://bsc-rpc.publicnode.com"),
  [degen.id]: http("https://rpc.degen.tips"),
  [mainnet.id]: http(`https://ethereum-rpc.publicnode.com`),
  [optimism.id]: http("https://optimism-rpc.publicnode.com"),
  [polygon.id]: http("https://polygon-bor-rpc.publicnode.com"),
  [filecoin.id]: http("https://filecoin.drpc.org"),
  [fuse.id]: http("https://fuse.drpc.org"),
  [fantom.id]: http("https://rpc3.fantom.network"),
  [zora.id]: http("https://rpc.zora.energy"),
  [scroll.id]: http("https://scroll.drpc.org"),
};
