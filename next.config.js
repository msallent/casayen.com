/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: `/${process.env.CONTENTFUL_SPACE_ID}/**`,
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/masterclasses',
        destination: '/',
        permanent: true,
      },
      {
        source: '/packs',
        destination: '/',
        permanent: true,
      },
      {
        source: '/presenciales',
        destination: '/',
        permanent: true,
      },
      {
        source: '/programas',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
