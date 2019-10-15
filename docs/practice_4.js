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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/practice_4/practice_4.js":
/*!**************************************!*\
  !*** ./src/practice_4/practice_4.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _practice_4_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./practice_4.scss */ "./src/practice_4/practice_4.scss");
/* harmony import */ var _practice_4_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_practice_4_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _traffic_lighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./traffic-lighter */ "./src/practice_4/traffic-lighter.js");
/* harmony import */ var _traffic_lighter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_traffic_lighter__WEBPACK_IMPORTED_MODULE_1__);


var salaries = {
  jack: 2000,
  john: 1000,
  james: 1000,
  test: 'asdasd',
  hello: '500'
};

function printSalaries(obj) {
  for (var key in obj) {
    console.log(typeof obj[key] === 'number');
  }
}

function calcTotal(obj) {
  var total = 0;

  for (var key in obj) {
    var value = obj[key];

    if (typeof value !== 'number') {
      value = parseInt(value);
    }

    if (isNaN(value) === false) {
      total += value;
    }
  }

  return total;
}

printSalaries(salaries);
printSalaries({
  test: 4000,
  hello: 500
});
console.log(calcTotal(salaries));

function findMax(obj) {
  var maxValue = 0; // your code here

  return maxValue;
}

function findMin(obj) {
  var maxValue = 0; // your code here

  return maxValue;
}

function findLimited(obj, from, to) {
  var maxValue = 0; // your code here

  return maxValue;
}

/***/ }),

/***/ "./src/practice_4/practice_4.scss":
/*!****************************************!*\
  !*** ./src/practice_4/practice_4.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/practice_4/traffic-lighter.js":
/*!*******************************************!*\
  !*** ./src/practice_4/traffic-lighter.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var lightRed = document.querySelector('.light_red');
var lightYellow = document.querySelector('.light_yellow');
var lightGreen = document.querySelector('.light_green');

function toggleOnRed() {
  lightRed.classList.add('active');
  lightRed.textContent = 'off';
}

function toggleOnYellow() {
  lightYellow.classList.add('active');
  lightYellow.textContent = 'off';
}

function toggleOnGreen() {
  lightGreen.classList.add('active');
  lightYellow.textContent = 'off';
}

function toggleOfAll() {
  lightRed.classList.remove('active');
  lightYellow.classList.remove('active');
  lightGreen.classList.remove('active');
  lightRed.textContent = 'on';
  lightYellow.textContent = 'on';
  lightGreen.textContent = 'on';
}

lightRed.onclick = function () {
  toggleOfAll();
  toggleOnRed();
};

lightYellow.onclick = function () {
  toggleOfAll();
  toggleOnYellow();
};

lightGreen.onclick = function () {
  toggleOfAll();
  toggleOnGreen();
};

/***/ }),

/***/ 17:
/*!********************************************!*\
  !*** multi ./src/practice_4/practice_4.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/practice_4/practice_4.js */"./src/practice_4/practice_4.js");


/***/ })

/******/ });
//# sourceMappingURL=practice_4.js.map