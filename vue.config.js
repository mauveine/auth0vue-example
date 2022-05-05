module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "PeCan",
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto"
        }
      ]
    }
  },
  devServer: {
    host: 'pecan.test',
    https: true
  }
}
