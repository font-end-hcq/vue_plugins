const path = require('path');
const webpack = require('webpack');
// import webpack from 'webpack'
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const fs = require('fs');
const vuxLoader = require('vux-loader');
var os = require('os')
var HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

const entry = {};
fs.readdirSync(__dirname + '/src').filter(file=> {
  if (!file.includes('.')) {
    entry[file] = `./src/${file}`;
  }
})
entry['/'] = `./src`;

const mymodule = {
  entry,
  output: {
    path: __dirname + '/lib',
    filename: '[name]/index.js',
    library: 'index',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions:[".js",".vue"],
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
        loader: 'happypack/loader?id=happybabel'
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!postcss-loader!sass-loader"})
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
  watch:true,
  plugins: [
    new HappyPack({
     id: 'happybabel',
     loaders: ['babel-loader'],
     threadPool: happyThreadPool,
     cache: true,
     verbose: true
   }),
    new ExtractTextPlugin({
      filename: getPath => getPath('[name]/style.css'),
      allChunks: false
    }),
    new webpack.DefinePlugin({MULTY: true}),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"'
        }
    }),
  ]
}


module.exports = vuxLoader.merge(mymodule, {
  plugins: ['vux-ui']
})
