import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Great Lake Big Band`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};

export default config;
