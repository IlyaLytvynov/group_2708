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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_16/button.js":
/*!*********************************!*\
  !*** ./src/lesson_16/button.js ***!
  \*********************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ "./src/lesson_16/button.scss");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Button =
/*#__PURE__*/
function () {
  function Button() {
    var targetElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '!TITLE!';
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var clickHandler = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
      return console.log('@@EMPTY@@');
    };

    _classCallCheck(this, Button);

    this.targetElement = targetElement;
    this.title = title;
    this.type = type;
    this.clickHandler = clickHandler;
    this.render();
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      this.button = document.createElement('button');
      this.button.classList.add('btn');
      this.addType();
      this.button.textContent = this.title;
      this.button.addEventListener('click', this.clickHandler);
      this.targetElement.appendChild(this.button);
    }
  }, {
    key: "addType",
    value: function addType() {
      if (this.type === 'SUCCESS') {
        this.button.classList.add('btn_success');
      } else if (this.type === 'ERROR') {
        this.button.classList.add('btn_error');
      } else {
        this.button.classList.add('btn_default');
      }
    }
  }]);

  return Button;
}();



/***/ }),

/***/ "./src/lesson_16/button.scss":
/*!***********************************!*\
  !*** ./src/lesson_16/button.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_16/lamp.js":
/*!*******************************!*\
  !*** ./src/lesson_16/lamp.js ***!
  \*******************************/
/*! exports provided: Lamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lamp", function() { return Lamp; });
/* harmony import */ var _lamp_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lamp.scss */ "./src/lesson_16/lamp.scss");
/* harmony import */ var _lamp_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lamp_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/lesson_16/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Lamp =
/*#__PURE__*/
function () {
  function Lamp() {
    var targetElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');

    _classCallCheck(this, Lamp);

    this.targetElement = targetElement;
    this.isEnabled = false;
    this.render();
  }

  _createClass(Lamp, [{
    key: "render",
    value: function render() {
      this.lamp = document.createElement('div');
      this.lamp.classList.add('lamp');
      this.targetElement.appendChild(this.lamp);
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      this.isEnabled = true;
      this.intervalId = setInterval(function () {
        _this.lamp.style.background = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomColor"])();
      }, 1000);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.isEnabled = false;
      this.lamp.style.background = 'transparent';
      clearInterval(this.intervalId);
    }
  }]);

  return Lamp;
}();



/***/ }),

/***/ "./src/lesson_16/lamp.scss":
/*!*********************************!*\
  !*** ./src/lesson_16/lamp.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_16/lesson_16.js":
/*!************************************!*\
  !*** ./src/lesson_16/lesson_16.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_16_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_16.scss */ "./src/lesson_16/lesson_16.scss");
/* harmony import */ var _lesson_16_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_16_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "./src/lesson_16/button.js");
/* harmony import */ var _lamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lamp */ "./src/lesson_16/lamp.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var DefaultCar =
/*#__PURE__*/
function () {
  function DefaultCar(title) {
    _classCallCheck(this, DefaultCar);

    this.title = title;
    this.speed = 1000;
    this.direction = 'drive';
  }

  _createClass(DefaultCar, [{
    key: "setDirection",
    value: function setDirection(direction) {
      this.direction = direction;
    }
  }, {
    key: "move",
    value: function move() {
      var _this = this;

      this.intervalId = setInterval(function () {
        if (_this.direction === 'drive') {
          console.log('move 1m');
        } else {
          console.log('move -1m');
        }
      }, this.speed);
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.intervalId);
    }
  }]);

  return DefaultCar;
}();

var SportCar =
/*#__PURE__*/
function (_DefaultCar) {
  _inherits(SportCar, _DefaultCar);

  function SportCar(title) {
    var _this2;

    _classCallCheck(this, SportCar);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(SportCar).call(this, title));
    _this2.speed = 100;
    return _this2;
  }

  return SportCar;
}(DefaultCar);

var Driver =
/*#__PURE__*/
function () {
  function Driver(name, car) {
    _classCallCheck(this, Driver);

    this.name = name;
    this.car = car;
  }

  _createClass(Driver, [{
    key: "drive",
    value: function drive() {
      console.log('Lets go!!!');
      car.move();
    }
  }, {
    key: "stop",
    value: function stop() {
      console.log('Sure, stoped!');
      car.stop();
    }
  }]);

  return Driver;
}();

var ferrari = new SportCar('Ferrari');
var mini = new DefaultCar('Mini');
var btnSuccess = new _button__WEBPACK_IMPORTED_MODULE_1__["Button"](document.querySelector('.test'), 'Start Car', 'SUCCESS', function () {
  ferrari.move();
});
var bntCreator = new _button__WEBPACK_IMPORTED_MODULE_1__["Button"](document.querySelector('.test'), 'Add btn', 'SUCCESS', function () {
  new _button__WEBPACK_IMPORTED_MODULE_1__["Button"](undefined, 'Cool button', 'SUCCESS');
});
var btnError = new _button__WEBPACK_IMPORTED_MODULE_1__["Button"](document.querySelector('.test'), 'Stop Car', 'ERROR', function () {
  ferrari.stop();
});
var lamp = new _lamp__WEBPACK_IMPORTED_MODULE_2__["Lamp"]();
var lampControl = new _button__WEBPACK_IMPORTED_MODULE_1__["Button"](undefined, 'Start Lamp', 'SUCCESS', function () {
  if (lamp.isEnabled) {
    lamp.stop();
  } else {
    lamp.start();
  }
});

/***/ }),

/***/ "./src/lesson_16/lesson_16.scss":
/*!**************************************!*\
  !*** ./src/lesson_16/lesson_16.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_16/utils.js":
/*!********************************!*\
  !*** ./src/lesson_16/utils.js ***!
  \********************************/
/*! exports provided: randomValue, getRandomColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomValue", function() { return randomValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomColor", function() { return getRandomColor; });
function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomColor() {
  return 'rgb(' + randomValue(0, 255) + ',' + randomValue(0, 255) + ',' + randomValue(0, 255) + ')';
}

/***/ }),

/***/ 22:
/*!******************************************!*\
  !*** multi ./src/lesson_16/lesson_16.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_16/lesson_16.js */"./src/lesson_16/lesson_16.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_16.js.map