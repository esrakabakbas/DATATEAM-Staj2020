var http=require('http');
var express = require('express');
var app= express();
var fs = require('fs');


http.createServer(function(req, res){
    fs.readFile("index.html", function(err, data){
        res.writeHead(200, {"Content-Type": "text/html"});
        console.log(data)
        res.write(data);
        return res.end();
    });
}).listen(3000);