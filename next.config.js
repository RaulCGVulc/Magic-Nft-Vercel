/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  env: {
    URL_WEB3_ENDPOINT: process.env.URL_WEB3_ENDPOINT,
    EMAIL: process.env.EMAIL,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    FROM_EMAIL: process.env.FROM_EMAIL,
    TO_EMAIL: process.env.TO_EMAIL
  }
}


module.exports = nextConfig
