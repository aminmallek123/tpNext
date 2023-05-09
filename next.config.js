/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{ 
    domains:["fakestoreapi.com","api.lorem.space","firebasestorage.googleapis.com","cdn-icons-png.flaticon.com"], 
    } 
}

module.exports = nextConfig
