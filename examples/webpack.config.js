/* eslint-disable */
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: fs.readdirSync(__dirname).reduce(function (entries, dir) {
    if (fs.statSync(path.join(__dirname, dir)).isDirectory()) {
      entries[dir] = path.join(__dirname, dir, 'app.js');
    }

    return entries;
  }, {}),

  output: {
    path: __dirname + '/build',
    filename: '[name].js',
    publicPath: '/build/',
  },

  module: {
    loaders: [
      { exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
};
