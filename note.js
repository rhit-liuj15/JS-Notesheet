











const message = 'Hello World!';
alert(message);

{
    // this is a block containing 2 statements
    const message = 'Hello!';
    alert(message);
}

typeof 'hello' // String
typeof 10 // Number
typeof true // Boolean
typeof { ninja: 'turtle' } // Object
typeof [ 1, 2, 3 ] // Object

const num = 3
num = 4 // This will throw an error as a constant will not change
const num2 = 6
num2 = 17
num2 // 17

const obj1 = { value: 12 } // If a constant object contains a value, it can be modified.
obj1.value = 25 // change the value
obj1.value // 25


// var declares global variables; let declares local variables which does not leave its block.
{
    var a = 15
    let b = 7 
}
alert(a) // This will print 15
alert(b) // This will fail



// Use \ to escape characters

// Use ` to create a format string that allows for the use of variables.

let num3 = 5
`10+${num3} is equal to ${10+num3}` // '10+5 is equal to 15'


uniqueID = Symbol('this is a unique ID');
uniqueID // Symbol('this is a unique ID')


let A = Symbol.for('shared symbol');
let B = Symbol.for('shared symbol');

// These two point to the same object




// Javascript has a shared type for all numbers. However, it is possible to identify if they are integers:
typeof 42; // Number
typeof 3.14159; // Number
Number.isInteger(42); // True
Number.isInteger(3.142); // False





// .toExponential(n) will print a number in scientific notation with as many non-zero digits as there is.
// .toFixed(n) will print a number in decimal notation to n decimal places. n must be positive.
// .toPrecision(n) will print a number in scientific notation with n total digits of precision.

Number("126.889") // Will give number 126.889 - essentially typecast

// ! NOT
// && AND
// || OR
// ~ Bitwise NOT

// = sets the value on the left to the right
// == compares data, will attempt to cast to same type
// === compares and additionally enforces type. Will NOT attempt to cast






















// A callback is essentially passing a function OBJECT (not the result from calling the function!) to another function. It should eventually be called inside the function(s) that accepted the callback

function f1() {
    return 13
}

function f2() {
    return 9
}

function sum(numfunc1, numfunc2) {
    console.log(numfunc1() + numfunc2())
    return numfunc1() + numfunc2()
}

sum(f1, f2) // Prints and returns 22



// Closure is a type of function, which is inside of another function, that has access to the variables in its scope



const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
})();

// The last pair of parentheses is needed here because we needed to call the inner function to initialize counter and get the increment function.
// Then, on subsequent calls, it will invoke {counter += 1; return counter}.
// Note how add(), or "function () {counter += 1; return counter}", has access to "counter" inside of its original scope, even though it is not a global variable.


// Ajax follows a basic fetch-do-error procedure

function printerror() {
    console.log("I found error!")
}
function printsuccess() {
    console.log("I have fetched from the website!")
}


// These two formats are the same. Then can accept two arguments, and if only given one, will default that to be the function to be called on success.
fetch("https://www.google.com/").then(printsuccess).catch(printerror)
fetch("https://www.google.com/").then(printsuccess, printerror)



// This will return the status of the request
fetch('https://api.github.com/users/xiaotian/repos')
.then(resp => console.log(resp.status))

// A different return code to indicate failure
fetch('https://api.github.com/aiweugwaegij')
.then(resp => console.log(resp.status))

// This will convert the return value to a json string, then the console will log that json file
fetch('https://api.github.com/users/xiaotian/repos')
.then(resp => resp.json())
.then(repos => console.log(repos))

// And this is an example of using that json file for further operations
fetch('https://api.github.com/users/xiaotian/repos')
.then(resp => resp.json())
.then(repos => { for (const repo of repos) { console.log(repo.name) }})
.catch(ex => { console.error(ex) })



// Add a reference for file responses here - I don't know of a file that just hosts a file which also knows how to fetch.
fetch('https://liuj15-mymoviequotes.web.app/images/rose_logo.png')
.then(resp => resp.blob())
.then(image => console.log(image))
















