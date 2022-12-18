const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode:"development",

    plugins:[
        new HtmlWebpackPlugin(),
    ],
    devServer:{
        open:true,
    }
}