var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../model/user');

passport.use(new LocalStrategy(function (name, pass, done) {
  User.findOne({ name: name }, function(err, user) {
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false, { message: '用户不存在' });
    }

    if (!user.validPassword(pass)) {
      return done(null, false, { message: '密码不正确' });
    }

    return done(null, user);
  });
}));