/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "aleya-heroyiv.boryslavrada.gov.ua",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
