/* ----------Ex-1-Спливання 
-- якщо в прикладі клікнути на #descendant, то послідовно виведуться 
--alert для descendant → child → parent.*/
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");
// parent.addEventListener("click", () => {
//   alert("Parent click handler");
// });
// child.addEventListener("click", () => {
//   alert("Child click handler");
// });
// descendant.addEventListener("click", () => {
//   alert("Descendant click handler");
// });

/* ----------Ex-2: event.target 
--Відкрийте консоль в прикладі і поклікайте, event.target - 
--це завжди вихідний (і найглибший) елемент, на якому був клік, 
--а event.currentTarget не змінюється.*/
// const parent = document.querySelector("#parent");

// parent.addEventListener("click", (event) => {
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
// });

/* ----------Ex-3: припинення спливаня 
--зупинити спливання, викликавши метод stopPropagation().*/
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert(
//     "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!/ Батьківський обробник кліків. Це сповіщення не з’явиться при натисканні на Нащадок, подія сюди не потрапить!"
//   );
// });

// child.addEventListener("click", () => {
//   alert(
//     "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!/ Дочірній обробник кліків. Це сповіщення не з’явиться при натисканні на Нащадок, подія сюди не потрапить!"
//   );
// });

// descendant.addEventListener("click", (event) => {
//   event.stopPropagation();
//   alert("Descendant click handler/ Нащадок обробника кліків");
// });

/* -----------Ex-4: Делегування подій  */
const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

colorPalette.addEventListener("click", selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
  console.log(event);
}

// Some helper functions to render palette items/Деякі допоміжні функції для візуалізації елементів палітри
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    // if (window.CP.shouldStopExecution(0)) break;
    const color = getRandomColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  //   window.CP.exitedLoop(0);
  colorPalette.append(...items);
}

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}
