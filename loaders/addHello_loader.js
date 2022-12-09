const loaderUtils = require("loader-utils");
module.exports = function (source){
    const params = loaderUtils.urlToRequest(this);
    console.log("======",this.loaders)
    return source + "console.log('hello')";
}