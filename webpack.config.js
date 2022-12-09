module.exports = {
    module:{
        rules:[
            {
                test:/index.\js$/,
                use:["./loaders/addHello_loader.js?hello=123"]
            }, {
                test: /\.css$/,
                use:["./loaders/style_loader.js"]
            },{
                test: /\.jpeg$/,
                use:[{
                    loader:"./loaders/img_loader.js",
                    options:{
                        limit:1000,
                        filename:"icon[hash].[ext]"
                    }
                }]
            }
        ]
    }
}