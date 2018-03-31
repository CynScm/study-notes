## node 学习笔记
### 1. module.exports和exports的关系 

解释：module.exports是每个模块对外的接口，因此，事实上，require()只能识别module.exports，之所以似乎也能识别exports，原因是：默认exports=module.exports={},也就是说默认exports指向module.exports的内存地址，如果exports直接被赋值为其他值，那么require将无法识别

demo:
index.js中的内容
```javascript
var demo = require("./log");  
console.log(demo); 
```
log.js中的内容
```javascript
//行首其实默认有一句话 var exports = module.exports={}
exports = function() {    
    console.log('我会输出吗？');    
};  
```
输出结果是：输出了module.exports默认的{}
```
GoohackdeMacBook-pro:demo Goohack$ node index.js
{}
```