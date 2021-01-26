/*
 * @Author: your name
 * @Date: 2021-01-19 23:18:45
 */

var UserModel = require('./modules/user')

UserModel.find({}, (err, res) => {
  if (err) {
    console.log(err);
    return
  }
  console.log(res);
})