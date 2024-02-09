//JavaScript Events

const button = document.querySelector(".button");

button.addEventListener("click", function () {
  alert("Boom!");
});

// Объект события
/*
Чтобы хорошо обработать событие, могут понадобиться детали того,
что произошло.Не просто «клик» или «нажатие клавиши»,
а также – какие координаты указателя мыши, какая клавиша
нажата и так далее.
Когда происходит событие, браузер создаёт объект события,
записывает в него детали и передаёт его в качестве
аргумента функции - обработчику.
*/

const button01 = document.querySelector(".button");

function showConsole(event) {
  // Тип события
  console.log(event.type);
  // Объект на котором сработал обработчик
  //console.log(event.target);
  // Объект к которому назначен обработчик
  //console.log(event.currentTarget);
  // Положение курсора по оси X
  //console.log(event.clientX);
  // Положение курсора по оси Y
  //console.log(event.clientY);

  // Все детали события
  //   console.log(event);
}

button01.addEventListener("click", showConsole);
//button.addEventListener("mouseenter", showConsole);
