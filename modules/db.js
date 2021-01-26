/*
 * @Author: your name
 * @Date: 2021-01-26 23:26:18
 * @LastEditTime: 2021-01-26 23:30:00
 */
// 引入mongodb
const mongoose = require('mongoose')

// 建立连接
mongoose.connect('mongodb://127.0.0.1:27017/mydb', { useNewUrlParser: true }, (err) => {
  if (err) {
    return
  }
  console.log('success');
})

module.exports = mongoose

