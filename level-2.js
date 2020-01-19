/*

Question 2
Create a function that logs the sentence "I am a function".

Assign this function to a variable called innerFunction.

Create another function called outerFunction that accepts one argument.

Inside outerFunction, call the argument like you would a function - with parenthesis ().

Call outerFunction and pass in the innerFunction variable.
*/

// QUESTION 1
for (var i = 15; i <= 25; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// QUESTION 2
function theFunction() {
  console.log("I am a function");
}

var innerFunction = theFunction;

function outerFunction(oneArg) {
  oneArg();
}
outerFunction(innerFunction);
