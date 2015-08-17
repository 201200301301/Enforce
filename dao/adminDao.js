//userDao/userDao.js
//实现与MySql交互

var mysql = require('mysql');
var $conf = require('../conf/db');
var $sql = require('./adminSqlMapping');

var userDao = require('../dao/userDao');

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
        try {
        res.json(ret);
        }catch (err) {
            console.log('a不知道怎么修改');
        }
    }
};

module.exports = {
    //管理员及企业注册
    reg: function (req,res,next)  {
        pool.getConnection(function(err,connection)  {
            //从前台页面传过来的参数
            var param = req.body;
            console.log(param.admin);
            console.log(param.password);
            //建立连接，向enterprise表中插入值
            connection.query($sql.insertE,[param.Ename,param.address,param.faren,param.phone,param.email,param.zip,param.miaoshu,param.admin,param.password],function(err,result)  {
                if (result) {
                    console.log('注册成功');
                    return res.redirect('/');
                }
                connection.release();//释放连接
            });
        });
    },

    //注册时检查数据库中是否存在
    CheckReg: function (req,res,next)  {
        pool.getConnection(function(err,connection)  {
            //从前台页面传过来的参数
            var admin = req.body.admin;
            console.log(admin);
            connection.query($sql.queryByAdmin,[admin],function(err,result)  {
                if (result) {
                    console.log('用户存在');
                    return res.redirect('/reg');
                }
                connection.release();
            });
        });
    },

    //管理员登陆验证
    Check: function (req,res,next)  {
        pool.getConnection(function(err,connection)  {
            //从前台页面传过来的参数
            var admin = req.body.username;
            console.log(admin);
            connection.query($sql.queryByAdmin,[admin],function(err,result)  {
                if (result == []) {
                    res.set('Access-Control-Allow-Origin', '*');//跨域许可
                    userDao.loginCheck(req,res,next);
                } else {
                    console.log("进入管理员主页");
                    return res.redirect('/admin');
                }
                connection.release();
            });
        });
    },

    //企业信息修改
    messageXG: function (req,res,next) {
        //updateByAdmin企业信息修改
        var param = req.body;
        console.log(param.Ename);
        if (param.Ename == null || param.address == null || param.faren == null || param.phone == null || param.email == null || param.zip == null)  {
            jsonWrite(res,undefined);
            return;
        }
        pool.getConnection(function(err,connection)  {
            console.log(param.admin);
            connection.query($sql.update,[param.Ename,param.address,param.faren,param.phone,param.email,param.zip,param.miaoshu,param.admin], function(err,result) {
                if (result) {
                    res.render('success',{title: '企业信息修改',layout: 'adminLayout'});
                }
                //jsonWrite(res,result);
                connection.release();
            });
        });
    },

    //管理员添加用户
    addUser: function (req,res,next)  {
        pool.getConnection(function(err, connection) {
            var param = req.body;
            console.log(param.name);
            console.log(param.password);
            //建立连接，向表中插入值
            connection.query($sql.insertU,[param.id,param.name,param.password,param.address,param.phone,param.email,param.Ename,param.productId,param.outEname], function(err,result) {
                console.log('与数据库交互');
                if (result) {
                    res.render('success',{title: '添加企业用户',layout: 'adminLayout'});
                    }
                //以json格式，把结果返回前台
                //jsonWrite(res,result);
                connection.release();
            });
        });
    },

    //管理员删除用户
    deleteUser: function(req,res,next)  {
        pool.getConnection(function(err, connection) {
            var id = req.body.id;
            console.log(id);
            //建立连接，向表中插入值
            connection.query($sql.deleteU,[id], function(err,result) {
                if (result) {
                    res.render('success',{title: '删除企业用户',layout: 'adminLayout'});
                }
                //以json格式，把结果返回前台
                //jsonWrite(res,result);
                connection.release();
            });
        });
    },

    //添加企业生产的产品
    addPro: function(req,res,next)  {
        pool.getConnection(function(err, connection) {
            var param = req.body;
            console.log(param.id);
            //建立连接，向表中插入值
            connection.query($sql.insertP,[param.id,param.mc,param.miaoshu,param.Ename], function(err,result) {
                if (result) {
                    res.render('success',{title: '添加企业产品',layout: 'adminLayout'});
                }
                //以json格式，把结果返回前台
                //jsonWrite(res,result);
                connection.release();
            });
        });
    },

    //删除企业生产的产品
    deletePro: function(req,res,next)  {
        pool.getConnection(function(err, connection) {
            var id = req.body.id;
            console.log(id);
            //建立连接，向表中插入值
            connection.query($sql.deleteP,[id], function(err,result) {
                if (result) {
                    res.render('success',{title: '删除企业产品',layout: 'adminLayout'});
                }
                //以json格式，把结果返回前台
                //jsonWrite(res,result);
                connection.release();
            });
        });
    },

    //添加产品外购件
    addPa: function(req,res,next)  {
        pool.getConnection(function(err, connection) {
            var param = req.body;
            console.log(param.id);
            //建立连接，向表中插入值
            connection.query($sql.insertP,[param.id,param.mc,param.miaoshu,param.Ename], function(err,result) {
                if (result) {
                    res.render('success',{title: '添加产品外购件',layout: 'adminLayout'});
                }
                //以json格式，把结果返回前台
                //jsonWrite(res,result);
                connection.release();
            });
        });
    },

    //删除产品外购件
    deletePa: function(req,res,next)  {
        pool.getConnection(function(err, connection) {
            var id = req.body.id;
            console.log(id);
            //建立连接，向表中插入值
            connection.query($sql.deleteP,[id], function(err,result) {
                if (result) {
                    res.render('success',{title: '删除产品外购件',layout: 'adminLayout'});
                }
                //以json格式，把结果返回前台
                //jsonWrite(res,result);
                connection.release();
            });
        });
    },

    //产品外购件相连
    linkPP: function(req,res,next)  {
        pool.getConnection(function(err, connection) {
            var param = req.body;
            console.log(param.productId);
            //建立连接，向表中插入值
            connection.query($sql.insertRe,[param.productId,param.partId], function(err,result) {
                if (result) {
                    res.render('success',{title: '产品外购件相连',layout: 'adminLayout'});
                }
                //以json格式，把结果返回前台
                //jsonWrite(res,result);
                connection.release();
            });
        });
    },

    //产品外购件关系解除
    deletePP: function(req,res,next)  {
        pool.getConnection(function(err, connection) {
            var id = req.body.productId;
            console.log(id);
            //建立连接，向表中插入值
            connection.query($sql.deleteRe,[id], function(err,result) {
                if (result) {
                    res.render('success',{title: '产品外购件关系解除',layout: 'adminLayout'});
                }
                //以json格式，把结果返回前台
                //jsonWrite(res,result);
                connection.release();
            });
        });
    },

    //员工负责企业
    chargeE: function(req,res,next)  {
        pool.getConnection(function(err, connection) {
            var param = req.body;
            console.log(param.outEname);
            //建立连接，向表中插入值
            connection.query($sql.updateMaE1,[param.outEname,param.id], function(err,result) {
                if (result) {
                    res.render('success',{title: '员工负责企业',layout: 'adminLayout'});
                }
                //以json格式，把结果返回前台
                //jsonWrite(res,result);
                connection.release();
            });
        });
    },

    //员工不负责企业
    NchargeE: function(req,res,next)  {
        pool.getConnection(function(err, connection) {
            var id = req.body.id;
            console.log(id);
            //建立连接，向表中插入值
            connection.query($sql.updateMaE2,[id], function(err,result) {
                if (result) {
                    res.render('success',{title: '员工不负责企业',layout: 'adminLayout'});
                }
                //以json格式，把结果返回前台
                //jsonWrite(res,result);
                connection.release();
            });
        });
    },

    //员工负责产品
    chargePro: function(req,res,next)  {
        pool.getConnection(function(err, connection) {
            var param = req.body;
            console.log(param.productId);
            //建立连接，向表中插入值
            connection.query($sql.updateProM1,[param.productId,param.id], function(err,result) {
                if (result) {
                    res.render('success',{title: '员工负责产品',layout: 'adminLayout'});
                }
                //以json格式，把结果返回前台
                //jsonWrite(res,result);
                connection.release();
            });
        });
    },

    //员工不负责产品
    NchargePro: function(req,res,next)  {
        pool.getConnection(function(err, connection) {
            var id = req.body.id;
            console.log(id);
            //建立连接，向表中插入值
            connection.query($sql.updateProM2,[id], function(err,result) {
                if (result) {
                    res.render('success',{title: '员工不负责产品',layout: 'adminLayout'});
                }
                //以json格式，把结果返回前台
                //jsonWrite(res,result);
                connection.release();
            });
        });
    },

    //建立企业间关系
    linkEE: function(req,res,next)  {
        pool.getConnection(function(err, connection) {
            var param = req.body;
            console.log(param.sendAdmin);
            //建立连接，向表中插入值
            connection.query($sql.insertER,[param.sendAdmin,param.toAdmin,param.status], function(err,result) {
                if (result) {
                    res.render('success',{title: '建立企业间关系',layout: 'adminLayout'});
                }
                //以json格式，把结果返回前台
                //jsonWrite(res,result);
                connection.release();
            });
        });
    },

    //删除企业间关系
    deleteEE: function(req,res,next)  {
        pool.getConnection(function(err, connection) {
            var id = req.body.sendAdmin;
            console.log(id);
            //建立连接，向表中插入值
            connection.query($sql.deleteER,[id], function(err,result) {
                if (result) {
                    res.render('success',{title: '删除',layout: 'adminLayout'});
                }
                //以json格式，把结果返回前台
                //jsonWrite(res,result);
                connection.release();
            });
        });
    }
};
