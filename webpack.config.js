const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const jqueryMap = require("./dll/jquery.mainfest.json");
const lodashMap = require("./dll/lodash.mainfest.json");
module.exports = {
    mode: "development",

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new webpack.DllReferencePlugin({
            manifest: jqueryMap
        }),
        new webpack.DllReferencePlugin({
            manifest: lodashMap
        }),
    ],
    devServer: {
        open: true,
    }
}