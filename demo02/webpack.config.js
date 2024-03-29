const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// console.log('__dirname: ', __dirname)
// console.log('path.resolve: ', path.resolve(__dirname, 'dist'))

module.exports = {
    entry:{
        app:'./app.js' //需要打包的文件入口
    },
    output:{
        publicPath:__dirname + '/dist/',// js引用的路径或cdn地址
        path:path.resolve(__dirname, 'dist'), //打包文件的输出目录
        filename:'bundle.js' //打包后产生的js文件
    },
    plugins:[
        new CleanWebpackPlugin() // 默认情况下，此插件将删除 webpack output.path目录中的所有文件，以及每次成功重建后所有未使用的 webpack 资产。
    ]


}