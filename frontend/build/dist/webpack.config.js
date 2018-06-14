"use strict";
var webpack = require('webpack');
var config = {
    entry: './src/index.tsx',
    output: {
        path: __dirname + '/dist',
        publicPath: "/dist/",
        filename: 'bundle.js'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader']
            },
            {
                exclude: /node_modules/,
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json', '.css', '.scss']
    },
    watch: true,
    devtool: "source-map",
    devServer: {
        historyApiFallback: true,
    },
};
module.exports = config;
//# sourceMappingURL=webpack.config.js.map