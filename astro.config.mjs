import { defineConfig } from "astro/config";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const siteUrl = process.env.SITE_URL;

export default defineConfig({
  output: "static",
  base: isGitHubActions && repoName ? `/${repoName}/` : "/",
  site: siteUrl || (isGitHubActions && repoName ? `https://${process.env.GITHUB_REPOSITORY?.split("/")[0]}.github.io/${repoName}/` : undefined)
});
