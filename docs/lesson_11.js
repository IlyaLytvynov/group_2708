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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_11/colorSwitcher.js":
/*!****************************************!*\
  !*** ./src/lesson_11/colorSwitcher.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var greetButton = document.querySelector('.greet-button');
var input = document.querySelector('.input');

function showHideInput() {
  if (input.style.display !== 'none') {
    input.style.display = 'none';
  } else {
    input.style.display = 'block';
  }
}

function switchColor() {
  if (greetButton.style.backgroundColor !== 'red') {
    greetButton.style.backgroundColor = 'red';
  } else {
    greetButton.style.backgroundColor = '';
  }
}

function clickHandler() {
  showHideInput();
  switchColor();
}

greetButton.onclick = clickHandler;

/***/ }),

/***/ "./src/lesson_11/lamp.js":
/*!*******************************!*\
  !*** ./src/lesson_11/lamp.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var light = document.querySelector('.light');
var button = document.querySelector('.control');

function toggle() {
  var isEnabled = light.classList.contains('active');

  if (isEnabled === true) {
    light.classList.remove('active');
    button.textContent = 'On';
  } else {
    light.classList.add('active');
    button.textContent = 'Off';
  } // const test = light.style.backgroundColor !== 'red';
  // if (test === true) {
  // light.style.backgroundColor = 'red';
  // light.style.borderWidth = '8px';
  // light.style.boxShadow = '0px 2px 8px 0px #bebaba;';
  // light.style.borderRadius = '50%';
  // } else {
  // light.style.backgroundColor = '';
  // light.style.borderWidth = '1px';
  // light.style.boxShadow = 'none';
  // light.style.borderRadius = '20px';
  //   button.textContent = 'on';
  // }

}

light.onclick = toggle;
button.onclick = toggle;

/***/ }),

/***/ "./src/lesson_11/lesson_11.js":
/*!************************************!*\
  !*** ./src/lesson_11/lesson_11.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_11_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_11.scss */ "./src/lesson_11/lesson_11.scss");
/* harmony import */ var _lesson_11_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_11_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _colorSwitcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colorSwitcher.js */ "./src/lesson_11/colorSwitcher.js");
/* harmony import */ var _colorSwitcher_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_colorSwitcher_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lamp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lamp.js */ "./src/lesson_11/lamp.js");
/* harmony import */ var _lamp_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lamp_js__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/lesson_11/lesson_11.scss":
/*!**************************************!*\
  !*** ./src/lesson_11/lesson_11.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 15:
/*!******************************************!*\
  !*** multi ./src/lesson_11/lesson_11.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_11/lesson_11.js */"./src/lesson_11/lesson_11.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_11.js.map