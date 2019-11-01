export class ListItem {
  constructor(rootElement, task, onDelete) {
    this.rootElement = rootElement;
    this.task = task;
    this.onDelete = onDelete;
    this.render();
  }

  render() {
    this.li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.textContent = 'DELETE';
    this.li.appendChild(span);
    this.li.appendChild(button);

    button.addEventListener('click', () => {
      this.onDelete(this.task.id);
    });

    span.innerHTML = `<h2>hello</h2>` + this.task.title;

    this.li.id = this.task.id;
    this.li.classList.add('item');
    if (this.task.completed) {
      this.li.classList.add('item_completed');
    }
    this.rootElement.appendChild(this.li);
  }
}
