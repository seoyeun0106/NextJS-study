/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites() {
    return [
      {
        source: "/movies",
        destination:
          "https://api.themoviedb.org/3/movie/popular?api_key=d356237178c24ea58fd399b15fbee8bd",
      },
    ];
  },
};
module.exports = nextConfig;
