const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack/webpack.config');
const compiler = webpack(webpackConfig);

export { compiler, webpackMiddleware };
