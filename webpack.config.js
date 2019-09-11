const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].[contenthash].js",
    },
    optimization: {
        runtimeChunk: "multiple",
        splitChunks: {
            chunks: "all",
        },
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: [
                    // style-loader
                    { loader: "style-loader" },
                    // css-loader
                    {
                        loader: "css-loader",
                    },
                ],
            },
            {
                test: /\.(jpg|png|gif|svg|ico|ttf|eot|woff|woff2|otf)$/,
                use: [
                    {
                        loader: "url-loader",
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Yumin's Notes",
            template: "./public/index.html",
            favicon: "./public/favicon.png",
            hash: true,
        }),
        new webpack.BannerPlugin("Copyright Yumin Gui <guiyumin@gmail.com> © 2019-" + new Date().getFullYear()),
    ],
    devServer: {
        open: true,
        noInfo: false,
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 8081,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src/"),
        },
    },
};
