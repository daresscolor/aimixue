const http=require("http");
var url=require("url");
var fs=require("fs");
var path=require("path");
var server=http.createServer();
server.listen(8008);
server.on("request",(req,res)=>{
    var obj=url.parse(req.url,true);
    if(obj.pathname=="/"||obj.pathname=="/index"||obj.pathname=="/about"||obj.pathname=="/news"||obj.pathname=="/news-1"||obj.pathname=="/product"||obj.pathname=="/team"){
        if(obj.pathname=="/"){obj.pathname="/index"}
        fs.readFile(path.join(__dirname,`./html${obj.pathname}.html`),(err,buf)=>{
            res.end(buf);
        })
    }else if(obj.pathname.indexOf(".css")!=-1||obj.pathname.indexOf(".js")!=-1){
        fs.readFile(path.join(__dirname,`./${obj.pathname}`),(err,buf)=>{
            res.end(buf);
        })
    }else if(obj.pathname.indexOf(".jpg")!=-1||obj.pathname.indexOf(".png")!=-1){
        fs.readFile(path.join(__dirname,`./${obj.pathname}`),(err,buf)=>{
            res.end(buf);
        })
    }
})