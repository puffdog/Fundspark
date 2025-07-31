/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['zmexcsremzhgbrbyfqup.supabase.co'],
    unoptimized: true, // Required for static export
  },
  // Uncomment the line below for static export deployment
  // output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig