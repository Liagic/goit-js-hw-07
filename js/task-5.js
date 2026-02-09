function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const color = document.querySelector('.color');
const setColor = document.querySelector('body');
const colorButton = document.querySelector('.change-color');
function changeColor() {
  const getColor = getRandomHexColor();

  setColor.style.backgroundColor = getColor;
  color.textContent = getColor;
}
colorButton.addEventListener('click', changeColor);
