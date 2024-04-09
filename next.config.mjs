/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["icons.llamao.fi"],
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/ethereum",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
