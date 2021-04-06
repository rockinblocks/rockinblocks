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
          ...config.module.rules.map(_ => {
            if (_?.test?.toString().includes('svg|')) {
              return {
                ..._,
                test: new RegExp(_.test.source.replace('svg|', ''))
              }
            }
            return _
          }),
          {
            test: /\.svg$/,
            use: [require.resolve('@svgr/webpack'), require.resolve('file-loader')]
          }
        ]
      }
    }
  }
}
