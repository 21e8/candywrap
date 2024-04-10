import { MetadataRoute } from "next";
import { CHAIN_IDS, SUPPORTED_CHAINS } from "./_constants";
const HOST = "https://candywrap.dev";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${HOST}`, lastModified: new Date() },
    ...SUPPORTED_CHAINS.map((chain) => ({
      url: `${HOST}/${CHAIN_IDS[chain.id]}`,
      lastModified: new Date(),
    })),
  ];
}
