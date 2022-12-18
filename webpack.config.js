const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,"css-loader"]
            },
            {
                test: /\.js$/,
                exclude: /lodash/,
                // include: /lodash/,
                use: [
                    {
                        loader:"cache-loader",
                        options:{
                            cacheDirectory:"./loaderCache"
                        }
                    },
                    "thread-loader",
                    "babel-loader"
                ]
            }
        ],
        noParse: /jquery/
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        }),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        open: true,
        hot:true,
    },
    devtool:"source-map"
}