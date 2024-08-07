/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    output: 'export',
    trailingSlash: true,
    images: {
        loader: 'akamai',
        path: '',
      },
};

export default nextConfig;
