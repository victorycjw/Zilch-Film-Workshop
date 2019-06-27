const express=require('express');
//引入用户路由器
const userRouter=require('./routers/user.js');
const myproRouter=require('./routers/mypro.js');
//引入body-parser 中间件
const bodyParser=require('body-parser');
var app=express();
app.listen(8080);

//托管静态资源到public目录下
app.use( express.static('public') );
app.use( express.static('mypro') );
app.use( bodyParser.urlencoded({
    extended:false
    //不使用第三方qs模块，而是使用querystring模块
}));

//使用路由器
app.use('/user.js',userRouter);
app.use('/mypro',myproRouter);