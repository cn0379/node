const http = require('http')
import SpiderOptions from './interfaces/SpiderOptions'

export default class Spider {
  options: SpiderOptions

  constructor(options: SpiderOptions = { url: '', methods: 'get' }) {
    this.options = options;
    this.start()
  }
  start() {
    let req = http.request(this.options.url, {
      header: this.options.headers,
      method: this.options.methods
    }, (res: any) => {
      let chunks: any[] = []
      res.on('data', (c: any)=> chunks.push(c))
      res.on('end', () => {
        let result = Buffer.concat(chunks).toString('utf-8')
        console.log(result);
      })
    })
    req.end()
  }
}