/**
 * webpack 支持 ES6、CommonJs 和 AMD 规范
 */

 //ES6
 import sum from './vendor/sum'
 console.log('sum(1,2) = ', sum(1, 2))

 //commonJs
 var minus = require('./vendor/minus')
 console.log('minus(1, 2) = ',minus(1, 2))

 //AMD
//  require(['./vendor/multi'],function(multi){
//     console.log('multi(1, 2) = ',multi(1,2))
//  })