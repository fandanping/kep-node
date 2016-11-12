var express = require('express');
var router = express.Router();
var C = require('../controllers/user.js')


//是否登陆
router.use(C.isLogin);
//跳转个人中心
router.get('/:username', C.openUserPage)
//跳转用户信息设置
router.get('/:username/setting', function(req, res){
    res.render("setting");
})
//退出
router.get('/:username/logout', C.doLogout)
module.exports = router;