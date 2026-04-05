/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  transpilePackages: ['antd', 'rc-util', 'rc-pagination', 'rc-picker', 'rc-input'],
  images: { unoptimized: true },
}

module.exports = nextConfig
