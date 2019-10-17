const lights = document.querySelectorAll('.light');

function toggleOn(index) {
  lights[index].classList.add('active');
  lights[index].textContent = 'off';
}

function toggleOfAll() {
  for (let i = 0; i < lights.length; i++) {
    lights[i].classList.remove('active');
    lights[i].textContent = 'on';
  }
}

for (let i = 0; i < lights.length; i++) {
  lights[i].onclick = function() {
    toggleOfAll();
    toggleOn(i);
  };
}
