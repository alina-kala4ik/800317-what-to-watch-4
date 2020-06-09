const path = require(`path`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    path: path.resolve(__dirname, `public`),
    filename: `bundle.js`
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: true,
    port: 1337
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`
        },
      },
    ]
  },
  devtool: `sourse-map`
};
