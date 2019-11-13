/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"lesson_17": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([24,"vendors~lesson_17"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_17/AddTaskForm.js":
/*!**************************************!*\
  !*** ./src/lesson_17/AddTaskForm.js ***!
  \**************************************/
/*! exports provided: AddTaskForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskForm", function() { return AddTaskForm; });
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field */ "./src/lesson_17/field.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var AddTaskForm =
/*#__PURE__*/
function () {
  function AddTaskForm(rootElement, submitCallback) {
    _classCallCheck(this, AddTaskForm);

    this.rootElement = rootElement;
    this.submitCallback = submitCallback;
    this.render();
  }

  _createClass(AddTaskForm, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.form = document.createElement('form');
      this.form.addEventListener('submit', function (e) {
        return _this.onSubmit(e);
      });
      this.field = new _field__WEBPACK_IMPORTED_MODULE_0__["Field"](this.form);
      this.rootElement.appendChild(this.form);
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      var title = this.field.getValue();
      this.field.setValue();
      this.submitCallback({
        title: title
      });
    }
  }]);

  return AddTaskForm;
}();

/***/ }),

/***/ "./src/lesson_17/ApiRequest.js":
/*!*************************************!*\
  !*** ./src/lesson_17/ApiRequest.js ***!
  \*************************************/
/*! exports provided: ApiRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRequest", function() { return ApiRequest; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ApiRequest =
/*#__PURE__*/
function () {
  function ApiRequest(url) {
    _classCallCheck(this, ApiRequest);

    this.url = url;
  }

  _createClass(ApiRequest, [{
    key: "get",
    value: function get() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        console.log('5');
        var xhr = new XMLHttpRequest();
        xhr.open('GET', _this.url);
        xhr.send();

        xhr.onreadystatechange = function () {
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
  }, {
    key: "post",
    value: function post(data, successCalback, errorCallback) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', this.url);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(data);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            successCalback(xhr.response);
          } else {
            errorCallback(xhr.response);
          }
        }
      };
    }
  }]);

  return ApiRequest;
}();

/***/ }),

/***/ "./src/lesson_17/field.js":
/*!********************************!*\
  !*** ./src/lesson_17/field.js ***!
  \********************************/
/*! exports provided: Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Field =
/*#__PURE__*/
function () {
  function Field(rootElement) {
    _classCallCheck(this, Field);

    this.rootElement = rootElement;
    this.render();
  }

  _createClass(Field, [{
    key: "render",
    value: function render() {
      this.input = document.createElement('input');
      this.input.classList.add('field');
      this.rootElement.appendChild(this.input);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.input.value;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.input.value = value;
    }
  }]);

  return Field;
}();

/***/ }),

/***/ "./src/lesson_17/lesson_17.js":
/*!************************************!*\
  !*** ./src/lesson_17/lesson_17.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_17_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_17.scss */ "./src/lesson_17/lesson_17.scss");
/* harmony import */ var _lesson_17_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_17_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskList */ "./src/lesson_17/taskList.js");
/* harmony import */ var _ApiRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApiRequest */ "./src/lesson_17/ApiRequest.js");
/* harmony import */ var _reactTest_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactTest.jsx */ "./src/lesson_17/reactTest.jsx");




var taskList = new _taskList__WEBPACK_IMPORTED_MODULE_1__["TaskList"]();
console.log(8);
window.taskList = taskList;

function asyncTimeout(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, time);
  });
}

asyncTimeout(2000).then(function () {
  return console.log('Hello world');
});

/***/ }),

/***/ "./src/lesson_17/lesson_17.scss":
/*!**************************************!*\
  !*** ./src/lesson_17/lesson_17.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_17/listItem.js":
/*!***********************************!*\
  !*** ./src/lesson_17/listItem.js ***!
  \***********************************/
/*! exports provided: ListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ListItem =
/*#__PURE__*/
function () {
  function ListItem(rootElement, task, onDelete) {
    _classCallCheck(this, ListItem);

    this.rootElement = rootElement;
    this.task = task;
    this.onDelete = onDelete;
    this.render();
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.li = document.createElement('li');
      var span = document.createElement('span');
      var button = document.createElement('button');
      button.textContent = 'DELETE';
      this.li.appendChild(span);
      this.li.appendChild(button);
      button.addEventListener('click', function () {
        _this.onDelete(_this.task.id);
      });
      span.innerHTML = "<h2>hello</h2>" + this.task.title;
      this.li.id = this.task.id;
      this.li.classList.add('item');

      if (this.task.completed) {
        this.li.classList.add('item_completed');
      }

      this.rootElement.appendChild(this.li);
    }
  }]);

  return ListItem;
}();

/***/ }),

/***/ "./src/lesson_17/reactTest.jsx":
/*!*************************************!*\
  !*** ./src/lesson_17/reactTest.jsx ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var HelloMessage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HelloMessage, _React$Component);

  function HelloMessage() {
    _classCallCheck(this, HelloMessage);

    return _possibleConstructorReturn(this, _getPrototypeOf(HelloMessage).apply(this, arguments));
  }

  _createClass(HelloMessage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u041F\u0440\u0438\u0432\u0435\u0442"), ", ", this.props.name);
    }
  }]);

  return HelloMessage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HelloMessage, {
  name: "\u0421\u0430\u0448\u0430"
}), document.getElementById('hello-example'));

/***/ }),

/***/ "./src/lesson_17/taskList.js":
/*!***********************************!*\
  !*** ./src/lesson_17/taskList.js ***!
  \***********************************/
/*! exports provided: TaskList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskList", function() { return TaskList; });
/* harmony import */ var _taskList_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskList.scss */ "./src/lesson_17/taskList.scss");
/* harmony import */ var _taskList_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_taskList_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ApiRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApiRequest */ "./src/lesson_17/ApiRequest.js");
/* harmony import */ var _listItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listItem */ "./src/lesson_17/listItem.js");
/* harmony import */ var _AddTaskForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddTaskForm */ "./src/lesson_17/AddTaskForm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var getRandomId = function getRandomId() {
  return Math.floor(Math.random() * 9999);
};

var TaskList =
/*#__PURE__*/
function () {
  function TaskList() {
    var rootElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');

    _classCallCheck(this, TaskList);

    this.rootElement = rootElement;
    this.tasks = [];
    this.listItems = [];
    console.log('1');
    this.init();
  }

  _createClass(TaskList, [{
    key: "init",
    value: function init() {
      console.log('2');
      this.getTasks();
      this.render();
    }
  }, {
    key: "getTasks",
    value: function getTasks() {
      var _this = this;

      console.log('3');
      var request = new _ApiRequest__WEBPACK_IMPORTED_MODULE_1__["ApiRequest"]('http://localhost:4001/list');
      request.get().then(function (response) {
        console.log('4');
        _this.tasks = JSON.parse(response);

        _this.renderList();

        var commentsRequest = new _ApiRequest__WEBPACK_IMPORTED_MODULE_1__["ApiRequest"]('http://localhost:4001/comments');
        return commentsRequest.get();
      }).then(function (result) {
        console.log(result);
      })["catch"](function (e) {
        console.log('4');
        console.error(e);
        _this.wrapper.innerHTML = '<h2>Error Happened!</h2>';
      });
    }
  }, {
    key: "addTask",
    value: function addTask(newTask) {
      var _this2 = this;

      var request = new _ApiRequest__WEBPACK_IMPORTED_MODULE_1__["ApiRequest"]('http://localhost:4001/list');
      request.post(JSON.stringify(newTask), function (response) {
        var task = JSON.parse(response);

        _this2.tasks.push(task);

        _this2.listItems.push(new _listItem__WEBPACK_IMPORTED_MODULE_2__["ListItem"](_this2.ul, task, function (id) {
          return _this2.removeItem(id);
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      console.log('6');
      this.renderWrapper();
      this.form = new _AddTaskForm__WEBPACK_IMPORTED_MODULE_3__["AddTaskForm"](this.wrapper, function (task) {
        return _this3.addTask(task);
      });
    }
  }, {
    key: "renderWrapper",
    value: function renderWrapper() {
      console.log('7');
      this.wrapper = document.createElement('div');
      this.rootElement.appendChild(this.wrapper);
    }
  }, {
    key: "renderList",
    value: function renderList() {
      var _this4 = this;

      if (this.ul) {
        this.ul.innerHTML = '';
      } else {
        this.ul = document.createElement('ul');
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.tasks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var task = _step.value;
          this.listItems.push(new _listItem__WEBPACK_IMPORTED_MODULE_2__["ListItem"](this.ul, task, function (id) {
            return _this4.removeItem(id);
          }));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.wrapper.appendChild(this.ul);
    }
  }, {
    key: "removeItem",
    value: function removeItem(id) {
      var _this5 = this;

      var xhr = new XMLHttpRequest();
      xhr.open('DELETE', "http://localhost:4001/list/".concat(id));
      xhr.send();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var filterdTasks = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = _this5.tasks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var task = _step2.value;

                if (task.id !== id) {
                  filterdTasks.push(task);
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            _this5.tasks = filterdTasks;

            _this5.renderList();
          } else {
            _this5.rootElement.innerHTML = 'ERROR!';
          }
        }
      };
    }
  }]);

  return TaskList;
}();

/***/ }),

/***/ "./src/lesson_17/taskList.scss":
/*!*************************************!*\
  !*** ./src/lesson_17/taskList.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 24:
/*!******************************************!*\
  !*** multi ./src/lesson_17/lesson_17.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_17/lesson_17.js */"./src/lesson_17/lesson_17.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_17.js.map