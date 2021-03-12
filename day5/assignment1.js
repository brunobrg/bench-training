const http = require('http');

const myArray = [];

const app = http.createServer((request, response) => {
    if (request.url.startsWith('/')) {
        if (request.method === 'POST') {
            let body = [];
            request.on("data", (chunk) => {
                body.push(chunk);
            }).on("end", () => {
                body = Buffer.concat(body).toString();
        
                try {
                    const json = JSON.parse(body);
                    if ('name' in json) {
                        myArray.push(json.name);
                        response.end(JSON.stringify({
                            status: 'Sucess',
                            message: 'Name added'
                        }));
                    } else {
                        throw new Error('Invalid Json');
                    }
                } catch (e) {
                    console.log(e);
                    response.end(JSON.stringify({
                        status: 'Failed',
                        message: 'Something went wrong'
                    }))
                }
                
            });
        } else if (request.method === 'GET') {
            const url = new URL(request.headers.host + request.url);
            const queryName = url.searchParams.get('name');
            if (queryName) {
                response.end(JSON.stringify(myArray.filter((value) => value === queryName)))
            } else {
              response.end(JSON.stringify(myArray));
            }
        }
     }; 
});

app.listen(3000, () => {
    console.log("Server running at port 3000");
})