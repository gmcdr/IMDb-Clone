/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  experimental: {
    appDir: true,
  },
  images:{
    domains:[
      "image.tmdb.org"
    ]
  }

}
