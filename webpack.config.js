const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer:{
    // host:'localhost',
    // hot: true,
    // port:8080,
    proxy: {
      '/': 'http://localhost:3000',
    }
  },
  module: {
    rules: [
      // Babel-Loader
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // SCSS
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    //   {
    //     test: /.(ts|tsx)$/,
    //     exclude: /node_modules/,
    //     use: ['style-loader', 'css-loader', 'sass-loader'],
    //   },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'index.html'),
      filename: 'index.html',
    }),
    //plugin to extract css
    new MiniCssExtractPlugin(),
  ],
};