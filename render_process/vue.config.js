const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    allowedHosts: 'all',
    webSocketServer: false
  },
  transpileDependencies: true,
});
