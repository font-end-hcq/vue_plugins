var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './demo/app.js'
    },
    output: {
        path: path.resolve(__dirname, './demo/dist'),
        // publicPath: '/dist/',
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
            loader: 'babel-loader',
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
    plugins: [
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
