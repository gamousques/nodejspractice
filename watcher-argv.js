const fs = require('fs');
const filename = process.argv[2];
if (!filename) {
    throw Error('A file to watch must be specified!');

}
console.log(filename);
fs.watch(filename,() => {
    return console.log(`File ​${filename}​ changed!` );
});
console.log(`Now watching ​${filename}​ for changes...`);
