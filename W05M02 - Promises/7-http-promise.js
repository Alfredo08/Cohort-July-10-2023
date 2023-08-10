const requestPromise = require('request-promise');

const settings = {
    url : "https://jsonplaceholder.typicode.com/posts",
    json : true
};

requestPromise(settings)
    .then((body) => {
        console.log(body);
    })
    .catch((error) => {
        console.log(error);
    });