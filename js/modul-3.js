// ----------------Modul-3-Об'єкти--

// --1/41--
// --Присвой змінній apartment об'єкт, який описує квартиру
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// --2/41--
// --Значенням властивості може бути інший об'єкт.
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// --3/41--
// -- присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// --4/41--
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// --Значення змінної lastTag - це "top"

// --5/41--
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

// --6/41--Доповни код, оновивши значення властивостей об'єкта apartment
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// --7/41--Додай об'єкту apartment кілька нових властивостей
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// };

// --8/41--
// --Доповни код оголошення об'єкта таким чином, щоб у нього були властивості name, price, image і tags зі значеннями зі змінних
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];
// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

// --9/41--
// --Доповни код оголошення об'єкта credentials таким чином, щоб в результаті у нього були дві властивості: email і password, імена яких зберігаються у змінних
// const emailInputName = "email";
// const passwordInputName = "password";
// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };

// --10/41--
// --Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// --11/41--
// --перевірку на власну властивість методом hasOwnProperty(obj)
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;
// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }
// --Значення змінної keys - це масив ["descr", "rating", "price"].

// --12/41--
// --рахує і повертає кількість власних властивостей об'єкта в параметрі object
// function countProps(object) {
//   let propCount = 0;
//   for (const key in object)
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   return propCount;
// }
// --Виклик countProps({ name: "Mango", age: 2 }) повертає 2

// --13/41
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of Object.keys(apartment)) {
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);
// --Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153]

// --14/41--
// function countProps(object) {
//   let propCount = 0;
//   for (const key of Object.keys(object)) {
//     propCount += 1;
//   }
//   return propCount;
// }
// --Виклик countProps({ name: "Mango", age: 2 }) повертає 2

// --15/41--
// --Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, а у змінну values - масив всіх значень його властивостей. Використовуй методи Object.keys() і Object.values().
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// --16/41--
// --Функція повинна розрахувати загальну суму зарплат співробітників і повернути її
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   for (const key of Object.keys(salaries)) {
//     totalSalary += salaries[key];
//   }

//   return totalSalary;
// }
// --Виклик countTotalSalary({ mango: 100, poly: 150, alfred: 80 })

// --17/41--
// --Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// --Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]

// --18/41--
// --ЗАДАЧА. ПОШУК ОБ'ЄКТА ЗА ЗНАЧЕННЯМ ВЛАСТИВОСТІ
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }
// --Виклик getProductPrice("Droid") повертає 400.
// --Виклик getProductPrice("Engine") повертає null.

// --19/41--
// --ЗАДАЧА: КОЛЕКЦІЯ ЗНАЧЕНЬ ВЛАСТИВОСТІ
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// console.table(products);
// function getAllPropValues(propName) {
//   let filter = [];
//   for (const key of products) {
// console.log(Object.keys(key), Object.values(key));
// if (Object.keys(key).includes(propName)) {
//   filter.push(key[propName]);
// }
// --ще один варіант перевірки:
// if (key[propName]) {
// console.log(key[propName]);
//   filter.push(key[propName]);
// }
//   }
//   console.log(filter);
//   return filter;
// }
// getAllPropValues("price");

// --Виклик getAllPropValues("price") повертає [1300, 2700, 400, 1200]
// --Виклик getAllPropValues("category") повертає []

// --20/41--
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let total = 0;
//   for (const product of products) {
//     console.log(product);
//     console.log(product.name);
//     if (product.name === productName) {
//       console.log(product.price * product.quantity);
//       total += product.price * product.quantity;
//     }
//   }
//   return total;
// }
// calculateTotalPrice("Radar");
// --Виклик calculateTotalPrice("Radar") повертає 5200

// --21/41--
// --Деструктуризація властивостей об'єкта
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // --Деструктуризуємо
// const { yesterday, today, tomorrow } = highTemperatures;
// // --Застосовуємо
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// --22/41--
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(icon);

// --23/41--
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// } ;
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// --24/41--
// --Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація об'єкта.
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// --або ж: for (const color of colors) {const { hex, rgb } = color; hexColors.push(hex);}

// --25/41--
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// --26/41--
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log();
// calculateMeanTemperature({
//   today: { low: 28, high: 32 },
//   tomorrow: { low: 25, high: 29 },
// });
// --Виклик calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) повертає 28.5

// --27/41--
// --щоб у змінній bestScore був найвищий бал, а у worstScore - найнижчий.
// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// --28/41--
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(`allScores`, allScores);
// console.log(`bestScore`, bestScore);
// console.log(`worstScore`, worstScore);

// --29/41---(...spread)
// ---щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// --30/41--
// --ЗАДАЧА. КАРТКИ ЗАВДАНЬ. Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data.
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const propertiesDefault = {
//     completed,
//     category,
//     priority,
//   };
//   const dataNew = { ...propertiesDefault, ...data };
//   return dataNew;
//   // Change code above this line
// }
// console.log(makeTask({}));
// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// );
/* --Виклик makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) 
/повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false } --*/

// --31/41---------Операція ... (rest) --
// function add(...args) {
//   let sum = 0;
//   for (const num of args) {
//     sum += num;
//   }
//   return sum;
// }
// console.log(add(1, 2));

// --32/41--
// --щоб вона рахувала суму тільки тих аргументів, які більші за задане число. Це число повинно бути першим параметром функції.
// function addOverNum(num, ...args) {
//   let total = 0;
//   for (const arg of args) {
//     console.log(arg);
//     if (arg > num) {
//       total += arg;
//     }
//   }

//   return total;
// }
// addOverNum(50, 15, 27);
// // --Виклик addOverNum(50, 15, 27) повертає 0

// --33/41----------------ЗАДАЧА. МАСИВ ЗБІГІВ
// --щоб вона повертала новий масив matches, в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.
// function findMatches(array, ...rest) {
//   const matches = []; // Don't change this line
//   for (const num of rest) {
//     console.log(num, array, array.includes(num));
//     if (array.includes(num)) {
//       matches.push(num);
//     }
//   }
//   // Change code above this line
//   return matches;
// }
// findMatches([63, 11, 8, 29], 4, 7, 16);
// --Виклик findMatches([63, 11, 8, 29], 4, 7, 16) повертає []

// --34/41--
// --Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією з getBooks() і addBook(bookName).
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };
// --Виклик методу bookShelf.removeBook("Red sunset") повертає рядок "Deleting book Red sunset"

// --35/41--
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const index = this.books.indexOf(oldName);
//     this.books.splice(index, 1, newName);
//   },
// };
// bookShelf.updateBook("The last kingdom", "Dune");
// console.log(bookShelf.books);
// --Після виклику методу bookShelf.updateBook("The last kingdom", "Dune"), значення властивості books - це масив ["Dune", "Haze", "The guardian of dreams"]

// --36/41--
// --ЗАДАЧА. КРАМНИЦЯ ЗІЛЛЯ «У СТАРОЇ ЖАБИ»
// --Додай об'єкту atTheOldToad властивість potions, значенням якої зроби порожній масив.
// const atTheOldToad = {
//   potions: [],
// };

// --37/41--
// --ЗАДАЧА. ОТРИМУЄМО ВСЕ ЗІЛЛЯ
// --Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };
// console.log(atTheOldToad.potions);

// --38/41--
// --ЗАДАЧА: ДОДАЄМО НОВЕ ЗІЛЛЯ
// --Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля potionName в кінець масиву зілля у властивості potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);

//     // Change code above this line
//   },
// };
// --Після першого виклику методу atTheOldToad.addPotion("Invisibility"), у властивості potions буде масив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]

// --39/41--
// --ЗАДАЧА: ВИДАЛЯЄМО ЗІЛЛЯ
// --Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у властивості potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     const index = this.potions.indexOf(potionName);
//     this.potions.splice(index, 1);
//   },
// };
// --Після першого виклику методу atTheOldToad.removePotion("Dragon breath"), у властивості potions буде масив ["Speed potion", Stone skin"]

// --40/41--
// --ЗАДАЧА: ОНОВЛЮЄМО ЗІЛЛЯ
// --Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     const index = this.potions.indexOf(oldName);
//     this.potions.splice(index, 1, newName);
//   },
// };
// --Після першого виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), у властивості potions буде масив ["Speed potion", "Polymorth", "Stone skin"]

// --41/41--
// --ЗАДАЧА: РОЗШИРЮЄМО ІНВЕНТАР
// --Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     //*вих.код: if (this.potions.includes(newPotion)) {
//     //*   return `Error! Potion ${newPotion} is already in your inventory!`;}
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     //*вих.код: const potionIndex = this.potions.indexOf(potionName);
//     //* if (potionIndex === -1) {
//     //*   return `Potion ${potionName} is not in inventory!`;
//     //* }
//     //* this.potions.splice(potionIndex, 1);
//     for (const potionRemove of this.potions) {
//       if (potionRemove.name === potionName) {
//         this.potions.splice(this.potions.indexOf(potionRemove), 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     //*вих.код: const potionIndex = this.potions.indexOf(oldName);
//     //* if (potionIndex === -1) {
//     //*   return `Potion ${oldName} is not in inventory!`;
//     //* }
//     //* this.potions.splice(potionIndex, 1, newName);
//     for (const potionUp of this.potions) {
//       if (potionUp.name === oldName) {
//         potionUp.name = newName;
//       }
//     }
//   },
// };

// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.potions[0]);
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.potions);
/*
--Виклик методу atTheOldToad.getPotions() для вихідного об'єкта
 повертає [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
--Для вихідного об'єкта після виклику методу 
atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), 
в масиві potions останнім елементом буде цей об'єкт
--Для вихідного об'єкта після виклику 
atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), 
масив potions не змінюється
--Для вихідного об'єкта виклик 
atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), 
повертає рядок "Error! Potion Stone skin is already in your inventory!"
--Для вихідного об'єкта після виклику методу 
`atTheOldToad.removePotion('Dragon breath')`, 
у властивості `potions` буде масив `[ { name: 'Speed potion', price: 460 }, { name: 'Stone skin', price: 520 } ]`
--Для вихідного об'єкта після виклику методу 
`atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')`, 
у властивості `potions` буде масив `[{ name: 'Speed potion', price: 460 }, { name: 'Polymorth', price: 780 }, { name: 'Stone skin', price: 520 } ]`
*/
