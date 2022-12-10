const FileListPlugin = require("./plugins/FileListPlugin");
module.exports = {
    devtool:"source-map",
    plugins:[
        new FileListPlugin({})
    ]
}