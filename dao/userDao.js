//userDao/userDao.js
//实现与MySql交互

var mysql = require('mysql');
var $conf = require('../conf/db');
var $sql = require('./userSqlMapping');

//使用连接池，提升性能
var pool = mysql.createPool($conf.mysql);

//向前台返回json方法的简单封装
var jsonWrite = function(res,ret){
    if(typeof ret === 'undefined'){
        res.json({
            code:'1',
            msg:'操作失败'
        });
    }else{
        //try {
            res.json(ret);
        //}catch (err) {
        //    console.log('u不知道怎么修改');
        //}
    }
};

module.exports = {
    //用户信息修改
    messageXG: function (req,res,next)  {
        pool.getConnection(function(err, connection) {
            //获取前台页面传过来的参数
            var param = req.body;
            console.log(param.password);
            //建立连接，向表中插入值
            connection.query($sql.update, [param.password, param.address,param.phone,param.email], function(err,result) {
                if (result != null) {
                    res.render('success',{title: '修改',layout: 'userLayout'});
                }
                //以json格式，把结果返回前台
                //jsonWrite(res,result);
                //释放连接
                connection.release();
            });
        });
    },

    //用户登陆验证
    loginCheck: function (req,res,next)  {
        pool.getConnection(function(err,connection)  {
            //从前台页面传过来的参数
            var name = req.body.username;
            console.log(name);
            connection.query($sql.queryByName,[name],function(err,result)  {
                if (result == []) {
                    return res.redirect('/login');
                } else {
                    console.log("进入用户主页");
                    return res.redirect('/users');
                }
                connection.release();
            });
        });
    },

    //用户负责伙伴企业查询
    QE: function (req,res,next)  {
        pool.getConnection(function(err,connection)  {
            //从前台页面传过来的参数
            var id = req.body.id;
            console.log(id);
            connection.query($sql.queryE,[id],function(err,result)  {
                jsonWrite(res,result);
                connection.release();
            });
        });
    },

    //用户负责产品查询
    QPro: function (req,res,next)  {
        pool.getConnection(function(err,connection)  {
            //从前台页面传过来的参数
            var id = req.body.id;
            console.log(id);
            connection.query($sql.queryPro,[id],function(err,result)  {
                jsonWrite(res,result);
                connection.release();
            });
        });
    },

    //用户的同事查询
    QC: function (req,res,next)  {
        pool.getConnection(function(err,connection)  {
            //从前台页面传过来的参数
            var id = req.body.id;
            console.log(id);
            connection.query($sql.queryC,[id],function(err,result)  {
                jsonWrite(res,result);
                connection.release();
            });
        });
    },

    //本企业同事建立关系
    BuildR: function(req,res,next)  {
        pool.getConnection(function(err, connection) {
            var param = req.body;
            console.log(param.userId1);
            //建立连接，向表中插入值
            connection.query($sql.insert,[param.userId1,param.userId2], function(err,result) {
                console.log(param.userId2);
                if (result) {
                    res.render('success',{title: '建立',layout: 'userLayout'});
                }
                //以json格式，把结果返回前台
                //jsonWrite(res,result);
                connection.release();
            });
        });
    }
};
