const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry:{
        main:'./src/index.js' //需要打包的文件入口
    },
    output:{
        publicPath:__dirname + '/dist/', //js引用路径或CDN地址
        path:path.resolve(__dirname, 'dist'), //打包文件的输出目录
        filename: '[name].bundle.js' ,//打包后生产的js文件
        chunkFilename: '[name].js' //代码拆分后的文件名
    },
    plugins:[
        new CleanWebpackPlugin() //默认情况下，此插件将删除 webpack output.path目录中的所有文件，以及每次成功重建后所有未使用的 webpack 资产。
    ],
    optimization:{
        splitChunks:{
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups:{
                lodash:{
                    name: 'lodash',
                    test: /[\\/]node_modules[\\/]lodash[\\/]/,
                    priority:10
                },
                commons:{
                    name: 'commons',
                    minSize: 0, //压缩前最小模块大小，默认是30kb
                    minChunks:2, //最小公用次数
                    priority:5, //优先级
                    reuseExistingChunk: true // 公用模块必开启
                },
                vendors:{
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default:{
                    minChunks:2,
                    priority:-20,
                    reuseExistingChunk: true // 公用模块必开启
                }

            }
        }
    }
}