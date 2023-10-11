/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'sejawat.s3.ap-southeast-1.amazonaws.com',
            'horizoon.s3.ap-southeast-1.amazonaws.com',
            'via.placeholder.com',
            'placeimg.com',
            'jsonplaceholder.typicode.com',
        ],
    },
};

module.exports = nextConfig;
