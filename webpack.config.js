const path = require("path");
const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const postcssImageSizes = require("postcss-image-sizes");
const postcssNested = require("postcss-nested");
const postcssImport = require("postcss-import");
const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");

const componentConfig = require("./externalDependencies");
const dllManifest = require("./dll/sharedBundles.dll.js.json");


module.exports = (env, argv) => {

  // console.log('==>',env, argv)

  return {
    entry: {
      index: "./app/js/index.jsx"
    },
    devtool: argv.mode === "production" ? "none" : "eval-source-map",
    output: {
      path: path.resolve(
        __dirname, componentConfig.publicPath
      ),
      filename: "bundle.js",
      chunkFilename: "[name].bundle.js",
      publicPath: componentConfig.publicPath,
      libraryTarget: "amd"
    },
    externals: componentConfig.dependencies,
    devServer: {
      hot: true,
      https: true,
      inline: true,
      disableHostCheck: true,
      port: 9000,
      contentBase: path.resolve(
        __dirname, componentConfig.publicPath
      ),
      historyApiFallback: true
    },
    resolve: {
      extensions: [".js", ".jsx", ".json"],
      alias: {
        "styled-components": path.resolve(__dirname, "node_modules", "styled-components")
      }
    },
    stats: {
      colors: true,
      reasons: false,
      chunks: true
    },
    optimization:{
      minimize: false
    },
    plugins: [

      // new BundleAnalyzerPlugin(),
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: dllManifest,
        name: "/file/globals/z4ma.globals.min.js",
        sourceType: "amd"
      }),

      new webpack.HotModuleReplacementPlugin()
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
          use: ["babel-loader"]
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
                plugins: (loader) => [
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

