import './lesson_14.scss';

function findMaxSalary(obj) {
  let maxValue = 0;
  let maxKey;
  for (let key in obj) {
    console.log(key, obj[key]);
    if (maxValue < obj[key]) {
      maxValue = obj[key];
      maxKey = key;
    }
  }
  return maxKey;
}

const products = [
  {
    title: 'IPHONE',
    price: 2400,
  },
  {
    title: 'SAMSUNG',
    price: 2200,
  },
  {
    title: 'IPHONE11',
    price: 2700,
  },
  {
    title: 'XIAOMI',
    price: 200,
  },
];

function findMaxProduct(arr) {
  let maxProduct = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (maxProduct.price < arr[i].price) {
      maxProduct = arr[i];
    }
  }
  return maxProduct;
}

const salaries = {
  john: 10,
  jack: 65,
  robert: 55,
  jakob: 50,
};

function greeting() {
  console.log(this); // {} object undefined
  console.log('HELLO ' + this.name);
}

greeting.apply({ name: 'SOME COOL DUDE' });

let user1 = {
  phine: '+12312312',
  name: 'John', // property
  greet: greeting,
};

let user2 = {
  name: 'Jack',
  greet: greeting,
};

let user3 = {
  name: 'JAMES',
};

user3.greet = greeting;

user1.greet();
user2.greet();
user3.greet();

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomColor() {
  return (
    'rgb(' +
    randomValue(0, 255) +
    ',' +
    randomValue(0, 255) +
    ',' +
    randomValue(0, 255) +
    ')'
  );
}

function getShortDate() {
  const currentDate = new Date();
  const date = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  return (
    normalisedDate(date) +
    '/' +
    normalisedDate(month) +
    '/' +
    normalisedDate(year)
  );
}

function normalisedDate(num) {
  return num < 10 ? '0' + num : num;
}

function getTime() {
  const currentDate = new Date();
  return (
    normalisedDate(currentDate.getHours()) +
    ':' +
    normalisedDate(currentDate.getMinutes()) +
    ':' +
    normalisedDate(currentDate.getSeconds())
  );
}

console.log(getShortDate());

const button1 = document.querySelector('.btn');
const button2 = document.querySelector('.btn2');
const button3 = document.querySelector('.btn3');

setInterval(function() {
  button1.innerHTML = getTime();
}, 1000);

function setColor() {
  this.style.background = getRandomColor();
  this.innerHTML = '<b>HELLO</b>';
}

button1.onclick = setColor;
button2.onclick = setColor;
button3.onclick = setColor;

console.log(findMaxSalary(salaries));
console.log(findMaxProduct(products));
