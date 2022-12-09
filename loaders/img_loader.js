const loaderUtils = require("loader-utils");
function img_loader(buffer){
    const {limit=1000,filename="[contenthash].[ext]"} = this.query;

    const len = buffer.byteLength;
    if(len > limit){
        return toFile.call(this,buffer,filename);
    }
    
    return  `
    module.exports = \`${toBase64(buffer)}\`;
    `;
}

img_loader.raw = true;


function toBase64(buffer){
    const res = buffer.toString("base64");
    return `data:image/jpeg;base64,${res}`;
}

function toFile(buffer,filename){

    const file = loaderUtils.interpolateName(this,filename,{content:buffer})
    this.emitFile(file,buffer)

    return `
        module.exports = '${file}'
    `

}


module.exports = img_loader;