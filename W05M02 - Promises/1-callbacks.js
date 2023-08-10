setTimeout(
    () => {
        console.log("I took 3 seconds to come up in the console!");
    },
    3000
);

setTimeout(
    () => {
        console.log("About to printHell inside the timeout");
        printHello();
    },
    2000
);

const addTwoNums = (num1, num2, callback) => {
    console.log("About to printHello inside the AddTwoNums");
    callback();
    const total = num1 + num2;
    console.log(`The total is: ${total}`);
}

const printHello = () => {
    console.log("Hey there July 10 cohort!");
}

addTwoNums(10, 20, printHello);

