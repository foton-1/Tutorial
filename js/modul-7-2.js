/* -------Модуль 7.1. Throttle і Debounce.  */

/* ---------Ex-1:«chatty events»
--Обробники подій спрацьовують надто часто. Такі події 
--неофіційно називають «chatty events».*/
// const output = document.querySelector(".output");
// let scrollEventCounter = 0;

// document.addEventListener("scroll", () => {
//   scrollEventCounter += 1;
//   output.textContent = scrollEventCounter;
// });

/* ----------Ex-2: Підключення бібліотеки Lodash-- 
--Підключимо до проекту бібліотеку Lodash через CDN. Для цього використаємо 
--сервіс cdnjs.com і додамо посилання на скрипт бібліотеки в кінці HTML-документа
--Для перевірки використовуємо метод add, який просто додає два числа*/
// console.log(_.add(2, 5));
// console.log(_.throttle);

/* -----------Ex-3: Тhrottle--*/
// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
// };

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );

/* ------------Ex-4: --Debounce--*/
// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const debouncedOutput = document.querySelector(".output.debounced");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
//   debounced: 0,
// };
// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });
// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );
// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     eventCounter.debounced += 1;
//     debouncedOutput.textContent = eventCounter.debounced;
//   }, 300)
// );

/* ------------Ex-5: Режими  leading   trailing--
--У прикладі реалізований debounce в обох режимах для події scroll.--*/
// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const trailingOutput = document.querySelector(".output.trailing");
// const leadingOutput = document.querySelector(".output.leading");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
//   trailing: 0,
//   leading: 0,
// };
// // Trailing debounce
// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     eventCounter.trailing += 1;
//     trailingOutput.textContent = eventCounter.trailing;
//   }, 300)
// );
// // Leading debounce
// document.addEventListener(
//   "scroll",
//   _.debounce(
//     () => {
//       eventCounter.leading += 1;
//       leadingOutput.textContent = eventCounter.leading;
//     },
//     300,
//     { trailing: false, leading: true }
//   )
// );
// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });
// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );

/* ------------Ex-6: Відкладене завантаження--*/
//-- немає js--//