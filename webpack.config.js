/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

const path = require("path");
const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const postcssImageSizes = require("postcss-image-sizes");
const postcssNested = require("postcss-nested");
const postcssImport = require("postcss-import");
const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const COMPONENT_NAME = "occReactComponent";
const SHARED_BUNDLE_VERSION = "2.3.0";
const OCC_GLOBAL_FILE_NAME = `vendor-prod.${SHARED_BUNDLE_VERSION}.dll.min.js`;
const PUBLIC_PATH = `file/widget/${COMPONENT_NAME}/js/`; //DO NOT CHANGE
const MAIN_CHUNK_BUNDLE_NAME = "index";
const MIN_NODE_VERSION_FOR_HTTPS = 10;

module.exports = (env, argv) => {
  const useHttps = parseInt(process.version.split(".")[0].split('v')[1],10) >= MIN_NODE_VERSION_FOR_HTTPS;
  const isProd = argv.mode === "production";
  const dllManifest = require(`./vendorManifest/vendor-${
    isProd ? "prod" : "dev"
    }.${SHARED_BUNDLE_VERSION}.json`);

  return {
    mode: argv.mode,
    entry: {
      [MAIN_CHUNK_BUNDLE_NAME]: "./app/js/index.jsx"
    },
    devtool: isProd ? "none" : "eval-source-map",
    output: {
      path: path.resolve(__dirname, PUBLIC_PATH),
      filename: "bundle.js",
      chunkFilename: "[name].bundle.js",
      publicPath: `/${PUBLIC_PATH}`,
      libraryTarget: "amd"
    },
    externals: {
      knockout: "knockout",
      jquery: "jquery",
      pubsub: "pubsub",
      ccConstants: "ccConstants",
      ccRestClient: "ccRestClient",
      navigation: "navigation",
      notifier: "notifier",
      ccLogger: "ccLogger",
      CCi18n: "CCi18n",
      ccNumber: "ccNumber",
      currencyHelper: "currencyHelper",
      numberFormatHelper: "numberFormatHelper",
      "pageLayout/product": "pageLayout/product",
      "ojs/ojcore": "ojs/ojcore",
      "ojs/ojvalidation": "ojs/ojvalidation"
    },
    devServer: {
      hot: true,
      https: useHttps,
      inline: true,
      disableHostCheck: true,
      port: 9000,
      contentBase: path.resolve(__dirname, PUBLIC_PATH),
      historyApiFallback: true
    },
    resolve: {
      extensions: [".js", ".jsx", ".json"],
      alias: {
        "styled-components": path.resolve(
          __dirname,
          "node_modules",
          "styled-components"
        )
      }
    },
    stats: {
      colors: true,
      reasons: false,
      chunks: true
    },
    optimization: {
      minimizer: [new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        chunkFilter (chunk) {
          if (!isProd) {
            return true
          }
          return chunk.name !== MAIN_CHUNK_BUNDLE_NAME;
        }
      })],
    },
    plugins: isProd
      ? [
        // new BundleAnalyzerPlugin(),
        new webpack.DllReferencePlugin({
          context: __dirname,
          manifest: dllManifest,
          name: `/file/globals/${OCC_GLOBAL_FILE_NAME}`,
          sourceType: "amd"
        }),

        new webpack.HotModuleReplacementPlugin()
      ]
      : [new webpack.HotModuleReplacementPlugin()],
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
          use: ["babel-loader",  'react-hot-loader/webpack']
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "babel-loader"
            },
            {
              loader: "react-svg-loader",
              options: {
                jsx: true // true outputs JSX tags
              }
            }
          ]
        },
        {
          test: /\.(jpe?g|png|ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          use: "base64-inline-loader?name=[name].[ext]"
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: loader => [
                  postcssImageSizes({ assetsPath: "app/js/app/images" }),
                  postcssNested,
                  postcssImport({ root: loader.resourcePath }),
                  postcssPresetEnv(),
                  cssnano()
                ]
              }
            }
          ]
        }
      ]
    }
  };
};
