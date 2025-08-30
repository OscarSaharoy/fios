import http from "http";


async function getContent(req, res, parsedURL) {
    
}


const server = http.createServer((req, res) => {

    const baseURL = 'http://' + req.headers.host + '/';
    const parsedURL = new URL(req.url, baseURL);
    const params = Object.fromEntries(parsedURL.searchParams);

    const routes = {
        "/get-content": getContent,
    };

    const callback = routes[parsedURL.pathname];

    if( callback ) return callback( req, res, parsedURL );
    else {
        res.statusCode = 404;
        res.writeHead(404, { 'Content-Type': "application/html" });
        res.end("404 not found");
    }
});

server.listen(8014, () => {
    console.log("Server running at http://localhost:8014/");
});

