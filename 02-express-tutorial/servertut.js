const http = require('http')
const{readFileSync} = require('fs') 
const homePage = readFileSync('./navbar-app/index.html')

const server = http.createServer((req, res)=>
{
    const url = req.url 
    console.log(req)
    if(url=='/'){
        
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    //about
    else if(url =='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About page</h1>')
        res.end()  
    }
    //#404 is set up 
    else{

        res.writeHead(400,{'content-type':'text/html'})
        console.log(req.method)
        res.write('<h1>ERROR 404</h1>')
        res.end()  
    }
   
})

server.listen(5800)