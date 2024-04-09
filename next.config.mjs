/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["icons.llamao.fi"],
  },
  redirects: async () => {
    return [
      {
        source: "/mainnet",
        destination: "/ethereum",
        permanent: true,
      },
      {
        source: "/",
        destination: "/ethereum",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
