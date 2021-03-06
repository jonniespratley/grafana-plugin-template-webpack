const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  target: 'node',
  context: __dirname + "/src",
  entry: './module.js',
  // watch: true,  // uncomment if you want "dev mode watching"
  output: {
    filename: "module.js",
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "amd"
  },
  externals: [
    // remove the line below if you don't want to use buildin versions
    'jquery', 'lodash', 'moment', 'app/core/config',
    function (context, request, callback) {
      var prefix = 'grafana/';
      if (request.indexOf(prefix) === 0) {
        return callback(null, request.substr(prefix.length));
      }
      callback();
    }
  ],
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyWebpackPlugin([
      {from: '../README.md'},
      {from: 'datasource/**'},
      {from: 'dashboards/**'},
      {from: 'css/**'},
      {from: 'img/**'},
      {from: 'plugin.json'},
    ])
  ],
  resolve: {},
  module: {
    rules: [
      //css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      ///js
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}