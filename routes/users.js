var express = require('express');
var userDao = require('../dao/userDao');
var router = express.Router();

//用户主页
router.get('/', function(req, res, next) {
  res.render('user', { title: '用户主页',layout: 'userLayout'});
});

//用户信息修改
router.get('/messageXG',function(req,res,next)  {
  //用户信息修改接口测试
  //res.set('Access-Control-Allow-Origin','*');//跨域许可
  //console.log('admin,password');
  //userDao.messageXG(req,res,next);
  res.render('UMessageXG', { title: '用户信息修改',layout: 'userLayout'});
});
router.post('/messageXG',function(req,res,next)  {
  res.set('Access-Control-Allow-Origin','*');//跨域许可
  console.log('admin,password');
  userDao.messageXG(req,res,next);
});

//负责伙伴企业查询
router.get('/EQuery',function(req,res,next)  {
  //负责伙伴企业接口测试
  //res.set('Access-Control-Allow-Origin','*');//跨域许可
  //console.log('admin,password');
  //userDao.QE(req,res,next);
  res.render('QU', { title: '用户负责企业查询',layout: 'userLayout'});
});
router.post('/EQuery',function(req,res,next)  {
  res.set('Access-Control-Allow-Origin','*');//跨域许可
  console.log('admin,password');
  userDao.QE(req,res,next);
});

//负责产品查询
router.get('/ProQuery',function(req,res,next)  {
  //负责产品查询接口测试
  //res.set('Access-Control-Allow-Origin','*');//跨域许可
  //console.log('admin,password');
  //userDao.QPro(req,res,next);
  res.render('QU', { title: '用户负责产品查询',layout: 'userLayout'});
});
router.post('/ProQuery',function(req,res,next)  {
  res.set('Access-Control-Allow-Origin','*');//跨域许可
  console.log('admin,password');
  userDao.QPro(req,res,next);
});

//同事查询
router.get('/colleagueQuery',function(req,res,next)  {
  //同事查询接口测试
  //res.set('Access-Control-Allow-Origin','*');//跨域许可
  //console.log('admin,password');
  //userDao.QC(req,res,next);
  res.render('QU', { title: '同事查询',layout: 'userLayout'});
});
router.post('/colleagueQuery',function(req,res,next)  {
  res.set('Access-Control-Allow-Origin','*');//跨域许可
  console.log('admin,password');
  userDao.QC(req,res,next);
});

//与本企业内用户建立同事关系
router.get('/BuildR',function(req,res,next)  {
  //建立同事关系接口测试
  //res.set('Access-Control-Allow-Origin','*');//跨域许可
  //console.log('admin,password');
  //userDao.BuildR(req,res,next);
  res.render('BuildR', { title: '建立同事关系',layout: 'userLayout'});
});
router.post('/BuildR',function(req,res,next)  {
  res.set('Access-Control-Allow-Origin','*');//跨域许可
  console.log('admin,password');
  userDao.BuildR(req,res,next);
});

module.exports = router;
