/* global module */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var utility = require('utility');

var UserSchema = new Schema({
  name: { type: String }, // 用户名
  pass: { type: String }, // 密码
  email: { type: String }, // 电子邮箱
  weibo: { type: String }, // 新浪微博
  avatar: { type: String }, // 用户头像，email
  score: { type: Number }, // 用户积分
  level: { type: String }, // 用户等级
  is_block: { type: Boolean, default: false }, // 是否被管理员屏蔽
  active: { type: Boolean, default: false }, // 用户是否激活
  is_star: { type: Boolean, default: false }, // 是否是高级用户
  accessToken: { type: String }, // 权限 token
  create_at: { type: Date, default: Date.now }, // 创建时间
  update_at: { type: Date, default: Date.now } // 修改时间
});

// 用户头像 url 地址
UserSchema.virtual('avatar_url').get(function () {
  var url = this.avatar || ('https://gravatar.com/avatar/' + utility.md5(this.email.toLowerCase()) + '?size=48');

  // www.gravatar.com 被墙
  // url = url.replace('//www.gravatar.com', '//gravatar.com');

  // 让协议自适应 protocol，使用 `//` 开头
  // if (url.indexOf('http:') === 0) {
  //   url = url.slice(5);
  // }

  // 如果是 github 的头像，则限制大小
  if (url.indexOf('githubusercontent') !== -1) {
    url += '&s=120';
  }

  // 通过服务器代理访问
  url = '/agent?url=' + encodeURIComponent(url);

  return url;
});

UserSchema.virtual('is_advanced').get(function () {
  // 积分高于 700 则认为是高级用户
  return this.score > 700 || this.is_star;
});

UserSchema.index({ name: 1 }, { unique: true });
UserSchema.index({ email: 1 }, { unique: true });
UserSchema.index({ score: -1 });
UserSchema.index({ accessToken: 1 });

module.exports = mongoose.model('User', UserSchema);