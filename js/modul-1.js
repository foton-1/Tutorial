// --Модуль-1--
// --1/36--
// const productName = "Droid";
// const pricePerItem = 2000;

// --3/36--
// --Оголоси наступні змінні, використовуючи ключове слово const або let, і присвой їм відповідні значення.
// const topSpeed = 160;
// let distance = 617.54;
// const login = "mango935";
// let isOnline = true;
// const isAdmin = false;

// --5/36--
// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// --7/36--
// --Оголоси функцію sayHi, всередині якої додай console.log() з рядком "Hello, this is my first function!". Після оголошення виклич функцію sayHi.
// function sayHi() {
//   console.log("Hello, this is my first function!");
// }
// sayHi();

// --8/36
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }

// --9/36--
// function add(a, b, c) {
//   return a + b + c;
// }

// --10/36--
// function makeMessage (name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;
// };

// --11/36--
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity*pricePerItem;
//   return totalPrice;
// };

// --12/36--
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const message = `You ordered droids worth ${
//     orderedQuantity * pricePerDroid + deliveryFee
//   } credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   return message;
// }

// --13/36--
// function isAdult(age) {
//   const passed = age >= 18;
//   return passed;
// }

// --14/36--
// function isValidPassword(password) {
//   const SAVED_PASSWORD = "jqueryismyjam";
//   const isMatch = password === SAVED_PASSWORD;
//   return isMatch;
// }

// --15/36--
// function checkAge(age) {
//   let message;
//   if (age >= 18) {
//     message = "You are an adult";
//   } else {
//     message = "You are a minor";
//   }
//   return message;
// }

// --16/36--
// function checkStorage(available, ordered) {
//   let message;
//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }
//   return message;
// }

// --17/36--
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// --19/36--
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   if (password === null) {
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }
//   return message;
// }

// --21/36--
// --Присвой змінній isInRange вираз перевірки входження number у числовий проміжок від start до end.
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   return isInRange;
// }

// --22/36--
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip";
//   return canAccessContent;
// }
// --Виклик checkIfCanAccessContent("starter") повертає false--

// --23/36--
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !(number > start && number < end); // Change this line
//   return isNotInRange;
// }
// --Виклик isNumberNotInRange(10, 30, 17) повертає false--

// --24/36--
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else {
//     discount = GOLD_DISCOUNT;
//   }
//   return discount;
// }

// --25/36--
// function checkStorage(available, ordered) {
//   let message;
//   message =
//     ordered > available
//       ? "Not enough goods in stock!"
//       : "The order is accepted, our manager will contact you";
//   return message;
// }

// --26/36--
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   message =
//     password === ADMIN_PASSWORD
//       ? "Access is allowed"
//       : "Access denied, wrong password!";
//   return message;
// }

// --27/36--
// function getSubscriptionPrice(type) {
//   let price;
//   switch (type) {
//     case "starter":
//       price = 0;
//       break;
//     case "professional":
//       price = 20;
//       break;
//     case "organization":
//       price = 50;
//       break;
//   }
//   return price;
// }

// --28/36--
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;
//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;
//     default:
//       message = "Access denied, wrong password!";
//   }
//   return message;
// }

// --29/36--
// function getShippingCost(country) {
//   let message;
//   switch (country) {
//     case "China":
//       message = "Shipping to China will cost 100 credits";
//       break;
//     case "Chile":
//       message = "Shipping to Chile will cost 250 credits";
//       break;
//     case "Australia":
//       message = "Shipping to Australia will cost 170 credits";
//       break;
//     case "Jamaica":
//       message = "Shipping to Jamaica will cost 120 credits";
//       break;
//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   return message;
// }

// --30/36--
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;
//   return message;
// }

// --31/36--
// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// --32/36--
// function getSubstring(string, length) {
//   const substring = string.slice(0, length);

//   return substring;
// }

// --33/36--
// function formatMessage(message, maxLength) {
//   let result;
//   result =
//     message.length > maxLength ? message.slice(0, maxLength) + "..." : message;

//   return result;
// }

// --34/36--
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();

//   return normalizedInput;
// }

// --35/36--
// function checkForName(fullName, name) {
//   const result = fullName.includes(name);
//   return result;
// }

// --36/36--
// function checkForSpam(message) {
//   let result;
//   const normalizedToLowerMessage = message.toLowerCase();
//   result =
//     normalizedToLowerMessage.includes("spam") ||
//     normalizedToLowerMessage.includes("sale");
//   return result;
// }
