const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  cache: true,

  context: __dirname,

  entry: {
    main: './src/index.js'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js', // Bundle file
  },

  // must be 'source-map' or 'inline-source-map'
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: { minimize: true, localIdentName: '[local]--[hash:base64:5]' } },
            { loader: 'sass-loader' },
          ]
        })
      },
    ],
  },

  resolve: {
    extensions: ['.js'], // Allow require('./blah') to require blah.js
    modules: [
      './',
    ],
  },

  plugins: [
    new ExtractTextPlugin('./css/[name].css'),
  ],

  externals: {
  },
};
