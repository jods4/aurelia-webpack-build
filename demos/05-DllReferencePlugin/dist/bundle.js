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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/aurelia-bootstrapper/dist/native-modules/aurelia-bootstrapper.js":
/*!************************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-bootstrapper/dist/native-modules/aurelia-bootstrapper.js from dll-reference vendor_facd179997931a05afa9 ***!
  \************************************************************************************************************************************************/
/*! exports provided: bootstrap, starting */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-bootstrapper/dist/native-modules/aurelia-bootstrapper.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-bootstrapper/dist/native-modules/aurelia-bootstrapper.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "./node_modules/aurelia-loader-webpack/dist/native-modules/aurelia-loader-webpack.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/aurelia-loader-webpack/dist/native-modules/aurelia-loader-webpack.js ***!
  \*******************************************************************************************/
/*! exports provided: TextTemplateLoader, ensureOriginOnExports, WebpackLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextTemplateLoader\", function() { return TextTemplateLoader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ensureOriginOnExports\", function() { return ensureOriginOnExports; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WebpackLoader\", function() { return WebpackLoader; });\n/* harmony import */ var aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-metadata */ \"./node_modules/aurelia-metadata/dist/native-modules/aurelia-metadata.js\");\n/* harmony import */ var aurelia_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-loader */ \"./node_modules/aurelia-loader/dist/native-modules/aurelia-loader.js\");\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-pal */ \"./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js\");\nvar __extends = (undefined && undefined.__extends) || function (d, b) {\n    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];\n    function __() { this.constructor = d; }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n};\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;\n    return { next: verb(0), \"throw\": verb(1), \"return\": verb(2) };\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = y[op[0] & 2 ? \"return\" : op[0] ? \"throw\" : \"next\"]) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [0, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\n/**\n* An implementation of the TemplateLoader interface implemented with text-based loading.\n*/\nvar TextTemplateLoader = (function () {\n    function TextTemplateLoader() {\n    }\n    /**\n    * Loads a template.\n    * @param loader The loader that is requesting the template load.\n    * @param entry The TemplateRegistryEntry to load and populate with a template.\n    * @return A promise which resolves when the TemplateRegistryEntry is loaded with a template.\n    */\n    TextTemplateLoader.prototype.loadTemplate = function (loader, entry) {\n        return __awaiter(this, void 0, void 0, function () {\n            var text;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, loader.loadText(entry.address)];\n                    case 1:\n                        text = _a.sent();\n                        entry.template = aurelia_pal__WEBPACK_IMPORTED_MODULE_2__[\"DOM\"].createTemplateFromMarkup(text);\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    return TextTemplateLoader;\n}());\n\nfunction ensureOriginOnExports(moduleExports, moduleId) {\n    var target = moduleExports;\n    var key;\n    var exportedValue;\n    if (target.__useDefault) {\n        target = target.default;\n    }\n    aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__[\"Origin\"].set(target, new aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__[\"Origin\"](moduleId, 'default'));\n    if (typeof target === 'object') {\n        for (key in target) {\n            exportedValue = target[key];\n            if (typeof exportedValue === 'function') {\n                aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__[\"Origin\"].set(exportedValue, new aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__[\"Origin\"](moduleId, key));\n            }\n        }\n    }\n    return moduleExports;\n}\n/**\n* A default implementation of the Loader abstraction which works with webpack (extended common-js style).\n*/\nvar WebpackLoader = (function (_super) {\n    __extends(WebpackLoader, _super);\n    function WebpackLoader() {\n        var _this = _super.call(this) || this;\n        _this.moduleRegistry = Object.create(null);\n        _this.loaderPlugins = Object.create(null);\n        _this.modulesBeingLoaded = new Map();\n        _this.useTemplateLoader(new TextTemplateLoader());\n        _this.addPlugin('template-registry-entry', {\n            fetch: function (moduleId) { return __awaiter(_this, void 0, void 0, function () {\n                var _this = this;\n                var HmrContext, entry;\n                return __generator(this, function (_a) {\n                    switch (_a.label) {\n                        case 0:\n                            // HMR:\n                            if (false) {}\n                            entry = this.getOrCreateTemplateRegistryEntry(moduleId);\n                            if (!!entry.templateIsLoaded) return [3 /*break*/, 2];\n                            return [4 /*yield*/, this.templateLoader.loadTemplate(this, entry)];\n                        case 1:\n                            _a.sent();\n                            _a.label = 2;\n                        case 2: return [2 /*return*/, entry];\n                    }\n                });\n            }); }\n        });\n        aurelia_pal__WEBPACK_IMPORTED_MODULE_2__[\"PLATFORM\"].eachModule = function (callback) {\n            var registry = __webpack_require__.c;\n            var cachedModuleIds = Object.getOwnPropertyNames(registry);\n            cachedModuleIds\n                .forEach(function (moduleId) {\n                var moduleExports = registry[moduleId].exports;\n                if (typeof moduleExports === 'object') {\n                    callback(moduleId, moduleExports);\n                }\n            });\n        };\n        return _this;\n    }\n    WebpackLoader.prototype._import = function (address, defaultHMR) {\n        if (defaultHMR === void 0) { defaultHMR = true; }\n        return __awaiter(this, void 0, void 0, function () {\n            var _this = this;\n            var addressParts, moduleId, loaderPlugin, plugin_1, asyncModuleId, callback;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        addressParts = address.split('!');\n                        moduleId = addressParts.splice(addressParts.length - 1, 1)[0];\n                        loaderPlugin = addressParts.length === 1 ? addressParts[0] : null;\n                        if (!loaderPlugin) return [3 /*break*/, 2];\n                        plugin_1 = this.loaderPlugins[loaderPlugin];\n                        if (!plugin_1) {\n                            throw new Error(\"Plugin \" + loaderPlugin + \" is not registered in the loader.\");\n                        }\n                        if (false) {}\n                        return [4 /*yield*/, plugin_1.fetch(moduleId)];\n                    case 1: return [2 /*return*/, _a.sent()];\n                    case 2:\n                        if (__webpack_require__.m[moduleId]) {\n                            if (defaultHMR && module.hot && this.hmrContext) {\n                                module.hot.accept(moduleId, function () { return _this.hmrContext.handleModuleChange(moduleId, module.hot); });\n                            }\n                            return [2 /*return*/, __webpack_require__(moduleId)];\n                        }\n                        asyncModuleId = \"async!\" + moduleId;\n                        if (!__webpack_require__.m[asyncModuleId]) return [3 /*break*/, 4];\n                        if (defaultHMR && module.hot && this.hmrContext) {\n                            module.hot.accept(moduleId, function () { return _this.hmrContext.handleModuleChange(moduleId, module.hot); });\n                            module.hot.accept(asyncModuleId, function () { });\n                        }\n                        callback = __webpack_require__(asyncModuleId);\n                        return [4 /*yield*/, new Promise(callback)];\n                    case 3: return [2 /*return*/, _a.sent()];\n                    case 4: throw new Error(\"Unable to find module with ID: \" + moduleId);\n                }\n            });\n        });\n    };\n    /**\n    * Maps a module id to a source.\n    * @param id The module id.\n    * @param source The source to map the module to.\n    */\n    WebpackLoader.prototype.map = function (id, source) { };\n    /**\n    * Normalizes a module id.\n    * @param moduleId The module id to normalize.\n    * @param relativeTo What the module id should be normalized relative to.\n    * @return The normalized module id.\n    */\n    WebpackLoader.prototype.normalizeSync = function (moduleId, relativeTo) {\n        return moduleId;\n    };\n    /**\n    * Normalizes a module id.\n    * @param moduleId The module id to normalize.\n    * @param relativeTo What the module id should be normalized relative to.\n    * @return The normalized module id.\n    */\n    WebpackLoader.prototype.normalize = function (moduleId, relativeTo) {\n        return Promise.resolve(moduleId);\n    };\n    /**\n    * Instructs the loader to use a specific TemplateLoader instance for loading templates\n    * @param templateLoader The instance of TemplateLoader to use for loading templates.\n    */\n    WebpackLoader.prototype.useTemplateLoader = function (templateLoader) {\n        this.templateLoader = templateLoader;\n    };\n    /**\n    * Loads a collection of modules.\n    * @param ids The set of module ids to load.\n    * @return A Promise for an array of loaded modules.\n    */\n    WebpackLoader.prototype.loadAllModules = function (ids) {\n        var _this = this;\n        return Promise.all(ids.map(function (id) { return _this.loadModule(id); }));\n    };\n    /**\n    * Loads a module.\n    * @param moduleId The module ID to load.\n    * @return A Promise for the loaded module.\n    */\n    WebpackLoader.prototype.loadModule = function (moduleId, defaultHMR) {\n        if (defaultHMR === void 0) { defaultHMR = true; }\n        return __awaiter(this, void 0, void 0, function () {\n            var existing, beingLoaded, moduleExports;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        existing = this.moduleRegistry[moduleId];\n                        if (existing) {\n                            return [2 /*return*/, existing];\n                        }\n                        beingLoaded = this.modulesBeingLoaded.get(moduleId);\n                        if (beingLoaded) {\n                            return [2 /*return*/, beingLoaded];\n                        }\n                        beingLoaded = this._import(moduleId, defaultHMR);\n                        this.modulesBeingLoaded.set(moduleId, beingLoaded);\n                        return [4 /*yield*/, beingLoaded];\n                    case 1:\n                        moduleExports = _a.sent();\n                        this.moduleRegistry[moduleId] = ensureOriginOnExports(moduleExports, moduleId);\n                        this.modulesBeingLoaded.delete(moduleId);\n                        return [2 /*return*/, moduleExports];\n                }\n            });\n        });\n    };\n    /**\n    * Loads a template.\n    * @param url The url of the template to load.\n    * @return A Promise for a TemplateRegistryEntry containing the template.\n    */\n    WebpackLoader.prototype.loadTemplate = function (url) {\n        return this.loadModule(this.applyPluginToUrl(url, 'template-registry-entry'), false);\n    };\n    /**\n    * Loads a text-based resource.\n    * @param url The url of the text file to load.\n    * @return A Promise for text content.\n    */\n    WebpackLoader.prototype.loadText = function (url) {\n        return __awaiter(this, void 0, void 0, function () {\n            var result;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.loadModule(url, false)];\n                    case 1:\n                        result = _a.sent();\n                        if (result instanceof Array && result[0] instanceof Array && result.hasOwnProperty('toString')) {\n                            // we're dealing with a file loaded using the css-loader:\n                            return [2 /*return*/, result.toString()];\n                        }\n                        return [2 /*return*/, result];\n                }\n            });\n        });\n    };\n    /**\n    * Alters a module id so that it includes a plugin loader.\n    * @param url The url of the module to load.\n    * @param pluginName The plugin to apply to the module id.\n    * @return The plugin-based module id.\n    */\n    WebpackLoader.prototype.applyPluginToUrl = function (url, pluginName) {\n        return pluginName + \"!\" + url;\n    };\n    /**\n    * Registers a plugin with the loader.\n    * @param pluginName The name of the plugin.\n    * @param implementation The plugin implementation.\n    */\n    WebpackLoader.prototype.addPlugin = function (pluginName, implementation) {\n        this.loaderPlugins[pluginName] = implementation;\n    };\n    return WebpackLoader;\n}(aurelia_loader__WEBPACK_IMPORTED_MODULE_1__[\"Loader\"]));\n\naurelia_pal__WEBPACK_IMPORTED_MODULE_2__[\"PLATFORM\"].Loader = WebpackLoader;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/aurelia-loader-webpack/dist/native-modules/aurelia-loader-webpack.js?");

/***/ }),

/***/ "./node_modules/aurelia-loader/dist/native-modules/aurelia-loader.js":
/*!************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-loader/dist/native-modules/aurelia-loader.js from dll-reference vendor_facd179997931a05afa9 ***!
  \************************************************************************************************************************************/
/*! exports provided: TemplateDependency, TemplateRegistryEntry, Loader */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-loader/dist/native-modules/aurelia-loader.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-loader/dist/native-modules/aurelia-loader.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "./node_modules/aurelia-metadata/dist/native-modules/aurelia-metadata.js":
/*!****************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-metadata/dist/native-modules/aurelia-metadata.js from dll-reference vendor_facd179997931a05afa9 ***!
  \****************************************************************************************************************************************/
/*! exports provided: metadata, Origin, decorators, deprecated, mixin, protocol */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-metadata/dist/native-modules/aurelia-metadata.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-metadata/dist/native-modules/aurelia-metadata.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js":
/*!******************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js from dll-reference vendor_facd179997931a05afa9 ***!
  \******************************************************************************************************************************/
/*! exports provided: AggregateError, FEATURE, PLATFORM, DOM, isInitialized, initializePAL, reset */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "./node_modules/aurelia-webpack-plugin/runtime/empty-entry.js":
/*!********************************************************************!*\
  !*** ./node_modules/aurelia-webpack-plugin/runtime/empty-entry.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// This file contains an empty module that does nothing.\n// It's meant to be added as an entry point to the main bundle\n// and helps reliably adding some Aurelia dependencies that are attached \n// to no module in particular, such as `includeAll` results or `aureliaApp`.\n//\n// Trying to attach those dependencies to, for example, 'aurelia-bootstrapper' \n// is unreliable if 'aurelia-bootstrapper' is in a DLL outside the bundle.\n//\n// Trying to attach to 'aurelia-loader-webpack' works well, unless a user\n// configures a customized loader instead (unlikely, but in theory supported).\n\n\n//# sourceURL=webpack:///./node_modules/aurelia-webpack-plugin/runtime/empty-entry.js?");

/***/ }),

/***/ "./node_modules/aurelia-webpack-plugin/runtime/pal-loader-entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/aurelia-webpack-plugin/runtime/pal-loader-entry.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ \"./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js\");\n// With default aurelia-loader-webpack config, this module is added as an extra entry\n// before any other code executes so that PAL.Loader is properly configured.\n// There are several tricky points worth noticing.\n// \n// We don't add aurelia-loader-webpack itself as an entry point (used to until 2.0 RC2)\n// because it (transitively) brings too much bagage with itself, most notably polyfills.\n// This made it super-hard to add other polyfills before Aurelia's and led to various bugs.\n//\n// We don't add custom code in aurelia-pal or aurelia-loader or aurelia-bootstrapper to detect\n// the Webpack environment and configure the loader because they might live in a DLL.\n// If they do, they would bring aurelia-loader-webpack along in the DLL and this is a special \n// library that *has to be in the main chunk.*\n//\n// The over-complicated design I've settled upon in the end is to use this special module\n// as an entry point that configures aurelia-loader-webpack. It has minimal static imports:\n// just aurelia-pal, which itself has no other dependencies and doesn't run much code.\n// It hacks the loader field into a getter so that it can synchronously load aurelia-loader-webpack\n// just in time when it is demanded by aurelia-bootstrapper.\n// This enables users to load polyfills before aurelia-loader-webpack is actually loaded.\n\n\n\nvar Loader;\n\nObject.defineProperty(aurelia_pal__WEBPACK_IMPORTED_MODULE_0__[\"PLATFORM\"], \"Loader\", {\n  get: function() {\n    return Loader || (Loader = __webpack_require__(/*! aurelia-loader-webpack */ \"./node_modules/aurelia-loader-webpack/dist/native-modules/aurelia-loader-webpack.js\").WebpackLoader);\n  },\n  set: function(value) {\n    Loader = value;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/aurelia-webpack-plugin/runtime/pal-loader-entry.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./style.less":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./style.less ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"body {\\n  font-family: \\\"Segoe UI\\\", Arial, Sans;\\n}\\nhello-tag {\\n  border: solid 1px #a00;\\n  border-radius: 5px;\\n  display: block;\\n  width: 200px;\\n  margin: 20px;\\n  transform: rotate(-5deg);\\n}\\n.tag-header {\\n  color: #fff;\\n  background: #a00;\\n  font-weight: bold;\\n  text-align: center;\\n  padding: 8px;\\n}\\n.tag-body {\\n  height: 100px;\\n  line-height: 100px;\\n  text-align: center;\\n  font-family: cursive;\\n  font-size: 1.3em;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./style.less?./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\toptions.attrs.type = \"text/css\";\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\toptions.attrs.type = \"text/css\";\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__extends\", function() { return __extends; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__assign\", function() { return __assign; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__rest\", function() { return __rest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__decorate\", function() { return __decorate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__param\", function() { return __param; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__metadata\", function() { return __metadata; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__awaiter\", function() { return __awaiter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__generator\", function() { return __generator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__exportStar\", function() { return __exportStar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__values\", function() { return __values; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__read\", function() { return __read; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__spread\", function() { return __spread; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__await\", function() { return __await; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__asyncGenerator\", function() { return __asyncGenerator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__asyncDelegator\", function() { return __asyncDelegator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__asyncValues\", function() { return __asyncValues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__makeTemplateObject\", function() { return __makeTemplateObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__importStar\", function() { return __importStar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__importDefault\", function() { return __importDefault; });\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation. All rights reserved.\r\nLicensed under the Apache License, Version 2.0 (the \"License\"); you may not use\r\nthis file except in compliance with the License. You may obtain a copy of the\r\nLicense at http://www.apache.org/licenses/LICENSE-2.0\r\n\r\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\r\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\r\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\r\nMERCHANTABLITY OR NON-INFRINGEMENT.\r\n\r\nSee the Apache Version 2.0 License for specific language governing permissions\r\nand limitations under the License.\r\n***************************************************************************** */\r\n/* global Reflect, Promise */\r\n\r\nvar extendStatics = Object.setPrototypeOf ||\r\n    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n\r\nfunction __extends(d, b) {\r\n    extendStatics(d, b);\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n}\r\n\r\nvar __assign = Object.assign || function __assign(t) {\r\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n        s = arguments[i];\r\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r\n    }\r\n    return t;\r\n}\r\n\r\nfunction __rest(s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)\r\n            t[p[i]] = s[p[i]];\r\n    return t;\r\n}\r\n\r\nfunction __decorate(decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n}\r\n\r\nfunction __param(paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n}\r\n\r\nfunction __metadata(metadataKey, metadataValue) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(metadataKey, metadataValue);\r\n}\r\n\r\nfunction __awaiter(thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n}\r\n\r\nfunction __generator(thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = y[op[0] & 2 ? \"return\" : op[0] ? \"throw\" : \"next\"]) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [0, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n}\r\n\r\nfunction __exportStar(m, exports) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\n\r\nfunction __values(o) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator], i = 0;\r\n    if (m) return m.call(o);\r\n    return {\r\n        next: function () {\r\n            if (o && i >= o.length) o = void 0;\r\n            return { value: o && o[i++], done: !o };\r\n        }\r\n    };\r\n}\r\n\r\nfunction __read(o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n}\r\n\r\nfunction __spread() {\r\n    for (var ar = [], i = 0; i < arguments.length; i++)\r\n        ar = ar.concat(__read(arguments[i]));\r\n    return ar;\r\n}\r\n\r\nfunction __await(v) {\r\n    return this instanceof __await ? (this.v = v, this) : new __await(v);\r\n}\r\n\r\nfunction __asyncGenerator(thisArg, _arguments, generator) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var g = generator.apply(thisArg, _arguments || []), i, q = [];\r\n    return i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i;\r\n    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }\r\n    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }\r\n    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }\r\n    function fulfill(value) { resume(\"next\", value); }\r\n    function reject(value) { resume(\"throw\", value); }\r\n    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }\r\n}\r\n\r\nfunction __asyncDelegator(o) {\r\n    var i, p;\r\n    return i = {}, verb(\"next\"), verb(\"throw\", function (e) { throw e; }), verb(\"return\"), i[Symbol.iterator] = function () { return this; }, i;\r\n    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === \"return\" } : f ? f(v) : v; }; }\r\n}\r\n\r\nfunction __asyncValues(o) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var m = o[Symbol.asyncIterator];\r\n    return m ? m.call(o) : typeof __values === \"function\" ? __values(o) : o[Symbol.iterator]();\r\n}\r\n\r\nfunction __makeTemplateObject(cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\n\r\nfunction __importStar(mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result.default = mod;\r\n    return result;\r\n}\r\n\r\nfunction __importDefault(mod) {\r\n    return (mod && mod.__esModule) ? mod : { default: mod };\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/tslib/tslib.es6.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\r\n\tif (!originalModule.webpackPolyfill) {\r\n\t\tvar module = Object.create(originalModule);\r\n\t\t// module.parent = undefined by default\r\n\t\tif (!module.children) module.children = [];\r\n\t\tObject.defineProperty(module, \"loaded\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.l;\r\n\t\t\t}\r\n\t\t});\r\n\t\tObject.defineProperty(module, \"id\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.i;\r\n\t\t\t}\r\n\t\t});\r\n\t\tObject.defineProperty(module, \"exports\", {\r\n\t\t\tenumerable: true\r\n\t\t});\r\n\t\tmodule.webpackPolyfill = 1;\r\n\t}\r\n\treturn module;\r\n};\r\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./style.less":
/*!********************!*\
  !*** ./style.less ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./style.less */ \"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./style.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ./node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./style.less?");

/***/ }),

/***/ 0:
/*!*****************************************************************************************************************************!*\
  !*** multi aurelia-webpack-plugin/runtime/empty-entry aurelia-webpack-plugin/runtime/pal-loader-entry aurelia-bootstrapper ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! aurelia-webpack-plugin/runtime/empty-entry */\"./node_modules/aurelia-webpack-plugin/runtime/empty-entry.js\");\n__webpack_require__(/*! aurelia-webpack-plugin/runtime/pal-loader-entry */\"./node_modules/aurelia-webpack-plugin/runtime/pal-loader-entry.js\");\nmodule.exports = __webpack_require__(/*! aurelia-bootstrapper */\"./node_modules/aurelia-bootstrapper/dist/native-modules/aurelia-bootstrapper.js\");\n\n\n//# sourceURL=webpack:///multi_aurelia-webpack-plugin/runtime/empty-entry_aurelia-webpack-plugin/runtime/pal-loader-entry_aurelia-bootstrapper?");

/***/ }),

/***/ "app":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: AppViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppViewModel\", function() { return AppViewModel; });\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.less */ \"./style.less\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_0__);\n\r\nvar AppViewModel = /** @class */ (function () {\r\n    function AppViewModel() {\r\n        this.name = '';\r\n    }\r\n    return AppViewModel;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<template>\\r\\n  <require from=\\\"customElements/hello-tag\\\"></require>\\r\\n\\r\\n  <h2>Aurelia + Webpack</h2>\\r\\n  <div>\\r\\n    What's your name? <br>\\r\\n    <input value.bind=\\\"name\\\" />\\r\\n  </div>\\r\\n\\r\\n  <hello-tag name.bind=\\\"name | upper\\\" if.bind=\\\"name\\\"></hello-tag>  \\r\\n</template>\";\n\n//# sourceURL=webpack:///./src/app.html?");

/***/ }),

/***/ "aurelia-event-aggregator":
/*!********************************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-event-aggregator/dist/native-modules/aurelia-event-aggregator.js from dll-reference vendor_facd179997931a05afa9 ***!
  \********************************************************************************************************************************************************/
/*! exports provided: EventAggregator, includeEventsIn, configure */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-event-aggregator/dist/native-modules/aurelia-event-aggregator.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-event-aggregator/dist/native-modules/aurelia-event-aggregator.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-framework":
/*!******************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-framework/dist/native-modules/aurelia-framework.js from dll-reference vendor_facd179997931a05afa9 ***!
  \******************************************************************************************************************************************/
/*! exports provided: Aurelia, FrameworkConfiguration, LogManager, resolver, Lazy, All, Optional, Parent, StrategyResolver, Factory, NewInstance, getDecoratorDependencies, lazy, all, optional, parent, factory, newInstance, invoker, invokeAsFactory, FactoryInvoker, registration, transient, singleton, TransientRegistration, SingletonRegistration, _emptyParameters, InvocationHandler, Container, autoinject, inject, getArrayObserver, getMapObserver, getSetObserver, camelCase, createOverrideContext, getContextFor, createScopeForTest, sourceContext, connectable, enqueueBindingConnect, subscriberCollection, ExpressionObserver, calcSplices, mergeSplice, projectArraySplices, getChangeRecords, ModifyCollectionObserver, CollectionLengthObserver, Expression, Chain, BindingBehavior, ValueConverter, Assign, Conditional, AccessThis, AccessScope, AccessMember, AccessKeyed, CallScope, CallMember, CallFunction, Binary, PrefixNot, LiteralPrimitive, LiteralString, LiteralArray, LiteralObject, Unparser, ExpressionCloner, cloneExpression, bindingMode, Token, Lexer, Scanner, Parser, ParserImplementation, delegationStrategy, EventManager, DirtyChecker, DirtyCheckProperty, propertyAccessor, PrimitiveObserver, SetterObserver, XLinkAttributeObserver, dataAttributeAccessor, DataAttributeObserver, StyleObserver, ValueAttributeObserver, CheckedObserver, SelectValueObserver, ClassObserver, hasDeclaredDependencies, declarePropertyDependencies, computedFrom, ComputedExpression, createComputedObserver, elements, presentationElements, presentationAttributes, SVGAnalyzer, ObserverLocator, ObjectObservationAdapter, BindingExpression, Binding, CallExpression, Call, ValueConverterResource, valueConverter, BindingBehaviorResource, bindingBehavior, ListenerExpression, Listener, NameExpression, BindingEngine, observable, metadata, Origin, decorators, deprecated, mixin, protocol, animationEvent, Animator, CompositionTransactionNotifier, CompositionTransactionOwnershipToken, CompositionTransaction, _hyphenate, _isAllWhitespace, ViewEngineHooksResource, viewEngineHooks, ElementEvents, ResourceLoadContext, ViewCompileInstruction, BehaviorInstruction, TargetInstruction, viewStrategy, RelativeViewStrategy, ConventionalViewStrategy, NoViewStrategy, TemplateRegistryViewStrategy, InlineViewStrategy, ViewLocator, BindingLanguage, SlotCustomAttribute, PassThroughSlot, ShadowSlot, ShadowDOM, ViewResources, View, ViewSlot, BoundViewFactory, ViewFactory, ViewCompiler, ResourceModule, ResourceDescription, ModuleAnalyzer, ViewEngine, Controller, BehaviorPropertyObserver, BindableProperty, HtmlBehaviorResource, children, child, SwapStrategies, CompositionEngine, ElementConfigResource, resource, behavior, customElement, customAttribute, templateController, bindable, dynamicOptions, useShadowDOM, processAttributes, processContent, containerless, useViewStrategy, useView, inlineView, noView, elementConfig, viewResources, TemplatingEngine, TemplateDependency, TemplateRegistryEntry, Loader, TaskQueue, relativeToFile, join, buildQueryString, parseQueryString, AggregateError, FEATURE, PLATFORM, DOM, isInitialized, initializePAL, reset */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-framework/dist/native-modules/aurelia-framework.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-framework/dist/native-modules/aurelia-framework.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-history-browser":
/*!******************************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-history-browser/dist/native-modules/aurelia-history-browser.js from dll-reference vendor_facd179997931a05afa9 ***!
  \******************************************************************************************************************************************************/
/*! exports provided: LinkHandler, DefaultLinkHandler, configure, BrowserHistory */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-history-browser/dist/native-modules/aurelia-history-browser.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-history-browser/dist/native-modules/aurelia-history-browser.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-logging-console":
/*!******************************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-logging-console/dist/native-modules/aurelia-logging-console.js from dll-reference vendor_facd179997931a05afa9 ***!
  \******************************************************************************************************************************************************/
/*! exports provided: ConsoleAppender */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-logging-console/dist/native-modules/aurelia-logging-console.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-logging-console/dist/native-modules/aurelia-logging-console.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-pal-browser":
/*!**********************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-pal-browser/dist/native-modules/aurelia-pal-browser.js from dll-reference vendor_facd179997931a05afa9 ***!
  \**********************************************************************************************************************************************/
/*! exports provided: _PLATFORM, _FEATURE, _DOM, initialize */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-pal-browser/dist/native-modules/aurelia-pal-browser.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-pal-browser/dist/native-modules/aurelia-pal-browser.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-templating-binding":
/*!************************************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-binding/dist/native-modules/aurelia-templating-binding.js from dll-reference vendor_facd179997931a05afa9 ***!
  \************************************************************************************************************************************************************/
/*! exports provided: AttributeMap, InterpolationBindingExpression, InterpolationBinding, ChildInterpolationBinding, SyntaxInterpreter, TemplatingBindingLanguage, configure */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-templating-binding/dist/native-modules/aurelia-templating-binding.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-binding/dist/native-modules/aurelia-templating-binding.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-templating-resources":
/*!****************************************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-resources/dist/native-modules/aurelia-templating-resources.js from dll-reference vendor_facd179997931a05afa9 ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: Compose, If, With, Repeat, Show, Hide, HTMLSanitizer, SanitizeHTMLValueConverter, Replaceable, Focus, configure, AttrBindingBehavior, OneTimeBindingBehavior, OneWayBindingBehavior, TwoWayBindingBehavior, ThrottleBindingBehavior, DebounceBindingBehavior, SelfBindingBehavior, SignalBindingBehavior, BindingSignaler, UpdateTriggerBindingBehavior, AbstractRepeater, RepeatStrategyLocator, NullRepeatStrategy, ArrayRepeatStrategy, MapRepeatStrategy, SetRepeatStrategy, NumberRepeatStrategy, createFullOverrideContext, updateOverrideContext, getItemsSourceExpression, isOneTime, updateOneTimeBinding, unwrapExpression, viewsRequireLifecycle */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-templating-resources/dist/native-modules/aurelia-templating-resources.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-resources/dist/native-modules/aurelia-templating-resources.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-templating-resources/attr-binding-behavior":
/*!*********************************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-resources/dist/native-modules/attr-binding-behavior.js from dll-reference vendor_facd179997931a05afa9 ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: AttrBindingBehavior */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-templating-resources/dist/native-modules/attr-binding-behavior.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-resources/dist/native-modules/attr-binding-behavior.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-templating-resources/binding-mode-behaviors":
/*!**********************************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-resources/dist/native-modules/binding-mode-behaviors.js from dll-reference vendor_facd179997931a05afa9 ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: OneTimeBindingBehavior, OneWayBindingBehavior, TwoWayBindingBehavior */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-templating-resources/dist/native-modules/binding-mode-behaviors.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-resources/dist/native-modules/binding-mode-behaviors.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-templating-resources/compose":
/*!*******************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-resources/dist/native-modules/compose.js from dll-reference vendor_facd179997931a05afa9 ***!
  \*******************************************************************************************************************************************/
/*! exports provided: Compose */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-templating-resources/dist/native-modules/compose.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-resources/dist/native-modules/compose.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-templating-resources/debounce-binding-behavior":
/*!*************************************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-resources/dist/native-modules/debounce-binding-behavior.js from dll-reference vendor_facd179997931a05afa9 ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: DebounceBindingBehavior */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-templating-resources/dist/native-modules/debounce-binding-behavior.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-resources/dist/native-modules/debounce-binding-behavior.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-templating-resources/focus":
/*!*****************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-resources/dist/native-modules/focus.js from dll-reference vendor_facd179997931a05afa9 ***!
  \*****************************************************************************************************************************************/
/*! exports provided: Focus */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-templating-resources/dist/native-modules/focus.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-resources/dist/native-modules/focus.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-templating-resources/hide":
/*!****************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-resources/dist/native-modules/hide.js from dll-reference vendor_facd179997931a05afa9 ***!
  \****************************************************************************************************************************************/
/*! exports provided: Hide */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-templating-resources/dist/native-modules/hide.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-resources/dist/native-modules/hide.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-templating-resources/if":
/*!**************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-resources/dist/native-modules/if.js from dll-reference vendor_facd179997931a05afa9 ***!
  \**************************************************************************************************************************************/
/*! exports provided: If */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-templating-resources/dist/native-modules/if.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-resources/dist/native-modules/if.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-templating-resources/repeat":
/*!******************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-resources/dist/native-modules/repeat.js from dll-reference vendor_facd179997931a05afa9 ***!
  \******************************************************************************************************************************************/
/*! exports provided: Repeat */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-templating-resources/dist/native-modules/repeat.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-resources/dist/native-modules/repeat.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-templating-resources/replaceable":
/*!***********************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-resources/dist/native-modules/replaceable.js from dll-reference vendor_facd179997931a05afa9 ***!
  \***********************************************************************************************************************************************/
/*! exports provided: Replaceable */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-templating-resources/dist/native-modules/replaceable.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-resources/dist/native-modules/replaceable.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-templating-resources/sanitize-html":
/*!*************************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-resources/dist/native-modules/sanitize-html.js from dll-reference vendor_facd179997931a05afa9 ***!
  \*************************************************************************************************************************************************/
/*! exports provided: SanitizeHTMLValueConverter */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-templating-resources/dist/native-modules/sanitize-html.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-resources/dist/native-modules/sanitize-html.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-templating-resources/self-binding-behavior":
/*!*********************************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-resources/dist/native-modules/self-binding-behavior.js from dll-reference vendor_facd179997931a05afa9 ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: SelfBindingBehavior */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-templating-resources/dist/native-modules/self-binding-behavior.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-resources/dist/native-modules/self-binding-behavior.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-templating-resources/show":
/*!****************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-resources/dist/native-modules/show.js from dll-reference vendor_facd179997931a05afa9 ***!
  \****************************************************************************************************************************************/
/*! exports provided: Show */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-templating-resources/dist/native-modules/show.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-resources/dist/native-modules/show.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-templating-resources/signal-binding-behavior":
/*!***********************************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-resources/dist/native-modules/signal-binding-behavior.js from dll-reference vendor_facd179997931a05afa9 ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: SignalBindingBehavior */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-templating-resources/dist/native-modules/signal-binding-behavior.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-resources/dist/native-modules/signal-binding-behavior.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-templating-resources/throttle-binding-behavior":
/*!*************************************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-resources/dist/native-modules/throttle-binding-behavior.js from dll-reference vendor_facd179997931a05afa9 ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: ThrottleBindingBehavior */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-templating-resources/dist/native-modules/throttle-binding-behavior.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-resources/dist/native-modules/throttle-binding-behavior.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-templating-resources/update-trigger-binding-behavior":
/*!*******************************************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-resources/dist/native-modules/update-trigger-binding-behavior.js from dll-reference vendor_facd179997931a05afa9 ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: UpdateTriggerBindingBehavior */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-templating-resources/dist/native-modules/update-trigger-binding-behavior.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-resources/dist/native-modules/update-trigger-binding-behavior.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-templating-resources/with":
/*!****************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-resources/dist/native-modules/with.js from dll-reference vendor_facd179997931a05afa9 ***!
  \****************************************************************************************************************************************/
/*! exports provided: With */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-templating-resources/dist/native-modules/with.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-resources/dist/native-modules/with.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-templating-router":
/*!**********************************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-router/dist/native-modules/aurelia-templating-router.js from dll-reference vendor_facd179997931a05afa9 ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: TemplatingRouteLoader, RouterView, RouteHref, configure */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-templating-router/dist/native-modules/aurelia-templating-router.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-router/dist/native-modules/aurelia-templating-router.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-templating-router/route-href":
/*!*******************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-router/dist/native-modules/route-href.js from dll-reference vendor_facd179997931a05afa9 ***!
  \*******************************************************************************************************************************************/
/*! exports provided: RouteHref */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-templating-router/dist/native-modules/route-href.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-router/dist/native-modules/route-href.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "aurelia-templating-router/router-view":
/*!********************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-router/dist/native-modules/router-view.js from dll-reference vendor_facd179997931a05afa9 ***!
  \********************************************************************************************************************************************/
/*! exports provided: RouterView, RouterViewLocator */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_facd179997931a05afa9 */ \"dll-reference vendor_facd179997931a05afa9\"))(\"./node_modules/aurelia-templating-router/dist/native-modules/router-view.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-router/dist/native-modules/router-view.js_from_dll-reference_vendor_facd179997931a05afa9?");

/***/ }),

/***/ "converters/upper":
/*!*********************************!*\
  !*** ./src/converters/upper.ts ***!
  \*********************************/
/*! exports provided: UpperValueConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UpperValueConverter\", function() { return UpperValueConverter; });\nvar UpperValueConverter = /** @class */ (function () {\r\n    function UpperValueConverter() {\r\n    }\r\n    UpperValueConverter.prototype.toView = function (name) {\r\n        return name && name.toUpperCase();\r\n    };\r\n    return UpperValueConverter;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/converters/upper.ts?");

/***/ }),

/***/ "customElements/hello-tag":
/*!*****************************************!*\
  !*** ./src/customElements/hello-tag.ts ***!
  \*****************************************/
/*! exports provided: HelloTagCustomElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HelloTagCustomElement\", function() { return HelloTagCustomElement; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ \"aurelia-framework\");\n\r\n\r\nvar HelloTagCustomElement = /** @class */ (function () {\r\n    function HelloTagCustomElement() {\r\n    }\r\n    tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\r\n        aurelia_framework__WEBPACK_IMPORTED_MODULE_1__[\"bindable\"]\r\n    ], HelloTagCustomElement.prototype, \"name\", void 0);\r\n    return HelloTagCustomElement;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/customElements/hello-tag.ts?");

/***/ }),

/***/ "customElements/hello-tag.html":
/*!*******************************************!*\
  !*** ./src/customElements/hello-tag.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<template>\\r\\n  <div class=\\\"tag-header\\\">\\r\\n    HELLO<br>\\r\\n    MY NAME IS\\r\\n  </div>\\r\\n  <div class=\\\"tag-body\\\">${name}</div>\\r\\n</template>\";\n\n//# sourceURL=webpack:///./src/customElements/hello-tag.html?");

/***/ }),

/***/ "dll-reference vendor_facd179997931a05afa9":
/*!**********************************************!*\
  !*** external "vendor_facd179997931a05afa9" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = vendor_facd179997931a05afa9;\n\n//# sourceURL=webpack:///external_%22vendor_facd179997931a05afa9%22?");

/***/ }),

/***/ "main":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\n/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ \"aurelia-framework\");\n\r\nfunction configure(aurelia) {\r\n    aurelia.use\r\n        .standardConfiguration()\r\n        .developmentLogging()\r\n        .globalResources('converters/upper');\r\n    aurelia.start().then(function () { return aurelia.setRoot('app'); });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ });