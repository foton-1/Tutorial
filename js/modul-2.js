// --Modul-2-JS-Масиви. Функції--

// --1/32--
// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }
//   return "You are a minor";
// }

// --2/32--
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
// }

// --3/32--
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
// }

// --4/32--
// const fruits = ["apple", "plum", "pear", "orange"];

// --5/32--
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// --6/32--
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";

// --7/32--
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;

// --8/32--
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// --9/32--
// function getExtremeElements(array) {
//   return (array = [array[0], array[array.length - 1]]);
// }

// --10/36--
// function splitMessage(message, delimiter) {
//   let words = message.split(delimiter);
//   return words;
// }
// --Виклик splitMessage("Mango hurries to the train", " ") повертає ["Mango", "hurries", "to", "the", "train"]

// --11/36--
// function calculateEngravingPrice(message, pricePerWord) {
//   let quanWord = message.split(" ").length;
//   return quanWord * pricePerWord;
// }
// --Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50

// --12/36--
// function makeStringFromArray(array, delimiter) {
//   let string = array.join(delimiter);
//   return string;
// }

// --13/36--
