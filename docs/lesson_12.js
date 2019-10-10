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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_12/calculator.js":
/*!*************************************!*\
  !*** ./src/lesson_12/calculator.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculator_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator.scss */ "./src/lesson_12/calculator.scss");
/* harmony import */ var _calculator_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_calculator_scss__WEBPACK_IMPORTED_MODULE_0__);

var operandAElement = document.querySelector('.calculator__operand_a');
var operandBElement = document.querySelector('.calculator__operand_b');
var operatorAddElement = document.querySelector('.calculator__operator_add');
var operatorMinusElement = document.querySelector('.calculator__operator_minus');
var operatorResetElement = document.querySelector('.calculator__operator_reset');
var outputElement = document.querySelector('.calculator__result');

function add() {
  var a = Number(operandAElement.value);
  var b = Number(operandBElement.value);

  if (validate(a, b)) {
    print(a + b);
  }
}

function sub() {
  var a = Number(operandAElement.value);
  var b = Number(operandBElement.value);

  if (validate(a, b)) {
    print(a - b);
  }
}

function print(data) {
  outputElement.textContent = 'RESULT:' + data;
}

function validate(a, b) {
  var isValid = true;

  if (Boolean(a) === false) {
    operandAElement.classList.add('calculator__operand_error');
    isValid = false;
  }

  if (Boolean(b) === false) {
    operandBElement.classList.add('calculator__operand_error');
    isValid = false;
  }

  return isValid;
}

function clearClassListA() {
  operandAElement.classList.remove('calculator__operand_error');
}

function clearClassListB() {
  operandBElement.classList.remove('calculator__operand_error');
}

function clearClassLists() {
  clearClassListA();
  clearClassListB();
}

function clearValues() {
  operandAElement.value = '';
  operandBElement.value = '';
  outputElement.textContent = '';
}

function clear() {
  clearClassLists();
  clearValues();
}

operandAElement.oninput = clearClassListA;
operandBElement.oninput = clearClassListB;
operatorAddElement.onclick = add;
operatorMinusElement.onclick = sub;
operatorResetElement.onclick = clear;

/***/ }),

/***/ "./src/lesson_12/calculator.scss":
/*!***************************************!*\
  !*** ./src/lesson_12/calculator.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_12/lesson_12.js":
/*!************************************!*\
  !*** ./src/lesson_12/lesson_12.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_12_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_12.scss */ "./src/lesson_12/lesson_12.scss");
/* harmony import */ var _lesson_12_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_12_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator */ "./src/lesson_12/calculator.js");
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects */ "./src/lesson_12/objects.js");
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_objects__WEBPACK_IMPORTED_MODULE_2__);




function pow() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var res = a;

  for (var i = 1; i < b; i++) {
    res = res * a;
  }

  return res;
}

console.log(pow(3));
console.log(pow(5, 5));

/***/ }),

/***/ "./src/lesson_12/lesson_12.scss":
/*!**************************************!*\
  !*** ./src/lesson_12/lesson_12.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_12/objects.js":
/*!**********************************!*\
  !*** ./src/lesson_12/objects.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var name = 'John';
var age = 30;
var mobilePhone = '+777888999';
var officePhone = '+777888992';
var employee1Name = 'Jack';
var employee1Salary = 2000;
var employee2Name = 'John';
var employee2Salary = 10000;
var salaries = {
  jack: 2000,
  john: 10000,
  james: 9999,
  yaron: 1234
};
salaries['ofir'] = 67890;
console.log(salaries['john'], salaries.john);

function addEmployee() {
  var name = prompt('Enter employee name');
  var salary = Number(prompt('Enter employee salary'));
  salaries[name] = salary;
  console.log(salaries);
}

employeeAdd.onclick = addEmployee;

/***/ }),

/***/ 16:
/*!******************************************!*\
  !*** multi ./src/lesson_12/lesson_12.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_12/lesson_12.js */"./src/lesson_12/lesson_12.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_12.js.map