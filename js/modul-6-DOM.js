// -----------Конеспект-6/11
// -----------Ех-1------Навігація по DOM--
// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// ---------Ех-2-------Пошук елементів--
// const listWithId = document.querySelector("#menu");
// listWithId.style.textTransform = "uppercase";
// listWithId.style.fontSize = "24px";
// console.log(listWithId);

// const listWithClass = document.querySelector(".menu");
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = "tomato";
// console.log(firstMenuItem);

// -------Ех-3-----------Властивості та атрибути--
//===================================================
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message

// //===================================================
// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = "https://placeimg.com/640/480/tech";

// ------------Ех-4--------Властивість textContent--
// const text = document.querySelector(".article-text");
// console.log(text.textContent); // text inside p.article-text

// const title = document.querySelector(".article-title");
// title.textContent = "Welcome to Bahamas!";

// -----------Ех-5-------Властивість classList
/*--elem.classList.contains(cls) - повертає true або false, залежно від наявності класу cls в елемента.
--elem.classList.add(cls) - додає клас cls до списку класів елемента.
--elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента.
--elem.classList.toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.
--elem.classList.replace(oldClass, newClass) - замінює існуючий клас oldClass на вказаний newClass.--*/
// const text = document.querySelector("#paragraph");

// console.log(text.classList); // ["text", "red", "big", value: "text red big"]
// console.log(text.classList.contains("red")); // true

// text.classList.remove("big");
// console.log(text.classList); // ["text", "red", value: "text red"]

// text.classList.add("new-class");
// console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// // Can add multiple classes
// text.classList.add("a", "b", "c");
// console.log(text.classList);

// text.classList.toggle("is-hidden"); // will add is-hidden class
// text.classList.toggle("is-hidden"); // will remove is-hidden class

// // classList has a forEach method
// text.classList.forEach((cls) => {
//   console.log(cls); // text, red, new-class
// });

//--------------Ех-6------Властивість style--не зрозумів
// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";

// console.log(button.style); // inline styles object

// -------------Ех-7------Атрибути
/*elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
--elem.getAttribute(name) - отримує значення атрибута і повертає його.
--elem.setAttribute(name, value) - встановлює атрибут.
--elem.removeAttribute(name) - видаляє атрибут.
--elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента--*/
// const image = document.querySelector(".image");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // "Lake and clouds"

// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // Amazing nature

// --------------Ех-8--data-атрибути--dataset
/*--Для отримання значення data-атрибута використовується властивість 
--dataset, після якого стоїть ім'я атрибута.--*/
// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');
// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// const dishes = document.querySelectorAll(".dishes > li");
// dishes.forEach((dish) => {
//   console.log(dish.dataset.id);
// });

// -------------Ех-9-Створення--createElement()-
/*-document.createElement(tagName)-Створює елемент з ім'ям tagName і повертає посилання на нього як результат 
--свого виконання. tagName - це рядок, що вказує тип елемента, який створюється --*/
// const heading = document.createElement("h1");
// console.log(heading); // <h1></h1>

// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

// --------------Ех-10-Додавання
/*--Щоб створений елемент відображався на сторінці, його необхідно додати до 
--вже існуючого елемента в DOM-дереві. 
--element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.
--element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.
--element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.
--element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.
-*/
// const list = document.querySelector(".usernames");

// // Adds an item to the end of the list
// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);

// // Adds a title before the list
// const title = document.createElement("h2");
// title.textContent = "USERNAMES";
// list.before(title);

// // Adds a paragraph after the list
// const text = document.createElement("p");
// text.textContent =
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
// list.after(text);

// --------------Ex-11-Видалення-elem.remove();
// const text = document.querySelector(".text");
// text.remove();

// --------------Ex-12-Властивість innerHTML
/*--Читання. Властивість innerHTML зберігає вміст елемента, включно з тегами, у вигляді рядка.
----------12a--Зміна. Властивість innerHTML доступна і для читання, і для запису.*/
// const title = document.querySelector(".article .title");
// title.innerHTML = 'New and <span class="accent">improved</span> title';

// ---------12b--Однотипна (шаблонна) розмітка створюється із масиву даних.
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

// 