var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HappyPack = require('happypack');
var os = require('os')
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {
    entry: {
        main: './demo/app.js'
    },
    output: {
        path: path.resolve(__dirname, './demo/dist'),
        filename: 'index.js',
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'happypack/loader?id=happybabel'
        },{
            test: /\.(css|scss)$/,
            loader: 'style-loader!css-loader!postcss-loader!sass-loader',
        }]
    },
    // externals: {
    //   vue: 'Vue',
    //   'vue-router':'VueRouter'
    // },
    // devtool:'hidden-source-map',
    watch:true,
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new HappyPack({
         id: 'happybabel',
         loaders: ['babel-loader'],
         threadPool: happyThreadPool,
         cache: true,
         verbose: true
       }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new HtmlWebpackPlugin({template: './index.html'}),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: true,
        //     compress: {
        //         warnings: false,
        //         drop_console: true
        //     },
        //     beautify:false,
        //     comments:false
        // }),
    ]
}
