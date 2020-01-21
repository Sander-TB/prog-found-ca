// QUESTION 1
var greeting = "Hello!";
console.log(greeting);

// QUESTION 2
var Person = {
  isAlive: true,
  age: 47
};

// QUESTION 3
var outOfStock = true;

if (outOfStock) {
  console.log("Out of stock");
} else {
  console.log("In stock!");
}

// QUESTION 4
var count = [1, 2, 3, 4, 5];

for (var count = 1; count <= 5; count++) {
  console.log(count);
}

// QUESTION 5
for (var i = 15; i <= 25; i++) {
  console.log(i);
}

// QUESTION 6
for (var i = 15; i <= 25; i++) {
  console.log();
  if (i = 20) {
    console.log(20);
    break;
  } else {
    console.log(nothing);
  }
}

// QUESTION 7
var toDoList = [
  {
    id: 1,
    text: "Take out trash",
    isComplete: true
  },
  {
    id: 2,
    text: "Do the dishes",
    isComplete: false
  }
];

for (var i = 0; i < toDoList.length; i++) {
  console.log(toDoList[i].id);
  console.log(toDoList[i].isComplete);
}

// QUESTION 8
function whatIDontLike(animal) {
  console.log("I dont like is " + animal);
}

whatIDontLike("giraffes");

// QUESTION 9
function subtract(x, y) {
  return y - x;
}
console.log(subtract(5, 10));

// QUESTION 10

var emptyArray = [];

function someFunction(oneArg) {
  emptyArray.push(oneArg);
  console.log(emptyArray);
};

someFunction(true);
