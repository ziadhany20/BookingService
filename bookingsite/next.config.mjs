/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    trailingSlash: false,
    reactStrictMode: true,
    output: 'export',
    images: {
        loader: 'akamai',
        path: '',
        unoptimized: true,
    },
    
};

export default nextConfig;
