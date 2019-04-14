'use strict';

const fs = require('fs');

fs.createReadStream(process.argv[2]).on('data', function (chunk) {
    console.log('entre a chunk');
    fs.writeFile(process.argv[3], chunk, (err) => {
        if (err) {
            throw err;
        }
    })
});