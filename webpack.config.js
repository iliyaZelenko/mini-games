const path = require('path')
const webpack = require('webpack')

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const srcPath = join(__dirname, 'src')
const distPath = join(__dirname, 'dist')

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
      app: join(srcPath, 'index.js')
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: distPath,
      // не показывает инфу а bundle
      noInfo: true,
      // overlay с ошибками
      overlay: true
      // open: true
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'My page',
        template: join(srcPath, 'index.html')
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: distPath
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
