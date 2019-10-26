import './lesson_16.scss';
import { Button } from './button';
import { Lamp } from './lamp';

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

const btnSuccess = new Button(
  document.querySelector('.test'),
  'Start Car',
  'SUCCESS',
  () => {
    ferrari.move();
  },
);

const bntCreator = new Button(
  document.querySelector('.test'),
  'Add btn',
  'SUCCESS',
  () => {
    new Button(undefined, 'Cool button', 'SUCCESS');
  },
);
const btnError = new Button(
  document.querySelector('.test'),
  'Stop Car',
  'ERROR',
  () => {
    ferrari.stop();
  },
);

const lamp = new Lamp();
const lampControl = new Button(undefined, 'Start Lamp', 'SUCCESS', () => {
  if (lamp.isEnabled) {
    lamp.stop();
  } else {
    lamp.start();
  }
});
