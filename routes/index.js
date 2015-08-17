var express = require('express');
//var crypto = require('crypto');//核心模块，加密并生成各种散列
var adminDao = require('../dao/adminDao');
var userDao = require('../dao/userDao');
var router = express.Router();

//Enforce主页
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页', layout: 'layout' });
});


router.get('/login',function(req,res,next)  {
  //管理员登陆接口测试
  //res.set('Access-Control-Allow-Origin','*');//跨域许可
  //console.log('admin,password');
  //adminDao.Check(req,res,next);
  res.render('login',{title:'用户登录', layout: 'layout'});
});
router.post('/login',function(req,res,next)  {
  res.set('Access-Control-Allow-Origin', '*');//跨域许可
  adminDao.Check(req,res,next);
    //res.redirect('/');
});

router.get('/reg',function(req,res,next)  {
  //企业注册接口测试
  //res.set('Access-Control-Allow-Origin','*');//跨域许可
  //console.log('admin,password');
  //adminDao.reg(req,res,next);
  res.render('reg',{title:'管理员注册', layout: 'layout'});
});
router.post('/reg',function(req,res,next) {
  res.set('Access-Control-Allow-Origin','*');//跨域许可
  console.log('admin,password');
  adminDao.reg(req,res,next);
  req.session.id = req.body.admin;//向会话对象写入当前用户信息，可以通过它判断用户是否已经登录
  //验证表单
  //if (req.body['Ename']==null ||req.body['address']==null ||req.body['faren']==null ||req.body['phone']==null ||req.body['email']==null ||req.body['zip'] == null) {
  //  console.log('所填的信息不符合要求');
  //  return res.redirect('/reg');
  //}
  //  res.set('Access-Control-Allow-Origin', '*');//跨域许可
  //  if (adminDao.CheckReg(req, res, next)) {
  //    console.log('用户存在index');
  //  }else if (adminDao.reg(req, res, next)) {
  //    console.log('进入userDao进行注册index');
  //    req.session.id = req.body.admin;//向会话对象写入当前用户信息，可以通过它判断用户是否已经登录
  //}
});

router.get('/logout',function(req,res,next)  {
  res.redirect('/');
});

module.exports = router;
