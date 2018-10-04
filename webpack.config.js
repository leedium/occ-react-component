const path = require("path");
const webpack = require("webpack");
// const JavaScriptObfuscator = require('webpack-obfuscator');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;


///////////////
//  Configuration

const componentName = "occReactComponent"



///////////////




const config = {
  // mode: 'development',
  entry: {
    index: "./app/js/App.jsx"
  },
  devtool:
    process.env.NODE_ENV === "development" ? "cheap-eval-source-map" : false,
  output: {
    path: path.resolve(__dirname, `dist/widget/${componentName}/js`),
    filename: "bundle.js",
    chunkFilename: "[name].js",
    // publicPath: "/file/widget/anotherWidget/js/",
    libraryTarget: "amd"
  },
  externals: {
    knockout: "knockout",
    jquery: "jquery",
    pubsub: "pubsub",
    ccConstants: "ccConstants",
    ccRestClient: "ccRestClient",
    navigation: "navigation",
    ccLogger: "ccLogger",
    CCi18n: "CCi18n",
    ccNumber: "ccNumber",
    currencyHelper: "currencyHelper",
    numberFormatHelper: "numberFormatHelper",
    "ojs/ojcore": "ojs/ojcore",
    "ojs/ojvalidation": "ojs/ojvalidation",
    "react": "https://unpkg.com/react@16/umd/react.production.min.js",
    "react-dom": "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js",
  },
  devServer: {
    hot: true,
    publicPath: "/public/",
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
    // new BundleAnalyzerPlugin()
    // new JavaScriptObfuscator ({
    //   rotateUnicodeArray: true
    // }, [])
  ],
  // optimization:{
  //   splitChunks: {
  //     chunks: 'all',
  //     minSize: 30000,
  //     maxSize: 0,
  //     minChunks: 1,
  //     maxAsyncRequests: 5,
  //     maxInitialRequests: 3,
  //     automaticNameDelimiter: '~',
  //     name: true,
  //     cacheGroups: {
  //       vendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10
  //       },
  //       default: {
  //         minChunks: 2,
  //         priority: -20,
  //         reuseExistingChunk: true
  //       }
  //     }
  //   }
  // },
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

if (process.env.NODE_ENV === "development") {
  config.entry.unshift(
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000"
  );
}

module.exports = config;
