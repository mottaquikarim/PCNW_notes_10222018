/*
    what is a callback function?

        - a function that can be passined in as a parameter
          to another function, which then runs it
*/

const addTwoNumbers = (a,b) => {
    const sum = a + b;
}

addTwoNumbers(1)
const myAge = 90;
const myOtherAge = 101;

addTwoNumbers(myAge, myOtherAge);

const exampleFunction = (callbackFn) => {
    //console.log(typeof callbackFn)
    //console.log(callbackFn)

    callbackFn(1);
}

exampleFunction(
    function(param, param2) {
        console.log('in callbackFn for exampleFunction invocation#2')
        console.log('b')
        console.log(param, param2);
    }
);


exampleFunction(
    function() {
        console.log('in callbackFn for exampleFunction invocation#1')
        console.log('a');
    }
);
const logC = function() {
    console.log('in callbackFn for exampleFunction invocation#3')
    console.log('c');
}

exampleFunction(logC);

