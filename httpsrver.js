var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(serverAkshay).listen(7000);
console.log("Server running on port 7000");

function serverAkshay(req, res) {
    console.log("The URL is here: " + req.url);
    var q=url.parse(req.url,true)
console.log(q.query);
    
    if (q.pathname === "/favicon.ico") {
        res.writeHead(204);
        res.end();
        return;
    }

 
    if (q.pathname === "/") {
        fs.readFile("design.html", function (err, data) {
            if (err) {
                res.writeHead(500);
                res.end("E`rror loading page");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }

    else if (q.pathname=== "/signup") {
        fs.readFile("signup.html", function (err, data) {
            if (err) {
                res.writeHead(500);
                res.end("Error loading signup page");
                return;
            }  
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data)
          
            res.end(data);
        });
    }

    else if (q.pathname === "/signup_submit") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h2>Signup Successful</h2>");
    }

    // 404 Page
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h2>Page Not Found</h2>");
    }
}
