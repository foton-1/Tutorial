// ----------------Modul-4-Колбек--- Автоперевірка--
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

// ---------------------22/48----filter()
//
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter((user) => user.eyeColor === color);
// };

// ---------------------23/48----filter()
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter((user) => minAge <= user.age && user.age <= maxAge);
// };

// ---------------------24/48----filter()--some()
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((user) =>
//     user.friends.some((element) => element === friendName)
//   );
// };

// ---------------------25/48--------flatMap-filter-indexOf
// const getFriends = (users) => {
//   const allFriends = users.flatMap((friend) => friend.friends);
//   return allFriends.filter(
//     (frend, index, array) => array.indexOf(frend) === index
//   );
// };

// ---------------------26/48-------filter()
// const getActiveUsers = (users) => {
//   return users.filter((user) => user.isActive === true);
// };

// ---------------------27/48-------filter()
// const getInactiveUsers = (users) => {
//   return users.filter((user) => user.isActive === false);
// };

// ---------------------28/48-------find()
// const bookWithTitle = books.find((titl) => titl.title === BOOK_TITLE);
// const bookByAuthor = books.find((authorFind) => authorFind.author === AUTHOR);

// ---------------------29/48-------find
// const getUserWithEmail = (users, email) => {
//     return users.find((user) => user.email === email)
// };

// --------------------30/48-----every()
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line
// const eachElementInFirstIsEven = firstArray.every((even) => even % 2 ===0);
// const eachElementInFirstIsOdd = firstArray.every((odd) => odd % 2 !==0);
// const eachElementInSecondIsEven = secondArray.every((evenSec) => evenSec % 2 ===0);
// const eachElementInSecondIsOdd = secondArray.every((oddSec) => oddSec % 2 !==0);
// const eachElementInThirdIsEven = thirdArray.every((evenThir) => evenThir %2 ===0);
// const eachElementInThirdIsOdd = thirdArray.every((oddThir) => oddThir % 2 !==0);

// --------------------31/48-----every()
// --Робить перевірку і повертає  true або false.
// const isEveryUserActive = (users) => {return users.every((user) => user.isActive === true)
// };

// --------------------32/48-----some()
//--перевіряє, чи проходить хоча б один елемент масиву тест колбек-функції. Повертає true або false
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line
// const anyElementInFirstIsEven = firstArray.some((evenF) => evenF % 2 ===0);
// const anyElementInFirstIsOdd = firstArray.some((oddF) => oddF % 2 !==0);
// const anyElementInSecondIsEven = secondArray.some((evenS) => evenS %2 ===0);
// const anyElementInSecondIsOdd = secondArray.some((oddS) => oddS % 2!==0);
// const anyElementInThirdIsEven = thirdArray.some((evenT) => evenT %2 ===0);
// const anyElementInThirdIsOdd = thirdArray.some((oddT) => oddT %2 !==0);

// --------------------33/48-----some()
// const isAnyUserActive = users => {return users.some((user) => user.isActive === true)
// };

// --------------------34/48-----reduce()
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line
// const totalPlayTime = playtimes.reduce((totalValue, num) => {return totalValue + num;},0);
// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

 // --------------------35/48-----reduce()
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// const totalAveragePlaytimePerGame = players.reduce((total, time) => {
//     return total + (time.playtime / time.gamesPlayed);}, 0);

//  --------------------36/48-----reduce()
// const calculateTotalBalance = users => { 
//   return users.reduce((total, element) => {
//     return total + element.balance;}, 0);
   
// };

//  --------------------37/48-----reduce()+length
// const getTotalFriendCount = users => { 
//   return users.reduce((total, user) => {
//     return total + user.friends.length;}, 0);
   
// };

//  --------------------38/48-----sort()
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line
// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();

//  --------------------39/48-----sort(a,b)
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line
// const ascendingReleaseDates = [...releaseDates].sort();
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b-a);

//  --------------------40/48-----sort(a,b)-localeCompare
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line
// const authorsInAlphabetOrder = [...authors].sort();
// const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));

//  --------------------41/48-----sort(a,b)-localeCompare
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
// const sortedByAuthorName = [...books].sort((aAut, bAut) => aAut.author.localeCompare(bAut.author));
// const sortedByReversedAuthorName = [...books].sort((aAutRev, bAutRev) => bAutRev.author.localeCompare(aAutRev.author));
// const sortedByAscendingRating = [...books].sort((aRat, bRat) => aRat.rating - bRat.rating);
// const sortedByDescentingRating = [...books].sort((aRatDes, bRatDes) => bRatDes.rating - aRatDes.rating);

// --------------------42/48-----sort(a,b)-
// const sortByAscendingBalance = users => {return [...users].sort((a, b) => a.balance - b.balance)
   
// };

// --------------------43/48-----sort(a,b)+length
// const sortByDescendingFriendCount = users => {return [...users].sort((a,b) => b.friends.length - a.friends.length)
   
// };


// --------------------44/48----sort-localeCompare-
// const sortByName = users => {return [...users].sort((a, b) => a.name.localeCompare(b.name))
// };

// --------------------45/48-----Ланцюжки методів-
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
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line
// const names = [...books].filter(rat => rat.rating > MIN_BOOK_RATING)
//   .map(authorName => authorName.author)
//   .sort();

// --------------------46/48-----Ланцюжки методів-
// const getNamesSortedByFriendCount = users => {return [...users].sort((a, b) => a.friends.length - b.friends.length)                                              .map(user => user.name);
// };

// --------------------47/48-----Ланцюжки методів-
// --повертала масив унікальних імен друзів (властивість friends), відсортований за алфавітом
// const getSortedFriends = users => { return users
//       .flatMap(user => user.friends)
//       .filter((frend, index, array) => array.indexOf(frend) === index)
//       .sort()
   
// };


// --------------------48/48-----Ланцюжки методів-
// --повертала загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender
// const getTotalBalanceByGender = (users, gender) => { return users
//       .filter(gend => gend.gender === gender)
//       .reduce((total, bal) => {return total + bal.balance;}, 0)

// };