const express=require('express');
//引入用户路由器
const userRouter=require('./routers/user.js');
const myproRouter=require('./routers/mypro.js');
//引入body-parser 中间件
const bodyParser=require('body-parser');
var server=express();
server.listen(8080);

//托管静态资源到public目录下
server.use( express.static('public') );
server.use( express.static('mypro') );
server.use( bodyParser.urlencoded({
    extended:false
    //不使用第三方qs模块，而是使用querystring模块
}));

//使用路由器
server.use('/user.js',userRouter);
server.use('/mypro',myproRouter);