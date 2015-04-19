var config = require('../config');
var cache = require('../common/cache');
var xmlbuilder = require('xmlbuilder');

exports.index = function (req, res, next) {
  res.render('index', {
    site: {
      title: config.name,
      description: config.description,
      keywords: config.keywords,
      google_tracker_id: config.google_tracker_id,
      cnzz_tracker_id: config.cnzz_tracker_id,
      logo: config.site_logo,
      favicon: config.site_icon,
      headers: config.site_headers
    }
  });
}

exports.sitemap = function(req, res, next) {
  var urlset = xmlbuilder.create('urlset', {version: '1.0', encoding: 'UTF-8'});
  urlset.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

  cache.get('sitemap', function(sitemap) {
    if (!sitemap) {
      // TODO:
      // 添加点数据给 sitemap
      sitemap = urlset.end();

      // 缓存一天
      cache.set('sitemap', sitemap, 3600 * 24);
    }
    
    res.type('xml');
    res.send(sitemap);
  });
}