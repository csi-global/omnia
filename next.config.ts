import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Canonicalize www to apex for both primary domains
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.omniaservices.co.uk' }],
        destination: 'https://omniaservices.co.uk/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.omniaservices.in' }],
        destination: 'https://omniaservices.in/:path*',
        permanent: true,
      },

      // Canonicalize www on the vercel subdomain (if requested directly)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.vercel.omniaservices.co.uk' }],
        destination: 'https://vercel.omniaservices.co.uk/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.vercel.omniaservices.in' }],
        destination: 'https://vercel.omniaservices.in/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
