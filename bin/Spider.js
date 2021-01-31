"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require('http');
var Spider = /** @class */ (function () {
    function Spider(options) {
        if (options === void 0) { options = { url: '', methods: 'get' }; }
        this.options = options;
        this.start();
    }
    Spider.prototype.start = function () {
        var req = http.request(this.options.url, {
            header: this.options.headers,
            method: this.options.methods
        }, function (res) {
            var chunks = [];
            res.on('data', function (c) { return chunks.push(c); });
            res.on('end', function () {
                var result = Buffer.concat(chunks).toString('utf-8');
                console.log(result);
            });
        });
        req.end();
    };
    return Spider;
}());
exports.default = Spider;
