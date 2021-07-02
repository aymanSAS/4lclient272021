module.exports = {
  devServer: {
    port: 8089
  },

  chainWebpack: config => {
    config.performance
      .maxEntrypointSize(4000000)
      .maxAssetSize(4000000)
  }
  
}
