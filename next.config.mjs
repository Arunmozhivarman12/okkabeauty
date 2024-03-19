/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { esmExternals: 'loose' },
    images:{
        domains:["okkabeauty.com"]
    }
};



export default nextConfig;
