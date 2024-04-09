import { MetadataRoute } from "next";
import { NAMES, SUPPORTED_CHAINS } from "./_constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "/", lastModified: new Date() },
    ...SUPPORTED_CHAINS.map((chain) => ({
      url: `/${NAMES[chain.id]}`,
      lastModified: new Date(),
    })),
  ];
}
