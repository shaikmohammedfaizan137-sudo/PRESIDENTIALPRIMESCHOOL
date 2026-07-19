/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? '/PRESIDENTIALPRIMESCHOOL' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/PRESIDENTIALPRIMESCHOOL/' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
