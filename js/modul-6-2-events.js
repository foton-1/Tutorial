/*-- -------------------ПОДІЇ--------*/
/*--<!-------------- Метод addEventListener() 
    додає слухача події на елемент - element.addEventListener(event, handler, options);
    --event - ім'я події, рядок, наприклад "click".
    --handler - колбек-функція, яка буде викликана під час настання події.
   --options - необов'язковий об'єкт параметрів з розширеними налаштуваннями. --> --*/

// const button = document.querySelector(".my-button");
// button.addEventListener("click", () => {
//   console.log("Button was clicked");
// });

// --Для колбека можна (і бажано) використовувати окрему функцію--
// const button = document.querySelector(".my-button");
// const handleClick = () => {
//   console.log("Button was clicked");
// };
// button.addEventListener("click", handleClick);

// --------Метод removeEventListener()--

// --------Метод removeEventListener()--

// --------Ключове слово this--

// --------------------ОБ'ЄКТ ПОДІЇ---
// -1--Деякі властивості об'єкта події
// const button = document.querySelector(".btn");
// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };
// button.addEventListener("click", handleClick);

// -2--preventDefault()
// --Для скасування дії браузера за замовчуванням в об'єкта події є стандартний метод
const form = document.querySelector(".register-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { username, password },
  } = event.currentTarget;
  console.log(username.value, password.value);
});
