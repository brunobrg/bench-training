const fs = require('fs');
const path = require('path');

fs.readFile(path.join('file.txt'), 'utf-8', (err, content) => {
    if (err) {
        return console.log(err);
    }

    console.log(content);
});

console.log("reading file");
