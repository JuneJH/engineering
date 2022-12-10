module.exports = class{
    constructor(options){
        const defaultConf = {filename:"fileList.txt "}
        this.options = {...defaultConf,...options};
    }
    /**
     * webpack初始化时执行
     * @param {*webpack初始化时创建的对象，整个生命周期只此一个} compiler 
     */
    apply(compiler){
        /**
         * 注册事件，获得对象complition,每次编译时重新创建
         */
        compiler.hooks.emit.tap("FileListPlugin",compilation=>{
            let str = '生成文件列表\n\n';
            Object.keys(compilation.assets).forEach((key)=>{
                console.log(key)
                str += `\n【${key}】: ${compilation.assets[key].size()}kb `
            })
            compilation.assets[this.options.filename] = {
                source(){
                    return str;
                },
                size(){
                    return str.length / 1000;
                }
            }
        })


    }
}