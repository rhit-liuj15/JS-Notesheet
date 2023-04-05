

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


//Ajax follows a basic fetch-do-error procedure.

function printerror() {
    console.log("I found error!")
}
function printsuccess() {
    console.log("I have fetched from the website!")
}

fetch("https://www.google.com/").then(printsuccess()).catch(printerror())