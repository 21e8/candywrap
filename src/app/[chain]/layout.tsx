import type { Metadata } from "next";
import { BASE_METADATA } from "../_base-metadata";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
