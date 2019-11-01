import { Field } from './field';

export class AddTaskForm {
  constructor(rootElement, submitCallback) {
    this.rootElement = rootElement;
    this.submitCallback = submitCallback;
    this.render();
  }

  render() {
    this.form = document.createElement('form');
    this.form.addEventListener('submit', e => this.onSubmit(e));
    this.field = new Field(this.form);
    this.rootElement.appendChild(this.form);
  }

  onSubmit(e) {
    e.preventDefault();
    const title = this.field.getValue();
    this.field.setValue();
    this.submitCallback({ title });
  }
}
