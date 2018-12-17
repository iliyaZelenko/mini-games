const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development'
  const isProd = !isDev
  let config = {}

  if (isDev) {
    config.devtool = 'source-map'
  }

  return {
    ...config,
    // mode: 'development',
    entry: {
      app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist')
      // open: true
      // hot: true
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement',
        template: './src/index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader'
          }
        }
        // ...
      ]
    }
  }
}
