const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //将css单独打包成文件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // 压缩 css


module.exports = {
    entry:{
        app:'./src/app.js'
    },
    output:{
        publicPath:'./',  //js引入的路径或CDN地址
        path:path.resolve(__dirname,'dist'), //打包文件的输出目录
        filename:'[name].bundle.js', //代码打包后的文件名
        chunkFilename:'[name].js' //代码拆分后的文件名  
    },
    module:{
        rules:[
            {
                test:/\.css$/, //针对.css后缀文件设置 loader
                use:[{
                    loader:MiniCssExtractPlugin.loader
                },'css-loader']  //使用loader
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            //打包输出HTML文件
            title:'自动生成HTML',
            minify:{
                //压缩HTML文件
                removeComments:true, //移除HTML中的注释
                collapseWhitespace:true, //删除空白符与换行符
                minifyCSS:true //压缩内联css
            },
            filename:'index.html', //生成后的文件名
            template:'index.html', //根据此模板生成HTML文件
            chunks:['app'] //entry中app入口才会被打包
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css',
            chunkFilename:'[id].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp:/\.css$/g,
            cssProcessor:require('cssnano'), //用于优化，最小化css的css处理器，默认为cssnano
            cssProcessorOptions:{safe:true,discardComments:{removeAll:true}}, //传递给cssProcessor 的选项，默认为{}
            canPrint:true //布尔值，指示插件是可以将消息打印到控制台，默认为true
        })
    ]

}