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

// Цикли FOR та WHILE у JavaScript. Директиви break та continue

// Цикл While

let num = 5;

while (num < 10) {
  console.log(num);
  num++;
}

console.log(num);

// Спрощення запису циклу, якщо тіло цикла складається з однієї строки:

let numSimple = 5;
while (numSimple) {
  console.log(numSimple);
  numSimple--;
}

// спрощується до:
while (numSimple) console.log(numSimple--);

/* Цикл FOR
for (початок; умова; крок) {
  //тіло циклу
  //тут виконується крок
}
*/
let numFor;
for (numFor = 0; numFor < 5; numFor++) {
  console.log(numFor);
}
console.log(`Вивід поза циклом ${numFor}`);

// директива break

let numFor01 = 0;

for (; numFor01 < 5; numFor01++) {
  console.log(numFor01);
  if (numFor01 == 2) break;
}

console.log(
  `Робота циклу закінчена достроково, адже break спрацював на значенні ${numFor01}`
);

// директива contunue

let numFor02 = 0;
for (; numFor02 < 5; numFor02++) {
  if (numFor02 == 2) continue;
  console.log(numFor02);
}
