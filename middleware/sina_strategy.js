module.exports = function(accessToken, refreshToken, profile, callback) {
  process.nextTick(function() {
    return callback(null, profile);
  });
}
