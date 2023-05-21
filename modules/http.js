const http = require("http")

const port = 80;

const server = http.createServer((request, response)=> {
    if(request.url == "/home"){
        response.writeHead(200, {"Content-Type": "text/html"})
        response.end("<h1>home page</h1>")
    }

    if(request.url == "/users"){
        const users = [
           {
            name: "John Doe",
            email: "John@doe.com",
           }, 
           {
            name: "jane Doe",
            email: "jane@doe.com",
           },
        ];
        response.writeHead(200, {"Content-Type": "application/json"});
        response.end(JSON.stringify(users, null, "\t"));
    }
})

server.listen(port, () => console.log(`Rodando na porta ${port}!`));
