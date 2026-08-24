const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);

    res.end("Request received");
});

server.listen(3000, () => {
    console.log("Server started");
});

