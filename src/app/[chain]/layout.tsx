import type { Metadata } from "next";
import { BASE_METADATA } from "../_base-metadata";
import { NAMES } from "../_constants";

export const metadata: Metadata = {
  ...BASE_METADATA,
  openGraph: {
    title: BASE_METADATA.title,
    description: BASE_METADATA.description,
    url: "https://candywrap.dev",
  },
  twitter: {
    title: BASE_METADATA.title,
    description: BASE_METADATA.description,
    creator: "@thereal0xalice",
  },
};
export async function generateStaticParams() {
  return Object.values(NAMES).map((name) => ({ chain: name }));
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
