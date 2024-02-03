//NUMBERS in JavaScript

// Округлення чисел

// В JavaScript встроен объект Math, который содержит
// несколько функций для работы с округлением:

// Math.floor - Округление в меньшую сторону

let numOne = Math.floor(5.8);
let numTwo = Math.floor(2.2);
let numThree = Math.floor(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);

// Math.ceil - Округление в большую сторону

let numOneB = Math.ceil(5.8);
let numTwoB = Math.ceil(2.2);
let numThreeB = Math.ceil(-2.2);

console.log(numOneB);
console.log(numTwoB);
console.log(numThreeB);

// Math.round - Округление до ближайшего целого

let numOneR = Math.round(5.8);
let numTwoR = Math.round(2.2);
let numThreeR = Math.round(-2.2);

console.log(numOneR);
console.log(numTwoR);
console.log(numThreeR);

// Как нам получить 5.8 или 5.85 ?

// Способ умножения и деления

let numOneX = Math.round(5.845 * 10) / 10; // 58.45 -> 58 -> 5.8
console.log(numOneX);

let numTwoX = Math.round(5.845 * 100) / 100; // 584.5 -> 585 -> 5.85
console.log(numTwoX);

let numThreeX = Math.round(5.8449 * 100) / 100; // 584.49 -> 584 -> 5.84
console.log(numThreeX);

// Метод toFixed(n) - округляет число до n знаков после запятой
// и возвращает строковое представление результата.

let numX = 5.845;
console.log(numX.toFixed(1));

// Преобразовать в число
console.log(+numOneX.toFixed(1));
console.log(Number(numOneX.toFixed(1)));

//Проверка: isFinite и isNaN

// Проверка isNaN

console.log(Number(25 + "Привет!"));
console.log(isNaN(25 + "Привет!"));

if (25 + "Привет!" !== NaN) {
  console.log("Я не NaN");
}

console.log(NaN === NaN);

// Проверка isFinite

// преобразует аргумент в число и возвращает true,
// если оно является обычным числом

console.log(isFinite("25")); // "25" -> 25 -> true
console.log(isFinite("Привет!")); // NaN -> false
console.log(isFinite(10 / 0)); // Infinity -> false
