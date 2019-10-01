var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');


const project = require('./project.config');
console.log("Building in " + JSON.stringify(project.env) + " mode");

module.exports = {
    devtool: 'source-map',
    entry: ["@babel/polyfill", './index.js'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app-bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.style']
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(project.env)
            },
            "process.globals": project.globals
        }),
        new CopyWebpackPlugin([
            {
                from: './index.html',
                to: './index.html'
            }
        ])
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
                query: {
                    limit: 8192
                }
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    mimetype: 'application/font-woff'
                }
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },
    devServer: {
        noInfo: false,
        clientLogLevel: "info",
        port:8889,
        quiet: false,
        lazy: false,
        contentBase: "build",
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
}