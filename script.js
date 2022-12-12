var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var random = document.querySelector('.random');

function getCurrentBodyBackground() {
  var style = getComputedStyle(body);
  return style.backgroundImage;
}

function convertRgbToHex(rgb) {
  return `#${rgb
    .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
    .slice(1)
    .map((n) => parseInt(n, 10).toString(16).padStart(2, '0'))
    .join('')}`;
}

function setInitialGradientText() {
  css.textContent = getCurrentBodyBackground();
}

function setInitialInputValues() {
  var background = getCurrentBodyBackground();
  var initialInputValue1 = convertRgbToHex(background.substring(26, 40));
  var initialInputValue2 = convertRgbToHex(background.substring(42, 58));
  color1.value = initialInputValue1;
  color2.value = initialInputValue2;
}

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background;
}

function generateRandomHex() {
  var color = (Math.random() * 0xfffff * 1000000).toString(16);
  return `#${color.slice(0, 6)}`;
}

function setRandomValues() {
  color1.value = generateRandomHex();
  color2.value = generateRandomHex();
  setGradient();
}

function initPage() {
  setInitialInputValues();
  setInitialGradientText();
}

document.addEventListener('DOMContentLoaded', initPage);
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
random.addEventListener('click', setRandomValues);
