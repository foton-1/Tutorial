// ----------------Modul-4-Колбек--
// -------------------1/48--
// --щоб у змінній result був результат виконання функції makePizza, а у змінній pointer було посилання на функцію makePizza
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// const result = makePizza();
// const pointer = makePizza;

// ---------------------2/48--
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }
// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));
// --Виклик `makeMessage('Royal Grand', makePizza)` повертає рядок 'Pizza Royal Grand is being prepared, please wait...'
// --Виклик `makeMessage('Ultracheese', deliverPizza)` повертає рядок 'Delivering Ultracheese pizza.'

// ---------------------3/48--
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }
// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log("Eating pizza ${pizzaName}");
// });

// -------------------4/48--
//https://www.loom.com/share/f03d2412aea44dda8c3d8e02063813e8
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     console.log(this.pizzas.some((pizza) => pizza === pizzaName));
//     if (this.pizzas.some((pizza) => pizza === pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return onError(
//       `There is no pizza with a name ${pizzaName} in the assortment.`
//     );
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }
// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

/* --Виклик pizzaPalace.order("Smoked", makePizza, onOrderError) 
повертає "Your order is accepted. Cooking pizza Smoked."--*/

// ---------------------5/48--
// --замість циклу for, метод forEach
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }
//   orderedItems.forEach((element) => {
//     console.log(element);
//     totalPrice += element;
//   });
//   console.log(totalPrice);
//   // Change code above this line
//   return totalPrice;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// --Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138

// ---------------------6/48--
// --замість циклу for, метод forEach
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }
//   numbers.forEach((element) => {
//     if (element > value) {
//       filteredNumbers.push(element);
//     }
//   });
//   // Change code above this line
//   return filteredNumbers;
// }

// ---------------------7/48--
// --замість циклу for, метод forEach
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }
//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
//   // Change code above this line
// }

// ---------------------8/48-----Стрілочна функція
// function calculateTotalPrice(quantity, pricePerItem) {
//   // Change code above this line
//   return quantity * pricePerItem;}
// // --рефакторинг
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// ---------------------9/48--
// --рефакторинг на стрілочну функцію
// function calculateTotalPrice(quantity, pricePerItem) {
//   // Change code above this line
//   return quantity * pricePerItem;
// }
// --рефакторинг
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// ---------------------10/48----неявне повернення
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });
//   return totalPrice;
// --рефакторинг:
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => (totalPrice += item));

//   return totalPrice;
// };

// ---------------------11/48----заміна на стрілочні функції
// --ЗАДАЧА. ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   // Change code above this line
//   return filteredNumbers;
// }
// --рефакторинг:
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// };

// ---------------------12/48----заміна на стрілочні функції
// --ЗАДАЧА.СПІЛЬНІ ЕЛЕМЕНТИ 2.0
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   // Change code above this line
//   return commonElements;
// }
// --рефакторинг:
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];
//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
// };

// ---------------------13/48----рефакторинг на чисту функцію
// function changeEven(numbers, value) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
// }
// --рефакторинг:
// function changeEven(numbers, value) {
//   const changeEvenNew = [];
//   for (let number of numbers) {
//     number % 2 === 0
//       ? changeEvenNew.push(number + value)
//       : changeEvenNew.push(number);
//   }
//   return changeEvenNew;
// }

// ---------------------14/48----метод map()
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets;
// --реформинг:
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map((element) => element.length);

// ---------------------15/48----метод map()
// --щоб у змінній titles вийшов масив назв книг (властивість title) з усіх об'єктів масиву books
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line
// // const titles = books;
// // рефакторинг:
// const titles = books.map((book) => book.title);
// console.log(titles);

// ---------------------16/48----flatMap()
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line
// // const genres = books;
// // --рефакторинг:
// const genres = books.flatMap((element) => element.genres);

// ---------------------17/48----map()
// --Доповни функцію щоб вона повертала масив імен з масиву об'єктів users
// const getUserNames = (users) => {
//   return users.map((element) => element.name);
// };

// ---------------------18/48----map()
// щоб функція повертала масив поштових адрес з масиву об'єктів
// const getUserEmails = (users) => {
//   return users.map((element) => element.email);
// };

// ---------------------19/48----filter(callback);
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line
// const evenNumbers = numbers.filter((even) => even % 2 === 0);
// console.log(evenNumbers);
// const oddNumbers = numbers.filter((odd) => odd % 2 !== 0);

// ---------------------20/48----filter()--пошук унікальних елементів
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (unic, index, array) => array.indexOf(unic) === index
// );
// --Значення змінної `uniqueGenres` - це масив `['adventure', 'history', 'fiction', 'mysticism', 'horror']`

// ---------------------21/48----filter()
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line
// const topRatedBooks = books.filter((bookRate) => bookRate.rating >= MIN_RATING);
// const booksByAuthor = books.filter((bookAutor) => bookAutor.author === AUTHOR);
// --Значення змінної topRatedBooks - це масив книг з рейтингом, вищим за 8

// ---------------------22/48----
//
