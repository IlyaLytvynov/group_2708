import './lamp.scss';
import { getRandomColor } from './utils';
class Lamp {
  constructor(targetElement = document.querySelector('body')) {
    this.targetElement = targetElement;
    this.isEnabled = false;
    this.render();
  }

  render() {
    this.lamp = document.createElement('div');
    this.lamp.classList.add('lamp');

    this.targetElement.appendChild(this.lamp);
  }

  start() {
    this.isEnabled = true;
    this.intervalId = setInterval(() => {
      this.lamp.style.background = getRandomColor();
    }, 1000);
  }
  stop() {
    this.isEnabled = false;
    this.lamp.style.background = 'transparent';
    clearInterval(this.intervalId);
  }
}

export { Lamp };
