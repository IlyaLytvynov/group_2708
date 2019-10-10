const greetButton = document.querySelector('.greet-button');
const input = document.querySelector('.input');

function showHideInput() {
  if (input.style.display !== 'none') {
    input.style.display = 'none';
  } else {
    input.style.display = 'block';
  }
}

function switchColor() {
  if (greetButton.style.backgroundColor !== 'red') {
    greetButton.style.backgroundColor = 'red';
  } else {
    greetButton.style.backgroundColor = '';
  }
}

function clickHandler() {
  showHideInput();
  switchColor();
}

greetButton.onclick = clickHandler;
