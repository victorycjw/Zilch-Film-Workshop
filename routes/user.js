const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();

//添加路由
//1.用户注册
router.post('/reg',function(req,res) {
    var obj=req.body;
    console.log(obj);
    //验证每一项数据是否为空
    //例如：用户名为空，提示'用户名不能为空'
    if(!obj.uname){
        res.send({code:401,msg:'uname required'});
        return;
    }
    if(!obj.upwd){
        res.send({code:402,msg:'upwd required'});
        return;
    }
    if(!obj.email){
        res.send({code:403,msg:'email required'});
        return;
    }
    if(!obj.phone){
        res.send({code:404,msg:'phone required'});
        return;
    }

//执行SQL语句
pool.query('INSERT INTO xz_user SET ?',[obj],function(err,result){
    if(err)  throw err;
    console.log(result);
    if(result.affectedRows>0)
    res.send({code:200,msg:'reg success'});
    //res.send('注册成功！！');
    });
});

//2.用户登录
router.post('/login',function(req,res) {
    //2.1获取数据
    var obj=req.body;
    //console.log(obj);
    //2.2验证数据为空
    if(!obj.uname){
        res.send({code:401,msg:'uname required'});
        return;
    }
    if(!obj.upwd){
        res.send({code:402,msg:'upwd required'});
        return;
    }
//2.3执行SQL语句
pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=? ',[obj.uname,obj.upwd],function(err,result){
if(err)  throw err;
    console.log(result);
    if(result.length>0)
        res.send({code:200,msg:'login success'});
    else
        res.send({code:301,msg:'login error'});
        //res.send('登录成功！！');
    });
        //res.send('登录成功！！');
});

//3.检索用户
router.get('/detail',function(req,res) {
    var obj=req.query;
    //console.log(obj);
    if(!obj.uid){
        obj.uid=ParseInt(obj.uid);
        res.send({code:401,msg:'uid required'});
        return;
    }
//执行SQL语句
pool.query('SELECT * FROM xz_user WHERE uid=?',[obj.uid],function(err,result){
    if(err)  throw err;
    res.send(result);
    //res.send('检索成功！！');
    });
});

//4.修改用户
router.get('/update',function(req,res) {
    //获取数据
    var obj=req.query;
    //验证数据为空
    var i=400;
    for(var key in obj){
        i++;
        if(!obj[key]){
            res.send({code:i,msg:key+' required'});
            return; 
        }
    }
//执行SQL语句
pool.query('UPDATE xz_user SET email=?,phone=?,user_name=?,gender=? WHERE uid=? ',[obj.email,obj.phone,obj.user_name,obj.gender,obj.uid],function(err,result){
    if(err)  throw err;
        console.log(result);
        if(result.affectedRows>0)
            res.send({code:200,msg:'update success'});
        else
            res.send({code:301,msg:'update error'});
    });
        //res.send('修改成功！！');
});

//5.用户列表
router.get('/list',function(req,res) {
    //获取数据
    var obj=req.query;
    //验证数据为空
    if(!obj.pno)
        obj.pno=1;
    if(!obj.size)
        obj.size=2;
    obj.pno=parseInt(obj.pno);
    obj.size=parseInt(obj.size);
    var start=(obj.pno-1)*obj.size;
//执行SQL语句
pool.query('SELECT * FROM xz_user LIMIT ?,?',[start,obj.size],function(err,result){
    if(err)  throw err;
        console.log(result);
    });
        //res.send('修改成功！！');
});


//6.删除用户
router.get('/delete',function(req,res) {
    //获取数据
    var obj=req.query;
    //验证数据为空
    if(!obj.uid){
        res.send({code:401,msg:'uid required'});
        return;
    }
//执行SQL语句
pool.query('DELETE FROM xz_user WHERE uid=?',[obj.uid],function(err,result){
    if(err)  throw err;
        console.log(result);
    if(result.affectedRows>0)
        res.send({code:200,msg:'delete success'});
    else
        res.send({code:200,msg:'delete error'});
    });
        //res.send('修改成功！！');
});

//导出路由器
module.exports=router;