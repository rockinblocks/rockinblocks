const path = require("path")

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-postcss",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: true,
        },
      },
    },
  ],
  webpackFinal(config = {}, options = {}) {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          // Setup Gatsby for Storybook
          {
            exclude: [/node_modules\/(?!(gatsby)\/)/],
            use: [
              {
                loader: require.resolve("babel-loader"),
                options: {
                  presets: [
                    require.resolve("@babel/preset-react"),
                    require.resolve("@babel/preset-env"),
                  ],
                  plugins: [
                    // use @babel/plugin-proposal-class-properties for class arrow functions
                    require.resolve("@babel/plugin-proposal-class-properties"),
                    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
                    require.resolve("babel-plugin-remove-graphql-queries"),
                  ],
                },
              },
            ],
          },
          // Remove preset SVG loaders from Storybook
          ...config.module.rules.map(_ => {
            if (_?.test?.toString().includes("svg|")) {
              return {
                ..._,
                test: new RegExp(_.test.source.replace("svg|", "")),
              }
            }
            return _
          }),
          // Add SVGR as our SVG loader
          {
            test: /\.svg$/,
            use: [
              require.resolve("@svgr/webpack"),
              require.resolve("file-loader"),
            ],
          },
        ],
      },
    }
  },
}
