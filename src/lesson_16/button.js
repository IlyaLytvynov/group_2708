import './button.scss';

class Button {
  constructor(
    targetElement = document.querySelector('body'),
    title = '!TITLE!',
    type = '',
    clickHandler = () => console.log('@@EMPTY@@'),
  ) {
    this.targetElement = targetElement;
    this.title = title;
    this.type = type;
    this.clickHandler = clickHandler;
    this.render();
  }

  render() {
    this.button = document.createElement('button');
    this.button.classList.add('btn');
    this.addType();
    this.button.textContent = this.title;
    this.button.addEventListener('click', this.clickHandler);
    this.targetElement.appendChild(this.button);
  }

  addType() {
    if (this.type === 'SUCCESS') {
      this.button.classList.add('btn_success');
    } else if (this.type === 'ERROR') {
      this.button.classList.add('btn_error');
    } else {
      this.button.classList.add('btn_default');
    }
  }
}
export { Button };
