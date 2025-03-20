/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "admins-one.vercel.app",
            pathname: "/api/media/file/**", 
          },
        ],
      },
};

export default nextConfig;
