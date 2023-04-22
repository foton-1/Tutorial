// -------------------------Cума значень аргументів масиву--
// function calSum() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// // ---Задаємо масив
// const array = [5, 10, 15];
// // ---Задаємо масив
// const sumArray = calSum(...array);
// console.log(`sumArray=`, sumArray);

// ---------------------------------rest--
// function fnRest(...rest) {
//   console.log(rest);
//   //   return rest;
// }
// const numbers = [1, 2];
// console.log(fnRest(...numbers));

// ---------------------------Колбек-функція-модуль 4 заняття 7
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }
// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }
// registerGuest("Манго", greet);
