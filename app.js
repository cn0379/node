/*
 * @Author: your name
 * @Date: 2021-01-19 23:18:45
 * @LastEditTime: 2021-01-26 00:18:14
 */

// 引入mongodb
const mongoose = require('mongoose')

// 建立连接
mongoose.connect('mongodb://127.0.0.1:27017/mydb')

// 操作admin表 定义一个schema
const AdminSchema = mongoose.Schema({
  name: 'String',
  age: Number,
  status: Number
})

// 定义数据库模型
const User = mongoose.model('User', AdminSchema)

// 查询
// User.find({}, (err, res) => {
//   if (err) {
//     console.log(err);
//     return
//   }
//   console.log(res);
// })

// 增加
// const data = new User({
//   name: '张少隆',
//   age: 22,
//   status: 0
// })

// data.save((err, res) => {
//   if (err) {
//     return
//   }
//   console.log(res);
// })

// 更新

const data = new User({
  name: '张少隆',
  age: 18,
  status: 0
})

data.update({ "_id": '600eea71f06c492778a5c277' }, { "name": 5555 }, (err, res) => {
  if (err) {
    return console.log(err);
  }
  console.log(res);
})

// const express = require('express')

// const app = express()

// app.get('/login', (req, res) => {
//   res.send('hellow')
// })

// app.listen(3000)