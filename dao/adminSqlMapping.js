//dao/adminSqlMapping.js
//CRUD SQL语句

var admin = {
    insertE: 'insert into enterprise(Ename,address,faren,phone,email,zip,miaoshu,admin,password) values(?,?,?,?,?,?,?,?,?)',//管理员及企业注册
    queryByAdmin: 'select password from enterprise where admin =?',//管理员登陆验证
    update: "update enterprise set Ename = ?,address =?,faren = ?,phone = ?,email = ?,zip = ?,miaoshu = ? where admin = ?",//企业信息修改
    insertU: 'insert into user(id,name,password,address,phone,email,Ename,productId,outEname) values(?,?,?,?,?,?,?,?,?)', //添加企业用户
    deleteU: 'delete from user where id =?',//删除企业用户
    insertP: 'insert into product(id,mc,miaoshu,Ename) values(?,?,?,?)',//添加企业生产的产品||创建外购件
    deleteP: 'delete from product where id = ?',//删除企业生产的产品||删除外购件
    insertRe: 'insert into compose_of(productId,partId) values (?,?)',//产品与外购件相连
    deleteRe: 'delete from compose_of where productId =?',//产品与外购件关系解除
    updateMaE1: 'update user set outEname = ? where id = ?',//员工负责企业
    updateMaE2: 'update user set outEname = null where id = ?',//员工不负责企业
    updateProM1: 'update user set productId = ? where id = ?',//员工负责产品
    updateProM2: 'update user set productId = null where id = ?',//员工不负责产品
    insertER: 'insert into supply_to(sendAdmin,toAdmin,status) values (?,?,?)',//建立企业间关系
    deleteER: 'delete from supply_to where sendAdmin =?'//删除企业间关系
};

module.exports = admin;