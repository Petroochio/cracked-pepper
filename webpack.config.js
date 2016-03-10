/* eslint-disable */
var path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
  },

  output: {
    path: path.resolve('build'),
    filename: 'CrackedPepper.js',
    library: 'CrackedPepper',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
