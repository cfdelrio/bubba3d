import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'hello.bubba3d.com.ar' }],
        destination: 'https://www.bubba3d.com.ar/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'bubba3d.com.ar' }],
        destination: 'https://www.bubba3d.com.ar/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
