const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const version = require('./package.json').version;
const ASSET_PATH = process.env.ASSET_PATH || './';

module.exports = {
  entry: path.resolve(__dirname, './src/js/index.js'),
  output: {
    publicPath: ASSET_PATH, 
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      openGraphImagePath: `og-image.${version}.jpg`
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/images/background.jpg', to: `./og-image.${version}.jpg` },
        { from: './src/images/favicon.ico', to: './favicon.ico' },
      ],
    }),
  ],
};
