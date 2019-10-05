import './lesson_10.scss';
const ADMIN_USER_NAME = 'admin';
const SUPER_USER = 'Ilya';
let username = prompt('Enter name');

if (username === ADMIN_USER_NAME) {
  header.innerHTML = 'Hello masterasasd!';
  header.style.background = 'yellow';
  header.style.color = 'blue';
  header.title = 'MASTER TOOLTIP';
  header.className = 'test dark';
} else if (username === SUPER_USER) {
  header.innerHTML = 'HELLO SUPER USER';
  header.style.background = 'green';
  header.style.color = 'aqua';
} else {
  header.innerHTML = 'Hello guest!';
  header.style.background = 'red';
}
