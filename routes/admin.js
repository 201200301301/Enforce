var express = require('express');
var adminDao = require('../dao/adminDao');
var router = express.Router();

//管理员主页
router.get('/', function(req, res, next) {
    res.render('admin', { title: '管理员主页',layout: 'adminLayout'});
});

//企业信息修改
router.get('/messageXG',function(req,res,next) {
    //企业信息修改接口测试
    //res.set('Access-Control-Allow-Origin','*');//跨域许可
    //console.log('admin,password');
    //adminDao.messageXG(req,res,next);
    res.render('EMessageXG',{title: '企业信息修改',layout: 'adminLayout'});
});
router.post('/messageXG',function(req,res,next)  {
    res.set('Access-Control-Allow-Origin','*');//跨域许可
    console.log('admin,password');
    adminDao.messageXG(req,res,next);
});


//企业用户管理
router.get('/userM/C',function(req,res,next)  {
    //企业用户修改接口测试
    //res.set('Access-Control-Allow-Origin','*');//跨域许可
    //console.log('admin,password');
    //adminDao.addUser(req,res,next);
    res.render('EuserM',{title:'企业用户增加',layout: 'adminLayout'});
});
router.post('/userM/C',function(req,res,next)  {
    res.set('Access-Control-Allow-Origin','*');//跨域许可
    console.log('admin,password');
    adminDao.addUser(req,res,next);
});
router.get('/userM/D',function(req,res,next)  {
    //企业用户修改接口测试
    //res.set('Access-Control-Allow-Origin','*');//跨域许可
    //console.log('admin,password');
    //adminDao.deleteUser(req,res,next);
    res.render('EuserM1',{title:'企业用户删除',layout: 'adminLayout'});
});
router.post('/userM/D',function(req,res,next)  {
    res.set('Access-Control-Allow-Origin','*');//跨域许可
    console.log('admin,password');
    adminDao.deleteUser(req,res,next);
});


//企业产品管理
router.get('/productM/C',function(req,res,next)  {
    //企业产品修改接口测试
    //res.set('Access-Control-Allow-Origin','*');//跨域许可
    //console.log('admin,password');
    //adminDao.addPro(req,res,next);
    res.render('EproM',{title:'企业产品管理',layout: 'adminLayout'});
});
router.post('/productM/C',function(req,res,next)  {
    res.set('Access-Control-Allow-Origin','*');//跨域许可
    console.log('admin,password');
    adminDao.addPro(req,res,next);
});
router.get('/productM/D',function(req,res,next)  {
    //企业产品修改接口测试
    //res.set('Access-Control-Allow-Origin','*');//跨域许可
    //console.log('admin,password');
    //adminDao.deletePro(req,res,next);
    res.render('EproM1',{title:'企业产品管理',layout: 'adminLayout'});
});
router.post('/productM/D',function(req,res,next)  {
    res.set('Access-Control-Allow-Origin','*');//跨域许可
    console.log('admin,password');
    adminDao.deletePro(req,res,next);
});


//产品外购件管理
router.get('/partM/C',function(req,res,next)  {
    //产品外购件修改接口测试
    //res.set('Access-Control-Allow-Origin','*');//跨域许可
    //console.log('admin,password');
    //adminDao.addPa(req,res,next);
    res.render('EproM',{title:'产品外购件管理',layout: 'adminLayout'});
});
router.post('partM/C',function(req,res,next)  {
    res.set('Access-Control-Allow-Origin','*');//跨域许可
    console.log('admin,password');
    adminDao.addPa(req,res,next);
});
router.get('/partM/D',function(req,res,next)  {
    //产品外购件修改接口测试
    //res.set('Access-Control-Allow-Origin','*');//跨域许可
    //console.log('admin,password');
    //adminDao.deletePa(req,res,next);
    res.render('EproM1',{title:'产品外购件管理',layout: 'adminLayout'});
});
router.post('partM/D',function(req,res,next)  {
    res.set('Access-Control-Allow-Origin','*');//跨域许可
    console.log('admin,password');
    adminDao.deletePa(req,res,next);
});


//产品外购件关系
router.get('/pp/C',function(req,res,next)  {
    //产品外购件关系接口测试
    //res.set('Access-Control-Allow-Origin','*');//跨域许可
    //console.log('admin,password');
    //adminDao.linkPP(req,res,next);
    res.render('EpartM',{title:'产品外购件关系',layout: 'adminLayout'});
});
router.post('/pp/C',function(req,res,next)  {
    res.set('Access-Control-Allow-Origin','*');//跨域许可
    console.log('admin,password');
    adminDao.linkPP(req,res,next);
});
router.get('/pp/D',function(req,res,next)  {
    //产品外购件关系接口测试
    //res.set('Access-Control-Allow-Origin','*');//跨域许可
    //console.log('admin,password');
    //adminDao.deletePP(req,res,next);
    res.render('EpartM1',{title:'产品外购件关系',layout: 'adminLayout'});
});
router.post('/pp/D',function(req,res,next)  {
    res.set('Access-Control-Allow-Origin','*');//跨域许可
    console.log('admin,password');
    adminDao.deletePP(req,res,next);
});


//员工负责合作企业
router.get('/chargeE/C',function(req,res,next)  {
    //员工负责合作企业接口测试
    //res.set('Access-Control-Allow-Origin','*');//跨域许可
    //console.log('admin,password');
    //adminDao.chargeE(req,res,next);
    //adminDao.NchargeE(req,res,next);
    res.render('EchargeE',{title:'员工负责合作企业',layout:'adminLayout'});
});
router.post('/chargeE/C',function(req,res,next)  {
    res.set('Access-Control-Allow-Origin','*');//跨域许可
    console.log('admin,password');
    adminDao.chargeE(req,res,next);
});
router.get('/chargeE/D',function(req,res,next)  {
    //员工负责合作企业接口测试
    //res.set('Access-Control-Allow-Origin','*');//跨域许可
    //console.log('admin,password');
    //adminDao.chargeE(req,res,next);
    //adminDao.NchargeE(req,res,next);
    res.render('EchargeE1',{title:'员工负责合作企业',layout: 'adminLayout'});
});
router.post('/chargeE/D',function(req,res,next)  {
    res.set('Access-Control-Allow-Origin','*');//跨域许可
    console.log('admin,password');
    adminDao.NchargeE(req,res,next);
});

//员工负责本企业产品
router.get('/chargePro/C',function(req,res,next)  {
    //员工负责本企业产品接口测试
    //res.set('Access-Control-Allow-Origin','*');//跨域许可
    //console.log('admin,password');
    //adminDao.chargePro(req,res,next);
    //adminDao.NchargePro(req,res,next);
    res.render('EchargePro',{title:'员工负责本企业产品',layout: 'adminLayout'});
});
router.post('/chargePro/C',function(req,res,next)  {
    res.set('Access-Control-Allow-Origin','*');//跨域许可
    console.log('admin,password');
    adminDao.chargePro(req,res,next);
});
router.get('/chargePro/D',function(req,res,next)  {
    //员工负责本企业产品接口测试
    //res.set('Access-Control-Allow-Origin','*');//跨域许可
    //console.log('admin,password');
    //adminDao.chargePro(req,res,next);
    //adminDao.NchargePro(req,res,next);
    res.render('EchargePro1',{title:'员工负责本企业产品',layout: 'adminLayout'});
});
router.post('/chargePro/D',function(req,res,next)  {
    res.set('Access-Control-Allow-Origin','*');//跨域许可
    console.log('admin,password');
    adminDao.NchargePro(req,res,next);
});

//企业间关系管理
router.get('/ER/C',function(req,res,next)  {
    //员企业间关系管理接口测试
    //res.set('Access-Control-Allow-Origin','*');//跨域许可
    //console.log('admin,password');
    //adminDao.linkEE(req,res,next);
    //adminDao.deleteEE(req,res,next);
    res.render('ER',{title:'企业间关系管理',layout: 'adminLayout'});
});
router.post('/ER/C',function(req,res,next)  {
    res.set('Access-Control-Allow-Origin','*');//跨域许可
    console.log('admin,password');
    adminDao.linkEE(req,res,next);
});
router.get('/ER/D',function(req,res,next)  {
    //员企业间关系管理接口测试
    //res.set('Access-Control-Allow-Origin','*');//跨域许可
    //console.log('admin,password');
    //adminDao.linkEE(req,res,next);
    //adminDao.deleteEE(req,res,next);
    res.render('ER1',{title:'企业间关系管理',layout: 'adminLayout'});
});
router.post('/ER/D',function(req,res,next)  {
    res.set('Access-Control-Allow-Origin','*');//跨域许可
    console.log('admin,password');
    adminDao.deleteEE(req,res,next);
});


module.exports = router;