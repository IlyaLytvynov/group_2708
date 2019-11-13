import './lesson_17.scss';
import { TaskList } from './taskList';
import { ApiRequest } from './ApiRequest';
import './reactTest.jsx';

const taskList = new TaskList();
console.log(8);

window.taskList = taskList;

function asyncTimeout(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

asyncTimeout(2000).then(() => console.log('Hello world'));
