var express = require('express');
var config = require('./config');
var passport = require('passport');
var site = require('./controller/site');
var sina = require('./controller/sina');
var sign = require('./controller/sign');

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
router.get('/auth/sina', passport.authenticate('sina'));
// Verify Auth
router.get('/auth/sina/callback', passport.authenticate('sina', { failureRedirect: '/' }, sina.callback));

console.log('web router');

module.exports = router;
