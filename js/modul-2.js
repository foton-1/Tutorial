// --Modul-2-JS-Масиви. Функції--Автоперевірка--

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
// function slugify(title) {
//   return (slug = title.toLowerCase().replaceAll(" ", "-"));
// }
/*--Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks"--*/
// function slugify(title) {
//   const slug = title.toLowerCase().split(" ").join("-");
//   return slug;
// }
// --14/36--
// const fruits = ["apple", "plum", "pear", "orange", "banana"];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);
// --Значення змінної nonExtremeEls - це масив ["plum", "pear", "orange"]--

// --15/32--
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);

// --16/32--
// function makeArray(firstArray, secondArray, maxLength) {
//   let a = firstArray.concat(secondArray);
//   return a.length < maxLength ? a : a.slice(0, maxLength);
// }
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]

// --17-32--
// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// --18/32--
// function calculateTotal(number) {
//   let s = 0;
//   for (let i = 1; i <= number; i += 1) {
//     s = s + i;
//   }
//   return s;
// }
// Виклик функції calculateTotal(24) повертає 300

// --19/32--
// const fruits = ["apple", "plum", "pear", "orange"];
// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// --20/32--
// function calculateTotalPrice(order) {
//   let total = 0;
//   console.log(order);
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//     console.log(order[i]);
//     console.log(total);
//   }
//   console.log(total);
//   return total;
// }
// --ще варіант через аргумент--
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const argument of order) {
//     total += argument;
//     console.log(total);
//   }
//   console.log(total);
//   return total;
// }
// calculateTotalPrice([164, 48, 291]);
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503

// --21/32--
// function findLongestWord(string) {
//   let lengthWord = 0;
//   let word;
//   const messege = string.split(" ");
//   // console.log(messege);
//   for (const arguments of messege) {
//     // console.log(arguments, arguments.length);
//     if (arguments.length > lengthWord) {
//       lengthWord = arguments.length;
//       word = arguments;
//     }
//   }
//   console.log(word, lengthWord);
//   return lengthWord;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");
// --Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped

// --22/32--
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   console.log(numbers);
//   return numbers;
// }
// createArrayOfNumbers(14, 17);
// Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]

// --23/32--
// function filterArray(numbers, value) {
//   const newNumbers = [];
//   for (const number of numbers) {
//     if (number > value) {
//       newNumbers.push(number);
//     }
//   }
//   console.log(newNumbers);
//   return newNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 4);
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]

// --24/32--
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit);
// }
// checkFruit("mandarin");
// --Виклик checkFruit("mandarin") повертає false

// --25/32--
// function getCommonElements(array1, array2) {
//   const array = [];
//   for (const array1Element of array1) {
//     console.log(array1Element);
//     if (array2.includes(array1Element)) {
//       array.push(array1Element);
//     }
//     console.log(array2.includes(array1Element));
//   }
//   console.log(array);
//   return array;
// }
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// --Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// --Можна і чере for (let i=0; i<array1.length[i]; i++) {if (array2.includes(array1[i])) array.push(array1[i])}

// --26/32--Функція calculateTotalPrice() використовує цикл for..of
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const element of order) {
//     total += element;
//   }
//   return total;
// }

// --27/32--
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }
// --Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]

// --29/32--
// function getEvenNumbers(start, end) {
//   const evenNumbers = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   console.log(evenNumbers);
//   return evenNumbers;
// }
// getEvenNumbers(2, 5);
//--Виклик функції getEvenNumbers(2, 5) повертає [2, 4]

// --30/32--
// const start = 6;
// const end = 27;
// let number;
// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// --31/32--
// function findNumber(start, end, divisor) {
//   let number;
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }
//   return number;
// }
// --Виклик findNumber(8, 17, 3) повертає 9

// --32/32
// function includes(array, value) {
//   for (const arrayElement of array) {
//     if (arrayElement === value) {
//       return true;
//     }
//   }
//   return false;
// }
// includes([1, 2, 3, 4, 5], 17);
// Виклик includes([1, 2, 3, 4, 5], 17) повертає false
