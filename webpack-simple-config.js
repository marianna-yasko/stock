/**
 webpack - project builder config
 **/

const basePath = '/app';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: `./${basePath}/src/app.js`,
    // mode: 'development',
    output: {
        filename: 'square-game.min.js',
        path: path.resolve(__dirname, './app/build')
    },
    plugins: [
        // new CleanWebpackPlugin([`./${basePath}/build`]),
        new HtmlWebpackPlugin({
            title: 'Square Game',
            filename: `./app/src/index.html`,
            template: `./app/build/index.html`
        }),
        new UglifyJSPlugin(),
        new CopyWebpackPlugin([{
            from: `./${basePath}/src/assets`
        }]),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: `./${basePath}/src`,
        hot: true,
        inline: false,
        lazy: false,
        quiet: true,
        noInfo: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        stats: { colors: true },
        historyApiFallback: {
            disableDotRule: true
        }
    }
};
