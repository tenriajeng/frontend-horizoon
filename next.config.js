/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'sejawat.s3.ap-southeast-1.amazonaws.com',
                port: '', // You can leave this empty if the port is not specified
                pathname: '**', // You can specify a pathname if needed
            },
            {
                protocol: 'https',
                hostname: 'horizoon.s3.ap-southeast-1.amazonaws.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'placeimg.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'jsonplaceholder.typicode.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'sejawat.co.id',
                port: '',
                pathname: '**',
            },
        ],
    },
    env: {
        API_URL: process.env.API_URL,
    },
};

module.exports = nextConfig;
