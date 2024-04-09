/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["icons.llamao.fi"],
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/mainnet",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
