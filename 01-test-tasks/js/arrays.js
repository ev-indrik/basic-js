// ARRAYS МАССИВЫ ДАННЫХ

let arr01 = ["birds", "mammals", "fishes"];
console.log(arr01[1]);

let arr02 = [
  {
    name: "Jonny",
    age: 32,
    hobby: "photography",
  },
  {
    name: "Cody",
    age: 34,
    hobby: "dance",
  },
  function () {
    console.log("Hello from Array function");
  },
];

console.log(arr02[0].hobby);
console.log(arr02[1].name);
arr02[2](); // call of the array function

// Многомерные массивы

let matrix = [
  ["swan", "dove", "eagle", "puffin"],
  ["horse", "elephant", "cow", "cat", ["whale", "dolphin", "narval"]],
  ["butterfly", "bee", "bumblebee"],
];
console.log(matrix);
console.log(matrix[0][3]);
console.log(matrix[1][4][2]);

/*Difference Between Object and Array in JavaScript:

1. Structure:
Array: An array is an ordered list of values. Elements in an array are indexed numerically, 
starting from zero.
Object: An object is an unordered collection of key-value pairs. Each key is a string, 
and values can be of any data type.

2. Indexing:
Array: Elements in an array are accessed using numerical indices.
Object: Elements in an object are accessed using keys (strings).
*/

// Array Length - one more feature that differs array from object

let arr03 = ["birds", "mammals", "fishes"];
console.log(arr03.length);
console.log(matrix[1].length);
console.log(matrix[0].length);

// Доступ к массиву

// Напомню что массив является объектом и, следовательно,
// ведёт себя как объект. Например, копируется по ссылке:

let arr04 = ["cat", "dog", "catdog"];
console.log(arr04);

let arrNew = arr04;

arrNew.length = 2;

console.log(arr04);

// Измнение значений массива

let arr05 = ["cat", "dog", "catdog"];
arr05[2] = "horsy";
console.log(arr05);

arr05[3] = "mouse";
console.log(arr05);
