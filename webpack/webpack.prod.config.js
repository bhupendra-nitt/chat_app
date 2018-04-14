/* eslint-disable no-console */
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const logger = require('../logger.js');
const WebpackAssetsManifest = require('webpack-assets-manifest');

const BUILD_DIR = path.resolve(__dirname, '..', 'build');
const APP_DIR = path.resolve(__dirname, '..', 'src');

logger.info('Running webpack in production mode');

module.exports = {
  devtool: 'source-map',
  entry: {
    // Chunk bundle.js into vendor and index
    index: path.resolve(APP_DIR, 'js', 'index.js'),
  },
  output: {
    path: path.resolve(BUILD_DIR),
    filename: 'js/[name].[chunkhash].js',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: path.resolve(APP_DIR, 'styles'),
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract([
          'css-loader', 'sass-loader'
        ])
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin("styles/index.[chunkhash].css"),
    new WebpackAssetsManifest({
      output: path.resolve(BUILD_DIR, 'assets-manifest.json'),
      merge: true
    })
  ]
};
/* eslint-disable no-console */
