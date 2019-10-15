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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_13/lesson_13.js":
/*!************************************!*\
  !*** ./src/lesson_13/lesson_13.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_13_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_13.scss */ "./src/lesson_13/lesson_13.scss");
/* harmony import */ var _lesson_13_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_13_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _traffic_lighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./traffic-lighter */ "./src/lesson_13/traffic-lighter.js");
/* harmony import */ var _traffic_lighter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_traffic_lighter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slideshow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideshow */ "./src/lesson_13/slideshow.js");
/* harmony import */ var _slideshow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slideshow__WEBPACK_IMPORTED_MODULE_2__);



var cart = [{
  title: 'Oranges',
  price: 10
}, {
  title: 'Oranges',
  price: 10
}, {
  title: 'Bananas',
  price: 12
}, {
  title: 'Apples',
  price: 5
}, {
  title: 'Coconut',
  price: 28
}]; // Collection

function printPrice(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i].title + ':' + arr[i].price);
  }
}

function calcTotal(array) {
  var total = 0;

  for (var i = 0; i < array.length; i++) {
    total += array[i].price;
  }

  return total;
}

function print() {
  console.log('Hello');
}

console.log(calcTotal(cart));

/***/ }),

/***/ "./src/lesson_13/lesson_13.scss":
/*!**************************************!*\
  !*** ./src/lesson_13/lesson_13.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_13/slideshow.js":
/*!************************************!*\
  !*** ./src/lesson_13/slideshow.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var slidesWrapper = document.querySelector('.slideshow__slides');
var slides = document.querySelectorAll('.slideshow__slide'); // array

var buttons = document.querySelectorAll('.slideshow__control');
var activeIndex = 0;
var intervalId;
init();

function toggleSlideByActiveIndex() {
  slides[activeIndex].classList.add('slideshow__slide_active');
}

function decreaseIndex() {
  if (activeIndex - 1 < 0) {
    activeIndex = slides.length - 1;
  } else {
    activeIndex -= 1;
  }
}

function increaseIndex() {
  if (activeIndex + 1 >= slides.length) {
    activeIndex = 0;
  } else {
    activeIndex += 1;
  }
}

function nextSlide() {
  stopAutoSwitch();
  toggleOffPrevios();
  increaseIndex();
  toggleSlideByActiveIndex();
  startAutoSwitch();
}

function prevSlide() {
  stopAutoSwitch();
  toggleOffPrevios();
  decreaseIndex();
  toggleSlideByActiveIndex();
  startAutoSwitch();
}

function toggleOffPrevios() {
  slides[activeIndex].classList.remove('slideshow__slide_active');
}

function init() {
  toggleSlideByActiveIndex();
  startAutoSwitch();
}

function startAutoSwitch() {
  clearInterval(intervalId);
  intervalId = setInterval(nextSlide, 2000);
}

function stopAutoSwitch() {
  clearInterval(intervalId);
}

buttons[0].onclick = prevSlide;
buttons[1].onclick = nextSlide;
slidesWrapper.onmouseenter = stopAutoSwitch;
slidesWrapper.onmouseleave = startAutoSwitch;

/***/ }),

/***/ "./src/lesson_13/traffic-lighter.js":
/*!******************************************!*\
  !*** ./src/lesson_13/traffic-lighter.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var lights = document.querySelectorAll('.light');

function toggleOn(index) {
  lights[index].classList.add('active');
  lights[index].textContent = 'off';
}

function toggleOfAll() {
  for (var i = 0; i < lights.length; i++) {
    lights[i].classList.remove('active');
    lights[i].textContent = 'on';
  }
}

var _loop = function _loop(i) {
  lights[i].onclick = function () {
    toggleOfAll();
    toggleOn(i);
  };
};

for (var i = 0; i < lights.length; i++) {
  _loop(i);
}

/***/ }),

/***/ 18:
/*!******************************************!*\
  !*** multi ./src/lesson_13/lesson_13.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_13/lesson_13.js */"./src/lesson_13/lesson_13.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_13.js.map