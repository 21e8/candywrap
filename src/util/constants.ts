import { Address, http } from "viem";
import {
  aurora,
  avalanche,
  blast,
  bsc,
  canto,
  fantom,
  filecoin,
  fuse,
  harmonyOne as harmony,
  linea,
  mainnet,
  metis,
  optimism,
  base,
  polygon,
  scroll,
  zora,
  moonbeam,
  moonriver,
  polygonZkEvm,
  zkSync,
  wanchain,
  boba,
  degen,
} from "viem/chains";

export const WDEGEN_DEGEN_ADDRESS: Address =
  "0xEb54dACB4C2ccb64F8074eceEa33b5eBb38E5387";
export const WETH_BASE_ADDRESS: Address =
  "0x4200000000000000000000000000000000000006";
export const WETH_BLAST_ADDRESS: Address =
  "0x4300000000000000000000000000000000000004";
export const WETH_MAINNET_ADDRESS: Address =
  "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
export const WETH_OP_ADDRESS: Address =
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
export const WFIL_FILECOIN_ADDRESS: Address =
  "0x60E1773636CF5E4A227d9AC24F20fEca034ee25A";
export const WFTM_FANTOM_ADDRESS: Address =
  "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83";
export const WFUSE_FUSE_ADDRESS: Address =
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
  [degen.id]: WDEGEN_DEGEN_ADDRESS,
  [mainnet.id]: WETH_MAINNET_ADDRESS,
  [blast.id]: WETH_BLAST_ADDRESS,
  [optimism.id]: WETH_OP_ADDRESS,
  [base.id]: WETH_BASE_ADDRESS,
  [polygon.id]: WMATIC_POLYGON_ADDRESS,
  [avalanche.id]: WAVAX_AVAX_ADDRESS,
  [bsc.id]: WBNB_BSC_ADDRESS,
  [filecoin.id]: WFIL_FILECOIN_ADDRESS,
  [fantom.id]: WFTM_FANTOM_ADDRESS,
  [fuse.id]: WFUSE_FUSE_ADDRESS,
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
  bsc,
  filecoin,
  fuse,
  fantom,
  zora,
  base,
  scroll,
  aurora,
  canto,
  harmony,
  linea,
  degen,
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
  [blast.id]: "https://icons.llamao.fi/icons/chains/rsz_blast.jpg",
  [bsc.id]: "https://icons.llamao.fi/icons/chains/rsz_bsc.jpg",
  [mainnet.id]: "https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg",
  [optimism.id]: "https://icons.llamao.fi/icons/chains/rsz_optimism.jpg",
  [polygon.id]: "https://icons.llamao.fi/icons/chains/rsz_polygon.jpg",
  [base.id]: "https://icons.llamao.fi/icons/chains/rsz_base.jpg",
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
  [degen.id]: "https://assets.coingecko.com/coins/images/36809/small/wdegen.jpeg?1712546442",
};

export const SYMBOLS: Record<number, string> = {
  [mainnet.id]: mainnet.nativeCurrency.symbol,
  [blast.id]: blast.nativeCurrency.symbol,
  [optimism.id]: optimism.nativeCurrency.symbol,
  [polygon.id]: polygon.nativeCurrency.symbol,
  [avalanche.id]: avalanche.nativeCurrency.symbol,
  [bsc.id]: bsc.nativeCurrency.symbol,
  [filecoin.id]: filecoin.nativeCurrency.symbol,
  [fuse.id]: fuse.nativeCurrency.symbol,
  [fantom.id]: fantom.nativeCurrency.symbol,
  [zora.id]: zora.nativeCurrency.symbol,
  [scroll.id]: scroll.nativeCurrency.symbol,
  [base.id]: base.nativeCurrency.symbol,
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
  [degen.id]: degen.nativeCurrency.symbol,
};

export const NAMES: Record<number, string> = {
  [blast.id]: blast.name,
  [polygon.id]: polygon.name,
  [bsc.id]: bsc.name,
  [mainnet.id]: mainnet.name,
  [optimism.id]: optimism.name,
  [avalanche.id]: avalanche.name,
  [filecoin.id]: filecoin.name,
  [fuse.id]: fuse.name,
  [fantom.id]: fantom.name,
  [zora.id]: zora.name,
  [base.id]: base.name,
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
  [degen.id]: degen.name,
};

export const CHAIN_IDS: Record<number, string> = {
  [blast.id]: "blast",
  [polygon.id]: "polygon",
  [bsc.id]: "bsc",
  [mainnet.id]: "ethereum",
  [optimism.id]: "optimism",
  [avalanche.id]: "avalanche",
  [filecoin.id]: "filecoin",
  [fuse.id]: "fuse",
  [fantom.id]: "fantom",
  [base.id]: "base",
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
  [degen.id]: "degen",
};

export const CHAINS: Record<string, any> = {
  blast: blast,
  polygon: polygon,
  bsc: bsc,
  ethereum: mainnet,
  optimism: optimism,
  avalanche: avalanche,
  filecoin: filecoin,
  fuse: fuse,
  base: base,
  fantom: fantom,
  zora: zora,
  scroll: scroll,
  aurora: aurora,
  degen: degen,
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

export const IDS: Record<string, number> = {
  blast: blast.id,
  polygon: polygon.id,
  bsc: bsc.id,
  ethereum: mainnet.id,
  optimism: optimism.id,
  avalanche: avalanche.id,
  filecoin: filecoin.id,
  fuse: fuse.id,
  fantom: fantom.id,
  zora: zora.id,
  base: base.id,
  scroll: scroll.id,
  aurora: aurora.id,
  degen: degen.id,
  canto: canto.id,
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
  [blast.id]: http("https://rpc.blast.io"),
  [bsc.id]: http("https://bsc-rpc.publicnode.com"),
  [mainnet.id]: http(`https://ethereum-rpc.publicnode.com`),
  [optimism.id]: http("https://optimism-rpc.publicnode.com"),
  [polygon.id]: http("https://polygon-bor-rpc.publicnode.com"),
  [filecoin.id]: http("https://filecoin.drpc.org"),
  [fuse.id]: http("https://fuse.drpc.org"),
  [fantom.id]: http("https://rpc3.fantom.network"),
  [zora.id]: http("https://rpc.zora.energy"),
  [base.id]: http("https://base.llamarpc.com"),
  [scroll.id]: http("https://scroll.drpc.org"),
  [aurora.id]: http("https://1rpc.io/aurora	"),
  [canto.id]: http("https://canto-rpc.ansybl.io"),
  [degen.id]: http("https://rpc.degen.tips"),
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

export const BASE_METADATA = {
  authors: [{ name: "0xAlice" }],
  category: "Finance",
  creator: "0xAlice",
  keywords: [
    "wrap",
    "unwrap",
    "token",
    "exchange",
    "defi",
    "candywrap",
    "candy",
    "swap",
    "wrapped",
    "eth",
    "erc20",
    "ethereum",
    "smart contract",
    "wrapeth",
    "optimism",
    "arbitrum",
    "polygon",
    "bsc",
    "avalanche",
    "avax",
    "wavax",
    "chain",
    "avax",
    "wavax",
    "matic",
    "wmatic",
    "bnb",
    "binance",
    "smartchain",
    "fuse",
    "fantom",
    "ftm",
    "wftm",
    "filecoin",
    "fil",
    "wfil",
    "zora",
    "base",
    "scroll",
    "evm",
    "wan",
    "wwan",
    "movr",
    "wmovr",
    "glmr",
    "wglmr",
    "metis",
    "wmetis",
    "one",
    "wone",
    "canto",
    "wcanto",
  ],
  title: "CandyWrap",
  description:
    "Wrap and unwrap your ETH/wETH in a few clicks right from your wallet. Supports multiple chains. Instead of swapping for a high fee use this instead. Convert now on Ethereum!",
};
