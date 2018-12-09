define(["ccConstants","ccLogger","jquery","knockout","notifier","pubsub","https://unpkg.com/react@16.5.2/umd/react.production.min","https://unpkg.com/react-dom@16.5.2/umd/react-dom.production.min"], function(__WEBPACK_EXTERNAL_MODULE_ccConstants__, __WEBPACK_EXTERNAL_MODULE_ccLogger__, __WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_knockout__, __WEBPACK_EXTERNAL_MODULE_notifier__, __WEBPACK_EXTERNAL_MODULE_pubsub__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/app/App.jsx":
/*!****************************!*\
  !*** ./app/js/app/App.jsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react = __webpack_require__(/*! react */ "react");

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var App =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(App, _Component);

    function App() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = App.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          model = _this$props.model,
          occDependencies = _this$props.occDependencies;
      occDependencies.logger.info("Hello from Winston logger...");
      console.log(model, occDependencies);
      return _react2.default.createElement("div", null, "This is a React Application");
    };

    return App;
  }(_react.Component);

  exports.default = App;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./app/js/app/occProvider/OccProvider.jsx":
/*!************************************************!*\
  !*** ./app/js/app/occProvider/OccProvider.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react = __webpack_require__(/*! react */ "react");

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function OccProvider(WrappedComponent, occData) {
    return (
      /*#__PURE__*/
      function (_Component) {
        _inheritsLoose(_class, _Component);

        function _class() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = _class.prototype;

        _proto.render = function render() {
          var children = this.props.children;
          return _react2.default.createElement(WrappedComponent, occData, children);
        };

        return _class;
      }(_react.Component)
    );
  }

  exports.default = OccProvider;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./app/js/index.jsx":
/*!**************************!*\
  !*** ./app/js/index.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  var _react = __webpack_require__(/*! react */ "react");

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _App = __webpack_require__(/*! ./app/App */ "./app/js/app/App.jsx");

  var _App2 = _interopRequireDefault(_App);

  var _OccProvider = __webpack_require__(/*! ./app/occProvider/OccProvider */ "./app/js/app/occProvider/OccProvider.jsx");

  var _OccProvider2 = _interopRequireDefault(_OccProvider);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /* eslint import/no-unresolved: [2, { ignore: ['\.img$'] }],  no-unused-vars:0, prefer-arrow-callback:0 */

  /*
   * Copyright (c) 2018 LEEDIUM.
   * This file is subject to the terms and conditions
   * defined in file 'LICENSE.txt', which is part of this
   * source code package.
   */

  /**
   * @project occ-react-component
   * @file index.jsx
   * @company leedium
   * @createdBy davidlee
   * @contact david@leedium.com
   * @dateCreated 21/10/2018
   * @description Main entry file that maps occ model and dependencies to the
   *              React component props
   */
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! knockout */ "knockout"), __webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! pubsub */ "pubsub"), __webpack_require__(/*! notifier */ "notifier"), __webpack_require__(/*! ccConstants */ "ccConstants"), __webpack_require__(/*! ccLogger */ "ccLogger")], __WEBPACK_AMD_DEFINE_RESULT__ = (function def(ko, $, pubsub, notifier, CCConstants, logger) {
    var App;
    return {
      inited: false,
      onLoad: function onLoad(model) {
        var occDependencies = {
          ko: ko,
          $: $,
          pubsub: pubsub,
          notifier: notifier,
          CCConstants: CCConstants,
          logger: logger
        };
        App = (0, _OccProvider2.default)(_App2.default, {
          model: model,
          occDependencies: occDependencies
        });
      },
      beforeAppear: function beforeAppear(model) {},
      onRender: function onRender() {
        _reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('occReactComponent'));
      }
    };
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "ccConstants":
/*!******************************!*\
  !*** external "ccConstants" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ccConstants__;

/***/ }),

/***/ "ccLogger":
/*!***************************!*\
  !*** external "ccLogger" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ccLogger__;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ }),

/***/ "knockout":
/*!***************************!*\
  !*** external "knockout" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_knockout__;

/***/ }),

/***/ "notifier":
/*!***************************!*\
  !*** external "notifier" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_notifier__;

/***/ }),

/***/ "pubsub":
/*!*************************!*\
  !*** external "pubsub" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_pubsub__;

/***/ }),

/***/ "react":
/*!**************************************************************************!*\
  !*** external "https://unpkg.com/react@16.5.2/umd/react.production.min" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!**********************************************************************************!*\
  !*** external "https://unpkg.com/react-dom@16.5.2/umd/react-dom.production.min" ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ })});;