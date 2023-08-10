const fs = require('fs');

fs.readFile('./message.txt', {encoding: 'UTF-8'}, (error, data) => {
    if(error){
        throw Error("Something went wrong while reading the message.txt file!!!");
    }
    else{
        console.log(data);
    }
});