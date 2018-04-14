/* eslint-disable no-console */
const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');

const webpackConfig = process.env.NODE_ENV === 'development' ?
  require('./webpack.dev.config') : require('./webpack.prod.config');

const BUILD_DIR = path.resolve(__dirname, '..', 'build');
const APP_DIR = path.resolve(__dirname, '..', 'src');

const baseConfig = {
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?/,
        exclude: /node_modules/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.ContextReplacementPlugin(
      /moment[\/\\]locale$/, // eslint-disable-line
      /en/
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
    new UglifyJSPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      },
      parallel: true,
    }),
    new CopyWebpackPlugin([
      { from: path.resolve(APP_DIR, 'manifest.json'), to: BUILD_DIR }
    ]),

  ]
};

// merge webpack baseConfig with dev config
module.exports = merge(baseConfig, webpackConfig);
/* eslint-disable no-console */
