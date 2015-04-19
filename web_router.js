var express = require('express');
var config = require('./config');
var passport = require('passport');
var sina = require('./controller/sina');

var router = express.Router();

// 主页
router.get('/', site.index);
// sitemap
router.get('/sitemap.xml', site.sitemap);
// 注册
if (config.allow_sign_up) {
  // 提交注册信息
  router.post('/signup', sign.signup);
} else {
  // 进行github验证
  router.get('/signup', passport.authenticate('sina'));
}

// Auth
app.get('/auth/sina', passport.authenticate('sina'));
// Verify Auth
app.get('/auth/sina/callback', passport.authenticate('sina', { failureRedirect: '/' }, sina.callback));


module.exports = router;