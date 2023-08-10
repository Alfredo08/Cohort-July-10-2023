const fs = require('fs');

fs.readFile('./message.txt', {encoding: 'UTF-8'}, (errorReadingFile, dataReadingFile) => {
    if(errorReadingFile){
        throw Error("Something went wrong while reading the message.txt file!!!");
    }
    else{
        fs.writeFile('./copy.txt', dataReadingFile, {encoding: 'UTF-8'}, (errorWritingFile, dataWritingFile) => {
            if(errorWritingFile){
                throw Error("Something went wrong while writing into the copy.txt file!!!");
            }
            else{
                fs.readFile('./copy.txt', {encoding: 'UTF-8'}, (errorReadingFileCopy, dataReadingFileCopy) => {
                    if(errorReadingFileCopy){
                        throw Error("Something went wrong while reading the copy.txt file!!!");
                    }
                    else{
                        console.log("The copied text is:", dataReadingFileCopy);
                    }
                });
            }
        });
    }
});