// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Go Sevilla",
  siteUrl: "https://gosevilla.es",
  siteDescription: "Blog y Comunidad de Golang en Sevilla",
  titleTemplate: "%s",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/**/*.md",
        typeName: "Post",
        route: "/:title",
        remark: {
          plugins: [
            ["@gridsome/remark-prismjs", { transformInlineCode: true }],
          ],
        },
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
      },
    },
    {
      use: "gridsome-plugin-feed",
      options: {
        contentTypes: ["Post"],
        feedOptions: {
          title: "A Gridsome Minimal Blog",
          description: "Best blog feed evah.",
        },
        rss: {
          enabled: true,
          output: "/feed.xml",
        },
        atom: {
          enabled: false,
          output: "/feed.atom",
        },
        json: {
          enabled: false,
          output: "/feed.json",
        },
        maxItems: 25,
        htmlFields: ["description", "content"],
        enforceTrailingSlashes: false,
        filterNodes: (node) => true,
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date || node.fields.date,
          content: node.content,
        }),
      },
    },
  ],
};
