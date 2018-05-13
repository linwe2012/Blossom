'use strict';

var responseHTML = `<h1>Hello World!</h1>
        <h3>Ich heißer Leon</h3>`;

var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

//process.argv[2] || 
//var root = path.resolve('.');
var root = "D:\\Cpractice\\JavaScript\\NodeJs"
var err404 = path.join(root, '404.html');
console.log(root);
var server = http.createServer(function (request, response){
    //call back
    console.log('HTTP Version: ' + request.httpVersion);
    console.log(request.method + ':' + request.url);

    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(root, pathname);

    fs.stat(filepath, function(err, stats){
        if(!err && stats.isFile()){
            console.log('200 ' + request.url);

            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }else{
            console.log('404' + request.url);
            response.writeHead('404');
            fs.createReadStream(err404).pipe(response);

            //response.end(err404)
        }
    })

    //response
    //response.writeHead(200, {'Content-Type' : 'text/html'});
    //response.end(responseHTML);
})

server.listen(6868);

console.log('Server is running at http://127.0.0.1:8080');