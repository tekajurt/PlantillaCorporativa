/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // experimental: {
  //   // Agrega flags aquí si Next.js lo requiere
  // },
};
export default nextConfig;
