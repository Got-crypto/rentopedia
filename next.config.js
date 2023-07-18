/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["randomuser.me", "lh3.googleusercontent.com", "res.cloudinary.com"]
  },
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
    CLOUDINARY_API: process.env.CLOUDINARY_API,
    CLOUDINARY_SECRET: process.env.CLOUDINARY_SECRET,
    DATABASE_URL: process.env.DATABASE_URL
  }
}

module.exports = nextConfig
