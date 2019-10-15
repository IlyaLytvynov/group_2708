const lightRed = document.querySelector('.light_red');
const lightYellow = document.querySelector('.light_yellow');
const lightGreen = document.querySelector('.light_green');

function toggleOnRed() {
  lightRed.classList.add('active');
  lightRed.textContent = 'off';
}

function toggleOnYellow() {
  lightYellow.classList.add('active');
  lightYellow.textContent = 'off';
}

function toggleOnGreen() {
  lightGreen.classList.add('active');
  lightYellow.textContent = 'off';
}
function toggleOfAll() {
  lightRed.classList.remove('active');
  lightYellow.classList.remove('active');
  lightGreen.classList.remove('active');
  lightRed.textContent = 'on';
  lightYellow.textContent = 'on';
  lightGreen.textContent = 'on';
}
lightRed.onclick = () => {
  toggleOfAll();
  toggleOnRed();
};
lightYellow.onclick = () => {
  toggleOfAll();
  toggleOnYellow();
};
lightGreen.onclick = () => {
  toggleOfAll();
  toggleOnGreen();
};
