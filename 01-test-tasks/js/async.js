/* Callbacks - is a function passed into another function as an argument, 
which is then invoked inside the outer function to complete some 
kind of routine or action.*/

function changeReality(callback) {
  const name = prompt("What's your name?");
  console.log(`${name} you're happy from this moment on! Now!`);
  callback(name); // Викликаємо callback функцію та передаємо їй ім'я як аргумент
}

function callbackMagic(name) {
  console.log(`${name}, this is the magic happening in the callback function!`);
}

changeReality(callbackMagic); // Передаємо функцію callbackMagic як callback
