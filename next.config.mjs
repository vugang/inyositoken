 /** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      // Prevent Webpack from trying to polyfill certain Node.js built-in modules
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
        crypto: false, // add more if needed based on the errors
      };
      
      return config;
    },
  };
  
  export default nextConfig;
  