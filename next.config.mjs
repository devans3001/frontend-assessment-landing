/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "holo-harmony-forge.lovable.app",
      },
    ],
  },
};

export default nextConfig;
