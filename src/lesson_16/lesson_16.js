import './lesson_16.scss';

const board = document.querySelector('.board');
board.addEventListener('click', function(e) {
  console.log(e.target);
  if (e.target.classList.contains('cell')) {
    e.target.style.border = '5px solid blue';
  }
});

function User(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log('NAME', this.name);
  };
}

const userJohn = new User('John', 40);
const userJack = new User('Jack', 20);
const userBen = new User('Ben', 60);

class DefaultCar {
  constructor(title) {
    this.title = title;
    this.speed = 1000;
    this.direction = 'drive';
  }

  setDirection(direction) {
    this.direction = direction;
  }

  move() {
    this.intervalId = setInterval(() => {
      if (this.direction === 'drive') {
        console.log('move 1m');
      } else {
        console.log('move -1m');
      }
    }, this.speed);
  }

  stop() {
    clearInterval(this.intervalId);
  }
}

class SportCar extends DefaultCar {
  constructor(title) {
    super(title);
    this.speed = 100;
  }
}

class Driver {
  constructor(name, car) {
    this.name = name;
    this.car = car;
  }

  drive() {
    console.log('Lets go!!!');
    car.move();
  }

  stop() {
    console.log('Sure, stoped!');
    car.stop();
  }
}

const ferrari = new SportCar('Ferrari');
const mini = new DefaultCar('Mini');
const ferrariDriver = new Driver('FerrariDriver', ferrari);
// const miniDriver = new Driver('MiniDriver', mini);
// const fruites = new Array('Oranges', 'Bananas', 'Pineapples');
// console.dir(fruites);
// window.fruites = fruites;
// const obj = new Object();
// console.log(obj);

window.ferrari = ferrari;
window.mini = mini;
// window.ferrariDriver = ferrariDriver;
// window.miniDriver = miniDriver;
