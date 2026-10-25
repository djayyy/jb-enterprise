import { defineConfig } from "astro/config";
export default defineConfig({
  output: "static",
  devToolbar: { enabled: false },
  // Accept shared URLs with or without a slash; internal links use directory URLs.
  // Production canonical redirects remain the static host's responsibility.
  trailingSlash: "ignore",
});
