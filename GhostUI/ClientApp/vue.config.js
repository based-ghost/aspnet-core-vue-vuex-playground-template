module.exports = {
  lintOnSave: false,

  // define port
  devServer: {
    // proxy: 'http://160.153.250.157:33000', // option A
    // host: 'http://localhost', // option B
    port: "3001", // option C - recommended
    hot: true,
    disableHostCheck: true,
  },

  // https://github.com/visualfanatic/vue-svg-loader
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .oneOf("inline")
      .resourceQuery(/inline/)
      .use("vue-svg-loader")
      .loader("vue-svg-loader")
      .end()
      .end()
      .oneOf("external")
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/[name].[hash:8].[ext]",
        svgo: {
          plugins: [{ prefixIds: true }],
        },
      });
  },

  // https://cli.vuejs.org/guide/webpack.html
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== "production") {
      return {};
    }

    return {
      performance: {
        hints: false,
      },
      plugins: [],
    };
  },

  // https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-pwa
  pwa: {
    name: "aspnet-core-vue-vuex-playground-template",
    msTileColor: "#ffffff",
    themeColor: "#209cee",
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      skipWaiting: true,
      cacheId: "VueNetCoreSpa",
      importWorkboxFrom: "local",
      navigateFallback: "/index.html",
    },
  },
};