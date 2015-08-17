//dao/userSqlMapping.js
//CRUD SQL语句

var user = {
    update: 'update user set password = ?,address = ?,phone = ?,email = ?',//用户信息修改
    queryByName: 'select password from user where name =?',//用户登陆验证
    queryE: 'select outEname from user where id = ?',//用户负责伙伴企业查询
    queryPro: 'select mc from product,user  where product.id = user.productId and user.id = ? ',//用户负责产品查询
    queryC: 'select a.userId2,b.userId1 from colleague a,colleague b where a.userId1 = b.userId2 = ?',//用户的同事查询(用自连接)
    insert: 'insert into colleague(userId1,userId2) values(?,?)'//本企业同事建立关系
};

module.exports = user;