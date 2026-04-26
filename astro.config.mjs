import { defineConfig } from "astro/config";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  output: "static",
  base: isGitHubActions && repoName ? `/${repoName}` : "/"
});
