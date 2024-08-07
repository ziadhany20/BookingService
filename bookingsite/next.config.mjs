/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    output: 'export',
    trailingSlash: false,
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: '',
    },
    
};

export default nextConfig;
