const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "build"),
        filename: "main.js",
    },
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
        new HtmlWebpackPlugin({
            title: "Yumin's Notes",
            template: "./public/index.html",
            favicon: "./public/favicon.png",
            hash: true,
        }),
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
