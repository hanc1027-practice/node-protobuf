var express = require('express');
var app = express();
var fs = require('fs')


app.get('/proto/get', function (req, res) {
    res.header("Access-Control-Allow-Headers", "application/x-protobuf,Content-Type");
    let protobuf = require('protocol-buffers');
    let messages=protobuf(fs.readFileSync('./proto/test.proto'))
    let buf = messages.Test.encode({
      num: 42,
      payload: '哈囉囉囉~~',
      payloads: ''
    })
    console.log(buf) // 打印出来的是二进制流
    res.send(JSON.stringify(buf)); //需要进行json化然后给前端。不然的话浏览器会自动解析成文字的
  })

app.listen(3000, function () {
  console.log('App listening on port 3000!\n請觀看\'localhost:3000/proto/get\'，即可到');
});

