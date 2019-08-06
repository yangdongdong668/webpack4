const path = require('path');
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundles.js'
    }
}

//搭建项目并打包 JS 文件