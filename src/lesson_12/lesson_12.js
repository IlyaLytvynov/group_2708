import './lesson_12.scss';
import './calculator';
import './objects';

function pow(a = 2, b = 2) {
  let res = a;
  for (let i = 1; i < b; i++) {
    res = res * a;
  }
  return res;
}

console.log(pow(3));
console.log(pow(5, 5));
