/** @type {import('next').NextConfig} */
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const repoName = "/portfolio-site";

const nextConfig = {
  reactStrictMode: true,
  output: isGithubPagesBuild ? "export" : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isGithubPagesBuild ? repoName : "",
  assetPrefix: isGithubPagesBuild ? repoName : undefined
};

export default nextConfig;
