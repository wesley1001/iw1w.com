var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// gameid: "12263"
// gameurl: "http://www.baidu.com/zhixin.php?url=Kf0000KmTrye6N9sGknfIgmt3uGNC_0xlRAYXI2Ouq1fuSPPc0pMNa_0xuaKFMJj5pJHztLGbjLvWqd2dAWhDovwnrO-4rBF_fBy4seaRqiWSFBXe3HMgMCMEpWHgXv7CVsLpd3.Db_juvIW2c2AJjEfdmhPd--h1oJuYGknNtIMyPnLYFhknIXL68msSxW9qx-9Ld3x5x9qVXZdLmx5GsS81jlen5MY3Ih1j_S8Z1lTr11sethZ1vmxUg9vxj9tSMjeXMjES7mh79h9men-xD0.THLPSP21Yte5Vtg7YPastfKYTh7buy-b5H610APETLwxTh78p1Ys0ZPdmM7GujYkPjfvPjRkrHTknWTznj0Lrjm10ANYXgK-5HDk0ANGujYknWcvnsK-uAN1mv-b5H00mvkGmvVxIZ-suHYk0ZK85HD0IANzUy-8mysqn0KlIjd1uykh0ZKs5HcYPjnknWcLP0K9uA-b5HcvrHD3P10zn1f10A-1gLIGThN_ugP15H00ug9Y5yu-Uhk-pHCervuzUvYlTvN_uW_eTZuGujCkPjfvPjRkrHmdPHRYP1TsrH6z0APzm1Y1nHmkP0"
// genre: "角色扮演"
// gifturl: "http://www.baidu.com/zhixin.php?url=Kf0000j32OKNawWOyER4ZjsY42ahKhF1RJvWEDgsBskG_ZBkPcUuVpKM0IwPJzQG_UbdeuYfqsLsGZZntjZ0679-ae0mqWE-QgLm6qg9L4qeIBinHNvXXNMc0fNmD6InowHx8LR.Db_juvIW2c2AJjEfdmhPd--h1oJuYGknNtIMyPnLYFhknIXL68msSxW9qx-9Ld3x5x9qVXZdLmx5GsS81jlen5MY3Ih1j_S8Z1lTr11sethZ1vmxUg9vxj9tSMjeXMjES7mh79h9men-xD0.THLPSP21Yte5Vtg7YPastfKYTh7buy-b5H610APETLwxTh78p1Ys0ZPdmM7GujYkPjfvPjRkrHTknWTznj0Lrjm10ANYXgK-5HDk0ANGujYknWcvnsK-uAN1mv-b5H00mvkGmvVxIZ-suHYz0ZK85HD0IANzUy-8mysqn0KlIjd1uykh0ZKs5HcYPjnknWcLP0K9uA-b5HcvrHD3P10zn1f10A-1gLIGThN_ugP15H00ug9Y5yu-Uhk-pHCervuzUvYlTvN_uW_eTZuGujCkPjfvPjRkrHmdPHRYP1TsrH6z0APzm1YkPHbkP0"
// more: []
// opentime: "16:00"
// opentime2: "2015-11-02 16:00:00"
// operator: "844a游戏"
// operurl: "http://www.baidu.com/zhixin.php?url=Kf0000KmTrye6N9sGknfIgmt3uGNC_0xlRAYXI2Ouq1fuSPPc0pMNa_0xuaKFMJj5pJHztLGbjLvWqd2dAWhDovwnrO-4rBF_fBy4seaRqiWSFBXe3HMgMCMEpWHgXv7CVsLpd3.Db_juvIW2c2AJjEfdmhPd--h1oJuYGknNtIMyPnLYFhknIXL68msSxW9qx-9Ld3x5x9qVXZdLmx5GsS81jlen5MY3Ih1j_S8Z1lTr11sethZ1vmxUg9vxj9tSMjeXMjES7mh79h9men-xD0.THLPSP21Yte5Vtg7YPastfKYTh7buy-b5H610APETLwxTh78p1Ys0ZPdmM7GujYkPjfvPjRkrHTknWTznj0Lrjm10ANYXgK-5HDk0ANGujYknWcvnsK-uAN1mv-b5H00mvkGmvVxIZ-suHYk0ZK85HD0IANzUy-8mysqn0KlIjd1uykh0ZKs5HcYPjnknWcLP0K9uA-b5HcvrHD3P10zn1f10A-1gLIGThN_ugP15H00ug9Y5yu-Uhk-pHCervuzUvYlTvN_uW_eTZuGujCkPjfvPjRkrHmdPHRYP1TsrH6z0APzm1Y1nHmkP0"
// servername: "充值高返利★16服"
// shortoperator: "844a..."
// status: 1
// timesign: 101
// title: "战痕天下"
// url: "http://www.baidu.com/zhixin.php?url=Kf0000KmTrye6N9sGknfIgmt3uGNC_0xlRAYXI2Ouq1fuSPPc0pMNa_0xuaKFMJj5pJHztLGbjLvWqd2dAWhDovwnrO-4rBF_fBy4seaRqiWSFBXe3HMgMCMEpWHgXv7CVsLpd3.Db_juvIW2c2AJjEfdmhPd--h1oJuYGknNtIMyPnLYFhknIXL68msSxW9qx-9Ld3x5x9qVXZdLmx5GsS81jlen5MY3Ih1j_S8Z1lTr11sethZ1vmxUg9vxj9tSMjeXMjES7mh79h9men-xD0.THLPSP21Yte5Vtg7YPastfKYTh7buy-b5H610APETLwxTh78p1Ys0ZPdmM7GujYkPjfvPjRkrHTknWTznj0Lrjm10ANYXgK-5HDk0ANGujYknWcvnsK-uAN1mv-b5H00mvkGmvVxIZ-suHYk0ZK85HD0IANzUy-8mysqn0KlIjd1uykh0ZKs5HcYPjnknWcLP0K9uA-b5HcvrHD3P10zn1f10A-1gLIGThN_ugP15H00ug9Y5yu-Uhk-pHCervuzUvYlTvN_uW_eTZuGujCkPjfvPjRkrHmdPHRYP1TsrH6z0APzm1Y1nHmkP0"

var game = new Schema({
  gameid: { type: String,  unique: true }
  gameurl: String,
  genre: String,
  gifturl: String,
  opentime: String,
  opentime2: Date,
  operator: String,
  shortoperator: String,
  operurl: String,
  servername: String,
  status: Number,
  timesign: Number,
  title: String,
  url: String
});

// 返回数据给用户时，将 _id 属性重命名为 id
game.set('toObject', {
  versionKey: false,

  transform: function(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  }
});

module.exports = mongoose.model('Game', game);
