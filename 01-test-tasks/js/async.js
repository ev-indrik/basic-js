/* CALLBACKS - is a function passed into another function as an argument, 
which is then invoked inside the outer function to complete some 
kind of routine or action.*/

// function changeReality(callback) {
//   const name = prompt("What's your name?");
//   console.log(`${name} you're happy from this moment on! Now!`);
//   callback(name); // Викликаємо callback функцію та передаємо їй ім'я як аргумент
// }

// function callbackMagic(name) {
//   console.log(`${name}, this is the magic happening in the callback function!`);
// }

// changeReality(callbackMagic); // Передаємо функцію callbackMagic як callback

// PROMISES
/*Promises are the foundation of asynchronous programming in modern JavaScript. 
A promise is an object returned by an asynchronous function, which represents the 
current state of the operation. At the time the promise is returned to the caller, 
the operation often isn't finished, but the promise object provides methods 
to handle the eventual success or failure of the operation. */

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNum = Math.random();
    if (randomNum > 0.5) {
      resolve(randomNum);
    } else {
      reject(new Error("Number is too small"));
    }
  }, 1000);
});

promise.then(
  (result) => {
    console.log("Success:", result);
  },
  (error) => {
    console.error("Error:", error.message);
  }
);

// Обробка послідовних обіцянок

promise
  .then((result) => {
    // Обробка результату першої обіцянки
    return result * 2;
  })
  .then((result) => {
    // Обробка результату другої обіцянки
    console.log("Final result:", result);
  })
  .catch((error) => {
    // Обробка помилки
    console.error("Error:", error.message);
  });
