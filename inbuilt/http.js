let http = require('http');



let server = http.createServer((req,res) =>{
    res.write('Hii From Http Server');
    res.end()
})

server.listen(3422)