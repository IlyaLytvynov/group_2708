import './taskList.scss';
import { ApiRequest } from './ApiRequest';
import { ListItem } from './listItem';
import { AddTaskForm } from './AddTaskForm';

const getRandomId = () => Math.floor(Math.random() * 9999);

export class TaskList {
  constructor(rootElement = document.querySelector('body')) {
    this.rootElement = rootElement;
    this.tasks = [];
    this.listItems = [];
    this.init();
  }

  init() {
    this.getTasks();
    this.render();
  }

  getTasks() {
    const request = new ApiRequest('http://localhost:4001/list');
    const successCallback = response => {
      this.tasks = JSON.parse(response);
      this.renderList();
    };
    const errorCallback = e => {
      console.error(e);
      this.wrapper.innerHTML = '<h2>Error Happened!</h2>';
    };

    request.get(successCallback, errorCallback);
  }

  addTask(newTask) {
    const request = new ApiRequest('http://localhost:4001/list');

    request.post(JSON.stringify(newTask), response => {
      const task = JSON.parse(response);
      this.tasks.push(task);
      this.listItems.push(
        new ListItem(this.ul, task, id => this.removeItem(id)),
      );
    });
  }

  render() {
    this.renderWrapper();
    this.form = new AddTaskForm(this.wrapper, task => this.addTask(task));
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
      this.listItems.push(
        new ListItem(this.ul, task, id => this.removeItem(id)),
      );
    }
    this.wrapper.appendChild(this.ul);
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
