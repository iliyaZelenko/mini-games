const webpack = require('webpack')
const { join, resolve } = require('path')

/* Plugins */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const srcPath = join(__dirname, 'src')
const distPath = resolve(__dirname, 'dist')

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development'
  const isProd = !isDev
  let config = {}

  if (isDev) {
    config.devtool = 'source-map'
  }

  return {
    ...config,
    // entry: join(srcPath, 'index.js'),
    entry: {
      app: join(srcPath, 'index.js')
    },
    output: {
      filename: '[name].bundle.js',
      path: distPath
    },
    devtool: 'inline-source-map',
    devServer: {
      // serve assets from dist
      contentBase: distPath,
      // не показывает инфу а bundle
      noInfo: true,
      // overlay с ошибками
      overlay: true,
      // для SPA навигации
      historyApiFallback: true
    },
    plugins: [
      new CleanWebpackPlugin([distPath]),
      new HtmlWebpackPlugin({
        title: 'My page',
        template: join(srcPath, 'index.html')
      }),
      new CopyWebpackPlugin([
        // copy all assets to dist
        {
          from: join(srcPath, 'assets'),
          to: join(distPath, 'assets')
        }
      ])
    ],
    module: {
      rules: [
        { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ },
        {
          test: /\.sass$/,
          use: [
            'style-loader', // creates style nodes from JS strings
            'css-loader', // translates CSS into CommonJS
            'sass-loader' // compiles Sass to CSS, using Node Sass by default
          ]
        },
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader'
          }
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        '~': srcPath
      }
    }
  }
}
