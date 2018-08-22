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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Rope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rope", function() { return Rope; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _rope_out__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rope-out */ "./src/rope-out.ts");
/* harmony import */ var _rope_in__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rope-in */ "./src/rope-in.ts");
/* harmony import */ var _rope_double__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rope-double */ "./src/rope-double.ts");
/* harmony import */ var _rope_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rope-class */ "./src/rope-class.ts");





// Using a decorator, because decorators rule.
function Rope() {
    return function (originalConstructor) {
        return /** @class */ (function (_super) {
            tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, args) || this;
                var boundValues = {};
                Object(_rope_double__WEBPACK_IMPORTED_MODULE_3__["ropeDouble"])(boundValues, _this);
                Object(_rope_out__WEBPACK_IMPORTED_MODULE_1__["ropeOut"])(boundValues, _this);
                Object(_rope_in__WEBPACK_IMPORTED_MODULE_2__["ropeIn"])(boundValues, _this);
                Object(_rope_class__WEBPACK_IMPORTED_MODULE_4__["ropeClass"])(boundValues, _this);
                return _this;
            }
            return class_1;
        }(originalConstructor));
    };
}


/***/ }),

/***/ "./src/rope-class.ts":
/*!***************************!*\
  !*** ./src/rope-class.ts ***!
  \***************************/
/*! exports provided: ropeClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ropeClass", function() { return ropeClass; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");

function ropeClass(boundValues, classInstance) {
    var ropeClass = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElemArray"])('[rope-class]');
    ropeClass.forEach(function (elem) {
        var classConditionObject = elem.getAttribute('rope-class');
        var classJson = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["convertToJson"])(classConditionObject);
        var classVar = Object.keys(classJson)[0];
        var className = classJson[classVar];
        defineClassBinding(elem, classVar, className, boundValues, classInstance);
    });
}
function defineClassBinding(elem, classVar, className, boundValues, classInstance) {
    // Add the current value of the property, to our value cache.
    boundValues[classVar] = boundValues[classVar] ? boundValues[classVar] : classInstance[classVar];
    setClassElem(elem, boundValues[classVar], className);
    var classSetter = function (newValue) {
        boundValues[classVar] = newValue;
        setClassElem(elem, newValue, className);
        return newValue;
    };
    if (!_utils__WEBPACK_IMPORTED_MODULE_0__["cachedSetters"][classVar]) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["cachedSetters"][classVar] = [];
    }
    _utils__WEBPACK_IMPORTED_MODULE_0__["cachedSetters"][classVar].push(classSetter);
    Object.defineProperty(classInstance, classVar, {
        get: function () { return boundValues[classVar]; },
        set: function (newValue) {
            _utils__WEBPACK_IMPORTED_MODULE_0__["cachedSetters"][classVar].forEach(function (setterFn) { return setterFn(newValue); });
        }
    });
}
function setClassElem(elem, newValue, className) {
    if (newValue) {
        return elem.classList.add(className);
    }
    return elem.classList.remove(className);
}


/***/ }),

/***/ "./src/rope-double.ts":
/*!****************************!*\
  !*** ./src/rope-double.ts ***!
  \****************************/
/*! exports provided: ropeDouble */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ropeDouble", function() { return ropeDouble; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");

function ropeDouble(boundValues, classInstance) {
    var ropeDouble = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElemArray"])('[data-g-rope]');
    ropeDouble.forEach(function (elem) {
        // The value of each data-g-rope attribute represents the 
        // variable name that it's bound to, in the class instance.
        // We use it as a key value, in the value cache(boundValues) object, as well.
        var propName = elem.dataset['gRope'];
        defineBinding(elem, propName, boundValues, classInstance);
    });
}
// The meat of the decorator.
// Here we define the setter for the corresponding attribute in our class,
// as well as the event listener for the corresponding input element.
function defineBinding(elem, propName, boundValues, classInstance) {
    // Add the current value of the property, to our value cache.
    boundValues[propName] = boundValues[propName] ?
        boundValues[propName] :
        classInstance[propName];
    var newSetter = function (newValue) {
        boundValues[propName] = newValue;
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setElem"])(elem, boundValues[propName]);
    };
    if (!_utils__WEBPACK_IMPORTED_MODULE_0__["cachedSetters"][propName]) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["cachedSetters"][propName] = [];
    }
    _utils__WEBPACK_IMPORTED_MODULE_0__["cachedSetters"][propName].push(newSetter);
    // We define the getter and setter properties.
    // for the getter and setter, we use the cached values,
    // because we don't want to fall into an infinite loop 
    Object.defineProperty(classInstance, propName, {
        get: function () { return boundValues[propName]; },
        set: function (newValue) {
            _utils__WEBPACK_IMPORTED_MODULE_0__["cachedSetters"][propName].forEach(function (setterFn) { return setterFn(newValue); });
        },
    });
    // Set the event listener, that listens to the change event,
    // and updates our corresponding class property.
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setChangeListener"])(elem, propName, classInstance);
    // Set the initial value, that is in the class property, to our element.
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setElem"])(elem, boundValues[propName]);
}


/***/ }),

/***/ "./src/rope-in.ts":
/*!************************!*\
  !*** ./src/rope-in.ts ***!
  \************************/
/*! exports provided: ropeIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ropeIn", function() { return ropeIn; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");

function ropeIn(boundValues, classInstance) {
    var ropeInElems = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElemArray"])('[rope-in]');
    ropeInElems.forEach(function (elem) {
        var propName = elem.getAttribute('rope-in');
        defineBinding(elem, propName, boundValues, classInstance);
    });
}
// The meat of the decorator.
// Here we define the setter for the corresponding attribute in our class,
// as well as the event listener for the corresponding input element.
function defineBinding(elem, propName, boundValues, classInstance) {
    // Add the current value of the property, to our value cache.
    boundValues[propName] = boundValues[propName] ?
        boundValues[propName] :
        classInstance[propName];
    var newSetter = function (newValue) {
        boundValues[propName] = newValue;
        return boundValues[propName];
    };
    if (!_utils__WEBPACK_IMPORTED_MODULE_0__["cachedSetters"][propName]) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["cachedSetters"][propName] = [];
    }
    _utils__WEBPACK_IMPORTED_MODULE_0__["cachedSetters"][propName].push(newSetter);
    Object.defineProperty(classInstance, propName, {
        get: function () { return boundValues[propName]; },
        set: function (newValue) {
            _utils__WEBPACK_IMPORTED_MODULE_0__["cachedSetters"][propName].forEach(function (setterFn) { return setterFn(newValue); });
        }
    });
    // Set the event listener, that listens to the change event,
    // and updates our corresponding class property.
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setChangeListener"])(elem, propName, classInstance);
}


/***/ }),

/***/ "./src/rope-out.ts":
/*!*************************!*\
  !*** ./src/rope-out.ts ***!
  \*************************/
/*! exports provided: ropeOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ropeOut", function() { return ropeOut; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");

function ropeOut(boundValues, classInstance) {
    var ropeOutElems = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElemArray"])('[rope-out]');
    ropeOutElems.forEach(function (elem) {
        var propName = elem.getAttribute('rope-out');
        defineBinding(elem, propName, boundValues, classInstance);
    });
}
function defineBinding(elem, propName, boundValues, classInstance) {
    // Add the current value of the property, to our value cache.
    boundValues[propName] = boundValues[propName] ?
        boundValues[propName] :
        classInstance[propName];
    var newSetter = function (newValue) {
        boundValues[propName] = newValue;
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setElem"])(elem, boundValues[propName]);
    };
    if (!_utils__WEBPACK_IMPORTED_MODULE_0__["cachedSetters"][propName]) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["cachedSetters"][propName] = [];
    }
    _utils__WEBPACK_IMPORTED_MODULE_0__["cachedSetters"][propName].push(newSetter);
    // We define the getter and setter properties.
    // for the getter and setter, we use the cached values,
    // because we don't want to fall into an infinite loop 
    Object.defineProperty(classInstance, propName, {
        get: function () { return boundValues[propName]; },
        set: function (newValue) {
            _utils__WEBPACK_IMPORTED_MODULE_0__["cachedSetters"][propName].forEach(function (setterFn) { return setterFn(newValue); });
        },
    });
    // Set the initial value, that is in the class property, to our element.
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setElem"])(elem, boundValues[propName]);
}


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: getElemArray, setChangeListener, convertToJson, setElem, cachedSetters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElemArray", function() { return getElemArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setChangeListener", function() { return setChangeListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToJson", function() { return convertToJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setElem", function() { return setElem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cachedSetters", function() { return cachedSetters; });
// Helper method, for getting all of the elements with the data-g-rope attribute on them, through a query selector.
// And converting that to an array, before returning it for easier handling.
function getElemArray(selector) {
    var elementNodes = document.querySelectorAll(selector);
    var elementArray = [].slice.call(elementNodes);
    return elementArray;
}
// Add the event listener on the input element,
// that changes the data model, when the input updates
function setChangeListener(elem, propName, classInstance) {
    elem.addEventListener('input', function (event) {
        var currentElem = event.currentTarget;
        var elemType = currentElem.type;
        switch (elemType) {
            case 'checkbox':
                classInstance[propName] = elem.checked;
                return classInstance;
            default:
                classInstance[propName] = elem.value;
                return classInstance;
        }
    });
}
// TODO: Check if you can improve this.
function convertToJson(classConditionObject) {
    var jsontemp = classConditionObject.replace((/([\w]+)(:)/g), "\"$1\"$2");
    var correctjson = jsontemp.replace((/'/g), "\"");
    return JSON.parse(correctjson);
}
// Helper method for setting the inital value, if already set in the model.
function setElem(elem, valueToSet) {
    if (elem.tagName !== 'INPUT' &&
        elem.tagName !== 'SELECT') {
        elem.textContent = valueToSet;
    }
    switch (elem.type) {
        case 'checkbox':
            elem.checked = valueToSet;
            return valueToSet;
        case 'radio':
            // TODO: Improve this by replacing document with the context
            var radioToSelect = document.querySelector("[value=" + valueToSet + "]");
            radioToSelect.checked = true;
            return valueToSet;
        default:
            elem.value = valueToSet;
            return valueToSet;
    }
}
;
var cachedSetters = {};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvcGUtY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvcGUtZG91YmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3BlLWluLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3BlLW91dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QUksQ0FBQztZQUM3QixPQUFPLFVBQVUsQ0FBQztRQUN0QjtZQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1lBQ3hCLE9BQU8sVUFBVSxDQUFDO0tBQ3pCO0FBQ0wsQ0FBQztBQUNELENBQUM7QUFDTSxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgcm9wZU91dCB9IGZyb20gJy4vcm9wZS1vdXQnO1xuaW1wb3J0IHsgcm9wZUluIH0gZnJvbSAnLi9yb3BlLWluJztcbmltcG9ydCB7IHJvcGVEb3VibGUgfSBmcm9tICcuL3JvcGUtZG91YmxlJztcbmltcG9ydCB7IHJvcGVDbGFzcyB9IGZyb20gJy4vcm9wZS1jbGFzcyc7XG4vLyBVc2luZyBhIGRlY29yYXRvciwgYmVjYXVzZSBkZWNvcmF0b3JzIHJ1bGUuXG5leHBvcnQgZnVuY3Rpb24gUm9wZSgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG9yaWdpbmFsQ29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgICAgIHRzbGliXzEuX19leHRlbmRzKGNsYXNzXzEsIF9zdXBlcik7XG4gICAgICAgICAgICBmdW5jdGlvbiBjbGFzc18xKCkge1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJncykgfHwgdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgYm91bmRWYWx1ZXMgPSB7fTtcbiAgICAgICAgICAgICAgICByb3BlRG91YmxlKGJvdW5kVmFsdWVzLCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgcm9wZU91dChib3VuZFZhbHVlcywgX3RoaXMpO1xuICAgICAgICAgICAgICAgIHJvcGVJbihib3VuZFZhbHVlcywgX3RoaXMpO1xuICAgICAgICAgICAgICAgIHJvcGVDbGFzcyhib3VuZFZhbHVlcywgX3RoaXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjbGFzc18xO1xuICAgICAgICB9KG9yaWdpbmFsQ29uc3RydWN0b3IpKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgZ2V0RWxlbUFycmF5LCBjb252ZXJ0VG9Kc29uLCBjYWNoZWRTZXR0ZXJzIH0gZnJvbSAnLi91dGlscyc7XG5leHBvcnQgZnVuY3Rpb24gcm9wZUNsYXNzKGJvdW5kVmFsdWVzLCBjbGFzc0luc3RhbmNlKSB7XG4gICAgdmFyIHJvcGVDbGFzcyA9IGdldEVsZW1BcnJheSgnW3JvcGUtY2xhc3NdJyk7XG4gICAgcm9wZUNsYXNzLmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgdmFyIGNsYXNzQ29uZGl0aW9uT2JqZWN0ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ3JvcGUtY2xhc3MnKTtcbiAgICAgICAgdmFyIGNsYXNzSnNvbiA9IGNvbnZlcnRUb0pzb24oY2xhc3NDb25kaXRpb25PYmplY3QpO1xuICAgICAgICB2YXIgY2xhc3NWYXIgPSBPYmplY3Qua2V5cyhjbGFzc0pzb24pWzBdO1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gY2xhc3NKc29uW2NsYXNzVmFyXTtcbiAgICAgICAgZGVmaW5lQ2xhc3NCaW5kaW5nKGVsZW0sIGNsYXNzVmFyLCBjbGFzc05hbWUsIGJvdW5kVmFsdWVzLCBjbGFzc0luc3RhbmNlKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGRlZmluZUNsYXNzQmluZGluZyhlbGVtLCBjbGFzc1ZhciwgY2xhc3NOYW1lLCBib3VuZFZhbHVlcywgY2xhc3NJbnN0YW5jZSkge1xuICAgIC8vIEFkZCB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgcHJvcGVydHksIHRvIG91ciB2YWx1ZSBjYWNoZS5cbiAgICBib3VuZFZhbHVlc1tjbGFzc1Zhcl0gPSBib3VuZFZhbHVlc1tjbGFzc1Zhcl0gPyBib3VuZFZhbHVlc1tjbGFzc1Zhcl0gOiBjbGFzc0luc3RhbmNlW2NsYXNzVmFyXTtcbiAgICBzZXRDbGFzc0VsZW0oZWxlbSwgYm91bmRWYWx1ZXNbY2xhc3NWYXJdLCBjbGFzc05hbWUpO1xuICAgIHZhciBjbGFzc1NldHRlciA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICBib3VuZFZhbHVlc1tjbGFzc1Zhcl0gPSBuZXdWYWx1ZTtcbiAgICAgICAgc2V0Q2xhc3NFbGVtKGVsZW0sIG5ld1ZhbHVlLCBjbGFzc05hbWUpO1xuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfTtcbiAgICBpZiAoIWNhY2hlZFNldHRlcnNbY2xhc3NWYXJdKSB7XG4gICAgICAgIGNhY2hlZFNldHRlcnNbY2xhc3NWYXJdID0gW107XG4gICAgfVxuICAgIGNhY2hlZFNldHRlcnNbY2xhc3NWYXJdLnB1c2goY2xhc3NTZXR0ZXIpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc0luc3RhbmNlLCBjbGFzc1Zhciwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJvdW5kVmFsdWVzW2NsYXNzVmFyXTsgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldHRlcnNbY2xhc3NWYXJdLmZvckVhY2goZnVuY3Rpb24gKHNldHRlckZuKSB7IHJldHVybiBzZXR0ZXJGbihuZXdWYWx1ZSk7IH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzZXRDbGFzc0VsZW0oZWxlbSwgbmV3VmFsdWUsIGNsYXNzTmFtZSkge1xuICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbn1cbiIsImltcG9ydCB7IGdldEVsZW1BcnJheSwgc2V0Q2hhbmdlTGlzdGVuZXIsIHNldEVsZW0sIGNhY2hlZFNldHRlcnMgfSBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCBmdW5jdGlvbiByb3BlRG91YmxlKGJvdW5kVmFsdWVzLCBjbGFzc0luc3RhbmNlKSB7XG4gICAgdmFyIHJvcGVEb3VibGUgPSBnZXRFbGVtQXJyYXkoJ1tkYXRhLWctcm9wZV0nKTtcbiAgICByb3BlRG91YmxlLmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgLy8gVGhlIHZhbHVlIG9mIGVhY2ggZGF0YS1nLXJvcGUgYXR0cmlidXRlIHJlcHJlc2VudHMgdGhlIFxuICAgICAgICAvLyB2YXJpYWJsZSBuYW1lIHRoYXQgaXQncyBib3VuZCB0bywgaW4gdGhlIGNsYXNzIGluc3RhbmNlLlxuICAgICAgICAvLyBXZSB1c2UgaXQgYXMgYSBrZXkgdmFsdWUsIGluIHRoZSB2YWx1ZSBjYWNoZShib3VuZFZhbHVlcykgb2JqZWN0LCBhcyB3ZWxsLlxuICAgICAgICB2YXIgcHJvcE5hbWUgPSBlbGVtLmRhdGFzZXRbJ2dSb3BlJ107XG4gICAgICAgIGRlZmluZUJpbmRpbmcoZWxlbSwgcHJvcE5hbWUsIGJvdW5kVmFsdWVzLCBjbGFzc0luc3RhbmNlKTtcbiAgICB9KTtcbn1cbi8vIFRoZSBtZWF0IG9mIHRoZSBkZWNvcmF0b3IuXG4vLyBIZXJlIHdlIGRlZmluZSB0aGUgc2V0dGVyIGZvciB0aGUgY29ycmVzcG9uZGluZyBhdHRyaWJ1dGUgaW4gb3VyIGNsYXNzLFxuLy8gYXMgd2VsbCBhcyB0aGUgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBjb3JyZXNwb25kaW5nIGlucHV0IGVsZW1lbnQuXG5mdW5jdGlvbiBkZWZpbmVCaW5kaW5nKGVsZW0sIHByb3BOYW1lLCBib3VuZFZhbHVlcywgY2xhc3NJbnN0YW5jZSkge1xuICAgIC8vIEFkZCB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgcHJvcGVydHksIHRvIG91ciB2YWx1ZSBjYWNoZS5cbiAgICBib3VuZFZhbHVlc1twcm9wTmFtZV0gPSBib3VuZFZhbHVlc1twcm9wTmFtZV0gP1xuICAgICAgICBib3VuZFZhbHVlc1twcm9wTmFtZV0gOlxuICAgICAgICBjbGFzc0luc3RhbmNlW3Byb3BOYW1lXTtcbiAgICB2YXIgbmV3U2V0dGVyID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgIGJvdW5kVmFsdWVzW3Byb3BOYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgICByZXR1cm4gc2V0RWxlbShlbGVtLCBib3VuZFZhbHVlc1twcm9wTmFtZV0pO1xuICAgIH07XG4gICAgaWYgKCFjYWNoZWRTZXR0ZXJzW3Byb3BOYW1lXSkge1xuICAgICAgICBjYWNoZWRTZXR0ZXJzW3Byb3BOYW1lXSA9IFtdO1xuICAgIH1cbiAgICBjYWNoZWRTZXR0ZXJzW3Byb3BOYW1lXS5wdXNoKG5ld1NldHRlcik7XG4gICAgLy8gV2UgZGVmaW5lIHRoZSBnZXR0ZXIgYW5kIHNldHRlciBwcm9wZXJ0aWVzLlxuICAgIC8vIGZvciB0aGUgZ2V0dGVyIGFuZCBzZXR0ZXIsIHdlIHVzZSB0aGUgY2FjaGVkIHZhbHVlcyxcbiAgICAvLyBiZWNhdXNlIHdlIGRvbid0IHdhbnQgdG8gZmFsbCBpbnRvIGFuIGluZmluaXRlIGxvb3AgXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzSW5zdGFuY2UsIHByb3BOYW1lLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYm91bmRWYWx1ZXNbcHJvcE5hbWVdOyB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgY2FjaGVkU2V0dGVyc1twcm9wTmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoc2V0dGVyRm4pIHsgcmV0dXJuIHNldHRlckZuKG5ld1ZhbHVlKTsgfSk7XG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgLy8gU2V0IHRoZSBldmVudCBsaXN0ZW5lciwgdGhhdCBsaXN0ZW5zIHRvIHRoZSBjaGFuZ2UgZXZlbnQsXG4gICAgLy8gYW5kIHVwZGF0ZXMgb3VyIGNvcnJlc3BvbmRpbmcgY2xhc3MgcHJvcGVydHkuXG4gICAgc2V0Q2hhbmdlTGlzdGVuZXIoZWxlbSwgcHJvcE5hbWUsIGNsYXNzSW5zdGFuY2UpO1xuICAgIC8vIFNldCB0aGUgaW5pdGlhbCB2YWx1ZSwgdGhhdCBpcyBpbiB0aGUgY2xhc3MgcHJvcGVydHksIHRvIG91ciBlbGVtZW50LlxuICAgIHNldEVsZW0oZWxlbSwgYm91bmRWYWx1ZXNbcHJvcE5hbWVdKTtcbn1cbiIsImltcG9ydCB7IGdldEVsZW1BcnJheSwgc2V0Q2hhbmdlTGlzdGVuZXIsIGNhY2hlZFNldHRlcnMgfSBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCBmdW5jdGlvbiByb3BlSW4oYm91bmRWYWx1ZXMsIGNsYXNzSW5zdGFuY2UpIHtcbiAgICB2YXIgcm9wZUluRWxlbXMgPSBnZXRFbGVtQXJyYXkoJ1tyb3BlLWluXScpO1xuICAgIHJvcGVJbkVsZW1zLmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgdmFyIHByb3BOYW1lID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ3JvcGUtaW4nKTtcbiAgICAgICAgZGVmaW5lQmluZGluZyhlbGVtLCBwcm9wTmFtZSwgYm91bmRWYWx1ZXMsIGNsYXNzSW5zdGFuY2UpO1xuICAgIH0pO1xufVxuLy8gVGhlIG1lYXQgb2YgdGhlIGRlY29yYXRvci5cbi8vIEhlcmUgd2UgZGVmaW5lIHRoZSBzZXR0ZXIgZm9yIHRoZSBjb3JyZXNwb25kaW5nIGF0dHJpYnV0ZSBpbiBvdXIgY2xhc3MsXG4vLyBhcyB3ZWxsIGFzIHRoZSBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgaW5wdXQgZWxlbWVudC5cbmZ1bmN0aW9uIGRlZmluZUJpbmRpbmcoZWxlbSwgcHJvcE5hbWUsIGJvdW5kVmFsdWVzLCBjbGFzc0luc3RhbmNlKSB7XG4gICAgLy8gQWRkIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBwcm9wZXJ0eSwgdG8gb3VyIHZhbHVlIGNhY2hlLlxuICAgIGJvdW5kVmFsdWVzW3Byb3BOYW1lXSA9IGJvdW5kVmFsdWVzW3Byb3BOYW1lXSA/XG4gICAgICAgIGJvdW5kVmFsdWVzW3Byb3BOYW1lXSA6XG4gICAgICAgIGNsYXNzSW5zdGFuY2VbcHJvcE5hbWVdO1xuICAgIHZhciBuZXdTZXR0ZXIgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgYm91bmRWYWx1ZXNbcHJvcE5hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgIHJldHVybiBib3VuZFZhbHVlc1twcm9wTmFtZV07XG4gICAgfTtcbiAgICBpZiAoIWNhY2hlZFNldHRlcnNbcHJvcE5hbWVdKSB7XG4gICAgICAgIGNhY2hlZFNldHRlcnNbcHJvcE5hbWVdID0gW107XG4gICAgfVxuICAgIGNhY2hlZFNldHRlcnNbcHJvcE5hbWVdLnB1c2gobmV3U2V0dGVyKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NJbnN0YW5jZSwgcHJvcE5hbWUsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBib3VuZFZhbHVlc1twcm9wTmFtZV07IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXR0ZXJzW3Byb3BOYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChzZXR0ZXJGbikgeyByZXR1cm4gc2V0dGVyRm4obmV3VmFsdWUpOyB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIFNldCB0aGUgZXZlbnQgbGlzdGVuZXIsIHRoYXQgbGlzdGVucyB0byB0aGUgY2hhbmdlIGV2ZW50LFxuICAgIC8vIGFuZCB1cGRhdGVzIG91ciBjb3JyZXNwb25kaW5nIGNsYXNzIHByb3BlcnR5LlxuICAgIHNldENoYW5nZUxpc3RlbmVyKGVsZW0sIHByb3BOYW1lLCBjbGFzc0luc3RhbmNlKTtcbn1cbiIsImltcG9ydCB7IGdldEVsZW1BcnJheSwgc2V0RWxlbSwgY2FjaGVkU2V0dGVycyB9IGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IGZ1bmN0aW9uIHJvcGVPdXQoYm91bmRWYWx1ZXMsIGNsYXNzSW5zdGFuY2UpIHtcbiAgICB2YXIgcm9wZU91dEVsZW1zID0gZ2V0RWxlbUFycmF5KCdbcm9wZS1vdXRdJyk7XG4gICAgcm9wZU91dEVsZW1zLmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgdmFyIHByb3BOYW1lID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ3JvcGUtb3V0Jyk7XG4gICAgICAgIGRlZmluZUJpbmRpbmcoZWxlbSwgcHJvcE5hbWUsIGJvdW5kVmFsdWVzLCBjbGFzc0luc3RhbmNlKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGRlZmluZUJpbmRpbmcoZWxlbSwgcHJvcE5hbWUsIGJvdW5kVmFsdWVzLCBjbGFzc0luc3RhbmNlKSB7XG4gICAgLy8gQWRkIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBwcm9wZXJ0eSwgdG8gb3VyIHZhbHVlIGNhY2hlLlxuICAgIGJvdW5kVmFsdWVzW3Byb3BOYW1lXSA9IGJvdW5kVmFsdWVzW3Byb3BOYW1lXSA/XG4gICAgICAgIGJvdW5kVmFsdWVzW3Byb3BOYW1lXSA6XG4gICAgICAgIGNsYXNzSW5zdGFuY2VbcHJvcE5hbWVdO1xuICAgIHZhciBuZXdTZXR0ZXIgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgYm91bmRWYWx1ZXNbcHJvcE5hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgIHJldHVybiBzZXRFbGVtKGVsZW0sIGJvdW5kVmFsdWVzW3Byb3BOYW1lXSk7XG4gICAgfTtcbiAgICBpZiAoIWNhY2hlZFNldHRlcnNbcHJvcE5hbWVdKSB7XG4gICAgICAgIGNhY2hlZFNldHRlcnNbcHJvcE5hbWVdID0gW107XG4gICAgfVxuICAgIGNhY2hlZFNldHRlcnNbcHJvcE5hbWVdLnB1c2gobmV3U2V0dGVyKTtcbiAgICAvLyBXZSBkZWZpbmUgdGhlIGdldHRlciBhbmQgc2V0dGVyIHByb3BlcnRpZXMuXG4gICAgLy8gZm9yIHRoZSBnZXR0ZXIgYW5kIHNldHRlciwgd2UgdXNlIHRoZSBjYWNoZWQgdmFsdWVzLFxuICAgIC8vIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCB0byBmYWxsIGludG8gYW4gaW5maW5pdGUgbG9vcCBcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NJbnN0YW5jZSwgcHJvcE5hbWUsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBib3VuZFZhbHVlc1twcm9wTmFtZV07IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXR0ZXJzW3Byb3BOYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChzZXR0ZXJGbikgeyByZXR1cm4gc2V0dGVyRm4obmV3VmFsdWUpOyB9KTtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICAvLyBTZXQgdGhlIGluaXRpYWwgdmFsdWUsIHRoYXQgaXMgaW4gdGhlIGNsYXNzIHByb3BlcnR5LCB0byBvdXIgZWxlbWVudC5cbiAgICBzZXRFbGVtKGVsZW0sIGJvdW5kVmFsdWVzW3Byb3BOYW1lXSk7XG59XG4iLCIvLyBIZWxwZXIgbWV0aG9kLCBmb3IgZ2V0dGluZyBhbGwgb2YgdGhlIGVsZW1lbnRzIHdpdGggdGhlIGRhdGEtZy1yb3BlIGF0dHJpYnV0ZSBvbiB0aGVtLCB0aHJvdWdoIGEgcXVlcnkgc2VsZWN0b3IuXG4vLyBBbmQgY29udmVydGluZyB0aGF0IHRvIGFuIGFycmF5LCBiZWZvcmUgcmV0dXJuaW5nIGl0IGZvciBlYXNpZXIgaGFuZGxpbmcuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbUFycmF5KHNlbGVjdG9yKSB7XG4gICAgdmFyIGVsZW1lbnROb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIHZhciBlbGVtZW50QXJyYXkgPSBbXS5zbGljZS5jYWxsKGVsZW1lbnROb2Rlcyk7XG4gICAgcmV0dXJuIGVsZW1lbnRBcnJheTtcbn1cbi8vIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgb24gdGhlIGlucHV0IGVsZW1lbnQsXG4vLyB0aGF0IGNoYW5nZXMgdGhlIGRhdGEgbW9kZWwsIHdoZW4gdGhlIGlucHV0IHVwZGF0ZXNcbmV4cG9ydCBmdW5jdGlvbiBzZXRDaGFuZ2VMaXN0ZW5lcihlbGVtLCBwcm9wTmFtZSwgY2xhc3NJbnN0YW5jZSkge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRFbGVtID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgdmFyIGVsZW1UeXBlID0gY3VycmVudEVsZW0udHlwZTtcbiAgICAgICAgc3dpdGNoIChlbGVtVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgIGNsYXNzSW5zdGFuY2VbcHJvcE5hbWVdID0gZWxlbS5jaGVja2VkO1xuICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc0luc3RhbmNlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjbGFzc0luc3RhbmNlW3Byb3BOYW1lXSA9IGVsZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzSW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIFRPRE86IENoZWNrIGlmIHlvdSBjYW4gaW1wcm92ZSB0aGlzLlxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb0pzb24oY2xhc3NDb25kaXRpb25PYmplY3QpIHtcbiAgICB2YXIganNvbnRlbXAgPSBjbGFzc0NvbmRpdGlvbk9iamVjdC5yZXBsYWNlKCgvKFtcXHddKykoOikvZyksIFwiXFxcIiQxXFxcIiQyXCIpO1xuICAgIHZhciBjb3JyZWN0anNvbiA9IGpzb250ZW1wLnJlcGxhY2UoKC8nL2cpLCBcIlxcXCJcIik7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoY29ycmVjdGpzb24pO1xufVxuLy8gSGVscGVyIG1ldGhvZCBmb3Igc2V0dGluZyB0aGUgaW5pdGFsIHZhbHVlLCBpZiBhbHJlYWR5IHNldCBpbiB0aGUgbW9kZWwuXG5leHBvcnQgZnVuY3Rpb24gc2V0RWxlbShlbGVtLCB2YWx1ZVRvU2V0KSB7XG4gICAgaWYgKGVsZW0udGFnTmFtZSAhPT0gJ0lOUFVUJyAmJlxuICAgICAgICBlbGVtLnRhZ05hbWUgIT09ICdTRUxFQ1QnKSB7XG4gICAgICAgIGVsZW0udGV4dENvbnRlbnQgPSB2YWx1ZVRvU2V0O1xuICAgIH1cbiAgICBzd2l0Y2ggKGVsZW0udHlwZSkge1xuICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICBlbGVtLmNoZWNrZWQgPSB2YWx1ZVRvU2V0O1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9TZXQ7XG4gICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICAgIC8vIFRPRE86IEltcHJvdmUgdGhpcyBieSByZXBsYWNpbmcgZG9jdW1lbnQgd2l0aCB0aGUgY29udGV4dFxuICAgICAgICAgICAgdmFyIHJhZGlvVG9TZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW3ZhbHVlPVwiICsgdmFsdWVUb1NldCArIFwiXVwiKTtcbiAgICAgICAgICAgIHJhZGlvVG9TZWxlY3QuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb1NldDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGVsZW0udmFsdWUgPSB2YWx1ZVRvU2V0O1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9TZXQ7XG4gICAgfVxufVxuO1xuZXhwb3J0IHZhciBjYWNoZWRTZXR0ZXJzID0ge307XG4iXSwic291cmNlUm9vdCI6IiJ9