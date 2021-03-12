const fs = require('fs');

// fs.readFile()
// fs.writeFile()
// fs.appendFile()
// fs.unlink()

const path = require('path');

// path.dirname()
// path.basename()
// path.extname()
// path.join([...])

const util = require('util');

// util.format("", [...])
// util.types.is<..>(value)
// util.promisify(fs.readFile())

const readFileAsync = util.promisify(fs.readFile);


const http = require ('http');
const { request } = require('node:http');
const { CLIENT_RENEG_WINDOW } = require('node:tls');

const app = http.createServer((req,res) => {
    if (request.url === '/' && request.method === 'GET') {
        res.write(`teste`);
        res.end();
    };
});

app.on("request", (request, response) => {
    if (request.url === '/' && request.method === 'GET') {
        res.write(`teste`);
        res.end();
    };
})


const myUrl = URL('https://example.org/abc?x=123');

console.log(`host: ${myUrl.host}`);
console.log(`pathname: ${myUrl.pathname}`);
console.log(`origin: ${myUrl.origin}`);
console.log(`searchParams: ${myUrl.searchParams}`);