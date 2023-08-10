const fs = require('fs');

fs.promises.readFile('./message2.txt', {encoding: 'UTF-8'})
    .then((dataReadingFile) => {
        return fs.promises.writeFile('./copy.txt', dataReadingFile, {encoding: 'UTF-8'});
    })
    .then((dataWritingFile) => {
        return fs.promises.readFile('./copy.txt', {encoding: 'UTF-8'});
    })
    .then((dataReadingFileCopy) => {
        console.log("The copied text is: ", dataReadingFileCopy);
    })
    .catch((error) => {
        console.log("Something went wrong", error);
    });
