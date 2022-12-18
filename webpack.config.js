module.exports = {

    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.js$|\.ts$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                ['@babel/preset-env',
                                    {
                                        useBuiltIns: "entry",
                                        corejs: "3.22"
                                    }]
                            ],
                            // 配置插件
                            plugins:[]
                        }
                    }
                ]
            }
        ]
    }
}