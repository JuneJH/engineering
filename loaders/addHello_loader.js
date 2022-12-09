const loaderUtils = require("loader-utils");
module.exports = function (source){
    const params = loaderUtils.urlToRequest(this);
    return source + "console.log('hello')";
}