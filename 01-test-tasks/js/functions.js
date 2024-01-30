// Функции в JAVASCRIPT. Стрелочные функции, рекурсия, планирование: setTimeout и setInterval

// Function declaration

function showMessage() {
  console.log("Оголошення функції");
}

function showMessage01() {
  let message = "Оголошення функції варіант №2";
  console.log(message);
}

showMessage();
showMessage01();

// Передача параметрів функції

function showTwoNumbers(numOne, numTwo) {
  console.log(`Ми передаємо params ${numOne} and ${numTwo}`);
  let numSum = numOne + numTwo;
  console.log(`Сума параметрів дорівнює ${numSum}`);
}

showTwoNumbers(6, 2);

/*Возврат результата через директиву Return. Важливо: в тілі функції 
після директиви return код не виконується */

function calcSumm(numOne, numTwo) {
  let numSum = numOne + numTwo;
  return numSum;
}

let funcResult = calcSumm(5, 2);
console.log(`Поверення результату через return ${funcResult}`);

// Планирования вызова функции: setTimeout и setInterval

function showMessage02(text, name) {
  console.log(`${text}, ${name}`);
}

setTimeout(showMessage02, 3000, "hello", "Timeout 3sec");

// countdown
function showNumdersCount(num01) {
  console.log(num01);
  if (num01 < 5) {
    setTimeout(showNumdersCount, 1000, ++num01);
  }
}

setTimeout(showNumdersCount, 1000, 1);
