import { readFileSync } from 'fs'

const { version } = JSON.parse(readFileSync('./package.json', 'utf8'))

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_VERSION: version,
  },
}

export default nextConfig
