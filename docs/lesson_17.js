/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

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


var taskList = new _taskList__WEBPACK_IMPORTED_MODULE_1__["TaskList"]();

/***/ }),

/***/ "./src/lesson_17/lesson_17.scss":
/*!**************************************!*\
  !*** ./src/lesson_17/lesson_17.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    this.init();
  }

  _createClass(TaskList, [{
    key: "init",
    value: function init() {
      this.getTasks();
      this.render();
    }
  }, {
    key: "getTasks",
    value: function getTasks() {
      var _this = this;

      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://localhost:4001/list');
      xhr.send();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log(xhr.response, _typeof(xhr.response));
            _this.tasks = JSON.parse(xhr.response);
            console.log(_this.tasks);

            _this.renderList();
          } else {
            _this.rootElement.innerHTML = 'ERROR!';
          }
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      this.renderWrapper();
      this.renderInput();
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this2 = this;

      var form = document.createElement('form');
      this.input = document.createElement('input');
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        _this2.addTask();
      });
      form.appendChild(this.input);
      this.wrapper.appendChild(form);
    }
  }, {
    key: "addTask",
    value: function addTask() {
      var _this3 = this;

      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:4001/list');
      xhr.setRequestHeader('Content-Type', 'application/json');
      var newTask = {
        title: this.input.value
      };
      xhr.send(JSON.stringify(newTask));

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            _this3.tasks.push(JSON.parse(xhr.response));

            _this3.renderItem(JSON.parse(xhr.response));

            _this3.input.value = ''; // RESET FORM
          } else {
            _this3.rootElement.innerHTML = 'ERROR!';
          }
        }
      };
    }
  }, {
    key: "renderWrapper",
    value: function renderWrapper() {
      this.wrapper = document.createElement('div');
      this.rootElement.appendChild(this.wrapper);
    }
  }, {
    key: "renderList",
    value: function renderList() {
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
          this.renderItem(task);
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
    key: "renderItem",
    value: function renderItem(task) {
      var _this4 = this;

      var li = document.createElement('li');
      var span = document.createElement('span');
      var button = document.createElement('button');
      button.textContent = 'DELETE';
      li.appendChild(span);
      li.appendChild(button);
      button.addEventListener('click', function () {
        _this4.removeItem(task.id);
      });
      span.textContent = task.title;
      li.id = task.id;
      li.classList.add('item');

      if (task.completed) {
        li.classList.add('item_completed');
      }

      this.ul.appendChild(li);
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