import { Abi, Address, http } from "viem";
import {
  aurora,
  avalanche,
  base,
  blast,
  bsc,
  canto,
  degen,
  fantom,
  filecoin,
  fuse,
  harmonyOne as harmony,
  linea,
  mainnet,
  metis,
  optimism,
  polygon,
  scroll,
  zora,
  moonbeam,
  moonriver,
  polygonZkEvm,
  zkSync,
  wanchain,
  boba,
} from "viem/chains";
import { WRAP_ABI } from "./_abis";

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
export const WETH_SCROLL_ADDRESS: Address =
  "0x5300000000000000000000000000000000000004";
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
export const WETH_AURORA_ADDRESS: Address =
  "0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB";
export const WCANTO_CANTO_ADDRESS: Address =
  "0x826551890Dc65655a0Aceca109aB11AbDbD7a07B";
export const WONE_ONE_ADDRESS: Address =
  "0xcf664087a5bb0237a0bad6742852ec6c8d69a27a";
export const WETH_LINEA_ADDRESS: Address =
  "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f";
export const WMETIS_METIS_ADDRESS: Address =
  "0x75cb093E4D61d2A2e65D8e0BBb01DE8d89b53481";
export const WGLMR_MOONBEAM_ADDRESS: Address =
  "0xacc15dc74880c9944775448304b263d191c6077f";
export const WMOVR_MOONRIVER_ADDRESS: Address =
  "0x98878b06940ae243284ca214f92bb71a2b032b8a";
export const WETH_POLYGONZKEVM_ADDRESS: Address =
  "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9";
export const WETH_ZKSYNC_ADDRESS: Address =
  "0x5aea5775959fbc2557cc8789bc1bf90a239d9a91";
export const WWAN_WAN_ADDRESS: Address =
  "0xdabd997ae5e4799be47d6e69d9431615cba28f48";
export const WETH_BOBA_ADDRESS: Address =
  "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000";
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
  [scroll.id]: WETH_SCROLL_ADDRESS,
  [aurora.id]: WETH_AURORA_ADDRESS,
  [canto.id]: WCANTO_CANTO_ADDRESS,
  [harmony.id]: WONE_ONE_ADDRESS,
  [linea.id]: WETH_LINEA_ADDRESS,
  [metis.id]: WMETIS_METIS_ADDRESS,
  [moonbeam.id]: WGLMR_MOONBEAM_ADDRESS,
  [moonriver.id]: WMOVR_MOONRIVER_ADDRESS,
  [polygonZkEvm.id]: WETH_POLYGONZKEVM_ADDRESS,
  [zkSync.id]: WETH_ZKSYNC_ADDRESS,
  [wanchain.id]: WWAN_WAN_ADDRESS,
  [boba.id]: WETH_BOBA_ADDRESS,
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
  aurora,
  canto,
  harmony,
  linea,
  metis,
  moonbeam,
  moonriver,
  polygonZkEvm,
  zkSync,
  wanchain,
  boba,
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
  [polygonZkEvm.id]: "https://icons.llamao.fi/icons/chains/rsz_polygon.jpg",
  [filecoin.id]: "https://icons.llamao.fi/icons/chains/rsz_filecoin.jpg",
  [fuse.id]: "https://icons.llamao.fi/icons/chains/rsz_fuse.jpg",
  [fantom.id]: "https://icons.llamao.fi/icons/chains/rsz_fantom.jpg",
  [zora.id]: "/logos/zora.png",
  [scroll.id]: "/logos/scroll.png",
  [aurora.id]: "https://icons.llamao.fi/icons/chains/rsz_aurora.jpg",
  [canto.id]: "https://icons.llamao.fi/icons/chains/rsz_canto.jpg",
  [harmony.id]: "/logos/harmony.webp",
  [linea.id]: "https://icons.llamao.fi/icons/chains/rsz_linea.jpg",
  [metis.id]: "https://icons.llamao.fi/icons/chains/rsz_metis.jpg",
  [moonbeam.id]: "https://icons.llamao.fi/icons/chains/rsz_moonbeam.jpg",
  [moonriver.id]: "https://icons.llamao.fi/icons/chains/rsz_moonriver.jpg",
  [zkSync.id]: "/logos/zksync.png",
  [wanchain.id]: "https://icons.llamao.fi/icons/chains/rsz_wanchain.jpg",
  [boba.id]: "https://icons.llamao.fi/icons/chains/rsz_boba.jpg",
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
  [aurora.id]: aurora.nativeCurrency.symbol,
  [canto.id]: canto.nativeCurrency.symbol,
  [harmony.id]: harmony.nativeCurrency.symbol,
  [linea.id]: linea.nativeCurrency.symbol,
  [metis.id]: metis.nativeCurrency.symbol,
  [moonbeam.id]: moonbeam.nativeCurrency.symbol,
  [moonriver.id]: moonriver.nativeCurrency.symbol,
  [polygonZkEvm.id]: polygonZkEvm.nativeCurrency.symbol,
  [zkSync.id]: zkSync.nativeCurrency.symbol,
  [wanchain.id]: wanchain.nativeCurrency.symbol,
  [boba.id]: "ETH",
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
  [aurora.id]: aurora.name,
  [canto.id]: canto.name,
  [harmony.id]: harmony.name,
  [linea.id]: linea.name,
  [metis.id]: metis.name,
  [moonbeam.id]: moonbeam.name,
  [moonriver.id]: moonriver.name,
  [polygonZkEvm.id]: polygonZkEvm.name,
  [zkSync.id]: zkSync.name,
  [wanchain.id]: wanchain.name,
  [boba.id]: boba.name,
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
  [aurora.id]: "aurora",
  [canto.id]: "canto",
  [harmony.id]: "harmony",
  [linea.id]: "linea",
  [metis.id]: "metis",
  [moonbeam.id]: "moonbeam",
  [moonriver.id]: "moonriver",
  [polygonZkEvm.id]: "polygonZkEvm",
  [zkSync.id]: "zkSync",
  [wanchain.id]: "wanchain",
  [boba.id]: "boba",
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
  aurora: aurora,
  canto: canto,
  harmony: harmony,
  linea: linea,
  metis: metis,
  moonbeam: moonbeam,
  moonriver: moonriver,
  polygonZkEvm: polygonZkEvm,
  zkSync: zkSync,
  wanchain: wanchain,
  boba: boba,
};

export const WETH_ABIS: Record<string, Abi> = {
  [mainnet.id]: WRAP_ABI,
  [blast.id]: WRAP_ABI,
  [optimism.id]: WRAP_ABI,
  [polygon.id]: WRAP_ABI,
  [avalanche.id]: WRAP_ABI,
  [base.id]: WRAP_ABI,
  [bsc.id]: WRAP_ABI,
  [degen.id]: WRAP_ABI,
  [filecoin.id]: WRAP_ABI,
  [fuse.id]: WRAP_ABI,
  [fantom.id]: WRAP_ABI,
  [zora.id]: WRAP_ABI,
  [scroll.id]: WRAP_ABI,
  [aurora.id]: WRAP_ABI,
  [canto.id]: WRAP_ABI,
  [harmony.id]: WRAP_ABI,
  [linea.id]: WRAP_ABI,
  [metis.id]: WRAP_ABI,
  [moonbeam.id]: WRAP_ABI,
  [moonriver.id]: WRAP_ABI,
  [polygonZkEvm.id]: WRAP_ABI,
  [zkSync.id]: WRAP_ABI,
  [wanchain.id]: WRAP_ABI,
  [boba.id]: WRAP_ABI,
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
  aurora: aurora.id,
  cantor: canto.id,
  harmony: harmony.id,
  linea: linea.id,
  metis: metis.id,
  moonbeam: moonbeam.id,
  moonriver: moonriver.id,
  polygonZkEvm: polygonZkEvm.id,
  zkSync: zkSync.id,
  wanchain: wanchain.id,
  boba: boba.id,
};

export const RPCS = {
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
  [aurora.id]: http("https://1rpc.io/aurora	"),
  [canto.id]: http("https://canto-rpc.ansybl.io"),
  [harmony.id]: http("https://1rpc.io/one	"),
  [linea.id]: http("https://linea.drpc.org"),
  [metis.id]: http("https://metis.drpc.org"),
  [moonbeam.id]: http("https://moonbeam-rpc.publicnode.com"),
  [moonriver.id]: http("https://moonriver-rpc.publicnode.com"),
  [polygonZkEvm.id]: http("https://polygon-zkevm.drpc.org"),
  [zkSync.id]: http("https://zksync.meowrpc.com"),
  [wanchain.id]: http("https://gwan-ssl.wandevs.org:56891"),
  [boba.id]: http("https://gateway.tenderly.co/public/boba-ethereum"),
};
