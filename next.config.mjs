/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/start-a-project',
                destination: '/enquiry',
                permanent: true,
            },
            {
                source: '/career.php',
                destination: '/career',
                permanent: true,
            },
            {
                source: '/website-development-company-in-delhi',
                destination: '/website-design-and-development',
                permanent: true,
            },
            {
                source: '/client',
                destination: '/clients',
                permanent: true,
            },
            {
                source: '/client',
                destination: '/clients',
                permanent: true,
            },
            {
                source: '/website-portfolio',
                destination: '/work',
                permanent: true,
            },
            {
                source: '/seo-company-in-delhi',
                destination: '/search-engine-optimization',
                permanent: true,
            },
            {
                source: '/software-development-company-in-delhi-ncr',
                destination: '/software-development',
                permanent: true,
            },
            {
                source: '/brands',
                destination: '/clients',
                permanent: true,
            },
            {
                source: '/social-media-marketing-services-in-delhi',
                destination: '/social-media-marketing',
                permanent: true,
            },
            {
                source: '/portfolio',
                destination: '/work',
                permanent: true,
            },
        ]
    },
}

export default nextConfig
