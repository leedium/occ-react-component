const path = require("path");
const webpack = require("webpack");

const componentConfig = require("./componentConfig");

const config = {
  // mode: 'development',
  entry: {
    index: "./app/js/index.jsx"
  },
  devtool:
    process.env.NODE_ENV === "development" ? "cheap-eval-source-map" : false,
  output: {
    path: path.resolve(
      __dirname,
      `dist/widget/${componentConfig.componentName}/js`
    ),
    filename: "bundle.js",
    chunkFilename: "[name].js",
    libraryTarget: "amd"
  },
  externals: componentConfig.dependencies,
  devServer: {
    hot: true,
    publicPath: "/public/",
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  }
};

module.exports = config;
