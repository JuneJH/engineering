const baseConfig = require("./webpack.base");
const productionConfig = require("./webpack.production");
const develpomentConfig = require("./webpack.dev");

/**
 * webpack不仅可以直接导出一个对象，也可以是一个函数，其函数返回应该是一个webpack的配置对象
 * @param {*webpack会将命令行参数带过来} env 
 * @returns 
 */
module.exports = env=>{

    if(env?.dev){
        return {
            ...baseConfig,
            ...develpomentConfig
        }
    }else{
        return {
            ...baseConfig,
            ...productionConfig
        }
    }
}