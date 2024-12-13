function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColorElem = document.querySelector('.change-color');
const spanColorElem = document.querySelector('.color');
const bodyElem = document.querySelector('body');
spanColorElem.textContent = bodyElem.style.backgroundColor;

btnChangeColorElem.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  spanColorElem.textContent = newColor;
  bodyElem.style.backgroundColor = newColor;
});
