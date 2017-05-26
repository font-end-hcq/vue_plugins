var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    'bottom-menu':'./src/bottonMenu/index.js',
    'main-menu':'./src/menu/index.js',
    'course-lists':'./src/list/index.js',
    // 'demo':'./demo/app.js',
  },
  output: {
    // path: path.resolve(__dirname, './lib'),
    // path: path.resolve(__dirname, './lib/[name]'),
    path: __dirname + '/lib',
    publicPath: '/es/',
    filename: '[name]/index.js',
    library: 'index',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.js$/,
        loader: 'babel-loader'
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!postcss-loader!sass-loader"
        })
      }, {
        test: /\.png/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[hash:7].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new ExtractTextPlugin("styles.css"),
    new ExtractTextPlugin({
      filename:  (getPath) => {
        return getPath('[name]/style.css').replace('css/js', 'css');
      },
      allChunks: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
        drop_console: true
      },
      beautify: false,
      comments: false
    }),
    new webpack.DefinePlugin({
        MULTY:true,
    }),
  ]
}
