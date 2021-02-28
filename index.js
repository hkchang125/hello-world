var express = require("express"); //설치한 express module 을 불러와서  변수 express 에 담는다.
var app = express(); //express 를 실행하여 app object를 초기화 합니다.

app.get("/", function (req, res) {
  res.send("hello world!");
});

var port = 3000; //사용할 포트 번호를 port  변수에 넣습니다.

app.listen(port, function () {
  console.log(`server on! http://localhost:${port}`);
});
