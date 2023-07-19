/** @type {import('next').NextConfig} */

const isProd = process.env.NEXT_API_URL === 'production'

const nextConfig = {
    assetPrefix: isProd ? '' : 'http://localhost:3000',
    experimental:{
        appDir: true,
    },
    images: { domains: ["lemonsqueezy.imgix.net", "image.tmdb.org"] },
}


module.exports = nextConfig
