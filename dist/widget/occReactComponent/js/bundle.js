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

  var _styles = __webpack_require__(/*! ./styles/styles.css */ "./app/js/app/styles/styles.css");

  var _styles2 = _interopRequireDefault(_styles);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  console.log(_styles2.default);

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
      var logger = occDependencies.logger;
      logger.info("[occ-react-component]: Hello from OCC's Winston logger... :) ");
      console.log("[occ-react-component]:  widget model:", model);
      console.log("[occ-react-component]:  application defined dependencies:", occDependencies);
      return _react2.default.createElement("div", {
        className: _styles2.default["occ-react-component"]
      }, _react2.default.createElement("div", {
        className: _styles2.default.logo
      }), _react2.default.createElement("p", null, "This is a React Application"));
    };

    return App;
  }(_react.Component);

  exports.default = App;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./app/js/app/images/logo.png":
/*!************************************!*\
  !*** ./app/js/app/images/logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAPz0lEQVR4nOzdW2wU5cPH8YdSWlttoVgKKNICamMpJJazaBoROSlaBY0JYgxeGDSGi2r0gsR4iF4YjdGYqBdGATWKF9iCWKMRlJNAClWqVkWwNhQDlmIprT04b57hbf90d7bdw+y2v/b7SbhgDzPT3e6388zOIckAgAiCBUAGwQIgg2ABkEGwAMggWABkECwAMggWABkEC4AMggVABsECIINgAZBBsADIIFgAZBAsADIIFgAZBAuADIIFQAbBAiCDYAGQQbAAyCBYAGQQLAAyCBYAGQQLgAyCBUAGwQIgg2ABkEGwAMggWABkECwAMggWABkEC4AMggVABsECIINgAZBBsADIIFgAZBAsADIIFgAZBAuADIIFQAbBAiCDYAGQQbAAyCBYAGQQLAAyCBYAGQQLgAyCBUAGwQIgg2ABkEGwAMggWABkECwAMggWABkEC4AMggVABsECIINgAZBBsADIIFgAZBAsADIIFgAZBAuADIIFQAbBAiCDYAGQQbAAyCBYAGQQLAAyCBYAGQQLgAyCBUAGwQIgg2ABkEGwAMggWABkECwAMggWABkEC4AMggVABsECIINgAZBBsADIIFgAZBAsADIIFgAZBAuADIIFQAbBAiCDYAGQQbAAyCBYAGQQLAAyCBYAGQQLgAyCBUAGwQIgg2ABkEGwAMggWABkECwAMggWABkEC4AMggVABsECIINgAZBBsADIIFgAZBAsADIIFgAZBAuADIIFQAbBAiCDYAGQQbAAyEju7wWIheM4Tn8vA6Bo2LBhw/p7GaLBGhYAGQQLgAyCBUAGwQIgg2ABkEGwAMggWABkECwAMggWABkEC4AMggVABsECIEP64OdonTx50vz4449Bt2dmZpqZM2fGPP1z586ZAwcOGD+PzR47dqyZOnVq9//ttO087Lz8kpqaaubMmWOSk//3a/Hrr7+a2tpa09exsiNGjDCXXnqpycnJcf+lpKREvRx///23+eGHH4Jut9O370/gstTV1Zmampqg28eMGWOmTZsW9nwPHz5sGhoaetxmX+f8/HwzYcKEHrf39h7b5bCvY3p6etjz9vLPP/+YgwcPet43fPhwM3v2bJOWlhbTPJBATpQ2bNhgf8uC/s2YMSPaSfZQWVnpOf1Y/q1cubLH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QAbBAiCDYAGQQbAAyCBYAGQQLAAyCBYAAIDfWMMCIINgAZBBsADIIFgAZBAsADIIFgAZBAuADIIFQAbBAiCDYAGQQbAAyCBYAGQQLAAyCBYAGQQLgAyCBUAGwQIgg2ABkEGwAMggWABkECwAMggWABkEC4AMggVABsECIINgAZBBsADIIFgAZBAsADIIFgAZBAuADIIFQAbBAiCDYAGQQbAAyCBYAGQQLAAyCBYAGQQLgAyCBUAGwQIgg2ABkEGwAMggWABkECwAMggWABkEC4AMggVABsECIINgAZBBsADIIFgAZBAsADIIFgAZBAuADIIFQAbBAiCDYAGQQbAAyCBYAGQQLAAyCBYAGQQLgAyCBUAGwQIgg2ABkEGwAMggWABkECwAMggWABkEC4AMggVABsECIINgAZBBsADIIFgAZBAsADIIFgAZBAuADIIFQAbBAiCDYAGQQbAAyCBYAGQQLAAyCBYAGQQLgAyCBUAGwQIgg2ABkEGwAMggWABkECwAMggWABkEC4AMggVABsECIINgAZBBsADIIFgAZBAsADIIFgAZBAuADIIFQAbBAiCDYAGQQbAAyCBYAGQQLAAyCBYAGQQLgAyCBUAGwQIgg2ABkEGwAMggWABk/F8AAAD//yG3uDfSlKfVAAAAAElFTkSuQmCC"

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

/***/ "./app/js/app/styles/styles.css":
/*!**************************************!*\
  !*** ./app/js/app/styles/styles.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../node_modules/postcss-loader/src??ref--7-2!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/js/app/styles/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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

  /* eslint  import/no-extraneous-dependencies: 0 */

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
      onLoad: function onLoad(model) {
        var occDependencies = {
          ko: ko,
          $: $,
          pubsub: pubsub,
          notifier: notifier,
          CCConstants: CCConstants,
          logger: logger
        }; // Mode and dependencies get injected into your App here.

        App = (0, _OccProvider2.default)(_App2.default, {
          model: model,
          occDependencies: occDependencies
        });
      },
      onRender: function onRender() {
        _reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('occReactComponent'));
      }
    };
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/js/app/styles/styles.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/postcss-loader/src??ref--7-2!./app/js/app/styles/styles.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/logo.png */ "./app/js/app/images/logo.png"));

// Module
exports.push([module.i, "._2cbPDCozPPjP0u_8dFOtdl{background:#000;color:#fff;text-align:center;padding:50px}._2cbPDCozPPjP0u_8dFOtdl ._1tp4w4ILOcPBVueubARftW{background:url(" + ___CSS_LOADER_URL___0___ + ") no-repeat;width:300px;height:300px}", ""]);

// Exports
exports.locals = {
	"occ-react-component": "_2cbPDCozPPjP0u_8dFOtdl",
	"logo": "_1tp4w4ILOcPBVueubARftW"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url)) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

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