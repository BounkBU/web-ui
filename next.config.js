/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['image.tmdb.org', 'www.themoviedb.org', 'media.glamour.com'],
  },
}

module.exports = nextConfig
