/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // Otimizações de performance
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  // Code splitting automático
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

// PWA será adicionado via next-pwa quando necessário
// Por enquanto, mantemos o manifest.json manual
module.exports = nextConfig
