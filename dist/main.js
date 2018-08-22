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
        if (classConditionObject) {
            var classJson = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["convertToJson"])(classConditionObject);
            var classVar = Object.keys(classJson)[0];
            var className = classJson[classVar];
            defineClassBinding(elem, classVar, className, boundValues, classInstance);
        }
    });
}
function defineClassBinding(elem, classVar, className, boundValues, classInstance) {
    // Add the current value of the property, to our value cache.
    boundValues[classVar] = boundValues[classVar] ?
        boundValues[classVar] :
        classInstance[classVar];
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
        if (currentElem) {
            var elemType = currentElem.type;
            switch (elemType) {
                case 'checkbox':
                    classInstance[propName] = elem.checked;
                    return classInstance;
                default:
                    classInstance[propName] = elem.value;
                    return classInstance;
            }
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
    var inputElement = elem;
    switch (inputElement.type) {
        case 'checkbox':
            inputElement.checked = valueToSet;
            return valueToSet;
        case 'radio':
            // TODO: Improve this by replacing document with the context
            var radioToSelect = document.querySelector("[value=" + valueToSet + "]");
            radioToSelect.checked = true;
            return valueToSet;
        default:
            inputElement.value = valueToSet;
            return valueToSet;
    }
}
;
var cachedSetters = {};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvcGUtY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvcGUtZG91YmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3BlLWluLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3BlLW91dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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LEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3pFLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQzdCLE9BQU8sVUFBVSxDQUFDO1FBQ3RCO1lBQ0ksWUFBWSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7WUFDaEMsT0FBTyxVQUFVLENBQUM7S0FDekI7QUFDTCxDQUFDO0FBQ0QsQ0FBQztBQUNNLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyByb3BlT3V0IH0gZnJvbSAnLi9yb3BlLW91dCc7XG5pbXBvcnQgeyByb3BlSW4gfSBmcm9tICcuL3JvcGUtaW4nO1xuaW1wb3J0IHsgcm9wZURvdWJsZSB9IGZyb20gJy4vcm9wZS1kb3VibGUnO1xuaW1wb3J0IHsgcm9wZUNsYXNzIH0gZnJvbSAnLi9yb3BlLWNsYXNzJztcbi8vIFVzaW5nIGEgZGVjb3JhdG9yLCBiZWNhdXNlIGRlY29yYXRvcnMgcnVsZS5cbmV4cG9ydCBmdW5jdGlvbiBSb3BlKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAob3JpZ2luYWxDb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICAgICAgdHNsaWJfMS5fX2V4dGVuZHMoY2xhc3NfMSwgX3N1cGVyKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsYXNzXzEoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmdzKSB8fCB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciBib3VuZFZhbHVlcyA9IHt9O1xuICAgICAgICAgICAgICAgIHJvcGVEb3VibGUoYm91bmRWYWx1ZXMsIF90aGlzKTtcbiAgICAgICAgICAgICAgICByb3BlT3V0KGJvdW5kVmFsdWVzLCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgcm9wZUluKGJvdW5kVmFsdWVzLCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgcm9wZUNsYXNzKGJvdW5kVmFsdWVzLCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzXzE7XG4gICAgICAgIH0ob3JpZ2luYWxDb25zdHJ1Y3RvcikpO1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBnZXRFbGVtQXJyYXksIGNvbnZlcnRUb0pzb24sIGNhY2hlZFNldHRlcnMgfSBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCBmdW5jdGlvbiByb3BlQ2xhc3MoYm91bmRWYWx1ZXMsIGNsYXNzSW5zdGFuY2UpIHtcbiAgICB2YXIgcm9wZUNsYXNzID0gZ2V0RWxlbUFycmF5KCdbcm9wZS1jbGFzc10nKTtcbiAgICByb3BlQ2xhc3MuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICB2YXIgY2xhc3NDb25kaXRpb25PYmplY3QgPSBlbGVtLmdldEF0dHJpYnV0ZSgncm9wZS1jbGFzcycpO1xuICAgICAgICBpZiAoY2xhc3NDb25kaXRpb25PYmplY3QpIHtcbiAgICAgICAgICAgIHZhciBjbGFzc0pzb24gPSBjb252ZXJ0VG9Kc29uKGNsYXNzQ29uZGl0aW9uT2JqZWN0KTtcbiAgICAgICAgICAgIHZhciBjbGFzc1ZhciA9IE9iamVjdC5rZXlzKGNsYXNzSnNvbilbMF07XG4gICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gY2xhc3NKc29uW2NsYXNzVmFyXTtcbiAgICAgICAgICAgIGRlZmluZUNsYXNzQmluZGluZyhlbGVtLCBjbGFzc1ZhciwgY2xhc3NOYW1lLCBib3VuZFZhbHVlcywgY2xhc3NJbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGRlZmluZUNsYXNzQmluZGluZyhlbGVtLCBjbGFzc1ZhciwgY2xhc3NOYW1lLCBib3VuZFZhbHVlcywgY2xhc3NJbnN0YW5jZSkge1xuICAgIC8vIEFkZCB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgcHJvcGVydHksIHRvIG91ciB2YWx1ZSBjYWNoZS5cbiAgICBib3VuZFZhbHVlc1tjbGFzc1Zhcl0gPSBib3VuZFZhbHVlc1tjbGFzc1Zhcl0gP1xuICAgICAgICBib3VuZFZhbHVlc1tjbGFzc1Zhcl0gOlxuICAgICAgICBjbGFzc0luc3RhbmNlW2NsYXNzVmFyXTtcbiAgICBzZXRDbGFzc0VsZW0oZWxlbSwgYm91bmRWYWx1ZXNbY2xhc3NWYXJdLCBjbGFzc05hbWUpO1xuICAgIHZhciBjbGFzc1NldHRlciA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICBib3VuZFZhbHVlc1tjbGFzc1Zhcl0gPSBuZXdWYWx1ZTtcbiAgICAgICAgc2V0Q2xhc3NFbGVtKGVsZW0sIG5ld1ZhbHVlLCBjbGFzc05hbWUpO1xuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfTtcbiAgICBpZiAoIWNhY2hlZFNldHRlcnNbY2xhc3NWYXJdKSB7XG4gICAgICAgIGNhY2hlZFNldHRlcnNbY2xhc3NWYXJdID0gW107XG4gICAgfVxuICAgIGNhY2hlZFNldHRlcnNbY2xhc3NWYXJdLnB1c2goY2xhc3NTZXR0ZXIpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc0luc3RhbmNlLCBjbGFzc1Zhciwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJvdW5kVmFsdWVzW2NsYXNzVmFyXTsgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldHRlcnNbY2xhc3NWYXJdLmZvckVhY2goZnVuY3Rpb24gKHNldHRlckZuKSB7IHJldHVybiBzZXR0ZXJGbihuZXdWYWx1ZSk7IH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzZXRDbGFzc0VsZW0oZWxlbSwgbmV3VmFsdWUsIGNsYXNzTmFtZSkge1xuICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbn1cbiIsImltcG9ydCB7IGdldEVsZW1BcnJheSwgc2V0Q2hhbmdlTGlzdGVuZXIsIHNldEVsZW0sIGNhY2hlZFNldHRlcnMgfSBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCBmdW5jdGlvbiByb3BlRG91YmxlKGJvdW5kVmFsdWVzLCBjbGFzc0luc3RhbmNlKSB7XG4gICAgdmFyIHJvcGVEb3VibGUgPSBnZXRFbGVtQXJyYXkoJ1tkYXRhLWctcm9wZV0nKTtcbiAgICByb3BlRG91YmxlLmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgLy8gVGhlIHZhbHVlIG9mIGVhY2ggZGF0YS1nLXJvcGUgYXR0cmlidXRlIHJlcHJlc2VudHMgdGhlIFxuICAgICAgICAvLyB2YXJpYWJsZSBuYW1lIHRoYXQgaXQncyBib3VuZCB0bywgaW4gdGhlIGNsYXNzIGluc3RhbmNlLlxuICAgICAgICAvLyBXZSB1c2UgaXQgYXMgYSBrZXkgdmFsdWUsIGluIHRoZSB2YWx1ZSBjYWNoZShib3VuZFZhbHVlcykgb2JqZWN0LCBhcyB3ZWxsLlxuICAgICAgICB2YXIgcHJvcE5hbWUgPSBlbGVtLmRhdGFzZXRbJ2dSb3BlJ107XG4gICAgICAgIGRlZmluZUJpbmRpbmcoZWxlbSwgcHJvcE5hbWUsIGJvdW5kVmFsdWVzLCBjbGFzc0luc3RhbmNlKTtcbiAgICB9KTtcbn1cbi8vIFRoZSBtZWF0IG9mIHRoZSBkZWNvcmF0b3IuXG4vLyBIZXJlIHdlIGRlZmluZSB0aGUgc2V0dGVyIGZvciB0aGUgY29ycmVzcG9uZGluZyBhdHRyaWJ1dGUgaW4gb3VyIGNsYXNzLFxuLy8gYXMgd2VsbCBhcyB0aGUgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBjb3JyZXNwb25kaW5nIGlucHV0IGVsZW1lbnQuXG5mdW5jdGlvbiBkZWZpbmVCaW5kaW5nKGVsZW0sIHByb3BOYW1lLCBib3VuZFZhbHVlcywgY2xhc3NJbnN0YW5jZSkge1xuICAgIC8vIEFkZCB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgcHJvcGVydHksIHRvIG91ciB2YWx1ZSBjYWNoZS5cbiAgICBib3VuZFZhbHVlc1twcm9wTmFtZV0gPSBib3VuZFZhbHVlc1twcm9wTmFtZV0gP1xuICAgICAgICBib3VuZFZhbHVlc1twcm9wTmFtZV0gOlxuICAgICAgICBjbGFzc0luc3RhbmNlW3Byb3BOYW1lXTtcbiAgICB2YXIgbmV3U2V0dGVyID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgIGJvdW5kVmFsdWVzW3Byb3BOYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgICByZXR1cm4gc2V0RWxlbShlbGVtLCBib3VuZFZhbHVlc1twcm9wTmFtZV0pO1xuICAgIH07XG4gICAgaWYgKCFjYWNoZWRTZXR0ZXJzW3Byb3BOYW1lXSkge1xuICAgICAgICBjYWNoZWRTZXR0ZXJzW3Byb3BOYW1lXSA9IFtdO1xuICAgIH1cbiAgICBjYWNoZWRTZXR0ZXJzW3Byb3BOYW1lXS5wdXNoKG5ld1NldHRlcik7XG4gICAgLy8gV2UgZGVmaW5lIHRoZSBnZXR0ZXIgYW5kIHNldHRlciBwcm9wZXJ0aWVzLlxuICAgIC8vIGZvciB0aGUgZ2V0dGVyIGFuZCBzZXR0ZXIsIHdlIHVzZSB0aGUgY2FjaGVkIHZhbHVlcyxcbiAgICAvLyBiZWNhdXNlIHdlIGRvbid0IHdhbnQgdG8gZmFsbCBpbnRvIGFuIGluZmluaXRlIGxvb3AgXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzSW5zdGFuY2UsIHByb3BOYW1lLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYm91bmRWYWx1ZXNbcHJvcE5hbWVdOyB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgY2FjaGVkU2V0dGVyc1twcm9wTmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoc2V0dGVyRm4pIHsgcmV0dXJuIHNldHRlckZuKG5ld1ZhbHVlKTsgfSk7XG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgLy8gU2V0IHRoZSBldmVudCBsaXN0ZW5lciwgdGhhdCBsaXN0ZW5zIHRvIHRoZSBjaGFuZ2UgZXZlbnQsXG4gICAgLy8gYW5kIHVwZGF0ZXMgb3VyIGNvcnJlc3BvbmRpbmcgY2xhc3MgcHJvcGVydHkuXG4gICAgc2V0Q2hhbmdlTGlzdGVuZXIoZWxlbSwgcHJvcE5hbWUsIGNsYXNzSW5zdGFuY2UpO1xuICAgIC8vIFNldCB0aGUgaW5pdGlhbCB2YWx1ZSwgdGhhdCBpcyBpbiB0aGUgY2xhc3MgcHJvcGVydHksIHRvIG91ciBlbGVtZW50LlxuICAgIHNldEVsZW0oZWxlbSwgYm91bmRWYWx1ZXNbcHJvcE5hbWVdKTtcbn1cbiIsImltcG9ydCB7IGdldEVsZW1BcnJheSwgc2V0Q2hhbmdlTGlzdGVuZXIsIGNhY2hlZFNldHRlcnMgfSBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCBmdW5jdGlvbiByb3BlSW4oYm91bmRWYWx1ZXMsIGNsYXNzSW5zdGFuY2UpIHtcbiAgICB2YXIgcm9wZUluRWxlbXMgPSBnZXRFbGVtQXJyYXkoJ1tyb3BlLWluXScpO1xuICAgIHJvcGVJbkVsZW1zLmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgdmFyIHByb3BOYW1lID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ3JvcGUtaW4nKTtcbiAgICAgICAgZGVmaW5lQmluZGluZyhlbGVtLCBwcm9wTmFtZSwgYm91bmRWYWx1ZXMsIGNsYXNzSW5zdGFuY2UpO1xuICAgIH0pO1xufVxuLy8gVGhlIG1lYXQgb2YgdGhlIGRlY29yYXRvci5cbi8vIEhlcmUgd2UgZGVmaW5lIHRoZSBzZXR0ZXIgZm9yIHRoZSBjb3JyZXNwb25kaW5nIGF0dHJpYnV0ZSBpbiBvdXIgY2xhc3MsXG4vLyBhcyB3ZWxsIGFzIHRoZSBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgaW5wdXQgZWxlbWVudC5cbmZ1bmN0aW9uIGRlZmluZUJpbmRpbmcoZWxlbSwgcHJvcE5hbWUsIGJvdW5kVmFsdWVzLCBjbGFzc0luc3RhbmNlKSB7XG4gICAgLy8gQWRkIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBwcm9wZXJ0eSwgdG8gb3VyIHZhbHVlIGNhY2hlLlxuICAgIGJvdW5kVmFsdWVzW3Byb3BOYW1lXSA9IGJvdW5kVmFsdWVzW3Byb3BOYW1lXSA/XG4gICAgICAgIGJvdW5kVmFsdWVzW3Byb3BOYW1lXSA6XG4gICAgICAgIGNsYXNzSW5zdGFuY2VbcHJvcE5hbWVdO1xuICAgIHZhciBuZXdTZXR0ZXIgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgYm91bmRWYWx1ZXNbcHJvcE5hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgIHJldHVybiBib3VuZFZhbHVlc1twcm9wTmFtZV07XG4gICAgfTtcbiAgICBpZiAoIWNhY2hlZFNldHRlcnNbcHJvcE5hbWVdKSB7XG4gICAgICAgIGNhY2hlZFNldHRlcnNbcHJvcE5hbWVdID0gW107XG4gICAgfVxuICAgIGNhY2hlZFNldHRlcnNbcHJvcE5hbWVdLnB1c2gobmV3U2V0dGVyKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NJbnN0YW5jZSwgcHJvcE5hbWUsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBib3VuZFZhbHVlc1twcm9wTmFtZV07IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXR0ZXJzW3Byb3BOYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChzZXR0ZXJGbikgeyByZXR1cm4gc2V0dGVyRm4obmV3VmFsdWUpOyB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIFNldCB0aGUgZXZlbnQgbGlzdGVuZXIsIHRoYXQgbGlzdGVucyB0byB0aGUgY2hhbmdlIGV2ZW50LFxuICAgIC8vIGFuZCB1cGRhdGVzIG91ciBjb3JyZXNwb25kaW5nIGNsYXNzIHByb3BlcnR5LlxuICAgIHNldENoYW5nZUxpc3RlbmVyKGVsZW0sIHByb3BOYW1lLCBjbGFzc0luc3RhbmNlKTtcbn1cbiIsImltcG9ydCB7IGdldEVsZW1BcnJheSwgc2V0RWxlbSwgY2FjaGVkU2V0dGVycyB9IGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IGZ1bmN0aW9uIHJvcGVPdXQoYm91bmRWYWx1ZXMsIGNsYXNzSW5zdGFuY2UpIHtcbiAgICB2YXIgcm9wZU91dEVsZW1zID0gZ2V0RWxlbUFycmF5KCdbcm9wZS1vdXRdJyk7XG4gICAgcm9wZU91dEVsZW1zLmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgdmFyIHByb3BOYW1lID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ3JvcGUtb3V0Jyk7XG4gICAgICAgIGRlZmluZUJpbmRpbmcoZWxlbSwgcHJvcE5hbWUsIGJvdW5kVmFsdWVzLCBjbGFzc0luc3RhbmNlKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGRlZmluZUJpbmRpbmcoZWxlbSwgcHJvcE5hbWUsIGJvdW5kVmFsdWVzLCBjbGFzc0luc3RhbmNlKSB7XG4gICAgLy8gQWRkIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBwcm9wZXJ0eSwgdG8gb3VyIHZhbHVlIGNhY2hlLlxuICAgIGJvdW5kVmFsdWVzW3Byb3BOYW1lXSA9IGJvdW5kVmFsdWVzW3Byb3BOYW1lXSA/XG4gICAgICAgIGJvdW5kVmFsdWVzW3Byb3BOYW1lXSA6XG4gICAgICAgIGNsYXNzSW5zdGFuY2VbcHJvcE5hbWVdO1xuICAgIHZhciBuZXdTZXR0ZXIgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgYm91bmRWYWx1ZXNbcHJvcE5hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgIHJldHVybiBzZXRFbGVtKGVsZW0sIGJvdW5kVmFsdWVzW3Byb3BOYW1lXSk7XG4gICAgfTtcbiAgICBpZiAoIWNhY2hlZFNldHRlcnNbcHJvcE5hbWVdKSB7XG4gICAgICAgIGNhY2hlZFNldHRlcnNbcHJvcE5hbWVdID0gW107XG4gICAgfVxuICAgIGNhY2hlZFNldHRlcnNbcHJvcE5hbWVdLnB1c2gobmV3U2V0dGVyKTtcbiAgICAvLyBXZSBkZWZpbmUgdGhlIGdldHRlciBhbmQgc2V0dGVyIHByb3BlcnRpZXMuXG4gICAgLy8gZm9yIHRoZSBnZXR0ZXIgYW5kIHNldHRlciwgd2UgdXNlIHRoZSBjYWNoZWQgdmFsdWVzLFxuICAgIC8vIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCB0byBmYWxsIGludG8gYW4gaW5maW5pdGUgbG9vcCBcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NJbnN0YW5jZSwgcHJvcE5hbWUsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBib3VuZFZhbHVlc1twcm9wTmFtZV07IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXR0ZXJzW3Byb3BOYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChzZXR0ZXJGbikgeyByZXR1cm4gc2V0dGVyRm4obmV3VmFsdWUpOyB9KTtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICAvLyBTZXQgdGhlIGluaXRpYWwgdmFsdWUsIHRoYXQgaXMgaW4gdGhlIGNsYXNzIHByb3BlcnR5LCB0byBvdXIgZWxlbWVudC5cbiAgICBzZXRFbGVtKGVsZW0sIGJvdW5kVmFsdWVzW3Byb3BOYW1lXSk7XG59XG4iLCIvLyBIZWxwZXIgbWV0aG9kLCBmb3IgZ2V0dGluZyBhbGwgb2YgdGhlIGVsZW1lbnRzIHdpdGggdGhlIGRhdGEtZy1yb3BlIGF0dHJpYnV0ZSBvbiB0aGVtLCB0aHJvdWdoIGEgcXVlcnkgc2VsZWN0b3IuXG4vLyBBbmQgY29udmVydGluZyB0aGF0IHRvIGFuIGFycmF5LCBiZWZvcmUgcmV0dXJuaW5nIGl0IGZvciBlYXNpZXIgaGFuZGxpbmcuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbUFycmF5KHNlbGVjdG9yKSB7XG4gICAgdmFyIGVsZW1lbnROb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIHZhciBlbGVtZW50QXJyYXkgPSBbXS5zbGljZS5jYWxsKGVsZW1lbnROb2Rlcyk7XG4gICAgcmV0dXJuIGVsZW1lbnRBcnJheTtcbn1cbi8vIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgb24gdGhlIGlucHV0IGVsZW1lbnQsXG4vLyB0aGF0IGNoYW5nZXMgdGhlIGRhdGEgbW9kZWwsIHdoZW4gdGhlIGlucHV0IHVwZGF0ZXNcbmV4cG9ydCBmdW5jdGlvbiBzZXRDaGFuZ2VMaXN0ZW5lcihlbGVtLCBwcm9wTmFtZSwgY2xhc3NJbnN0YW5jZSkge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRFbGVtID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgaWYgKGN1cnJlbnRFbGVtKSB7XG4gICAgICAgICAgICB2YXIgZWxlbVR5cGUgPSBjdXJyZW50RWxlbS50eXBlO1xuICAgICAgICAgICAgc3dpdGNoIChlbGVtVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NJbnN0YW5jZVtwcm9wTmFtZV0gPSBlbGVtLmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc0luc3RhbmNlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzSW5zdGFuY2VbcHJvcE5hbWVdID0gZWxlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzSW5zdGFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIFRPRE86IENoZWNrIGlmIHlvdSBjYW4gaW1wcm92ZSB0aGlzLlxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb0pzb24oY2xhc3NDb25kaXRpb25PYmplY3QpIHtcbiAgICB2YXIganNvbnRlbXAgPSBjbGFzc0NvbmRpdGlvbk9iamVjdC5yZXBsYWNlKCgvKFtcXHddKykoOikvZyksIFwiXFxcIiQxXFxcIiQyXCIpO1xuICAgIHZhciBjb3JyZWN0anNvbiA9IGpzb250ZW1wLnJlcGxhY2UoKC8nL2cpLCBcIlxcXCJcIik7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoY29ycmVjdGpzb24pO1xufVxuLy8gSGVscGVyIG1ldGhvZCBmb3Igc2V0dGluZyB0aGUgaW5pdGFsIHZhbHVlLCBpZiBhbHJlYWR5IHNldCBpbiB0aGUgbW9kZWwuXG5leHBvcnQgZnVuY3Rpb24gc2V0RWxlbShlbGVtLCB2YWx1ZVRvU2V0KSB7XG4gICAgaWYgKGVsZW0udGFnTmFtZSAhPT0gJ0lOUFVUJyAmJlxuICAgICAgICBlbGVtLnRhZ05hbWUgIT09ICdTRUxFQ1QnKSB7XG4gICAgICAgIGVsZW0udGV4dENvbnRlbnQgPSB2YWx1ZVRvU2V0O1xuICAgIH1cbiAgICB2YXIgaW5wdXRFbGVtZW50ID0gZWxlbTtcbiAgICBzd2l0Y2ggKGlucHV0RWxlbWVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgIGlucHV0RWxlbWVudC5jaGVja2VkID0gdmFsdWVUb1NldDtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVRvU2V0O1xuICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgICAvLyBUT0RPOiBJbXByb3ZlIHRoaXMgYnkgcmVwbGFjaW5nIGRvY3VtZW50IHdpdGggdGhlIGNvbnRleHRcbiAgICAgICAgICAgIHZhciByYWRpb1RvU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIlt2YWx1ZT1cIiArIHZhbHVlVG9TZXQgKyBcIl1cIik7XG4gICAgICAgICAgICByYWRpb1RvU2VsZWN0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9TZXQ7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSB2YWx1ZVRvU2V0O1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9TZXQ7XG4gICAgfVxufVxuO1xuZXhwb3J0IHZhciBjYWNoZWRTZXR0ZXJzID0ge307XG4iXSwic291cmNlUm9vdCI6IiJ9