/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['images.unsplash.com', 'randomuser.me'],
    unoptimized: true,
  },

  distDir: '.next',
}

module.exports = nextConfig