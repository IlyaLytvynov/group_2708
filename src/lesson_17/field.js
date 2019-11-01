export class Field {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.render();
  }

  render() {
    this.input = document.createElement('input');
    this.input.classList.add('field');
    this.rootElement.appendChild(this.input);
  }

  getValue() {
    return this.input.value;
  }

  setValue(value) {
    this.input.value = value;
  }
}
