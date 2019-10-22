function clock(
  rootElement = document.querySelector('body'),
  startState = 'FULL',
) {
  let clockElement;
  let hourseElement;
  let minElement;
  let secElement;
  let state = startState;

  function renderContainer() {
    clockElement = document.createElement('button');
    clockElement.id = 'ID' + Date.now() + '' + Math.floor(Math.random() * 1000);
    clockElement.classList.add('clock');
    const stopEventButton = document.createElement('button');
    stopEventButton.innerText = 'DELETE EVENT LISTENER';

    function clickHandler(e) {
      switchState();
      initContent();
    }

    clockElement.addEventListener('click', clickHandler);
    clockElement.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      console.log('HELLO', e);
    });
    stopEventButton.addEventListener('click', function() {
      clockElement.removeEventListener('click', clickHandler);
    });
    rootElement.appendChild(clockElement);
    rootElement.appendChild(stopEventButton);
  }

  function normalisedDate(num) {
    return num < 10 ? '0' + num : num;
  }

  function setTime() {
    const currentDate = new Date();

    hourseElement.textContent = normalisedDate(currentDate.getHours());
    minElement.textContent = normalisedDate(currentDate.getMinutes());

    if (secElement) {
      secElement.textContent = normalisedDate(currentDate.getSeconds());
    }
  }

  function renderContent() {
    clockElement.innerHTML = '';

    hourseElement = document.createElement('div');
    minElement = document.createElement('div');

    hourseElement.classList.add('clock__hourse');
    minElement.classList.add('clock__min');

    clockElement.appendChild(hourseElement);
    clockElement.appendChild(minElement);

    if (state === 'FULL') {
      secElement = document.createElement('div');
      secElement.classList.add('clock__sec');
      clockElement.appendChild(secElement);
    }
  }

  function switchState() {
    if (state === 'FULL') {
      state = 'SHORT';
    } else {
      state = 'FULL';
    }
  }

  function initContent() {
    renderContent();
    setTime();
  }

  renderContainer();
  initContent();
}

export { clock }; //
