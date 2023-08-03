/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  env: {
    URL_WEB3_ENDPOINT: process.env.URL_WEB3_ENDPOINT,
  }
}


module.exports = nextConfig
