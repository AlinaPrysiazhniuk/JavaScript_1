const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

colorPalette.addEventListener("click", selectColor);

function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    //якщо властивість елемента, з якого прийшла поточна подія не рівна  "button"
    return;
  }

  //інакше - змінній selectedColor присвоїмо значення, що приходитиме під час виконання поточної події, яка має атрибут data-color
  const selectedColor = event.target.dataset.color;

  //на текст в заголовку сторінки ми передаємо шаблонний рядок, в який буде записуватися назва кольору кнопки, по якій ми натискаємо
  output.textContent = `Selected color: ${selectedColor}`;

  //за допомогою getElementsByClassName елементу output змінюємо колір на колір, що прийшов з поточною подією
  output.style.color = selectedColor;
}

createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
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
