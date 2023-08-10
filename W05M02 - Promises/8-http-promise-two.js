const requestPromise = require('request-promise');

requestPromise("https://www.google.com")
    .then((data) => {
        console.log(data);
        const settings = {
            url : "https://jsonplaceholder.typicode.com/posts",
            json : true
        };
        return requestPromise(settings);
    })
    .then((jsonData) => {
        console.log(jsonData);
    })
    .catch((error) => {
        console.log(error);
    });