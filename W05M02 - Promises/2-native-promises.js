
const myFirstPromise = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber >= 0.5){
        return resolve("Your random number is: " + randomNumber);
    }
    else{
        return reject("Something went wrong, your number is lesser than 0.5: " + randomNumber);
    }
});

console.log("First");
myFirstPromise
    .then((data) => {
        console.log("Third");
        console.log(data);
    })
    .catch((error) => {
        console.log("Third");
        console.log(error);
    });
console.log("Second");