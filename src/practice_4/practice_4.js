import './practice_4.scss';
import './traffic-lighter';

const salaries = {
  jack: 2000,
  john: 1000,
  james: 1000,
  test: 'asdasd',
  hello: '500',
};

function printSalaries(obj) {
  for (let key in obj) {
    console.log(typeof obj[key] === 'number');
  }
}

function calcTotal(obj) {
  let total = 0;
  for (let key in obj) {
    let value = obj[key];
    if (typeof value !== 'number') {
      value = parseInt(value);
    }
    if (isNaN(value) === false) {
      total += value;
    }
  }
  return total;
}

printSalaries(salaries);
printSalaries({ test: 4000, hello: 500 });

console.log(calcTotal(salaries));

function findMax(obj) {
  let maxValue = 0;
  // your code here
  return maxValue;
}

function findMin(obj) {
  let maxValue = 0;
  // your code here
  return maxValue;
}

function findLimited(obj, from, to) {
  let maxValue = 0;
  // your code here
  return maxValue;
}
