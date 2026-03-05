import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
  },
  async redirects() {
    return [
      // Redirect non-www to www for the main domain (canonicalize to www)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'omniaservices.co.uk' }],
        destination: 'https://www.omniaservices.co.uk/:path*',
        permanent: true,
      },
      // Redirect any subdomains to www (in case they still resolve through Vercel)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'vercel.omniaservices.co.uk' }],
        destination: 'https://www.omniaservices.co.uk/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.vercel.omniaservices.co.uk' }],
        destination: 'https://www.omniaservices.co.uk/:path*',
        permanent: true,
      },
      // Redirect .in domains to .co.uk
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'omniaservices.in' }],
        destination: 'https://www.omniaservices.co.uk/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.omniaservices.in' }],
        destination: 'https://www.omniaservices.co.uk/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'vercel.omniaservices.in' }],
        destination: 'https://www.omniaservices.co.uk/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.vercel.omniaservices.in' }],
        destination: 'https://www.omniaservices.co.uk/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
