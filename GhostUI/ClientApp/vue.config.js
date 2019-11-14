/* eslint-disable no-param-reassign,import/no-extraneous-dependencies  */
const path = require('path');

module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== "production") {
      return {};
    }

    return {
      devtool: false,
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