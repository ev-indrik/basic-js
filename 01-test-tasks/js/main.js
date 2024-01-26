// test questions

console.log(typeof 4);
console.log(typeof typeof 4);

function letTry(a) {
  console.log(a);
}

// if, else in JS
if (2 > 1) {
  console.log("hello");
}

let number = 5;
let message = "Hello there!";

if (number > 1) {
  console.log(message);
} else {
  console.log("The condition is not met");
}

// several if and else conditions

let number02 = 10;
let message02 = "The condition is not met";

if (number02 > 10) {
  console.log("10 is bigger than 10");
} else if (number02 === 10) {
  console.log("ten is equal ten", "декілька умов if else");
} else {
  console.log("The condition is not met");
}

//Умовний оператор ?

let messageStart = "Hello";
let messageEnd;
if (5 > 1) {
  messageEnd = ", Friend";
} else {
  messageEnd = ", to everyone!";
}
messageStart += messageEnd;
console.log(messageStart, "умовний оператор ?");

// Умовний оператор ? - скороченний запис умов зверху: ? замість if, : замість else

let messageA = "What";
let messageB = 5 > 1 ? " Friends?" : " Everyone?";
messageA += messageB;
console.log(messageA, "умовний оператор ?");
