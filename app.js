/*
 * @Author: your name
 * @Date: 2021-01-19 23:18:45
 */

// var UserModel = require('./modules/user')

// UserModel.find({}, (err, res) => {
//   if (err) {
//     console.log(err);
//     return
//   }
//   console.log(res);
// })

const http = require('http')
const cheerio = require('cheerio')
let HOST = 'http://web.itheima.com/'

let req = http.request( HOST + 'teacher.html', res => {
  let chunks = []

  res.on('data', chunk => {
    chunks.push(chunk)
  })

  res.on('end', () => {
    let htmlstr = Buffer.concat(chunks).toString('utf-8')
    let $ = cheerio.load(htmlstr)
    // $('.tea_main .tea_box4 .main_pic > img').each( (idx , item) => {
    //   console.log(HOST + $(item).attr('src'));
    // } )
    let imgs = Array.prototype.map.call($('.tea_main .tea_box4 .main_pic > img'),item => HOST + $(item).attr('src'))
    console.log(imgs);
  })
})

req.end()