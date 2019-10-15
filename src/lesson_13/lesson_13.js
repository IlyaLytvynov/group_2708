import './lesson_13.scss';
import './traffic-lighter';
import './slideshow';
const cart = [
  {
    title: 'Oranges',
    price: 10,
  },
  {
    title: 'Oranges',
    price: 10,
  },
  {
    title: 'Bananas',
    price: 12,
  },
  {
    title: 'Apples',
    price: 5,
  },
  {
    title: 'Coconut',
    price: 28,
  },
]; // Collection

function printPrice(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i].title + ':' + arr[i].price);
  }
}

function calcTotal(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i].price;
  }

  return total;
}

function print() {
  console.log('Hello');
}

console.log(calcTotal(cart));
