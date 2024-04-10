/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["icons.llamao.fi"],
  },
  // distDir: "build",
  // output: 'export',
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
