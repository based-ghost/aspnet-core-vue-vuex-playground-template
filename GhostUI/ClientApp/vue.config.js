module.exports = {
  // https://github.com/visualfanatic/vue-svg-loader
  chainWebpack: config => {
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
          plugins: [{ prefixIds: true }]
        }
      });
  },

  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== "production") {
      return {};
    }

    return {
      plugins: []
    };
  },

  // https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-pwa
  pwa: {
    name: "aspnet-core-vue-vuex-playground-template",
    themeColor: "#fff",
    msTileColor: "#fff",
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      skipWaiting: true,
      cacheId: "aspnet-core-vue-template",
      importWorkboxFrom: "local",
      navigateFallback: "/index.html"
    }
  }
};