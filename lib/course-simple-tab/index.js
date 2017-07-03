(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("index", [], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
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
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(21)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__List_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__List_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__List_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_scss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__list_scss__);



if (true) {
    __WEBPACK_IMPORTED_MODULE_0__List_vue___default.a.install = function (Vue) {
        return Vue.component(__WEBPACK_IMPORTED_MODULE_0__List_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__List_vue___default.a);
    };
}
/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__List_vue___default.a);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = go;
/* unused harmony export getUrl */
var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

function go(url, $router) {
  if (/^javas/.test(url) || !url) return;
  var useRouter = (typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object' || $router && typeof url === 'string' && !/http/.test(url);
  if (useRouter) {
    url === 'BACK' ? $router.go(-1) : $router.push(url);
  } else {
    window.location.href = url;
  }
}

function getUrl(url, $router) {
  // Make sure the href is right in hash mode
  if ($router && !$router._history && typeof url === 'string' && !/http/.test(url)) {
    return '#!' + url;
  }
  return url && (typeof url === 'undefined' ? 'undefined' : _typeof(url)) !== 'object' ? url : 'javascript:void(0);';
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parentMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return childMixin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_router__ = __webpack_require__(4);


var parentMixin = {
  mounted: function mounted() {
    if (this.value >= 0) {
      this.currentIndex = this.value;
    }
    this.updateIndex();
  },

  methods: {
    updateIndex: function updateIndex() {
      if (!this.$children || !this.$children.length) return;
      this.number = this.$children.length;
      var children = this.$children;
      for (var i = 0; i < children.length; i++) {
        children[i].currentIndex = i;
        if (children[i].currentSelected) {
          this.index = i;
        }
      }
    }
  },
  props: {
    value: Number
  },
  watch: {
    currentIndex: function currentIndex(val, oldVal) {
      oldVal > -1 && this.$children[oldVal] && (this.$children[oldVal].currentSelected = false);
      val > -1 && this.$children[val] && (this.$children[val].currentSelected = true);
      this.$emit('input', val);
    },
    index: function index(val) {
      this.currentIndex = val;
    },
    value: function value(val) {
      this.index = val;
    }
  },
  data: function data() {
    return {
      index: -1,
      currentIndex: this.index,
      number: this.$children.length
    };
  }
};

var childMixin = {
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    this.$parent.updateIndex();
  },
  beforeDestroy: function beforeDestroy() {
    var $parent = this.$parent;
    this.$nextTick(function () {
      $parent.updateIndex();
    });
  },

  methods: {
    onItemClick: function onItemClick(hasLink) {
      var _this = this;

      if (typeof this.disabled === 'undefined' || this.disabled === false) {
        this.currentSelected = true;
        this.$parent.currentIndex = this.currentIndex;
        this.$nextTick(function () {
          _this.$emit('on-item-click', _this.currentIndex);
        });
      }
      if (hasLink === true) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_router__["a" /* go */])(this.link, this.$router);
      }
    }
  },
  watch: {
    currentSelected: function currentSelected(val) {
      if (val) {
        this.$parent.index = this.currentIndex;
      }
    },
    selected: function selected(val) {
      this.currentSelected = val;
    }
  },
  data: function data() {
    return {
      currentIndex: -1,
      currentSelected: this.selected
    };
  }
};



/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(9),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/moia/Desktop/xiaobao-vue/mm_vue_plugins/src/course-lists/List.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] List.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0a7337f4", Component.options)
  } else {
    hotAPI.reload("data-v-0a7337f4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'mm-course-list',
  props: ['message', 'to'],
  data: function data() {
    return {
      pingjia: false
    };
  },
  created: function created() {
    var pingjia = this.message.pingjia;

    this.pingjia = pingjia;
  },

  methods: {
    next: function next() {
      location.hash = this.message.next;
    },
    toNext: function toNext() {
      if (this.to) {
        location.href = location.origin + '/' + this.to;
      }
    }
  }
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.message) ? _c('section', {
    staticClass: "mm-course-list",
    on: {
      "click": _vm.toNext
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": _vm.message.cover_240x140,
      "onerror": "javascript:this.src='https://cdn.xueyuan.xiaobao100.com/shield/image/plugin-pic/default.png';"
    }
  }), _vm._v(" "), _c('dl', [(_vm.message.title) ? _c('dt', {
    staticStyle: {
      "WebkitBoxOrient": "vertical"
    }
  }, [_vm._v(_vm._s(_vm.message.title))]) : _vm._e(), _vm._v(" "), _c('dd', [(_vm.message.category) ? _c('span', [_vm._v(_vm._s(_vm.message.category) + " | " + _vm._s(_vm.message.buy_count || 0) + "人已" + _vm._s(_vm.pingjia ? "学习" : "报名"))]) : _vm._e(), _vm._v(" "), (!_vm.pingjia) ? _c('object', [(_vm.message.score) ? _c('span', [_vm._v("\n          评分 " + _vm._s(_vm.message.score.toFixed(1)) + "\n          ")]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.pingjia) ? _c('object', {
    on: {
      "click": _vm.next
    }
  }, [(!_vm.pingjia.done) ? _c('label', {
    staticClass: "pingjia"
  }, [_vm._v("评价")]) : _c('span', [_vm._v("已评价")])]) : _vm._e()])])])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0a7337f4", module.exports)
  }
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (obj) {
  var n = '';
  for (var m in obj) {
    if (n) {
      n += '&';
    }
    n += m + '=' + obj[m];
  }
  return n;
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

(function (self) {
  'use strict';

  if (self.fetch) {
    return;
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

    var isDataView = function isDataView(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj);
    };

    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name');
    }
    return name.toLowerCase();
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value;
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return { done: value === undefined, value: value };
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function (header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ',' + value : value;
  };

  Headers.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function (name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };

  Headers.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };

  Headers.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function (callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };

  Headers.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
      items.push(value);
    });
    return iteratorFor(items);
  };

  Headers.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('');
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0);
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function (body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type');
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };

      this.arrayBuffer = function () {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
        } else {
          return this.blob().then(readBlobAsArrayBuffer);
        }
      };
    }

    this.text = function () {
      var rejected = consumed(this);
      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } else {
        return Promise.resolve(this._bodyText);
      }
    };

    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }

    this.json = function () {
      return this.text().then(JSON.parse);
    };

    return this;
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }
    this._initBody(body);
  }

  Request.prototype.clone = function () {
    return new Request(this, { body: this._bodyInit });
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    rawHeaders.split(/\r?\n/).forEach(function (line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers;
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = 'status' in options ? options.status : 200;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };

  Response.error = function () {
    var response = new Response(null, { status: 0, statusText: '' });
    response.type = 'error';
    return response;
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }

    return new Response(null, { status: status, headers: { location: url } });
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function (input, init) {
    return new Promise(function (resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function () {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : this);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(37)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(34),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/moia/Desktop/xiaobao-vue/mm_vue_plugins/node_modules/vux/src/components/load-more/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-778d5c53", Component.options)
  } else {
    hotAPI.reload("data-v-778d5c53", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(30),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/moia/Desktop/xiaobao-vue/mm_vue_plugins/node_modules/vux/src/components/swiper/swiper-item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] swiper-item.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-067c9726", Component.options)
  } else {
    hotAPI.reload("data-v-067c9726", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(36)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(32),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/moia/Desktop/xiaobao-vue/mm_vue_plugins/node_modules/vux/src/components/swiper/swiper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] swiper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-551f5463", Component.options)
  } else {
    hotAPI.reload("data-v-551f5463", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(33),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/moia/Desktop/xiaobao-vue/mm_vue_plugins/node_modules/vux/src/components/tab/tab-item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tab-item.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75231e7e", Component.options)
  } else {
    hotAPI.reload("data-v-75231e7e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(35)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(31),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/moia/Desktop/xiaobao-vue/mm_vue_plugins/node_modules/vux/src/components/tab/tab.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tab.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-251b338f", Component.options)
  } else {
    hotAPI.reload("data-v-251b338f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = typeof Array.from === 'function' ? Array.from : __webpack_require__(18);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Reference: http://www.ecma-international.org/ecma-262/6.0/#sec-array.from
module.exports = function () {
  var isCallable = function isCallable(fn) {
    return typeof fn === 'function';
  };
  var toInteger = function toInteger(value) {
    var number = Number(value);
    if (isNaN(number)) {
      return 0;
    }
    if (number === 0 || !isFinite(number)) {
      return number;
    }
    return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
  };
  var maxSafeInteger = Math.pow(2, 53) - 1;
  var toLength = function toLength(value) {
    var len = toInteger(value);
    return Math.min(Math.max(len, 0), maxSafeInteger);
  };
  var iteratorProp = function iteratorProp(value) {
    if (value != null) {
      if (['string', 'number', 'boolean', 'symbol'].indexOf(typeof value === 'undefined' ? 'undefined' : _typeof(value)) > -1) {
        return Symbol.iterator;
      } else if (typeof Symbol !== 'undefined' && 'iterator' in Symbol && Symbol.iterator in value) {
        return Symbol.iterator;
      }
      // Support "@@iterator" placeholder, Gecko 27 to Gecko 35
      else if ('@@iterator' in value) {
          return '@@iterator';
        }
    }
  };
  var getMethod = function getMethod(O, P) {
    // Assert: IsPropertyKey(P) is true.
    if (O != null && P != null) {
      // Let func be GetV(O, P).
      var func = O[P];
      // ReturnIfAbrupt(func).
      // If func is either undefined or null, return undefined.
      if (func == null) {
        return void 0;
      }
      // If IsCallable(func) is false, throw a TypeError exception.
      if (!isCallable(func)) {
        throw new TypeError(func + ' is not a function');
      }
      return func;
    }
  };
  var iteratorStep = function iteratorStep(iterator) {
    // Let result be IteratorNext(iterator).
    // ReturnIfAbrupt(result).
    var result = iterator.next();
    // Let done be IteratorComplete(result).
    // ReturnIfAbrupt(done).
    var done = Boolean(result.done);
    // If done is true, return false.
    if (done) {
      return false;
    }
    // Return result.
    return result;
  };

  // The length property of the from method is 1.
  return function from(items /*, mapFn, thisArg */) {
    'use strict';

    // 1. Let C be the this value.

    var C = this;

    // 2. If mapfn is undefined, let mapping be false.
    var mapFn = arguments.length > 1 ? arguments[1] : void 0;

    var T;
    if (typeof mapFn !== 'undefined') {
      // 3. else
      //   a. If IsCallable(mapfn) is false, throw a TypeError exception.
      if (!isCallable(mapFn)) {
        throw new TypeError('Array.from: when provided, the second argument must be a function');
      }

      //   b. If thisArg was supplied, let T be thisArg; else let T
      //      be undefined.
      if (arguments.length > 2) {
        T = arguments[2];
      }
      //   c. Let mapping be true (implied by mapFn)
    }

    var A, k;

    // 4. Let usingIterator be GetMethod(items, @@iterator).
    // 5. ReturnIfAbrupt(usingIterator).
    var usingIterator = getMethod(items, iteratorProp(items));

    // 6. If usingIterator is not undefined, then
    if (usingIterator !== void 0) {
      // a. If IsConstructor(C) is true, then
      //   i. Let A be the result of calling the [[Construct]]
      //      internal method of C with an empty argument list.
      // b. Else,
      //   i. Let A be the result of the abstract operation ArrayCreate
      //      with argument 0.
      // c. ReturnIfAbrupt(A).
      A = isCallable(C) ? Object(new C()) : [];

      // d. Let iterator be GetIterator(items, usingIterator).
      var iterator = usingIterator.call(items);

      // e. ReturnIfAbrupt(iterator).
      if (iterator == null) {
        throw new TypeError('Array.from requires an array-like or iterable object');
      }

      // f. Let k be 0.
      k = 0;

      // g. Repeat
      var next, nextValue;
      while (true) {
        // i. Let Pk be ToString(k).
        // ii. Let next be IteratorStep(iterator).
        // iii. ReturnIfAbrupt(next).
        next = iteratorStep(iterator);

        // iv. If next is false, then
        if (!next) {

          // 1. Let setStatus be Set(A, "length", k, true).
          // 2. ReturnIfAbrupt(setStatus).
          A.length = k;

          // 3. Return A.
          return A;
        }
        // v. Let nextValue be IteratorValue(next).
        // vi. ReturnIfAbrupt(nextValue)
        nextValue = next.value;

        // vii. If mapping is true, then
        //   1. Let mappedValue be Call(mapfn, T, «nextValue, k»).
        //   2. If mappedValue is an abrupt completion, return
        //      IteratorClose(iterator, mappedValue).
        //   3. Let mappedValue be mappedValue.[[value]].
        // viii. Else, let mappedValue be nextValue.
        // ix.  Let defineStatus be the result of
        //      CreateDataPropertyOrThrow(A, Pk, mappedValue).
        // x. [TODO] If defineStatus is an abrupt completion, return
        //    IteratorClose(iterator, defineStatus).
        if (mapFn) {
          A[k] = mapFn.call(T, nextValue, k);
        } else {
          A[k] = nextValue;
        }
        // xi. Increase k by 1.
        k++;
      }
      // 7. Assert: items is not an Iterable so assume it is
      //    an array-like object.
    } else {

      // 8. Let arrayLike be ToObject(items).
      var arrayLike = Object(items);

      // 9. ReturnIfAbrupt(items).
      if (items == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 10. Let len be ToLength(Get(arrayLike, "length")).
      // 11. ReturnIfAbrupt(len).
      var len = toLength(arrayLike.length);

      // 12. If IsConstructor(C) is true, then
      //     a. Let A be Construct(C, «len»).
      // 13. Else
      //     a. Let A be ArrayCreate(len).
      // 14. ReturnIfAbrupt(A).
      A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 15. Let k be 0.
      k = 0;
      // 16. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = arrayLike[k];
        if (mapFn) {
          A[k] = mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k++;
      }
      // 17. Let setStatus be Set(A, "length", len, true).
      // 18. ReturnIfAbrupt(setStatus).
      A.length = len;
      // 19. Return A.
    }
    return A;
  };
}();

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_array_from__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_object_assign__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_object_assign__);
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}




var Swiper = function () {
  function Swiper(options) {
    _classCallCheck(this, Swiper);

    this._default = {
      container: '.vux-swiper',
      item: '.vux-swiper-item',
      direction: 'vertical',
      activeClass: 'active',
      threshold: 50,
      duration: 300,
      auto: false,
      loop: false,
      interval: 3000,
      height: 'auto',
      minMovingDistance: 0
    };
    this._options = __WEBPACK_IMPORTED_MODULE_1_object_assign___default()(this._default, options);
    this._options.height = this._options.height.replace('px', '');
    this._start = {};
    this._move = {};
    this._end = {};
    this._eventHandlers = {};
    this._prev = this._current = this._goto = 0;
    this._width = this._height = this._distance = 0;
    this._offset = [];
    this.$box = this._options.container;
    this.$container = this._options.container.querySelector('.vux-swiper');
    this.$items = this.$container.querySelectorAll(this._options.item);
    this.count = this.$items.length;
    this.realCount = this.$items.length; // real items length
    this._position = []; // used by go event
    this._firstItemIndex = 0;
    if (!this.count) {
      return;
    }
    this._init();
    this._auto();
    this._bind();
    this._onResize();
    return this;
  }

  _createClass(Swiper, [{
    key: '_auto',
    value: function _auto() {
      var me = this;
      me.stop();
      if (me._options.auto) {
        me.timer = setTimeout(function () {
          me.next();
        }, me._options.interval);
      }
    }
  }, {
    key: 'updateItemWidth',
    value: function updateItemWidth() {
      this._width = this.$box.offsetWidth || document.documentElement.offsetWidth;
      this._distance = this._options.direction === 'horizontal' ? this._width : this._height;
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.timer && clearTimeout(this.timer);
    }
  }, {
    key: '_loop',
    value: function _loop() {
      return this._options.loop && this.realCount >= 3;
    }
  }, {
    key: '_onResize',
    value: function _onResize() {
      var me = this;
      this.resizeHandler = function () {
        setTimeout(function () {
          me.updateItemWidth();
          me._setOffset();
          me._setTransform();
        }, 100);
      };
      window.addEventListener('orientationchange', this.resizeHandler, false);
    }
  }, {
    key: '_init',
    value: function _init() {
      this._height = this._options.height === 'auto' ? 'auto' : this._options.height - 0;
      this.updateItemWidth();
      this._initPosition();
      this._activate(this._current);
      this._setOffset();
      this._setTransform();
      if (this._loop()) {
        this._loopRender();
      }
    }
  }, {
    key: '_initPosition',
    value: function _initPosition() {
      for (var i = 0; i < this.realCount; i++) {
        this._position.push(i);
      }
    }
  }, {
    key: '_movePosition',
    value: function _movePosition(position) {
      var me = this;
      if (position > 0) {
        var firstIndex = me._position.splice(0, 1);
        me._position.push(firstIndex[0]);
      } else if (position < 0) {
        var lastIndex = me._position.pop();
        me._position.unshift(lastIndex);
      }
    }
  }, {
    key: '_setOffset',
    value: function _setOffset() {
      var me = this;
      var index = me._position.indexOf(me._current);
      me._offset = [];
      __WEBPACK_IMPORTED_MODULE_0_array_from___default()(me.$items).forEach(function ($item, key) {
        me._offset.push((key - index) * me._distance);
      });
    }
  }, {
    key: '_setTransition',
    value: function _setTransition(duration) {
      duration = duration || this._options.duration || 'none';
      var transition = duration === 'none' ? 'none' : duration + 'ms';
      __WEBPACK_IMPORTED_MODULE_0_array_from___default()(this.$items).forEach(function ($item, key) {
        $item.style.webkitTransition = transition;
        $item.style.transition = transition;
      });
    }
  }, {
    key: '_setTransform',
    value: function _setTransform(offset) {
      var me = this;
      offset = offset || 0;
      __WEBPACK_IMPORTED_MODULE_0_array_from___default()(me.$items).forEach(function ($item, key) {
        var distance = me._offset[key] + offset;
        var transform = 'translate3d(' + distance + 'px, 0, 0)';
        if (me._options.direction === 'vertical') {
          transform = 'translate3d(0, ' + distance + 'px, 0)';
        }
        $item.style.webkitTransform = transform;
        $item.style.transform = transform;
      });
    }
  }, {
    key: '_bind',
    value: function _bind() {
      var me = this;
      me.touchstartHandler = function (e) {
        me.stop();
        me._start.x = e.changedTouches[0].pageX;
        me._start.y = e.changedTouches[0].pageY;
        me._setTransition('none');
      };
      me.touchmoveHandler = function (e) {
        me._move.x = e.changedTouches[0].pageX;
        me._move.y = e.changedTouches[0].pageY;
        var distanceX = me._move.x - me._start.x;
        var distanceY = me._move.y - me._start.y;
        var distance = distanceY;
        var noScrollerY = Math.abs(distanceX) > Math.abs(distanceY);
        if (me._options.direction === 'horizontal' && noScrollerY) {
          distance = distanceX;
        }
        if ((me._options.minMovingDistance && Math.abs(distance) >= me._options.minMovingDistance || !me._options.minMovingDistance) && noScrollerY) {
          me._setTransform(distance);
        }

        noScrollerY && e.preventDefault();
      };

      me.touchendHandler = function (e) {
        me._end.x = e.changedTouches[0].pageX;
        me._end.y = e.changedTouches[0].pageY;

        var distance = me._end.y - me._start.y;
        if (me._options.direction === 'horizontal') {
          distance = me._end.x - me._start.x;
        }

        distance = me.getDistance(distance);
        if (distance !== 0 && me._options.minMovingDistance && Math.abs(distance) < me._options.minMovingDistance) {
          return;
        }
        if (distance > me._options.threshold) {
          me.move(-1);
        } else if (distance < -me._options.threshold) {
          me.move(1);
        } else {
          me.move(0);
        }

        me._loopRender();
      };

      me.transitionEndHandler = function (e) {
        me._activate(me._current);
        var cb = me._eventHandlers.swiped;
        cb && cb.apply(me, [me._prev % me.count, me._current % me.count]);
        me._auto();
        me._loopRender();
        e.preventDefault();
      };
      me.$container.addEventListener('touchstart', me.touchstartHandler, false);
      me.$container.addEventListener('touchmove', me.touchmoveHandler, false);
      me.$container.addEventListener('touchend', me.touchendHandler, false);
      me.$items[1] && me.$items[1].addEventListener('webkitTransitionEnd', me.transitionEndHandler, false);
    }
  }, {
    key: '_loopRender',
    value: function _loopRender() {
      var me = this;
      if (me._loop()) {
        // issue #507 (delete cloneNode)
        if (me._offset[me._offset.length - 1] === 0) {
          me.$container.appendChild(me.$items[0]);
          me._loopEvent(1);
        } else if (me._offset[0] === 0) {
          me.$container.insertBefore(me.$items[me.$items.length - 1], me.$container.firstChild);
          me._loopEvent(-1);
        }
      }
    }
  }, {
    key: '_loopEvent',
    value: function _loopEvent(num) {
      var me = this;
      me._itemDestoy();
      me.$items = me.$container.querySelectorAll(me._options.item);
      me.$items[1] && me.$items[1].addEventListener('webkitTransitionEnd', me.transitionEndHandler, false);
      me._movePosition(num);
      me._setOffset();
      me._setTransform();
    }
  }, {
    key: 'getDistance',
    value: function getDistance(distance) {
      if (this._loop()) {
        return distance;
      } else {
        if (distance > 0 && this._current === 0) {
          return 0;
        } else if (distance < 0 && this._current === this.realCount - 1) {
          return 0;
        } else {
          return distance;
        }
      }
    }
  }, {
    key: '_moveIndex',
    value: function _moveIndex(num) {
      if (num !== 0) {
        this._prev = this._current;
        this._current += this.realCount;
        this._current += num;
        this._current %= this.realCount;
      }
    }
  }, {
    key: '_activate',
    value: function _activate(index) {
      var clazz = this._options.activeClass;
      Array.prototype.forEach.call(this.$items, function ($item, key) {
        $item.classList.remove(clazz);
        if (index === Number($item.dataset.index)) {
          $item.classList.add(clazz);
        }
      });
    }
  }, {
    key: 'go',
    value: function go(index) {
      var me = this;
      me.stop();

      index = index || 0;
      index += this.realCount;
      index = index % this.realCount;
      index = this._position.indexOf(index) - this._position.indexOf(this._current);

      me._moveIndex(index);
      me._setOffset();
      me._setTransition();
      me._setTransform();
      me._auto();
      return this;
    }
  }, {
    key: 'next',
    value: function next() {
      this.move(1);
      return this;
    }
  }, {
    key: 'move',
    value: function move(num) {
      this.go(this._current + num);
      return this;
    }
  }, {
    key: 'on',
    value: function on(event, callback) {
      if (this._eventHandlers[event]) {
        console.error('[swiper] event ' + event + ' is already register');
      }
      if (typeof callback !== 'function') {
        console.error('[swiper] parameter callback must be a function');
      }
      this._eventHandlers[event] = callback;
      return this;
    }
  }, {
    key: '_itemDestoy',
    value: function _itemDestoy() {
      var _this = this;

      this.$items.length && __WEBPACK_IMPORTED_MODULE_0_array_from___default()(this.$items).forEach(function (item) {
        item.removeEventListener('webkitTransitionEnd', _this.transitionEndHandler, false);
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.stop();
      this._current = 0;
      this._setTransform(0);
      window.removeEventListener('orientationchange', this.resizeHandler, false);
      this.$container.removeEventListener('touchstart', this.touchstartHandler, false);
      this.$container.removeEventListener('touchmove', this.touchmoveHandler, false);
      this.$container.removeEventListener('touchend', this.touchendHandler, false);
      this._itemDestoy();
      // remove clone item (used by loop only 2)
      if (this._options.loop && this.count === 2) {
        var $item = this.$container.querySelector(this._options.item + '-clone');
        $item && this.$container.removeChild($item);
        $item = this.$container.querySelector(this._options.item + '-clone');
        $item && this.$container.removeChild($item);
      }
    }
  }]);

  return Swiper;
}();

/* harmony default export */ __webpack_exports__["a"] = (Swiper);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    showLoading: {
      type: Boolean,
      default: true
    },
    tip: String,
    backgroundColor: String
  },
  methods: {
    getStyle: function getStyle() {
      if (!this.showLoading && this.tip) {
        return {
          'background-color': this.backgroundColor
        };
      }
    }
  }
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.$parent.rerender();
    });
  },
  beforeDestroy: function beforeDestroy() {
    var $parent = this.$parent;
    this.$nextTick(function () {
      $parent.rerender();
    });
  }
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__swiper_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_router__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.index = this.value || 0;
    if (this.index) {
      this.current = this.index;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.hasTwoLoopItem();
    this.$nextTick(function () {
      if (!(_this2.list && _this2.list.length === 0)) {
        _this2.render(_this2.index);
      }
      _this2.xheight = _this2.getHeight();
    });
  },

  methods: {
    hasTwoLoopItem: function hasTwoLoopItem() {
      if (this.list.length === 2 && this.loop) {
        this.listTwoLoopItem = this.list;
      }
    },
    clickListItem: function clickListItem(item) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__libs_router__["a" /* go */])(item.url, this.$router);
      this.$emit('on-click-list-item', JSON.parse(JSON.stringify(item)));
    },
    buildBackgroundUrl: function buildBackgroundUrl(url) {
      return 'url(' + url + ')';
    },
    render: function render() {
      var _this3 = this;

      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.swiper && this.swiper.destroy();
      this.swiper = new __WEBPACK_IMPORTED_MODULE_0__swiper_js__["a" /* default */]({
        container: this.$el,
        direction: this.direction,
        auto: this.auto,
        loop: this.loop,
        interval: this.interval,
        threshold: this.threshold,
        duration: this.duration,
        height: this.height || this._height,
        minMovingDistance: this.minMovingDistance,
        imgList: this.imgList
      }).on('swiped', function (prev, index) {
        _this3.current = index % _this3.length;
        _this3.index = index % _this3.length;
      });
      if (index > 0) {
        this.swiper.go(index);
      }
    },
    rerender: function rerender() {
      var _this4 = this;

      if (!this.$el || this.hasRender) {
        return;
      }
      this.hasRender = true;
      this.hasTwoLoopItem();
      this.$nextTick(function () {
        _this4.index = _this4.value || 0;
        _this4.current = _this4.value || 0;
        _this4.length = _this4.list.length || _this4.$children.length;
        _this4.destroy();
        _this4.render(_this4.value);
      });
    },
    destroy: function destroy() {
      this.swiper && this.swiper.destroy();
    },
    getHeight: function getHeight() {
      // when list.length > 0, it's better to set height or ratio
      var hasHeight = parseInt(this.height, 10);
      if (hasHeight) return this.height;
      if (!hasHeight) {
        if (this.aspectRatio) {
          return this.$el.offsetWidth * this.aspectRatio + 'px';
        }
        return '180px';
      }
    }
  },
  props: {
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    showDots: {
      type: Boolean,
      default: true
    },
    showDescMask: {
      type: Boolean,
      default: true
    },
    dotsPosition: {
      type: String,
      default: 'right'
    },
    dotsClass: String,
    auto: {
      type: Boolean,
      default: false
    },
    loop: Boolean,
    interval: {
      type: Number,
      default: 3000
    },
    threshold: {
      type: Number,
      default: 50
    },
    duration: {
      type: Number,
      default: 300
    },
    height: {
      type: String,
      default: 'auto'
    },
    aspectRatio: Number,
    minMovingDistance: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      hasRender: false,
      current: this.index || 0,
      xheight: 'auto',
      length: this.list.length,
      index: 0,
      // issue #1484 Fix click to fail
      listTwoLoopItem: []
    };
  },

  watch: {
    list: function list(val) {
      this.rerender();
    },
    current: function current(currentIndex) {
      this.index = currentIndex;
      this.$emit('on-index-change', currentIndex);
    },
    index: function index(val) {
      var _this = this;
      if (val !== this.current) {
        this.$nextTick(function () {
          _this.swiper && _this.swiper.go(val);
        });
      }
      this.$emit('input', val);
    },
    value: function value(val) {
      this.index = val;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.destroy();
  }
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__ = __webpack_require__(5);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__["a" /* childMixin */]],
  props: {
    activeClass: String,
    disabled: Boolean,
    badgeBackground: {
      type: String,
      default: '#f74c31'
    },
    badgeColor: {
      type: String,
      default: '#fff'
    },
    badgeLabel: String
  },
  computed: {
    style: function style() {
      return {
        borderWidth: this.$parent.lineWidth + 'px',
        borderColor: this.$parent.activeColor,
        color: this.currentSelected ? this.$parent.activeColor : this.disabled ? this.$parent.disabledColor : this.$parent.defaultColor,
        border: this.$parent.animate ? 'none' : 'auto'
      };
    }
  }
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__["b" /* parentMixin */]],
  mounted: function mounted() {
    var _this = this;

    // stop bar anmination on first loading
    this.$nextTick(function () {
      setTimeout(function () {
        _this.hasReady = true;
      }, 0);
    });
  },

  props: {
    lineWidth: {
      type: Number,
      default: 3
    },
    activeColor: String,
    barActiveColor: String,
    defaultColor: String,
    disabledColor: String,
    animate: {
      type: Boolean,
      default: true
    },
    customBarWidth: [Function, String]
  },
  computed: {
    barLeft: function barLeft() {
      return this.currentIndex * (100 / this.number) + '%';
    },
    barRight: function barRight() {
      return (this.number - this.currentIndex - 1) * (100 / this.number) + '%';
    },

    // when prop:custom-bar-width
    innerBarStyle: function innerBarStyle() {
      return {
        width: typeof this.customBarWidth === 'function' ? this.customBarWidth(this.currentIndex) : this.customBarWidth,
        backgroundColor: this.barActiveColor || this.activeColor
      };
    },

    // end
    barStyle: function barStyle() {
      var commonStyle = {
        left: this.barLeft,
        right: this.barRight,
        display: 'block',
        height: this.lineWidth + 'px',
        transition: !this.hasReady ? 'none' : null
      };
      if (!this.customBarWidth) {
        commonStyle.backgroundColor = this.barActiveColor || this.activeColor;
      } else {
        commonStyle.backgroundColor = 'transparent'; // when=prop:custom-bar-width
      }
      return commonStyle;
    },
    barClass: function barClass() {
      return {
        'vux-tab-ink-bar-transition-forward': this.direction === 'forward',
        'vux-tab-ink-bar-transition-backward': this.direction === 'backward'
      };
    }
  },
  watch: {
    currentIndex: function currentIndex(newIndex, oldIndex) {
      this.direction = newIndex > oldIndex ? 'forward' : 'backward';
      this.$emit('on-index-change', newIndex, oldIndex);
    }
  },
  data: function data() {
    return {
      direction: 'forward',
      right: '100%',
      hasReady: false
    };
  }
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".vux-tab-ink-bar{position:absolute;height:2px;bottom:0;left:0;background-color:#04be02;text-align:center}.vux-tab-ink-bar-transition-forward{-webkit-transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s;transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s}.vux-tab-ink-bar-transition-backward{-webkit-transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1);transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1)}.vux-tab{display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;height:44px;position:relative}.vux-tab button{padding:0;border:0;outline:0;background:0 0;-webkit-appearance:none;appearance:none}.vux-tab .vux-tab-item{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%;height:100%;box-sizing:border-box;background:-webkit-linear-gradient(top,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background:linear-gradient(180deg,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background-size:100% 1px;font-size:14px;text-align:center;line-height:44px;color:#666}.vux-tab .vux-tab-item.vux-tab-selected{color:#04be02;border-bottom:3px solid #04be02}.vux-tab .vux-tab-item.vux-tab-disabled{color:#ddd}.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected{background:0 0}.vux-tab-bar-inner{display:block;background-color:#04be02;margin:auto;height:100%;-webkit-transition:width .3s cubic-bezier(.35,0,.25,1);transition:width .3s cubic-bezier(.35,0,.25,1)}.vux-tab-item-badge{position:absolute;top:0;bottom:0;box-sizing:border-box;display:inline-block;height:18px;min-width:18px;padding:0 4px;border-radius:30px;margin:auto 0 auto 4px;line-height:18px;font-size:11px;background-clip:padding-box;vertical-align:middle}", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".vux-slider{overflow:hidden;position:relative}.vux-slider .vux-indicator-right,.vux-slider>.vux-indicator{position:absolute;right:15px;bottom:10px}.vux-slider .vux-indicator-right>a,.vux-slider>.vux-indicator>a{float:left;margin-left:6px}.vux-slider .vux-indicator-right>a>.vux-icon-dot,.vux-slider>.vux-indicator>a>.vux-icon-dot{display:inline-block;vertical-align:middle;width:6px;height:6px;border-radius:3px;background-color:#d0cdd1}.vux-slider .vux-indicator-right>a>.vux-icon-dot.active,.vux-slider>.vux-indicator>a>.vux-icon-dot.active{background-color:#04be02}.vux-slider>.vux-indicator-center{right:50%;-webkit-transform:translateX(50%);transform:translateX(50%)}.vux-slider>.vux-indicator-left{left:15px;right:auto}.vux-slider>.vux-swiper{overflow:hidden;position:relative}.vux-slider>.vux-swiper>.vux-swiper-item{position:absolute;top:0;left:0;width:100%;height:100%}.vux-slider>.vux-swiper>.vux-swiper-item>a{display:block;width:100%;height:100%}.vux-slider>.vux-swiper>.vux-swiper-item>a>.vux-img{display:block;width:100%;height:100%;background:50% no-repeat;background-size:cover}.vux-slider>.vux-swiper>.vux-swiper-item>a>.vux-swiper-desc{position:absolute;left:0;right:0;bottom:0;height:1.4em;font-size:16px;padding:20px 50px 12px 13px;margin:0;background-image:-webkit-linear-gradient(top,transparent,rgba(0,0,0,.7));background-image:linear-gradient(180deg,transparent 0,rgba(0,0,0,.7));color:#fff;text-shadow:0 1px 0 rgba(0,0,0,.5);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}", ""]);

// exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".weui-loading{width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:weuiLoading 1s steps(12) infinite;animation:weuiLoading 1s steps(12) infinite;background:transparent url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=\") no-repeat;background-size:100%}.weui-loading.weui-loading_transparent{background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTAwIDEwMCc+PHBhdGggZmlsbD0nbm9uZScgZD0nTTAgMGgxMDB2MTAwSDB6Jy8+PHJlY3QgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjU2KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0zMCknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDEwNS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjQzKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA3NS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjM4KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2NSA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjMyKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTguNjYgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4yOCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoMTUwIDU0LjAyIDY1KScvPjxyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA1MCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjIpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKC0xNTAgNDUuOTggNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xNyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTEyMCA0MS4zNCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjE0KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtOTAgMzUgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtNjAgMjQuMDIgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4wMyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTMwIC01Ljk4IDY1KScvPjwvc3ZnPgo=\")}@-webkit-keyframes weuiLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes weuiLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.weui-loadmore{width:65%;margin:1.5em auto;line-height:1.6em;font-size:14px;text-align:center}.weui-loadmore__tips{display:inline-block;vertical-align:middle}.weui-loadmore_line{border-top:1px solid #e5e5e5;margin-top:2.4em}.weui-loadmore_line .weui-loadmore__tips{position:relative;top:-.9em;padding:0 .55em;background-color:#fff;color:#999}.weui-loadmore_dot .weui-loadmore__tips{padding:0 .16em}.weui-loadmore_dot .weui-loadmore__tips:before{content:\" \";width:4px;height:4px;border-radius:50%;background-color:#e5e5e5;display:inline-block;position:relative;vertical-align:0;top:-.16em}", ""]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-swiper-item"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-067c9726", module.exports)
  }
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-tab",
    class: {
      'vux-tab-no-animate': !_vm.animate
    }
  }, [_vm._t("default"), _vm._v(" "), (_vm.animate) ? _c('div', {
    staticClass: "vux-tab-ink-bar",
    class: _vm.barClass,
    style: (_vm.barStyle)
  }, [(_vm.customBarWidth) ? _c('span', {
    staticClass: "vux-tab-bar-inner",
    style: (_vm.innerBarStyle)
  }) : _vm._e()]) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-251b338f", module.exports)
  }
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-slider"
  }, [_c('div', {
    staticClass: "vux-swiper",
    style: ({
      height: _vm.xheight
    })
  }, [_vm._t("default"), _vm._v(" "), _vm._l((_vm.list), function(item, index) {
    return _c('div', {
      staticClass: "vux-swiper-item",
      attrs: {
        "data-index": index
      },
      on: {
        "click": function($event) {
          _vm.clickListItem(item)
        }
      }
    }, [_c('a', {
      attrs: {
        "href": "javascript:"
      }
    }, [_c('div', {
      staticClass: "vux-img",
      style: ({
        backgroundImage: _vm.buildBackgroundUrl(item.img)
      })
    }), _vm._v(" "), (_vm.showDescMask) ? _c('p', {
      staticClass: "vux-swiper-desc"
    }, [_vm._v(_vm._s(item.title))]) : _vm._e()])])
  }), _vm._v(" "), _vm._l((_vm.listTwoLoopItem), function(item, index) {
    return (_vm.listTwoLoopItem.length > 0) ? _c('div', {
      staticClass: "vux-swiper-item vux-swiper-item-clone",
      attrs: {
        "data-index": index
      },
      on: {
        "click": function($event) {
          _vm.clickListItem(item)
        }
      }
    }, [_c('a', {
      attrs: {
        "href": "javascript:"
      }
    }, [_c('div', {
      staticClass: "vux-img",
      style: ({
        backgroundImage: _vm.buildBackgroundUrl(item.img)
      })
    }), _vm._v(" "), (_vm.showDescMask) ? _c('p', {
      staticClass: "vux-swiper-desc"
    }, [_vm._v(_vm._s(item.title))]) : _vm._e()])]) : _vm._e()
  })], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showDots),
      expression: "showDots"
    }],
    class: [_vm.dotsClass, 'vux-indicator', 'vux-indicator-' + _vm.dotsPosition]
  }, _vm._l((_vm.length), function(key) {
    return _c('a', {
      attrs: {
        "href": "javascript:"
      }
    }, [_c('i', {
      staticClass: "vux-icon-dot",
      class: {
        'active': key - 1 === _vm.current
      }
    })])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-551f5463", module.exports)
  }
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-tab-item",
    class: [_vm.currentSelected ? _vm.activeClass : '', {
      'vux-tab-selected': _vm.currentSelected,
      'vux-tab-disabled': _vm.disabled
    }],
    style: (_vm.style),
    on: {
      "click": _vm.onItemClick
    }
  }, [_vm._t("default"), _vm._v(" "), (typeof _vm.badgeLabel !== 'undefined' && _vm.badgeLabel !== '') ? _c('span', {
    staticClass: "vux-tab-item-badge",
    style: ({
      background: _vm.badgeBackground,
      color: _vm.badgeColor
    })
  }, [_vm._v(_vm._s(_vm.badgeLabel))]) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-75231e7e", module.exports)
  }
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-loadmore",
    class: {
      'weui-loadmore_line': !_vm.showLoading, 'weui-loadmore_dot': !_vm.showLoading && !_vm.tip
    }
  }, [(_vm.showLoading) ? _c('i', {
    staticClass: "weui-loading"
  }) : _vm._e(), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tip || !_vm.showLoading),
      expression: "tip || !showLoading"
    }],
    staticClass: "weui-loadmore__tips",
    style: (_vm.getStyle())
  }, [_vm._v(_vm._s(_vm.tip))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-778d5c53", module.exports)
  }
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0bd76816", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../css-loader/index.js!../../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-251b338f\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../vux-loader/src/after-less-loader.js!../../../../less-loader/dist/index.js!../../../../vux-loader/src/style-loader.js!../../../../vue-loader/lib/selector.js?type=styles&index=0!./tab.vue", function() {
     var newContent = require("!!../../../../css-loader/index.js!../../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-251b338f\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../vux-loader/src/after-less-loader.js!../../../../less-loader/dist/index.js!../../../../vux-loader/src/style-loader.js!../../../../vue-loader/lib/selector.js?type=styles&index=0!./tab.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("3ab95e3e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../css-loader/index.js!../../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-551f5463\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../vux-loader/src/after-less-loader.js!../../../../less-loader/dist/index.js!../../../../vux-loader/src/style-loader.js!../../../../vue-loader/lib/selector.js?type=styles&index=0!./swiper.vue", function() {
     var newContent = require("!!../../../../css-loader/index.js!../../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-551f5463\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../vux-loader/src/after-less-loader.js!../../../../less-loader/dist/index.js!../../../../vux-loader/src/style-loader.js!../../../../vue-loader/lib/selector.js?type=styles&index=0!./swiper.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1b11f982", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../css-loader/index.js!../../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-778d5c53\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../vux-loader/src/after-less-loader.js!../../../../less-loader/dist/index.js!../../../../vux-loader/src/style-loader.js!../../../../vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../css-loader/index.js!../../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-778d5c53\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../vux-loader/src/after-less-loader.js!../../../../less-loader/dist/index.js!../../../../vux-loader/src/style-loader.js!../../../../vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CourseSimpleTab_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CourseSimpleTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__CourseSimpleTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CourseSimpleTab_scss__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CourseSimpleTab_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__CourseSimpleTab_scss__);


if (true) {
    __WEBPACK_IMPORTED_MODULE_0__CourseSimpleTab_vue___default.a.install = function (Vue) {
        return Vue.component(__WEBPACK_IMPORTED_MODULE_0__CourseSimpleTab_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__CourseSimpleTab_vue___default.a);
    };
}
/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__CourseSimpleTab_vue___default.a);

/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(76),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/moia/Desktop/xiaobao-vue/mm_vue_plugins/src/course-simple-tab/CourseSimpleTab.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CourseSimpleTab.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d150701", Component.options)
  } else {
    hotAPI.reload("data-v-2d150701", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vux_src_components_tab_tab_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vux_src_components_tab_tab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vux_src_components_tab_tab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_tab_tab_item_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_tab_tab_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vux_src_components_tab_tab_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vux_src_components_swiper_swiper_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vux_src_components_swiper_swiper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vux_src_components_swiper_swiper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_src_components_swiper_swiper_item_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_src_components_swiper_swiper_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vux_src_components_swiper_swiper_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vux_src_components_load_more_index_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vux_src_components_load_more_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vux_src_components_load_more_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__course_lists__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_object_serialize__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_whatwg_fetch__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_whatwg_fetch__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'mm-course-simple-tab',
  data: function data() {
    return {
      index: 0,
      swiperList: [],
      course: [{
        name: '即将开课'
      }, {
        name: '已结课'
      }],
      pageCount: 10,
      courses: []
    };
  },

  components: {
    Tab: __WEBPACK_IMPORTED_MODULE_0_vux_src_components_tab_tab_vue___default.a,
    TabItem: __WEBPACK_IMPORTED_MODULE_1_vux_src_components_tab_tab_item_vue___default.a,
    Swiper: __WEBPACK_IMPORTED_MODULE_2_vux_src_components_swiper_swiper_vue___default.a,
    SwiperItem: __WEBPACK_IMPORTED_MODULE_3_vux_src_components_swiper_swiper_item_vue___default.a,
    MmCourseList: __WEBPACK_IMPORTED_MODULE_5__course_lists__["default"],
    LoadMore: __WEBPACK_IMPORTED_MODULE_4_vux_src_components_load_more_index_vue___default.a
  },
  methods: {
    getList: function getList() {
      var _this = this;

      var ind = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var pageNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var type = this.courses[ind]['data'];
      var body = {
        pageNum: pageNum,
        pageCount: this.pageCount
      };
      if (type) {
        Object.assign(body, _defineProperty({}, type, this.courses[ind][type]));
      }

      var canshu = {
        method: "post",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_object_serialize__["a" /* default */])(body)
      };
      return new Promise(function (resolve, reject) {
        //http://localhost:6060
        var requestHead = _this.requestHead || '';
        fetch(requestHead + '/api/course/all', canshu).then(function (resp) {
          return resp.json();
        }).then(function (re) {
          resolve(re.data);
          _this.courses[ind].page = pageNum;
        }).catch(function () {
          reject();
        });
      });
    },
    listFunc: function listFunc() {
      var _this2 = this;

      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var _courses$val = this.courses[val],
          _courses$val$page = _courses$val.page,
          page = _courses$val$page === undefined ? 0 : _courses$val$page,
          _courses$val$count = _courses$val.count,
          count = _courses$val$count === undefined ? 0 : _courses$val$count;

      if ((page - 1) * this.pageCount > count) {
        return;
      }
      var sl = this.swiperList[val];
      this.getList(val, this.courses[val].page).then(function (data) {
        var message = [];
        if (data.count) {
          message = data.list;
        }

        sl.count = data.count;
        sl.page = _this2.courses[val].page + 1;
        var t = [].push.apply(sl.message || [], data.list);
        sl.message = sl.message || data.list;
      }, function () {
        sl.message = [{
          title: '203期 节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生',
          category: '营销影响',
          buy_count: 100,
          // score:10.0,
          // scoreType:'pingjia',
          scoreType: 'yipingjia',
          next: _this2.$route.path + 10 + '/',
          cover_240x140: ''
        }];
      }).then(function () {
        _this2.$set(_this2.swiperList, val, _this2.swiperList[val]);
      });
    }
  },

  props: ['tags', 'pageCounts', 'requestHead'],

  mounted: function mounted() {
    this.pageCount = +this.pageCounts || 10;
  },
  created: function created() {
    this.swiperList = this.course;
    this.courses = this.course;

    this.listFunc();
  },

  watch: {
    index: function index(val) {
      this.listFunc(val);
      var div = document.querySelector('.mm-course-tab >div');
      var left = div.scrollLeft;
      var to = document.body.scrollWidth * 0.24 * (val - 1);
      var si = setInterval(function () {
        if (left < to) {
          div.scrollLeft = left++;
        } else if (left > to) {
          div.scrollLeft = left--;
        } else {
          clearInterval(si);
        }
      }, 2);
    }
  }
});

/***/ }),
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "mm-course-tab"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "overflow": "scroll",
      "-webkit-overflow-scrolling": "touch"
    }
  }, [_c('tab', {
    attrs: {
      "defaultColor": "#333",
      "activeColor": "#DC2832",
      "line-width": 2
    },
    model: {
      value: (_vm.index),
      callback: function($$v) {
        _vm.index = $$v
      },
      expression: "index"
    }
  }, _vm._l((_vm.course), function(item, index) {
    return _c('tab-item', {
      key: index,
      staticClass: "vux-center",
      attrs: {
        "disabled": !item
      }
    }, [_vm._v(_vm._s(item.name))])
  }))], 1), _vm._v(" "), _c('swiper', {
    attrs: {
      "show-dots": false,
      "id": "my-swiper"
    },
    model: {
      value: (_vm.index),
      callback: function($$v) {
        _vm.index = $$v
      },
      expression: "index"
    }
  }, _vm._l((_vm.swiperList), function(item, index) {
    return _c('swiper-item', {
      key: index
    }, [_c('div', {
      staticClass: "tab-swiper vux-center"
    }, [_vm._l((item.message), function(it) {
      return (item.message) ? _c('mm-course-list', {
        key: it,
        attrs: {
          "message": it
        }
      }) : _vm._e()
    }), _vm._v(" "), (!item.message) ? _c('load-more') : (!item.count) ? _c('div', {
      staticClass: "nomessage"
    }, [_c('img', {
      attrs: {
        "src": "//xbinstitute.oss-cn-hangzhou.aliyuncs.com/shield/image/plugin-pic/none.png",
        "alt": ""
      }
    }), _vm._v(" "), _c('span', [_vm._v("这里什么都没有，去别的地方看看吧~")])]) : _vm._e()], 2)])
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2d150701", module.exports)
  }
}

/***/ })
/******/ ]);
});