const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  devtool: 'eval',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            'react-hot-loader/babel',
          ],
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'public/'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/',
    hotOnly: true,
  },
  plugins: [
    new dotenv(),
    new webpack.HotModuleReplacementPlugin({
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
      'process.env.AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
      'process.env.DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
      'process.env.STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET),
      'process.env.MESSEGING_SENDER_ID': JSON.stringify(
        process.env.MESSEGING_SENDER_ID
      ),
      'process.env.APP_ID': JSON.stringify(process.env.APP_ID),
      'process.env.MESUREMENT_ID': JSON.stringify(process.env.MESUREMENT_ID),
    }),
  ],
};
