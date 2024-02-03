// OBJECTS

let userInfo = {
  name: "Chris",
  age: 32,
};

console.log(userInfo);
console.log(userInfo.name);

// Передати ім'я/ключ

let wishes = "love";
let personalityInfo = {
  name: "Jack",
  age: 32,
  [wishes]: true,
};

console.log(personalityInfo[wishes]);

// Вкладенність об'єктів

let personInfo = {
  name: "Codi",
  age: 31,
  adress: {
    city: "Oslo",
    country: "Sweden",
  },
};

console.log(personInfo.adress.country);

// Додавання властивостей до об'єктку

let initialStack = {
  name: "Tasks",
};

initialStack.quantity = 20;
console.log(initialStack);

initialStack.address = {
  city: "London",
  country: "England",
};

console.log(initialStack.address);
console.log(initialStack);

// Видалення властивості з об'єкту

delete initialStack.address.city;

console.log(initialStack);

// Дублирование объектов (Object.assign)
//Object.assign(куда(объект), что(свойство #1), что(свойство #2), ...);

let userInfoDubl = {
  name: "Jack",
  age: 30,
};

let user = Object.assign({}, userInfoDubl);

user.age = 18;

console.log(userInfoDubl);
console.log(user);
