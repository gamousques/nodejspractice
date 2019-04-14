'use strict';
const fs = require('fs');
fs.appendFile('target.txt', "\nhello world", (err)=> {
    if (err) {
        throw err;
    }
    console.log('File Saved');
} );