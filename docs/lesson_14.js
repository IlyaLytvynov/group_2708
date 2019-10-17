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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_14/lesson_14.js":
/*!************************************!*\
  !*** ./src/lesson_14/lesson_14.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_14_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_14.scss */ "./src/lesson_14/lesson_14.scss");
/* harmony import */ var _lesson_14_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_14_scss__WEBPACK_IMPORTED_MODULE_0__);


function findMaxSalary(obj) {
  var maxValue = 0;
  var maxKey;

  for (var key in obj) {
    console.log(key, obj[key]);

    if (maxValue < obj[key]) {
      maxValue = obj[key];
      maxKey = key;
    }
  }

  return maxKey;
}

var products = [{
  title: 'IPHONE',
  price: 2400
}, {
  title: 'SAMSUNG',
  price: 2200
}, {
  title: 'IPHONE11',
  price: 2700
}, {
  title: 'XIAOMI',
  price: 200
}];

function findMaxProduct(arr) {
  var maxProduct = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (maxProduct.price < arr[i].price) {
      maxProduct = arr[i];
    }
  }

  return maxProduct;
}

var salaries = {
  john: 10,
  jack: 65,
  robert: 55,
  jakob: 50
};

function greeting() {
  console.log(this); // {} object undefined

  console.log('HELLO ' + this.name);
}

greeting.apply({
  name: 'SOME COOL DUDE'
});
var user1 = {
  phine: '+12312312',
  name: 'John',
  // property
  greet: greeting
};
var user2 = {
  name: 'Jack',
  greet: greeting
};
var user3 = {
  name: 'JAMES'
};
user3.greet = greeting;
user1.greet();
user2.greet();
user3.greet();

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomColor() {
  return 'rgb(' + randomValue(0, 255) + ',' + randomValue(0, 255) + ',' + randomValue(0, 255) + ')';
}

function getShortDate() {
  var currentDate = new Date();
  var date = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  return normalisedDate(date) + '/' + normalisedDate(month) + '/' + normalisedDate(year);
}

function normalisedDate(num) {
  return num < 10 ? '0' + num : num;
}

function getTime() {
  var currentDate = new Date();
  return normalisedDate(currentDate.getHours()) + ':' + normalisedDate(currentDate.getMinutes()) + ':' + normalisedDate(currentDate.getSeconds());
}

console.log(getShortDate());
var button1 = document.querySelector('.btn');
var button2 = document.querySelector('.btn2');
var button3 = document.querySelector('.btn3');
setInterval(function () {
  button1.innerHTML = getTime();
}, 1000);

function setColor() {
  this.style.background = getRandomColor();
  this.innerHTML = '<b>HELLO</b>';
}

button1.onclick = setColor;
button2.onclick = setColor;
button3.onclick = setColor;
console.log(findMaxSalary(salaries));
console.log(findMaxProduct(products));

/***/ }),

/***/ "./src/lesson_14/lesson_14.scss":
/*!**************************************!*\
  !*** ./src/lesson_14/lesson_14.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 19:
/*!******************************************!*\
  !*** multi ./src/lesson_14/lesson_14.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_14/lesson_14.js */"./src/lesson_14/lesson_14.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_14.js.map