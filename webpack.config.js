var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'bottom-menu':'./src/bottonMenu/index.js',
    'main-menu':'./src/menu/index.js',
    'course-lists':'./src/list/index.js',
    // 'demo':'./demo/app.js',
  },
  output: {
    // path: path.resolve(__dirname, './es/lib'),
    path: path.resolve(__dirname, './lib'),
    publicPath: '/es/',
    filename: '[name].js',
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
        loader: 'style-loader!css-loader!postcss-loader!sass-loader'
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
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: {
    //     warnings: false,
    //     drop_console: true
    //   },
    //   beautify: false,
    //   comments: false
    // }),
    new webpack.DefinePlugin({
        MULTY:true,
    }),
  ]
}
