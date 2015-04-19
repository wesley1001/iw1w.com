var path = require('path');
var root = __dirname;

module.exports = {
  debug: true,
  
  // 网站域名信息
  site_static_host: 'http://iw1w.qiniudn.com', // cdn host, 如: http://iw1w.qiniudn.com
  host: 'iw1w.com', // 网站域名

  // SEO
  name: '', // 网站标题
  description: '', // 网站描述,
  keywords: '', // 网站关键词

  // 添加到 html head 中的信息
  site_headers: [
    '<meta author="" content="Kane@iw1w" />'
  ],
  site_logo: '/public/images/xx', // 默认为 name
  site_icon: '/public/images/xx', // 默认没有 favicon, 这里填写网址

  // 导航菜单
  site_navs: [
    // 格式 [ path, title, [target='']]
    ['/about', '关于']
  ],

  // 默认的Google tracker ID，申请地址：http://www.google.com/analytics/
  google_tracker_id: '',
  // 默认的cnzz tracker ID
  cnzz_tracker_id: '',

  // mongodb 配置
  db: 'mongodb://127.0.0.1:27017/iw1w',
  db_name: 'iw1w',

  // redis 配置，默认是本地
  redis_host: '127.0.0.1',
  redis_port: 6379,

  session_secret: 'iw1w_secret',
  auth_cookie_name: 'iw1w',

  // 程序运行的端口
  port: 3000,

  // 每个 ip 每天能访问的次数
  visit_per_day: 1000,

  // 默认允许注册
  allow_sign_up: true,

  // sina webo 登陆配置
  sina_oauth: {
    clientID: '',
    clientSecret: '',
    callbackURL: ''
  }
};
