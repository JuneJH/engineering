module.exports = {
    module:{
        rules:[
            {
                test:/index.\js$/,
                use:["./loaders/addHello_loader.js?hello=123"]
            }
        ]
    }
}