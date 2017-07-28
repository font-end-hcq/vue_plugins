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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
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

module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	"use strict";

	var SUBSTITUTE_REG = /\\?\{([^{}]+)\}/g,
	    EMPTY = '';

	var RE_TRIM = /^[\s\xa0]+|[\s\xa0]+$/g,
	    trim = String.prototype.trim;

	var _trim = trim ? function (str) {
		return str == null ? EMPTY : trim.call(str);
	} : function (str) {
		return str == null ? EMPTY : (str + '').replace(RE_TRIM, EMPTY);
	};

	function upperCase() {
		return arguments[1].toUpperCase();
	}

	function Empty() {}

	function createObject(proto, constructor) {
		var newProto;
		if (Object.create) {
			newProto = Object.create(proto);
		} else {
			Empty.prototype = proto;
			newProto = new Empty();
		}
		newProto.constructor = constructor;
		return newProto;
	}

	function getNodes(node, rootNode) {
		if (!node) return;
		if (node.nodeType) return [node];
		var rootNode = rootNode && rootNode.nodeType ? rootNode : document;
		if (node && typeof node === "string") {
			return rootNode.querySelectorAll(node);
		}
		return;
	}

	// Useful for temporary DOM ids.
	var idCounter = 0;

	var getOffsetTop = function getOffsetTop(el) {
		var offset = el.offsetTop;
		if (el.offsetParent != null) offset += getOffsetTop(el.offsetParent);
		return offset;
	};
	var getOffsetLeft = function getOffsetLeft(el) {
		var offset = el.offsetLeft;
		if (el.offsetParent != null) offset += getOffsetLeft(el.offsetParent);
		return offset;
	};

	var Util = {
		// Is a given variable an object?
		isObject: function isObject(obj) {
			return obj === Object(obj);
		},
		isArray: Array.isArray || function (obj) {
			return toString.call(obj) == '[object Array]';
		},
		// Is a given array, string, or object empty?
		// An "empty" object has no enumerable own-properties.
		isEmpty: function isEmpty(obj) {
			if (obj == null) return true;
			if (this.isArray(obj) || this.isString(obj)) return obj.length === 0;
			for (var key in obj) {
				if (this.has(obj, key)) return false;
			}return true;
		},
		mix: function mix(to, from, deep) {
			for (var i in from) {
				to[i] = from[i];
			}
			return to;
		},
		extend: function extend(r, s, px, sx) {
			if (!s || !r) {
				return r;
			}
			var sp = s.prototype,
			    rp;
			// add prototype chain
			rp = createObject(sp, r);
			r.prototype = this.mix(rp, r.prototype);
			r.superclass = createObject(sp, s);
			// add prototype overrides
			if (px) {
				this.mix(rp, px);
			}
			// add object overrides
			if (sx) {
				this.mix(r, sx);
			}
			return r;
		},
		/**
   * test whether a string start with a specified substring
   * @param {String} str the whole string
   * @param {String} prefix a specified substring
   * @return {Boolean} whether str start with prefix
   * @member util
   */
		startsWith: function startsWith(str, prefix) {
			return str.lastIndexOf(prefix, 0) === 0;
		},

		/**
   * test whether a string end with a specified substring
   * @param {String} str the whole string
   * @param {String} suffix a specified substring
   * @return {Boolean} whether str end with suffix
   * @member util
   */
		endsWith: function endsWith(str, suffix) {
			var ind = str.length - suffix.length;
			return ind >= 0 && str.indexOf(suffix, ind) === ind;
		},
		/**
   * Removes the whitespace from the beginning and end of a string.
   * @method
   * @member util
   */
		trim: _trim,
		/**
   * Substitutes keywords in a string using an object/array.
   * Removes undef keywords and ignores escaped keywords.
   * @param {String} str template string
   * @param {Object} o json data
   * @member util
   * @param {RegExp} [regexp] to match a piece of template string
   */
		substitute: function substitute(str, o, regexp) {
			if (typeof str !== 'string' || !o) {
				return str;
			}

			return str.replace(regexp || SUBSTITUTE_REG, function (match, name) {
				if (match.charAt(0) === '\\') {
					return match.slice(1);
				}
				return o[name] === undefined ? EMPTY : o[name];
			});
		},
		/**
   * vendors
   * @return { String } webkit|moz|ms|o
   * @memberOf Util
   */
		vendor: function () {
			var el = document.createElement('div').style;
			var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			    transform,
			    i = 0,
			    l = vendors.length;
			for (; i < l; i++) {
				transform = vendors[i] + 'ransform';
				if (transform in el) return vendors[i].substr(0, vendors[i].length - 1);
			}
			return false;
		}(),
		/**
   *  add vendor to attribute
   *  @memberOf Util
   *  @param {String} attrName name of attribute
   *  @return { String }
   **/
		prefixStyle: function prefixStyle(attrName) {
			if (this.vendor === false) return false;
			if (this.vendor === '') return attrName;
			return this.vendor + attrName.charAt(0).toUpperCase() + attrName.substr(1);
		},
		/**
   * judge if has class
   * @memberOf Util
   * @param  {HTMLElement}  el
   * @param  {String}  className
   * @return {Boolean}
   */
		hasClass: function hasClass(el, className) {
			return el && el.className && className && el.className.indexOf(className) != -1;
		},
		/**
   * add className for the element
   * @memberOf Util
   * @param  {HTMLElement}  el
   * @param  {String}  className
   */
		addClass: function addClass(el, className) {
			if (el && className && !this.hasClass(el, className)) {
				el.className += " " + className;
			}
		},
		/**
   * remove className for the element
   * @memberOf Util
   * @param  {HTMLElement}  el
   * @param  {String}  className
   */
		removeClass: function removeClass(el, className) {
			if (el && el.className && className) {
				el.className = el.className.replace(className, "");
			}
		},
		/**
   * remove an element
   * @memberOf Util
   * @param  {HTMLElement}  el
   */
		remove: function remove(el) {
			if (!el || !el.parentNode) return;
			el.parentNode.removeChild(el);
		},
		/**
   * get offset top
   * @memberOf Util
   * @param  {HTMLElement}   el
   * @return {Number} offsetTop
   */
		getOffsetTop: getOffsetTop,
		/**
   * get offset left
   * @memberOf Util
   * @param  {HTMLElement}  el
   * @return {Number} offsetLeft
   */
		getOffsetLeft: getOffsetLeft,
		/**
   * get offset left
   * @memberOf Util
   * @param  {HTMLElement} el
   * @param  {String} selector
   * @param  {HTMLElement} rootNode
   * @return {HTMLElement} parent element
   */
		findParentEl: function findParentEl(el, selector, rootNode) {
			var rs = null,
			    parent = null;
			var type = /^#/.test(selector) ? "id" : /^\./.test(selector) ? "class" : "tag";
			var sel = selector.replace(/\.|#/g, "");
			if (rootNode && typeof rootNode === "string") {
				rootNode = document.querySelector(rootNode);
			}
			rootNode = rootNode || document.body;
			if (!el || !selector) return;
			if (type == "class" && el.className && el.className.match(sel)) {
				return el;
			} else if (type == "id" && el.id && _trim(el.id) == sel) {
				return el;
			} else if (type == "tag" && el.tagName.toLowerCase() == sel) {
				return el;
			}
			while (!rs) {
				if (parent == rootNode) break;
				parent = el.parentNode;
				if (!parent) break;
				if (type == "class" && parent.className && parent.className.match(sel) || type == "id" && parent.id && _trim(parent.id) == sel || type == "tag" && parent.tagName && parent.tagName.toLowerCase() == sel) {
					rs = parent;
					return rs;
					break;
				} else {
					el = parent;
				}
			}
			return null;
		},
		/**
   * Generate a unique integer id (unique within the entire client session).
   * @param  {String} prefix
   * @return {String} guid
   */
		guid: function guid(prefix) {
			var id = ++idCounter + '';
			return prefix ? prefix + id : id;
		},
		/**
   * judge if is an android os
   * @return {Boolean} [description]
   */
		isAndroid: function isAndroid() {
			return (/Android /.test(window.navigator.appVersion)
			);
		},
		/**
   * judge if is an android device with low  performance
   * @return {Boolean}
   */
		isBadAndroid: function isBadAndroid() {
			return (/Android /.test(window.navigator.appVersion) && !/Chrome\/\d/.test(window.navigator.appVersion)
			);
		},
		px2Num: function px2Num(px) {
			return Number(px.replace(/px/, ''));
		},
		getNodes: getNodes,
		getNode: function getNode(node, rootNode) {
			var nodes = getNodes(node, rootNode);
			return nodes && nodes[0];
		},
		stringifyStyle: function stringifyStyle(style) {
			var styleStr = "";
			for (var i in style) {
				styleStr += [i, ":", style[i], ";"].join("");
			}
			return styleStr;
		}
	};

	// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
	var names = ['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'];
	for (var i = 0; i < names.length; i++) {
		Util['is' + names[i]] = function (obj) {
			return toString.call(obj) == '[object ' + names[i] + ']';
		};
	}

	if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
		module.exports = Util;
	}
	/** ignored by jsdoc **/
	else {
			return Util;
		}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	"use strict";

	var Util = __webpack_require__(2);
	var Events = __webpack_require__(75);
	/** 
       @constructor 
       @mixes Events
       */
	var Base = function Base() {};

	Util.mix(Base.prototype, Events);

	Util.mix(Base.prototype, {
		/**
   * @memberof Base
   * @param  {object} plugin plug a plugin
   */
		plug: function plug(plugin) {
			var self = this;
			if (!plugin || !plugin.pluginId) return;
			if (!self.__plugins) {
				self.__plugins = [];
			}
			var __plugin = self.getPlugin(plugin.pluginId);
			__plugin && self.unplug(plugin.pluginId);
			plugin.pluginInitializer(self);
			self.__plugins.push(plugin);
			return self;
		},
		/**
   * @memberof Base
   * @param  {object|string} plugin unplug a plugin by pluginId or plugin instance
   */
		unplug: function unplug(plugin) {
			var self = this;
			if (!plugin || !self.__plugins) return;
			var _plugin = typeof plugin == "string" ? self.getPlugin(plugin) : plugin;
			_plugin.pluginDestructor(self);
			for (var i = 0, l = self.__plugins.length; i < l; i++) {
				if (self.__plugins[i] == _plugin) {
					return self.__plugins.splice(i, 1);
				}
			}
		},
		/**
   * @memberof Base
   * @param  {object|string} plugin get plugin by pluginId
   */
		getPlugin: function getPlugin(pluginId) {
			var self = this;
			var plugins = [];
			if (!self.__plugins) return;
			for (var i = 0, l = self.__plugins.length; i < l; i++) {
				if (self.__plugins[i] && self.__plugins[i].pluginId == pluginId) {
					plugins.push(self.__plugins[i]);
				}
			}
			return plugins.length > 1 ? plugins : plugins[0] || null;
		}
	});

	if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
		module.exports = Base;
	}
	/** ignored by jsdoc **/
	else {
			return Base;
		}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 4 */
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
/* 5 */
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

var listToStyles = __webpack_require__(25)

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	"use strict";

	var Util = __webpack_require__(2);
	var Timer = __webpack_require__(28);
	var Easing = __webpack_require__(27);
	var Base = __webpack_require__(3);
	//transform
	var vendorTransform = Util.prefixStyle("transform");
	//transition webkitTransition MozTransition OTransition msTtransition
	var vendorTransition = Util.prefixStyle("transition");

	var vendorTransitionDuration = Util.prefixStyle("transitionDuration");

	var vendorTransformOrigin = Util.prefixStyle("transformOrigin");

	var vendorTransitionEnd = Util.vendor ? Util.prefixStyle("transitionEnd") : "transitionend";

	var vendorTransformStr = Util.vendor ? ["-", Util.vendor, "-transform"].join("") : "transform";

	var translateTpl = 'translateX({translateX}px) translateY({translateY}px) translateZ(0)';
	//limit attrs
	var animAttrs = {
		'transform': true,
		'opacity': true,
		'scrollTop': true,
		'scrollLeft': true
	};

	function myParse(v) {
		return Math.round(parseFloat(v) * 1e5) / 1e5;
	}

	function defaultDecompose() {
		return {
			translateX: 0,
			translateY: 0,
			rotate: 0,
			skewX: 0,
			skewY: 0,
			scaleX: 1,
			scaleY: 1
		};
	}

	function toMatrixArray(matrix) {
		matrix = matrix.split(/,/);
		matrix = Array.prototype.map.call(matrix, function (v) {
			return myParse(v);
		});
		return matrix;
	}

	function decomposeMatrix(matrix) {
		matrix = toMatrixArray(matrix);
		var scaleX,
		    scaleY,
		    skew,
		    A = matrix[0],
		    B = matrix[1],
		    C = matrix[2],
		    D = matrix[3];

		// Make sure matrix is not singular
		if (A * D - B * C) {
			scaleX = Math.sqrt(A * A + B * B);
			skew = (A * C + B * D) / (A * D - C * B);
			scaleY = (A * D - B * C) / scaleX;
			// step (6)
			if (A * D < B * C) {
				skew = -skew;
				scaleX = -scaleX;
			}
			// matrix is singular and cannot be interpolated
		} else {
			// In this case the elem shouldn't be rendered, hence scale == 0
			scaleX = scaleY = skew = 0;
		}

		// The recomposition order is very important
		// see http://hg.mozilla.org/mozilla-central/file/7cb3e9795d04/layout/style/nsStyleAnimation.cpp#l971
		return {
			translateX: myParse(matrix[4]),
			translateY: myParse(matrix[5]),
			rotate: myParse(Math.atan2(B, A) * 180 / Math.PI),
			skewX: myParse(Math.atan(skew) * 180 / Math.PI),
			skewY: 0,
			scaleX: myParse(scaleX),
			scaleY: myParse(scaleY)
		};
	}

	function getTransformInfo(transform) {
		transform = transform.split(')');
		var trim = Util.trim,
		    i = -1,
		    l = transform.length - 1,
		    split,
		    prop,
		    val,
		    ret = defaultDecompose();

		// Loop through the transform properties, parse and multiply them
		while (++i < l) {
			split = transform[i].split('(');
			prop = trim(split[0]);
			val = split[1];
			switch (prop) {
				case 'translateX':
				case 'translateY':
				case 'scaleX':
				case 'scaleY':
					ret[prop] = myParse(val);
					break;
				case 'translate':
				case 'translate3d':
					val = val.split(',');
					ret.translateX = myParse(val[0]);
					ret.translateY = myParse(val[1] || 0);
					break;
				case 'scale':
					val = val.split(',');
					ret.scaleX = myParse(val[0]);
					ret.scaleY = myParse(val[1] || val[0]);
					break;
				case 'matrix':
					return decomposeMatrix(val);
			}
		}

		return ret;
	}

	/**
  * animate function
  * @constructor
  * @param {HTMLElement} el element to animate
  * @param {Object} config config for animate
  * @param {Object} config.css
  * @param {Number} config.duration
  * @param {String} config.easing
  * @extends {Base}
  */
	function Animate(el, cfg) {
		if (!el || !cfg || !cfg.css) return;
		var self = this;
		self.cfg = cfg;
		self.el = el;
		var duration = cfg.duration || 0,
		    easing = cfg.easing || "ease",
		    delay = cfg.delay || 0;
		//trigger run
		if (cfg.run) {
			//frame animate
			self.timer = self.timer || new Timer({
				duration: Math.round(duration),
				easing: easing
			});
			self.timer.on("run", cfg.run);
		}
		self._bindEvt();
		return self;
	}

	function computeTransform(prevTransform, destTransform) {
		var transform = getTransformInfo(prevTransform);
		var dest = getTransformInfo(destTransform);
		var trans = {};
		for (var i in dest) {
			trans[i] = {
				prevVal: transform[i],
				newVal: dest[i]
			};
		}
		return trans;
	}

	//for scroll only
	function setStyle(el, styleName, prevVal, newVal, percent) {
		prevVal = isNaN(Number(prevVal)) ? 0 : Number(prevVal);
		var curVal = (newVal - prevVal) * percent + prevVal;
		css(el, styleName, curVal);
	}

	function css(el, styleName, val) {
		switch (styleName) {
			case "scrollTop":
			case "scrollLeft":
				el[styleName] = val;
				break;
			case "transform":
				el.style[vendorTransform] = val;
			case "opacity":
				el.style[styleName] = val;
				break;

		}
	}

	Util.extend(Animate, Base, {
		/**
   * to start the animation
   * @memberof Animate
   * @return {Animate}
   */
		run: function run() {
			var self = this;
			var cfg = self.cfg,
			    el = self.el,
			    duration = cfg.duration || 0,
			    easing = cfg.easing || "ease",
			    delay = cfg.delay || 0;
			self.__isTransitionEnd = false;
			clearTimeout(self.__itv);
			self.timer && self.timer.run();
			if (duration <= Timer.MIN_DURATION) {
				for (var i in cfg.css) {
					css(el, i, cfg.css[i]);
				}
				self.stop();
				self.__handlers.stop.call(self);
				return;
			}

			if (Util.isBadAndroid()) {
				//use frame animate on bad android device
				cfg.useTransition = false;
			}

			if (cfg.useTransition) {
				//transition
				el.style[vendorTransition] = Util.substitute('all {duration}ms {easing} {delay}ms', {
					duration: Math.round(duration),
					easing: Easing.format(easing),
					delay: delay
				});
				for (var i in cfg.css) {
					//set css
					css(el, i, cfg.css[i]);
				}
				self.__itv = setTimeout(function () {
					if (!self.__isTransitionEnd) {
						self.__isTransitionEnd = true;
						self.trigger("transitionend");
					}
				}, Number(duration) + 60);
			} else {
				self.computeStyle = self.computeStyle || window.getComputedStyle(el);
				//transform
				if (cfg.css.transform && self.timer) {
					var transmap = self.transmap = computeTransform(self.computeStyle[vendorTransform], cfg.css.transform);
					self.timer.off("run", self.__handlers.transRun);
					self.timer.on("run", self.__handlers.transRun, self);
					self.timer.off("end", self.__handlers.transRun);
					self.timer.on("end", self.__handlers.transRun, self);
				}
			}
			return self;
		},
		_transitionEndHandler: function _transitionEndHandler(e) {
			var self = this;
			self.stop();
			self.__handlers.stop.call(self);
		},
		__handlers: {
			transRun: function transRun(e) {
				var self = this;
				var transmap = self.transmap;
				var el = self.el;
				var newTrans = {};
				for (var i in transmap) {
					newTrans[i] = (transmap[i].newVal - transmap[i].prevVal) * e.percent + transmap[i].prevVal;
				}
				var ret = Util.substitute(translateTpl + ' ' + 'scale({scaleX},{scaleY})', newTrans);
				el.style[vendorTransform] = ret;
			},
			stop: function stop(e) {
				var self = this;
				var cfg = self.cfg;
				cfg.end && cfg.end({
					percent: 1
				});
			}
		},
		_bindEvt: function _bindEvt() {
			var self = this;
			var cfg = self.cfg;
			var el = self.el;
			self.el.addEventListener(vendorTransitionEnd, function (e) {
				self.__isTransitionEnd = true;
				if (e.target !== e.currentTarget) return;
				self.trigger("transitionend", e);
			});
			self.on("transitionend", self._transitionEndHandler, self);
			var cssRun = function cssRun(e) {
				self.computeStyle = self.computeStyle || window.getComputedStyle(el);
				for (var i in cfg.css) {
					if (!/transform/.test(i)) {
						setStyle(self.el, i, self.computeStyle[i], cfg.css[i], e.percent);
					}
				}
			};
			self.timer && self.timer.on("run", cssRun);
			self.timer && self.timer.on("stop", self.__handlers.stop, self);
		},
		/**
   * to stop the animation
   * @memberof Animate
   * @return {Animate}
   */
		stop: function stop() {
			var self = this;
			if (self.cfg.useTransition && self.cfg.duration > Timer.MIN_DURATION) {
				var computeStyle = window.getComputedStyle(this.el);
				for (var i in self.cfg.css) {
					if (animAttrs[i]) {
						var value = /transform/.test(i) ? computeStyle[vendorTransform] : computeStyle[i];
						css(self.el, i, Util.substitute(translateTpl + ' ' + 'scale({scaleX},{scaleY})', getTransformInfo(value)));
					}
				}
				self.el.style[vendorTransition] = "none";
			}
			self.timer && self.timer.stop() && self.timer.reset();
			self.computeStyle = null;
			return self;
		},
		/**
   * to reset the animation to a new state
   * @memberof Animate
   * @param {object} cfg cfg for new animation
   * @return {Animate}
   */
		reset: function reset(cfg) {
			var self = this;
			self.computeStyle = null;
			Util.mix(self.cfg, cfg);
			this.timer && self.timer.reset({
				duration: Math.round(self.cfg.duration),
				easing: self.cfg.easing
			});
			return self;
		}
	});

	if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
		module.exports = Animate;
	}
	/** ignored by jsdoc **/
	else {
			return Animate;
		}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__List_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__List_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__List_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_scss__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__list_scss__);



if (true) {
    __WEBPACK_IMPORTED_MODULE_0__List_vue___default.a.install = function (Vue) {
        return Vue.component(__WEBPACK_IMPORTED_MODULE_0__List_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__List_vue___default.a);
    };
}
/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__List_vue___default.a);

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parentMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return childMixin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_router__ = __webpack_require__(8);


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
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(15),
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
    /*! Hammer.JS - v2.0.4 - 2014-09-28
     * http://hammerjs.github.io/
     *
     * Copyright (c) 2014 Jorik Tangelder;
     * Licensed under the MIT license */
    'use strict';

    var VENDOR_PREFIXES = ['', 'webkit', 'moz', 'MS', 'ms', 'o'];
    var TEST_ELEMENT = document.createElement('div');

    var TYPE_FUNCTION = 'function';

    var round = Math.round;
    var abs = Math.abs;
    var now = Date.now;

    /**
     * set a timeout with a given scope
     * @param {Function} fn
     * @param {Number} timeout
     * @param {Object} context
     * @returns {number}
     */
    function setTimeoutContext(fn, timeout, context) {
        return setTimeout(bindFn(fn, context), timeout);
    }

    /**
     * if the argument is an array, we want to execute the fn on each entry
     * if it aint an array we don't want to do a thing.
     * this is used by all the methods that accept a single and array argument.
     * @param {*|Array} arg
     * @param {String} fn
     * @param {Object} [context]
     * @returns {Boolean}
     */
    function invokeArrayArg(arg, fn, context) {
        if (Array.isArray(arg)) {
            each(arg, context[fn], context);
            return true;
        }
        return false;
    }

    /**
     * walk objects and arrays
     * @param {Object} obj
     * @param {Function} iterator
     * @param {Object} context
     */
    function each(obj, iterator, context) {
        var i;

        if (!obj) {
            return;
        }

        if (obj.forEach) {
            obj.forEach(iterator, context);
        } else if (obj.length !== undefined) {
            i = 0;
            while (i < obj.length) {
                iterator.call(context, obj[i], i, obj);
                i++;
            }
        } else {
            for (i in obj) {
                obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
            }
        }
    }

    /**
     * extend object.
     * means that properties in dest will be overwritten by the ones in src.
     * @param {Object} dest
     * @param {Object} src
     * @param {Boolean} [merge]
     * @returns {Object} dest
     */
    function extend(dest, src, merge) {
        var keys = Object.keys(src);
        var i = 0;
        while (i < keys.length) {
            if (!merge || merge && dest[keys[i]] === undefined) {
                dest[keys[i]] = src[keys[i]];
            }
            i++;
        }
        return dest;
    }

    /**
     * merge the values from src in the dest.
     * means that properties that exist in dest will not be overwritten by src
     * @param {Object} dest
     * @param {Object} src
     * @returns {Object} dest
     */
    function merge(dest, src) {
        return extend(dest, src, true);
    }

    /**
     * simple class inheritance
     * @param {Function} child
     * @param {Function} base
     * @param {Object} [properties]
     */
    function inherit(child, base, properties) {
        var baseP = base.prototype,
            childP;

        childP = child.prototype = Object.create(baseP);
        childP.constructor = child;
        childP._super = baseP;

        if (properties) {
            extend(childP, properties);
        }
    }

    /**
     * simple function bind
     * @param {Function} fn
     * @param {Object} context
     * @returns {Function}
     */
    function bindFn(fn, context) {
        return function boundFn() {
            return fn.apply(context, arguments);
        };
    }

    /**
     * let a boolean value also be a function that must return a boolean
     * this first item in args will be used as the context
     * @param {Boolean|Function} val
     * @param {Array} [args]
     * @returns {Boolean}
     */
    function boolOrFn(val, args) {
        if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) == TYPE_FUNCTION) {
            return val.apply(args ? args[0] || undefined : undefined, args);
        }
        return val;
    }

    /**
     * use the val2 when val1 is undefined
     * @param {*} val1
     * @param {*} val2
     * @returns {*}
     */
    function ifUndefined(val1, val2) {
        return val1 === undefined ? val2 : val1;
    }

    /**
     * addEventListener with multiple events at once
     * @param {EventTarget} target
     * @param {String} types
     * @param {Function} handler
     */
    function addEventListeners(target, types, handler) {
        each(splitStr(types), function (type) {
            target.addEventListener(type, handler, false);
        });
    }

    /**
     * removeEventListener with multiple events at once
     * @param {EventTarget} target
     * @param {String} types
     * @param {Function} handler
     */
    function removeEventListeners(target, types, handler) {
        each(splitStr(types), function (type) {
            target.removeEventListener(type, handler, false);
        });
    }

    /**
     * find if a node is in the given parent
     * @method hasParent
     * @param {HTMLElement} node
     * @param {HTMLElement} parent
     * @return {Boolean} found
     */
    function hasParent(node, parent) {
        while (node) {
            if (node == parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }

    /**
     * small indexOf wrapper
     * @param {String} str
     * @param {String} find
     * @returns {Boolean} found
     */
    function inStr(str, find) {
        return str.indexOf(find) > -1;
    }

    /**
     * split string on whitespace
     * @param {String} str
     * @returns {Array} words
     */
    function splitStr(str) {
        return str.trim().split(/\s+/g);
    }

    /**
     * find if a array contains the object using indexOf or a simple polyFill
     * @param {Array} src
     * @param {String} find
     * @param {String} [findByKey]
     * @return {Boolean|Number} false when not found, or the index
     */
    function inArray(src, find, findByKey) {
        if (src.indexOf && !findByKey) {
            return src.indexOf(find);
        } else {
            var i = 0;
            while (i < src.length) {
                if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
                    return i;
                }
                i++;
            }
            return -1;
        }
    }

    /**
     * convert array-like objects to real arrays
     * @param {Object} obj
     * @returns {Array}
     */
    function toArray(obj) {
        return Array.prototype.slice.call(obj, 0);
    }

    /**
     * unique array with objects based on a key (like 'id') or just by the array's value
     * @param {Array} src [{id:1},{id:2},{id:1}]
     * @param {String} [key]
     * @param {Boolean} [sort=False]
     * @returns {Array} [{id:1},{id:2}]
     */
    function uniqueArray(src, key, sort) {
        var results = [];
        var values = [];
        var i = 0;

        while (i < src.length) {
            var val = key ? src[i][key] : src[i];
            if (inArray(values, val) < 0) {
                results.push(src[i]);
            }
            values[i] = val;
            i++;
        }

        if (sort) {
            if (!key) {
                results = results.sort();
            } else {
                results = results.sort(function sortUniqueArray(a, b) {
                    return a[key] > b[key];
                });
            }
        }

        return results;
    }

    /**
     * get the prefixed property
     * @param {Object} obj
     * @param {String} property
     * @returns {String|Undefined} prefixed
     */
    function prefixed(obj, property) {
        var prefix, prop;
        var camelProp = property[0].toUpperCase() + property.slice(1);

        var i = 0;
        while (i < VENDOR_PREFIXES.length) {
            prefix = VENDOR_PREFIXES[i];
            prop = prefix ? prefix + camelProp : property;

            if (prop in obj) {
                return prop;
            }
            i++;
        }
        return undefined;
    }

    /**
     * get a unique id
     * @returns {number} uniqueId
     */
    var _uniqueId = 1;
    function uniqueId() {
        return _uniqueId++;
    }

    /**
     * get the window object of an element
     * @param {HTMLElement} element
     * @returns {DocumentView|Window}
     */
    function getWindowForElement(element) {
        var doc = element.ownerDocument;
        return doc.defaultView || doc.parentWindow;
    }

    var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

    var SUPPORT_TOUCH = 'ontouchstart' in window;
    var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
    var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

    var INPUT_TYPE_TOUCH = 'touch';
    var INPUT_TYPE_PEN = 'pen';
    var INPUT_TYPE_MOUSE = 'mouse';
    var INPUT_TYPE_KINECT = 'kinect';

    var COMPUTE_INTERVAL = 25;

    var INPUT_START = 1;
    var INPUT_MOVE = 2;
    var INPUT_END = 4;
    var INPUT_CANCEL = 8;

    var DIRECTION_NONE = 1;
    var DIRECTION_LEFT = 2;
    var DIRECTION_RIGHT = 4;
    var DIRECTION_UP = 8;
    var DIRECTION_DOWN = 16;

    var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
    var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
    var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

    var PROPS_XY = ['x', 'y'];
    var PROPS_CLIENT_XY = ['clientX', 'clientY'];

    /**
     * create new input type manager
     * @param {Manager} manager
     * @param {Function} callback
     * @returns {Input}
     * @constructor
     */
    function Input(manager, callback) {
        var self = this;
        this.manager = manager;
        this.callback = callback;
        this.element = manager.element;
        this.target = manager.options.inputTarget;

        // smaller wrapper around the handler, for the scope and the enabled state of the manager,
        // so when disabled the input events are completely bypassed.
        this.domHandler = function (ev) {
            if (boolOrFn(manager.options.enable, [manager])) {
                self.handler(ev);
            }
        };

        this.init();
    }

    Input.prototype = {
        /**
         * should handle the inputEvent data and trigger the callback
         * @virtual
         */
        handler: function handler() {},

        /**
         * bind the events
         */
        init: function init() {
            this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
            this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
            this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
        },

        /**
         * unbind the events
         */
        destroy: function destroy() {
            this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
            this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
            this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
        }
    };

    /**
     * create new input type manager
     * called by the Manager constructor
     * @param {Hammer} manager
     * @returns {Input}
     */
    function createInputInstance(manager) {
        var Type;
        var inputClass = manager.options.inputClass;

        if (inputClass) {
            Type = inputClass;
        } else if (SUPPORT_POINTER_EVENTS) {
            Type = PointerEventInput;
        } else if (SUPPORT_ONLY_TOUCH) {
            Type = TouchInput;
        } else if (!SUPPORT_TOUCH) {
            Type = MouseInput;
        } else {
            Type = TouchMouseInput;
        }
        return new Type(manager, inputHandler);
    }

    /**
     * handle input events
     * @param {Manager} manager
     * @param {String} eventType
     * @param {Object} input
     */
    function inputHandler(manager, eventType, input) {
        var pointersLen = input.pointers.length;
        var changedPointersLen = input.changedPointers.length;
        var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
        var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;

        input.isFirst = !!isFirst;
        input.isFinal = !!isFinal;
        if (isFirst) {
            manager.session = {};
        }

        // source event is the normalized value of the domEvents
        // like 'touchstart, mouseup, pointerdown'
        input.eventType = eventType;

        // compute scale, rotation etc
        computeInputData(manager, input);

        // emit secret event
        manager.emit('hammer.input', input);

        manager.recognize(input);
        manager.session.prevInput = input;
    }

    /**
     * extend the data with some usable properties like scale, rotate, velocity etc
     * @param {Object} manager
     * @param {Object} input
     */
    function computeInputData(manager, input) {
        var session = manager.session;
        var pointers = input.pointers;
        var pointersLength = pointers.length;

        // store the first input to calculate the distance and direction
        if (!session.firstInput) {
            session.firstInput = simpleCloneInputData(input);
        }

        // to compute scale and rotation we need to store the multiple touches
        if (pointersLength > 1 && !session.firstMultiple) {
            session.firstMultiple = simpleCloneInputData(input);
        } else if (pointersLength === 1) {
            session.firstMultiple = false;
        }

        var firstInput = session.firstInput;
        var firstMultiple = session.firstMultiple;
        var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

        var center = input.center = getCenter(pointers);
        input.timeStamp = now();
        input.deltaTime = input.timeStamp - firstInput.timeStamp;

        input.angle = getAngle(offsetCenter, center);
        input.distance = getDistance(offsetCenter, center);

        computeDeltaXY(session, input);
        input.offsetDirection = getDirection(input.deltaX, input.deltaY);

        input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
        input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

        computeIntervalInputData(session, input);

        // find the correct target
        var target = manager.element;
        if (hasParent(input.srcEvent.target, target)) {
            target = input.srcEvent.target;
        }
        input.target = target;
    }

    function computeDeltaXY(session, input) {
        var center = input.center;
        var offset = session.offsetDelta || {};
        var prevDelta = session.prevDelta || {};
        var prevInput = session.prevInput || {};

        if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
            prevDelta = session.prevDelta = {
                x: prevInput.deltaX || 0,
                y: prevInput.deltaY || 0
            };

            offset = session.offsetDelta = {
                x: center.x,
                y: center.y
            };
        }

        input.deltaX = prevDelta.x + (center.x - offset.x);
        input.deltaY = prevDelta.y + (center.y - offset.y);
    }

    /**
     * velocity is calculated every x ms
     * @param {Object} session
     * @param {Object} input
     */
    function computeIntervalInputData(session, input) {
        var last = session.lastInterval || input,
            deltaTime = input.timeStamp - last.timeStamp,
            velocity,
            velocityX,
            velocityY,
            direction;

        if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
            var deltaX = last.deltaX - input.deltaX;
            var deltaY = last.deltaY - input.deltaY;
            var v = getVelocity(deltaTime, deltaX, deltaY);
            velocityX = v.x;
            velocityY = v.y;
            velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
            direction = getDirection(deltaX, deltaY);

            session.lastInterval = input;
        } else {
            // use latest velocity info if it doesn't overtake a minimum period
            velocity = last.velocity;
            velocityX = last.velocityX;
            velocityY = last.velocityY;
            direction = last.direction;
        }

        input.velocity = velocity;
        input.velocityX = velocityX;
        input.velocityY = velocityY;
        input.direction = direction;
    }

    /**
     * create a simple clone from the input used for storage of firstInput and firstMultiple
     * @param {Object} input
     * @returns {Object} clonedInputData
     */
    function simpleCloneInputData(input) {
        // make a simple copy of the pointers because we will get a reference if we don't
        // we only need clientXY for the calculations
        var pointers = [];
        var i = 0;
        while (i < input.pointers.length) {
            pointers[i] = {
                clientX: round(input.pointers[i].clientX),
                clientY: round(input.pointers[i].clientY)
            };
            i++;
        }

        return {
            timeStamp: now(),
            pointers: pointers,
            center: getCenter(pointers),
            deltaX: input.deltaX,
            deltaY: input.deltaY
        };
    }

    /**
     * get the center of all the pointers
     * @param {Array} pointers
     * @return {Object} center contains `x` and `y` properties
     */
    function getCenter(pointers) {
        var pointersLength = pointers.length;

        // no need to loop when only one touch
        if (pointersLength === 1) {
            return {
                x: round(pointers[0].clientX),
                y: round(pointers[0].clientY)
            };
        }

        var x = 0,
            y = 0,
            i = 0;
        while (i < pointersLength) {
            x += pointers[i].clientX;
            y += pointers[i].clientY;
            i++;
        }

        return {
            x: round(x / pointersLength),
            y: round(y / pointersLength)
        };
    }

    /**
     * calculate the velocity between two points. unit is in px per ms.
     * @param {Number} deltaTime
     * @param {Number} x
     * @param {Number} y
     * @return {Object} velocity `x` and `y`
     */
    function getVelocity(deltaTime, x, y) {
        return {
            x: x / deltaTime || 0,
            y: y / deltaTime || 0
        };
    }

    /**
     * get the direction between two points
     * @param {Number} x
     * @param {Number} y
     * @return {Number} direction
     */
    function getDirection(x, y) {
        if (x === y) {
            return DIRECTION_NONE;
        }

        if (abs(x) >= abs(y)) {
            return x > 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
        }
        return y > 0 ? DIRECTION_UP : DIRECTION_DOWN;
    }

    /**
     * calculate the absolute distance between two points
     * @param {Object} p1 {x, y}
     * @param {Object} p2 {x, y}
     * @param {Array} [props] containing x and y keys
     * @return {Number} distance
     */
    function getDistance(p1, p2, props) {
        if (!props) {
            props = PROPS_XY;
        }
        var x = p2[props[0]] - p1[props[0]],
            y = p2[props[1]] - p1[props[1]];

        return Math.sqrt(x * x + y * y);
    }

    /**
     * calculate the angle between two coordinates
     * @param {Object} p1
     * @param {Object} p2
     * @param {Array} [props] containing x and y keys
     * @return {Number} angle
     */
    function getAngle(p1, p2, props) {
        if (!props) {
            props = PROPS_XY;
        }
        var x = p2[props[0]] - p1[props[0]],
            y = p2[props[1]] - p1[props[1]];
        return Math.atan2(y, x) * 180 / Math.PI;
    }

    /**
     * calculate the rotation degrees between two pointersets
     * @param {Array} start array of pointers
     * @param {Array} end array of pointers
     * @return {Number} rotation
     */
    function getRotation(start, end) {
        return getAngle(end[1], end[0], PROPS_CLIENT_XY) - getAngle(start[1], start[0], PROPS_CLIENT_XY);
    }

    /**
     * calculate the scale factor between two pointersets
     * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
     * @param {Array} start array of pointers
     * @param {Array} end array of pointers
     * @return {Number} scale
     */
    function getScale(start, end) {
        return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
    }

    var MOUSE_INPUT_MAP = {
        mousedown: INPUT_START,
        mousemove: INPUT_MOVE,
        mouseup: INPUT_END
    };

    var MOUSE_ELEMENT_EVENTS = 'mousedown';
    var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

    /**
     * Mouse events input
     * @constructor
     * @extends Input
     */
    function MouseInput() {
        this.evEl = MOUSE_ELEMENT_EVENTS;
        this.evWin = MOUSE_WINDOW_EVENTS;

        this.allow = true; // used by Input.TouchMouse to disable mouse events
        this.pressed = false; // mousedown state

        Input.apply(this, arguments);
    }

    inherit(MouseInput, Input, {
        /**
         * handle mouse events
         * @param {Object} ev
         */
        handler: function MEhandler(ev) {
            var eventType = MOUSE_INPUT_MAP[ev.type];

            // on start we want to have the left mouse button down
            if (eventType & INPUT_START && ev.button === 0) {
                this.pressed = true;
            }

            if (eventType & INPUT_MOVE && ev.which !== 1) {
                eventType = INPUT_END;
            }

            // mouse must be down, and mouse events are allowed (see the TouchMouse input)
            if (!this.pressed || !this.allow) {
                return;
            }

            if (eventType & INPUT_END) {
                this.pressed = false;
            }

            this.callback(this.manager, eventType, {
                pointers: [ev],
                changedPointers: [ev],
                pointerType: INPUT_TYPE_MOUSE,
                srcEvent: ev
            });
        }
    });

    var POINTER_INPUT_MAP = {
        pointerdown: INPUT_START,
        pointermove: INPUT_MOVE,
        pointerup: INPUT_END,
        pointercancel: INPUT_CANCEL,
        pointerout: INPUT_CANCEL
    };

    // in IE10 the pointer types is defined as an enum
    var IE10_POINTER_TYPE_ENUM = {
        2: INPUT_TYPE_TOUCH,
        3: INPUT_TYPE_PEN,
        4: INPUT_TYPE_MOUSE,
        5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
    };

    var POINTER_ELEMENT_EVENTS = 'pointerdown';
    var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

    // IE10 has prefixed support, and case-sensitive
    if (window.MSPointerEvent) {
        POINTER_ELEMENT_EVENTS = 'MSPointerDown';
        POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
    }

    /**
     * Pointer events input
     * @constructor
     * @extends Input
     */
    function PointerEventInput() {
        this.evEl = POINTER_ELEMENT_EVENTS;
        this.evWin = POINTER_WINDOW_EVENTS;

        Input.apply(this, arguments);

        this.store = this.manager.session.pointerEvents = [];
    }

    inherit(PointerEventInput, Input, {
        /**
         * handle mouse events
         * @param {Object} ev
         */
        handler: function PEhandler(ev) {
            var store = this.store;
            var removePointer = false;

            var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
            var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
            var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

            var isTouch = pointerType == INPUT_TYPE_TOUCH;

            // get index of the event in the store
            var storeIndex = inArray(store, ev.pointerId, 'pointerId');

            // start and mouse must be down
            if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
                if (storeIndex < 0) {
                    store.push(ev);
                    storeIndex = store.length - 1;
                }
            } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
                removePointer = true;
            }

            // it not found, so the pointer hasn't been down (so it's probably a hover)
            if (storeIndex < 0) {
                return;
            }

            // update the event in the store
            store[storeIndex] = ev;

            this.callback(this.manager, eventType, {
                pointers: store,
                changedPointers: [ev],
                pointerType: pointerType,
                srcEvent: ev
            });

            if (removePointer) {
                // remove from the store
                store.splice(storeIndex, 1);
            }
        }
    });

    var SINGLE_TOUCH_INPUT_MAP = {
        touchstart: INPUT_START,
        touchmove: INPUT_MOVE,
        touchend: INPUT_END,
        touchcancel: INPUT_CANCEL
    };

    var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
    var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

    /**
     * Touch events input
     * @constructor
     * @extends Input
     */
    function SingleTouchInput() {
        this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
        this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
        this.started = false;

        Input.apply(this, arguments);
    }

    inherit(SingleTouchInput, Input, {
        handler: function TEhandler(ev) {
            var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

            // should we handle the touch events?
            if (type === INPUT_START) {
                this.started = true;
            }

            if (!this.started) {
                return;
            }

            var touches = normalizeSingleTouches.call(this, ev, type);

            // when done, reset the started state
            if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
                this.started = false;
            }

            this.callback(this.manager, type, {
                pointers: touches[0],
                changedPointers: touches[1],
                pointerType: INPUT_TYPE_TOUCH,
                srcEvent: ev
            });
        }
    });

    /**
     * @this {TouchInput}
     * @param {Object} ev
     * @param {Number} type flag
     * @returns {undefined|Array} [all, changed]
     */
    function normalizeSingleTouches(ev, type) {
        var all = toArray(ev.touches);
        var changed = toArray(ev.changedTouches);

        if (type & (INPUT_END | INPUT_CANCEL)) {
            all = uniqueArray(all.concat(changed), 'identifier', true);
        }

        return [all, changed];
    }

    var TOUCH_INPUT_MAP = {
        touchstart: INPUT_START,
        touchmove: INPUT_MOVE,
        touchend: INPUT_END,
        touchcancel: INPUT_CANCEL
    };

    var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

    /**
     * Multi-user touch events input
     * @constructor
     * @extends Input
     */
    function TouchInput() {
        this.evTarget = TOUCH_TARGET_EVENTS;
        this.targetIds = {};

        Input.apply(this, arguments);
    }

    inherit(TouchInput, Input, {
        handler: function MTEhandler(ev) {
            var type = TOUCH_INPUT_MAP[ev.type];
            var touches = getTouches.call(this, ev, type);
            if (!touches) {
                return;
            }

            this.callback(this.manager, type, {
                pointers: touches[0],
                changedPointers: touches[1],
                pointerType: INPUT_TYPE_TOUCH,
                srcEvent: ev
            });
        }
    });

    /**
     * @this {TouchInput}
     * @param {Object} ev
     * @param {Number} type flag
     * @returns {undefined|Array} [all, changed]
     */
    function getTouches(ev, type) {
        var allTouches = toArray(ev.touches);
        var targetIds = this.targetIds;

        // when there is only one touch, the process can be simplified
        if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
            targetIds[allTouches[0].identifier] = true;
            return [allTouches, allTouches];
        }

        var i,
            targetTouches,
            changedTouches = toArray(ev.changedTouches),
            changedTargetTouches = [],
            target = this.target;

        // get target touches from touches
        targetTouches = allTouches.filter(function (touch) {
            return hasParent(touch.target, target);
        });

        // collect touches
        if (type === INPUT_START) {
            i = 0;
            while (i < targetTouches.length) {
                targetIds[targetTouches[i].identifier] = true;
                i++;
            }
        }

        // filter changed touches to only contain touches that exist in the collected target ids
        i = 0;
        while (i < changedTouches.length) {
            if (targetIds[changedTouches[i].identifier]) {
                changedTargetTouches.push(changedTouches[i]);
            }

            // cleanup removed touches
            if (type & (INPUT_END | INPUT_CANCEL)) {
                delete targetIds[changedTouches[i].identifier];
            }
            i++;
        }

        if (!changedTargetTouches.length) {
            return;
        }

        return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
    }

    /**
     * Combined touch and mouse input
     *
     * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
     * This because touch devices also emit mouse events while doing a touch.
     *
     * @constructor
     * @extends Input
     */
    function TouchMouseInput() {
        Input.apply(this, arguments);

        var handler = bindFn(this.handler, this);
        this.touch = new TouchInput(this.manager, handler);
        this.mouse = new MouseInput(this.manager, handler);
    }

    inherit(TouchMouseInput, Input, {
        /**
         * handle mouse and touch events
         * @param {Hammer} manager
         * @param {String} inputEvent
         * @param {Object} inputData
         */
        handler: function TMEhandler(manager, inputEvent, inputData) {
            var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH,
                isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;

            // when we're in a touch event, so  block all upcoming mouse events
            // most mobile browser also emit mouseevents, right after touchstart
            if (isTouch) {
                this.mouse.allow = false;
            } else if (isMouse && !this.mouse.allow) {
                return;
            }

            // reset the allowMouse when we're done
            if (inputEvent & (INPUT_END | INPUT_CANCEL)) {
                this.mouse.allow = true;
            }

            this.callback(manager, inputEvent, inputData);
        },

        /**
         * remove the event listeners
         */
        destroy: function destroy() {
            this.touch.destroy();
            this.mouse.destroy();
        }
    });

    var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
    var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

    // magical touchAction value
    var TOUCH_ACTION_COMPUTE = 'compute';
    var TOUCH_ACTION_AUTO = 'auto';
    var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
    var TOUCH_ACTION_NONE = 'none';
    var TOUCH_ACTION_PAN_X = 'pan-x';
    var TOUCH_ACTION_PAN_Y = 'pan-y';

    /**
     * Touch Action
     * sets the touchAction property or uses the js alternative
     * @param {Manager} manager
     * @param {String} value
     * @constructor
     */
    function TouchAction(manager, value) {
        this.manager = manager;
        this.set(value);
    }

    TouchAction.prototype = {
        /**
         * set the touchAction value on the element or enable the polyfill
         * @param {String} value
         */
        set: function set(value) {
            // find out the touch-action by the event handlers
            if (value == TOUCH_ACTION_COMPUTE) {
                value = this.compute();
            }

            if (NATIVE_TOUCH_ACTION) {
                this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
            }
            this.actions = value.toLowerCase().trim();
        },

        /**
         * just re-set the touchAction value
         */
        update: function update() {
            this.set(this.manager.options.touchAction);
        },

        /**
         * compute the value for the touchAction property based on the recognizer's settings
         * @returns {String} value
         */
        compute: function compute() {
            var actions = [];
            each(this.manager.recognizers, function (recognizer) {
                if (boolOrFn(recognizer.options.enable, [recognizer])) {
                    actions = actions.concat(recognizer.getTouchAction());
                }
            });
            return cleanTouchActions(actions.join(' '));
        },

        /**
         * this method is called on each input cycle and provides the preventing of the browser behavior
         * @param {Object} input
         */
        preventDefaults: function preventDefaults(input) {
            // not needed with native support for the touchAction property
            if (NATIVE_TOUCH_ACTION) {
                return;
            }

            var srcEvent = input.srcEvent;
            var direction = input.offsetDirection;

            // if the touch action did prevented once this session
            if (this.manager.session.prevented) {
                srcEvent.preventDefault();
                return;
            }

            var actions = this.actions;
            var hasNone = inStr(actions, TOUCH_ACTION_NONE);
            var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
            var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);

            if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
                return this.preventSrc(srcEvent);
            }
        },

        /**
         * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
         * @param {Object} srcEvent
         */
        preventSrc: function preventSrc(srcEvent) {
            this.manager.session.prevented = true;
            srcEvent.preventDefault();
        }
    };

    /**
     * when the touchActions are collected they are not a valid value, so we need to clean things up. *
     * @param {String} actions
     * @returns {*}
     */
    function cleanTouchActions(actions) {
        // none
        if (inStr(actions, TOUCH_ACTION_NONE)) {
            return TOUCH_ACTION_NONE;
        }

        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

        // pan-x and pan-y can be combined
        if (hasPanX && hasPanY) {
            return TOUCH_ACTION_PAN_X + ' ' + TOUCH_ACTION_PAN_Y;
        }

        // pan-x OR pan-y
        if (hasPanX || hasPanY) {
            return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
        }

        // manipulation
        if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
            return TOUCH_ACTION_MANIPULATION;
        }

        return TOUCH_ACTION_AUTO;
    }

    /**
     * Recognizer flow explained; *
     * All recognizers have the initial state of POSSIBLE when a input session starts.
     * The definition of a input session is from the first input until the last input, with all it's movement in it. *
     * Example session for mouse-input: mousedown -> mousemove -> mouseup
     *
     * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
     * which determines with state it should be.
     *
     * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
     * POSSIBLE to give it another change on the next cycle.
     *
     *               Possible
     *                  |
     *            +-----+---------------+
     *            |                     |
     *      +-----+-----+               |
     *      |           |               |
     *   Failed      Cancelled          |
     *                          +-------+------+
     *                          |              |
     *                      Recognized       Began
     *                                         |
     *                                      Changed
     *                                         |
     *                                  Ended/Recognized
     */
    var STATE_POSSIBLE = 1;
    var STATE_BEGAN = 2;
    var STATE_CHANGED = 4;
    var STATE_ENDED = 8;
    var STATE_RECOGNIZED = STATE_ENDED;
    var STATE_CANCELLED = 16;
    var STATE_FAILED = 32;

    /**
     * Recognizer
     * Every recognizer needs to extend from this class.
     * @constructor
     * @param {Object} options
     */
    function Recognizer(options) {
        this.id = uniqueId();

        this.manager = null;
        this.options = merge(options || {}, this.defaults);

        // default is enable true
        this.options.enable = ifUndefined(this.options.enable, true);

        this.state = STATE_POSSIBLE;

        this.simultaneous = {};
        this.requireFail = [];
    }

    Recognizer.prototype = {
        /**
         * @virtual
         * @type {Object}
         */
        defaults: {},

        /**
         * set options
         * @param {Object} options
         * @return {Recognizer}
         */
        set: function set(options) {
            extend(this.options, options);

            // also update the touchAction, in case something changed about the directions/enabled state
            this.manager && this.manager.touchAction.update();
            return this;
        },

        /**
         * recognize simultaneous with an other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        recognizeWith: function recognizeWith(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
                return this;
            }

            var simultaneous = this.simultaneous;
            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            if (!simultaneous[otherRecognizer.id]) {
                simultaneous[otherRecognizer.id] = otherRecognizer;
                otherRecognizer.recognizeWith(this);
            }
            return this;
        },

        /**
         * drop the simultaneous link. it doesnt remove the link on the other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        dropRecognizeWith: function dropRecognizeWith(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
                return this;
            }

            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            delete this.simultaneous[otherRecognizer.id];
            return this;
        },

        /**
         * recognizer can only run when an other is failing
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        requireFailure: function requireFailure(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
                return this;
            }

            var requireFail = this.requireFail;
            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            if (inArray(requireFail, otherRecognizer) === -1) {
                requireFail.push(otherRecognizer);
                otherRecognizer.requireFailure(this);
            }
            return this;
        },

        /**
         * drop the requireFailure link. it does not remove the link on the other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        dropRequireFailure: function dropRequireFailure(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
                return this;
            }

            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            var index = inArray(this.requireFail, otherRecognizer);
            if (index > -1) {
                this.requireFail.splice(index, 1);
            }
            return this;
        },

        /**
         * has require failures boolean
         * @returns {boolean}
         */
        hasRequireFailures: function hasRequireFailures() {
            return this.requireFail.length > 0;
        },

        /**
         * if the recognizer can recognize simultaneous with an other recognizer
         * @param {Recognizer} otherRecognizer
         * @returns {Boolean}
         */
        canRecognizeWith: function canRecognizeWith(otherRecognizer) {
            return !!this.simultaneous[otherRecognizer.id];
        },

        /**
         * You should use `tryEmit` instead of `emit` directly to check
         * that all the needed recognizers has failed before emitting.
         * @param {Object} input
         */
        emit: function emit(input) {
            var self = this;
            var state = this.state;

            function emit(withState) {
                self.manager.emit(self.options.event + (withState ? stateStr(state) : ''), input);
            }

            // 'panstart' and 'panmove'
            if (state < STATE_ENDED) {
                emit(true);
            }

            emit(); // simple 'eventName' events

            // panend and pancancel
            if (state >= STATE_ENDED) {
                emit(true);
            }
        },

        /**
         * Check that all the require failure recognizers has failed,
         * if true, it emits a gesture event,
         * otherwise, setup the state to FAILED.
         * @param {Object} input
         */
        tryEmit: function tryEmit(input) {
            if (this.canEmit()) {
                return this.emit(input);
            }
            // it's failing anyway
            this.state = STATE_FAILED;
        },

        /**
         * can we emit?
         * @returns {boolean}
         */
        canEmit: function canEmit() {
            var i = 0;
            while (i < this.requireFail.length) {
                if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                    return false;
                }
                i++;
            }
            return true;
        },

        /**
         * update the recognizer
         * @param {Object} inputData
         */
        recognize: function recognize(inputData) {
            // make a new copy of the inputData
            // so we can change the inputData without messing up the other recognizers
            var inputDataClone = extend({}, inputData);

            // is is enabled and allow recognizing?
            if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
                this.reset();
                this.state = STATE_FAILED;
                return;
            }

            // reset when we've reached the end
            if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
                this.state = STATE_POSSIBLE;
            }

            this.state = this.process(inputDataClone);

            // the recognizer has recognized a gesture
            // so trigger an event
            if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
                this.tryEmit(inputDataClone);
            }
        },

        /**
         * return the state of the recognizer
         * the actual recognizing happens in this method
         * @virtual
         * @param {Object} inputData
         * @returns {Const} STATE
         */
        process: function process(inputData) {}, // jshint ignore:line

        /**
         * return the preferred touch-action
         * @virtual
         * @returns {Array}
         */
        getTouchAction: function getTouchAction() {},

        /**
         * called when the gesture isn't allowed to recognize
         * like when another is being recognized or it is disabled
         * @virtual
         */
        reset: function reset() {}
    };

    /**
     * get a usable string, used as event postfix
     * @param {Const} state
     * @returns {String} state
     */
    function stateStr(state) {
        if (state & STATE_CANCELLED) {
            return 'cancel';
        } else if (state & STATE_ENDED) {
            return 'end';
        } else if (state & STATE_CHANGED) {
            return 'move';
        } else if (state & STATE_BEGAN) {
            return 'start';
        }
        return '';
    }

    /**
     * direction cons to string
     * @param {Const} direction
     * @returns {String}
     */
    function directionStr(direction) {
        if (direction == DIRECTION_DOWN) {
            return 'down';
        } else if (direction == DIRECTION_UP) {
            return 'up';
        } else if (direction == DIRECTION_LEFT) {
            return 'left';
        } else if (direction == DIRECTION_RIGHT) {
            return 'right';
        }
        return '';
    }

    /**
     * get a recognizer by name if it is bound to a manager
     * @param {Recognizer|String} otherRecognizer
     * @param {Recognizer} recognizer
     * @returns {Recognizer}
     */
    function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
        var manager = recognizer.manager;
        if (manager) {
            return manager.get(otherRecognizer);
        }
        return otherRecognizer;
    }

    /**
     * This recognizer is just used as a base for the simple attribute recognizers.
     * @constructor
     * @extends Recognizer
     */
    function AttrRecognizer() {
        Recognizer.apply(this, arguments);
    }

    inherit(AttrRecognizer, Recognizer, {
        /**
         * @namespace
         * @memberof AttrRecognizer
         */
        defaults: {
            /**
             * @type {Number}
             * @default 1
             */
            pointers: 1
        },

        /**
         * Used to check if it the recognizer receives valid input, like input.distance > 10.
         * @memberof AttrRecognizer
         * @param {Object} input
         * @returns {Boolean} recognized
         */
        attrTest: function attrTest(input) {
            var optionPointers = this.options.pointers;
            return optionPointers === 0 || input.pointers.length === optionPointers;
        },

        /**
         * Process the input and return the state for the recognizer
         * @memberof AttrRecognizer
         * @param {Object} input
         * @returns {*} State
         */
        process: function process(input) {
            var state = this.state;
            var eventType = input.eventType;

            var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
            var isValid = this.attrTest(input);

            // on cancel input and we've recognized before, return STATE_CANCELLED
            if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
                return state | STATE_CANCELLED;
            } else if (isRecognized || isValid) {
                if (eventType & INPUT_END) {
                    return state | STATE_ENDED;
                } else if (!(state & STATE_BEGAN)) {
                    return STATE_BEGAN;
                }
                return state | STATE_CHANGED;
            }
            return STATE_FAILED;
        }
    });

    /**
     * Pan
     * Recognized when the pointer is down and moved in the allowed direction.
     * @constructor
     * @extends AttrRecognizer
     */
    function PanRecognizer() {
        AttrRecognizer.apply(this, arguments);

        this.pX = null;
        this.pY = null;
    }

    inherit(PanRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof PanRecognizer
         */
        defaults: {
            event: 'pan',
            threshold: 10,
            pointers: 1,
            direction: DIRECTION_ALL
        },

        getTouchAction: function getTouchAction() {
            var direction = this.options.direction;
            var actions = [];
            if (direction & DIRECTION_HORIZONTAL) {
                actions.push(TOUCH_ACTION_PAN_Y);
            }
            if (direction & DIRECTION_VERTICAL) {
                actions.push(TOUCH_ACTION_PAN_X);
            }
            return actions;
        },

        directionTest: function directionTest(input) {
            var options = this.options;
            var hasMoved = true;
            var distance = input.distance;
            var direction = input.direction;
            var x = input.deltaX;
            var y = input.deltaY;

            // lock to axis?
            if (!(direction & options.direction)) {
                if (options.direction & DIRECTION_HORIZONTAL) {
                    direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
                    hasMoved = x != this.pX;
                    distance = Math.abs(input.deltaX);
                } else {
                    direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
                    hasMoved = y != this.pY;
                    distance = Math.abs(input.deltaY);
                }
            }
            input.direction = direction;
            return hasMoved && distance > options.threshold && direction & options.direction;
        },

        attrTest: function attrTest(input) {
            return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
        },

        emit: function emit(input) {
            this.pX = input.deltaX;
            this.pY = input.deltaY;

            var direction = directionStr(input.direction);
            if (direction) {
                this.manager.emit(this.options.event + direction, input);
            }

            this._super.emit.call(this, input);
        },
        reset: function reset() {}
    });

    /**
     * Pinch
     * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
     * @constructor
     * @extends AttrRecognizer
     */
    function PinchRecognizer() {
        AttrRecognizer.apply(this, arguments);
    }

    inherit(PinchRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof PinchRecognizer
         */
        defaults: {
            event: 'pinch',
            threshold: 0,
            pointers: 2
        },

        getTouchAction: function getTouchAction() {
            return [TOUCH_ACTION_NONE];
        },

        attrTest: function attrTest(input) {
            return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
        },

        emit: function emit(input) {
            this._super.emit.call(this, input);
            if (input.scale !== 1) {
                var inOut = input.scale < 1 ? 'in' : 'out';
                this.manager.emit(this.options.event + inOut, input);
            }
        }
    });

    /**
     * Press
     * Recognized when the pointer is down for x ms without any movement.
     * @constructor
     * @extends Recognizer
     */
    function PressRecognizer() {
        Recognizer.apply(this, arguments);

        this._timer = null;
        this._input = null;
    }

    inherit(PressRecognizer, Recognizer, {
        /**
         * @namespace
         * @memberof PressRecognizer
         */
        defaults: {
            event: 'press',
            pointers: 1,
            time: 500, // minimal time of the pointer to be pressed
            threshold: 5 // a minimal movement is ok, but keep it low
        },

        getTouchAction: function getTouchAction() {
            return [TOUCH_ACTION_AUTO];
        },

        process: function process(input) {
            var options = this.options;
            var validPointers = input.pointers.length === options.pointers;
            var validMovement = input.distance < options.threshold;
            var validTime = input.deltaTime > options.time;

            this._input = input;

            // we only allow little movement
            // and we've reached an end event, so a tap is possible
            if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
                this.reset();
            } else if (input.eventType & INPUT_START) {
                this.reset();
                this._timer = setTimeoutContext(function () {
                    this.state = STATE_RECOGNIZED;
                    this.tryEmit();
                }, options.time, this);
            } else if (input.eventType & INPUT_END) {
                return STATE_RECOGNIZED;
            }
            return STATE_FAILED;
        },

        reset: function reset() {
            clearTimeout(this._timer);
        },

        emit: function emit(input) {
            if (this.state !== STATE_RECOGNIZED) {
                return;
            }

            if (input && input.eventType & INPUT_END) {
                this.manager.emit(this.options.event + 'up', input);
            } else {
                this._input.timeStamp = now();
                this.manager.emit(this.options.event, this._input);
            }
        }
    });

    /**
     * Rotate
     * Recognized when two or more pointer are moving in a circular motion.
     * @constructor
     * @extends AttrRecognizer
     */
    function RotateRecognizer() {
        AttrRecognizer.apply(this, arguments);
    }

    inherit(RotateRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof RotateRecognizer
         */
        defaults: {
            event: 'rotate',
            threshold: 0,
            pointers: 2
        },

        getTouchAction: function getTouchAction() {
            return [TOUCH_ACTION_NONE];
        },

        attrTest: function attrTest(input) {
            return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
        }
    });

    /**
     * Swipe
     * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
     * @constructor
     * @extends AttrRecognizer
     */
    function SwipeRecognizer() {
        AttrRecognizer.apply(this, arguments);
    }

    inherit(SwipeRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof SwipeRecognizer
         */
        defaults: {
            event: 'swipe',
            threshold: 10,
            velocity: 0.65,
            direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
            pointers: 1
        },

        getTouchAction: function getTouchAction() {
            return PanRecognizer.prototype.getTouchAction.call(this);
        },

        attrTest: function attrTest(input) {
            var direction = this.options.direction;
            var velocity;

            if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
                velocity = input.velocity;
            } else if (direction & DIRECTION_HORIZONTAL) {
                velocity = input.velocityX;
            } else if (direction & DIRECTION_VERTICAL) {
                velocity = input.velocityY;
            }

            return this._super.attrTest.call(this, input) && direction & input.direction && input.distance > this.options.threshold && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
        },

        emit: function emit(input) {
            var direction = directionStr(input.direction);
            if (direction) {
                this.manager.emit(this.options.event + direction, input);
            }

            this.manager.emit(this.options.event, input);
        }
    });

    /**
     * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
     * between the given interval and position. The delay option can be used to recognize multi-taps without firing
     * a single tap.
     *
     * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
     * multi-taps being recognized.
     * @constructor
     * @extends Recognizer
     */
    function TapRecognizer() {
        Recognizer.apply(this, arguments);

        // previous time and center,
        // used for tap counting
        this.pTime = false;
        this.pCenter = false;

        this._timer = null;
        this._input = null;
        this.count = 0;
    }

    inherit(TapRecognizer, Recognizer, {
        /**
         * @namespace
         * @memberof PinchRecognizer
         */
        defaults: {
            event: 'tap',
            pointers: 1,
            taps: 1,
            interval: 300, // max time between the multi-tap taps
            time: 250, // max time of the pointer to be down (like finger on the screen)
            threshold: 10, // a minimal movement is ok, but keep it low
            posThreshold: 10 // a multi-tap can be a bit off the initial position
        },

        getTouchAction: function getTouchAction() {
            return [TOUCH_ACTION_MANIPULATION];
        },

        process: function process(input) {
            var options = this.options;
            var validPointers = input.pointers.length === options.pointers;
            var validMovement = input.distance < options.threshold;
            var validTouchTime = input.deltaTime < options.time;
            this.reset();

            if (input.eventType & INPUT_START && this.count === 0) {
                return this.failTimeout();
            }
            // we only allow little movement
            // and we've reached an end event, so a tap is possible
            if (validMovement && validTouchTime && validPointers) {
                if (input.eventType != INPUT_END) {
                    return this.failTimeout();
                }

                var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
                var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

                this.pTime = input.timeStamp;
                this.pCenter = input.center;
                if (!validMultiTap || !validInterval) {
                    this.count = 1;
                } else {
                    this.count += 1;
                }

                this._input = input;

                // if tap count matches we have recognized it,
                // else it has began recognizing...
                var tapCount = this.count % options.taps;
                if (tapCount === 0) {
                    // no failing requirements, immediately trigger the tap event
                    // or wait as long as the multitap interval to trigger
                    if (!this.hasRequireFailures()) {
                        return STATE_RECOGNIZED;
                    } else {
                        this._timer = setTimeoutContext(function () {
                            this.state = STATE_RECOGNIZED;
                            this.tryEmit();
                        }, options.interval, this);
                        return STATE_BEGAN;
                    }
                }
            }
            return STATE_FAILED;
        },

        failTimeout: function failTimeout() {
            this._timer = setTimeoutContext(function () {
                this.state = STATE_FAILED;
            }, this.options.interval, this);
            return STATE_FAILED;
        },

        reset: function reset() {
            clearTimeout(this._timer);
        },

        emit: function emit() {
            if (this.state == STATE_RECOGNIZED) {
                this._input.tapCount = this.count;
                this.manager.emit(this.options.event, this._input);
            }
        }
    });

    /**
     * Simple way to create an manager with a default set of recognizers.
     * @param {HTMLElement} element
     * @param {Object} [options]
     * @constructor
     */
    function Hammer(element, options) {
        options = options || {};
        options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
        return new Manager(element, options);
    }

    /**
     * @const {string}
     */
    Hammer.VERSION = '2.0.4';

    /**
     * default settings
     * @namespace
     */
    Hammer.defaults = {
        /**
         * set if DOM events are being triggered.
         * But this is slower and unused by simple implementations, so disabled by default.
         * @type {Boolean}
         * @default false
         */
        domEvents: false,

        /**
         * The value for the touchAction property/fallback.
         * When set to `compute` it will magically set the correct value based on the added recognizers.
         * @type {String}
         * @default compute
         */
        touchAction: TOUCH_ACTION_COMPUTE,

        /**
         * @type {Boolean}
         * @default true
         */
        enable: true,

        /**
         * EXPERIMENTAL FEATURE -- can be removed/changed
         * Change the parent input target element.
         * If Null, then it is being set the to main element.
         * @type {Null|EventTarget}
         * @default null
         */
        inputTarget: null,

        /**
         * force an input class
         * @type {Null|Function}
         * @default null
         */
        inputClass: null,

        /**
         * Default recognizer setup when calling `Hammer()`
         * When creating a new Manager these will be skipped.
         * @type {Array}
         */
        preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, { enable: false }], [PinchRecognizer, { enable: false }, ['rotate']], [SwipeRecognizer, { direction: DIRECTION_HORIZONTAL }], [PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ['swipe']], [TapRecognizer], [TapRecognizer, { event: 'doubletap', taps: 2 }, ['tap']], [PressRecognizer]],

        /**
         * Some CSS properties can be used to improve the working of Hammer.
         * Add them to this method and they will be set when creating a new Manager.
         * @namespace
         */
        cssProps: {
            /**
             * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
             * @type {String}
             * @default 'none'
             */
            userSelect: 'none',

            /**
             * Disable the Windows Phone grippers when pressing an element.
             * @type {String}
             * @default 'none'
             */
            touchSelect: 'none',

            /**
             * Disables the default callout shown when you touch and hold a touch target.
             * On iOS, when you touch and hold a touch target such as a link, Safari displays
             * a callout containing information about the link. This property allows you to disable that callout.
             * @type {String}
             * @default 'none'
             */
            touchCallout: 'none',

            /**
             * Specifies whether zooming is enabled. Used by IE10>
             * @type {String}
             * @default 'none'
             */
            contentZooming: 'none',

            /**
             * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
             * @type {String}
             * @default 'none'
             */
            userDrag: 'none',

            /**
             * Overrides the highlight color shown when the user taps a link or a JavaScript
             * clickable element in iOS. This property obeys the alpha value, if specified.
             * @type {String}
             * @default 'rgba(0,0,0,0)'
             */
            tapHighlightColor: 'rgba(0,0,0,0)'
        }
    };

    var STOP = 1;
    var FORCED_STOP = 2;

    /**
     * Manager
     * @param {HTMLElement} element
     * @param {Object} [options]
     * @constructor
     */
    function Manager(element, options) {
        options = options || {};

        this.options = merge(options, Hammer.defaults);
        this.options.inputTarget = this.options.inputTarget || element;
        this.handlers = {};
        this.session = {};
        this.recognizers = [];

        this.element = element;
        this.input = createInputInstance(this);
        this.touchAction = new TouchAction(this, this.options.touchAction);

        toggleCssProps(this, true);

        each(options.recognizers, function (item) {
            var recognizer = this.add(new item[0](item[1]));
            item[2] && recognizer.recognizeWith(item[2]);
            item[3] && recognizer.requireFailure(item[3]);
        }, this);
    }

    Manager.prototype = {
        /**
         * set options
         * @param {Object} options
         * @returns {Manager}
         */
        set: function set(options) {
            extend(this.options, options);

            // Options that need a little more setup
            if (options.touchAction) {
                this.touchAction.update();
            }
            if (options.inputTarget) {
                // Clean up existing event listeners and reinitialize
                this.input.destroy();
                this.input.target = options.inputTarget;
                this.input.init();
            }
            return this;
        },

        /**
         * stop recognizing for this session.
         * This session will be discarded, when a new [input]start event is fired.
         * When forced, the recognizer cycle is stopped immediately.
         * @param {Boolean} [force]
         */
        stop: function stop(force) {
            this.session.stopped = force ? FORCED_STOP : STOP;
        },

        /**
         * run the recognizers!
         * called by the inputHandler function on every movement of the pointers (touches)
         * it walks through all the recognizers and tries to detect the gesture that is being made
         * @param {Object} inputData
         */
        recognize: function recognize(inputData) {
            var session = this.session;
            if (session.stopped) {
                return;
            }

            // run the touch-action polyfill
            this.touchAction.preventDefaults(inputData);

            var recognizer;
            var recognizers = this.recognizers;

            // this holds the recognizer that is being recognized.
            // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
            // if no recognizer is detecting a thing, it is set to `null`
            var curRecognizer = session.curRecognizer;

            // reset when the last recognizer is recognized
            // or when we're in a new session
            if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
                curRecognizer = session.curRecognizer = null;
            }

            var i = 0;
            while (i < recognizers.length) {
                recognizer = recognizers[i];

                // find out if we are allowed try to recognize the input for this one.
                // 1.   allow if the session is NOT forced stopped (see the .stop() method)
                // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
                //      that is being recognized.
                // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
                //      this can be setup with the `recognizeWith()` method on the recognizer.
                if (session.stopped !== FORCED_STOP && ( // 1
                !curRecognizer || recognizer == curRecognizer || // 2
                recognizer.canRecognizeWith(curRecognizer))) {
                    // 3
                    recognizer.recognize(inputData);
                } else {
                    recognizer.reset();
                }

                // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
                // current active recognizer. but only if we don't already have an active recognizer
                if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                    curRecognizer = session.curRecognizer = recognizer;
                }
                i++;
            }
        },

        /**
         * get a recognizer by its event name.
         * @param {Recognizer|String} recognizer
         * @returns {Recognizer|Null}
         */
        get: function get(recognizer) {
            if (recognizer instanceof Recognizer) {
                return recognizer;
            }

            var recognizers = this.recognizers;
            for (var i = 0; i < recognizers.length; i++) {
                if (recognizers[i].options.event == recognizer) {
                    return recognizers[i];
                }
            }
            return null;
        },

        /**
         * add a recognizer to the manager
         * existing recognizers with the same event name will be removed
         * @param {Recognizer} recognizer
         * @returns {Recognizer|Manager}
         */
        add: function add(recognizer) {
            if (invokeArrayArg(recognizer, 'add', this)) {
                return this;
            }

            // remove existing
            var existing = this.get(recognizer.options.event);
            if (existing) {
                this.remove(existing);
            }

            this.recognizers.push(recognizer);
            recognizer.manager = this;

            this.touchAction.update();
            return recognizer;
        },

        /**
         * remove a recognizer by name or instance
         * @param {Recognizer|String} recognizer
         * @returns {Manager}
         */
        remove: function remove(recognizer) {
            if (invokeArrayArg(recognizer, 'remove', this)) {
                return this;
            }

            var recognizers = this.recognizers;
            recognizer = this.get(recognizer);
            recognizers.splice(inArray(recognizers, recognizer), 1);

            this.touchAction.update();
            return this;
        },

        /**
         * bind event
         * @param {String} events
         * @param {Function} handler
         * @returns {EventEmitter} this
         */
        on: function on(events, handler) {
            var handlers = this.handlers;
            each(splitStr(events), function (event) {
                handlers[event] = handlers[event] || [];
                handlers[event].push(handler);
            });
            return this;
        },

        /**
         * unbind event, leave emit blank to remove all handlers
         * @param {String} events
         * @param {Function} [handler]
         * @returns {EventEmitter} this
         */
        off: function off(events, handler) {
            var handlers = this.handlers;
            each(splitStr(events), function (event) {
                if (!handler) {
                    delete handlers[event];
                } else {
                    handlers[event].splice(inArray(handlers[event], handler), 1);
                }
            });
            return this;
        },

        /**
         * emit event to the listeners
         * @param {String} event
         * @param {Object} data
         */
        emit: function emit(event, data) {
            // we also want to trigger dom events
            if (this.options.domEvents) {
                triggerDomEvent(event, data);
            }

            // no handlers, so skip it all
            var handlers = this.handlers[event] && this.handlers[event].slice();
            if (!handlers || !handlers.length) {
                return;
            }

            data.type = event;
            data.preventDefault = function () {
                data.srcEvent.preventDefault();
            };

            var i = 0;
            while (i < handlers.length) {
                handlers[i](data);
                i++;
            }
        },

        /**
         * destroy the manager and unbinds all events
         * it doesn't unbind dom events, that is the user own responsibility
         */
        destroy: function destroy() {
            this.element && toggleCssProps(this, false);

            this.handlers = {};
            this.session = {};
            this.input.destroy();
            this.element = null;
        }
    };

    /**
     * add/remove the css properties as defined in manager.options.cssProps
     * @param {Manager} manager
     * @param {Boolean} add
     */
    function toggleCssProps(manager, add) {
        var element = manager.element;
        each(manager.options.cssProps, function (value, name) {
            element.style[prefixed(element.style, name)] = add ? value : '';
        });
    }

    /**
     * trigger dom event
     * @param {String} event
     * @param {Object} data
     */
    function triggerDomEvent(event, data) {
        var gestureEvent = document.createEvent('Event');
        gestureEvent.initEvent(event, true, true);
        gestureEvent.gesture = data;
        data.target.dispatchEvent(gestureEvent);
    }

    extend(Hammer, {
        INPUT_START: INPUT_START,
        INPUT_MOVE: INPUT_MOVE,
        INPUT_END: INPUT_END,
        INPUT_CANCEL: INPUT_CANCEL,

        STATE_POSSIBLE: STATE_POSSIBLE,
        STATE_BEGAN: STATE_BEGAN,
        STATE_CHANGED: STATE_CHANGED,
        STATE_ENDED: STATE_ENDED,
        STATE_RECOGNIZED: STATE_RECOGNIZED,
        STATE_CANCELLED: STATE_CANCELLED,
        STATE_FAILED: STATE_FAILED,

        DIRECTION_NONE: DIRECTION_NONE,
        DIRECTION_LEFT: DIRECTION_LEFT,
        DIRECTION_RIGHT: DIRECTION_RIGHT,
        DIRECTION_UP: DIRECTION_UP,
        DIRECTION_DOWN: DIRECTION_DOWN,
        DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
        DIRECTION_VERTICAL: DIRECTION_VERTICAL,
        DIRECTION_ALL: DIRECTION_ALL,

        Manager: Manager,
        Input: Input,
        TouchAction: TouchAction,

        TouchInput: TouchInput,
        MouseInput: MouseInput,
        PointerEventInput: PointerEventInput,
        TouchMouseInput: TouchMouseInput,
        SingleTouchInput: SingleTouchInput,

        Recognizer: Recognizer,
        AttrRecognizer: AttrRecognizer,
        Tap: TapRecognizer,
        Pan: PanRecognizer,
        Swipe: SwipeRecognizer,
        Pinch: PinchRecognizer,
        Rotate: RotateRecognizer,
        Press: PressRecognizer,

        on: addEventListeners,
        off: removeEventListeners,
        each: each,
        merge: merge,
        extend: extend,
        inherit: inherit,
        bindFn: bindFn,
        prefixed: prefixed
    });

    if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
        module.exports = Hammer;
    }
    /** ignored by jsdoc **/
    else {
            return Hammer;
        }
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 14 */
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
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'mm-course-list',
  props: ['message', 'to', 'pingjia'],
  methods: {
    next: function next() {
      location.hash = '#/buy/' + this.message.order_id;
    },
    toNext: function toNext() {
      if (this.to) {
        location.href = location.origin + '/' + this.to;
      }
    }
  }
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.message) ? _c('section', {
    staticClass: "mm-course-list"
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.toNext
    }
  }), _vm._v(" "), _c('div', [_c('img', {
    attrs: {
      "src": _vm.message.cover_240x140,
      "onerror": "javascript:this.src='https://cdn.xueyuan.xiaobao100.com/shield/image/plugin-pic/default.png';"
    }
  }), _vm._v(" "), _c('dl', [(_vm.message.title) ? _c('dt', {
    staticStyle: {
      "WebkitBoxOrient": "vertical"
    }
  }, [_vm._v(_vm._s(_vm.message.title))]) : _vm._e(), _vm._v(" "), _c('dd', [(_vm.message.category) ? _c('span', [_vm._v(_vm._s(_vm.message.category) + "\n         ")]) : _vm._e(), _vm._v(" "), (!_vm.pingjia) ? _c('object', [(_vm.message.score) ? _c('span', [_vm._v("\n          评分 " + _vm._s(_vm.message.score.toFixed(1)) + "\n          ")]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.pingjia) ? _c('object', [(!_vm.message.pingjia) ? _c('label', {
    staticClass: "pingjia",
    on: {
      "click": _vm.next
    }
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(44)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(41),
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(37),
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(43)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(39),
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(40),
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(42)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(38),
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = typeof Array.from === 'function' ? Array.from : __webpack_require__(23);

/***/ }),
/* 23 */
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
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_array_from__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_object_assign__ = __webpack_require__(12);
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
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
    "use strict";

    var Util = __webpack_require__(2),
        Base = __webpack_require__(3),
        Animate = __webpack_require__(6),
        Boundry = __webpack_require__(70),
        Hammer = __webpack_require__(13),
        Sticky = __webpack_require__(74),
        Fixed = __webpack_require__(72);
    // boundry checked bounce effect
    var BOUNDRY_CHECK_DURATION = 500;
    var BOUNDRY_CHECK_EASING = "ease";
    var BOUNDRY_CHECK_ACCELERATION = 0.1;
    /** 
     * @constructor
     * @param {object} cfg config for scroll
     * @param {number} cfg.SCROLL_ACCELERATION  acceleration for scroll, min value make the scrolling smoothly
     * @param {number} cfg.BOUNDRY_CHECK_DURATION duration for boundry bounce
     * @param {number} cfg.BOUNDRY_CHECK_EASING easing for boundry bounce
     * @param {number} cfg.BOUNDRY_CHECK_ACCELERATION acceleration for boundry bounce
     * @param {boolean} cfg.lockX just like overflow-x:hidden
     * @param {boolean} cfg.lockY just like overflow-y:hidden
     * @param {boolean} cfg.scrollbarX config if the scrollbar-x is visible
     * @param {boolean} cfg.scrollbarY config if the scrollbar-y is visible
     * @param {boolean} cfg.useTransition config if use css3 transition or raf for scroll animation
     * @param {boolean} cfg.useOriginScroll config if use simulate or origin scroll
     * @param {boolean} cfg.bounce config if use has the bounce effect when scrolling outside of the boundry
     * @param {boolean} cfg.boundryCheck config if scrolling inside of the boundry
     * @param {boolean} cfg.preventDefault prevent touchstart
     * @param {boolean} cfg.preventTouchMove prevent touchmove
     * @param {string|HTMLElement}  cfg.container config for scroller's container which default value is ".xs-container"
     * @param {string|HTMLElement}  cfg.content config for scroller's content which default value is ".xs-content"
     * @param {object}  cfg.indicatorInsets  config scrollbars position {top: number, left: number, bottom: number, right: number}
     * @param {string}  cfg.stickyElements config for sticky-positioned elements
     * @param {string}  cfg.fixedElements config for fixed-positioned elements
     * @param {string}  cfg.touchAction config for touchAction of the scroller
     * @extends XScroll
     * @example
     * var xscroll = new XScroll({
     *    renderTo:"#scroll",
     *    lockX:false,
     *    scrollbarX:true
     * });
     * xscroll.render();
     */
    function XScroll(cfg) {
        XScroll.superclass.constructor.call(this);
        this.userConfig = cfg;
        this.init();
    }

    Util.extend(XScroll, Base, {
        /**
         * version
         * @memberof XScroll
         * @type {string}
         */
        version: "3.0.13",
        /**
         * init scroll
         * @memberof XScroll
         * @return {XScroll}
         */
        init: function init() {
            var self = this;
            var defaultCfg = {
                preventDefault: true,
                bounce: true,
                boundryCheck: true,
                useTransition: true,
                gpuAcceleration: true,
                BOUNDRY_CHECK_EASING: BOUNDRY_CHECK_EASING,
                BOUNDRY_CHECK_DURATION: BOUNDRY_CHECK_DURATION,
                BOUNDRY_CHECK_ACCELERATION: BOUNDRY_CHECK_ACCELERATION,
                useOriginScroll: false,
                zoomType: "y",
                indicatorInsets: {
                    top: 3,
                    bottom: 3,
                    left: 3,
                    right: 3,
                    width: 3,
                    spacing: 5
                },
                container: ".xs-container",
                content: ".xs-content",
                stickyElements: ".xs-sticky",
                fixedElements: ".xs-fixed",
                touchAction: "auto"
            };
            //generate guid
            self.guid = Util.guid();
            self.renderTo = Util.getNode(self.userConfig.renderTo);
            //timer for animtion
            self.__timers = {};
            //config attributes on element
            var elCfg = JSON.parse(self.renderTo.getAttribute('xs-cfg'));
            var userConfig = self.userConfig = Util.mix(Util.mix(defaultCfg, elCfg), self.userConfig);
            self.container = Util.getNode(userConfig.container, self.renderTo);
            self.content = Util.getNode(userConfig.content, self.renderTo);
            self.boundry = new Boundry();
            self.boundry.refresh();
            return self;
        },
        /**
         * destroy scroll
         * @memberof XScroll
         * @return {XScroll}
         */
        destroy: function destroy() {
            var self = this;
            self.mc && self.mc.destroy();
            self.sticky && self.sticky.destroy();
            self.fixed && self.fixed.destroy();
        },
        _initContainer: function _initContainer() {},
        /**
         * @memberof XScroll
         * @return {XScroll}
         */
        enableGPUAcceleration: function enableGPUAcceleration() {
            this.userConfig.gpuAcceleration = true;
            return this;
        },
        /**
         * @memberof XScroll
         * @return {XScroll}
         */
        disableGPUAcceleration: function disableGPUAcceleration() {
            this.userConfig.gpuAcceleration = false;
            return this;
        },
        /**
         * get scroll offset
         * @memberof XScroll
         * @return {Object} {scrollTop:scrollTop,scrollLeft:scrollLeft}
         */
        getScrollPos: function getScrollPos() {
            var self = this;
            return {
                scrollLeft: self.getScrollLeft(),
                scrollTop: self.getScrollTop()
            };
        },
        /**
         * get scroll top value
         * @memberof XScroll
         * @return {number} scrollTop
         */
        getScrollTop: function getScrollTop() {},
        /**
         * get scroll left value
         * @memberof XScroll
         * @return {number} scrollLeft
         */
        getScrollLeft: function getScrollLeft() {},
        /**
         * scroll absolute to the destination
         * @memberof XScroll
         * @param scrollLeft {number} scrollLeft
         * @param scrollTop {number} scrollTop
         * @param duration {number} duration for animte
         * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
         **/
        scrollTo: function scrollTo(scrollLeft, scrollTop, duration, easing, callback) {
            var self = this;
            var scrollLeft = undefined === scrollLeft || isNaN(scrollLeft) ? -self.getScrollLeft() : scrollLeft;
            var scrollTop = undefined === scrollTop || isNaN(scrollTop) ? -self.getScrollTop() : scrollTop;
            self.scrollLeft(scrollLeft, duration, easing, callback);
            self.scrollTop(scrollTop, duration, easing, callback);
        },
        /**
         * scroll relative to the destination
         * @memberof XScroll
         * @param scrollLeft {number} scrollLeft
         * @param scrollTop {number} scrollTop
         * @param duration {number} duration for animte
         * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
         **/
        scrollBy: function scrollBy(scrollLeft, scrollTop, duration, easing, callback) {
            this.scrollByX(scrollLeft, duration, easing, callback);
            this.scrollByY(scrollTop, duration, easing, callback);
        },
        /**
         * horizontal scroll relative to the destination
         * @memberof XScroll
         * @param scrollLeft {number} scrollLeft
         * @param duration {number} duration for animte
         * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
         **/
        scrollLeftBy: function scrollLeftBy(scrollLeft, duration, easing, callback) {
            this.scrollLeft(Number(scrollLeft) + Number(this.getScrollLeft()), duration, easing, callback);
        },
        /**
         * vertical scroll relative to the destination
         * @memberof XScroll
         * @param scrollTop {number} scrollTop
         * @param duration {number} duration for animte
         * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
         **/
        scrollTopBy: function scrollTopBy(scrollTop, duration, easing, callback) {
            this.scrollTop(Number(scrollTop) + Number(this.getScrollTop()), duration, easing, callback);
        },
        /**
         * horizontal scroll absolute to the destination
         * @memberof XScroll
         * @param scrollLeft {number} scrollLeft
         * @param duration {number} duration for animte
         * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
         **/
        scrollLeft: function scrollLeft(_scrollLeft, duration, easing, callback) {},
        /**
         * vertical scroll absolute to the destination
         * @memberof XScroll
         * @param scrollTop {number} scrollTop
         * @param duration {number} duration for animte
         * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
         **/
        scrollTop: function scrollTop(_scrollTop, duration, easing, callback) {},
        /**
         * reset the boundry size
         * @memberof XScroll
         * @return {XScroll}
         **/
        resetSize: function resetSize() {
            var self = this;
            if (!self.container || !self.content) return;
            var userConfig = self.userConfig;
            var renderToStyle = getComputedStyle(self.renderTo);
            var width = self.width = (userConfig.width || self.renderTo.offsetWidth) - Util.px2Num(renderToStyle['padding-left']) - Util.px2Num(renderToStyle['padding-right']);
            var height = self.height = (userConfig.height || self.renderTo.offsetHeight) - Util.px2Num(renderToStyle['padding-top']) - Util.px2Num(renderToStyle['padding-bottom']);;
            var containerWidth = userConfig.containerWidth || self.content.offsetWidth;
            var containerHeight = userConfig.containerHeight || self.content.offsetHeight;
            self.containerWidth = containerWidth < self.width ? self.width : containerWidth;
            self.containerHeight = containerHeight < self.height ? self.height : containerHeight;
            self.boundry.refresh({
                width: self.width,
                height: self.height
            });
            return self;
        },
        /**
         * render scroll
         * @memberof XScroll
         * @return {XScroll}
         **/
        render: function render() {
            var self = this;
            self.resetSize();
            //init stickies
            self.initSticky();
            //init fixed elements
            self.initFixed();

            self.trigger("afterrender", {
                type: "afterrender"
            });
            self._bindEvt();
            //update touch-action 
            self.initTouchAction();
            return self;
        },
        /**
         * init touch action
         * @memberof XScroll
         * @return {XScroll}
         */
        initTouchAction: function initTouchAction() {
            var self = this;
            self.mc.set({
                touchAction: self.userConfig.touchAction
            });
            return self;
        },
        initFixed: function initFixed() {
            var self = this,
                userConfig = self.userConfig;
            self.fixed = self.fixed || new Fixed({
                fixedElements: userConfig.fixedElements,
                xscroll: self,
                fixedRenderTo: userConfig.fixedRenderTo
            });
            self.fixed.render();
            self.resetSize();
            return self;
        },
        initSticky: function initSticky() {
            var self = this,
                userConfig = self.userConfig;
            var sticky = self.sticky = self.sticky || new Sticky({
                xscroll: self,
                zoomType: userConfig.zoomType,
                stickyRenderTo: userConfig.stickyRenderTo
            });
            sticky.render();
        },
        /**
         * bounce to the boundry vertical and horizontal
         * @memberof XScroll
         * @return {XScroll}
         **/
        boundryCheck: function boundryCheck() {
            return this;
        },
        /**
         * bounce to the boundry horizontal
         * @memberof XScroll
         * @return {XScroll}
         **/
        boundryCheckX: function boundryCheckX() {
            return this;
        },
        /**
         * bounce to the boundry vertical
         * @memberof XScroll
         * @return {XScroll}
         **/
        boundryCheckY: function boundryCheckY() {
            return this;
        },
        _bindEvt: function _bindEvt() {
            var self = this;
            if (self.___isEvtBind) return;
            self.___isEvtBind = true;
            var mc = self.mc = new Hammer.Manager(self.renderTo);
            var tap = new Hammer.Tap();
            var pan = new Hammer.Pan();
            var pinch = new Hammer.Pinch();
            mc.add([tap, pan]);
            //trigger all events 
            self.mc.on("panstart pan panend pancancel pinchstart pinchmove pinchend pinchcancel pinchin pinchout", function (e) {
                self.trigger(e.type, e);
            });
            //trigger touch events
            var touchEvents = ['touchstart', 'touchmove', 'touchend', 'touchcancel', 'mousedown'];
            for (var i = 0, l = touchEvents.length; i < l; i++) {
                self.renderTo.addEventListener(touchEvents[i], function (e) {
                    self.trigger(e.type, e);
                });
            }
            self.mc.on("tap", function (e) {
                if (e.tapCount == 1) {
                    e.type = "tap";
                    self.trigger(e.type, e);
                } else if (e.tapCount == 2) {
                    e.type = "doubletap";
                    self.trigger("doubletap", e);
                }
            });
            return self;
        },
        _resetLockConfig: function _resetLockConfig() {},
        stop: function stop() {}
    });

    if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
        module.exports = XScroll;
    }
    /** ignored by jsdoc **/
    else {
            return XScroll;
        }
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	"use strict";
	//easing

	var Easing = {
		"linear": [0, 0, 1, 1],
		"ease": [.25, .1, .25, 1],
		"ease-in": [.42, 0, 1, 1],
		"ease-out": [0, 0, .58, 1],
		"ease-in-out": [.42, 0, .58, 1],
		"quadratic": [0.33, 0.66, 0.66, 1],
		"circular": [0.1, 0.57, 0.1, 1],
		"bounce": [.71, 1.35, .47, 1.41],
		format: function format(easing) {
			if (!easing) return;
			if (typeof easing === "string" && this[easing]) {
				return this[easing] instanceof Array ? [" cubic-bezier(", this[easing], ") "].join("") : this[easing];
			}
			if (easing instanceof Array) {
				return [" cubic-bezier(", easing, ") "].join("");
			}
			return easing;
		}
	};
	if (( false ? "undefined" : _typeof(module)) == 'object' && module.exports) {
		module.exports = Easing;
	}
	/** ignored by jsdoc **/
	else {
			return Easing;
		}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	"use strict";

	var Util = __webpack_require__(2);
	var Base = __webpack_require__(3);
	var Easing = __webpack_require__(27);

	var RAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
		window.setTimeout(callback, 1000 / 60);
	};

	var vendors = ['webkit', 'moz', 'ms', 'o'];
	var cancelRAF = window.cancelAnimationFrame;
	if (!cancelRAF) {
		for (var i = 0; i < vendors.length; i++) {
			if (window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame']) {
				cancelRAF = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
			}
		}
	}

	cancelRAF = cancelRAF || window.clearTimeout;

	function Bezier(x1, y1, x2, y2, epsilon) {
		var curveX = function curveX(t) {
			var v = 1 - t;
			return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
		};

		var curveY = function curveY(t) {
			var v = 1 - t;
			return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
		};

		var derivativeCurveX = function derivativeCurveX(t) {
			var v = 1 - t;
			return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (-t * t * t + 2 * v * t) * x2;
		};

		return function (t) {

			var x = t,
			    t0,
			    t1,
			    t2,
			    x2,
			    d2,
			    i;

			// First try a few iterations of Newton's method -- normally very fast.
			for (t2 = x, i = 0; i < 8; i++) {
				x2 = curveX(t2) - x;
				if (Math.abs(x2) < epsilon) return curveY(t2);
				d2 = derivativeCurveX(t2);
				if (Math.abs(d2) < 1e-6) break;
				t2 = t2 - x2 / d2;
			}

			t0 = 0, t1 = 1, t2 = x;

			if (t2 < t0) return curveY(t0);
			if (t2 > t1) return curveY(t1);

			// Fallback to the bisection method for reliability.
			while (t0 < t1) {
				x2 = curveX(t2);
				if (Math.abs(x2 - x) < epsilon) return curveY(t2);
				if (x > x2) t0 = t2;else t1 = t2;
				t2 = (t1 - t0) * .5 + t0;
			}

			// Failure
			return curveY(t2);
		};
	};

	function Timer(cfg) {
		var self = this;
		self.cfg = Util.mix({
			easing: "linear"
		}, cfg);
	}

	Timer.MIN_DURATION = 1;

	Util.extend(Timer, Base, {
		reset: function reset(cfg) {
			var self = this;
			Util.mix(self.cfg, cfg);
			self.isfinished = false;
			self.percent = 0;
			self._stop = null;
		},
		run: function run() {
			var self = this;
			var duration = self.cfg.duration;
			if (duration <= Timer.MIN_DURATION) {
				self.isfinished = true;
				self.trigger("run", {
					percent: 1
				});
				self.trigger("end", {
					percent: 1
				});
			}
			if (self.isfinished) return;
			self._hasFinishedPercent = self._stop && self._stop.percent || 0;
			self._stop = null;
			self.start = Date.now();
			self.percent = 0;
			// epsilon determines the precision of the solved values
			var epsilon = 1000 / 60 / duration / 4;
			var b = Easing[self.cfg.easing];
			self.easingFn = Bezier(b[0], b[1], b[2], b[3], epsilon);
			self._run();
		},
		_run: function _run() {
			var self = this;
			cancelRAF(self._raf);
			self._raf = RAF(function () {
				self.now = Date.now();
				self.duration = self.now - self.start >= self.cfg.duration ? self.cfg.duration : self.now - self.start;
				self.progress = self.easingFn(self.duration / self.cfg.duration);
				self.percent = self.duration / self.cfg.duration + self._hasFinishedPercent;
				if (self.percent >= 1 || self._stop) {
					self.percent = self._stop && self._stop.percent ? self._stop.percent : 1;
					self.duration = self._stop && self._stop.duration ? self._stop.duration : self.duration;
					var param = {
						percent: self.percent
					};
					self.trigger("stop", param);
					if (self.percent >= 1) {
						self.isfinished = true;
						self.trigger("end", {
							percent: 1
						});
					}
					return;
				}
				self.trigger("run", {
					percent: self.progress,
					originPercent: self.percent
				});
				self._run();
			});
		},
		stop: function stop() {
			var self = this;
			self._stop = {
				percent: self.percent,
				now: self.now
			};
			cancelRAF(self._raf);
		}
	});

	if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
		module.exports = Timer;
	}
	/** ignored by jsdoc **/
	else {
			return Timer;
		}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 29 */
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
/* 30 */
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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__swiper_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_router__ = __webpack_require__(8);
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
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__ = __webpack_require__(9);
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
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__ = __webpack_require__(9);
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".vux-tab-ink-bar{position:absolute;height:2px;bottom:0;left:0;background-color:#04be02;text-align:center}.vux-tab-ink-bar-transition-forward{-webkit-transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s;transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s}.vux-tab-ink-bar-transition-backward{-webkit-transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1);transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1)}.vux-tab{display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;height:44px;position:relative}.vux-tab button{padding:0;border:0;outline:0;background:0 0;-webkit-appearance:none;appearance:none}.vux-tab .vux-tab-item{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%;height:100%;box-sizing:border-box;background:-webkit-linear-gradient(top,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background:linear-gradient(180deg,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background-size:100% 1px;font-size:14px;text-align:center;line-height:44px;color:#666}.vux-tab .vux-tab-item.vux-tab-selected{color:#04be02;border-bottom:3px solid #04be02}.vux-tab .vux-tab-item.vux-tab-disabled{color:#ddd}.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected{background:0 0}.vux-tab-bar-inner{display:block;background-color:#04be02;margin:auto;height:100%;-webkit-transition:width .3s cubic-bezier(.35,0,.25,1);transition:width .3s cubic-bezier(.35,0,.25,1)}.vux-tab-item-badge{position:absolute;top:0;bottom:0;box-sizing:border-box;display:inline-block;height:18px;min-width:18px;padding:0 4px;border-radius:30px;margin:auto 0 auto 4px;line-height:18px;font-size:11px;background-clip:padding-box;vertical-align:middle}", ""]);

// exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".vux-slider{overflow:hidden;position:relative}.vux-slider .vux-indicator-right,.vux-slider>.vux-indicator{position:absolute;right:15px;bottom:10px}.vux-slider .vux-indicator-right>a,.vux-slider>.vux-indicator>a{float:left;margin-left:6px}.vux-slider .vux-indicator-right>a>.vux-icon-dot,.vux-slider>.vux-indicator>a>.vux-icon-dot{display:inline-block;vertical-align:middle;width:6px;height:6px;border-radius:3px;background-color:#d0cdd1}.vux-slider .vux-indicator-right>a>.vux-icon-dot.active,.vux-slider>.vux-indicator>a>.vux-icon-dot.active{background-color:#04be02}.vux-slider>.vux-indicator-center{right:50%;-webkit-transform:translateX(50%);transform:translateX(50%)}.vux-slider>.vux-indicator-left{left:15px;right:auto}.vux-slider>.vux-swiper{overflow:hidden;position:relative}.vux-slider>.vux-swiper>.vux-swiper-item{position:absolute;top:0;left:0;width:100%;height:100%}.vux-slider>.vux-swiper>.vux-swiper-item>a{display:block;width:100%;height:100%}.vux-slider>.vux-swiper>.vux-swiper-item>a>.vux-img{display:block;width:100%;height:100%;background:50% no-repeat;background-size:cover}.vux-slider>.vux-swiper>.vux-swiper-item>a>.vux-swiper-desc{position:absolute;left:0;right:0;bottom:0;height:1.4em;font-size:16px;padding:20px 50px 12px 13px;margin:0;background-image:-webkit-linear-gradient(top,transparent,rgba(0,0,0,.7));background-image:linear-gradient(180deg,transparent 0,rgba(0,0,0,.7));color:#fff;text-shadow:0 1px 0 rgba(0,0,0,.5);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".weui-loading{width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:weuiLoading 1s steps(12) infinite;animation:weuiLoading 1s steps(12) infinite;background:transparent url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=\") no-repeat;background-size:100%}.weui-loading.weui-loading_transparent{background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTAwIDEwMCc+PHBhdGggZmlsbD0nbm9uZScgZD0nTTAgMGgxMDB2MTAwSDB6Jy8+PHJlY3QgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjU2KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0zMCknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDEwNS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjQzKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA3NS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjM4KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2NSA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjMyKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTguNjYgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4yOCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoMTUwIDU0LjAyIDY1KScvPjxyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA1MCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjIpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKC0xNTAgNDUuOTggNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xNyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTEyMCA0MS4zNCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjE0KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtOTAgMzUgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtNjAgMjQuMDIgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4wMyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTMwIC01Ljk4IDY1KScvPjwvc3ZnPgo=\")}@-webkit-keyframes weuiLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes weuiLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.weui-loadmore{width:65%;margin:1.5em auto;line-height:1.6em;font-size:14px;text-align:center}.weui-loadmore__tips{display:inline-block;vertical-align:middle}.weui-loadmore_line{border-top:1px solid #e5e5e5;margin-top:2.4em}.weui-loadmore_line .weui-loadmore__tips{position:relative;top:-.9em;padding:0 .55em;background-color:#fff;color:#999}.weui-loadmore_dot .weui-loadmore__tips{padding:0 .16em}.weui-loadmore_dot .weui-loadmore__tips:before{content:\" \";width:4px;height:4px;border-radius:50%;background-color:#e5e5e5;display:inline-block;position:relative;vertical-align:0;top:-.16em}", ""]);

// exports


/***/ }),
/* 37 */
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
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("0bd76816", content, false);
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("3ab95e3e", content, false);
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("1b11f982", content, false);
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
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CourseTab_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CourseTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__CourseTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CourseTab_scss__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CourseTab_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__CourseTab_scss__);


if (true) {
    __WEBPACK_IMPORTED_MODULE_0__CourseTab_vue___default.a.install = function (Vue) {
        return Vue.component(__WEBPACK_IMPORTED_MODULE_0__CourseTab_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__CourseTab_vue___default.a);
    };
}
/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__CourseTab_vue___default.a);

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(85),
  /* template */
  __webpack_require__(101),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/moia/Desktop/xiaobao-vue/mm_vue_plugins/src/course-tab/CourseTab.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CourseTab.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-512ec87c", Component.options)
  } else {
    hotAPI.reload("data-v-512ec87c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
    "use strict";

    var Util = __webpack_require__(2);

    function Boundry(cfg) {
        this.cfg = Util.mix({
            width: 0,
            height: 0
        }, cfg);
        this.init();
    }
    Util.mix(Boundry.prototype, {
        init: function init() {
            var self = this;
            self._xtop = 0;
            self._xright = 0;
            self._xleft = 0;
            self._xbottom = 0;
            self.refresh({
                width: self.cfg.width,
                height: self.cfg.height
            });
        },
        reset: function reset() {
            this.resetTop();
            this.resetLeft();
            this.resetBottom();
            this.resetRight();
            return this;
        },
        resetTop: function resetTop() {
            this._xtop = 0;
            this.refresh();
            return this;
        },
        resetLeft: function resetLeft() {
            this._xleft = 0;
            this.refresh();
            return this;
        },
        resetBottom: function resetBottom() {
            this._xbottom = 0;
            this.refresh();
            return this;
        },
        resetRight: function resetRight() {
            this._xright = 0;
            this.refresh();
            return this;
        },
        expandTop: function expandTop(top) {
            this._xtop = top;
            this.refresh();
            return this;
        },
        expandLeft: function expandLeft(left) {
            this._xleft = left;
            this.refresh();
            return this;
        },
        expandRight: function expandRight(right) {
            this._xright = right;
            this.refresh();
            return this;
        },
        expandBottom: function expandBottom(bottom) {
            this._xbottom = bottom;
            this.refresh();
            return this;
        },
        refresh: function refresh(cfg) {
            Util.mix(this.cfg, cfg);
            this.top = this._xtop;
            this.left = this._xleft;
            this.bottom = (cfg && cfg.height || this.cfg.height || 0) - this._xbottom;
            this.right = (cfg && cfg.width || this.cfg.width || 0) - this._xright;
            this.width = this.right - this.left > 0 ? this.right - this.left : 0;
            this.height = this.bottom - this.top > 0 ? this.bottom - this.top : 0;
            return this;
        }
    });

    if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
        module.exports = Boundry;
    }
    /** ignored by jsdoc **/
    else {
            return Boundry;
        }
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	/*
 	wrapped scroll controller
 */
	"use strict";

	var Util = __webpack_require__(2),
	    Base = __webpack_require__(3);

	var Controller = function Controller(cfg) {
		Controller.superclass.constructor.call(this, cfg);
		this.userConfig = Util.mix({}, cfg);
		this.init();
	};

	Util.extend(Controller, Base, {
		init: function init() {
			var self = this;
			self.xscroll = self.userConfig.xscroll;
		},
		add: function add(scroll, cfg) {
			var self = this;
			cfg = Util.extend({
				captureBounce: false,
				stopPropagation: true
			}, cfg);
			if (!self.__scrolls) {
				self.__scrolls = {};
			}
			if (scroll.guid && !self.__scrolls[scroll.guid]) {
				scroll.parentscroll = self.xscroll;
				self._bind(scroll);
				return self.__scrolls[scroll.guid] = scroll;
			}
			return;
		},
		remove: function remove(scroll) {
			var self = this;
			if (!scroll || !scroll.guid) return;
			var subscroll = self.__scrolls[scroll.guid];
			if (subscroll) {
				subscroll.parentscroll = null;
				self._unbind(scroll);
				subscroll = null;
			}
		},
		get: function get(guid) {
			if (guid) {
				return this.__scrolls[guid];
			}
			return this.__scrolls;
		},

		_unbind: function _unbind(sub) {},

		_bind: function _bind(sub) {
			var self = this,
			    xscroll = self.xscroll;
			xscroll.renderTo.addEventListener("touchstart", function () {
				xscroll._resetLockConfig();
			});
			sub.renderTo.addEventListener("touchstart", function () {
				sub._resetLockConfig();
			});
			xscroll.on("panend", xscroll._resetLockConfig);
			sub.on("panend", sub._resetLockConfig);
			sub.on("panstart", function (e) {
				//vertical scroll enabled
				if (!sub.userConfig.lockY && !xscroll.userConfig.lockY) {
					//outside of boundry
					if (sub.isBoundryOut()) {
						xscroll.userConfig.lockY = true;
						return;
					}
					if (e.direction == 16 && sub.getBoundryOutTop() >= 0) {
						sub.userConfig.lockY = true;
					} else if (e.direction == 8 && sub.getBoundryOutTop() >= 0 && sub.getBoundryOutBottom() < 0) {
						xscroll.userConfig.lockY = true;
					}
					if (e.direction == 8 && sub.getBoundryOutBottom() >= 0) {
						sub.userConfig.lockY = true;
					} else if (e.direction == 16 && sub.getBoundryOutBottom() >= 0 && sub.getBoundryOutTop() < 0) {
						xscroll.userConfig.lockY = true;
					}
					if (sub.getBoundryOutTop() < 0 && sub.getBoundryOutBottom() < 0) {
						xscroll.userConfig.lockY = true;
					}
				}
				//horizontal scroll enabled
				if (!sub.userConfig.lockX && !xscroll.userConfig.lockX) {
					if (sub.isBoundryOut()) {
						xscroll.userConfig.lockX = true;
						return;
					}
					if (e.direction == 4 && sub.getBoundryOutLeft() >= 0) {
						sub.userConfig.lockX = true;
					} else if (e.direction == 2 && sub.getBoundryOutLeft() >= 0 && sub.getBoundryOutRight() < 0) {
						xscroll.userConfig.lockX = true;
					}
					if (e.direction == 2 && sub.getBoundryOutRight() >= 0) {
						sub.userConfig.lockX = true;
					} else if (e.direction == 4 && sub.getBoundryOutRight() >= 0 && sub.getBoundryOutLeft() < 0) {
						xscroll.userConfig.lockX = true;
					}
					if (sub.getBoundryOutLeft() < 0 && sub.getBoundryOutRight() < 0) {
						xscroll.userConfig.lockX = true;
					}
				}

				if (!sub.userConfig.lockX && xscroll.userConfig.lockX) {
					//pan x
					if (e.direction == 2 || e.direction == 4) {
						xscroll.userConfig.lockY = true;
					} else {
						sub.userConfig.lockX = true;
					}
				}

				if (!sub.userConfig.lockY && xscroll.userConfig.lockY) {
					//pan y
					if (e.direction == 8 || e.direction == 16) {
						xscroll.userConfig.lockX = true;
					} else {
						sub.userConfig.lockY = true;
					}
				}
			});
		}
	});

	if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
		module.exports = Controller;
	}
	/** ignored by jsdoc **/
	else {
			return Controller;
		}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
  "use strict";

  var Util = __webpack_require__(2);
  var Base = __webpack_require__(3);
  var transform = Util.prefixStyle("transform");

  var Fixed = function Fixed(cfg) {
    Fixed.superclass.constructor.call(this, cfg);
    this.userConfig = Util.mix({
      fixedRenderTo: undefined,
      fixedElements: ".xs-fixed",
      prefix: "xs-fixed-container",
      zoomType: "y"
    }, cfg);
    this.init();
  };

  Util.extend(Fixed, Base, {
    fixedElements: [],
    init: function init() {
      var self = this,
          userConfig = self.userConfig,
          xscroll = self.xscroll = userConfig.xscroll,
          xscrollConfig = self.xscrollConfig = xscroll.userConfig;
      self.isY = !!(userConfig.zoomType == "y");
      self._ = self.isY ? {
        top: "top",
        height: "height",
        width: "width",
        offsetTop: "offsetTop"
      } : {
        top: "left",
        height: "width",
        width: "height",
        offsetTop: "offsetLeft"
      };
      self.fixedRenderTo = Util.getNode(userConfig.fixedRenderTo);
      return self;
    },
    render: function render() {
      var self = this;
      var xscroll = self.xscroll;
      self.infinite = xscroll.getPlugin("infinite");
      if (!self.fixedRenderTo) {
        self.fixedRenderTo = document.createElement('div');
        xscroll.renderTo.appendChild(self.fixedRenderTo);
      }
      Util.addClass(self.fixedRenderTo, self.userConfig.prefix);
      var originalFixedElements = self.originalFixedElements = self.getFixedElements();
      for (var i = 0, l = originalFixedElements.length; i < l; i++) {
        self.renderFixedElement(originalFixedElements[i], i, self.fixedRenderTo);
      }
      return self;
    },
    getFixedElements: function getFixedElements() {
      var self = this;
      var infinite = self.infinite;
      var userConfig = self.userConfig;
      if (infinite) {
        var els = [];
        for (var i in infinite.__serializedData) {
          var data = infinite.__serializedData[i];
          if (data && data.style && data.style.position == "fixed") {
            els.push(data);
          }
        }
        return els;
      } else {
        return Util.getNodes(userConfig.fixedElements, self.xscroll.content);
      }
    },
    renderFixedElement: function renderFixedElement(el, fixedIndex, fixedRenderTo) {
      var self = this;
      var isRender = true;
      var _ = self._;
      var xscroll = self.xscroll;
      var userConfig = self.userConfig;
      var xscrollConfig = self.xscrollConfig;
      var useOriginScroll = xscrollConfig.useOriginScroll;
      var infinite = self.infinite;
      var fixedElement = self.fixedElements[fixedIndex];
      if (!self.fixedElements[fixedIndex]) {
        isRender = false;
        if (useOriginScroll && !infinite) {
          //use original position:fixed stylesheet
          el.style.position = "fixed";
          el.style.display = "block";
        } else {
          //deep clone fixed nodes and hide original nodes
          fixedElement = document.createElement("div");
          if (infinite) {
            fixedElement.setAttribute("style", Util.stringifyStyle(Util.mix(el.style, {
              display: "block",
              width: "100%"
            })));
            fixedElement.style[_.top] = (el.style[_.top] >= 0 ? el.style[_.top] : el._top) + "px";
            if (el.style[_.height]) {
              fixedElement.style[_.height] = el.style[_.height] + "px";
            }
            infinite.userConfig.renderHook.call(self, fixedElement, el);
          } else {
            fixedElement.style.display = "block";
            fixedElement.style.position = "absolute";
            fixedElement.style[_.width] = "100%";
            fixedElement.innerHTML = el.innerHTML;
            fixedElement.className = el.className;
            fixedElement.setAttribute("style", el.getAttribute("style"));
            fixedElement.style[_.top] = el[_.offsetTop] + "px";
            el.style.display = "none";
          }
          fixedRenderTo.appendChild(fixedElement);
          self.fixedElements.push(fixedElement);
        }
      }
      xscroll.trigger("fixedchange", {
        fixedIndex: fixedIndex,
        fixedElement: useOriginScroll ? el : fixedElement,
        originalFixedElement: el,
        isRender: isRender
      });
    },
    destroy: function destroy() {
      var self = this;
      self.fixedElements = undefined;
    }
  });

  if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    module.exports = Fixed;
  }
  /** ignored by jsdoc **/
  else {
      return Fixed;
    }
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	"use strict";

	var Util = __webpack_require__(2);
	var Animate = __webpack_require__(6);
	var MAX_BOUNCE_DISTANCE = 40;
	var MIN_BAR_SCROLLED_SIZE = 10;
	var MIN_BAR_SIZE = 50;
	var transform = Util.prefixStyle("transform");
	var transformStr = Util.vendor ? ["-", Util.vendor, "-transform"].join("") : "transform";
	var transition = Util.prefixStyle("transition");
	var borderRadius = Util.prefixStyle("borderRadius");
	var transitionDuration = Util.prefixStyle("transitionDuration");

	var ScrollBar = function ScrollBar(cfg) {
		this.userConfig = Util.mix({
			MIN_BAR_SCROLLED_SIZE: MIN_BAR_SCROLLED_SIZE,
			MIN_BAR_SIZE: MIN_BAR_SIZE,
			MAX_BOUNCE_DISTANCE: MAX_BOUNCE_DISTANCE,
			spacing: 5
		}, cfg);
		this.init(cfg.xscroll);
	};

	Util.mix(ScrollBar.prototype, {
		init: function init(xscroll) {
			var self = this;
			self.xscroll = xscroll;
			self.type = self.userConfig.type;
			self.isY = self.type == "y" ? true : false;
			self.scrollTopOrLeft = self.isY ? "scrollTop" : "scrollLeft";
		},
		destroy: function destroy() {
			var self = this;
			Util.remove(self.scrollbar);
			self.xscroll.off("scroll", self._scrollHandler, self);
			self.xscroll.off("scrollend", self._scrollEndHandler, self);
		},
		render: function render() {
			var self = this;
			var xscroll = self.xscroll;
			var boundry = xscroll.boundry;
			var indicatorInsets = self.xscroll.userConfig.indicatorInsets;
			var translateZ = xscroll.userConfig.gpuAcceleration ? " translateZ(0) " : "";
			var transform = translateZ ? transformStr + ":" + translateZ + ";" : "";
			var commonCss = "opacity:0;position:absolute;z-index:999;overflow:hidden;-webkit-border-radius:3px;-moz-border-radius:3px;-o-border-radius:3px;" + transform;
			indicatorInsets._xright = indicatorInsets.right + indicatorInsets.spacing;
			indicatorInsets._xbottom = indicatorInsets.bottom + indicatorInsets.spacing;
			var css = self.isY ? Util.substitute("width:{width}px;bottom:{_xbottom}px;top:{top}px;right:{right}px;", indicatorInsets) + commonCss : Util.substitute("height:{width}px;left:{left}px;right:{_xright}px;bottom:{bottom}px;", indicatorInsets) + commonCss;

			if (!self.scrollbar) {
				self.scrollbar = document.createElement("div");
				self.indicate = document.createElement("div");
				xscroll.renderTo.appendChild(self.scrollbar);
				self.scrollbar.appendChild(self.indicate);
			}
			self.scrollbar.style.cssText = css;
			var size = self.isY ? "width:100%;" : "height:100%;";
			self.indicate.style.cssText = size + "position:absolute;background:rgba(0,0,0,0.3);-webkit-border-radius:3px;-moz-border-radius:3px;-o-border-radius:3px;";
			self._update();
			self.hide(0);
			self._bindEvt();
		},
		_update: function _update(pos, duration, easing, callback) {
			var self = this;
			var pos = undefined === pos ? self.isY ? self.xscroll.getScrollTop() : self.xscroll.getScrollLeft() : pos;
			var barInfo = self.computeScrollBar(pos);
			var size = self.isY ? "height" : "width";
			self.indicate.style[size] = Math.round(barInfo.size) + "px";
			if (duration && easing) {
				self.scrollTo(barInfo.pos, duration, easing, callback);
			} else {
				self.moveTo(barInfo.pos);
			}
		},
		//compute the position and size of the scrollbar
		computeScrollBar: function computeScrollBar(pos) {
			var self = this;
			var type = self.isY ? "y" : "x";
			var spacing = self.userConfig.spacing;
			var xscroll = self.xscroll;
			var boundry = xscroll.boundry;
			var userConfig = self.userConfig;
			var pos = self.isY ? Math.round(pos) + boundry._xtop : Math.round(pos) + boundry._xleft;
			var MIN_BAR_SCROLLED_SIZE = userConfig.MIN_BAR_SCROLLED_SIZE;
			var MIN_BAR_SIZE = userConfig.MIN_BAR_SIZE;
			var MAX_BOUNCE_DISTANCE = userConfig.MAX_BOUNCE_DISTANCE;
			self.containerSize = self.isY ? xscroll.containerHeight + boundry._xtop + boundry._xbottom : self.xscroll.containerWidth + boundry._xright + boundry._xleft;
			self.size = self.isY ? boundry.cfg.height : boundry.cfg.width;
			self.indicateSize = self.isY ? boundry.cfg.height - spacing * 2 : boundry.cfg.width - spacing * 2;
			var indicateSize = self.indicateSize;
			var containerSize = self.containerSize;
			var barPos = indicateSize * pos / containerSize;
			var barSize = Math.round(indicateSize * self.size / containerSize);
			var overTop = self.isY ? xscroll.getBoundryOutTop() : xscroll.getBoundryOutLeft();
			var overBottom = self.isY ? xscroll.getBoundryOutBottom() : xscroll.getBoundryOutRight();
			var barShiftSize = MIN_BAR_SIZE - barSize > 0 ? MIN_BAR_SIZE - barSize : 0;
			barSize = barSize < MIN_BAR_SIZE ? MIN_BAR_SIZE : barSize;
			barPos = (indicateSize - barShiftSize) * pos / containerSize;
			if (overTop >= 0) {
				var pct = overTop / MAX_BOUNCE_DISTANCE;
				pct = pct > 1 ? 1 : pct;
				barPos = -pct * (barSize - MIN_BAR_SCROLLED_SIZE);
			}
			if (overBottom >= 0) {
				var pct = overBottom / MAX_BOUNCE_DISTANCE;
				pct = pct > 1 ? 1 : pct;
				barPos = pct * (barSize - MIN_BAR_SCROLLED_SIZE) + indicateSize - barSize;
			}
			self.barPos = Math.round(barPos);
			return {
				size: Math.round(barSize),
				pos: self.barPos
			};
		},
		scrollTo: function scrollTo(pos, duration, easing, callback) {
			var self = this;
			self.show();
			var translateZ = self.xscroll.userConfig.gpuAcceleration ? " translateZ(0) " : "";
			var config = {
				css: {
					transform: self.isY ? "translateY(" + pos + "px)" + translateZ : "translateX(" + pos + "px)" + translateZ
				},
				duration: duration,
				easing: easing,
				useTransition: self.xscroll.userConfig.useTransition,
				end: callback
			};
			self.__timer = self.__timer || new Animate(self.indicate, config);
			//run
			self.__timer.stop();
			self.__timer.reset(config);
			self.__timer.run();
		},
		moveTo: function moveTo(pos) {
			var self = this;
			self.show();
			var translateZ = self.xscroll.userConfig.gpuAcceleration ? " translateZ(0) " : "";
			self.isY ? self.indicate.style[transform] = "translateY(" + pos + "px) " + translateZ : self.indicate.style[transform] = "translateX(" + pos + "px) " + translateZ;
			self.indicate.style[transition] = "";
		},
		_scrollHandler: function _scrollHandler(e) {
			var self = this;
			self._update(e[self.scrollTopOrLeft]);
			return self;
		},
		isBoundryOut: function isBoundryOut() {
			var self = this;
			return !self.isY ? self.xscroll.isBoundryOutLeft() || self.xscroll.isBoundryOutRight() : self.xscroll.isBoundryOutTop() || self.xscroll.isBoundryOutBottom();
		},
		_scrollEndHandler: function _scrollEndHandler(e) {
			var self = this;
			if (!self.isBoundryOut()) {
				self._update(e[self.scrollTopOrLeft]);
				self.hide();
			}
			return self;
		},
		_bindEvt: function _bindEvt() {
			var self = this;
			if (self.__isEvtBind) return;
			self.__isEvtBind = true;
			self.xscroll.on("scroll", self._scrollHandler, self);
			self.xscroll.on("scrollend", self._scrollEndHandler, self);
		},
		reset: function reset() {
			var self = this;
			self.pos = 0;
			self._update();
		},
		hide: function hide(duration, easing, delay) {
			var self = this;
			var duration = duration >= 0 ? duration : 300;
			var easing = easing || "ease-out";
			var delay = delay >= 0 ? delay : 100;
			self.scrollbar.style.opacity = 0;
			self.scrollbar.style[transition] = ["opacity ", duration, "ms ", " ease-out ", delay, "ms"].join("");
		},
		show: function show() {
			var self = this;
			self.scrollbar.style.opacity = 1;
			self.scrollbar.style[transition] = "";
		}
	});

	if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
		module.exports = ScrollBar;
	}
	/** ignored by jsdoc **/
	else {
			return ScrollBar;
		}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
  "use strict";

  var Util = __webpack_require__(2);
  var Base = __webpack_require__(3);
  //transform
  var transform = Util.prefixStyle("transform");
  // default render function for position:sticky elements
  var defaultStickyRenderFunc = function defaultStickyRenderFunc(e) {
    var stickyElement = e.stickyElement;
    var curStickyElement = e.curStickyElement;
    var xscroll = e.xscroll;
    var _ = e._;
    var infinite = xscroll.getPlugin("infinite");
    if (infinite) {
      infinite.userConfig.renderHook.call(self, stickyElement, curStickyElement);
      stickyElement.setAttribute("xs-guid", curStickyElement.guid);
      Util.addClass(stickyElement, curStickyElement.className);
      for (var attrName in curStickyElement.style) {
        if (attrName != "display" && attrName != "position") {
          //copy styles
          stickyElement.style[attrName] = attrName == _.height ? curStickyElement.style[attrName] + 'px' : curStickyElement.style[attrName];
        }
      }
    } else {
      var style = curStickyElement.getAttribute("style");
      stickyElement.innerHTML = curStickyElement.innerHTML;
      stickyElement.className = curStickyElement.className;
      style && stickyElement.setAttribute("style", style);
    }
  };

  var Sticky = function Sticky(cfg) {
    Sticky.superclass.constructor.call(this, cfg);
    this.userConfig = Util.mix({
      stickyRenderTo: undefined,
      forceSticky: true,
      prefix: "xs-sticky-container",
      stickyRenderFunc: defaultStickyRenderFunc,
      zoomType: "y"
    }, cfg);
    this.init();
  };

  Util.extend(Sticky, Base, {
    init: function init() {
      var self = this,
          userConfig = self.userConfig,
          xscroll = self.xscroll = userConfig.xscroll;
      var isY = self.isY = !!(userConfig.zoomType == "y");
      self._ = {
        top: self.isY ? "top" : "left",
        left: self.isY ? "left" : "bottom",
        right: self.isY ? "right" : "top",
        height: self.isY ? "height" : "width",
        width: self.isY ? "width" : "height"
      };
      self.stickyRenderTo = Util.getNode(userConfig.stickyRenderTo);
      self._handlers = [];
      return self;
    },
    getStickiesPos: function getStickiesPos() {
      var self = this;
      var xscroll = self.xscroll;
      var isInfinite = self.isInfinite;
      var isY = self.isY;
      var _ = self._;
      var stickiesPos = [];
      var getPos = function getPos(sticky) {
        var pos = {};
        if (isInfinite) {
          pos[_.top] = isY ? sticky._top : sticky._left;
          pos[_.height] = isY ? sticky._height : sticky._width;
        } else {
          pos[_.top] = self.isY ? Util.getOffsetTop(sticky) : Util.getOffsetLeft(sticky);
          pos[_.height] = self.isY ? sticky.offsetHeight : sticky.offsetWidth;
        }
        return pos;
      };
      for (var i = 0; i < self.stickiesNum; i++) {
        var pos = getPos(self.stickyElements[i]);
        self._handlers[i] = self._handlers[i] || self.createStickyEl();
        pos.el = self._handlers[i];
        pos.isRender = false;
        stickiesPos.push(pos);
      }
      return stickiesPos;
    },
    getStickyElements: function getStickyElements() {
      var self = this;
      var xscroll = self.xscroll;
      var userConfig = self.userConfig;
      var isInfinite = self.isInfinite;
      var infinite = xscroll.getPlugin("infinite");
      if (infinite) {
        var stickyElements = [],
            serializedData = infinite.__serializedData;
        for (var i in serializedData) {
          var rowData = serializedData[i];
          if (rowData && rowData.style && "sticky" == rowData.style.position) {
            stickyElements.push(rowData);
          }
        }
        return stickyElements;
      } else {
        return Util.getNodes(xscroll.userConfig.stickyElements, xscroll.content);
      }
    },
    render: function render(force) {
      var self = this;
      var userConfig = self.userConfig;
      var xscroll = self.xscroll;
      self.isInfinite = !!xscroll.getPlugin("infinite");
      var _ = self._;
      self.stickyElements = self.getStickyElements();
      self.stickiesNum = self.stickyElements && self.stickyElements.length;
      if (!self.stickiesNum) return;
      if (!self.stickyRenderTo) {
        self.stickyRenderTo = document.createElement('div');
        xscroll.renderTo.appendChild(self.stickyRenderTo);
      }
      self.stickiesPos = self.getStickiesPos();
      var stickyRenderTo = self.stickyRenderTo;
      stickyRenderTo.style[_.top] = 0;
      stickyRenderTo.style[_.left] = 0;
      stickyRenderTo.style[_.right] = 0;
      stickyRenderTo.style.position = xscroll.userConfig.useOriginScroll ? "fixed" : "absolute";
      Util.addClass(self.stickyRenderTo, userConfig.prefix);
      self.stickyHandler(force);
      self._bindEvt();
    },
    createStickyEl: function createStickyEl() {
      var self = this;
      var el = document.createElement('div');
      el.style.display = "none";
      Util.addClass(el, "xs-sticky-handler");
      self.stickyRenderTo.appendChild(el);
      return el;
    },
    _bindEvt: function _bindEvt() {
      var self = this,
          xscroll = self.xscroll;
      xscroll.on("scroll", self.stickyHandler, self);
    },
    stickyHandler: function stickyHandler(force) {
      var self = this;
      var xscroll = self.xscroll;
      var userConfig = self.userConfig;
      var scrollTop = self.isY ? xscroll.getScrollTop() : xscroll.getScrollLeft();
      var stickiesPos = self.stickiesPos;
      var _ = self._;
      var indexes = [];
      for (var i = 0, l = stickiesPos.length; i < l; i++) {
        var top = stickiesPos[i][_.top];
        if (scrollTop > top) {
          indexes.push(i);
        }
      }
      if (!indexes.length) {
        if (self.stickyElement) {
          self.stickyElement.style.display = "none";
        }
        self.curStickyIndex = undefined;
        return;
      }

      var curStickyIndex = Math.max.apply(null, indexes);
      if (self.curStickyIndex != curStickyIndex || force) {
        var prevStickyIndex = self.curStickyIndex;
        self.curStickyIndex = curStickyIndex;
        self.curStickyElement = self.stickyElements[curStickyIndex];
        self.curStickyPos = stickiesPos[curStickyIndex];
        self.stickyElement = self.curStickyPos.el;
        for (var i = 0, l = stickiesPos.length; i < l; i++) {
          stickiesPos[i].el.style.display = "none";
        }
        var eventsObj = {
          stickyElement: self.stickyElement,
          curStickyIndex: self.curStickyIndex,
          prevStickyIndex: prevStickyIndex,
          curStickyPos: self.curStickyPos,
          isRender: self.curStickyPos.isRender
        };
        xscroll.trigger("beforestickychange", eventsObj);
        self._stickyRenderFunc(self);
        xscroll.trigger("stickychange", eventsObj);
      }

      var trans = 0;
      if (self.stickiesPos[self.curStickyIndex + 1]) {
        var cur = self.stickiesPos[self.curStickyIndex];
        var next = self.stickiesPos[self.curStickyIndex + 1];
        if (scrollTop + cur[_.height] > next[_.top] && scrollTop + cur[_.height] < next[_.top] + cur[_.height]) {
          trans = cur[_.height] + scrollTop - next[_.top];
        } else {
          trans = 0;
        }
      }
      self.stickyElement.style[transform] = self.isY ? "translateY(-" + trans + "px) translateZ(0)" : "translateX(-" + trans + "px) translateZ(0)";
    },
    _stickyRenderFunc: function _stickyRenderFunc(e) {
      var self = this;
      var _ = self._;
      var stickyRenderFunc = self.userConfig.stickyRenderFunc;
      var el = self.curStickyPos.el;
      if (!self.curStickyPos.isRender) {
        el.style[_.left] = 0;
        el.style[_.right] = 0;
        stickyRenderFunc && stickyRenderFunc.call(self, e);
      }
      el.style.display = "block";
      self.curStickyPos.isRender = true;
    },
    destroy: function destroy() {
      var self = this;
      self.stickyElements = undefined;
      self.stickiesNum = undefined;
      self.stickiesPos = undefined;
      Util.remove(self.stickyElement);
      self.stickyElement = undefined;
    }
  });

  if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    module.exports = Sticky;
  }
  /** ignored by jsdoc **/
  else {
      return Sticky;
    }
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
  "use strict";

  var Util = __webpack_require__(2);
  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  var _once = function _once(func) {
    var ran = false,
        memo;
    return function () {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  /**
   * @discription events
   * @mixin
   */
  var Events = {
    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function on(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({
        callback: callback,
        context: context,
        ctx: context || this
      });
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function once(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _once(function () {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function off(name, callback, context) {
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;

      // Remove all callbacks for all events.
      if (!name && !callback && !context) {
        this._events = void 0;
        return this;
      }

      var names = name ? [name] : Object.keys(this._events);
      for (var i = 0, length = names.length; i < length; i++) {
        name = names[i];

        // Bail out if there are no events stored.
        var events = this._events[name];
        if (!events) continue;

        // Remove all callbacks for this event.
        if (!callback && !context) {
          delete this._events[name];
          continue;
        }

        // Find any remaining events.
        var remaining = [];
        for (var j = 0, k = events.length; j < k; j++) {
          var event = events[j];
          if (callback && callback !== event.callback && callback !== event.callback._callback || context && context !== event.context) {
            remaining.push(event);
          }
        }

        // Replace events if there are any remaining.  Otherwise, clean up.
        if (remaining.length) {
          this._events[name] = remaining;
        } else {
          delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function trigger(name) {
      if (!this._events) return this;
      var args = Array.prototype.slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Inversion-of-control versions of `on` and `once`. Tell *this* object to
    // listen to an event in another object ... keeping track of what it's
    // listening to.
    listenTo: function listenTo(obj, name, callback) {
      var listeningTo = this._listeningTo || (this._listeningTo = {});
      var id = obj._listenId || (obj._listenId = Util.guid('l'));
      listeningTo[id] = obj;
      if (!callback && (typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') callback = this;
      obj.on(name, callback, this);
      return this;
    },

    listenToOnce: function listenToOnce(obj, name, callback) {
      if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
        for (var event in name) {
          this.listenToOnce(obj, event, name[event]);
        }return this;
      }
      var cb = _once(function () {
        this.stopListening(obj, name, cb);
        callback.apply(this, arguments);
      });
      cb._callback = callback;
      return this.listenTo(obj, name, cb);
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function stopListening(obj, name, callback) {
      var listeningTo = this._listeningTo;
      if (!listeningTo) return this;
      var remove = !name && !callback;
      if (!callback && (typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') callback = this;
      if (obj) (listeningTo = {})[obj._listenId] = obj;
      for (var id in listeningTo) {
        obj = listeningTo[id];
        obj.off(name, callback, this);
        if (remove || Util.isEmpty(obj._events)) delete this._listeningTo[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function eventsApi(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, length = names.length; i < length; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  var triggerEvents = function triggerEvents(events, args) {
    var ev,
        i = -1,
        l = events.length,
        a1 = args[0],
        a2 = args[1],
        a3 = args[2];
    switch (args.length) {
      case 0:
        while (++i < l) {
          (ev = events[i]).callback.call(ev.ctx);
        }return;
      case 1:
        while (++i < l) {
          (ev = events[i]).callback.call(ev.ctx, a1);
        }return;
      case 2:
        while (++i < l) {
          (ev = events[i]).callback.call(ev.ctx, a1, a2);
        }return;
      case 3:
        while (++i < l) {
          (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
        }return;
      default:
        while (++i < l) {
          (ev = events[i]).callback.apply(ev.ctx, args);
        }return;
    }
  };

  // Aliases for backwards compatibility.
  Events.bind = Events.on;
  Events.unbind = Events.off;

  if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    module.exports = Events;
  }
  /** ignored by jsdoc **/
  else {
      return Events;
    }
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
    "use strict";

    var Util = __webpack_require__(2),
        Base = __webpack_require__(3),
        Core = __webpack_require__(26),
        Animate = __webpack_require__(6);

    var transformOrigin = Util.prefixStyle("transformOrigin");
    /** 
     * @constructor
     * @param {object} cfg config for scroll
     * @extends XScroll
     * @example
     * var xscroll = new OriginScroll({
     *    renderTo:"#scroll"
     * });
     * xscroll.render();
     */
    function OriginScroll(cfg) {
        OriginScroll.superclass.constructor.call(this, cfg);
    }

    Util.extend(OriginScroll, Core, {
        init: function init() {
            var self = this;
            OriginScroll.superclass.init.call(this);
            self.resetSize();
        },
        /**
         * get scroll top value
         * @memberof OriginScroll
         * @return {number} scrollTop
         */
        getScrollTop: function getScrollTop() {
            return this.renderTo.scrollTop;
        },
        /**
         * get scroll left value
         * @memberof OriginScroll
         * @return {number} scrollLeft
         */
        getScrollLeft: function getScrollLeft() {
            return this.renderTo.scrollLeft;
        },
        /**
         * vertical scroll absolute to the destination
         * @memberof SimuScroll
         * @param scrollTop {number} scrollTop
         * @param duration {number} duration for animte
         * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
         **/
        scrollTop: function scrollTop(y, duration, easing, callback) {
            var self = this;
            var y = Math.round(y);
            if (self.userConfig.lockY) return;
            var duration = duration || 0;
            var easing = easing || "quadratic";
            var config = {
                css: {
                    scrollTop: y
                },
                duration: duration,
                easing: easing,
                run: function run(e) {
                    //trigger scroll event
                    self.trigger("scroll", {
                        scrollTop: self.getScrollTop(),
                        scrollLeft: self.getScrollLeft()
                    });
                },
                useTransition: false, //scrollTop 
                end: callback
            };
            self.__timers.y = self.__timers.y || new Animate(self.renderTo, config);
            //run
            self.__timers.y.stop();
            self.__timers.y.reset(config);
            self.__timers.y.run();
        },
        /**
         * horizontal scroll absolute to the destination
         * @memberof SimuScroll
         * @param scrollLeft {number} scrollLeft
         * @param duration {number} duration for animte
         * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
         **/
        scrollLeft: function scrollLeft(x, duration, easing, callback) {
            var self = this;
            var x = Math.round(x);
            if (self.userConfig.lockX) return;
            var duration = duration || 0;
            var easing = easing || "quadratic";
            var config = {
                css: {
                    scrollLeft: x
                },
                duration: duration,
                easing: easing,
                run: function run(e) {
                    //trigger scroll event
                    self.trigger("scroll", {
                        scrollTop: self.getScrollTop(),
                        scrollLeft: self.getScrollLeft()
                    });
                },
                useTransition: false, //scrollTop 
                end: callback
            };
            self.__timers.x = self.__timers.x || new Animate(self.renderTo, config);
            //run
            self.__timers.x.stop();
            self.__timers.x.reset(config);
            self.__timers.x.run();
        },
        _bindEvt: function _bindEvt() {
            OriginScroll.superclass._bindEvt.call(this);
            var self = this;
            if (self.__isEvtBind) return;
            self.__isEvtBind = true;
            self.renderTo.addEventListener("scroll", function (e) {
                self.trigger("scroll", {
                    type: "scroll",
                    scrollTop: self.getScrollTop(),
                    scrollLeft: self.getScrollLeft()
                });
            }, false);
        }
    });

    if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
        module.exports = OriginScroll;
    }
    /** ignored by jsdoc **/
    else {
            return OriginScroll;
        }
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	"use strict";

	var Util = __webpack_require__(2);
	var Base = __webpack_require__(3);
	var clsPrefix;
	var containerCls;
	var content = "Pull Down To Refresh";
	var loadingContent = "Loading...";
	/**
  * A pulldown to refresh plugin for xscroll.
  * @constructor
  * @param {object} cfg
  * @param {number} cfg.height
  * @param {string} cfg.content default html for pulldown
  * @param {string} cfg.downContent html for pulldown when scrollTop is smaller than cfg.height
  * @param {string} cfg.upContent html for pulldown when scrollTop is larger than cfg.height
  * @param {string} cfg.loadingContent html for pulldown when released
  * @param {string} cfg.clsPrefix  class prefix which default value is "xs-plugin-pulldown-"
  * @extends {Base}
  */
	var PullDown = function PullDown(cfg) {
		PullDown.superclass.constructor.call(this, cfg);
		this.userConfig = Util.mix({
			content: content,
			height: 60,
			autoRefresh: true,
			downContent: "Pull Down To Refresh",
			upContent: "Release To Refresh",
			loadingContent: loadingContent,
			clsPrefix: "xs-plugin-pulldown-"
		}, cfg);
	};
	Util.extend(PullDown, Base, {
		/**
   * a pluginId
   * @memberOf PullDown
   * @type {string}
   */
		pluginId: "pulldown",
		/**
   * plugin initializer
   * @memberOf PullDown
   * @override Base
   * @return {PullDown}
   */
		pluginInitializer: function pluginInitializer(xscroll) {
			var self = this;
			self.xscroll = xscroll.render();
			clsPrefix = self.userConfig.clsPrefix;
			self.render();
			return self;
		},
		/**
   * detroy the plugin
   * @memberOf PullDown
   * @override Base
   * @return {PullDown}
   */
		pluginDestructor: function pluginDestructor() {
			var self = this;
			Util.remove(self.pulldown);
			self.xscroll.off("panstart", self._panStartHandler, self);
			self.xscroll.off("pan", self._panHandler, self);
			self.xscroll.off("panend", self._panEndHandler, self);
			self.__isRender = false;
			self._evtBinded = false;
		},
		/**
   * render pulldown plugin
   * @memberOf PullDown
   * @return {PullDown}
   */
		render: function render() {
			var self = this;
			if (self.__isRender) return;
			self.__isRender = true;

			if (!self.userConfig.container) {
				var containerCls = clsPrefix + "container";
				var height = self.userConfig.height || 60;
				var pulldown = self.pulldown = document.createElement("div");
				pulldown.className = containerCls;
				pulldown.style.position = "absolute";
				pulldown.style.width = "100%";
				pulldown.style.height = height + "px";
				pulldown.style.lineHeight = height + "px";
				pulldown.style.top = -height + "px";
				pulldown.style.textAlign = "center";
				self.xscroll.container.appendChild(pulldown);
				self.status = 'up';
				Util.addClass(pulldown, clsPrefix + self.status);
				pulldown.innerHTML = self.userConfig[self.status + "Content"] || self.userConfig.content;
			} else {
				// has customed container
				self.pulldown = self.userConfig.container;
			}

			self._bindEvt();
			return self;
		},
		_bindEvt: function _bindEvt() {
			var self = this;
			if (self._evtBinded) return;
			self._evtBinded = true;
			var pulldown = self.pulldown;
			var xscroll = self.xscroll;
			xscroll.on("pan", self._panHandler, self);
			xscroll.on("panstart", self._panStartHandler, self);
			xscroll.on("panend", self._panEndHandler, self);
		},
		_changeStatus: function _changeStatus(status) {
			var prevVal = this.status;
			this.status = status;
			if (!this.userConfig.container) {
				Util.removeClass(this.pulldown, clsPrefix + prevVal);
				Util.addClass(this.pulldown, clsPrefix + status);
				if (this.userConfig[status + "Content"]) {
					this.pulldown.innerHTML = this.userConfig[status + "Content"];
				}
			}
			if (prevVal != status) {
				this.trigger("statuschange", {
					prevVal: prevVal,
					newVal: status
				});
				if (status == "loading") {
					this.trigger("loading");
				}
			}
		},
		/**
   * reset the pulldown plugin
   * @memberOf PullDown
   * @param {function} callback
   * @return {PullDown}
   */
		reset: function reset(callback) {
			this.xscroll.boundry.resetTop();
			this.xscroll.boundryCheckY(callback);
			this._expanded = false;
			return this;
		},
		_panStartHandler: function _panStartHandler(e) {
			clearTimeout(this.loadingItv);
		},
		_panHandler: function _panHandler(e) {
			var self = this;
			var scrollTop = self.xscroll.getScrollTop();
			if (scrollTop > 0) return;
			self._changeStatus(Math.abs(scrollTop) < self.userConfig.height ? "down" : "up");
		},
		_panEndHandler: function _panEndHandler(e) {
			var self = this;
			var xscroll = self.xscroll;
			var height = self.userConfig.height || 60;
			var scrollTop = xscroll.getScrollTop();
			if (scrollTop < -height) {
				//prevent default bounce
				e.preventDefault();
				xscroll.boundry.resetTop();
				self._changeStatus("loading");
				xscroll.boundry.expandTop(height);
				xscroll.boundryCheckY(function () {});
				if (self.userConfig.autoRefresh) {
					clearTimeout(self.loadingItv);
					self.loadingItv = setTimeout(function () {
						xscroll.boundry.resetTop();
						xscroll.boundryCheckY(function () {
							window.location.reload();
						});
					}, 800);
				}
			}
		}
	});

	if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
		module.exports = PullDown;
	}
	/** ignored by jsdoc **/
	else if (window.XScroll && window.XScroll.Plugins) {
			return XScroll.Plugins.PullDown = PullDown;
		}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	"use strict";

	var Util = __webpack_require__(2);
	var Base = __webpack_require__(3);
	var clsPrefix;
	var containerCls;
	var loadingContent = "Loading...";
	var upContent = "Pull Up To Refresh";
	var downContent = "Release To Refresh";
	var PULL_UP_HEIGHT = 60;
	var HEIGHT = 40;
	/**
  * A pullup to load plugin for xscroll.
  * @constructor
  * @param {object} cfg
  * @param {number} cfg.height
  * @param {string} cfg.downContent
  * @param {string} cfg.upContent
  * @param {string} cfg.loadingContent
  * @param {string} cfg.clsPrefix  class prefix which default value is "xs-plugin-pullup-"
  * @param {number} cfg.bufferHeight preload data before scrolling to the bottom of the boundry
  * @extends {Base}
  */
	var PullUp = function PullUp(cfg) {
		PullUp.superclass.constructor.call(this);
		this.userConfig = Util.mix({
			upContent: upContent,
			downContent: downContent,
			pullUpHeight: PULL_UP_HEIGHT,
			height: HEIGHT,
			loadingContent: loadingContent,
			bufferHeight: 0,
			clsPrefix: "xs-plugin-pullup-"
		}, cfg);
	};
	Util.extend(PullUp, Base, {
		/**
   * a pluginId
   * @memberOf PullUp
   * @type {string}
   */
		pluginId: "pullup",
		/**
   * plugin initializer
   * @memberOf PullUp
   * @override Base
   * @return {PullUp}
   */
		pluginInitializer: function pluginInitializer(xscroll) {
			var self = this;
			self.xscroll = xscroll.render();
			clsPrefix = self.userConfig.clsPrefix;
			self.render();
			return self;
		},
		/**
   * detroy the plugin
   * @memberOf PullUp
   * @override Base
   * @return {PullUp}
   */
		pluginDestructor: function pluginDestructor() {
			var self = this;
			Util.remove(self.pullup);
			self.xscroll.off("scrollend", self._scrollEndHandler, self);
			self.xscroll.off("scroll", self._scrollHandler, self);
			self.xscroll.off("pan", self._panHandler, self);
			self.xscroll.boundry.resetBottom();
			self.__isRender = false;
			self._evtBinded = false;
		},
		/**
   * disable the plugin
   * @memberOf PullUp
   * @override Base
   * @return {PullUp}
   */
		pluginDisable: function pluginDisable() {
			var self = this;
			self.userConfig.container || Util.remove(self.pullup);
			self.xscroll.off("scrollend", self._scrollEndHandler, self);
			self.xscroll.off("scroll", self._scrollHandler, self);
			self.xscroll.off("pan", self._panHandler, self);
			self.xscroll.boundry.resetBottom();
			self.__isRender = false;
			self._evtBinded = false;
		},
		/**
   * render pullup plugin
   * @memberOf PullUp
   * @return {PullUp}
   */
		render: function render() {
			var self = this;
			if (self.__isRender) return;
			self.__isRender = true;
			if (!self.userConfig.container) {
				var containerCls = clsPrefix + "container";
				var height = self.userConfig.height;
				var pullup = self.pullup = document.createElement("div");
				pullup.className = containerCls;
				pullup.style.position = "absolute";
				pullup.style.width = "100%";
				pullup.style.height = height + "px";
				pullup.style.bottom = -height + "px";
				pullup.style.textAlign = "center";
				self.xscroll.container.appendChild(pullup);
				Util.addClass(pullup, clsPrefix + self.status);
				pullup.innerHTML = self.userConfig[self.status + "Content"] || self.userConfig.content;
			} else {
				self.pullup = self.userConfig.container;
			}
			self.xscroll.boundry.expandBottom(self.userConfig.height);
			self.status = 'up';
			self._bindEvt();
			return self;
		},
		_bindEvt: function _bindEvt() {
			var self = this;
			if (self._evtBinded) return;
			self._evtBinded = true;
			var pullup = self.pullup;
			var xscroll = self.xscroll;
			xscroll.on("pan", self._panHandler, self);
			//load width a buffer
			if (self.userConfig.bufferHeight > 0) {
				xscroll.on("scroll", self._scrollHandler, self);
			}
			//bounce bottom
			xscroll.on("scrollend", self._scrollEndHandler, self);
			return self;
		},
		_scrollEndHandler: function _scrollEndHandler(e) {
			var self = this,
			    xscroll = self.xscroll,
			    scrollTop = xscroll.getScrollTop();
			if (scrollTop == xscroll.containerHeight - xscroll.height + self.userConfig.height) {
				self._changeStatus("loading");
			}
			return self;
		},
		_scrollHandler: function _scrollHandler(e) {
			var self = this,
			    xscroll = self.xscroll;
			if (!self.isLoading && Math.abs(e.scrollTop) + xscroll.height + self.userConfig.height + self.userConfig.bufferHeight >= xscroll.containerHeight + xscroll.boundry._xtop + xscroll.boundry._xbottom) {
				self._changeStatus("loading");
			}
			return self;
		},
		_panHandler: function _panHandler(e) {
			var self = this;
			var xscroll = self.xscroll;
			var offsetTop = -xscroll.getScrollTop();
			if (offsetTop < xscroll.height - xscroll.containerHeight - self.userConfig.pullUpHeight) {
				self._changeStatus("down");
			} else {
				self._changeStatus("up");
			}
			return self;
		},
		_changeStatus: function _changeStatus(status) {
			if (status != "loading" && this.isLoading) return;
			var prevVal = this.status;
			this.status = status;
			if (!this.userConfig.container) {
				Util.removeClass(this.pullup, clsPrefix + prevVal);
				Util.addClass(this.pullup, clsPrefix + status);
				this.pullup.innerHTML = this.userConfig[status + "Content"];
			}
			if (prevVal != status) {
				this.trigger("statuschange", {
					prevVal: prevVal,
					newVal: status
				});
				if (status == "loading") {
					this.isLoading = true;
					this.trigger("loading");
				}
			}
			return this;
		},
		/**
   * notify pullup plugin to complete state after a remote data request
   * @memberOf PullUp
   * @return {PullUp}
   */
		complete: function complete() {
			var self = this;
			var xscroll = self.xscroll;
			self.isLoading = false;
			self._changeStatus("up");
			return self;
		},
		stop: function stop() {
			var xscroll = this.xscroll;
			this.isLoading = false;
			this._changeStatus("stop");
			this.pluginDisable();
			return this;
		},
		restart: function restart() {
			var xscroll = this.xscroll;
			this.isLoading = false;
			this._changeStatus("default");
			this.render();
			return this;
		}
	});

	if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
		module.exports = PullUp;
	}
	/** ignored by jsdoc **/
	else if (window.XScroll && window.XScroll.Plugins) {
			return XScroll.Plugins.PullUp = PullUp;
		}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
  "use strict";

  var Util = __webpack_require__(2),
      Base = __webpack_require__(3),
      Core = __webpack_require__(26),
      Animate = __webpack_require__(6),
      Hammer = __webpack_require__(13),
      ScrollBar = __webpack_require__(73),
      Controller = __webpack_require__(71);
  //reduced boundry pan distance
  var PAN_RATE = 1 - 0.618;
  //constant for scrolling acceleration
  var SCROLL_ACCELERATION = 0.0005;
  //constant for outside of boundry acceleration
  var BOUNDRY_ACCELERATION = 0.03;
  //transform-origin
  var transformOrigin = Util.prefixStyle("transformOrigin");
  //transform
  var transform = Util.prefixStyle("transform");
  /** 
   * @constructor
   * @param {object} cfg config for scroll
   * @param {number} cfg.SCROLL_ACCELERATION  acceleration for scroll, min value make the scrolling smoothly
   * @param {number} cfg.BOUNDRY_CHECK_DURATION duration for boundry bounce
   * @param {number} cfg.BOUNDRY_CHECK_EASING easing for boundry bounce
   * @param {number} cfg.BOUNDRY_CHECK_ACCELERATION acceleration for boundry bounce
   * @param {boolean} cfg.lockX just like overflow-x:hidden
   * @param {boolean} cfg.lockY just like overflow-y:hidden
   * @param {boolean} cfg.scrollbarX config if the scrollbar-x is visible
   * @param {boolean} cfg.scrollbarY config if the scrollbar-y is visible
   * @param {boolean} cfg.useTransition config if use css3 transition or raf for scroll animation
   * @param {boolean} cfg.bounce config if use has the bounce effect when scrolling outside of the boundry
   * @param {boolean} cfg.boundryCheck config if scrolling inside of the boundry
   * @param {boolean} cfg.preventDefault prevent touchstart
   * @param {boolean} cfg.preventTouchMove prevent touchmove
   * @param {string|HTMLElement}  cfg.container config for scroller's container which default value is ".xs-container"
   * @param {string|HTMLElement}  cfg.content config for scroller's content which default value is ".xs-content"
   * @param {object}  cfg.indicatorInsets  config scrollbars position {top: number, left: number, bottom: number, right: number}
   * @param {string}  cfg.stickyElements config for sticky-positioned elements
   * @param {string}  cfg.fixedElements config for fixed-positioned elements
   * @param {string}  cfg.touchAction config for touchAction of the scroller
   * @extends XScroll
   * @example
   * var xscroll = new SimuScroll({
   *    renderTo:"#scroll",
   *    lockX:false,
   *    scrollbarX:true
   * });
   * xscroll.render();
   */
  function SimuScroll(cfg) {
    SimuScroll.superclass.constructor.call(this, cfg);
  }

  Util.extend(SimuScroll, Core, {
    /** 
     * @memberof SimuScroll
     * @override
     */
    init: function init() {
      var self = this;
      var defaultCfg = {
        preventDefault: true,
        preventTouchMove: true
      };
      SimuScroll.superclass.init.call(this);
      self.userConfig = Util.mix(defaultCfg, self.userConfig);
      self.SCROLL_ACCELERATION = self.userConfig.SCROLL_ACCELERATION || SCROLL_ACCELERATION;
      self.BOUNDRY_ACCELERATION = self.userConfig.BOUNDRY_ACCELERATION || BOUNDRY_ACCELERATION;
      self._initContainer();
      self.resetSize();
      //set overflow behaviors
      self._setOverflowBehavior();
      self.defaltConfig = {
        lockY: self.userConfig.lockY,
        lockX: self.userConfig.lockX
      };
      return self;
    },
    destroy: function destroy() {
      var self = this;
      SimuScroll.superclass.destroy.call(this);
      self.renderTo.style.overflow = "";
      self.renderTo.style.touchAction = "";
      self.container.style.transform = "";
      self.container.style.transformOrigin = "";
      self.content.style.transform = "";
      self.content.style.transformOrigin = "";
      self.off("touchstart mousedown", self._ontouchstart);
      self.off("touchmove", self._ontouchmove);
      window.removeEventListener("resize", self.resizeHandler, self);
      self.destroyScrollBars();
    },
    /**
     * set overflow behavior
     * @return {boolean} [description]
     */
    _setOverflowBehavior: function _setOverflowBehavior() {
      var self = this;
      var renderTo = self.renderTo;
      var computeStyle = getComputedStyle(renderTo);
      self.userConfig.lockX = undefined === self.userConfig.lockX ? computeStyle['overflow-x'] == "hidden" || self.width == self.containerWidth ? true : false : self.userConfig.lockX;
      self.userConfig.lockY = undefined === self.userConfig.lockY ? computeStyle['overflow-y'] == "hidden" || self.height == self.containerHeight ? true : false : self.userConfig.lockY;
      self.userConfig.scrollbarX = undefined === self.userConfig.scrollbarX ? self.userConfig.lockX ? false : true : self.userConfig.scrollbarX;
      self.userConfig.scrollbarY = undefined === self.userConfig.scrollbarY ? self.userConfig.lockY ? false : true : self.userConfig.scrollbarY;
      return self;
    },
    /**
     * reset lockX or lockY config to the default value
     */
    _resetLockConfig: function _resetLockConfig() {
      var self = this;
      self.userConfig.lockX = self.defaltConfig.lockX;
      self.userConfig.lockY = self.defaltConfig.lockY;
      return self;
    },
    /**
     * init container
     * @override
     * @return {SimuScroll}
     */
    _initContainer: function _initContainer() {
      var self = this;
      SimuScroll.superclass._initContainer.call(self);
      if (self.__isContainerInited || !self.container || !self.content) return;
      self.container.style[transformOrigin] = "0 0";
      self.content.style[transformOrigin] = "0 0";
      self.translate(0, 0);
      self.__isContainerInited = true;
      return self;
    },
    /**
     * get scroll top value
     * @memberof SimuScroll
     * @return {number} scrollTop
     */
    getScrollTop: function getScrollTop() {
      var transY = window.getComputedStyle(this.container)[transform].match(/[-\d\.*\d*]+/g);
      return transY ? Math.round(transY[5]) === 0 ? 0 : -Math.round(transY[5]) : 0;
    },
    /**
     * get scroll left value
     * @memberof SimuScroll
     * @return {number} scrollLeft
     */
    getScrollLeft: function getScrollLeft() {
      var transX = window.getComputedStyle(this.content)[transform].match(/[-\d\.*\d*]+/g);
      return transX ? Math.round(transX[4]) === 0 ? 0 : -Math.round(transX[4]) : 0;
    },
    /**
     * horizontal scroll absolute to the destination
     * @memberof SimuScroll
     * @param scrollLeft {number} scrollLeft
     * @param duration {number} duration for animte
     * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
     **/
    scrollLeft: function scrollLeft(x, duration, easing, callback) {
      if (this.userConfig.lockX) return;
      var translateZ = this.userConfig.gpuAcceleration ? " translateZ(0) " : "";
      this.x = undefined === x || isNaN(x) || 0 === x ? 0 : -Math.round(x);
      this._animate("x", "translateX(" + this.x + "px) scale(" + this.scale + ")" + translateZ, duration, easing, callback);
      return this;
    },
    /**
     * vertical scroll absolute to the destination
     * @memberof SimuScroll
     * @param scrollTop {number} scrollTop
     * @param duration {number} duration for animte
     * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
     **/
    scrollTop: function scrollTop(y, duration, easing, callback) {
      if (this.userConfig.lockY) return;
      var translateZ = this.userConfig.gpuAcceleration ? " translateZ(0) " : "";
      this.y = undefined === y || isNaN(y) || 0 === y ? 0 : -Math.round(y);
      this._animate("y", "translateY(" + this.y + "px) " + translateZ, duration, easing, callback);
      return this;
    },
    /**
     * translate the scroller to a new destination includes x , y , scale
     * @memberof SimuScroll
     * @param x {number} x
     * @param y {number} y
     * @param scale {number} scale
     **/
    translate: function translate(x, y, scale) {
      var translateZ = this.userConfig.gpuAcceleration ? " translateZ(0) " : "";
      this.x = x || this.x || 0;
      this.y = y || this.y || 0;
      this.scale = scale || this.scale || 1;
      this.content.style[transform] = "translate(" + this.x + "px,0px) scale(" + this.scale + ") " + translateZ;
      this.container.style[transform] = "translate(0px," + this.y + "px) " + translateZ;
      return this;
    },
    _animate: function _animate(type, transform, duration, easing, callback) {
      var self = this;
      var duration = duration || 0;
      var easing = easing || "quadratic";
      var el = type == "y" ? self.container : self.content;
      var config = {
        css: {
          transform: transform
        },
        duration: duration,
        easing: easing,
        run: function run(e) {
          /**
           * @event {@link SimuScroll#"scroll"}
           */
          self.trigger("scroll", {
            scrollTop: self.getScrollTop(),
            scrollLeft: self.getScrollLeft(),
            type: "scroll"
          });
        },
        useTransition: self.userConfig.useTransition,
        end: function end(e) {
          callback && callback();
          if ((self["_bounce" + type] === 0 || self["_bounce" + type] === undefined) && easing != "linear") {
            self['isScrolling' + type.toUpperCase()] = false;
            self['isRealScrolling' + type.toUpperCase()] = false;
            self.trigger("scrollend", {
              type: "scrollend",
              scrollTop: self.getScrollTop(),
              scrollLeft: self.getScrollLeft(),
              zoomType: type,
              duration: duration,
              easing: easing
            });
          }
        }
      };
      var timer = self.__timers[type] = self.__timers[type] || new Animate(el, config);
      timer.stop();
      timer.reset(config);
      timer.run();
      self.trigger("scrollanimate", {
        type: "scrollanimate",
        scrollTop: -self.y,
        scrollLeft: -self.x,
        duration: duration,
        easing: easing,
        zoomType: type
      });
      return this;
    },
    _ontap: function _ontap(e) {
      var self = this;
      self.boundryCheck();
      // self._unPreventHref(e);
      if (!self.isRealScrollingX && !self.isRealScrollingY) {}
      // self._triggerClick(e);

      // self._preventHref(e);
      self.isRealScrollingY = false;
      self.isRealScrollingY = false;
    },
    _bindEvt: function _bindEvt() {
      SimuScroll.superclass._bindEvt.call(this);
      var self = this;
      if (self.__isEvtBind) return;
      self.__isEvtBind = true;
      var pinch = new Hammer.Pinch();
      self.mc.add(pinch);
      self.on("touchstart mousedown", self._ontouchstart, self);
      self.on("touchmove", self._ontouchmove, self);
      self.on("tap", self._ontap, self);
      self.on("panstart", self._onpanstart, self);
      self.on("pan", self._onpan, self);
      self.on("panend", self._onpanend, self);
      self.resizeHandler = function (e) {
        setTimeout(function () {
          self.resetSize();
          self.boundryCheck(0);
          self.render();
        }, 100);
      };
      //window resize
      window.addEventListener("resize", self.resizeHandler, self);

      return this;
    },
    _ontouchstart: function _ontouchstart(e) {
      var self = this;
      if (!/(SELECT|INPUT|TEXTAREA)/i.test(e.target.tagName) && self.userConfig.preventDefault) {
        e.preventDefault();
      }
      self.stop();
    },
    _ontouchmove: function _ontouchmove(e) {
      this.userConfig.preventTouchMove && e.preventDefault();
    },
    _onpanstart: function _onpanstart(e) {
      this.userConfig.preventTouchMove && e.preventDefault();
      var self = this;
      var scrollLeft = self.getScrollLeft();
      var scrollTop = self.getScrollTop();
      self.stop();
      self.translate(-scrollLeft, -scrollTop);
      var threshold = self.mc.get("pan").options.threshold;
      self.thresholdY = e.direction == "8" ? threshold : e.direction == "16" ? -threshold : 0;
      self.thresholdX = e.direction == "2" ? threshold : e.direction == "4" ? -threshold : 0;
      return self;
    },
    _onpan: function _onpan(e) {
      this.userConfig.preventTouchMove && e.preventDefault();
      var self = this;
      var boundry = self.boundry;
      var userConfig = self.userConfig;
      var boundryCheck = userConfig.boundryCheck;
      var bounce = userConfig.bounce;
      var scrollTop = self.__topstart || (self.__topstart = -self.getScrollTop());
      var scrollLeft = self.__leftstart || (self.__leftstart = -self.getScrollLeft());
      var y = userConfig.lockY ? Number(scrollTop) : Number(scrollTop) + (e.deltaY + self.thresholdY);
      var x = userConfig.lockX ? Number(scrollLeft) : Number(scrollLeft) + (e.deltaX + self.thresholdX);
      var containerWidth = self.containerWidth;
      var containerHeight = self.containerHeight;
      if (boundryCheck) {
        //over top
        y = y > boundry.top ? bounce ? (y - boundry.top) * PAN_RATE + boundry.top : boundry.top : y;
        //over bottom
        y = y < boundry.bottom - containerHeight ? bounce ? y + (boundry.bottom - containerHeight - y) * PAN_RATE : boundry.bottom - containerHeight : y;
        //over left
        x = x > boundry.left ? bounce ? (x - boundry.left) * PAN_RATE + boundry.left : boundry.left : x;
        //over right
        x = x < boundry.right - containerWidth ? bounce ? x + (boundry.right - containerWidth - x) * PAN_RATE : boundry.right - containerWidth : x;
      }
      //move to x,y
      self.translate(x, y);
      //pan trigger the opposite direction
      self.directionX = e.type == 'panleft' ? 'right' : e.type == 'panright' ? 'left' : '';
      self.directionY = e.type == 'panup' ? 'down' : e.type == 'pandown' ? 'up' : '';
      self.trigger("scroll", {
        scrollTop: -y,
        scrollLeft: -x,
        triggerType: "pan",
        type: "scroll"
      });
      return self;
    },
    _onpanend: function _onpanend(e) {
      var self = this;
      var userConfig = self.userConfig;
      var transX = self.computeScroll("x", e.velocityX);
      var transY = self.computeScroll("y", e.velocityY);
      var scrollLeft = transX ? transX.pos : 0;
      var scrollTop = transY ? transY.pos : 0;
      var duration;
      if (transX && transY && transX.status == "inside" && transY.status == "inside" && transX.duration && transY.duration) {
        //ensure the same duration
        duration = Math.max(transX.duration, transY.duration);
      }
      transX && self.scrollLeft(scrollLeft, duration || transX.duration, transX.easing, function (e) {
        self.boundryCheckX();
      });
      transY && self.scrollTop(scrollTop, duration || transY.duration, transY.easing, function (e) {
        self.boundryCheckY();
      });
      //judge the direction
      self.directionX = e.velocityX < 0 ? "left" : "right";
      self.directionY = e.velocityY < 0 ? "up" : "down";
      //clear start
      self.__topstart = null;
      self.__leftstart = null;
      return self;
    },
    /**
     * judge the scroller is out of boundry horizontally and vertically
     * @memberof SimuScroll
     * @return {boolean} isBoundryOut
     **/
    isBoundryOut: function isBoundryOut() {
      return this.isBoundryOutLeft() || this.isBoundryOutRight() || this.isBoundryOutTop() || this.isBoundryOutBottom();
    },
    /**
     * judge if the scroller is outsideof left
     * @memberof SimuScroll
     * @return {boolean} isBoundryOut
     **/
    isBoundryOutLeft: function isBoundryOutLeft() {
      return this.getBoundryOutLeft() > 0 ? true : false;
    },
    /**
     * judge if the scroller is outsideof right
     * @memberof SimuScroll
     * @return {boolean} isBoundryOut
     **/
    isBoundryOutRight: function isBoundryOutRight() {
      return this.getBoundryOutRight() > 0 ? true : false;
    },
    /**
     * judge if the scroller is outsideof top
     * @memberof SimuScroll
     * @return {boolean} isBoundryOut
     **/
    isBoundryOutTop: function isBoundryOutTop() {
      return this.getBoundryOutTop() > 0 ? true : false;
    },
    /**
     * judge if the scroller is outsideof bottom
     * @memberof SimuScroll
     * @return {boolean} isBoundryOut
     **/
    isBoundryOutBottom: function isBoundryOutBottom() {
      return this.getBoundryOutBottom() > 0 ? true : false;
    },
    /**
     * get the offset value outsideof top
     * @memberof SimuScroll
     * @return {number} offset
     **/
    getBoundryOutTop: function getBoundryOutTop() {
      return -this.boundry.top - this.getScrollTop();
    },
    /**
     * get the offset value outsideof left
     * @memberof SimuScroll
     * @return {number} offset
     **/
    getBoundryOutLeft: function getBoundryOutLeft() {
      return -this.boundry.left - this.getScrollLeft();
    },
    /**
     * get the offset value outsideof bottom
     * @memberof SimuScroll
     * @return {number} offset
     **/
    getBoundryOutBottom: function getBoundryOutBottom() {
      return this.boundry.bottom - this.containerHeight + this.getScrollTop();
    },
    /**
     * get the offset value outsideof right
     * @memberof SimuScroll
     * @return {number} offset
     **/
    getBoundryOutRight: function getBoundryOutRight() {
      return this.boundry.right - this.containerWidth + this.getScrollLeft();
    },
    /**
     * compute scroll transition by zoomType and velocity
     * @memberof SimuScroll
     * @param {string} zoomType zoomType of scrolling
     * @param {number} velocity velocity after panend
     * @example
     * var info = xscroll.computeScroll("x",2);
     * // return {pos:90,easing:"easing",status:"inside",duration:500}
     * @return {Object}
     **/
    computeScroll: function computeScroll(type, v) {
      var self = this;
      var userConfig = self.userConfig;
      var boundry = self.boundry;
      var pos = type == "x" ? self.getScrollLeft() : self.getScrollTop();
      var boundryStart = type == "x" ? boundry.left : boundry.top;
      var boundryEnd = type == "x" ? boundry.right : boundry.bottom;
      var innerSize = type == "x" ? self.containerWidth : self.containerHeight;
      var maxSpeed = userConfig.maxSpeed || 2;
      var boundryCheck = userConfig.boundryCheck;
      var bounce = userConfig.bounce;
      var transition = {};
      var status = "inside";
      if (boundryCheck) {
        if (type == "x" && (self.isBoundryOutLeft() || self.isBoundryOutRight())) {
          self.boundryCheckX();
          return;
        } else if (type == "y" && (self.isBoundryOutTop() || self.isBoundryOutBottom())) {
          self.boundryCheckY();
          return;
        }
      }
      if (type == "x" && self.userConfig.lockX) return;
      if (type == "y" && self.userConfig.lockY) return;
      v = v > maxSpeed ? maxSpeed : v < -maxSpeed ? -maxSpeed : v;
      var a = self.SCROLL_ACCELERATION * (v / (Math.abs(v) || 1));
      var a2 = self.BOUNDRY_ACCELERATION;
      var t = isNaN(v / a) ? 0 : v / a;
      var s = Number(pos) + t * v / 2;
      //over top boundry check bounce
      if (s < -boundryStart && boundryCheck) {
        var _s = -boundryStart - pos;
        var _t = (Math.sqrt(-2 * a * _s + v * v) + v) / a;
        var v0 = v - a * _t;
        var _t2 = Math.abs(v0 / a2);
        var s2 = v0 / 2 * _t2;
        t = _t + _t2;
        s = bounce ? -boundryStart + s2 : -boundryStart;
        status = "outside";
      } else if (s > innerSize - boundryEnd && boundryCheck) {
        var _s = boundryEnd - innerSize + pos;
        var _t = (Math.sqrt(-2 * a * _s + v * v) - v) / a;
        var v0 = v - a * _t;
        var _t2 = Math.abs(v0 / a2);
        var s2 = v0 / 2 * _t2;
        t = _t + _t2;
        s = bounce ? innerSize - boundryEnd + s2 : innerSize - boundryEnd;
        status = "outside";
      }
      if (isNaN(s) || isNaN(t)) return;
      transition.pos = s;
      transition.duration = t;
      transition.easing = Math.abs(v) > 2 ? "circular" : "quadratic";
      transition.status = status;
      var Type = type.toUpperCase();
      self['isScrolling' + Type] = true;
      self['isRealScrolling' + Type] = true;
      return transition;
    },
    /**
     * bounce to the boundry horizontal
     * @memberof SimuScroll
     * @return {SimuScroll}
     **/
    boundryCheckX: function boundryCheckX(duration, easing, callback) {
      var self = this;
      if (!self.userConfig.boundryCheck) return;
      if (typeof arguments[0] == "function") {
        callback = arguments[0];
        duration = self.userConfig.BOUNDRY_CHECK_DURATION;
        easing = self.userConfig.BOUNDRY_CHECK_EASING;
      } else {
        duration = duration === 0 ? 0 : self.userConfig.BOUNDRY_CHECK_DURATION, easing = easing || self.userConfig.BOUNDRY_CHECK_EASING;
      }
      if (!self.userConfig.bounce || self.userConfig.lockX) return;
      var boundry = self.boundry;
      if (self.isBoundryOutLeft()) {
        self.scrollLeft(-boundry.left, duration, easing, callback);
      } else if (self.isBoundryOutRight()) {
        self.scrollLeft(self.containerWidth - boundry.right, duration, easing, callback);
      }
      return self;
    },
    /**
     * bounce to the boundry vertical
     * @memberof SimuScroll
     * @return {SimuScroll}
     **/
    boundryCheckY: function boundryCheckY(duration, easing, callback) {
      var self = this;
      if (!self.userConfig.boundryCheck) return;
      if (typeof arguments[0] == "function") {
        callback = arguments[0];
        duration = self.userConfig.BOUNDRY_CHECK_DURATION;
        easing = self.userConfig.BOUNDRY_CHECK_EASING;
      } else {
        duration = duration === 0 ? 0 : self.userConfig.BOUNDRY_CHECK_DURATION, easing = easing || self.userConfig.BOUNDRY_CHECK_EASING;
      }
      if (!self.userConfig.boundryCheck || self.userConfig.lockY) return;
      var boundry = self.boundry;
      if (self.isBoundryOutTop()) {
        self.scrollTop(-boundry.top, duration, easing, callback);
      } else if (self.isBoundryOutBottom()) {
        self.scrollTop(self.containerHeight - boundry.bottom, duration, easing, callback);
      }
      return self;
    },
    /**
     * bounce to the boundry vertical and horizontal
     * @memberof SimuScroll
     * @return {SimuScroll}
     **/
    boundryCheck: function boundryCheck(duration, easing, callback) {
      this.boundryCheckX(duration, easing, callback);
      this.boundryCheckY(duration, easing, callback);
      return this;
    },
    /**
     * stop scrolling immediatelly
     * @memberof SimuScroll
     * @return {SimuScroll}
     **/
    stop: function stop() {
      var self = this;
      self.__timers.x && self.__timers.x.stop();
      self.__timers.y && self.__timers.y.stop();
      if (self.isScrollingX || self.isScrollingY) {
        var scrollTop = self.getScrollTop(),
            scrollLeft = self.getScrollLeft();
        self.trigger("scrollend", {
          scrollTop: scrollTop,
          scrollLeft: scrollLeft
        });
        self.trigger("stop", {
          scrollTop: scrollTop,
          scrollLeft: scrollLeft
        });
        self.isScrollingX = false;
        self.isScrollingY = false;
      }
      return self;
    },
    /**
     * render scroll
     * @memberof SimuScroll
     * @return {SimuScroll}
     **/
    render: function render() {
      var self = this;
      SimuScroll.superclass.render.call(this);
      //fixed for scrollbars
      if (getComputedStyle(self.renderTo).position == "static") {
        self.renderTo.style.position = "relative";
      }
      self.renderTo.style.overflow = "hidden";
      self.initScrollBars();
      self.initController();
      return self;
    },
    /**
     * init scrollbars
     * @memberof SimuScroll
     * @return {SimuScroll}
     */
    initScrollBars: function initScrollBars() {
      var self = this;
      if (!self.userConfig.boundryCheck) return;
      var indicatorInsets = self.userConfig.indicatorInsets;
      if (self.userConfig.scrollbarX) {
        self.scrollbarX = self.scrollbarX || new ScrollBar({
          xscroll: self,
          type: "x",
          spacing: indicatorInsets.spacing
        });
        self.scrollbarX.render();
        self.scrollbarX._update();
        self.scrollbarX.hide();
      }
      if (self.userConfig.scrollbarY) {
        self.scrollbarY = self.scrollbarY || new ScrollBar({
          xscroll: self,
          type: "y",
          spacing: indicatorInsets.spacing
        });
        self.scrollbarY.render();
        self.scrollbarY._update();
        self.scrollbarY.hide();
      }
      return self;
    },
    /**
     * destroy scrollbars
     * @memberof SimuScroll
     * @return {SimuScroll}
     */
    destroyScrollBars: function destroyScrollBars() {
      this.scrollbarX && this.scrollbarX.destroy();
      this.scrollbarY && this.scrollbarY.destroy();
      return this;
    },
    /**
     * init controller for multi-scrollers
     * @memberof SimuScroll
     * @return {SimuScroll}
     */
    initController: function initController() {
      var self = this;
      self.controller = self.controller || new Controller({
        xscroll: self
      });
      return self;
    },
    _unPreventHref: function _unPreventHref(e) {
      var target = Util.findParentEl(e.target, 'a', this.renderTo);
      if (!target) return;
      if (target.tagName.toLowerCase() == "a") {
        var href = target.getAttribute("data-xs-href");
        if (href) {
          target.setAttribute("href", href);
        }
      }
    },
    _preventHref: function _preventHref(e) {
      var target = Util.findParentEl(e.target, 'a', this.renderTo);
      if (!target) return;
      if (target.tagName.toLowerCase() == "a") {
        var href = target.getAttribute("href");
        href && target.setAttribute("href", "javascript:void(0)");
        href && target.setAttribute("data-xs-href", href);
      }
    },
    _triggerClick: function _triggerClick(e) {
      var target = e.target;
      if (!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)) {
        var ev = document.createEvent('MouseEvents');
        ev.initMouseEvent('click', true, true, e.view, 1, target.screenX, target.screenY, target.clientX, target.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
        target.dispatchEvent(ev);
      }
    }
  });

  if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    module.exports = SimuScroll;
  }
  /** ignored by jsdoc **/
  else {
      return SimuScroll;
    }
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
  "use strict";

  var Util = __webpack_require__(2),
      Base = __webpack_require__(3),
      Timer = __webpack_require__(28),
      Animate = __webpack_require__(6),
      Hammer = __webpack_require__(13),
      SimuScroll = __webpack_require__(79),
      OriginScroll = __webpack_require__(76);
  var XScroll = function XScroll(cfg) {
    var _ = cfg && cfg.useOriginScroll ? OriginScroll : SimuScroll;
    return new _(cfg);
  };
  /**
   * Util
   * @namespace Util
   * @type {Object}
   */
  XScroll.Util = Util;
  /**
   * Base
   * @namespace Base
   * @type {Base}
   */
  XScroll.Base = Base;
  /**
   * Timer
   * @namespace Timer
   * @type {Timer}
   */
  XScroll.Timer = Timer;
  /**
   * Animate
   * @namespace Animate
   * @type {Animate}
   */
  XScroll.Animate = Animate;
  /**
   * Hammer
   * @namespace Hammer
   * @type {Hammer}
   */
  XScroll.Hammer = Hammer;
  /**
   * plugins
   * @namespace Plugins
   * @type {Object}
   */
  XScroll.Plugins = {};

  if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    module.exports = XScroll;
  }
  /** ignored by jsdoc **/
  else {
      return window.XScroll = XScroll;
    }
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_object_assign__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_xscroll_build_cmd_xscroll_js__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_xscroll_build_cmd_xscroll_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vux_xscroll_build_cmd_xscroll_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vux_xscroll_build_cmd_plugins_pulldown__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vux_xscroll_build_cmd_plugins_pulldown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vux_xscroll_build_cmd_plugins_pulldown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_xscroll_build_cmd_plugins_pullup__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_xscroll_build_cmd_plugins_pullup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vux_xscroll_build_cmd_plugins_pullup__);
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






var pulldownDefaultConfig = function pulldownDefaultConfig() {
  return {
    content: 'Pull Down To Refresh',
    height: 60,
    autoRefresh: false,
    downContent: 'Pull Down To Refresh',
    upContent: 'Release To Refresh',
    loadingContent: 'Loading...',
    clsPrefix: 'xs-plugin-pulldown-'
  };
};

var pullupDefaultConfig = function pullupDefaultConfig() {
  return {
    content: 'Pull Up To Refresh',
    pullUpHeight: 60,
    height: 40,
    autoRefresh: false,
    downContent: 'Release To Refresh',
    upContent: 'Pull Up To Refresh',
    loadingContent: 'Loading...',
    clsPrefix: 'xs-plugin-pullup-'
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: {
      type: Object,
      default: function _default() {
        return {
          pulldownStatus: '',
          pullupStatus: ''
        };
      }
    },
    height: String,
    lockX: Boolean,
    lockY: Boolean,
    scrollbarX: Boolean,
    scrollbarY: Boolean,
    bounce: {
      type: Boolean,
      default: true
    },
    useOriginScroll: {
      type: Boolean,
      default: false
    },
    useTransition: {
      type: Boolean,
      default: true
    },
    preventDefault: {
      type: Boolean,
      default: false
    },
    stopPropagation: Boolean,
    boundryCheck: {
      type: Boolean,
      default: true
    },
    gpuAcceleration: {
      type: Boolean,
      default: true
    },
    usePulldown: {
      type: Boolean,
      default: false
    },
    usePullup: {
      type: Boolean,
      default: false
    },
    /**
    * refer to: http://xscroll.github.io/node_modules/xscroll/doc/PullDown.html
    */
    pulldownConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    pullupConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    enableHorizontalSwiping: {
      type: Boolean,
      default: false
    },
    scrollBottomOffset: {
      type: Number,
      default: 0
    }
  },
  methods: {
    reset: function reset(scrollPosition, duration, easing) {
      if (scrollPosition) {
        if (typeof scrollPosition.left !== 'undefined') {
          this._xscroll.scrollLeft(scrollPosition.left, duration, easing);
        }
        if (typeof scrollPosition.top !== 'undefined') {
          this._xscroll.scrollTop(scrollPosition.top, duration, easing);
        }
      }
      this._xscroll && this._xscroll.resetSize();
    },
    donePulldown: function donePulldown() {
      var _this = this;

      this.pulldown.reset(function () {
        // repaint
        _this.reset();
      });
      this.currentValue.pulldownStatus = 'default';
    },
    disablePullup: function disablePullup() {
      // this._xscroll.unplug(this.pullup)
      this.pullup.stop();
      this.currentValue.pullupStatus = 'disabled';
    },
    enablePullup: function enablePullup() {
      this.currentValue.pullupStatus = 'default';
      this.pullup.restart();
    },
    donePullup: function donePullup() {
      this.pullup.complete();
      this.reset();
      this.currentValue.pullupStatus = 'default';
    },
    getStyles: function getStyles() {
      var height = this.height;
      if (!this.height && this.$el && !this.$el.style.height && this.lockX) {
        height = document.documentElement.clientHeight + 'px';
        this.reset();
      }

      if (this.height && this.height.indexOf('-') === 0) {
        height = document.documentElement.clientHeight + parseInt(this.height) + 'px';
      }
      this.styles = {
        height: '' + height
      };
    }
  },
  created: function created() {
    var _this2 = this;

    if (!this.value) {
      this.currentValue = {
        pulldownStatus: '',
        pullupStatus: ''
      };
    } else {
      this.currentValue = this.value;
    }
    this.handleOrientationchange = function () {
      setTimeout(function () {
        _this2.reset();
      }, 100);
    };
  },
  data: function data() {
    return {
      currentValue: {},
      styles: {}
    };
  },

  watch: {
    currentValue: {
      handler: function handler(val) {
        this.$emit('input', pure(val));
      },
      deep: true
    },
    height: function height() {
      this.getStyles();
    },

    value: {
      handler: function handler(val) {
        if (val.pullupStatus === 'default' && this.currentValue.pullupStatus !== 'default') {
          this.donePullup();
        }
        if (val.pulldownStatus === 'default' && this.currentValue.pulldownStatus !== 'default') {
          this.donePulldown();
        }
        if (val.pullupStatus === 'disabled' && this.currentValue.pullupStatus !== 'disabled') {
          this.disablePullup();
        }
        if (val.pullupStatus === 'enabled' && this.currentValue.pullupStatus === 'disabled') {
          this.enablePullup();
        }
      },
      deep: true
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.uuid = Math.random().toString(36).substring(3, 8);
    this.$nextTick(function () {
      _this3.$el.setAttribute('id', 'vux-scroller-' + _this3.uuid);
      var content = null;
      if (_this3.$slots.default) {
        content = _this3.$slots.default[0].elm;
      }
      if (!content) {
        throw new Error('no content is found');
      }

      _this3._xscroll = new __WEBPACK_IMPORTED_MODULE_1_vux_xscroll_build_cmd_xscroll_js___default.a({
        renderTo: '#vux-scroller-' + _this3.uuid,
        lockX: _this3.lockX,
        lockY: _this3.lockY,
        scrollbarX: _this3.scrollbarX,
        scrollbarY: _this3.scrollbarY,
        content: content,
        bounce: _this3.bounce,
        useOriginScroll: _this3.useOriginScroll,
        useTransition: _this3.useTransition,
        preventDefault: _this3.preventDefault,
        boundryCheck: _this3.boundryCheck,
        gpuAcceleration: _this3.gpuAcceleration,
        stopPropagation: _this3.stopPropagation
      });

      _this3._xscroll.on('scroll', function () {
        if (_this3._xscroll) {
          var top = _this3._xscroll.getScrollTop();
          _this3.$emit('on-scroll', {
            top: top,
            left: _this3._xscroll.getScrollLeft()
          });
          var containerHeight = _this3._xscroll.containerHeight;
          var scrollHeight = _this3._xscroll.height;
          if (top >= containerHeight - scrollHeight - _this3.scrollBottomOffset) {
            _this3.$emit('on-scroll-bottom');
          }
        }
      });

      if (_this3.usePulldown) {
        // if use slot=pulldown
        var container = _this3.$slots.pulldown;
        var config = __WEBPACK_IMPORTED_MODULE_0_object_assign___default()(pulldownDefaultConfig(), _this3.pulldownConfig);
        if (container) {
          config.container = container[0].elm;
        }
        _this3.pulldown = new __WEBPACK_IMPORTED_MODULE_2_vux_xscroll_build_cmd_plugins_pulldown___default.a(config);
        _this3._xscroll.plug(_this3.pulldown);
        _this3.pulldown.on('loading', function (e) {
          _this3.$emit('on-pulldown-loading', _this3.uuid);
        });
        _this3.pulldown.on('statuschange', function (val) {
          _this3.currentValue.pulldownStatus = val.newVal;
        });
      }

      if (_this3.usePullup) {
        // if use slot=pullup
        var _container = _this3.$slots.pullup;
        var _config = __WEBPACK_IMPORTED_MODULE_0_object_assign___default()(pullupDefaultConfig(), _this3.pullupConfig);

        if (_container) {
          _config.container = _container[0].elm;
        }
        _this3.pullup = new __WEBPACK_IMPORTED_MODULE_3_vux_xscroll_build_cmd_plugins_pullup___default.a(_config);
        _this3._xscroll.plug(_this3.pullup);
        _this3.pullup.on('loading', function (e) {
          _this3.$emit('on-pullup-loading', _this3.uuid);
        });
        _this3.pullup.on('statuschange', function (val) {
          _this3.currentValue.pullupStatus = val.newVal;
        });
      }

      if (_this3.enableHorizontalSwiping) {
        _this3._xscroll.on('panstart', function (e) {
          if (e.direction === 2 || e.direction === 4) {
            e.preventDefault();
            if (_this3.scrollbarY) {
              _this3._xscroll.userConfig.scrollbarY = false;
            }
            _this3._xscroll.userConfig.lockY = true;
          }
        });
        _this3._xscroll.on('panend', function () {
          if (_this3.scrollbarY) {
            _this3._xscroll.userConfig.scrollbarY = true;
          }
          _this3._xscroll.userConfig.lockY = false;
        });
      }

      _this3._xscroll.render();
      window.addEventListener('orientationchange', _this3.handleOrientationchange, false);
    });
    this.getStyles();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.pullup) {
      this._xscroll.unplug(this.pullup);
      this.pullup.pluginDestructor();
    }
    if (this.pulldown) {
      this._xscroll.unplug(this.pulldown);
      this.pulldown.pluginDestructor();
    }
    window.removeEventListener('orientationchange', this.handleOrientationchange, false);
    this._xscroll.destroy();
    this._xscroll = null;
  }
});

function pure(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/***/ }),
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vux_src_components_tab_tab_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vux_src_components_tab_tab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vux_src_components_tab_tab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_tab_tab_item_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_tab_tab_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vux_src_components_tab_tab_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vux_src_components_swiper_swiper_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vux_src_components_swiper_swiper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vux_src_components_swiper_swiper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_src_components_swiper_swiper_item_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_src_components_swiper_swiper_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vux_src_components_swiper_swiper_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vux_src_components_load_more_index_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vux_src_components_load_more_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vux_src_components_load_more_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vux_src_components_scroller_index_vue__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vux_src_components_scroller_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vux_src_components_scroller_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__course_lists__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_object_serialize__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_whatwg_fetch__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_whatwg_fetch__);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'mm-course-tab',
  data: function data() {
    return {
      selected: '全部课程',
      index: 0,
      width: 0,
      showallType: false,
      swiperList: [],
      course: [],
      pageCount: 10,
      courses: [],
      si: null,
      bottomCount: 20,
      onFetching: false,
      scrollsHeight: window.innerHeight - window.innerWidth * 0.25 + 'px',
      lock: false,
      platform: navigator.platform
    };
  },

  components: {
    Tab: __WEBPACK_IMPORTED_MODULE_0_vux_src_components_tab_tab_vue___default.a,
    TabItem: __WEBPACK_IMPORTED_MODULE_1_vux_src_components_tab_tab_item_vue___default.a,
    Swiper: __WEBPACK_IMPORTED_MODULE_2_vux_src_components_swiper_swiper_vue___default.a,
    SwiperItem: __WEBPACK_IMPORTED_MODULE_3_vux_src_components_swiper_swiper_item_vue___default.a,
    MmCourseList: __WEBPACK_IMPORTED_MODULE_6__course_lists__["default"],
    LoadMore: __WEBPACK_IMPORTED_MODULE_4_vux_src_components_load_more_index_vue___default.a,
    Scroller: __WEBPACK_IMPORTED_MODULE_5_vux_src_components_scroller_index_vue___default.a,
    scrollTop: 0
  },
  methods: {
    onScrollBottom: function onScrollBottom() {
      if (!this.onFetching) {
        this.onFetching = true;
        this.$refs.scrollerBottom[this.index].reset();
        this.listFunc(this.index);
      }
    },
    onScroll: function onScroll(_ref) {
      var _ref$top = _ref.top,
          top = _ref$top === undefined ? 0 : _ref$top;

      if (!this.lock) {
        this.scrollTop = top;
      }
    },
    selectType: function selectType(ind) {
      this.index = ind;
      this.showallType = false;
    },
    getList: function getList() {
      var _this = this;

      var ind = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var pageNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var type = this.courses[ind]['data'];
      this.pageCount = +this.pageCounts || 10;

      var body = {
        pageNum: pageNum,
        pageCount: this.pageCount
      };

      if (typeof Object.assign != 'function') {
        Object.assign = function (target) {
          'use strict';

          if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
          }

          target = Object(target);
          for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source != null) {
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
          }
          return target;
        };
      }

      if (type) {
        Object.assign(body, _defineProperty({}, type, this.courses[ind][type]));
      }

      var canshu = {
        method: "post",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_object_serialize__["a" /* default */])(body)
      };

      return new Promise(function (resolve, reject) {

        var requestHead = _this.requestHead || '';
        fetch(requestHead + '/api/course/all', canshu).then(function (resp) {
          return resp.json();
        }).then(function (re) {
          resolve(re.data);
          _this.courses[ind].page = pageNum;
        }).catch(function () {
          return reject();
        });
      });
    },
    setWidth: function setWidth() {
      this.width = document.body.scrollWidth * 0.24 * this.swiperList.length + 'px';
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
        return sl.message = {};
      }).then(function () {
        _this2.$set(_this2.swiperList, val, _this2.swiperList[val]);
        _this2.$refs.scrollerBottom[_this2.index].reset();
        _this2.onFetching = false;
      });
    }
  },

  props: ['tags', 'pageCounts', 'requestHead', 'min-moving-distance'],

  mounted: function mounted() {
    var _this3 = this;

    this.setWidth();
    var screenX = void 0;
    document.body.addEventListener('touchstart', function (e) {
      screenX = e.targetTouches[0].screenX;
    });

    document.body.addEventListener('touchmove', function (e) {
      if (Math.abs(screenX - e.targetTouches[0].screenX) > 50) {
        _this3.lock = true;
        _this3.$refs.scrollerBottom[_this3.index].reset({
          top: _this3.scrollTop
        });
      }
    });

    document.body.addEventListener('touchend', function (e) {
      _this3.lock = false;
      _this3.$refs.scrollerBottom[_this3.index].reset();
    });
  },
  created: function created() {
    var _this4 = this;

    var _tags = this.tags,
        _tags$type = _tags.type,
        type = _tags$type === undefined ? ['vip'] : _tags$type,
        _tags$category = _tags.category,
        category = _tags$category === undefined ? ['测', '试', '代', '码'] : _tags$category;


    var mycourse = [{
      name: '全部课程'
    }];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = type[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var name = _step.value;

        mycourse.push({
          name: name,
          type: name,
          data: 'type'
        });
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = category[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _name = _step2.value;

        mycourse.push({
          name: _name,
          category: _name,
          data: 'category'
        });
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    this.courses = mycourse;
    this.swiperList = mycourse;

    this.course = [].concat(_toConsumableArray(this.swiperList), ['']);
    this.listFunc();
    document.body.onresize = function () {
      return _this4.setWidth();
    };
  },

  watch: {
    index: function index(val) {
      var _this5 = this;

      this.listFunc(val);
      var div = document.querySelector('.mm-course-tab >div');
      var left = div.scrollLeft.toFixed(0);
      var to = document.body.scrollWidth * 0.24 * (val - 1).toFixed(0);
      clearInterval(this.si);
      if (left < to) {
        this.si = setInterval(function () {
          div.scrollLeft = left++;
          if (left >= to) {
            clearInterval(_this5.si);
          }
        }, 2);
      } else if (left > to) {
        this.si = setInterval(function () {
          div.scrollLeft = left--;
          if (left <= to) {
            clearInterval(_this5.si);
          }
        }, 2);
      }
    }
  }
});

/***/ }),
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".xs-plugin-pullup-container{text-align:center}", ""]);

// exports


/***/ }),
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */
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
    style: ({
      width: _vm.width
    }),
    attrs: {
      "defaultColor": "#666",
      "activeColor": "#dc2832",
      "line-width": 2,
      "active-color": "#fc378c"
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
        "disabled": !item,
        "selected": _vm.selected === item
      }
    }, [_vm._v(_vm._s(item.name))])
  }))], 1), _vm._v(" "), _c('swiper', {
    attrs: {
      "show-dots": false,
      "id": "my-swiper",
      "min-moving-distance": _vm.minMovingDistance
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
    }, [_c('scroller', {
      ref: "scrollerBottom",
      refInFor: true,
      attrs: {
        "height": _vm.platform !== "Win32" ? "auto" : _vm.scrollsHeight,
        "lock-x": "",
        "lock-y": _vm.lock,
        "scroll-bottom-offst": 200
      },
      on: {
        "on-scroll-bottom": _vm.onScrollBottom,
        "on-scroll": _vm.onScroll
      }
    }, [_c('div', [_vm._l((item.message), function(it) {
      return (item.message) ? _c('mm-course-list', {
        key: it,
        attrs: {
          "message": it,
          "to": "course_detl?courseId=" + it._id
        }
      }) : _vm._e()
    }), _vm._v(" "), (!item.message) ? _c('load-more', {
      attrs: {
        "tip": "loading"
      }
    }) : (!item.count) ? _c('div', {
      staticClass: "nomessage"
    }, [_c('img', {
      attrs: {
        "src": "https://cdn.xueyuan.xiaobao100.com/shield/image/plugin-pic/none.png",
        "alt": ""
      }
    }), _vm._v(" "), _c('span', [_vm._v("这里什么都没有，去别的地方看看吧~")])]) : (item.message && item.message.length === item.count) ? _c('div', {
      staticClass: "weui-loadmore weui-loadmore_line"
    }, [_c('span', {
      staticClass: "weui-loadmore__tips"
    }, [_vm._v("已经到底了")])]) : _vm._e()], 2)])], 1)])
  })), _vm._v(" "), _c('em', {
    staticClass: "ifshowall",
    on: {
      "click": function($event) {
        _vm.showallType = !_vm.showallType
      }
    }
  }, [_c('i', {
    class: {
      on: _vm.showallType
    }
  })]), _vm._v(" "), (_vm.showallType) ? _c('div', {
    staticClass: "all"
  }, [_vm._v("全部分类")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "alllist",
    class: {
      showallType: _vm.showallType
    }
  }, [_c('dl', _vm._l((_vm.courses), function(item, ind) {
    return _c('dd', {
      class: {
        on: ind === _vm.index
      },
      on: {
        "click": function($event) {
          _vm.selectType(ind)
        }
      }
    }, [_vm._v(_vm._s(item.name))])
  }))])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-512ec87c", module.exports)
  }
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: (_vm.styles)
  }, [_c('div', {
    staticClass: "xs-container"
  }, [_vm._t("default"), _vm._v(" "), _vm._t("pulldown"), _vm._v(" "), _vm._t("pullup")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6ad07ef9", module.exports)
  }
}

/***/ }),
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("5a5dd80c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../css-loader/index.js!../../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6ad07ef9\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../vux-loader/src/style-loader.js!../../../../vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../css-loader/index.js!../../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6ad07ef9\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../vux-loader/src/style-loader.js!../../../../vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(112)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(81),
  /* template */
  __webpack_require__(102),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/moia/Desktop/xiaobao-vue/mm_vue_plugins/node_modules/vux/src/components/scroller/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ad07ef9", Component.options)
  } else {
    hotAPI.reload("data-v-6ad07ef9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })
/******/ ]);
});