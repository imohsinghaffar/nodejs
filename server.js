const http = require('http');
const port = 3000;

const server = http.createServer((req, res)=>{
    const url = req.url;
    if(url==='/')
    {
        res.writeHead(200, {'content_Type':'text/plain'});
        res.end('This is Home Page')
    }
    else{  
        res.writeHead(404, {'content_Type':'text/plain'});
        res.end('Page not found')
    }
    
})

//This is how we assign port on which we want to run server
server.listen(port, ()=>
{
    console.log("server is listening to port", port);
    
})