const http  = require("http");
const fs  = require("fs");
const URL  = require("url");

const hostName = 'localhost';
const port = 3000;

// 创建node服务
const app =  http.createServer((request,response) =>{
    try {
        console.log(URL.parse(request.url))
        if(request.url === '/' ||  request.url ==='/favicon.ico') {
            response.statusCode = 200;
            response.setHeader('Content-Type','text/plain');
            response.end('Welcome to node world');
        }else if (request.url === '/300' ) {
            response.statusCode = 300;
            response.setHeader('Content-Type','application/json;charset=UTF-8');
            let errMag300 = {
                code:300,
                msg:'服务器300！',
                data:{}
            }
            let backData = JSON.stringify(errMag300)
            response.end(backData);

        } else if (request.url === '/404' ) {
            response.statusCode = 404;
            response.setHeader('Content-Type','application/json;charset=UTF-8');
            let errMag404 = {
                code:404,
                msg:'服务器404！',
                data:{}
            }
            let backData = JSON.stringify(errMag404)
            response.end(backData);

        }else{
            response.statusCode = 500;
            response.setHeader('Content-Type','application/json;charset=UTF-8');
            let errMag = {
                code:500,
                msg:'服务器错误！',
                data:{}
            }
            let backData = JSON.stringify(errMag)
            response.end(backData);
        }
    
    } catch (error) {
        console.log(error)
        response.statusCode = 500;
        response.setHeader('Content-Type','application/json;charset=UTF-8');
        let errMag = {
            code:500,
            msg:'服务器错误！',
            data:{}
        }
        let backData = JSON.stringify(errMag)
        response.end(backData);
    }
});

// 监听3000湍口
app.listen(port,hostName,() =>{
    console.log(`Server running at http://${hostName}:${port}/`);
})