const light = document.querySelector('.light');
const button = document.querySelector('.control');

function toggle() {
  const isEnabled = light.classList.contains('active');

  if (isEnabled === true) {
    light.classList.remove('active');
    button.textContent = 'On';
  } else {
    light.classList.add('active');
    button.textContent = 'Off';
  }
  // const test = light.style.backgroundColor !== 'red';
  // if (test === true) {
  // light.style.backgroundColor = 'red';
  // light.style.borderWidth = '8px';
  // light.style.boxShadow = '0px 2px 8px 0px #bebaba;';
  // light.style.borderRadius = '50%';

  // } else {
  // light.style.backgroundColor = '';
  // light.style.borderWidth = '1px';
  // light.style.boxShadow = 'none';
  // light.style.borderRadius = '20px';

  //   button.textContent = 'on';
  // }
}

light.onclick = toggle;
button.onclick = toggle;
