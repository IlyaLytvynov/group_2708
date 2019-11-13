export class ApiRequest {
  constructor(url) {
    this.url = url;
  }

  get() {
    return new Promise((resolve, reject) => {
      console.log('5');
      const xhr = new XMLHttpRequest();
      xhr.open('GET', this.url);
      xhr.send();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          console.log('READY STATE CHANGE');
          if (xhr.status === 200) {
            console.log(xhr);
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };
    });
  }

  post(data, successCalback, errorCallback) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', this.url);

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(data);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          successCalback(xhr.response);
        } else {
          errorCallback(xhr.response);
        }
      }
    };
  }
}
