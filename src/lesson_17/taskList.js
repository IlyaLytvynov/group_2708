import './taskList.scss';

const getRandomId = () => Math.floor(Math.random() * 9999);

export class TaskList {
  constructor(rootElement = document.querySelector('body')) {
    this.rootElement = rootElement;
    this.tasks = [];
    this.init();
  }

  init() {
    this.getTasks();
    this.render();
  }

  getTasks() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:4001/list');
    xhr.send();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log(xhr.response, typeof xhr.response);
          this.tasks = JSON.parse(xhr.response);
          console.log(this.tasks);
          this.renderList();
        } else {
          this.rootElement.innerHTML = 'ERROR!';
        }
      }
    };
  }

  render() {
    this.renderWrapper();
    this.renderInput();
  }

  renderInput() {
    const form = document.createElement('form');
    this.input = document.createElement('input');
    form.addEventListener('submit', e => {
      e.preventDefault();
      this.addTask();
    });
    form.appendChild(this.input);
    this.wrapper.appendChild(form);
  }

  addTask() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:4001/list');

    xhr.setRequestHeader('Content-Type', 'application/json');

    const newTask = {
      title: this.input.value,
    };

    xhr.send(JSON.stringify(newTask));
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          this.tasks.push(JSON.parse(xhr.response));
          this.renderItem(JSON.parse(xhr.response));
          this.input.value = ''; // RESET FORM
        } else {
          this.rootElement.innerHTML = 'ERROR!';
        }
      }
    };
  }

  renderWrapper() {
    this.wrapper = document.createElement('div');
    this.rootElement.appendChild(this.wrapper);
  }

  renderList() {
    if (this.ul) {
      this.ul.innerHTML = '';
    } else {
      this.ul = document.createElement('ul');
    }

    for (let task of this.tasks) {
      this.renderItem(task);
    }
    this.wrapper.appendChild(this.ul);
  }

  renderItem(task) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.textContent = 'DELETE';
    li.appendChild(span);
    li.appendChild(button);

    button.addEventListener('click', () => {
      this.removeItem(task.id);
    });

    span.textContent = task.title;
    li.id = task.id;
    li.classList.add('item');
    if (task.completed) {
      li.classList.add('item_completed');
    }
    this.ul.appendChild(li);
  }

  removeItem(id) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `http://localhost:4001/list/${id}`);
    xhr.send();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const filterdTasks = [];
          for (let task of this.tasks) {
            if (task.id !== id) {
              filterdTasks.push(task);
            }
          }
          this.tasks = filterdTasks;
          this.renderList();
        } else {
          this.rootElement.innerHTML = 'ERROR!';
        }
      }
    };
  }
}
