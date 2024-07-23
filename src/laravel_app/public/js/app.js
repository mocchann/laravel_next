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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/html/laravel_app/node_modules/axios/index.js'");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/html/laravel_app/node_modules/lodash/lodash.js'");

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

__webpack_require__(/*! ./components/Example */ "./resources/js/components/Example.js");

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/components/Example.js":
/*!********************************************!*\
  !*** ./resources/js/components/Example.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /var/www/html/laravel_app/resources/js/components/Example.js: Support for the experimental syntax 'jsx' isn't currently enabled (7:13):\n\n\u001b[0m \u001b[90m  5 |\u001b[39m     render() {\u001b[0m\n\u001b[0m \u001b[90m  6 |\u001b[39m         \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  7 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"container\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  8 |\u001b[39m                 \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"row justify-content-center\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  9 |\u001b[39m                     \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"col-md-8\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 |\u001b[39m                         \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"card\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\nAdd @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx) to the 'plugins' section to enable parsing.\n    at instantiate (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:67:32)\n    at constructor (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:364:12)\n    at Parser.raise (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:3364:19)\n    at Parser.expectOnePlugin (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:3413:18)\n    at Parser.parseExprAtom (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:11529:18)\n    at Parser.parseExprSubscripts (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:11171:23)\n    at Parser.parseUpdate (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:11153:21)\n    at Parser.parseMaybeUnary (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:11127:23)\n    at Parser.parseMaybeUnaryOrPrivate (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:10956:61)\n    at Parser.parseExprOps (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:10962:23)\n    at Parser.parseMaybeConditional (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:10937:23)\n    at Parser.parseMaybeAssign (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:10895:21)\n    at /var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:10863:39\n    at Parser.allowInAnd (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:12640:12)\n    at Parser.parseMaybeAssignAllowIn (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:10863:17)\n    at Parser.parseParenAndDistinguishExpression (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:11817:28)\n    at Parser.parseExprAtom (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:11446:23)\n    at Parser.parseExprSubscripts (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:11171:23)\n    at Parser.parseUpdate (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:11153:21)\n    at Parser.parseMaybeUnary (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:11127:23)\n    at Parser.parseMaybeUnaryOrPrivate (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:10956:61)\n    at Parser.parseExprOps (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:10962:23)\n    at Parser.parseMaybeConditional (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:10937:23)\n    at Parser.parseMaybeAssign (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:10895:21)\n    at Parser.parseExpressionBase (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:10845:23)\n    at /var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:10840:39\n    at Parser.allowInAnd (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:12635:16)\n    at Parser.parseExpression (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:10840:17)\n    at Parser.parseReturnStatement (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:13296:28)\n    at Parser.parseStatementContent (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:12954:21)\n    at Parser.parseStatement (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:12917:17)\n    at Parser.parseBlockOrModuleBlockBody (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:13497:25)\n    at Parser.parseBlockBody (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:13489:10)\n    at Parser.parseBlock (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:13477:10)\n    at Parser.parseFunctionBody (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:12287:24)\n    at Parser.parseFunctionBodyAndFinish (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:12271:10)\n    at Parser.parseMethod (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:12226:31)\n    at Parser.pushClassMethod (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:13961:30)\n    at Parser.parseClassMemberWithIsStatic (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:13831:12)\n    at Parser.parseClassMember (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:13773:10)\n    at /var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:13715:14\n    at Parser.withSmartMixTopicForbiddingContext (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:12617:14)\n    at Parser.parseClassBody (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:13694:10)\n    at Parser.parseClass (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:13669:22)\n    at Parser.parseExportDefaultExpression (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:14156:19)\n    at Parser.parseExport (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:14075:25)\n    at Parser.parseStatementContent (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:13020:27)\n    at Parser.parseStatement (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:12917:17)\n    at Parser.parseBlockOrModuleBlockBody (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:13497:25)\n    at Parser.parseBlockBody (/var/www/html/laravel_app/node_modules/@babel/parser/lib/index.js:13489:10)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/var/www/html/laravel_app/node_modules/css-loader/lib/css-base.js'\n    at /var/www/html/laravel_app/node_modules/webpack/lib/NormalModule.js:316:20\n    at /var/www/html/laravel_app/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /var/www/html/laravel_app/node_modules/loader-runner/lib/LoaderRunner.js:203:19\n    at /var/www/html/laravel_app/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:85:15\n    at processTicksAndRejections (internal/process/task_queues.js:79:11)");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/laravel_app/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /var/www/html/laravel_app/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });