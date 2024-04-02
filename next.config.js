/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { esmExternals: 'loose' },
    images:{
        domains:["www.okkabeauty.com"]
    }
};



module.exports =  nextConfig;
    