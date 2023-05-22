/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/mehdi000777/test/master/images/**',
            },
        ],
    },
}

module.exports = nextConfig
