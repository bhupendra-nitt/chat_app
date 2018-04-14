const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const fs = require('fs');
const { includes } = require('lodash');
const config = require('./config');
const bodyParser = require('body-parser');
const BUILD_DIR = path.resolve(__dirname, 'build');

const assetsManifest = (() => {
  if (includes(['production', 'staging'], process.env.NODE_ENV)) {
    const manifestFile = JSON.parse(fs.readFileSync('./build/assets-manifest.json', 'utf8'));
    return {
      js: manifestFile['index.js'],
      runtimeJs: manifestFile['runtime.js']
    };
  }
  return {
    js: 'js/index.js',
    runtimeJs: 'js/runtime.js'
  };
})();

const indexTemplateData = {
  cdn_host_url: config.CCDN_HOST_URL,
  assetsManifest
};

if (process.env.NODE_ENV === 'development') {
  const webpackDev = require('./server/devServer.config.js');
  app.use(webpackDev.webpackMiddleware(webpackDev.compiler, {
    publicPath: '/',
    contentBase: `${BUILD_DIR}/`,
    stats: {
      colors: true
    },
    hot: true,
    inline: true,
    historyApiFallback: true
  }));
  app.use(require("webpack-hot-middleware")(webpackDev.compiler));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));

app.get('*', function (req, res) {
  res.render('index', indexTemplateData);
});

io.on('connection', function (socket) {
  socket.on('SEND_MESSAGE', function (data) {
    io.emit('RECEIVE_MESSAGE', data);
  })
});

http.listen(3000, function () {
  console.log(`listening on :${config.PORT}`);
});