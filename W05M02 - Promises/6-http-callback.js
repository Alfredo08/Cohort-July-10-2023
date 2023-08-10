const request = require('request');

request.get("https://jsonplaceholder.typicode.com/posts", {json: true}, (error, response, body) => {
    if (error){
        throw Error("Something went wrong while reading from the given URL!!!");
    }
    else{
        //console.log(response);
        //console.log(body);
        body.forEach((element) => {
            console.log(element.id, element.title);
        });
    }
});
