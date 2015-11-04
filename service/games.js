var request = require('request');
var qs = require('querystring');
var game = require('../model/game');

var BAIDU_API = 'http://iwan.baidu.com/YeyouAjax/selectOpenserv';

var _req = function(options) {
  return new Promise(function(resolve, reject) {
    request(options, function(err, response, body) {
      if (err) {
        console.log('获取游戏列表失败');
        console.log(err);

        reject(err);

        return;
      }

      if (response.statusCode !== 200) {
        console.log('获取游戏列表失败');
        console.log('响应状态码:', response.statusCode);

        reject(response);

        return;
      }

      var result = JSON.parse(body);

      resolve(result);
    });
  });
}

var build_options = function(params) {
  return {
    url: BAIDU_API + '?' + qs.stringify(params),
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36'
    }
  }
};

exports.list = function() {
  var now = new Date();
  var params = {
    pid: 342,
    f: 'sug',
    time: now.toLocaleDateString() + ' ' + now.toLocaleTimeString(),
    oq: '爱玩首页',
    q: '爱玩首页',
    psid: 0,
    fr: 'self',
    yeyouquery: '爱玩首页',
    query: '爱玩首页',
    sid: 0,
    zt: 'self',
    from: 'self'
  };

  var page_1_opts = build_options(params);
  params.page = 2;
  var page_2_opts = build_options(params);

  return Promise
    .all([_req(page_1_opts), _req(page_2_opts)])
    .then(function(vals) {
      return {
        totalgame: vals[0].data.totalgame + vals[1].data.totalgame,
        list: vals[0].data.list.concat(vals[1].data.list)
      };
    })
    .then(function(data) {
      // 和页面上的数据不是同步的
      game.collection.insert(data.list);
      // 还没插入完成，就会返回
      return data;
    });
}
