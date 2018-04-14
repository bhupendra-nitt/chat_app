/* eslint-disable no-console */
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackAssetsManifest = require('webpack-assets-manifest');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const logger = require('../logger.js');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, '..', 'build');
const APP_DIR = path.resolve(__dirname, '..', 'src');

logger.info('======================================');
logger.info('Running webpack in development mode');

module.exports = {
  devtool: 'inline-eval-cheap-source-map',
  entry: {
    index: ['react-hot-loader/patch', path.resolve(APP_DIR, 'js', 'index.js'), 'webpack-hot-middleware/client']
  },
  output: {
    path: path.resolve(BUILD_DIR),
    filename: 'js/[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: path.resolve(APP_DIR, 'styles'),
        exclude: /node_modules/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        })),
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles/index.scss"),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new WebpackAssetsManifest({
      output: path.resolve(BUILD_DIR, 'assets-manifest.json'),
      merge: true
    })
  ],
  devServer: {
    hot: true,
    inline: true
  }
};
/* eslint-disable no-console */
