webpackJsonp([0],{

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __extends */
/* unused harmony export __assign */
/* unused harmony export __rest */
/* harmony export (immutable) */ __webpack_exports__["a"] = __decorate;
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
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

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

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
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};

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
};

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
};

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), q = [], c, i;
    return i = { next: verb("next"), "throw": verb("throw"), "return": verb("return") }, i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { return function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]), next(); }); }; }
    function next() { if (!c && q.length) resume((c = q.shift())[0], c[1]); }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(c[3], e); } }
    function step(r) { r.done ? settle(c[2], r) : r.value[0] === "yield" ? settle(c[2], { value: r.value[1], done: false }) : Promise.resolve(r.value[1]).then(r.value[0] === "delegate" ? delegate : fulfill, reject); }
    function delegate(r) { step(r.done ? r : { value: ["yield", r.value], done: false }); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { c = void 0, f(v), next(); }
};

function __asyncDelegator(o) {
    var i = { next: verb("next"), "throw": verb("throw", function (e) { throw e; }), "return": verb("return", function (v) { return { value: v, done: true }; }) };
    return o = __asyncValues(o), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { return function (v) { return { value: ["delegate", (o[n] || f).call(o, v)], done: false }; }; }
};

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
};

/***/ }),

/***/ "customElements/hello-tag":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloTagCustomElement", function() { return HelloTagCustomElement; });


var HelloTagCustomElement = (function () {
    function HelloTagCustomElement() {
    }
    return HelloTagCustomElement;
}());

__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_1_aurelia_framework__["b" /* bindable */]
], HelloTagCustomElement.prototype, "name", void 0);


/***/ }),

/***/ "customElements/hello-tag.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n  <div class=\"tag-header\">\r\n    HELLO<br>\r\n    MY NAME IS\r\n  </div>\r\n  <div class=\"tag-body\">${name}</div>\r\n</template>";

/***/ }),

/***/ "page-hello":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHelloViewModel", function() { return PageHelloViewModel; });
var PageHelloViewModel = (function () {
    function PageHelloViewModel() {
        this.name = '';
    }
    return PageHelloViewModel;
}());



/***/ }),

/***/ "page-hello.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n  <require from=\"customElements/hello-tag\"></require>\r\n\r\n  <h3>Hello page</h3>\r\n\r\n  <div>\r\n    What's your name? <br>\r\n    <input value.bind=\"name\" />\r\n  </div>\r\n\r\n  <hello-tag name.bind=\"name | upper\" if.bind=\"name\"></hello-tag>  \r\n</template>";

/***/ })

});