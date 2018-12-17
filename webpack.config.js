const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    example: './example/index.js'
  },
  output: {
    path: path.resolve(__dirname, '/example/build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/example/index.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'example')
  }
}