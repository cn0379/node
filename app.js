/*
 * @Author: your name
 * @Date: 2021-01-19 23:18:45
 * @LastEditTime: 2021-01-19 23:26:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit()
 * @FilePath: \express+mongodb\app.js
 */
const express = require('express')

const app = express()

app.get('/login', (req, res) => {
  res.send('hellow')
})

app.listen(3000)