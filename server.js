var app = require("express")();
var request = require("request");//请求模块
var querystring = require('querystring');//查询字符串
var redis = require('redis');
var crypto = require('crypto');
var bodyParser = require('body-parser');
var config = require('./config');

//连接redis
var opts = { auth_pass: config.redisPasswd };
var redisStore = redis.createClient(config.redisPort, config.redisHost, opts);
redisStore.on('connect', function () {
    console.log('redis connect successful');
});

 //使用JSON解析工具
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(bodyParser.json());

 //监听登录请求
 app.get('/onLogin',function (req,res){
    let code=req.query.code;
    console.log("onLogin: code:"+code);
 })

 var server=app.listen(8889,function (){
     var host=server.address().address;
     var port=server.address().port;
     console.log('address is http://%s:%s', host, port);
 })