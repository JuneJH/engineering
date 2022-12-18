/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/module01.js":
/*!*********************************!*\
  !*** ./src/modules/module01.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var module02 = __webpack_require__(/*! ./module02 */ "./src/modules/module02.js");
console.log("module02 run in module01", module02);
console.log("module01 run overrr");
module.exports = "module01";

/***/ }),

/***/ "./src/modules/module02.js":
/*!*********************************!*\
  !*** ./src/modules/module02.js ***!
  \*********************************/
/***/ (function(module) {

var str = "modlues02";
console.log("module02 runnn");
module.exports = str;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log("玩转webpack");
var module01 = __webpack_require__(/*! ./modules/module01 */ "./src/modules/module01.js");
var module02 = __webpack_require__(/*! ./modules/module02 */ "./src/modules/module02.js");
console.log("module01=>", module01);
console.log("module02=>", module02);
console.log("index.js run over!!!");
}();
/******/ })()
;
//# sourceMappingURL=main.js.map