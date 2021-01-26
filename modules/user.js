/*
 * @Author: your name
 * @Date: 2021-01-26 23:27:18
 * @LastEditTime: 2021-01-26 23:36:41
 */
var mongoose = require('./db')

var UserSchema = mongoose.Schema({
  name: 'String',
  age: Number,
  status: {
    type: Number,
    default: 1
  }
})

module.exports = mongoose.model('User',UserSchema,'user')