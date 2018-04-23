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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./lib/course-tab/style.css
var style = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./lib/course-tab/index.js
var course_tab = __webpack_require__(6);
var course_tab_default = /*#__PURE__*/__webpack_require__.n(course_tab);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
  * vue-router v2.7.0
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert(condition, message) {
  if (!condition) {
    throw new Error("[vue-router] " + message);
  }
}

function warn(condition, message) {
  if ("development" !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn("[vue-router] " + message);
  }
}

function isError(err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1;
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render(_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children);
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h();
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (val && current !== vm || !val && current === vm) {
        matched.instances[name] = val;
      }
    }

    // also regiseter instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children);
  }
};

function resolveProps(route, config) {
  switch (typeof config === 'undefined' ? 'undefined' : _typeof(config)) {
    case 'undefined':
      return;
    case 'object':
      return config;
    case 'function':
      return config(route);
    case 'boolean':
      return config ? route.params : undefined;
    default:
      if (true) {
        warn(false, "props in \"" + route.path + "\" is a " + (typeof config === 'undefined' ? 'undefined' : _typeof(config)) + ", " + "expecting an object, function or boolean.");
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};

var decode = decodeURIComponent;

function resolveQuery(query, extraQuery, _parseQuery) {
  if (extraQuery === void 0) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "development" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var val = extraQuery[key];
    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
  }
  return parsedQuery;
}

function parseQuery(query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res;
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res;
}

function stringifyQuery(obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encode(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&');
    }

    return encode(key) + '=' + encode(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?" + res : '';
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute(record, location, redirectedFrom, router) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;
  var route = {
    name: location.name || record && record.name,
    meta: record && record.meta || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route);
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch(record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res;
}

function getFullPath(ref, _stringifyQuery) {
  var path = ref.path;
  var query = ref.query;if (query === void 0) query = {};
  var hash = ref.hash;if (hash === void 0) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash;
}

function isSameRoute(a, b) {
  if (b === START) {
    return a === b;
  } else if (!b) {
    return false;
  } else if (a.path && b.path) {
    return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && a.hash === b.hash && isObjectEqual(a.query, b.query);
  } else if (a.name && b.name) {
    return a.name === b.name && a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params);
  } else {
    return false;
  }
}

function isObjectEqual(a, b) {
  if (a === void 0) a = {};
  if (b === void 0) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if ((typeof aVal === 'undefined' ? 'undefined' : _typeof(aVal)) === 'object' && (typeof bVal === 'undefined' ? 'undefined' : _typeof(bVal)) === 'object') {
      return isObjectEqual(aVal, bVal);
    }
    return String(aVal) === String(bVal);
  });
}

function isIncludedRoute(current, target) {
  return current.path.replace(trailingSlashRE, '/').indexOf(target.path.replace(trailingSlashRE, '/')) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
}

function queryIncludes(current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false;
    }
  }
  return true;
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render(h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null ? 'router-link-exact-active' : globalExactActiveClass;
    var activeClass = this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null ? exactActiveClassFallback : this.exactActiveClass;
    var compareTarget = location.path ? createRoute(null, location, null, router) : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact ? classes[exactActiveClass] : isIncludedRoute(current, compareTarget);

    var handler = function handler(e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default);
  }
};

function guardEvent(e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
    return;
  }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) {
    return;
  }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) {
    return;
  }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) {
      return;
    }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true;
}

function findAnchor(children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child;
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child;
      }
    }
  }
}

var _Vue;

function install(Vue) {
  if (install.installed) {
    return;
  }
  install.installed = true;

  _Vue = Vue;

  var isDef = function isDef(v) {
    return v !== undefined;
  };

  var registerInstance = function registerInstance(vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate() {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed() {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get() {
      return this._routerRoot._router;
    }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get() {
      return this._routerRoot._route;
    }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath(relative, base, append) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative;
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative;
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/');
}

function parsePath(path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  };
}

function cleanPath(path) {
  return path.replace(/\/\//g, '/');
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (_typeof(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (index$1(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys(re, keys) {
  re.keys = keys;
  return re;
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options.sensitive ? '' : 'i';
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp(path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys);
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys);
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp(tokens, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys);
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp(path, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */keys);
  }

  if (index$1(path)) {
    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
  }

  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCompileCache = Object.create(null);

function fillParams(path, params, routeMsg) {
  try {
    var filler = regexpCompileCache[path] || (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true });
  } catch (e) {
    if (true) {
      warn(false, "missing param for " + routeMsg + ": " + e.message);
    }
    return '';
  }
}

/*  */

function createRouteMap(routes, oldPathList, oldPathMap, oldNameMap) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  };
}

function addRouteRecord(pathList, pathMap, nameMap, route, parent, matchAs) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(typeof route.component !== 'string', "route config \"component\" for path: " + String(path || name) + " cannot be a " + "string id. Use an actual component instead.");
  }

  var normalizedPath = normalizePath(path, parent);
  var pathToRegexpOptions = route.pathToRegexpOptions || {};

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null ? {} : route.components ? route.props : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (route.name && !route.redirect && route.children.some(function (child) {
        return (/^\/?$/.test(child.path)
        );
      })) {
        warn(false, "Named Route '" + route.name + "' has a default child route. " + "When navigating to this named route (:to=\"{name: '" + route.name + "'\"), " + "the default child route will not be rendered. Remove the name from " + "this route and use the name of the default child route for named " + "links instead.");
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs ? cleanPath(matchAs + "/" + child.path) : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ("development" !== 'production' && !matchAs) {
      warn(false, "Duplicate named routes definition: " + "{ name: \"" + name + "\", path: \"" + record.path + "\" }");
    }
  }
}

function compileRouteRegex(path, pathToRegexpOptions) {
  var regex = index(path, [], pathToRegexpOptions);
  if (true) {
    var keys = {};
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], "Duplicate param keys in route with path: \"" + path + "\"");
      keys[key.name] = true;
    });
  }
  return regex;
}

function normalizePath(path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') {
    return path;
  }
  if (parent == null) {
    return path;
  }
  return cleanPath(parent.path + "/" + path);
}

/*  */

function normalizeLocation(raw, current, append, router) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next;
  }

  // relative params
  if (!next.path && next.params && current) {
    next = vue_router_esm_assign({}, next);
    next._normalized = true;
    var params = vue_router_esm_assign(vue_router_esm_assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, "path " + current.path);
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next;
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = current && current.path || '/';
  var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append || next.append) : basePath;

  var query = resolveQuery(parsedPath.query, next.query, router && router.options.parseQuery);

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  };
}

function vue_router_esm_assign(a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a;
}

/*  */

function createMatcher(routes, router) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes(routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match(raw, currentRoute, redirectedFrom) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, "Route with name '" + name + "' does not exist");
      }
      if (!record) {
        return _createRoute(null, location);
      }
      var paramNames = record.regex.keys.filter(function (key) {
        return !key.optional;
      }).map(function (key) {
        return key.name;
      });

      if (_typeof(location.params) !== 'object') {
        location.params = {};
      }

      if (currentRoute && _typeof(currentRoute.params) === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, "named route \"" + name + "\"");
        return _createRoute(record, location, redirectedFrom);
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom);
        }
      }
    }
    // no match
    return _createRoute(null, location);
  }

  function redirect(record, location) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function' ? originalRedirect(createRoute(record, location, null, router)) : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || (typeof redirect === 'undefined' ? 'undefined' : _typeof(redirect)) !== 'object') {
      if (true) {
        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
      }
      return _createRoute(null, location);
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, "redirect failed: named route \"" + name + "\" not found.");
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location);
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, "redirect route with path \"" + rawPath + "\"");
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location);
    } else {
      if (true) {
        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
      }
      return _createRoute(null, location);
    }
  }

  function alias(record, location, matchAs) {
    var aliasedPath = fillParams(matchAs, location.params, "aliased route with path \"" + matchAs + "\"");
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location);
    }
    return _createRoute(null, location);
  }

  function _createRoute(record, location, redirectedFrom) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location);
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs);
    }
    return createRoute(record, location, redirectedFrom, router);
  }

  return {
    match: match,
    addRoutes: addRoutes
  };
}

function matchRoute(regex, path, params) {
  var m = path.match(regex);

  if (!m) {
    return false;
  } else if (!params) {
    return true;
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true;
}

function resolveRecordPath(path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true);
}

/*  */

var positionStore = Object.create(null);

function setupScroll() {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll(router, to, from, isPop) {
  if (!router.app) {
    return;
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return;
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return;
    }
    var isObject = (typeof shouldScroll === 'undefined' ? 'undefined' : _typeof(shouldScroll)) === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        var offset = shouldScroll.offset && _typeof(shouldScroll.offset) === 'object' ? shouldScroll.offset : {};
        offset = normalizeOffset(offset);
        position = getElementPosition(el, offset);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition() {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition() {
  var key = getStateKey();
  if (key) {
    return positionStore[key];
  }
}

function getElementPosition(el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  };
}

function isValidPosition(obj) {
  return isNumber(obj.x) || isNumber(obj.y);
}

function normalizePosition(obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  };
}

function normalizeOffset(obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  };
}

function isNumber(v) {
  return typeof v === 'number';
}

/*  */

var supportsPushState = inBrowser && function () {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }

  return window.history && 'pushState' in window.history;
}();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now ? window.performance : Date;

var _key = genKey();

function genKey() {
  return Time.now().toFixed(3);
}

function getStateKey() {
  return _key;
}

function setStateKey(key) {
  _key = key;
}

function pushState(url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState(url) {
  pushState(url, true);
}

/*  */

function runQueue(queue, fn, cb) {
  var step = function step(index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents(matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (resolvedDef.__esModule && resolvedDef.default) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function' ? resolvedDef : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "development" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason) ? reason : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) {
      next();
    }
  };
}

function flatMapComponents(matched, fn) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key);
    });
  }));
}

function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once(fn) {
  var called = false;
  return function () {
    var args = [],
        len = arguments.length;
    while (len--) {
      args[len] = arguments[len];
    }if (called) {
      return;
    }
    called = true;
    return fn.apply(this, args);
  };
}

/*  */

var History = function History(router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen(cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady(cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError(errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo(location, onComplete, onAbort) {
  var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) {
        cb(route);
      });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) {
        cb(err);
      });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition(route, onComplete, onAbort) {
  var this$1 = this;

  var current = this.current;
  var abort = function abort(err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (isSameRoute(route, current) &&
  // in the case the route map has been dynamically appended to
  route.matched.length === current.matched.length) {
    this.ensureURL();
    return abort();
  }

  var ref = resolveQueue(this.current.matched, route.matched);
  var updated = ref.updated;
  var deactivated = ref.deactivated;
  var activated = ref.activated;

  var queue = [].concat(
  // in-component leave guards
  extractLeaveGuards(deactivated),
  // global before hooks
  this.router.beforeHooks,
  // in-component update hooks
  extractUpdateHooks(updated),
  // in-config enter guards
  activated.map(function (m) {
    return m.beforeEnter;
  }),
  // async components
  resolveAsyncComponents(activated));

  this.pending = route;
  var iterator = function iterator(hook, next) {
    if (this$1.pending !== route) {
      return abort();
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (typeof to === 'string' || (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' && (typeof to.path === 'string' || typeof to.name === 'string')) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if ((typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function isValid() {
      return this$1.current === route;
    };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort();
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) {
            cb();
          });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute(route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase(base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = baseEl && baseEl.getAttribute('href') || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '');
}

function resolveQueue(current, next) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break;
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  };
}

function extractGuards(records, name, bind, reverse) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard) ? guard.map(function (guard) {
        return bind(guard, instance, match, key);
      }) : bind(guard, instance, match, key);
    }
  });
  return flatten(reverse ? guards.reverse() : guards);
}

function extractGuard(def, key) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key];
}

function extractLeaveGuards(deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true);
}

function extractUpdateHooks(updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard);
}

function bindGuard(guard, instance) {
  if (instance) {
    return function boundRouteGuard() {
      return guard.apply(instance, arguments);
    };
  }
}

function extractEnterGuards(activated, cbs, isValid) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid);
  });
}

function bindEnterGuard(guard, match, key, cbs, isValid) {
  return function routeEnterGuard(to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    });
  };
}

function poll(cb, // somehow flow cannot infer this is a function
instances, key, isValid) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = function (History$$1) {
  function HTML5History(router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      var current = this$1.current;
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if (History$$1) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create(History$$1 && History$$1.prototype);
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go(n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL(push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation() {
    return getLocation(this.base);
  };

  return HTML5History;
}(History);

function getLocation(base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash;
}

/*  */

var HashHistory = function (History$$1) {
  function HashHistory(router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return;
    }
    ensureSlash();
  }

  if (History$$1) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create(History$$1 && History$$1.prototype);
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners() {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return;
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push(location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go(n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL(push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    return getHash();
  };

  return HashHistory;
}(History);

function checkFallback(base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true;
  }
}

function ensureSlash() {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true;
  }
  replaceHash('/' + path);
  return false;
}

function getHash() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1);
}

function pushHash(path) {
  window.location.hash = path;
}

function replaceHash(path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  window.location.replace(base + "#" + path);
}

/*  */

var AbstractHistory = function (History$$1) {
  function AbstractHistory(router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if (History$$1) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create(History$$1 && History$$1.prototype);
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go(n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return;
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/';
  };

  AbstractHistory.prototype.ensureURL = function ensureURL() {
    // noop
  };

  return AbstractHistory;
}(History);

/*  */

var VueRouter = function VueRouter(options) {
  if (options === void 0) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break;
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break;
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break;
    default:
      if (true) {
        assert(false, "invalid mode: " + mode);
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match(raw, current, redirectedFrom) {
  return this.matcher.match(raw, current, redirectedFrom);
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current;
};

VueRouter.prototype.init = function init(app /* Vue component instance */) {
  var this$1 = this;

  "development" !== 'production' && assert(install.installed, "not installed. Make sure to call `Vue.use(VueRouter)` " + "before creating root instance.");

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return;
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function setupHashListener() {
      history.setupListeners();
    };
    history.transitionTo(history.getCurrentLocation(), setupHashListener, setupHashListener);
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach(fn) {
  return registerHook(this.beforeHooks, fn);
};

VueRouter.prototype.beforeResolve = function beforeResolve(fn) {
  return registerHook(this.resolveHooks, fn);
};

VueRouter.prototype.afterEach = function afterEach(fn) {
  return registerHook(this.afterHooks, fn);
};

VueRouter.prototype.onReady = function onReady(cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError(errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push(location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace(location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go(n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back() {
  this.go(-1);
};

VueRouter.prototype.forward = function forward() {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents(to) {
  var route = to ? to.matched ? to : this.resolve(to).route : this.currentRoute;
  if (!route) {
    return [];
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key];
    });
  }));
};

VueRouter.prototype.resolve = function resolve(to, current, append) {
  var location = normalizeLocation(to, current || this.history.current, append, this);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  };
};

VueRouter.prototype.addRoutes = function addRoutes(routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties(VueRouter.prototype, prototypeAccessors);

function registerHook(list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) {
      list.splice(i, 1);
    }
  };
}

function createHref(base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path;
}

VueRouter.install = install;
VueRouter.version = '2.7.0';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ var vue_router_esm = (VueRouter);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./demo/pages/Index/index.vue
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
//
//
//
//

/* harmony default export */ var Index = ({
  methods: {
    ss: function ss(e) {
      console.log(e);
    },
    aa: function aa() {
      this.confirm = Object.assign({}, this.confirm, {
        show: false
      });
    },
    result: function result() {
      this.time = 0;
    },
    rr: function rr() {
      // this.time=5;
      this.confirm = Object.assign({}, this.confirm, {
        show: true
      });
    }
  },
  data: function data() {
    return {
      confirm: {
        show: false,
        message: '111'
      },
      time: 0,
      message: {
        title: '203期 节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生',
        category: '营销影响',
        buy_count: 100,
        score: 10.0,
        cover_240x140: '',
        pingjia: {
          done: false
        }
      },
      tag: JSON.parse(localStorage.tags || '{}'),
      data: [{}, {}]
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-66f10b47","hasScoped":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./demo/pages/Index/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('mm-course-tab', {
    attrs: {
      "tags": _vm.tag,
      "pageCounts": "{1}",
      "min-moving-distance": 50
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_Index = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-66f10b47", esExports)
  }
}
// CONCATENATED MODULE: ./demo/pages/Index/index.vue
var disposed = false
var normalizeComponent = __webpack_require__(10)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Index,
  pages_Index,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "demo/pages/Index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66f10b47", Component.options)
  } else {
    hotAPI.reload("data-v-66f10b47", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var demo_pages_Index = (Component.exports);

// CONCATENATED MODULE: ./demo/pages/Index/index.js

// CONCATENATED MODULE: ./demo/app.js





vue_esm["a" /* default */].use(vue_router_esm);



// import {MainMenu,CourseLists,BottomMenu} from '../es'
// Vue.use(CourseLists)
// Vue.use(MainMenu)
// Vue.use(BottomMenu)

// import index from '..';

// Vue.use(CourseTab)
// Vue.use(CourseLists)
vue_esm["a" /* default */].use(course_tab_default.a);

var routes = [{
    path: '*',
    component: demo_pages_Index
}];

var router = new vue_router_esm({ routes: routes });

new vue_esm["a" /* default */]({ router: router }).$mount('#container');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "body{margin:0}.mm-course-list{background-color:#fff;padding-top:10px;position:relative}.mm-course-list .over:after{content:\"\";position:absolute;right:20px;width:80px;height:80px;top:0;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC1CAMAAADBTyWlAAAAolBMVEUAAADe3t7t7e3////e3t7k5OTe3t7h4eHe3t7h4eHe3t7m5ube3t7e3t7i4uLe3t7e3t7p6ene3t7e3t7e3t7f39/e3t7e3t7e3t7e3t7e3t7f39/e3t7g4ODe3t7e3t7g4ODe3t7e3t7e3t7e3t7e3t7f39/g4ODd3d3f39/f39/g4ODf39/f39/f39/e3t7g4ODe3t7d3d3f39/f39/d3d3mLRtEAAAANXRSTlMA9gcD8Q/6Heck2RPC3xiNrAt4sZtTcetoyJY9iDCmf0KhzNC8tlg042JKK0ZdKIQ4ktRObI8BwgEAABPOSURBVHja7JrpdqpIFIUpZhBEEUVRcQCVOEQT3e//ao2QUIBYlLndt3utvt+vjFLUmfY5VcIf/vCHP/zhf4Rk7N8WwWASmYkvy7ptRnHojLbTjvDfRNkvwojgCboVjOeS8F+iewo+kWFvvPN4eDkYWqevdLX3+fLkOuFExh05XixF4T/BfLFGCrFmp11feIJ2HK3sbOG907/uK3MnAUAG7kXkMMjQiZBijRXhX6MzigAkwb5lweVfa+MNAUi4/3ccfBeqgP+xE9rob2rfn2IAifv7t3tvAepgyBNXDuYPLu6aAAkM4XeyNQF5pgk8XICZ8MhxAyB8F34XxwiwR5zWFU3AFpo4eASqpwm/g4sFJG/ccXRGyvRJOglUkIXwj9PxAH/E4cp9zXif76ZbFSkfwhOMEDfhn+bkg5wVrrezQdGHTyvKQaq/7XJ8O/2NJd+IgdjgTYkEZSbnqcSbSFP02d+UEd8I9NMLVkENedhaM1eAOvGc0AT0q/DrKD1g9ZJu+EAF8taWaFwCMuvm4R4Db8KvMk0gb4UczqWLFkqYc4HN1QZ6NAO6wFL4NUYqrOID11uBCw2UntIivSwgqqTGBZJf8mvRA840jiL0ul/LWrBsuEeB25JrPlT442qkShacXxH5Fkg5iGLAT7+XrhvgIjwnQAGzXks3GeqH8rD5UH+uTt5tJBWH7CElPOsAfFYeS1DAEoNLE4ib3srD5sdCX8ekW/uwgpD1j7gjgxbyJowNYO6bnUbG/odaQ8amVrZnKGC59AIgq6k0IsDThyszFbIrPgt/mOKPJB1BT3xYTQFLpE2sNyWr1BGwbXbmNx3wOiyJOBJeZ0ngSXU1TQv0J7PqF8+eNVtkGgEWM33vIXde76lkBPXdcUAhO87S1FDBtRCw2zL+hj6fl4P/EGmdGGX0n4r4/oKALMTWzKWqc+EltAQDqbb1CaqsxZ81bAkQalwdpvXaZkSwxPrDVvVVhz/p5CfA+sKn03wMhRfowVSaLDbu+SixeLnAeoDOLeHGsF8w5hmy8SwV6biz6a0C5+z2H0xkTI/X4XY/nfebBKgM4vQFXqQIrsDLEOqRLZV7DTXs6K4iGQXTRgE6MF7KuiBd3tZKxohdoeXaR4nH2RoZxLY2g144sCKtno5i4PNVmdzDitMoE/QEBp/AuPL3R08GQKyPt53CFKA3ienv3zthiHT/CC58Dt2iwEeYSKXVuDqA6MwcP0tjGWqgMF1yo57zqJiRRXkxE64KpmLKzgBkTnfCI4C5eG8RMZ/A5tDmCDCznlgHiEYDWwdHQy3aOLcJqaICeSowaPNT476e1v76minvywRApe04QW9PNzNEktBObkeoreNPZUaoAGUg6cBqhTvVGJ7g3Co5VFw4J742EDKWTAXoqvva1EGXqqNX0vYUi1NaKSFg7lrjY90mQDu5n/VuwjFf8NgHqr60Qq9lkgRd4eppbMBps3m7AJVmJP19/0zgd0QCqI4iOMCgFvjsKYiYgGuu4aqwpzwC9CwyzTUAMNsmSDkLca7ADEDtVp/GDjMXa57q4wGe8jcIUHFBkJHJa/erG4oBt57Qxow3l3nGUWIIcm0ToBawnnIVBeDr7a5fsnEI2HUt5CuMdBdzrHkAefqrApSqvpT1Vct0L5Cd0XQA1PIFY+DUIaCRLj6zhgV9zl7K6C5AOeL5agLZ27lIwmFfVJHiSIL9MHaYq+qzorsoh+2seWWdNRJ20d6bnAI0RAq5T9Ct7CvXx52BEuJBZQbPBk6ij2mpyASNKWENkxVduQA9cvYlQM8Qux0hyJZ704E1ANMDAt6B0xiTshfJDQ4i9WB2WaXCUeGPJN6+JJXXH4CXfrkMdBg2MPwarMScAyfJxLBy/nBqilQyZwlQH2rQ4e/4pax4r/J/vggHxz8KcxspesPqRk3aDbZURJsOwGpow1g6cfkJxAfhNZyvnv5wctMtE/vpszdIibdibXmNA6fwO6VLiuY1DpY1GQFbgA45byTMx9R2efSfUYSaFOCO/7GsRM8A3mMqI9DSBGLqtDeNt1ptPD8R2QKUrfd2NI0XGez8tehTqaK4+IaUYtpQMX8Mw02eHSrYq3Gx36Png7CTDnjdlsYTVpHG6bauAC8XoIBY7CnsNXKuzIHTOpdK3QQ1PrXCOY4MAbprd15si4ri34oshYW2GBodAN/x4AMzYR7ItUGEotcHTtp3ijvIqDBQiiauWdZqKyA58cy4kPQPGwDlFKMDbycAJH+n73J+zA6db4FlVJwhEircisHcUUWJRSl6tSdCjZz7nLVkogLVFLOKP5cOclTLPWRLgdpvFs41PRdTIe02ng5PGidUw/zUksnJs5x8xpVBe1zpa/HjmFrX1kQbmDwTdOeK8VRVaTihoFuyhy7+UID28kUsTQDlFDON/E6x/DFyVPEGPBtw7auVclv6NkZBvxSnt0YBOm6v2R7gZ2k8hYaS1qtcBtkB6K2BdV8HZOWJSq+awKMvJxIU0DAwHPFRgKqOwnnB5oMgI++M8rYwJZbKHn8QtNHIZUyQL9VFm9jRSeUdHXcu7QK0nRtyku0MyEPplCDFHlbMQaTMaSYgnadt96psachSqbCS8CKMZZraH3jfAOaRe3CckqUYRQY2+WEAaqcuEY2+4eh5dNwqn7uh3mu72Ztqg2fnm4qjQuYSoNR0ofY9kDmucGelVXYBaB+4GKpatsFHyY3orcqh7v5YgJ461KhU5hrIeDx18bIYZSPFVclkNXfhSsNPlxGHAL2sEVQKuEarNvB4s0gjgC21Di70ylbJ6ApcGD0aP8zJEtQD3RGQohfLMJcNwmTU8mQL5FIVHj7vnLR9Aiouah2Tj1wzdAIVGY+XNq8RZKVtXJVUXerId8p4Yk9AaWEHCE09GoBefhslx7SRYn9cd0ZH7O6uY+0eSbfWJyv1rvFDaOUyASZtAnRu5bVak/HdiSpvwWQhHHNFOg6BuD9TUebCcV46efijAKz35BegHQ9Abo1R5fKSMQCQXftxsnx88HRQ5i0X9prHVQNc2+ZXbAFKW5Jva4hm6eAur9mb91xCmlkuWAZWwr7kRM9LZ01PXoNh9nYBSgt7yRp7oCi6DlWkYyChKzLm71qnsiL+81IdXe5rc4zCjoo1NvTOlaLLI7FYfyLwMo+BaPnEBFCl534aMAUoLeyoWeNdpaOTabeUtAdCO+3npd3aQIdfgNLCjvqeSJni2j4MZnmvLkg39nmpAZPhp2n8sFGiPJtJ9WoP6PVFu8x7eu0X9ihzRM8F6J7n1J1ag1Z7+sNKa8p1bGwMWp98weSpABV5HkE27/Vqn7IxHgZi5+pcs+XCHpMl4gY/za/NMVmGEr3Q1hVLNbfUI4x7yYqerOJT5Dkv9bqtmWU1YlybY9pwXCoCo6Lao2wiB983TcQJ4xJny5Pb0TgEqJL5gK5Qv5Y7ec1NCTqVs0u4hdL3fnBeKm7bA6t/5rg2l9oww/neIADBvdrjYaNWgPndcEd/sXJly4nDQND3DQYMOMEEc4VwmCyQ7f//tS1JxpIXI3nxzluSKkFkaaanp9vDFwR7LnpKANpianlZM/EV4Ph8q9EDGh5RVmKiNw+p+8q89BtBGxiofoY0JYWku+YdEwn98dabTnk+hqPlS4K9L6yVMPCs7EyqmzYFUPB01twjnAHMugj2MkRqGCgJ2yRHtEqGwxQIzPJA7oG90bAo01B3mJcW+JQDUF9+MILEPjmVLK8IIHyhHYBRw6KKnKEW7J2xkMNAafh74OZeAXyV4vgaa/ouSKbE9luXNtpqwd4I8ycAlPo2lA4BIDHCFIgYGmXHcDnnzOeqvignlzoI9q6N9II5Zb4NeRwtACuTMYpjjw22WWHMqoyMi4AtOZekEuxJY9BEPhVtAKg5r9yF5g00Ep8Vxgrs9y3gXVhUKaAoWs1L33GRwEC5SYdEzCnFW1EVxlVfgMvnclH2JJQAtIUhLkX/JQDqewAc0KGl4WoJPYasMIpkiNGjqns71kElBt0Ee5yHflR9qWEgAzuRvycFcNeLNP8aksLIyURT4KL3SQrwhNBZsLdEVE+QDt4VMDCcuUw0kZu0tt0ATATKbk4LSM+uD2x4QlAJ9tQxxewvW2lsKkvVQrwSJJxc03bsnQw0M096HO31PcYlhSrwst9pLWOMt7p6fdaGgMlECold9x+AkCEZ+XELgKuTTxH01Um6Ec8Ee2bzAd8gq83heoaagAHWok6qbEPWrBYNQMMTzeSGIaer9s/oKlPkrbn2BLq44CfelARM8OYAh1JGxOJGBN6X2GbJm2e2E92QLoK9tNIoFoND9bTr91CHLSVgGACN703VCFgdQUOP8rAqIBiVNbtntAOgpkS47000zZ4GwghzXkceki6GcS3YlvTtnCkfv7S+YI30E7BIbc38nQIYvQBAXVcc/QBIxjpEDWRUx7VYSxpbYANgQr8MdF/oQoBrBPgUaVi/zwDi5Y31Mi8I9gbOTlAkVTGuT+15IJAY7Hs7rdxJj3wYJ1jJ34zjJtRcnU7m3kFDUt1kgr0P6P0mt/muPrVXn2lzw2YPBbtlwwzcx72mmo2crXeqgIikrnK00FRvEsSNDs0+3/06Lo1wfj5jXTL8hoy9kOFWfmCAZMaxfgmZuBpILdiTCNcmOmiIR9qw4NZbdvpVxBiUL3oiZI0HGiuGi/f+/emsSe5bCOVYUt1UANQIMGraZ05dFdhocjG17dBkMLB9nbG3BwDBneF3aaaHR5uAC+cS9Hz4qmMk59SenUAM53jvK/IHfYBn13+m4ZHkyMToa9wZ/v6KpJATYBEJJdb3C4uF+zIA/dKrCu3fUA+LwqmhThK2VEztnn8NAmBFjTyIy7YkyAiOY7yMnyJlN/RAOhilGkgKQMM9xz6HgQc8umEPiBoSzqOY2j0sGcPijNg6+2FJBETkjKw9cudZlSxIdZPERSrYM7d13vf7sOpBiI3Nc4VaTC2i0JkOjLdARWYac0qjsyo57DIvnUM/PSI6EuN8epgUF1v7hjVs6d43fbJL5bwyBwQdjEg6+93mpT/AoVG8J+zjDOOW7v3lbU8+a0XLsjkCDY/JbUSt8rzTvNS3mswJti7uRqjju5V73x+Uci13alQ4LiJrrZa2cMOkuflDKdj7Fi3edTI7F00KSvc+n/Gwisdx3KbsB7xtXKYCU3jwLwj2PlJsG1fI0DNqJoXm+OTnhvelCz6GRUIL1DH4CxR0mZdmFpInuTs4ihbT5+59fIiow5qOGOSgm5v0MBvTBGfsFhYECkI2L/WVr7NYmM+egXhvju3c+4NZSGUPa1PLKHeRYkHYrpjpHeI76Ogi2Js4mJmaMnJE/+Le/2EVb/bb1GxSIKdoKEKvCvaGV5J41NG3kP2Te/+THgiTucSvZOt58uzoGLkEcKbtnKCJwr2fP5hWEWu/lgRDkb8d5RMILthTkUbGLwd72QaKdq3TP7r3ryTH3/SMoIwJ2/rA6CrYY2+DScKWjvu4vXufK/jfgdR1AJelmCSUz0vVDGgY61xMoYg3gtPk4eq4NIAAJPm985kWXQV7dm4JhlH1LVQS13X3Pmf7dwRW/xfBnh9bQNJ6UJ9IbqHEvV8ASI3jhlSezvPSSQJgm/FfKA+H9RxsSdz7pk7nrOZPV8GePSGVVB+L/3x8kt/XP+2d7XKqMBCGgyBfAqJABbVaUaGoVdG+939rZ1pGxVTZVFvrmfH5yQwMyWSXJfvuRkLARIjQ55Q7lJ6SDkDlZdAvMhxPjWN31q+ciTF8JkTKR/UNzySFpSfypYv2e5a8he/DrhcXEeOkbXBjiaHLlR3gTMJzVFTvz4m8Bk7lS32UsL1TfT8KGcBZQkgpE8QhisYFA9BglY8GIz9fhdszfVU0pbIbUk8ltVni1ft0vpRGbjnaskgxnnPYmk6FU3T1Pi3YE6er4oCfnpyh+gZTYuro6n1asCdOLUYZxXv6YjWtCJs6+xYT4vNH9LkjcXRwRK3jYU1gO4yCqN6/SjZH98PFtM6XpevG91cdphcK9uZMiARlVvLxPLtQyOfQG07igr3XNmk+vBtXtnwDdii0g6Y3nMTbjJjYlcPOm0Fl5L7j1SDaWRCQ1fu0YG8MKBlj9TAGtIrnK9gRcUYawzbYZSygOOIBKJ8CHEgAxlV2jD3m8ZzoMDV2KR78SwR705J5UW3WIX3p0ZBIsBrsIvjqfXHBHnPF2tzGQKe5dFwA6rE+qltjV9DkdNnzQrBH4GGHXuWdVKvoJpF0cEhiahbUkF1FbQOvRgj2eFoD7BlV+XljbyTe3l4DBfoLu5K5jjgtBaB5nbzDxAFbcG2+GcV4fWIrRLx/M6yn2UuS60IBaCKhzERm4mxtSCH7CVp9BQXRjF5OXXA0v6Xjj+fsh2gl+XTqtnlHcGoO5fUwUnFEIvz3U2T5f5fRwDizTeC/4oAk9DlObMB12G+jVZwNkhb+7uP3sNnPGMlsDGxm7AZovgopPz3bNgAsmBByYAF2JrPbYAwAuL0zX+iR2FoOzeK8ktsx9yUgyupfrgN6Q+T+fgew31vstjirDiANFjIvUAsYRSOMAUSBzG5PLbMA6McnWLVdVk1xhpXSTdlfoQ1NAJKXGfsrTtUwe8MYgDpNauxPST/fAx2v3atXji9oRioAyc0cdgc4O0WMPsnDbarVuAbaSXtU7J2q43xxJyfgfWIk3VgCCjq2GUcT6+OYRAUo0CfDRZ3dIdrsyfdiXUUJybTcZra+y/ctIzeM5fP6pbd+NrS7f9kHDx48ePDg/+Uf2FKb6M90vPwAAAAASUVORK5CYII=);background-repeat:no-repeat;background-size:cover}.mm-course-list>a{position:absolute;left:0;top:0;width:100%;height:100%;z-index:3}.mm-course-list>div{display:-webkit-box;display:-webkit-flex;display:flex;margin-left:15px;padding-bottom:10px;padding-right:15px;border-bottom:1px solid #ccc}@media screen and (max-width:420px){.mm-course-list>div{position:relative;border-bottom:0}.mm-course-list>div:before{content:\"\"!important;position:absolute;left:0;top:0;border:1px solid #ddd;border-width:0 0 1px;width:200%;height:199%;-webkit-transform:scale(.5);transform:scale(.5);box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0}}.mm-course-list img{-webkit-box-flex:0;-webkit-flex:0 0 120px;flex:0 0 120px;width:120px;height:70px;background-color:#ddd}.mm-course-list dl{-webkit-margin-before:0;-webkit-margin-after:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-left:10px;line-height:normal;-webkit-box-flex:1;-webkit-flex:1;flex:1;z-index:2}.mm-course-list dl dt{color:#333;font-size:14px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;text-overflow:ellipsis}.mm-course-list dl dd{-webkit-margin-start:0;font-size:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.mm-course-list dl dd.data{-webkit-box-align:left;-webkit-align-items:left;align-items:left;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.mm-course-list dl dd.data label{white-space:nowrap;font-size:8px;color:#757474}.mm-course-list object{z-index:9;position:absolute;right:20px;bottom:10px}.mm-course-list object span{display:-webkit-box;display:-webkit-flex;display:flex;color:#999;font-size:12px}.mm-course-list object label,.mm-course-list object span{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.mm-course-list object label{font-size:10px;padding:3px 0;border:1px solid;border-radius:3px;width:50px;display:inline-block;text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.mm-course-list object label.pingjia{color:#f95c25}.mm-course-list:last-of-type div:before{border-bottom:0}.mm-course-list:last-of-type{position:relative}.mm-course-list:last-of-type:before{content:\"\"!important;position:absolute;left:0;top:0;border:1px solid #ddd;border-width:0 0 1px;width:200%;height:199%;-webkit-transform:scale(.5);transform:scale(.5);box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0}@supports (font-size:1vw){.mm-course-list{padding-top:2.66667vw}.mm-course-list .over:after{right:5.33333vw;width:21.33333vw;height:21.33333vw}.mm-course-list>div{margin-left:4vw;padding-bottom:2.66667vw;padding-right:4vw}.mm-course-list img{-webkit-flex-basis:32vw;flex-basis:32vw;width:32vw;height:18.66667vw}.mm-course-list dl{padding-left:2.66667vw}.mm-course-list dl dt{font-size:3.73333vw}.mm-course-list dl dd{font-size:2.66667vw}.mm-course-list dl dd.data label{font-size:2.13333vw}.mm-course-list dl dd label{font-size:2.66667vw;padding:.8vw 0;border-radius:.8vw;width:13.33333vw}.mm-course-list object{right:5.33333vw;bottom:2.66667vw}.mm-course-list object span{font-size:3.2vw}.mm-course-list object label{font-size:2.66667vw;padding:.8vw 0;border-radius:.8vw;width:13.33333vw}}*{-webkit-tap-highlight-color:transparent;font-family:PingFang SC,Microsoft YaHei}.mm-course-tab{position:fixed;top:0;background-color:#fff;width:100%;height:100%;background-color:#f5f6f8}.mm-course-tab ::-webkit-scrollbar{display:none}.mm-course-tab .vux-tab-ink-bar{width:50px;margin:auto}.mm-course-tab .nomessage{text-align:center;margin-top:30%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.mm-course-tab .nomessage img{width:90px}.mm-course-tab .nomessage span{color:#999;font-size:12px;padding-top:25px}.mm-course-tab .vux-slider,.mm-course-tab .vux-slider .vux-swiper{height:100%!important}.mm-course-tab .vux-slider .vux-swiper .vux-swiper-item{overflow:scroll}.mm-course-tab .vux-slider .vux-swiper .vux-swiper-item .vux-center{padding-bottom:150px}.mm-course-tab .vux-tab-item{-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box!important;display:-webkit-flex!important;display:flex!important;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:12px!important;white-space:nowrap}.mm-course-tab .vux-tab-selected{font-size:14px!important}.mm-course-tab .ifshowall{width:50px;height:40px;position:fixed;top:0;right:0;z-index:9;background-color:#fff}.mm-course-tab .ifshowall:before{content:\"\";display:block;height:40px;width:20px;position:absolute;left:-10px;background-position:0;background-size:10px 40px;background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAABQBAMAAADrbkhEAAAAG1BMVEVmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmbKcypGAAAACXRSTlMBBgwTGR8pJC6fur8YAAAAkElEQVQoz7XT2w2FIBBFUekALEFKuJRwiRUYOzBWoO0LiWFPZHx96NeKDBCYQ/P8c0VGpRNsGe8EGVfZeUp/CltBH3bBtJb/C7JA1BgEh31W4ljROl/+Jq5lh7hc0EKTOcH5OfvvGd9wuj1xXcD1wXzrNY3oRWbdtwbaQ7th0FKiJAqSvvN4mkyiTAU8eyJUbCRPMDV3BoUEAAAAAElFTkSuQmCC)}.mm-course-tab .ifshowall i{height:100%;display:block;-webkit-transform:rotate(0);transform:rotate(0);-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAQBAMAAADzFNLhAAAAIVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYs5FxxAAAACnRSTlMAlaL27ImEeTImx3JaLgAAAGBJREFUCNdNzaENgFAMRdEHCQL39VdoLI4B0AzBDqyAZIWC65QkbfIvzzXnJtWxiw2bVhOrr6qXdnZu6t1gn6TZS+NHygCOAM4AJggmgCNIJriCCZZgAofzl+m/8bwV+wDRsR/hmSnGbwAAAABJRU5ErkJggg==\");background-repeat:no-repeat;background-position:50%;background-size:15px 8px;background-color:transparent}.mm-course-tab .ifshowall i.on{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.mm-course-tab .all{width:100%;background-color:#fff;top:0;height:44px;z-index:2;font-size:14px;color:#333;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-indent:10px;position:relative;position:fixed;padding-left:12px}.mm-course-tab .all:before{content:\"\"!important;position:absolute;left:0;top:0;border:1px solid #ddd;border-width:0 0 1px;width:198%;height:198%;-webkit-transform:scale(.5);transform:scale(.5);box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0}.mm-course-tab .alllist{position:fixed;top:40px;background-color:hsla(0,0%,100%,.9);width:100%;height:0;overflow:hidden;-webkit-transition:height .2s;transition:height .2s}.mm-course-tab .alllist.showallType{height:100%;-webkit-transition:height .5s;transition:height .5s}.mm-course-tab .alllist dl{-webkit-margin-before:0;-webkit-margin-after:0;padding:15px;display:flow-root}.mm-course-tab .alllist dl:after{content:\"\";display:block;clear:both}.mm-course-tab .alllist dl dd{-webkit-margin-start:0;float:left;font-size:12px;color:#282828;background-color:#fff;width:70px;height:24px;text-align:center;line-height:2;margin:0 15px 15px 0;border-radius:5%;position:relative;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mm-course-tab .alllist dl dd:before{content:\"\"!important;position:absolute;left:0;top:0;border:1px solid #ddd;border-width:1;width:198%;height:198%;-webkit-transform:scale(.5);transform:scale(.5);box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;border-color:#282828;border-radius:5px}.mm-course-tab .alllist dl dd.on{color:#fff;background-color:#dc2832;position:relative}.mm-course-tab .alllist dl dd.on:before{content:\"\"!important;position:absolute;left:0;top:0;border:1px solid #ddd;border-width:0;width:198%;height:198%;-webkit-transform:scale(.5);transform:scale(.5);box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0}.weui-loadmore_line{border-top:1px solid #e5e5e5;margin-top:2.4em}.weui-loadmore{width:65%;margin:1.5em auto;line-height:1.6em;font-size:14px;text-align:center}.weui-loadmore_line .weui-loadmore__tips{background-color:#f5f6f8!important}@supports (font-size:1vw){.mm-course-tab .vux-tab-item{font-size:3.2vw!important}.mm-course-tab .vux-slider .vux-swiper .vux-swiper-item .vux-center{padding-bottom:40vw}.mm-course-tab .nomessage img{width:24vw}.mm-course-tab .nomessage span{font-size:3.2vw;padding-top:6.66667vw}.mm-course-tab .vux-tab-ink-bar{width:13.33333vw}.mm-course-tab .vux-tab{height:11.73333vw}.mm-course-tab .vux-tab-selected{font-size:3.73333vw!important}.mm-course-tab .ifshowall{width:13.33333vw;height:10.66667vw;background-size:4vw 2.13333vw}.mm-course-tab .ifshowall:before{height:10.66667vw;width:5.33333vw;left:-2.66667vw;background-size:2.66667vw 10.66667vw}.mm-course-tab .all{height:11.73333vw;font-size:3.73333vw;text-indent:2.66667vw;padding-left:3.2vw}.mm-course-tab .alllist{top:10.66667vw}.mm-course-tab .alllist dl{padding:4vw}.mm-course-tab .alllist dl dd{font-size:3.2vw;width:18.66667vw;height:6.4vw;margin:0 4vw 4vw 0}}", ""]);

// exports


/***/ }),
/* 3 */
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
/* 4 */
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

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

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
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);

	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
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

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

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
/* 5 */
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
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
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
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
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
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof3=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};(function webpackUniversalModuleDefinition(root,factory){if(( false?'undefined':_typeof3(exports))==='object'&&( false?'undefined':_typeof3(module))==='object')module.exports=factory();else if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if((typeof exports==='undefined'?'undefined':_typeof3(exports))==='object')exports["index"]=factory();else root["index"]=factory();})(typeof self!=='undefined'?self:this,function(){return(/******/function(modules){// webpackBootstrap
/******/// The module cache
/******/var installedModules={};/******//******/// The require function
/******/function __webpack_require__(moduleId){/******//******/// Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/// Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******//******/// Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******//******/// Flag the module as loaded
/******/module.l=true;/******//******/// Return the exports of the module
/******/return module.exports;/******/}/******//******//******/// expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******//******/// expose the module cache
/******/__webpack_require__.c=installedModules;/******//******/// define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{/******/configurable:false,/******/enumerable:true,/******/get:getter/******/});/******/}/******/};/******//******/// getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******//******/// Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******//******/// __webpack_public_path__
/******/__webpack_require__.p="";/******//******/// Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=194);/******/}(/************************************************************************//******/[/* 0 *//***/function(module,exports,__webpack_require__){var global=__webpack_require__(2);var core=__webpack_require__(25);var hide=__webpack_require__(15);var redefine=__webpack_require__(16);var ctx=__webpack_require__(22);var PROTOTYPE='prototype';var $export=function $export(type,name,source){var IS_FORCED=type&$export.F;var IS_GLOBAL=type&$export.G;var IS_STATIC=type&$export.S;var IS_PROTO=type&$export.P;var IS_BIND=type&$export.B;var target=IS_GLOBAL?global:IS_STATIC?global[name]||(global[name]={}):(global[name]||{})[PROTOTYPE];var exports=IS_GLOBAL?core:core[name]||(core[name]={});var expProto=exports[PROTOTYPE]||(exports[PROTOTYPE]={});var key,own,out,exp;if(IS_GLOBAL)source=name;for(key in source){// contains in native
own=!IS_FORCED&&target&&target[key]!==undefined;// export native or passed
out=(own?target:source)[key];// bind timers to global for call from export context
exp=IS_BIND&&own?ctx(out,global):IS_PROTO&&typeof out=='function'?ctx(Function.call,out):out;// extend global
if(target)redefine(target,key,out,type&$export.U);// export
if(exports[key]!=out)hide(exports,key,exp);if(IS_PROTO&&expProto[key]!=out)expProto[key]=out;}};global.core=core;// type bitmap
$export.F=1;// forced
$export.G=2;// global
$export.S=4;// static
$export.P=8;// proto
$export.B=16;// bind
$export.W=32;// wrap
$export.U=64;// safe
$export.R=128;// real proto method for `library`
module.exports=$export;/***/},/* 1 *//***/function(module,exports,__webpack_require__){var isObject=__webpack_require__(5);module.exports=function(it){if(!isObject(it))throw TypeError(it+' is not an object!');return it;};/***/},/* 2 *//***/function(module,exports){// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global=module.exports=typeof window!='undefined'&&window.Math==Math?window:typeof self!='undefined'&&self.Math==Math?self// eslint-disable-next-line no-new-func
:Function('return this')();if(typeof __g=='number')__g=global;// eslint-disable-line no-undef
/***/},/* 3 *//***/function(module,exports){module.exports=function(exec){try{return!!exec();}catch(e){return true;}};/***/},/* 4 *//***/function(module,exports){/* globals __VUE_SSR_CONTEXT__ */// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle
module.exports=function normalizeComponent(rawScriptExports,compiledTemplate,injectStyles,scopeId,moduleIdentifier/* server only */){var esModule;var scriptExports=rawScriptExports=rawScriptExports||{};// ES6 modules interop
var type=_typeof3(rawScriptExports.default);if(type==='object'||type==='function'){esModule=rawScriptExports;scriptExports=rawScriptExports.default;}// Vue.extend constructor export interop
var options=typeof scriptExports==='function'?scriptExports.options:scriptExports;// render functions
if(compiledTemplate){options.render=compiledTemplate.render;options.staticRenderFns=compiledTemplate.staticRenderFns;}// scopedId
if(scopeId){options._scopeId=scopeId;}var hook;if(moduleIdentifier){// server build
hook=function hook(context){// 2.3 injection
context=context||// cached call
this.$vnode&&this.$vnode.ssrContext||// stateful
this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext;// functional
// 2.2 with runInNewContext: true
if(!context&&typeof __VUE_SSR_CONTEXT__!=='undefined'){context=__VUE_SSR_CONTEXT__;}// inject component styles
if(injectStyles){injectStyles.call(this,context);}// register component module identifier for async chunk inferrence
if(context&&context._registeredComponents){context._registeredComponents.add(moduleIdentifier);}};// used by ssr in case component is cached and beforeCreate
// never gets called
options._ssrRegister=hook;}else if(injectStyles){hook=injectStyles;}if(hook){var functional=options.functional;var existing=functional?options.render:options.beforeCreate;if(!functional){// inject component registration as beforeCreate hook
options.beforeCreate=existing?[].concat(existing,hook):[hook];}else{// register for functioal component in vue file
options.render=function renderWithStyleInjection(h,context){hook.call(context);return existing(h,context);};}}return{esModule:esModule,exports:scriptExports,options:options};};/***/},/* 5 *//***/function(module,exports){var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};module.exports=function(it){return(typeof it==='undefined'?'undefined':_typeof(it))==='object'?it!==null:typeof it==='function';};/***/},/* 6 *//***/function(module,exports,__webpack_require__){var store=__webpack_require__(57)('wks');var uid=__webpack_require__(37);var _Symbol=__webpack_require__(2).Symbol;var USE_SYMBOL=typeof _Symbol=='function';var $exports=module.exports=function(name){return store[name]||(store[name]=USE_SYMBOL&&_Symbol[name]||(USE_SYMBOL?_Symbol:uid)('Symbol.'+name));};$exports.store=store;/***/},/* 7 *//***/function(module,exports,__webpack_require__){// Thank's IE8 for his funny defineProperty
module.exports=!__webpack_require__(3)(function(){return Object.defineProperty({},'a',{get:function get(){return 7;}}).a!=7;});/***/},/* 8 *//***/function(module,exports,__webpack_require__){var anObject=__webpack_require__(1);var IE8_DOM_DEFINE=__webpack_require__(134);var toPrimitive=__webpack_require__(26);var dP=Object.defineProperty;exports.f=__webpack_require__(7)?Object.defineProperty:function defineProperty(O,P,Attributes){anObject(O);P=toPrimitive(P,true);anObject(Attributes);if(IE8_DOM_DEFINE)try{return dP(O,P,Attributes);}catch(e){/* empty */}if('get'in Attributes||'set'in Attributes)throw TypeError('Accessors not supported!');if('value'in Attributes)O[P]=Attributes.value;return O;};/***/},/* 9 *//***/function(module,exports,__webpack_require__){// 7.1.15 ToLength
var toInteger=__webpack_require__(28);var min=Math.min;module.exports=function(it){return it>0?min(toInteger(it),0x1fffffffffffff):0;// pow(2, 53) - 1 == 9007199254740991
};/***/},/* 10 *//***/function(module,exports){module.exports=function(module){if(!module.webpackPolyfill){module.deprecate=function(){};module.paths=[];// module.parent = undefined by default
if(!module.children)module.children=[];Object.defineProperty(module,"loaded",{enumerable:true,get:function get(){return module.l;}});Object.defineProperty(module,"id",{enumerable:true,get:function get(){return module.i;}});module.webpackPolyfill=1;}return module;};/***/},/* 11 *//***/function(module,exports,__webpack_require__){// 7.1.13 ToObject(argument)
var defined=__webpack_require__(27);module.exports=function(it){return Object(defined(it));};/***/},/* 12 *//***/function(module,exports){module.exports=function(it){if(typeof it!='function')throw TypeError(it+' is not a function!');return it;};/***/},/* 13 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};!(__WEBPACK_AMD_DEFINE_RESULT__=function(require,exports,module){"use strict";var SUBSTITUTE_REG=/\\?\{([^{}]+)\}/g,EMPTY='';var RE_TRIM=/^[\s\xa0]+|[\s\xa0]+$/g,trim=String.prototype.trim;var _trim=trim?function(str){return str==null?EMPTY:trim.call(str);}:function(str){return str==null?EMPTY:(str+'').replace(RE_TRIM,EMPTY);};function upperCase(){return arguments[1].toUpperCase();}function Empty(){}function createObject(proto,constructor){var newProto;if(Object.create){newProto=Object.create(proto);}else{Empty.prototype=proto;newProto=new Empty();}newProto.constructor=constructor;return newProto;}function getNodes(node,rootNode){if(!node)return;if(node.nodeType)return[node];var rootNode=rootNode&&rootNode.nodeType?rootNode:document;if(node&&typeof node==="string"){return rootNode.querySelectorAll(node);}return;}// Useful for temporary DOM ids.
var idCounter=0;var getOffsetTop=function getOffsetTop(el){var offset=el.offsetTop;if(el.offsetParent!=null)offset+=getOffsetTop(el.offsetParent);return offset;};var getOffsetLeft=function getOffsetLeft(el){var offset=el.offsetLeft;if(el.offsetParent!=null)offset+=getOffsetLeft(el.offsetParent);return offset;};var Util={// Is a given variable an object?
isObject:function isObject(obj){return obj===Object(obj);},isArray:Array.isArray||function(obj){return toString.call(obj)=='[object Array]';},// Is a given array, string, or object empty?
// An "empty" object has no enumerable own-properties.
isEmpty:function isEmpty(obj){if(obj==null)return true;if(this.isArray(obj)||this.isString(obj))return obj.length===0;for(var key in obj){if(this.has(obj,key))return false;}return true;},mix:function mix(to,from,deep){for(var i in from){to[i]=from[i];}return to;},extend:function extend(r,s,px,sx){if(!s||!r){return r;}var sp=s.prototype,rp;// add prototype chain
rp=createObject(sp,r);r.prototype=this.mix(rp,r.prototype);r.superclass=createObject(sp,s);// add prototype overrides
if(px){this.mix(rp,px);}// add object overrides
if(sx){this.mix(r,sx);}return r;},/**
   * test whether a string start with a specified substring
   * @param {String} str the whole string
   * @param {String} prefix a specified substring
   * @return {Boolean} whether str start with prefix
   * @member util
   */startsWith:function startsWith(str,prefix){return str.lastIndexOf(prefix,0)===0;},/**
   * test whether a string end with a specified substring
   * @param {String} str the whole string
   * @param {String} suffix a specified substring
   * @return {Boolean} whether str end with suffix
   * @member util
   */endsWith:function endsWith(str,suffix){var ind=str.length-suffix.length;return ind>=0&&str.indexOf(suffix,ind)===ind;},/**
   * Removes the whitespace from the beginning and end of a string.
   * @method
   * @member util
   */trim:_trim,/**
   * Substitutes keywords in a string using an object/array.
   * Removes undef keywords and ignores escaped keywords.
   * @param {String} str template string
   * @param {Object} o json data
   * @member util
   * @param {RegExp} [regexp] to match a piece of template string
   */substitute:function substitute(str,o,regexp){if(typeof str!=='string'||!o){return str;}return str.replace(regexp||SUBSTITUTE_REG,function(match,name){if(match.charAt(0)==='\\'){return match.slice(1);}return o[name]===undefined?EMPTY:o[name];});},/**
   * vendors
   * @return { String } webkit|moz|ms|o
   * @memberOf Util
   */vendor:function(){var el=document.createElement('div').style;var vendors=['t','webkitT','MozT','msT','OT'],transform,i=0,l=vendors.length;for(;i<l;i++){transform=vendors[i]+'ransform';if(transform in el)return vendors[i].substr(0,vendors[i].length-1);}return false;}(),/**
   *  add vendor to attribute
   *  @memberOf Util
   *  @param {String} attrName name of attribute
   *  @return { String }
   **/prefixStyle:function prefixStyle(attrName){if(this.vendor===false)return false;if(this.vendor==='')return attrName;return this.vendor+attrName.charAt(0).toUpperCase()+attrName.substr(1);},/**
   * judge if has class
   * @memberOf Util
   * @param  {HTMLElement}  el
   * @param  {String}  className
   * @return {Boolean}
   */hasClass:function hasClass(el,className){return el&&el.className&&className&&el.className.indexOf(className)!=-1;},/**
   * add className for the element
   * @memberOf Util
   * @param  {HTMLElement}  el
   * @param  {String}  className
   */addClass:function addClass(el,className){if(el&&className&&!this.hasClass(el,className)){el.className+=" "+className;}},/**
   * remove className for the element
   * @memberOf Util
   * @param  {HTMLElement}  el
   * @param  {String}  className
   */removeClass:function removeClass(el,className){if(el&&el.className&&className){el.className=el.className.replace(className,"");}},/**
   * remove an element
   * @memberOf Util
   * @param  {HTMLElement}  el
   */remove:function remove(el){if(!el||!el.parentNode)return;el.parentNode.removeChild(el);},/**
   * get offset top
   * @memberOf Util
   * @param  {HTMLElement}   el
   * @return {Number} offsetTop
   */getOffsetTop:getOffsetTop,/**
   * get offset left
   * @memberOf Util
   * @param  {HTMLElement}  el
   * @return {Number} offsetLeft
   */getOffsetLeft:getOffsetLeft,/**
   * get offset left
   * @memberOf Util
   * @param  {HTMLElement} el
   * @param  {String} selector
   * @param  {HTMLElement} rootNode
   * @return {HTMLElement} parent element
   */findParentEl:function findParentEl(el,selector,rootNode){var rs=null,parent=null;var type=/^#/.test(selector)?"id":/^\./.test(selector)?"class":"tag";var sel=selector.replace(/\.|#/g,"");if(rootNode&&typeof rootNode==="string"){rootNode=document.querySelector(rootNode);}rootNode=rootNode||document.body;if(!el||!selector)return;if(type=="class"&&el.className&&el.className.match(sel)){return el;}else if(type=="id"&&el.id&&_trim(el.id)==sel){return el;}else if(type=="tag"&&el.tagName.toLowerCase()==sel){return el;}while(!rs){if(parent==rootNode)break;parent=el.parentNode;if(!parent)break;if(type=="class"&&parent.className&&parent.className.match(sel)||type=="id"&&parent.id&&_trim(parent.id)==sel||type=="tag"&&parent.tagName&&parent.tagName.toLowerCase()==sel){rs=parent;return rs;break;}else{el=parent;}}return null;},/**
   * Generate a unique integer id (unique within the entire client session).
   * @param  {String} prefix
   * @return {String} guid
   */guid:function guid(prefix){var id=++idCounter+'';return prefix?prefix+id:id;},/**
   * judge if is an android os
   * @return {Boolean} [description]
   */isAndroid:function isAndroid(){return /Android /.test(window.navigator.appVersion);},/**
   * judge if is an android device with low  performance
   * @return {Boolean}
   */isBadAndroid:function isBadAndroid(){return /Android /.test(window.navigator.appVersion)&&!/Chrome\/\d/.test(window.navigator.appVersion);},px2Num:function px2Num(px){return Number(px.replace(/px/,''));},getNodes:getNodes,getNode:function getNode(node,rootNode){var nodes=getNodes(node,rootNode);return nodes&&nodes[0];},stringifyStyle:function stringifyStyle(style){var styleStr="";for(var i in style){styleStr+=[i,":",style[i],";"].join("");}return styleStr;}};// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
var names=['Arguments','Function','String','Number','Date','RegExp'];for(var i=0;i<names.length;i++){Util['is'+names[i]]=function(obj){return toString.call(obj)=='[object '+names[i]+']';};}if((false?'undefined':_typeof(module))=='object'&&module.exports){module.exports=Util;}/** ignored by jsdoc **/else{return Util;}}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(10)(module));/***/},/* 14 *//***/function(module,exports){var hasOwnProperty={}.hasOwnProperty;module.exports=function(it,key){return hasOwnProperty.call(it,key);};/***/},/* 15 *//***/function(module,exports,__webpack_require__){var dP=__webpack_require__(8);var createDesc=__webpack_require__(36);module.exports=__webpack_require__(7)?function(object,key,value){return dP.f(object,key,createDesc(1,value));}:function(object,key,value){object[key]=value;return object;};/***/},/* 16 *//***/function(module,exports,__webpack_require__){var global=__webpack_require__(2);var hide=__webpack_require__(15);var has=__webpack_require__(14);var SRC=__webpack_require__(37)('src');var TO_STRING='toString';var $toString=Function[TO_STRING];var TPL=(''+$toString).split(TO_STRING);__webpack_require__(25).inspectSource=function(it){return $toString.call(it);};(module.exports=function(O,key,val,safe){var isFunction=typeof val=='function';if(isFunction)has(val,'name')||hide(val,'name',key);if(O[key]===val)return;if(isFunction)has(val,SRC)||hide(val,SRC,O[key]?''+O[key]:TPL.join(String(key)));if(O===global){O[key]=val;}else if(!safe){delete O[key];hide(O,key,val);}else if(O[key]){O[key]=val;}else{hide(O,key,val);}// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype,TO_STRING,function toString(){return typeof this=='function'&&this[SRC]||$toString.call(this);});/***/},/* 17 *//***/function(module,exports,__webpack_require__){// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject=__webpack_require__(53);var defined=__webpack_require__(27);module.exports=function(it){return IObject(defined(it));};/***/},/* 18 *//***/function(module,exports,__webpack_require__){var $export=__webpack_require__(0);var fails=__webpack_require__(3);var defined=__webpack_require__(27);var quot=/"/g;// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML=function createHTML(string,tag,attribute,value){var S=String(defined(string));var p1='<'+tag;if(attribute!=='')p1+=' '+attribute+'="'+String(value).replace(quot,'&quot;')+'"';return p1+'>'+S+'</'+tag+'>';};module.exports=function(NAME,exec){var O={};O[NAME]=exec(createHTML);$export($export.P+$export.F*fails(function(){var test=''[NAME]('"');return test!==test.toLowerCase()||test.split('"').length>3;}),'String',O);};/***/},/* 19 *//***/function(module,exports,__webpack_require__){var pIE=__webpack_require__(54);var createDesc=__webpack_require__(36);var toIObject=__webpack_require__(17);var toPrimitive=__webpack_require__(26);var has=__webpack_require__(14);var IE8_DOM_DEFINE=__webpack_require__(134);var gOPD=Object.getOwnPropertyDescriptor;exports.f=__webpack_require__(7)?gOPD:function getOwnPropertyDescriptor(O,P){O=toIObject(O);P=toPrimitive(P,true);if(IE8_DOM_DEFINE)try{return gOPD(O,P);}catch(e){/* empty */}if(has(O,P))return createDesc(!pIE.f.call(O,P),O[P]);};/***/},/* 20 *//***/function(module,exports,__webpack_require__){// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has=__webpack_require__(14);var toObject=__webpack_require__(11);var IE_PROTO=__webpack_require__(82)('IE_PROTO');var ObjectProto=Object.prototype;module.exports=Object.getPrototypeOf||function(O){O=toObject(O);if(has(O,IE_PROTO))return O[IE_PROTO];if(typeof O.constructor=='function'&&O instanceof O.constructor){return O.constructor.prototype;}return O instanceof Object?ObjectProto:null;};/***/},/* 21 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};!(__WEBPACK_AMD_DEFINE_RESULT__=function(require,exports,module){"use strict";var Util=__webpack_require__(13);var Events=__webpack_require__(202);/** 
       @constructor 
       @mixes Events
       */var Base=function Base(){};Util.mix(Base.prototype,Events);Util.mix(Base.prototype,{/**
   * @memberof Base
   * @param  {object} plugin plug a plugin
   */plug:function plug(plugin){var self=this;if(!plugin||!plugin.pluginId)return;if(!self.__plugins){self.__plugins=[];}var __plugin=self.getPlugin(plugin.pluginId);__plugin&&self.unplug(plugin.pluginId);plugin.pluginInitializer(self);self.__plugins.push(plugin);return self;},/**
   * @memberof Base
   * @param  {object|string} plugin unplug a plugin by pluginId or plugin instance
   */unplug:function unplug(plugin){var self=this;if(!plugin||!self.__plugins)return;var _plugin=typeof plugin=="string"?self.getPlugin(plugin):plugin;_plugin.pluginDestructor(self);for(var i=0,l=self.__plugins.length;i<l;i++){if(self.__plugins[i]==_plugin){return self.__plugins.splice(i,1);}}},/**
   * @memberof Base
   * @param  {object|string} plugin get plugin by pluginId
   */getPlugin:function getPlugin(pluginId){var self=this;var plugins=[];if(!self.__plugins)return;for(var i=0,l=self.__plugins.length;i<l;i++){if(self.__plugins[i]&&self.__plugins[i].pluginId==pluginId){plugins.push(self.__plugins[i]);}}return plugins.length>1?plugins:plugins[0]||null;}});if((false?'undefined':_typeof(module))=='object'&&module.exports){module.exports=Base;}/** ignored by jsdoc **/else{return Base;}}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(10)(module));/***/},/* 22 *//***/function(module,exports,__webpack_require__){// optional / simple context binding
var aFunction=__webpack_require__(12);module.exports=function(fn,that,length){aFunction(fn);if(that===undefined)return fn;switch(length){case 1:return function(a){return fn.call(that,a);};case 2:return function(a,b){return fn.call(that,a,b);};case 3:return function(a,b,c){return fn.call(that,a,b,c);};}return function()/* ...args */{return fn.apply(that,arguments);};};/***/},/* 23 *//***/function(module,exports){var toString={}.toString;module.exports=function(it){return toString.call(it).slice(8,-1);};/***/},/* 24 *//***/function(module,exports,__webpack_require__){"use strict";var fails=__webpack_require__(3);module.exports=function(method,arg){return!!method&&fails(function(){// eslint-disable-next-line no-useless-call
arg?method.call(null,function(){/* empty */},1):method.call(null);});};/***/},/* 25 *//***/function(module,exports){var core=module.exports={version:'2.5.0'};if(typeof __e=='number')__e=core;// eslint-disable-line no-undef
/***/},/* 26 *//***/function(module,exports,__webpack_require__){// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject=__webpack_require__(5);// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports=function(it,S){if(!isObject(it))return it;var fn,val;if(S&&typeof(fn=it.toString)=='function'&&!isObject(val=fn.call(it)))return val;if(typeof(fn=it.valueOf)=='function'&&!isObject(val=fn.call(it)))return val;if(!S&&typeof(fn=it.toString)=='function'&&!isObject(val=fn.call(it)))return val;throw TypeError("Can't convert object to primitive value");};/***/},/* 27 *//***/function(module,exports){// 7.2.1 RequireObjectCoercible(argument)
module.exports=function(it){if(it==undefined)throw TypeError("Can't call method on  "+it);return it;};/***/},/* 28 *//***/function(module,exports){// 7.1.4 ToInteger
var ceil=Math.ceil;var floor=Math.floor;module.exports=function(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it);};/***/},/* 29 *//***/function(module,exports,__webpack_require__){// most Object methods by ES6 should accept primitives
var $export=__webpack_require__(0);var core=__webpack_require__(25);var fails=__webpack_require__(3);module.exports=function(KEY,exec){var fn=(core.Object||{})[KEY]||Object[KEY];var exp={};exp[KEY]=exec(fn);$export($export.S+$export.F*fails(function(){fn(1);}),'Object',exp);};/***/},/* 30 *//***/function(module,exports,__webpack_require__){// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx=__webpack_require__(22);var IObject=__webpack_require__(53);var toObject=__webpack_require__(11);var toLength=__webpack_require__(9);var asc=__webpack_require__(99);module.exports=function(TYPE,$create){var IS_MAP=TYPE==1;var IS_FILTER=TYPE==2;var IS_SOME=TYPE==3;var IS_EVERY=TYPE==4;var IS_FIND_INDEX=TYPE==6;var NO_HOLES=TYPE==5||IS_FIND_INDEX;var create=$create||asc;return function($this,callbackfn,that){var O=toObject($this);var self=IObject(O);var f=ctx(callbackfn,that,3);var length=toLength(self.length);var index=0;var result=IS_MAP?create($this,length):IS_FILTER?create($this,0):undefined;var val,res;for(;length>index;index++){if(NO_HOLES||index in self){val=self[index];res=f(val,index,O);if(TYPE){if(IS_MAP)result[index]=res;// map
else if(res)switch(TYPE){case 3:return true;// some
case 5:return val;// find
case 6:return index;// findIndex
case 2:result.push(val);// filter
}else if(IS_EVERY)return false;// every
}}}return IS_FIND_INDEX?-1:IS_SOME||IS_EVERY?IS_EVERY:result;};};/***/},/* 31 *//***/function(module,exports,__webpack_require__){"use strict";var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};if(__webpack_require__(7)){var LIBRARY=__webpack_require__(38);var global=__webpack_require__(2);var fails=__webpack_require__(3);var $export=__webpack_require__(0);var $typed=__webpack_require__(68);var $buffer=__webpack_require__(105);var ctx=__webpack_require__(22);var anInstance=__webpack_require__(43);var propertyDesc=__webpack_require__(36);var hide=__webpack_require__(15);var redefineAll=__webpack_require__(45);var toInteger=__webpack_require__(28);var toLength=__webpack_require__(9);var toIndex=__webpack_require__(159);var toAbsoluteIndex=__webpack_require__(39);var toPrimitive=__webpack_require__(26);var has=__webpack_require__(14);var classof=__webpack_require__(55);var isObject=__webpack_require__(5);var toObject=__webpack_require__(11);var isArrayIter=__webpack_require__(96);var create=__webpack_require__(40);var getPrototypeOf=__webpack_require__(20);var gOPN=__webpack_require__(41).f;var getIterFn=__webpack_require__(98);var uid=__webpack_require__(37);var wks=__webpack_require__(6);var createArrayMethod=__webpack_require__(30);var createArrayIncludes=__webpack_require__(58);var speciesConstructor=__webpack_require__(66);var ArrayIterators=__webpack_require__(101);var Iterators=__webpack_require__(50);var $iterDetect=__webpack_require__(63);var setSpecies=__webpack_require__(42);var arrayFill=__webpack_require__(100);var arrayCopyWithin=__webpack_require__(149);var $DP=__webpack_require__(8);var $GOPD=__webpack_require__(19);var dP=$DP.f;var gOPD=$GOPD.f;var RangeError=global.RangeError;var TypeError=global.TypeError;var Uint8Array=global.Uint8Array;var ARRAY_BUFFER='ArrayBuffer';var SHARED_BUFFER='Shared'+ARRAY_BUFFER;var BYTES_PER_ELEMENT='BYTES_PER_ELEMENT';var PROTOTYPE='prototype';var ArrayProto=Array[PROTOTYPE];var $ArrayBuffer=$buffer.ArrayBuffer;var $DataView=$buffer.DataView;var arrayForEach=createArrayMethod(0);var arrayFilter=createArrayMethod(2);var arraySome=createArrayMethod(3);var arrayEvery=createArrayMethod(4);var arrayFind=createArrayMethod(5);var arrayFindIndex=createArrayMethod(6);var arrayIncludes=createArrayIncludes(true);var arrayIndexOf=createArrayIncludes(false);var arrayValues=ArrayIterators.values;var arrayKeys=ArrayIterators.keys;var arrayEntries=ArrayIterators.entries;var arrayLastIndexOf=ArrayProto.lastIndexOf;var arrayReduce=ArrayProto.reduce;var arrayReduceRight=ArrayProto.reduceRight;var arrayJoin=ArrayProto.join;var arraySort=ArrayProto.sort;var arraySlice=ArrayProto.slice;var arrayToString=ArrayProto.toString;var arrayToLocaleString=ArrayProto.toLocaleString;var ITERATOR=wks('iterator');var TAG=wks('toStringTag');var TYPED_CONSTRUCTOR=uid('typed_constructor');var DEF_CONSTRUCTOR=uid('def_constructor');var ALL_CONSTRUCTORS=$typed.CONSTR;var TYPED_ARRAY=$typed.TYPED;var VIEW=$typed.VIEW;var WRONG_LENGTH='Wrong length!';var $map=createArrayMethod(1,function(O,length){return allocate(speciesConstructor(O,O[DEF_CONSTRUCTOR]),length);});var LITTLE_ENDIAN=fails(function(){// eslint-disable-next-line no-undef
return new Uint8Array(new Uint16Array([1]).buffer)[0]===1;});var FORCED_SET=!!Uint8Array&&!!Uint8Array[PROTOTYPE].set&&fails(function(){new Uint8Array(1).set({});});var toOffset=function toOffset(it,BYTES){var offset=toInteger(it);if(offset<0||offset%BYTES)throw RangeError('Wrong offset!');return offset;};var validate=function validate(it){if(isObject(it)&&TYPED_ARRAY in it)return it;throw TypeError(it+' is not a typed array!');};var allocate=function allocate(C,length){if(!(isObject(C)&&TYPED_CONSTRUCTOR in C)){throw TypeError('It is not a typed array constructor!');}return new C(length);};var speciesFromList=function speciesFromList(O,list){return fromList(speciesConstructor(O,O[DEF_CONSTRUCTOR]),list);};var fromList=function fromList(C,list){var index=0;var length=list.length;var result=allocate(C,length);while(length>index){result[index]=list[index++];}return result;};var addGetter=function addGetter(it,key,internal){dP(it,key,{get:function get(){return this._d[internal];}});};var $from=function from(source/* , mapfn, thisArg */){var O=toObject(source);var aLen=arguments.length;var mapfn=aLen>1?arguments[1]:undefined;var mapping=mapfn!==undefined;var iterFn=getIterFn(O);var i,length,values,result,step,iterator;if(iterFn!=undefined&&!isArrayIter(iterFn)){for(iterator=iterFn.call(O),values=[],i=0;!(step=iterator.next()).done;i++){values.push(step.value);}O=values;}if(mapping&&aLen>2)mapfn=ctx(mapfn,arguments[2],2);for(i=0,length=toLength(O.length),result=allocate(this,length);length>i;i++){result[i]=mapping?mapfn(O[i],i):O[i];}return result;};var $of=function of()/* ...items */{var index=0;var length=arguments.length;var result=allocate(this,length);while(length>index){result[index]=arguments[index++];}return result;};// iOS Safari 6.x fails here
var TO_LOCALE_BUG=!!Uint8Array&&fails(function(){arrayToLocaleString.call(new Uint8Array(1));});var $toLocaleString=function toLocaleString(){return arrayToLocaleString.apply(TO_LOCALE_BUG?arraySlice.call(validate(this)):validate(this),arguments);};var proto={copyWithin:function copyWithin(target,start/* , end */){return arrayCopyWithin.call(validate(this),target,start,arguments.length>2?arguments[2]:undefined);},every:function every(callbackfn/* , thisArg */){return arrayEvery(validate(this),callbackfn,arguments.length>1?arguments[1]:undefined);},fill:function fill(value/* , start, end */){// eslint-disable-line no-unused-vars
return arrayFill.apply(validate(this),arguments);},filter:function filter(callbackfn/* , thisArg */){return speciesFromList(this,arrayFilter(validate(this),callbackfn,arguments.length>1?arguments[1]:undefined));},find:function find(predicate/* , thisArg */){return arrayFind(validate(this),predicate,arguments.length>1?arguments[1]:undefined);},findIndex:function findIndex(predicate/* , thisArg */){return arrayFindIndex(validate(this),predicate,arguments.length>1?arguments[1]:undefined);},forEach:function forEach(callbackfn/* , thisArg */){arrayForEach(validate(this),callbackfn,arguments.length>1?arguments[1]:undefined);},indexOf:function indexOf(searchElement/* , fromIndex */){return arrayIndexOf(validate(this),searchElement,arguments.length>1?arguments[1]:undefined);},includes:function includes(searchElement/* , fromIndex */){return arrayIncludes(validate(this),searchElement,arguments.length>1?arguments[1]:undefined);},join:function join(separator){// eslint-disable-line no-unused-vars
return arrayJoin.apply(validate(this),arguments);},lastIndexOf:function lastIndexOf(searchElement/* , fromIndex */){// eslint-disable-line no-unused-vars
return arrayLastIndexOf.apply(validate(this),arguments);},map:function map(mapfn/* , thisArg */){return $map(validate(this),mapfn,arguments.length>1?arguments[1]:undefined);},reduce:function reduce(callbackfn/* , initialValue */){// eslint-disable-line no-unused-vars
return arrayReduce.apply(validate(this),arguments);},reduceRight:function reduceRight(callbackfn/* , initialValue */){// eslint-disable-line no-unused-vars
return arrayReduceRight.apply(validate(this),arguments);},reverse:function reverse(){var that=this;var length=validate(that).length;var middle=Math.floor(length/2);var index=0;var value;while(index<middle){value=that[index];that[index++]=that[--length];that[length]=value;}return that;},some:function some(callbackfn/* , thisArg */){return arraySome(validate(this),callbackfn,arguments.length>1?arguments[1]:undefined);},sort:function sort(comparefn){return arraySort.call(validate(this),comparefn);},subarray:function subarray(begin,end){var O=validate(this);var length=O.length;var $begin=toAbsoluteIndex(begin,length);return new(speciesConstructor(O,O[DEF_CONSTRUCTOR]))(O.buffer,O.byteOffset+$begin*O.BYTES_PER_ELEMENT,toLength((end===undefined?length:toAbsoluteIndex(end,length))-$begin));}};var $slice=function slice(start,end){return speciesFromList(this,arraySlice.call(validate(this),start,end));};var $set=function set(arrayLike/* , offset */){validate(this);var offset=toOffset(arguments[1],1);var length=this.length;var src=toObject(arrayLike);var len=toLength(src.length);var index=0;if(len+offset>length)throw RangeError(WRONG_LENGTH);while(index<len){this[offset+index]=src[index++];}};var $iterators={entries:function entries(){return arrayEntries.call(validate(this));},keys:function keys(){return arrayKeys.call(validate(this));},values:function values(){return arrayValues.call(validate(this));}};var isTAIndex=function isTAIndex(target,key){return isObject(target)&&target[TYPED_ARRAY]&&(typeof key==='undefined'?'undefined':_typeof(key))!='symbol'&&key in target&&String(+key)==String(key);};var $getDesc=function getOwnPropertyDescriptor(target,key){return isTAIndex(target,key=toPrimitive(key,true))?propertyDesc(2,target[key]):gOPD(target,key);};var $setDesc=function defineProperty(target,key,desc){if(isTAIndex(target,key=toPrimitive(key,true))&&isObject(desc)&&has(desc,'value')&&!has(desc,'get')&&!has(desc,'set')// TODO: add validation descriptor w/o calling accessors
&&!desc.configurable&&(!has(desc,'writable')||desc.writable)&&(!has(desc,'enumerable')||desc.enumerable)){target[key]=desc.value;return target;}return dP(target,key,desc);};if(!ALL_CONSTRUCTORS){$GOPD.f=$getDesc;$DP.f=$setDesc;}$export($export.S+$export.F*!ALL_CONSTRUCTORS,'Object',{getOwnPropertyDescriptor:$getDesc,defineProperty:$setDesc});if(fails(function(){arrayToString.call({});})){arrayToString=arrayToLocaleString=function toString(){return arrayJoin.call(this);};}var $TypedArrayPrototype$=redefineAll({},proto);redefineAll($TypedArrayPrototype$,$iterators);hide($TypedArrayPrototype$,ITERATOR,$iterators.values);redefineAll($TypedArrayPrototype$,{slice:$slice,set:$set,constructor:function constructor(){/* noop */},toString:arrayToString,toLocaleString:$toLocaleString});addGetter($TypedArrayPrototype$,'buffer','b');addGetter($TypedArrayPrototype$,'byteOffset','o');addGetter($TypedArrayPrototype$,'byteLength','l');addGetter($TypedArrayPrototype$,'length','e');dP($TypedArrayPrototype$,TAG,{get:function get(){return this[TYPED_ARRAY];}});// eslint-disable-next-line max-statements
module.exports=function(KEY,BYTES,wrapper,CLAMPED){CLAMPED=!!CLAMPED;var NAME=KEY+(CLAMPED?'Clamped':'')+'Array';var GETTER='get'+KEY;var SETTER='set'+KEY;var TypedArray=global[NAME];var Base=TypedArray||{};var TAC=TypedArray&&getPrototypeOf(TypedArray);var FORCED=!TypedArray||!$typed.ABV;var O={};var TypedArrayPrototype=TypedArray&&TypedArray[PROTOTYPE];var getter=function getter(that,index){var data=that._d;return data.v[GETTER](index*BYTES+data.o,LITTLE_ENDIAN);};var setter=function setter(that,index,value){var data=that._d;if(CLAMPED)value=(value=Math.round(value))<0?0:value>0xff?0xff:value&0xff;data.v[SETTER](index*BYTES+data.o,value,LITTLE_ENDIAN);};var addElement=function addElement(that,index){dP(that,index,{get:function get(){return getter(this,index);},set:function set(value){return setter(this,index,value);},enumerable:true});};if(FORCED){TypedArray=wrapper(function(that,data,$offset,$length){anInstance(that,TypedArray,NAME,'_d');var index=0;var offset=0;var buffer,byteLength,length,klass;if(!isObject(data)){length=toIndex(data);byteLength=length*BYTES;buffer=new $ArrayBuffer(byteLength);}else if(data instanceof $ArrayBuffer||(klass=classof(data))==ARRAY_BUFFER||klass==SHARED_BUFFER){buffer=data;offset=toOffset($offset,BYTES);var $len=data.byteLength;if($length===undefined){if($len%BYTES)throw RangeError(WRONG_LENGTH);byteLength=$len-offset;if(byteLength<0)throw RangeError(WRONG_LENGTH);}else{byteLength=toLength($length)*BYTES;if(byteLength+offset>$len)throw RangeError(WRONG_LENGTH);}length=byteLength/BYTES;}else if(TYPED_ARRAY in data){return fromList(TypedArray,data);}else{return $from.call(TypedArray,data);}hide(that,'_d',{b:buffer,o:offset,l:byteLength,e:length,v:new $DataView(buffer)});while(index<length){addElement(that,index++);}});TypedArrayPrototype=TypedArray[PROTOTYPE]=create($TypedArrayPrototype$);hide(TypedArrayPrototype,'constructor',TypedArray);}else if(!fails(function(){TypedArray(1);})||!fails(function(){new TypedArray(-1);// eslint-disable-line no-new
})||!$iterDetect(function(iter){new TypedArray();// eslint-disable-line no-new
new TypedArray(null);// eslint-disable-line no-new
new TypedArray(1.5);// eslint-disable-line no-new
new TypedArray(iter);// eslint-disable-line no-new
},true)){TypedArray=wrapper(function(that,data,$offset,$length){anInstance(that,TypedArray,NAME);var klass;// `ws` module bug, temporarily remove validation length for Uint8Array
// https://github.com/websockets/ws/pull/645
if(!isObject(data))return new Base(toIndex(data));if(data instanceof $ArrayBuffer||(klass=classof(data))==ARRAY_BUFFER||klass==SHARED_BUFFER){return $length!==undefined?new Base(data,toOffset($offset,BYTES),$length):$offset!==undefined?new Base(data,toOffset($offset,BYTES)):new Base(data);}if(TYPED_ARRAY in data)return fromList(TypedArray,data);return $from.call(TypedArray,data);});arrayForEach(TAC!==Function.prototype?gOPN(Base).concat(gOPN(TAC)):gOPN(Base),function(key){if(!(key in TypedArray))hide(TypedArray,key,Base[key]);});TypedArray[PROTOTYPE]=TypedArrayPrototype;if(!LIBRARY)TypedArrayPrototype.constructor=TypedArray;}var $nativeIterator=TypedArrayPrototype[ITERATOR];var CORRECT_ITER_NAME=!!$nativeIterator&&($nativeIterator.name=='values'||$nativeIterator.name==undefined);var $iterator=$iterators.values;hide(TypedArray,TYPED_CONSTRUCTOR,true);hide(TypedArrayPrototype,TYPED_ARRAY,NAME);hide(TypedArrayPrototype,VIEW,true);hide(TypedArrayPrototype,DEF_CONSTRUCTOR,TypedArray);if(CLAMPED?new TypedArray(1)[TAG]!=NAME:!(TAG in TypedArrayPrototype)){dP(TypedArrayPrototype,TAG,{get:function get(){return NAME;}});}O[NAME]=TypedArray;$export($export.G+$export.W+$export.F*(TypedArray!=Base),O);$export($export.S,NAME,{BYTES_PER_ELEMENT:BYTES});$export($export.S+$export.F*fails(function(){Base.of.call(TypedArray,1);}),NAME,{from:$from,of:$of});if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype,BYTES_PER_ELEMENT,BYTES);$export($export.P,NAME,proto);setSpecies(NAME);$export($export.P+$export.F*FORCED_SET,NAME,{set:$set});$export($export.P+$export.F*!CORRECT_ITER_NAME,NAME,$iterators);if(!LIBRARY&&TypedArrayPrototype.toString!=arrayToString)TypedArrayPrototype.toString=arrayToString;$export($export.P+$export.F*fails(function(){new TypedArray(1).slice();}),NAME,{slice:$slice});$export($export.P+$export.F*(fails(function(){return[1,2].toLocaleString()!=new TypedArray([1,2]).toLocaleString();})||!fails(function(){TypedArrayPrototype.toLocaleString.call([1,2]);})),NAME,{toLocaleString:$toLocaleString});Iterators[NAME]=CORRECT_ITER_NAME?$nativeIterator:$iterator;if(!LIBRARY&&!CORRECT_ITER_NAME)hide(TypedArrayPrototype,ITERATOR,$iterator);};}else module.exports=function(){/* empty */};/***/},/* 32 *//***/function(module,exports,__webpack_require__){var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};var Map=__webpack_require__(154);var $export=__webpack_require__(0);var shared=__webpack_require__(57)('metadata');var store=shared.store||(shared.store=new(__webpack_require__(157))());var getOrCreateMetadataMap=function getOrCreateMetadataMap(target,targetKey,create){var targetMetadata=store.get(target);if(!targetMetadata){if(!create)return undefined;store.set(target,targetMetadata=new Map());}var keyMetadata=targetMetadata.get(targetKey);if(!keyMetadata){if(!create)return undefined;targetMetadata.set(targetKey,keyMetadata=new Map());}return keyMetadata;};var ordinaryHasOwnMetadata=function ordinaryHasOwnMetadata(MetadataKey,O,P){var metadataMap=getOrCreateMetadataMap(O,P,false);return metadataMap===undefined?false:metadataMap.has(MetadataKey);};var ordinaryGetOwnMetadata=function ordinaryGetOwnMetadata(MetadataKey,O,P){var metadataMap=getOrCreateMetadataMap(O,P,false);return metadataMap===undefined?undefined:metadataMap.get(MetadataKey);};var ordinaryDefineOwnMetadata=function ordinaryDefineOwnMetadata(MetadataKey,MetadataValue,O,P){getOrCreateMetadataMap(O,P,true).set(MetadataKey,MetadataValue);};var ordinaryOwnMetadataKeys=function ordinaryOwnMetadataKeys(target,targetKey){var metadataMap=getOrCreateMetadataMap(target,targetKey,false);var keys=[];if(metadataMap)metadataMap.forEach(function(_,key){keys.push(key);});return keys;};var toMetaKey=function toMetaKey(it){return it===undefined||(typeof it==='undefined'?'undefined':_typeof(it))=='symbol'?it:String(it);};var exp=function exp(O){$export($export.S,'Reflect',O);};module.exports={store:store,map:getOrCreateMetadataMap,has:ordinaryHasOwnMetadata,get:ordinaryGetOwnMetadata,set:ordinaryDefineOwnMetadata,keys:ordinaryOwnMetadataKeys,key:toMetaKey,exp:exp};/***/},/* 33 *//***/function(module,exports,__webpack_require__){var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};var META=__webpack_require__(37)('meta');var isObject=__webpack_require__(5);var has=__webpack_require__(14);var setDesc=__webpack_require__(8).f;var id=0;var isExtensible=Object.isExtensible||function(){return true;};var FREEZE=!__webpack_require__(3)(function(){return isExtensible(Object.preventExtensions({}));});var setMeta=function setMeta(it){setDesc(it,META,{value:{i:'O'+ ++id,// object ID
w:{}// weak collections IDs
}});};var fastKey=function fastKey(it,create){// return primitive with prefix
if(!isObject(it))return(typeof it==='undefined'?'undefined':_typeof(it))=='symbol'?it:(typeof it=='string'?'S':'P')+it;if(!has(it,META)){// can't set metadata to uncaught frozen object
if(!isExtensible(it))return'F';// not necessary to add metadata
if(!create)return'E';// add missing metadata
setMeta(it);// return object ID
}return it[META].i;};var getWeak=function getWeak(it,create){if(!has(it,META)){// can't set metadata to uncaught frozen object
if(!isExtensible(it))return true;// not necessary to add metadata
if(!create)return false;// add missing metadata
setMeta(it);// return hash weak collections IDs
}return it[META].w;};// add metadata on freeze-family methods calling
var onFreeze=function onFreeze(it){if(FREEZE&&meta.NEED&&isExtensible(it)&&!has(it,META))setMeta(it);return it;};var meta=module.exports={KEY:META,NEED:false,fastKey:fastKey,getWeak:getWeak,onFreeze:onFreeze};/***/},/* 34 *//***/function(module,exports,__webpack_require__){// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys=__webpack_require__(136);var enumBugKeys=__webpack_require__(83);module.exports=Object.keys||function keys(O){return $keys(O,enumBugKeys);};/***/},/* 35 *//***/function(module,exports,__webpack_require__){// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES=__webpack_require__(6)('unscopables');var ArrayProto=Array.prototype;if(ArrayProto[UNSCOPABLES]==undefined)__webpack_require__(15)(ArrayProto,UNSCOPABLES,{});module.exports=function(key){ArrayProto[UNSCOPABLES][key]=true;};/***/},/* 36 *//***/function(module,exports){module.exports=function(bitmap,value){return{enumerable:!(bitmap&1),configurable:!(bitmap&2),writable:!(bitmap&4),value:value};};/***/},/* 37 *//***/function(module,exports){var id=0;var px=Math.random();module.exports=function(key){return'Symbol('.concat(key===undefined?'':key,')_',(++id+px).toString(36));};/***/},/* 38 *//***/function(module,exports){module.exports=false;/***/},/* 39 *//***/function(module,exports,__webpack_require__){var toInteger=__webpack_require__(28);var max=Math.max;var min=Math.min;module.exports=function(index,length){index=toInteger(index);return index<0?max(index+length,0):min(index,length);};/***/},/* 40 *//***/function(module,exports,__webpack_require__){// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject=__webpack_require__(1);var dPs=__webpack_require__(137);var enumBugKeys=__webpack_require__(83);var IE_PROTO=__webpack_require__(82)('IE_PROTO');var Empty=function Empty(){/* empty */};var PROTOTYPE='prototype';// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict=function createDict(){// Thrash, waste and sodomy: IE GC bug
var iframe=__webpack_require__(80)('iframe');var i=enumBugKeys.length;var lt='<';var gt='>';var iframeDocument;iframe.style.display='none';__webpack_require__(84).appendChild(iframe);iframe.src='javascript:';// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
iframeDocument=iframe.contentWindow.document;iframeDocument.open();iframeDocument.write(lt+'script'+gt+'document.F=Object'+lt+'/script'+gt);iframeDocument.close();_createDict=iframeDocument.F;while(i--){delete _createDict[PROTOTYPE][enumBugKeys[i]];}return _createDict();};module.exports=Object.create||function create(O,Properties){var result;if(O!==null){Empty[PROTOTYPE]=anObject(O);result=new Empty();Empty[PROTOTYPE]=null;// add "__proto__" for Object.getPrototypeOf polyfill
result[IE_PROTO]=O;}else result=_createDict();return Properties===undefined?result:dPs(result,Properties);};/***/},/* 41 *//***/function(module,exports,__webpack_require__){// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys=__webpack_require__(136);var hiddenKeys=__webpack_require__(83).concat('length','prototype');exports.f=Object.getOwnPropertyNames||function getOwnPropertyNames(O){return $keys(O,hiddenKeys);};/***/},/* 42 *//***/function(module,exports,__webpack_require__){"use strict";var global=__webpack_require__(2);var dP=__webpack_require__(8);var DESCRIPTORS=__webpack_require__(7);var SPECIES=__webpack_require__(6)('species');module.exports=function(KEY){var C=global[KEY];if(DESCRIPTORS&&C&&!C[SPECIES])dP.f(C,SPECIES,{configurable:true,get:function get(){return this;}});};/***/},/* 43 *//***/function(module,exports){module.exports=function(it,Constructor,name,forbiddenField){if(!(it instanceof Constructor)||forbiddenField!==undefined&&forbiddenField in it){throw TypeError(name+': incorrect invocation!');}return it;};/***/},/* 44 *//***/function(module,exports,__webpack_require__){var ctx=__webpack_require__(22);var call=__webpack_require__(147);var isArrayIter=__webpack_require__(96);var anObject=__webpack_require__(1);var toLength=__webpack_require__(9);var getIterFn=__webpack_require__(98);var BREAK={};var RETURN={};var exports=module.exports=function(iterable,entries,fn,that,ITERATOR){var iterFn=ITERATOR?function(){return iterable;}:getIterFn(iterable);var f=ctx(fn,that,entries?2:1);var index=0;var length,step,iterator,result;if(typeof iterFn!='function')throw TypeError(iterable+' is not iterable!');// fast case for arrays with default iterator
if(isArrayIter(iterFn))for(length=toLength(iterable.length);length>index;index++){result=entries?f(anObject(step=iterable[index])[0],step[1]):f(iterable[index]);if(result===BREAK||result===RETURN)return result;}else for(iterator=iterFn.call(iterable);!(step=iterator.next()).done;){result=call(iterator,f,step.value,entries);if(result===BREAK||result===RETURN)return result;}};exports.BREAK=BREAK;exports.RETURN=RETURN;/***/},/* 45 *//***/function(module,exports,__webpack_require__){var redefine=__webpack_require__(16);module.exports=function(target,src,safe){for(var key in src){redefine(target,key,src[key],safe);}return target;};/***/},/* 46 *//***/function(module,exports){/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/// css base code, injected by the css-loader
module.exports=function(useSourceMap){var list=[];// return the list of modules as css string
list.toString=function toString(){return this.map(function(item){var content=cssWithMappingToString(item,useSourceMap);if(item[2]){return"@media "+item[2]+"{"+content+"}";}else{return content;}}).join("");};// import a list of modules into the list
list.i=function(modules,mediaQuery){if(typeof modules==="string")modules=[[null,modules,""]];var alreadyImportedModules={};for(var i=0;i<this.length;i++){var id=this[i][0];if(typeof id==="number")alreadyImportedModules[id]=true;}for(i=0;i<modules.length;i++){var item=modules[i];// skip already imported module
// this implementation is not 100% perfect for weird media query combinations
//  when a module is imported multiple times with different media queries.
//  I hope this will never occur (Hey this way we have smaller bundles)
if(typeof item[0]!=="number"||!alreadyImportedModules[item[0]]){if(mediaQuery&&!item[2]){item[2]=mediaQuery;}else if(mediaQuery){item[2]="("+item[2]+") and ("+mediaQuery+")";}list.push(item);}}};return list;};function cssWithMappingToString(item,useSourceMap){var content=item[1]||'';var cssMapping=item[3];if(!cssMapping){return content;}if(useSourceMap&&typeof btoa==='function'){var sourceMapping=toComment(cssMapping);var sourceURLs=cssMapping.sources.map(function(source){return'/*# sourceURL='+cssMapping.sourceRoot+source+' */';});return[content].concat(sourceURLs).concat([sourceMapping]).join('\n');}return[content].join('\n');}// Adapted from convert-source-map (MIT)
function toComment(sourceMap){// eslint-disable-next-line no-undef
var base64=btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));var data='sourceMappingURL=data:application/json;charset=utf-8;base64,'+base64;return'/*# '+data+' */';}/***/},/* 47 *//***/function(module,exports,__webpack_require__){/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/var hasDocument=typeof document!=='undefined';if(typeof DEBUG!=='undefined'&&DEBUG){if(!hasDocument){throw new Error('vue-style-loader cannot be used in a non-browser environment. '+"Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");}}var listToStyles=__webpack_require__(114);/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/var stylesInDom={/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/};var head=hasDocument&&(document.head||document.getElementsByTagName('head')[0]);var singletonElement=null;var singletonCounter=0;var isProduction=false;var noop=function noop(){};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE=typeof navigator!=='undefined'&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());module.exports=function(parentId,list,_isProduction){isProduction=_isProduction;var styles=listToStyles(parentId,list);addStylesToDom(styles);return function update(newList){var mayRemove=[];for(var i=0;i<styles.length;i++){var item=styles[i];var domStyle=stylesInDom[item.id];domStyle.refs--;mayRemove.push(domStyle);}if(newList){styles=listToStyles(parentId,newList);addStylesToDom(styles);}else{styles=[];}for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(domStyle.refs===0){for(var j=0;j<domStyle.parts.length;j++){domStyle.parts[j]();}delete stylesInDom[domStyle.id];}}};};function addStylesToDom(styles/* Array<StyleObject> */){for(var i=0;i<styles.length;i++){var item=styles[i];var domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++){domStyle.parts[j](item.parts[j]);}for(;j<item.parts.length;j++){domStyle.parts.push(addStyle(item.parts[j]));}if(domStyle.parts.length>item.parts.length){domStyle.parts.length=item.parts.length;}}else{var parts=[];for(var j=0;j<item.parts.length;j++){parts.push(addStyle(item.parts[j]));}stylesInDom[item.id]={id:item.id,refs:1,parts:parts};}}}function createStyleElement(){var styleElement=document.createElement('style');styleElement.type='text/css';head.appendChild(styleElement);return styleElement;}function addStyle(obj/* StyleObjectPart */){var update,remove;var styleElement=document.querySelector('style[data-vue-ssr-id~="'+obj.id+'"]');if(styleElement){if(isProduction){// has SSR styles and in production mode.
// simply do nothing.
return noop;}else{// has SSR styles but in dev mode.
// for some reason Chrome can't handle source map in server-rendered
// style tags - source maps in <style> only works if the style tag is
// created and inserted dynamically. So we remove the server rendered
// styles and inject new ones.
styleElement.parentNode.removeChild(styleElement);}}if(isOldIE){// use singleton mode for IE9.
var styleIndex=singletonCounter++;styleElement=singletonElement||(singletonElement=createStyleElement());update=applyToSingletonTag.bind(null,styleElement,styleIndex,false);remove=applyToSingletonTag.bind(null,styleElement,styleIndex,true);}else{// use multi-style-tag mode in all other cases
styleElement=createStyleElement();update=applyToTag.bind(null,styleElement);remove=function remove(){styleElement.parentNode.removeChild(styleElement);};}update(obj);return function updateStyle(newObj/* StyleObjectPart */){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}var replaceText=function(){var textStore=[];return function(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(styleElement,index,remove,obj){var css=remove?'':obj.css;if(styleElement.styleSheet){styleElement.styleSheet.cssText=replaceText(index,css);}else{var cssNode=document.createTextNode(css);var childNodes=styleElement.childNodes;if(childNodes[index])styleElement.removeChild(childNodes[index]);if(childNodes.length){styleElement.insertBefore(cssNode,childNodes[index]);}else{styleElement.appendChild(cssNode);}}}function applyToTag(styleElement,obj){var css=obj.css;var media=obj.media;var sourceMap=obj.sourceMap;if(media){styleElement.setAttribute('media',media);}if(sourceMap){// https://developer.chrome.com/devtools/docs/javascript-debugging
// this makes source maps inside style tags work properly in Chrome
css+='\n/*# sourceURL='+sourceMap.sources[0]+' */';// http://stackoverflow.com/a/26603875
css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}if(styleElement.styleSheet){styleElement.styleSheet.cssText=css;}else{while(styleElement.firstChild){styleElement.removeChild(styleElement.firstChild);}styleElement.appendChild(document.createTextNode(css));}}/***/},/* 48 *//***/function(module,exports,__webpack_require__){var def=__webpack_require__(8).f;var has=__webpack_require__(14);var TAG=__webpack_require__(6)('toStringTag');module.exports=function(it,tag,stat){if(it&&!has(it=stat?it:it.prototype,TAG))def(it,TAG,{configurable:true,value:tag});};/***/},/* 49 *//***/function(module,exports,__webpack_require__){var $export=__webpack_require__(0);var defined=__webpack_require__(27);var fails=__webpack_require__(3);var spaces=__webpack_require__(86);var space='['+spaces+']';var non='\u200B\x85';var ltrim=RegExp('^'+space+space+'*');var rtrim=RegExp(space+space+'*$');var exporter=function exporter(KEY,exec,ALIAS){var exp={};var FORCE=fails(function(){return!!spaces[KEY]()||non[KEY]()!=non;});var fn=exp[KEY]=FORCE?exec(trim):spaces[KEY];if(ALIAS)exp[ALIAS]=fn;$export($export.P+$export.F*FORCE,'String',exp);};// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim=exporter.trim=function(string,TYPE){string=String(defined(string));if(TYPE&1)string=string.replace(ltrim,'');if(TYPE&2)string=string.replace(rtrim,'');return string;};module.exports=exporter;/***/},/* 50 *//***/function(module,exports){module.exports={};/***/},/* 51 *//***/function(module,exports,__webpack_require__){var isObject=__webpack_require__(5);module.exports=function(it,TYPE){if(!isObject(it)||it._t!==TYPE)throw TypeError('Incompatible receiver, '+TYPE+' required!');return it;};/***/},/* 52 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};!(__WEBPACK_AMD_DEFINE_RESULT__=function(require,exports,module){"use strict";var Util=__webpack_require__(13);var Timer=__webpack_require__(130);var Easing=__webpack_require__(131);var Base=__webpack_require__(21);//transform
var vendorTransform=Util.prefixStyle("transform");//transition webkitTransition MozTransition OTransition msTtransition
var vendorTransition=Util.prefixStyle("transition");var vendorTransitionDuration=Util.prefixStyle("transitionDuration");var vendorTransformOrigin=Util.prefixStyle("transformOrigin");var vendorTransitionEnd=Util.vendor?Util.prefixStyle("transitionEnd"):"transitionend";var vendorTransformStr=Util.vendor?["-",Util.vendor,"-transform"].join(""):"transform";var translateTpl='translateX({translateX}px) translateY({translateY}px) translateZ(0)';//limit attrs
var animAttrs={'transform':true,'opacity':true,'scrollTop':true,'scrollLeft':true};function myParse(v){return Math.round(parseFloat(v)*1e5)/1e5;}function defaultDecompose(){return{translateX:0,translateY:0,rotate:0,skewX:0,skewY:0,scaleX:1,scaleY:1};}function toMatrixArray(matrix){matrix=matrix.split(/,/);matrix=Array.prototype.map.call(matrix,function(v){return myParse(v);});return matrix;}function decomposeMatrix(matrix){matrix=toMatrixArray(matrix);var scaleX,scaleY,skew,A=matrix[0],B=matrix[1],C=matrix[2],D=matrix[3];// Make sure matrix is not singular
if(A*D-B*C){scaleX=Math.sqrt(A*A+B*B);skew=(A*C+B*D)/(A*D-C*B);scaleY=(A*D-B*C)/scaleX;// step (6)
if(A*D<B*C){skew=-skew;scaleX=-scaleX;}// matrix is singular and cannot be interpolated
}else{// In this case the elem shouldn't be rendered, hence scale == 0
scaleX=scaleY=skew=0;}// The recomposition order is very important
// see http://hg.mozilla.org/mozilla-central/file/7cb3e9795d04/layout/style/nsStyleAnimation.cpp#l971
return{translateX:myParse(matrix[4]),translateY:myParse(matrix[5]),rotate:myParse(Math.atan2(B,A)*180/Math.PI),skewX:myParse(Math.atan(skew)*180/Math.PI),skewY:0,scaleX:myParse(scaleX),scaleY:myParse(scaleY)};}function getTransformInfo(transform){transform=transform.split(')');var trim=Util.trim,i=-1,l=transform.length-1,split,prop,val,ret=defaultDecompose();// Loop through the transform properties, parse and multiply them
while(++i<l){split=transform[i].split('(');prop=trim(split[0]);val=split[1];switch(prop){case'translateX':case'translateY':case'scaleX':case'scaleY':ret[prop]=myParse(val);break;case'translate':case'translate3d':val=val.split(',');ret.translateX=myParse(val[0]);ret.translateY=myParse(val[1]||0);break;case'scale':val=val.split(',');ret.scaleX=myParse(val[0]);ret.scaleY=myParse(val[1]||val[0]);break;case'matrix':return decomposeMatrix(val);}}return ret;}/**
  * animate function
  * @constructor
  * @param {HTMLElement} el element to animate
  * @param {Object} config config for animate
  * @param {Object} config.css
  * @param {Number} config.duration
  * @param {String} config.easing
  * @extends {Base}
  */function Animate(el,cfg){if(!el||!cfg||!cfg.css)return;var self=this;self.cfg=cfg;self.el=el;var duration=cfg.duration||0,easing=cfg.easing||"ease",delay=cfg.delay||0;//trigger run
if(cfg.run){//frame animate
self.timer=self.timer||new Timer({duration:Math.round(duration),easing:easing});self.timer.on("run",cfg.run);}self._bindEvt();return self;}function computeTransform(prevTransform,destTransform){var transform=getTransformInfo(prevTransform);var dest=getTransformInfo(destTransform);var trans={};for(var i in dest){trans[i]={prevVal:transform[i],newVal:dest[i]};}return trans;}//for scroll only
function setStyle(el,styleName,prevVal,newVal,percent){prevVal=isNaN(Number(prevVal))?0:Number(prevVal);var curVal=(newVal-prevVal)*percent+prevVal;css(el,styleName,curVal);}function css(el,styleName,val){switch(styleName){case"scrollTop":case"scrollLeft":el[styleName]=val;break;case"transform":el.style[vendorTransform]=val;case"opacity":el.style[styleName]=val;break;}}Util.extend(Animate,Base,{/**
   * to start the animation
   * @memberof Animate
   * @return {Animate}
   */run:function run(){var self=this;var cfg=self.cfg,el=self.el,duration=cfg.duration||0,easing=cfg.easing||"ease",delay=cfg.delay||0;self.__isTransitionEnd=false;clearTimeout(self.__itv);self.timer&&self.timer.run();if(duration<=Timer.MIN_DURATION){for(var i in cfg.css){css(el,i,cfg.css[i]);}self.stop();self.__handlers.stop.call(self);return;}if(Util.isBadAndroid()){//use frame animate on bad android device
cfg.useTransition=false;}if(cfg.useTransition){//transition
el.style[vendorTransition]=Util.substitute('all {duration}ms {easing} {delay}ms',{duration:Math.round(duration),easing:Easing.format(easing),delay:delay});for(var i in cfg.css){//set css
css(el,i,cfg.css[i]);}self.__itv=setTimeout(function(){if(!self.__isTransitionEnd){self.__isTransitionEnd=true;self.trigger("transitionend");}},Number(duration)+60);}else{self.computeStyle=self.computeStyle||window.getComputedStyle(el);//transform
if(cfg.css.transform&&self.timer){var transmap=self.transmap=computeTransform(self.computeStyle[vendorTransform],cfg.css.transform);self.timer.off("run",self.__handlers.transRun);self.timer.on("run",self.__handlers.transRun,self);self.timer.off("end",self.__handlers.transRun);self.timer.on("end",self.__handlers.transRun,self);}}return self;},_transitionEndHandler:function _transitionEndHandler(e){var self=this;self.stop();self.__handlers.stop.call(self);},__handlers:{transRun:function transRun(e){var self=this;var transmap=self.transmap;var el=self.el;var newTrans={};for(var i in transmap){newTrans[i]=(transmap[i].newVal-transmap[i].prevVal)*e.percent+transmap[i].prevVal;}var ret=Util.substitute(translateTpl+' '+'scale({scaleX},{scaleY})',newTrans);el.style[vendorTransform]=ret;},stop:function stop(e){var self=this;var cfg=self.cfg;cfg.end&&cfg.end({percent:1});}},_bindEvt:function _bindEvt(){var self=this;var cfg=self.cfg;var el=self.el;self.el.addEventListener(vendorTransitionEnd,function(e){self.__isTransitionEnd=true;if(e.target!==e.currentTarget)return;self.trigger("transitionend",e);});self.on("transitionend",self._transitionEndHandler,self);var cssRun=function cssRun(e){self.computeStyle=self.computeStyle||window.getComputedStyle(el);for(var i in cfg.css){if(!/transform/.test(i)){setStyle(self.el,i,self.computeStyle[i],cfg.css[i],e.percent);}}};self.timer&&self.timer.on("run",cssRun);self.timer&&self.timer.on("stop",self.__handlers.stop,self);},/**
   * to stop the animation
   * @memberof Animate
   * @return {Animate}
   */stop:function stop(){var self=this;if(self.cfg.useTransition&&self.cfg.duration>Timer.MIN_DURATION){var computeStyle=window.getComputedStyle(this.el);for(var i in self.cfg.css){if(animAttrs[i]){var value=/transform/.test(i)?computeStyle[vendorTransform]:computeStyle[i];css(self.el,i,Util.substitute(translateTpl+' '+'scale({scaleX},{scaleY})',getTransformInfo(value)));}}self.el.style[vendorTransition]="none";}self.timer&&self.timer.stop()&&self.timer.reset();self.computeStyle=null;return self;},/**
   * to reset the animation to a new state
   * @memberof Animate
   * @param {object} cfg cfg for new animation
   * @return {Animate}
   */reset:function reset(cfg){var self=this;self.computeStyle=null;Util.mix(self.cfg,cfg);this.timer&&self.timer.reset({duration:Math.round(self.cfg.duration),easing:self.cfg.easing});return self;}});if((false?'undefined':_typeof(module))=='object'&&module.exports){module.exports=Animate;}/** ignored by jsdoc **/else{return Animate;}}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(10)(module));/***/},/* 53 *//***/function(module,exports,__webpack_require__){// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof=__webpack_require__(23);// eslint-disable-next-line no-prototype-builtins
module.exports=Object('z').propertyIsEnumerable(0)?Object:function(it){return cof(it)=='String'?it.split(''):Object(it);};/***/},/* 54 *//***/function(module,exports){exports.f={}.propertyIsEnumerable;/***/},/* 55 *//***/function(module,exports,__webpack_require__){// getting tag from 19.1.3.6 Object.prototype.toString()
var cof=__webpack_require__(23);var TAG=__webpack_require__(6)('toStringTag');// ES3 wrong here
var ARG=cof(function(){return arguments;}())=='Arguments';// fallback for IE11 Script Access Denied error
var tryGet=function tryGet(it,key){try{return it[key];}catch(e){/* empty */}};module.exports=function(it){var O,T,B;return it===undefined?'Undefined':it===null?'Null'// @@toStringTag case
:typeof(T=tryGet(O=Object(it),TAG))=='string'?T// builtinTag case
:ARG?cof(O)// ES3 arguments fallback
:(B=cof(O))=='Object'&&typeof O.callee=='function'?'Arguments':B;};/***/},/* 56 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__List_vue__=__webpack_require__(74);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__list_scss__=__webpack_require__(77);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__list_scss___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__list_scss__);if(true){__WEBPACK_IMPORTED_MODULE_0__List_vue__["a"/* default */].install=function(Vue){return Vue.component(__WEBPACK_IMPORTED_MODULE_0__List_vue__["a"/* default */].name,__WEBPACK_IMPORTED_MODULE_0__List_vue__["a"/* default */]);};}/* harmony default export */__webpack_exports__["default"]=__WEBPACK_IMPORTED_MODULE_0__List_vue__["a"/* default */];/***/},/* 57 *//***/function(module,exports,__webpack_require__){var global=__webpack_require__(2);var SHARED='__core-js_shared__';var store=global[SHARED]||(global[SHARED]={});module.exports=function(key){return store[key]||(store[key]={});};/***/},/* 58 *//***/function(module,exports,__webpack_require__){// false -> Array#indexOf
// true  -> Array#includes
var toIObject=__webpack_require__(17);var toLength=__webpack_require__(9);var toAbsoluteIndex=__webpack_require__(39);module.exports=function(IS_INCLUDES){return function($this,el,fromIndex){var O=toIObject($this);var length=toLength(O.length);var index=toAbsoluteIndex(fromIndex,length);var value;// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(IS_INCLUDES&&el!=el)while(length>index){value=O[index++];// eslint-disable-next-line no-self-compare
if(value!=value)return true;// Array#indexOf ignores holes, Array#includes - not
}else for(;length>index;index++){if(IS_INCLUDES||index in O){if(O[index]===el)return IS_INCLUDES||index||0;}}return!IS_INCLUDES&&-1;};};/***/},/* 59 *//***/function(module,exports){exports.f=Object.getOwnPropertySymbols;/***/},/* 60 *//***/function(module,exports,__webpack_require__){// 7.2.2 IsArray(argument)
var cof=__webpack_require__(23);module.exports=Array.isArray||function isArray(arg){return cof(arg)=='Array';};/***/},/* 61 *//***/function(module,exports){// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports=function(fn,args,that){var un=that===undefined;switch(args.length){case 0:return un?fn():fn.call(that);case 1:return un?fn(args[0]):fn.call(that,args[0]);case 2:return un?fn(args[0],args[1]):fn.call(that,args[0],args[1]);case 3:return un?fn(args[0],args[1],args[2]):fn.call(that,args[0],args[1],args[2]);case 4:return un?fn(args[0],args[1],args[2],args[3]):fn.call(that,args[0],args[1],args[2],args[3]);}return fn.apply(that,args);};/***/},/* 62 *//***/function(module,exports,__webpack_require__){// 7.2.8 IsRegExp(argument)
var isObject=__webpack_require__(5);var cof=__webpack_require__(23);var MATCH=__webpack_require__(6)('match');module.exports=function(it){var isRegExp;return isObject(it)&&((isRegExp=it[MATCH])!==undefined?!!isRegExp:cof(it)=='RegExp');};/***/},/* 63 *//***/function(module,exports,__webpack_require__){var ITERATOR=__webpack_require__(6)('iterator');var SAFE_CLOSING=false;try{var riter=[7][ITERATOR]();riter['return']=function(){SAFE_CLOSING=true;};// eslint-disable-next-line no-throw-literal
Array.from(riter,function(){throw 2;});}catch(e){/* empty */}module.exports=function(exec,skipClosing){if(!skipClosing&&!SAFE_CLOSING)return false;var safe=false;try{var arr=[7];var iter=arr[ITERATOR]();iter.next=function(){return{done:safe=true};};arr[ITERATOR]=function(){return iter;};exec(arr);}catch(e){/* empty */}return safe;};/***/},/* 64 *//***/function(module,exports,__webpack_require__){"use strict";// 21.2.5.3 get RegExp.prototype.flags
var anObject=__webpack_require__(1);module.exports=function(){var that=anObject(this);var result='';if(that.global)result+='g';if(that.ignoreCase)result+='i';if(that.multiline)result+='m';if(that.unicode)result+='u';if(that.sticky)result+='y';return result;};/***/},/* 65 *//***/function(module,exports,__webpack_require__){"use strict";var hide=__webpack_require__(15);var redefine=__webpack_require__(16);var fails=__webpack_require__(3);var defined=__webpack_require__(27);var wks=__webpack_require__(6);module.exports=function(KEY,length,exec){var SYMBOL=wks(KEY);var fns=exec(defined,SYMBOL,''[KEY]);var strfn=fns[0];var rxfn=fns[1];if(fails(function(){var O={};O[SYMBOL]=function(){return 7;};return''[KEY](O)!=7;})){redefine(String.prototype,KEY,strfn);hide(RegExp.prototype,SYMBOL,length==2// 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
// 21.2.5.11 RegExp.prototype[@@split](string, limit)
?function(string,arg){return rxfn.call(string,this,arg);}// 21.2.5.6 RegExp.prototype[@@match](string)
// 21.2.5.9 RegExp.prototype[@@search](string)
:function(string){return rxfn.call(string,this);});}};/***/},/* 66 *//***/function(module,exports,__webpack_require__){// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject=__webpack_require__(1);var aFunction=__webpack_require__(12);var SPECIES=__webpack_require__(6)('species');module.exports=function(O,D){var C=anObject(O).constructor;var S;return C===undefined||(S=anObject(C)[SPECIES])==undefined?D:aFunction(S);};/***/},/* 67 *//***/function(module,exports,__webpack_require__){"use strict";var global=__webpack_require__(2);var $export=__webpack_require__(0);var redefine=__webpack_require__(16);var redefineAll=__webpack_require__(45);var meta=__webpack_require__(33);var forOf=__webpack_require__(44);var anInstance=__webpack_require__(43);var isObject=__webpack_require__(5);var fails=__webpack_require__(3);var $iterDetect=__webpack_require__(63);var setToStringTag=__webpack_require__(48);var inheritIfRequired=__webpack_require__(87);module.exports=function(NAME,wrapper,methods,common,IS_MAP,IS_WEAK){var Base=global[NAME];var C=Base;var ADDER=IS_MAP?'set':'add';var proto=C&&C.prototype;var O={};var fixMethod=function fixMethod(KEY){var fn=proto[KEY];redefine(proto,KEY,KEY=='delete'?function(a){return IS_WEAK&&!isObject(a)?false:fn.call(this,a===0?0:a);}:KEY=='has'?function has(a){return IS_WEAK&&!isObject(a)?false:fn.call(this,a===0?0:a);}:KEY=='get'?function get(a){return IS_WEAK&&!isObject(a)?undefined:fn.call(this,a===0?0:a);}:KEY=='add'?function add(a){fn.call(this,a===0?0:a);return this;}:function set(a,b){fn.call(this,a===0?0:a,b);return this;});};if(typeof C!='function'||!(IS_WEAK||proto.forEach&&!fails(function(){new C().entries().next();}))){// create collection constructor
C=common.getConstructor(wrapper,NAME,IS_MAP,ADDER);redefineAll(C.prototype,methods);meta.NEED=true;}else{var instance=new C();// early implementations not supports chaining
var HASNT_CHAINING=instance[ADDER](IS_WEAK?{}:-0,1)!=instance;// V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
var THROWS_ON_PRIMITIVES=fails(function(){instance.has(1);});// most early implementations doesn't supports iterables, most modern - not close it correctly
var ACCEPT_ITERABLES=$iterDetect(function(iter){new C(iter);});// eslint-disable-line no-new
// for early implementations -0 and +0 not the same
var BUGGY_ZERO=!IS_WEAK&&fails(function(){// V8 ~ Chromium 42- fails only with 5+ elements
var $instance=new C();var index=5;while(index--){$instance[ADDER](index,index);}return!$instance.has(-0);});if(!ACCEPT_ITERABLES){C=wrapper(function(target,iterable){anInstance(target,C,NAME);var that=inheritIfRequired(new Base(),target,C);if(iterable!=undefined)forOf(iterable,IS_MAP,that[ADDER],that);return that;});C.prototype=proto;proto.constructor=C;}if(THROWS_ON_PRIMITIVES||BUGGY_ZERO){fixMethod('delete');fixMethod('has');IS_MAP&&fixMethod('get');}if(BUGGY_ZERO||HASNT_CHAINING)fixMethod(ADDER);// weak collections should not contains .clear method
if(IS_WEAK&&proto.clear)delete proto.clear;}setToStringTag(C,NAME);O[NAME]=C;$export($export.G+$export.W+$export.F*(C!=Base),O);if(!IS_WEAK)common.setStrong(C,NAME,IS_MAP);return C;};/***/},/* 68 *//***/function(module,exports,__webpack_require__){var global=__webpack_require__(2);var hide=__webpack_require__(15);var uid=__webpack_require__(37);var TYPED=uid('typed_array');var VIEW=uid('view');var ABV=!!(global.ArrayBuffer&&global.DataView);var CONSTR=ABV;var i=0;var l=9;var Typed;var TypedArrayConstructors='Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');while(i<l){if(Typed=global[TypedArrayConstructors[i++]]){hide(Typed.prototype,TYPED,true);hide(Typed.prototype,VIEW,true);}else CONSTR=false;}module.exports={ABV:ABV,CONSTR:CONSTR,TYPED:TYPED,VIEW:VIEW};/***/},/* 69 *//***/function(module,exports,__webpack_require__){"use strict";// Forced replacement prototype accessors methods
module.exports=__webpack_require__(38)||!__webpack_require__(3)(function(){var K=Math.random();// In FF throws only define methods
// eslint-disable-next-line no-undef, no-useless-call
__defineSetter__.call(null,K,function(){/* empty */});delete __webpack_require__(2)[K];});/***/},/* 70 *//***/function(module,exports,__webpack_require__){"use strict";// https://tc39.github.io/proposal-setmap-offrom/
var $export=__webpack_require__(0);module.exports=function(COLLECTION){$export($export.S,COLLECTION,{of:function of(){var length=arguments.length;var A=Array(length);while(length--){A[length]=arguments[length];}return new this(A);}});};/***/},/* 71 *//***/function(module,exports,__webpack_require__){"use strict";// https://tc39.github.io/proposal-setmap-offrom/
var $export=__webpack_require__(0);var aFunction=__webpack_require__(12);var ctx=__webpack_require__(22);var forOf=__webpack_require__(44);module.exports=function(COLLECTION){$export($export.S,COLLECTION,{from:function from(source/* , mapFn, thisArg */){var mapFn=arguments[1];var mapping,A,n,cb;aFunction(this);mapping=mapFn!==undefined;if(mapping)aFunction(mapFn);if(source==undefined)return new this();A=[];if(mapping){n=0;cb=ctx(mapFn,arguments[2],2);forOf(source,false,function(nextItem){A.push(cb(nextItem,n++));});}else{forOf(source,false,A.push,A);}return new this(A);}});};/***/},/* 72 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"b",function(){return parentMixin;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"a",function(){return childMixin;});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__libs_router__=__webpack_require__(73);var parentMixin={mounted:function mounted(){if(this.value>=0){this.currentIndex=this.value;}this.updateIndex();},methods:{updateIndex:function updateIndex(){if(!this.$children||!this.$children.length)return;this.number=this.$children.length;var children=this.$children;for(var i=0;i<children.length;i++){children[i].currentIndex=i;if(children[i].currentSelected){this.index=i;}}}},props:{value:Number},watch:{currentIndex:function currentIndex(val,oldVal){oldVal>-1&&this.$children[oldVal]&&(this.$children[oldVal].currentSelected=false);val>-1&&this.$children[val]&&(this.$children[val].currentSelected=true);this.$emit('input',val);this.$emit('on-index-change',val,oldVal);},index:function index(val){this.currentIndex=val;},value:function value(val){this.index=val;}},data:function data(){return{index:-1,currentIndex:this.index,number:this.$children.length};}};var childMixin={props:{selected:{type:Boolean,default:false}},mounted:function mounted(){this.$parent.updateIndex();},beforeDestroy:function beforeDestroy(){var $parent=this.$parent;this.$nextTick(function(){$parent.updateIndex();});},methods:{onItemClick:function onItemClick(hasLink){var _this=this;if(typeof this.disabled==='undefined'||this.disabled===false){this.currentSelected=true;this.$parent.currentIndex=this.currentIndex;this.$nextTick(function(){_this.$emit('on-item-click',_this.currentIndex);});}if(hasLink===true){Object(__WEBPACK_IMPORTED_MODULE_0__libs_router__["a"/* go */])(this.link,this.$router);}}},watch:{currentSelected:function currentSelected(val){if(val){this.$parent.index=this.currentIndex;}},selected:function selected(val){this.currentSelected=val;}},data:function data(){return{currentIndex:-1,currentSelected:this.selected};}};/***/},/* 73 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony export (immutable) */__webpack_exports__["a"]=go;/* unused harmony export getUrl */var _typeof2=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};function go(url,$router){if(/^javas/.test(url)||!url)return;var useRouter=(typeof url==='undefined'?'undefined':_typeof(url))==='object'||$router&&typeof url==='string'&&!/http/.test(url);if(useRouter){if((typeof url==='undefined'?'undefined':_typeof(url))==='object'&&url.replace===true){$router.replace(url);}else{url==='BACK'?$router.go(-1):$router.push(url);}}else{window.location.href=url;}}function getUrl(url,$router){// Make sure the href is right in hash mode
if($router&&!$router._history&&typeof url==='string'&&!/http/.test(url)){return'#!'+url;}return url&&(typeof url==='undefined'?'undefined':_typeof(url))!=='object'?url:'javascript:void(0);';}/***/},/* 74 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_List_vue__=__webpack_require__(75);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a7337f4_hasScoped_false_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_List_vue__=__webpack_require__(76);var disposed=false;var normalizeComponent=__webpack_require__(4);/* script *//* template *//* styles */var __vue_styles__=null;/* scopeId */var __vue_scopeId__=null;/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_List_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a7337f4_hasScoped_false_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_List_vue__["a"/* default */],__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="src/course-lists/List.vue";if(Component.esModule&&Object.keys(Component.esModule).some(function(key){return key!=="default"&&key.substr(0,2)!=="__";})){console.error("named exports are not supported in *.vue files.");}if(Component.options.functional){console.error("[vue-loader] List.vue: functional components are not supported with templates, they should use render functions.");}/* hot reload */if(false){(function(){var hotAPI=require("vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-0a7337f4",Component.options);}else{hotAPI.reload("data-v-0a7337f4",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 75 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";//
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
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={name:'mm-course-list',props:['message','to','pingjia'],methods:{next:function next(){location.hash='#/buy/'+this.message.order_id;},toNext:function toNext(){if(this.to){location.href=location.origin+'/'+this.to;}}}};/***/},/* 76 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm.message?_c('section',{staticClass:"mm-course-list"},[_c('a',{attrs:{"href":"javascript:;"},on:{"click":_vm.toNext}}),_vm._v(" "),_c('div',{class:{over:!_vm.message.status}},[_c('img',{attrs:{"src":_vm.message.cover_240x140,"onerror":"javascript:this.src='https://cdn.xueyuan.xiaobao100.com/shield/image/plugin-pic/default.png';"}}),_vm._v(" "),_c('dl',[_vm.message.title?_c('dt',{staticStyle:{"WebkitBoxOrient":"vertical"}},[_vm._v(_vm._s(_vm.message.title))]):_vm._e(),_vm._v(" "),_c('dd',{staticClass:"data"},[_vm.message.show_study_times?_c('label',[_vm._v(_vm._s(_vm.message.ting_ke_ci_shu)+"次学习")]):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.message.category||' '))])])])]),_vm._v(" "),!_vm.pingjia?_c('object',[_vm.message.score?_c('span',[_vm._v("\n    评分 "+_vm._s(_vm.message.score.toFixed(1))+"\n    ")]):_vm._e()]):_vm._e(),_vm._v(" "),_vm.pingjia&&_vm.message.status?_c('object',[!_vm.message.pingjia?_c('label',{staticClass:"pingjia",on:{"click":_vm.next}},[_vm._v("评价")]):_c('span',[_vm._v("已评价")])]):_vm._e()]):_vm._e();};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns};/* harmony default export */__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-hot-reload-api").rerender("data-v-0a7337f4",esExports);}}/***/},/* 77 *//***/function(module,exports){// removed by extract-text-webpack-plugin
/***/},/* 78 *//***/function(module,exports,__webpack_require__){"use strict";/*
object-assign
(c) Sindre Sorhus
@license MIT
*//* eslint-disable no-unused-vars */var getOwnPropertySymbols=Object.getOwnPropertySymbols;var hasOwnProperty=Object.prototype.hasOwnProperty;var propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(val){if(val===null||val===undefined){throw new TypeError('Object.assign cannot be called with null or undefined');}return Object(val);}function shouldUseNative(){try{if(!Object.assign){return false;}// Detect buggy property enumeration order in older V8 versions.
// https://bugs.chromium.org/p/v8/issues/detail?id=4118
var test1=new String('abc');// eslint-disable-line no-new-wrappers
test1[5]='de';if(Object.getOwnPropertyNames(test1)[0]==='5'){return false;}// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var test2={};for(var i=0;i<10;i++){test2['_'+String.fromCharCode(i)]=i;}var order2=Object.getOwnPropertyNames(test2).map(function(n){return test2[n];});if(order2.join('')!=='0123456789'){return false;}// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var test3={};'abcdefghijklmnopqrst'.split('').forEach(function(letter){test3[letter]=letter;});if(Object.keys(Object.assign({},test3)).join('')!=='abcdefghijklmnopqrst'){return false;}return true;}catch(err){// We don't expect any of the above to throw, but better to be safe.
return false;}}module.exports=shouldUseNative()?Object.assign:function(target,source){var from;var to=toObject(target);var symbols;for(var s=1;s<arguments.length;s++){from=Object(arguments[s]);for(var key in from){if(hasOwnProperty.call(from,key)){to[key]=from[key];}}if(getOwnPropertySymbols){symbols=getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++){if(propIsEnumerable.call(from,symbols[i])){to[symbols[i]]=from[symbols[i]];}}}}return to;};/***/},/* 79 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};!(__WEBPACK_AMD_DEFINE_RESULT__=function(require,exports,module){/*! Hammer.JS - v2.0.4 - 2014-09-28
     * http://hammerjs.github.io/
     *
     * Copyright (c) 2014 Jorik Tangelder;
     * Licensed under the MIT license */'use strict';var VENDOR_PREFIXES=['','webkit','moz','MS','ms','o'];var TEST_ELEMENT=document.createElement('div');var TYPE_FUNCTION='function';var round=Math.round;var abs=Math.abs;var now=Date.now;/**
     * set a timeout with a given scope
     * @param {Function} fn
     * @param {Number} timeout
     * @param {Object} context
     * @returns {number}
     */function setTimeoutContext(fn,timeout,context){return setTimeout(bindFn(fn,context),timeout);}/**
     * if the argument is an array, we want to execute the fn on each entry
     * if it aint an array we don't want to do a thing.
     * this is used by all the methods that accept a single and array argument.
     * @param {*|Array} arg
     * @param {String} fn
     * @param {Object} [context]
     * @returns {Boolean}
     */function invokeArrayArg(arg,fn,context){if(Array.isArray(arg)){each(arg,context[fn],context);return true;}return false;}/**
     * walk objects and arrays
     * @param {Object} obj
     * @param {Function} iterator
     * @param {Object} context
     */function each(obj,iterator,context){var i;if(!obj){return;}if(obj.forEach){obj.forEach(iterator,context);}else if(obj.length!==undefined){i=0;while(i<obj.length){iterator.call(context,obj[i],i,obj);i++;}}else{for(i in obj){obj.hasOwnProperty(i)&&iterator.call(context,obj[i],i,obj);}}}/**
     * extend object.
     * means that properties in dest will be overwritten by the ones in src.
     * @param {Object} dest
     * @param {Object} src
     * @param {Boolean} [merge]
     * @returns {Object} dest
     */function extend(dest,src,merge){var keys=Object.keys(src);var i=0;while(i<keys.length){if(!merge||merge&&dest[keys[i]]===undefined){dest[keys[i]]=src[keys[i]];}i++;}return dest;}/**
     * merge the values from src in the dest.
     * means that properties that exist in dest will not be overwritten by src
     * @param {Object} dest
     * @param {Object} src
     * @returns {Object} dest
     */function merge(dest,src){return extend(dest,src,true);}/**
     * simple class inheritance
     * @param {Function} child
     * @param {Function} base
     * @param {Object} [properties]
     */function inherit(child,base,properties){var baseP=base.prototype,childP;childP=child.prototype=Object.create(baseP);childP.constructor=child;childP._super=baseP;if(properties){extend(childP,properties);}}/**
     * simple function bind
     * @param {Function} fn
     * @param {Object} context
     * @returns {Function}
     */function bindFn(fn,context){return function boundFn(){return fn.apply(context,arguments);};}/**
     * let a boolean value also be a function that must return a boolean
     * this first item in args will be used as the context
     * @param {Boolean|Function} val
     * @param {Array} [args]
     * @returns {Boolean}
     */function boolOrFn(val,args){if((typeof val==='undefined'?'undefined':_typeof(val))==TYPE_FUNCTION){return val.apply(args?args[0]||undefined:undefined,args);}return val;}/**
     * use the val2 when val1 is undefined
     * @param {*} val1
     * @param {*} val2
     * @returns {*}
     */function ifUndefined(val1,val2){return val1===undefined?val2:val1;}/**
     * addEventListener with multiple events at once
     * @param {EventTarget} target
     * @param {String} types
     * @param {Function} handler
     */function addEventListeners(target,types,handler){each(splitStr(types),function(type){target.addEventListener(type,handler,false);});}/**
     * removeEventListener with multiple events at once
     * @param {EventTarget} target
     * @param {String} types
     * @param {Function} handler
     */function removeEventListeners(target,types,handler){each(splitStr(types),function(type){target.removeEventListener(type,handler,false);});}/**
     * find if a node is in the given parent
     * @method hasParent
     * @param {HTMLElement} node
     * @param {HTMLElement} parent
     * @return {Boolean} found
     */function hasParent(node,parent){while(node){if(node==parent){return true;}node=node.parentNode;}return false;}/**
     * small indexOf wrapper
     * @param {String} str
     * @param {String} find
     * @returns {Boolean} found
     */function inStr(str,find){return str.indexOf(find)>-1;}/**
     * split string on whitespace
     * @param {String} str
     * @returns {Array} words
     */function splitStr(str){return str.trim().split(/\s+/g);}/**
     * find if a array contains the object using indexOf or a simple polyFill
     * @param {Array} src
     * @param {String} find
     * @param {String} [findByKey]
     * @return {Boolean|Number} false when not found, or the index
     */function inArray(src,find,findByKey){if(src.indexOf&&!findByKey){return src.indexOf(find);}else{var i=0;while(i<src.length){if(findByKey&&src[i][findByKey]==find||!findByKey&&src[i]===find){return i;}i++;}return-1;}}/**
     * convert array-like objects to real arrays
     * @param {Object} obj
     * @returns {Array}
     */function toArray(obj){return Array.prototype.slice.call(obj,0);}/**
     * unique array with objects based on a key (like 'id') or just by the array's value
     * @param {Array} src [{id:1},{id:2},{id:1}]
     * @param {String} [key]
     * @param {Boolean} [sort=False]
     * @returns {Array} [{id:1},{id:2}]
     */function uniqueArray(src,key,sort){var results=[];var values=[];var i=0;while(i<src.length){var val=key?src[i][key]:src[i];if(inArray(values,val)<0){results.push(src[i]);}values[i]=val;i++;}if(sort){if(!key){results=results.sort();}else{results=results.sort(function sortUniqueArray(a,b){return a[key]>b[key];});}}return results;}/**
     * get the prefixed property
     * @param {Object} obj
     * @param {String} property
     * @returns {String|Undefined} prefixed
     */function prefixed(obj,property){var prefix,prop;var camelProp=property[0].toUpperCase()+property.slice(1);var i=0;while(i<VENDOR_PREFIXES.length){prefix=VENDOR_PREFIXES[i];prop=prefix?prefix+camelProp:property;if(prop in obj){return prop;}i++;}return undefined;}/**
     * get a unique id
     * @returns {number} uniqueId
     */var _uniqueId=1;function uniqueId(){return _uniqueId++;}/**
     * get the window object of an element
     * @param {HTMLElement} element
     * @returns {DocumentView|Window}
     */function getWindowForElement(element){var doc=element.ownerDocument;return doc.defaultView||doc.parentWindow;}var MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android/i;var SUPPORT_TOUCH='ontouchstart'in window;var SUPPORT_POINTER_EVENTS=prefixed(window,'PointerEvent')!==undefined;var SUPPORT_ONLY_TOUCH=SUPPORT_TOUCH&&MOBILE_REGEX.test(navigator.userAgent);var INPUT_TYPE_TOUCH='touch';var INPUT_TYPE_PEN='pen';var INPUT_TYPE_MOUSE='mouse';var INPUT_TYPE_KINECT='kinect';var COMPUTE_INTERVAL=25;var INPUT_START=1;var INPUT_MOVE=2;var INPUT_END=4;var INPUT_CANCEL=8;var DIRECTION_NONE=1;var DIRECTION_LEFT=2;var DIRECTION_RIGHT=4;var DIRECTION_UP=8;var DIRECTION_DOWN=16;var DIRECTION_HORIZONTAL=DIRECTION_LEFT|DIRECTION_RIGHT;var DIRECTION_VERTICAL=DIRECTION_UP|DIRECTION_DOWN;var DIRECTION_ALL=DIRECTION_HORIZONTAL|DIRECTION_VERTICAL;var PROPS_XY=['x','y'];var PROPS_CLIENT_XY=['clientX','clientY'];/**
     * create new input type manager
     * @param {Manager} manager
     * @param {Function} callback
     * @returns {Input}
     * @constructor
     */function Input(manager,callback){var self=this;this.manager=manager;this.callback=callback;this.element=manager.element;this.target=manager.options.inputTarget;// smaller wrapper around the handler, for the scope and the enabled state of the manager,
// so when disabled the input events are completely bypassed.
this.domHandler=function(ev){if(boolOrFn(manager.options.enable,[manager])){self.handler(ev);}};this.init();}Input.prototype={/**
         * should handle the inputEvent data and trigger the callback
         * @virtual
         */handler:function handler(){},/**
         * bind the events
         */init:function init(){this.evEl&&addEventListeners(this.element,this.evEl,this.domHandler);this.evTarget&&addEventListeners(this.target,this.evTarget,this.domHandler);this.evWin&&addEventListeners(getWindowForElement(this.element),this.evWin,this.domHandler);},/**
         * unbind the events
         */destroy:function destroy(){this.evEl&&removeEventListeners(this.element,this.evEl,this.domHandler);this.evTarget&&removeEventListeners(this.target,this.evTarget,this.domHandler);this.evWin&&removeEventListeners(getWindowForElement(this.element),this.evWin,this.domHandler);}};/**
     * create new input type manager
     * called by the Manager constructor
     * @param {Hammer} manager
     * @returns {Input}
     */function createInputInstance(manager){var Type;var inputClass=manager.options.inputClass;if(inputClass){Type=inputClass;}else if(SUPPORT_POINTER_EVENTS){Type=PointerEventInput;}else if(SUPPORT_ONLY_TOUCH){Type=TouchInput;}else if(!SUPPORT_TOUCH){Type=MouseInput;}else{Type=TouchMouseInput;}return new Type(manager,inputHandler);}/**
     * handle input events
     * @param {Manager} manager
     * @param {String} eventType
     * @param {Object} input
     */function inputHandler(manager,eventType,input){var pointersLen=input.pointers.length;var changedPointersLen=input.changedPointers.length;var isFirst=eventType&INPUT_START&&pointersLen-changedPointersLen===0;var isFinal=eventType&(INPUT_END|INPUT_CANCEL)&&pointersLen-changedPointersLen===0;input.isFirst=!!isFirst;input.isFinal=!!isFinal;if(isFirst){manager.session={};}// source event is the normalized value of the domEvents
// like 'touchstart, mouseup, pointerdown'
input.eventType=eventType;// compute scale, rotation etc
computeInputData(manager,input);// emit secret event
manager.emit('hammer.input',input);manager.recognize(input);manager.session.prevInput=input;}/**
     * extend the data with some usable properties like scale, rotate, velocity etc
     * @param {Object} manager
     * @param {Object} input
     */function computeInputData(manager,input){var session=manager.session;var pointers=input.pointers;var pointersLength=pointers.length;// store the first input to calculate the distance and direction
if(!session.firstInput){session.firstInput=simpleCloneInputData(input);}// to compute scale and rotation we need to store the multiple touches
if(pointersLength>1&&!session.firstMultiple){session.firstMultiple=simpleCloneInputData(input);}else if(pointersLength===1){session.firstMultiple=false;}var firstInput=session.firstInput;var firstMultiple=session.firstMultiple;var offsetCenter=firstMultiple?firstMultiple.center:firstInput.center;var center=input.center=getCenter(pointers);input.timeStamp=now();input.deltaTime=input.timeStamp-firstInput.timeStamp;input.angle=getAngle(offsetCenter,center);input.distance=getDistance(offsetCenter,center);computeDeltaXY(session,input);input.offsetDirection=getDirection(input.deltaX,input.deltaY);input.scale=firstMultiple?getScale(firstMultiple.pointers,pointers):1;input.rotation=firstMultiple?getRotation(firstMultiple.pointers,pointers):0;computeIntervalInputData(session,input);// find the correct target
var target=manager.element;if(hasParent(input.srcEvent.target,target)){target=input.srcEvent.target;}input.target=target;}function computeDeltaXY(session,input){var center=input.center;var offset=session.offsetDelta||{};var prevDelta=session.prevDelta||{};var prevInput=session.prevInput||{};if(input.eventType===INPUT_START||prevInput.eventType===INPUT_END){prevDelta=session.prevDelta={x:prevInput.deltaX||0,y:prevInput.deltaY||0};offset=session.offsetDelta={x:center.x,y:center.y};}input.deltaX=prevDelta.x+(center.x-offset.x);input.deltaY=prevDelta.y+(center.y-offset.y);}/**
     * velocity is calculated every x ms
     * @param {Object} session
     * @param {Object} input
     */function computeIntervalInputData(session,input){var last=session.lastInterval||input,deltaTime=input.timeStamp-last.timeStamp,velocity,velocityX,velocityY,direction;if(input.eventType!=INPUT_CANCEL&&(deltaTime>COMPUTE_INTERVAL||last.velocity===undefined)){var deltaX=last.deltaX-input.deltaX;var deltaY=last.deltaY-input.deltaY;var v=getVelocity(deltaTime,deltaX,deltaY);velocityX=v.x;velocityY=v.y;velocity=abs(v.x)>abs(v.y)?v.x:v.y;direction=getDirection(deltaX,deltaY);session.lastInterval=input;}else{// use latest velocity info if it doesn't overtake a minimum period
velocity=last.velocity;velocityX=last.velocityX;velocityY=last.velocityY;direction=last.direction;}input.velocity=velocity;input.velocityX=velocityX;input.velocityY=velocityY;input.direction=direction;}/**
     * create a simple clone from the input used for storage of firstInput and firstMultiple
     * @param {Object} input
     * @returns {Object} clonedInputData
     */function simpleCloneInputData(input){// make a simple copy of the pointers because we will get a reference if we don't
// we only need clientXY for the calculations
var pointers=[];var i=0;while(i<input.pointers.length){pointers[i]={clientX:round(input.pointers[i].clientX),clientY:round(input.pointers[i].clientY)};i++;}return{timeStamp:now(),pointers:pointers,center:getCenter(pointers),deltaX:input.deltaX,deltaY:input.deltaY};}/**
     * get the center of all the pointers
     * @param {Array} pointers
     * @return {Object} center contains `x` and `y` properties
     */function getCenter(pointers){var pointersLength=pointers.length;// no need to loop when only one touch
if(pointersLength===1){return{x:round(pointers[0].clientX),y:round(pointers[0].clientY)};}var x=0,y=0,i=0;while(i<pointersLength){x+=pointers[i].clientX;y+=pointers[i].clientY;i++;}return{x:round(x/pointersLength),y:round(y/pointersLength)};}/**
     * calculate the velocity between two points. unit is in px per ms.
     * @param {Number} deltaTime
     * @param {Number} x
     * @param {Number} y
     * @return {Object} velocity `x` and `y`
     */function getVelocity(deltaTime,x,y){return{x:x/deltaTime||0,y:y/deltaTime||0};}/**
     * get the direction between two points
     * @param {Number} x
     * @param {Number} y
     * @return {Number} direction
     */function getDirection(x,y){if(x===y){return DIRECTION_NONE;}if(abs(x)>=abs(y)){return x>0?DIRECTION_LEFT:DIRECTION_RIGHT;}return y>0?DIRECTION_UP:DIRECTION_DOWN;}/**
     * calculate the absolute distance between two points
     * @param {Object} p1 {x, y}
     * @param {Object} p2 {x, y}
     * @param {Array} [props] containing x and y keys
     * @return {Number} distance
     */function getDistance(p1,p2,props){if(!props){props=PROPS_XY;}var x=p2[props[0]]-p1[props[0]],y=p2[props[1]]-p1[props[1]];return Math.sqrt(x*x+y*y);}/**
     * calculate the angle between two coordinates
     * @param {Object} p1
     * @param {Object} p2
     * @param {Array} [props] containing x and y keys
     * @return {Number} angle
     */function getAngle(p1,p2,props){if(!props){props=PROPS_XY;}var x=p2[props[0]]-p1[props[0]],y=p2[props[1]]-p1[props[1]];return Math.atan2(y,x)*180/Math.PI;}/**
     * calculate the rotation degrees between two pointersets
     * @param {Array} start array of pointers
     * @param {Array} end array of pointers
     * @return {Number} rotation
     */function getRotation(start,end){return getAngle(end[1],end[0],PROPS_CLIENT_XY)-getAngle(start[1],start[0],PROPS_CLIENT_XY);}/**
     * calculate the scale factor between two pointersets
     * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
     * @param {Array} start array of pointers
     * @param {Array} end array of pointers
     * @return {Number} scale
     */function getScale(start,end){return getDistance(end[0],end[1],PROPS_CLIENT_XY)/getDistance(start[0],start[1],PROPS_CLIENT_XY);}var MOUSE_INPUT_MAP={mousedown:INPUT_START,mousemove:INPUT_MOVE,mouseup:INPUT_END};var MOUSE_ELEMENT_EVENTS='mousedown';var MOUSE_WINDOW_EVENTS='mousemove mouseup';/**
     * Mouse events input
     * @constructor
     * @extends Input
     */function MouseInput(){this.evEl=MOUSE_ELEMENT_EVENTS;this.evWin=MOUSE_WINDOW_EVENTS;this.allow=true;// used by Input.TouchMouse to disable mouse events
this.pressed=false;// mousedown state
Input.apply(this,arguments);}inherit(MouseInput,Input,{/**
         * handle mouse events
         * @param {Object} ev
         */handler:function MEhandler(ev){var eventType=MOUSE_INPUT_MAP[ev.type];// on start we want to have the left mouse button down
if(eventType&INPUT_START&&ev.button===0){this.pressed=true;}if(eventType&INPUT_MOVE&&ev.which!==1){eventType=INPUT_END;}// mouse must be down, and mouse events are allowed (see the TouchMouse input)
if(!this.pressed||!this.allow){return;}if(eventType&INPUT_END){this.pressed=false;}this.callback(this.manager,eventType,{pointers:[ev],changedPointers:[ev],pointerType:INPUT_TYPE_MOUSE,srcEvent:ev});}});var POINTER_INPUT_MAP={pointerdown:INPUT_START,pointermove:INPUT_MOVE,pointerup:INPUT_END,pointercancel:INPUT_CANCEL,pointerout:INPUT_CANCEL};// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM={2:INPUT_TYPE_TOUCH,3:INPUT_TYPE_PEN,4:INPUT_TYPE_MOUSE,5:INPUT_TYPE_KINECT// see https://twitter.com/jacobrossi/status/480596438489890816
};var POINTER_ELEMENT_EVENTS='pointerdown';var POINTER_WINDOW_EVENTS='pointermove pointerup pointercancel';// IE10 has prefixed support, and case-sensitive
if(window.MSPointerEvent){POINTER_ELEMENT_EVENTS='MSPointerDown';POINTER_WINDOW_EVENTS='MSPointerMove MSPointerUp MSPointerCancel';}/**
     * Pointer events input
     * @constructor
     * @extends Input
     */function PointerEventInput(){this.evEl=POINTER_ELEMENT_EVENTS;this.evWin=POINTER_WINDOW_EVENTS;Input.apply(this,arguments);this.store=this.manager.session.pointerEvents=[];}inherit(PointerEventInput,Input,{/**
         * handle mouse events
         * @param {Object} ev
         */handler:function PEhandler(ev){var store=this.store;var removePointer=false;var eventTypeNormalized=ev.type.toLowerCase().replace('ms','');var eventType=POINTER_INPUT_MAP[eventTypeNormalized];var pointerType=IE10_POINTER_TYPE_ENUM[ev.pointerType]||ev.pointerType;var isTouch=pointerType==INPUT_TYPE_TOUCH;// get index of the event in the store
var storeIndex=inArray(store,ev.pointerId,'pointerId');// start and mouse must be down
if(eventType&INPUT_START&&(ev.button===0||isTouch)){if(storeIndex<0){store.push(ev);storeIndex=store.length-1;}}else if(eventType&(INPUT_END|INPUT_CANCEL)){removePointer=true;}// it not found, so the pointer hasn't been down (so it's probably a hover)
if(storeIndex<0){return;}// update the event in the store
store[storeIndex]=ev;this.callback(this.manager,eventType,{pointers:store,changedPointers:[ev],pointerType:pointerType,srcEvent:ev});if(removePointer){// remove from the store
store.splice(storeIndex,1);}}});var SINGLE_TOUCH_INPUT_MAP={touchstart:INPUT_START,touchmove:INPUT_MOVE,touchend:INPUT_END,touchcancel:INPUT_CANCEL};var SINGLE_TOUCH_TARGET_EVENTS='touchstart';var SINGLE_TOUCH_WINDOW_EVENTS='touchstart touchmove touchend touchcancel';/**
     * Touch events input
     * @constructor
     * @extends Input
     */function SingleTouchInput(){this.evTarget=SINGLE_TOUCH_TARGET_EVENTS;this.evWin=SINGLE_TOUCH_WINDOW_EVENTS;this.started=false;Input.apply(this,arguments);}inherit(SingleTouchInput,Input,{handler:function TEhandler(ev){var type=SINGLE_TOUCH_INPUT_MAP[ev.type];// should we handle the touch events?
if(type===INPUT_START){this.started=true;}if(!this.started){return;}var touches=normalizeSingleTouches.call(this,ev,type);// when done, reset the started state
if(type&(INPUT_END|INPUT_CANCEL)&&touches[0].length-touches[1].length===0){this.started=false;}this.callback(this.manager,type,{pointers:touches[0],changedPointers:touches[1],pointerType:INPUT_TYPE_TOUCH,srcEvent:ev});}});/**
     * @this {TouchInput}
     * @param {Object} ev
     * @param {Number} type flag
     * @returns {undefined|Array} [all, changed]
     */function normalizeSingleTouches(ev,type){var all=toArray(ev.touches);var changed=toArray(ev.changedTouches);if(type&(INPUT_END|INPUT_CANCEL)){all=uniqueArray(all.concat(changed),'identifier',true);}return[all,changed];}var TOUCH_INPUT_MAP={touchstart:INPUT_START,touchmove:INPUT_MOVE,touchend:INPUT_END,touchcancel:INPUT_CANCEL};var TOUCH_TARGET_EVENTS='touchstart touchmove touchend touchcancel';/**
     * Multi-user touch events input
     * @constructor
     * @extends Input
     */function TouchInput(){this.evTarget=TOUCH_TARGET_EVENTS;this.targetIds={};Input.apply(this,arguments);}inherit(TouchInput,Input,{handler:function MTEhandler(ev){var type=TOUCH_INPUT_MAP[ev.type];var touches=getTouches.call(this,ev,type);if(!touches){return;}this.callback(this.manager,type,{pointers:touches[0],changedPointers:touches[1],pointerType:INPUT_TYPE_TOUCH,srcEvent:ev});}});/**
     * @this {TouchInput}
     * @param {Object} ev
     * @param {Number} type flag
     * @returns {undefined|Array} [all, changed]
     */function getTouches(ev,type){var allTouches=toArray(ev.touches);var targetIds=this.targetIds;// when there is only one touch, the process can be simplified
if(type&(INPUT_START|INPUT_MOVE)&&allTouches.length===1){targetIds[allTouches[0].identifier]=true;return[allTouches,allTouches];}var i,targetTouches,changedTouches=toArray(ev.changedTouches),changedTargetTouches=[],target=this.target;// get target touches from touches
targetTouches=allTouches.filter(function(touch){return hasParent(touch.target,target);});// collect touches
if(type===INPUT_START){i=0;while(i<targetTouches.length){targetIds[targetTouches[i].identifier]=true;i++;}}// filter changed touches to only contain touches that exist in the collected target ids
i=0;while(i<changedTouches.length){if(targetIds[changedTouches[i].identifier]){changedTargetTouches.push(changedTouches[i]);}// cleanup removed touches
if(type&(INPUT_END|INPUT_CANCEL)){delete targetIds[changedTouches[i].identifier];}i++;}if(!changedTargetTouches.length){return;}return[// merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
uniqueArray(targetTouches.concat(changedTargetTouches),'identifier',true),changedTargetTouches];}/**
     * Combined touch and mouse input
     *
     * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
     * This because touch devices also emit mouse events while doing a touch.
     *
     * @constructor
     * @extends Input
     */function TouchMouseInput(){Input.apply(this,arguments);var handler=bindFn(this.handler,this);this.touch=new TouchInput(this.manager,handler);this.mouse=new MouseInput(this.manager,handler);}inherit(TouchMouseInput,Input,{/**
         * handle mouse and touch events
         * @param {Hammer} manager
         * @param {String} inputEvent
         * @param {Object} inputData
         */handler:function TMEhandler(manager,inputEvent,inputData){var isTouch=inputData.pointerType==INPUT_TYPE_TOUCH,isMouse=inputData.pointerType==INPUT_TYPE_MOUSE;// when we're in a touch event, so  block all upcoming mouse events
// most mobile browser also emit mouseevents, right after touchstart
if(isTouch){this.mouse.allow=false;}else if(isMouse&&!this.mouse.allow){return;}// reset the allowMouse when we're done
if(inputEvent&(INPUT_END|INPUT_CANCEL)){this.mouse.allow=true;}this.callback(manager,inputEvent,inputData);},/**
         * remove the event listeners
         */destroy:function destroy(){this.touch.destroy();this.mouse.destroy();}});var PREFIXED_TOUCH_ACTION=prefixed(TEST_ELEMENT.style,'touchAction');var NATIVE_TOUCH_ACTION=PREFIXED_TOUCH_ACTION!==undefined;// magical touchAction value
var TOUCH_ACTION_COMPUTE='compute';var TOUCH_ACTION_AUTO='auto';var TOUCH_ACTION_MANIPULATION='manipulation';// not implemented
var TOUCH_ACTION_NONE='none';var TOUCH_ACTION_PAN_X='pan-x';var TOUCH_ACTION_PAN_Y='pan-y';/**
     * Touch Action
     * sets the touchAction property or uses the js alternative
     * @param {Manager} manager
     * @param {String} value
     * @constructor
     */function TouchAction(manager,value){this.manager=manager;this.set(value);}TouchAction.prototype={/**
         * set the touchAction value on the element or enable the polyfill
         * @param {String} value
         */set:function set(value){// find out the touch-action by the event handlers
if(value==TOUCH_ACTION_COMPUTE){value=this.compute();}if(NATIVE_TOUCH_ACTION){this.manager.element.style[PREFIXED_TOUCH_ACTION]=value;}this.actions=value.toLowerCase().trim();},/**
         * just re-set the touchAction value
         */update:function update(){this.set(this.manager.options.touchAction);},/**
         * compute the value for the touchAction property based on the recognizer's settings
         * @returns {String} value
         */compute:function compute(){var actions=[];each(this.manager.recognizers,function(recognizer){if(boolOrFn(recognizer.options.enable,[recognizer])){actions=actions.concat(recognizer.getTouchAction());}});return cleanTouchActions(actions.join(' '));},/**
         * this method is called on each input cycle and provides the preventing of the browser behavior
         * @param {Object} input
         */preventDefaults:function preventDefaults(input){// not needed with native support for the touchAction property
if(NATIVE_TOUCH_ACTION){return;}var srcEvent=input.srcEvent;var direction=input.offsetDirection;// if the touch action did prevented once this session
if(this.manager.session.prevented){srcEvent.preventDefault();return;}var actions=this.actions;var hasNone=inStr(actions,TOUCH_ACTION_NONE);var hasPanY=inStr(actions,TOUCH_ACTION_PAN_Y);var hasPanX=inStr(actions,TOUCH_ACTION_PAN_X);if(hasNone||hasPanY&&direction&DIRECTION_HORIZONTAL||hasPanX&&direction&DIRECTION_VERTICAL){return this.preventSrc(srcEvent);}},/**
         * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
         * @param {Object} srcEvent
         */preventSrc:function preventSrc(srcEvent){this.manager.session.prevented=true;srcEvent.preventDefault();}};/**
     * when the touchActions are collected they are not a valid value, so we need to clean things up. *
     * @param {String} actions
     * @returns {*}
     */function cleanTouchActions(actions){// none
if(inStr(actions,TOUCH_ACTION_NONE)){return TOUCH_ACTION_NONE;}var hasPanX=inStr(actions,TOUCH_ACTION_PAN_X);var hasPanY=inStr(actions,TOUCH_ACTION_PAN_Y);// pan-x and pan-y can be combined
if(hasPanX&&hasPanY){return TOUCH_ACTION_PAN_X+' '+TOUCH_ACTION_PAN_Y;}// pan-x OR pan-y
if(hasPanX||hasPanY){return hasPanX?TOUCH_ACTION_PAN_X:TOUCH_ACTION_PAN_Y;}// manipulation
if(inStr(actions,TOUCH_ACTION_MANIPULATION)){return TOUCH_ACTION_MANIPULATION;}return TOUCH_ACTION_AUTO;}/**
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
     */var STATE_POSSIBLE=1;var STATE_BEGAN=2;var STATE_CHANGED=4;var STATE_ENDED=8;var STATE_RECOGNIZED=STATE_ENDED;var STATE_CANCELLED=16;var STATE_FAILED=32;/**
     * Recognizer
     * Every recognizer needs to extend from this class.
     * @constructor
     * @param {Object} options
     */function Recognizer(options){this.id=uniqueId();this.manager=null;this.options=merge(options||{},this.defaults);// default is enable true
this.options.enable=ifUndefined(this.options.enable,true);this.state=STATE_POSSIBLE;this.simultaneous={};this.requireFail=[];}Recognizer.prototype={/**
         * @virtual
         * @type {Object}
         */defaults:{},/**
         * set options
         * @param {Object} options
         * @return {Recognizer}
         */set:function set(options){extend(this.options,options);// also update the touchAction, in case something changed about the directions/enabled state
this.manager&&this.manager.touchAction.update();return this;},/**
         * recognize simultaneous with an other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */recognizeWith:function recognizeWith(otherRecognizer){if(invokeArrayArg(otherRecognizer,'recognizeWith',this)){return this;}var simultaneous=this.simultaneous;otherRecognizer=getRecognizerByNameIfManager(otherRecognizer,this);if(!simultaneous[otherRecognizer.id]){simultaneous[otherRecognizer.id]=otherRecognizer;otherRecognizer.recognizeWith(this);}return this;},/**
         * drop the simultaneous link. it doesnt remove the link on the other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */dropRecognizeWith:function dropRecognizeWith(otherRecognizer){if(invokeArrayArg(otherRecognizer,'dropRecognizeWith',this)){return this;}otherRecognizer=getRecognizerByNameIfManager(otherRecognizer,this);delete this.simultaneous[otherRecognizer.id];return this;},/**
         * recognizer can only run when an other is failing
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */requireFailure:function requireFailure(otherRecognizer){if(invokeArrayArg(otherRecognizer,'requireFailure',this)){return this;}var requireFail=this.requireFail;otherRecognizer=getRecognizerByNameIfManager(otherRecognizer,this);if(inArray(requireFail,otherRecognizer)===-1){requireFail.push(otherRecognizer);otherRecognizer.requireFailure(this);}return this;},/**
         * drop the requireFailure link. it does not remove the link on the other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */dropRequireFailure:function dropRequireFailure(otherRecognizer){if(invokeArrayArg(otherRecognizer,'dropRequireFailure',this)){return this;}otherRecognizer=getRecognizerByNameIfManager(otherRecognizer,this);var index=inArray(this.requireFail,otherRecognizer);if(index>-1){this.requireFail.splice(index,1);}return this;},/**
         * has require failures boolean
         * @returns {boolean}
         */hasRequireFailures:function hasRequireFailures(){return this.requireFail.length>0;},/**
         * if the recognizer can recognize simultaneous with an other recognizer
         * @param {Recognizer} otherRecognizer
         * @returns {Boolean}
         */canRecognizeWith:function canRecognizeWith(otherRecognizer){return!!this.simultaneous[otherRecognizer.id];},/**
         * You should use `tryEmit` instead of `emit` directly to check
         * that all the needed recognizers has failed before emitting.
         * @param {Object} input
         */emit:function emit(input){var self=this;var state=this.state;function emit(withState){self.manager.emit(self.options.event+(withState?stateStr(state):''),input);}// 'panstart' and 'panmove'
if(state<STATE_ENDED){emit(true);}emit();// simple 'eventName' events
// panend and pancancel
if(state>=STATE_ENDED){emit(true);}},/**
         * Check that all the require failure recognizers has failed,
         * if true, it emits a gesture event,
         * otherwise, setup the state to FAILED.
         * @param {Object} input
         */tryEmit:function tryEmit(input){if(this.canEmit()){return this.emit(input);}// it's failing anyway
this.state=STATE_FAILED;},/**
         * can we emit?
         * @returns {boolean}
         */canEmit:function canEmit(){var i=0;while(i<this.requireFail.length){if(!(this.requireFail[i].state&(STATE_FAILED|STATE_POSSIBLE))){return false;}i++;}return true;},/**
         * update the recognizer
         * @param {Object} inputData
         */recognize:function recognize(inputData){// make a new copy of the inputData
// so we can change the inputData without messing up the other recognizers
var inputDataClone=extend({},inputData);// is is enabled and allow recognizing?
if(!boolOrFn(this.options.enable,[this,inputDataClone])){this.reset();this.state=STATE_FAILED;return;}// reset when we've reached the end
if(this.state&(STATE_RECOGNIZED|STATE_CANCELLED|STATE_FAILED)){this.state=STATE_POSSIBLE;}this.state=this.process(inputDataClone);// the recognizer has recognized a gesture
// so trigger an event
if(this.state&(STATE_BEGAN|STATE_CHANGED|STATE_ENDED|STATE_CANCELLED)){this.tryEmit(inputDataClone);}},/**
         * return the state of the recognizer
         * the actual recognizing happens in this method
         * @virtual
         * @param {Object} inputData
         * @returns {Const} STATE
         */process:function process(inputData){},// jshint ignore:line
/**
         * return the preferred touch-action
         * @virtual
         * @returns {Array}
         */getTouchAction:function getTouchAction(){},/**
         * called when the gesture isn't allowed to recognize
         * like when another is being recognized or it is disabled
         * @virtual
         */reset:function reset(){}};/**
     * get a usable string, used as event postfix
     * @param {Const} state
     * @returns {String} state
     */function stateStr(state){if(state&STATE_CANCELLED){return'cancel';}else if(state&STATE_ENDED){return'end';}else if(state&STATE_CHANGED){return'move';}else if(state&STATE_BEGAN){return'start';}return'';}/**
     * direction cons to string
     * @param {Const} direction
     * @returns {String}
     */function directionStr(direction){if(direction==DIRECTION_DOWN){return'down';}else if(direction==DIRECTION_UP){return'up';}else if(direction==DIRECTION_LEFT){return'left';}else if(direction==DIRECTION_RIGHT){return'right';}return'';}/**
     * get a recognizer by name if it is bound to a manager
     * @param {Recognizer|String} otherRecognizer
     * @param {Recognizer} recognizer
     * @returns {Recognizer}
     */function getRecognizerByNameIfManager(otherRecognizer,recognizer){var manager=recognizer.manager;if(manager){return manager.get(otherRecognizer);}return otherRecognizer;}/**
     * This recognizer is just used as a base for the simple attribute recognizers.
     * @constructor
     * @extends Recognizer
     */function AttrRecognizer(){Recognizer.apply(this,arguments);}inherit(AttrRecognizer,Recognizer,{/**
         * @namespace
         * @memberof AttrRecognizer
         */defaults:{/**
             * @type {Number}
             * @default 1
             */pointers:1},/**
         * Used to check if it the recognizer receives valid input, like input.distance > 10.
         * @memberof AttrRecognizer
         * @param {Object} input
         * @returns {Boolean} recognized
         */attrTest:function attrTest(input){var optionPointers=this.options.pointers;return optionPointers===0||input.pointers.length===optionPointers;},/**
         * Process the input and return the state for the recognizer
         * @memberof AttrRecognizer
         * @param {Object} input
         * @returns {*} State
         */process:function process(input){var state=this.state;var eventType=input.eventType;var isRecognized=state&(STATE_BEGAN|STATE_CHANGED);var isValid=this.attrTest(input);// on cancel input and we've recognized before, return STATE_CANCELLED
if(isRecognized&&(eventType&INPUT_CANCEL||!isValid)){return state|STATE_CANCELLED;}else if(isRecognized||isValid){if(eventType&INPUT_END){return state|STATE_ENDED;}else if(!(state&STATE_BEGAN)){return STATE_BEGAN;}return state|STATE_CHANGED;}return STATE_FAILED;}});/**
     * Pan
     * Recognized when the pointer is down and moved in the allowed direction.
     * @constructor
     * @extends AttrRecognizer
     */function PanRecognizer(){AttrRecognizer.apply(this,arguments);this.pX=null;this.pY=null;}inherit(PanRecognizer,AttrRecognizer,{/**
         * @namespace
         * @memberof PanRecognizer
         */defaults:{event:'pan',threshold:10,pointers:1,direction:DIRECTION_ALL},getTouchAction:function getTouchAction(){var direction=this.options.direction;var actions=[];if(direction&DIRECTION_HORIZONTAL){actions.push(TOUCH_ACTION_PAN_Y);}if(direction&DIRECTION_VERTICAL){actions.push(TOUCH_ACTION_PAN_X);}return actions;},directionTest:function directionTest(input){var options=this.options;var hasMoved=true;var distance=input.distance;var direction=input.direction;var x=input.deltaX;var y=input.deltaY;// lock to axis?
if(!(direction&options.direction)){if(options.direction&DIRECTION_HORIZONTAL){direction=x===0?DIRECTION_NONE:x<0?DIRECTION_LEFT:DIRECTION_RIGHT;hasMoved=x!=this.pX;distance=Math.abs(input.deltaX);}else{direction=y===0?DIRECTION_NONE:y<0?DIRECTION_UP:DIRECTION_DOWN;hasMoved=y!=this.pY;distance=Math.abs(input.deltaY);}}input.direction=direction;return hasMoved&&distance>options.threshold&&direction&options.direction;},attrTest:function attrTest(input){return AttrRecognizer.prototype.attrTest.call(this,input)&&(this.state&STATE_BEGAN||!(this.state&STATE_BEGAN)&&this.directionTest(input));},emit:function emit(input){this.pX=input.deltaX;this.pY=input.deltaY;var direction=directionStr(input.direction);if(direction){this.manager.emit(this.options.event+direction,input);}this._super.emit.call(this,input);},reset:function reset(){}});/**
     * Pinch
     * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
     * @constructor
     * @extends AttrRecognizer
     */function PinchRecognizer(){AttrRecognizer.apply(this,arguments);}inherit(PinchRecognizer,AttrRecognizer,{/**
         * @namespace
         * @memberof PinchRecognizer
         */defaults:{event:'pinch',threshold:0,pointers:2},getTouchAction:function getTouchAction(){return[TOUCH_ACTION_NONE];},attrTest:function attrTest(input){return this._super.attrTest.call(this,input)&&(Math.abs(input.scale-1)>this.options.threshold||this.state&STATE_BEGAN);},emit:function emit(input){this._super.emit.call(this,input);if(input.scale!==1){var inOut=input.scale<1?'in':'out';this.manager.emit(this.options.event+inOut,input);}}});/**
     * Press
     * Recognized when the pointer is down for x ms without any movement.
     * @constructor
     * @extends Recognizer
     */function PressRecognizer(){Recognizer.apply(this,arguments);this._timer=null;this._input=null;}inherit(PressRecognizer,Recognizer,{/**
         * @namespace
         * @memberof PressRecognizer
         */defaults:{event:'press',pointers:1,time:500,// minimal time of the pointer to be pressed
threshold:5// a minimal movement is ok, but keep it low
},getTouchAction:function getTouchAction(){return[TOUCH_ACTION_AUTO];},process:function process(input){var options=this.options;var validPointers=input.pointers.length===options.pointers;var validMovement=input.distance<options.threshold;var validTime=input.deltaTime>options.time;this._input=input;// we only allow little movement
// and we've reached an end event, so a tap is possible
if(!validMovement||!validPointers||input.eventType&(INPUT_END|INPUT_CANCEL)&&!validTime){this.reset();}else if(input.eventType&INPUT_START){this.reset();this._timer=setTimeoutContext(function(){this.state=STATE_RECOGNIZED;this.tryEmit();},options.time,this);}else if(input.eventType&INPUT_END){return STATE_RECOGNIZED;}return STATE_FAILED;},reset:function reset(){clearTimeout(this._timer);},emit:function emit(input){if(this.state!==STATE_RECOGNIZED){return;}if(input&&input.eventType&INPUT_END){this.manager.emit(this.options.event+'up',input);}else{this._input.timeStamp=now();this.manager.emit(this.options.event,this._input);}}});/**
     * Rotate
     * Recognized when two or more pointer are moving in a circular motion.
     * @constructor
     * @extends AttrRecognizer
     */function RotateRecognizer(){AttrRecognizer.apply(this,arguments);}inherit(RotateRecognizer,AttrRecognizer,{/**
         * @namespace
         * @memberof RotateRecognizer
         */defaults:{event:'rotate',threshold:0,pointers:2},getTouchAction:function getTouchAction(){return[TOUCH_ACTION_NONE];},attrTest:function attrTest(input){return this._super.attrTest.call(this,input)&&(Math.abs(input.rotation)>this.options.threshold||this.state&STATE_BEGAN);}});/**
     * Swipe
     * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
     * @constructor
     * @extends AttrRecognizer
     */function SwipeRecognizer(){AttrRecognizer.apply(this,arguments);}inherit(SwipeRecognizer,AttrRecognizer,{/**
         * @namespace
         * @memberof SwipeRecognizer
         */defaults:{event:'swipe',threshold:10,velocity:0.65,direction:DIRECTION_HORIZONTAL|DIRECTION_VERTICAL,pointers:1},getTouchAction:function getTouchAction(){return PanRecognizer.prototype.getTouchAction.call(this);},attrTest:function attrTest(input){var direction=this.options.direction;var velocity;if(direction&(DIRECTION_HORIZONTAL|DIRECTION_VERTICAL)){velocity=input.velocity;}else if(direction&DIRECTION_HORIZONTAL){velocity=input.velocityX;}else if(direction&DIRECTION_VERTICAL){velocity=input.velocityY;}return this._super.attrTest.call(this,input)&&direction&input.direction&&input.distance>this.options.threshold&&abs(velocity)>this.options.velocity&&input.eventType&INPUT_END;},emit:function emit(input){var direction=directionStr(input.direction);if(direction){this.manager.emit(this.options.event+direction,input);}this.manager.emit(this.options.event,input);}});/**
     * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
     * between the given interval and position. The delay option can be used to recognize multi-taps without firing
     * a single tap.
     *
     * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
     * multi-taps being recognized.
     * @constructor
     * @extends Recognizer
     */function TapRecognizer(){Recognizer.apply(this,arguments);// previous time and center,
// used for tap counting
this.pTime=false;this.pCenter=false;this._timer=null;this._input=null;this.count=0;}inherit(TapRecognizer,Recognizer,{/**
         * @namespace
         * @memberof PinchRecognizer
         */defaults:{event:'tap',pointers:1,taps:1,interval:300,// max time between the multi-tap taps
time:250,// max time of the pointer to be down (like finger on the screen)
threshold:10,// a minimal movement is ok, but keep it low
posThreshold:10// a multi-tap can be a bit off the initial position
},getTouchAction:function getTouchAction(){return[TOUCH_ACTION_MANIPULATION];},process:function process(input){var options=this.options;var validPointers=input.pointers.length===options.pointers;var validMovement=input.distance<options.threshold;var validTouchTime=input.deltaTime<options.time;this.reset();if(input.eventType&INPUT_START&&this.count===0){return this.failTimeout();}// we only allow little movement
// and we've reached an end event, so a tap is possible
if(validMovement&&validTouchTime&&validPointers){if(input.eventType!=INPUT_END){return this.failTimeout();}var validInterval=this.pTime?input.timeStamp-this.pTime<options.interval:true;var validMultiTap=!this.pCenter||getDistance(this.pCenter,input.center)<options.posThreshold;this.pTime=input.timeStamp;this.pCenter=input.center;if(!validMultiTap||!validInterval){this.count=1;}else{this.count+=1;}this._input=input;// if tap count matches we have recognized it,
// else it has began recognizing...
var tapCount=this.count%options.taps;if(tapCount===0){// no failing requirements, immediately trigger the tap event
// or wait as long as the multitap interval to trigger
if(!this.hasRequireFailures()){return STATE_RECOGNIZED;}else{this._timer=setTimeoutContext(function(){this.state=STATE_RECOGNIZED;this.tryEmit();},options.interval,this);return STATE_BEGAN;}}}return STATE_FAILED;},failTimeout:function failTimeout(){this._timer=setTimeoutContext(function(){this.state=STATE_FAILED;},this.options.interval,this);return STATE_FAILED;},reset:function reset(){clearTimeout(this._timer);},emit:function emit(){if(this.state==STATE_RECOGNIZED){this._input.tapCount=this.count;this.manager.emit(this.options.event,this._input);}}});/**
     * Simple way to create an manager with a default set of recognizers.
     * @param {HTMLElement} element
     * @param {Object} [options]
     * @constructor
     */function Hammer(element,options){options=options||{};options.recognizers=ifUndefined(options.recognizers,Hammer.defaults.preset);return new Manager(element,options);}/**
     * @const {string}
     */Hammer.VERSION='2.0.4';/**
     * default settings
     * @namespace
     */Hammer.defaults={/**
         * set if DOM events are being triggered.
         * But this is slower and unused by simple implementations, so disabled by default.
         * @type {Boolean}
         * @default false
         */domEvents:false,/**
         * The value for the touchAction property/fallback.
         * When set to `compute` it will magically set the correct value based on the added recognizers.
         * @type {String}
         * @default compute
         */touchAction:TOUCH_ACTION_COMPUTE,/**
         * @type {Boolean}
         * @default true
         */enable:true,/**
         * EXPERIMENTAL FEATURE -- can be removed/changed
         * Change the parent input target element.
         * If Null, then it is being set the to main element.
         * @type {Null|EventTarget}
         * @default null
         */inputTarget:null,/**
         * force an input class
         * @type {Null|Function}
         * @default null
         */inputClass:null,/**
         * Default recognizer setup when calling `Hammer()`
         * When creating a new Manager these will be skipped.
         * @type {Array}
         */preset:[// RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
[RotateRecognizer,{enable:false}],[PinchRecognizer,{enable:false},['rotate']],[SwipeRecognizer,{direction:DIRECTION_HORIZONTAL}],[PanRecognizer,{direction:DIRECTION_HORIZONTAL},['swipe']],[TapRecognizer],[TapRecognizer,{event:'doubletap',taps:2},['tap']],[PressRecognizer]],/**
         * Some CSS properties can be used to improve the working of Hammer.
         * Add them to this method and they will be set when creating a new Manager.
         * @namespace
         */cssProps:{/**
             * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
             * @type {String}
             * @default 'none'
             */userSelect:'none',/**
             * Disable the Windows Phone grippers when pressing an element.
             * @type {String}
             * @default 'none'
             */touchSelect:'none',/**
             * Disables the default callout shown when you touch and hold a touch target.
             * On iOS, when you touch and hold a touch target such as a link, Safari displays
             * a callout containing information about the link. This property allows you to disable that callout.
             * @type {String}
             * @default 'none'
             */touchCallout:'none',/**
             * Specifies whether zooming is enabled. Used by IE10>
             * @type {String}
             * @default 'none'
             */contentZooming:'none',/**
             * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
             * @type {String}
             * @default 'none'
             */userDrag:'none',/**
             * Overrides the highlight color shown when the user taps a link or a JavaScript
             * clickable element in iOS. This property obeys the alpha value, if specified.
             * @type {String}
             * @default 'rgba(0,0,0,0)'
             */tapHighlightColor:'rgba(0,0,0,0)'}};var STOP=1;var FORCED_STOP=2;/**
     * Manager
     * @param {HTMLElement} element
     * @param {Object} [options]
     * @constructor
     */function Manager(element,options){options=options||{};this.options=merge(options,Hammer.defaults);this.options.inputTarget=this.options.inputTarget||element;this.handlers={};this.session={};this.recognizers=[];this.element=element;this.input=createInputInstance(this);this.touchAction=new TouchAction(this,this.options.touchAction);toggleCssProps(this,true);each(options.recognizers,function(item){var recognizer=this.add(new item[0](item[1]));item[2]&&recognizer.recognizeWith(item[2]);item[3]&&recognizer.requireFailure(item[3]);},this);}Manager.prototype={/**
         * set options
         * @param {Object} options
         * @returns {Manager}
         */set:function set(options){extend(this.options,options);// Options that need a little more setup
if(options.touchAction){this.touchAction.update();}if(options.inputTarget){// Clean up existing event listeners and reinitialize
this.input.destroy();this.input.target=options.inputTarget;this.input.init();}return this;},/**
         * stop recognizing for this session.
         * This session will be discarded, when a new [input]start event is fired.
         * When forced, the recognizer cycle is stopped immediately.
         * @param {Boolean} [force]
         */stop:function stop(force){this.session.stopped=force?FORCED_STOP:STOP;},/**
         * run the recognizers!
         * called by the inputHandler function on every movement of the pointers (touches)
         * it walks through all the recognizers and tries to detect the gesture that is being made
         * @param {Object} inputData
         */recognize:function recognize(inputData){var session=this.session;if(session.stopped){return;}// run the touch-action polyfill
this.touchAction.preventDefaults(inputData);var recognizer;var recognizers=this.recognizers;// this holds the recognizer that is being recognized.
// so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
// if no recognizer is detecting a thing, it is set to `null`
var curRecognizer=session.curRecognizer;// reset when the last recognizer is recognized
// or when we're in a new session
if(!curRecognizer||curRecognizer&&curRecognizer.state&STATE_RECOGNIZED){curRecognizer=session.curRecognizer=null;}var i=0;while(i<recognizers.length){recognizer=recognizers[i];// find out if we are allowed try to recognize the input for this one.
// 1.   allow if the session is NOT forced stopped (see the .stop() method)
// 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
//      that is being recognized.
// 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
//      this can be setup with the `recognizeWith()` method on the recognizer.
if(session.stopped!==FORCED_STOP&&(// 1
!curRecognizer||recognizer==curRecognizer||// 2
recognizer.canRecognizeWith(curRecognizer))){// 3
recognizer.recognize(inputData);}else{recognizer.reset();}// if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
// current active recognizer. but only if we don't already have an active recognizer
if(!curRecognizer&&recognizer.state&(STATE_BEGAN|STATE_CHANGED|STATE_ENDED)){curRecognizer=session.curRecognizer=recognizer;}i++;}},/**
         * get a recognizer by its event name.
         * @param {Recognizer|String} recognizer
         * @returns {Recognizer|Null}
         */get:function get(recognizer){if(recognizer instanceof Recognizer){return recognizer;}var recognizers=this.recognizers;for(var i=0;i<recognizers.length;i++){if(recognizers[i].options.event==recognizer){return recognizers[i];}}return null;},/**
         * add a recognizer to the manager
         * existing recognizers with the same event name will be removed
         * @param {Recognizer} recognizer
         * @returns {Recognizer|Manager}
         */add:function add(recognizer){if(invokeArrayArg(recognizer,'add',this)){return this;}// remove existing
var existing=this.get(recognizer.options.event);if(existing){this.remove(existing);}this.recognizers.push(recognizer);recognizer.manager=this;this.touchAction.update();return recognizer;},/**
         * remove a recognizer by name or instance
         * @param {Recognizer|String} recognizer
         * @returns {Manager}
         */remove:function remove(recognizer){if(invokeArrayArg(recognizer,'remove',this)){return this;}var recognizers=this.recognizers;recognizer=this.get(recognizer);recognizers.splice(inArray(recognizers,recognizer),1);this.touchAction.update();return this;},/**
         * bind event
         * @param {String} events
         * @param {Function} handler
         * @returns {EventEmitter} this
         */on:function on(events,handler){var handlers=this.handlers;each(splitStr(events),function(event){handlers[event]=handlers[event]||[];handlers[event].push(handler);});return this;},/**
         * unbind event, leave emit blank to remove all handlers
         * @param {String} events
         * @param {Function} [handler]
         * @returns {EventEmitter} this
         */off:function off(events,handler){var handlers=this.handlers;each(splitStr(events),function(event){if(!handler){delete handlers[event];}else{handlers[event].splice(inArray(handlers[event],handler),1);}});return this;},/**
         * emit event to the listeners
         * @param {String} event
         * @param {Object} data
         */emit:function emit(event,data){// we also want to trigger dom events
if(this.options.domEvents){triggerDomEvent(event,data);}// no handlers, so skip it all
var handlers=this.handlers[event]&&this.handlers[event].slice();if(!handlers||!handlers.length){return;}data.type=event;data.preventDefault=function(){data.srcEvent.preventDefault();};var i=0;while(i<handlers.length){handlers[i](data);i++;}},/**
         * destroy the manager and unbinds all events
         * it doesn't unbind dom events, that is the user own responsibility
         */destroy:function destroy(){this.element&&toggleCssProps(this,false);this.handlers={};this.session={};this.input.destroy();this.element=null;}};/**
     * add/remove the css properties as defined in manager.options.cssProps
     * @param {Manager} manager
     * @param {Boolean} add
     */function toggleCssProps(manager,add){var element=manager.element;each(manager.options.cssProps,function(value,name){element.style[prefixed(element.style,name)]=add?value:'';});}/**
     * trigger dom event
     * @param {String} event
     * @param {Object} data
     */function triggerDomEvent(event,data){var gestureEvent=document.createEvent('Event');gestureEvent.initEvent(event,true,true);gestureEvent.gesture=data;data.target.dispatchEvent(gestureEvent);}extend(Hammer,{INPUT_START:INPUT_START,INPUT_MOVE:INPUT_MOVE,INPUT_END:INPUT_END,INPUT_CANCEL:INPUT_CANCEL,STATE_POSSIBLE:STATE_POSSIBLE,STATE_BEGAN:STATE_BEGAN,STATE_CHANGED:STATE_CHANGED,STATE_ENDED:STATE_ENDED,STATE_RECOGNIZED:STATE_RECOGNIZED,STATE_CANCELLED:STATE_CANCELLED,STATE_FAILED:STATE_FAILED,DIRECTION_NONE:DIRECTION_NONE,DIRECTION_LEFT:DIRECTION_LEFT,DIRECTION_RIGHT:DIRECTION_RIGHT,DIRECTION_UP:DIRECTION_UP,DIRECTION_DOWN:DIRECTION_DOWN,DIRECTION_HORIZONTAL:DIRECTION_HORIZONTAL,DIRECTION_VERTICAL:DIRECTION_VERTICAL,DIRECTION_ALL:DIRECTION_ALL,Manager:Manager,Input:Input,TouchAction:TouchAction,TouchInput:TouchInput,MouseInput:MouseInput,PointerEventInput:PointerEventInput,TouchMouseInput:TouchMouseInput,SingleTouchInput:SingleTouchInput,Recognizer:Recognizer,AttrRecognizer:AttrRecognizer,Tap:TapRecognizer,Pan:PanRecognizer,Swipe:SwipeRecognizer,Pinch:PinchRecognizer,Rotate:RotateRecognizer,Press:PressRecognizer,on:addEventListeners,off:removeEventListeners,each:each,merge:merge,extend:extend,inherit:inherit,bindFn:bindFn,prefixed:prefixed});if((false?'undefined':_typeof(module))=='object'&&module.exports){module.exports=Hammer;}/** ignored by jsdoc **/else{return Hammer;}}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(10)(module));/***/},/* 80 *//***/function(module,exports,__webpack_require__){var isObject=__webpack_require__(5);var document=__webpack_require__(2).document;// typeof document.createElement is 'object' in old IE
var is=isObject(document)&&isObject(document.createElement);module.exports=function(it){return is?document.createElement(it):{};};/***/},/* 81 *//***/function(module,exports,__webpack_require__){var global=__webpack_require__(2);var core=__webpack_require__(25);var LIBRARY=__webpack_require__(38);var wksExt=__webpack_require__(135);var defineProperty=__webpack_require__(8).f;module.exports=function(name){var $Symbol=core.Symbol||(core.Symbol=LIBRARY?{}:global.Symbol||{});if(name.charAt(0)!='_'&&!(name in $Symbol))defineProperty($Symbol,name,{value:wksExt.f(name)});};/***/},/* 82 *//***/function(module,exports,__webpack_require__){var shared=__webpack_require__(57)('keys');var uid=__webpack_require__(37);module.exports=function(key){return shared[key]||(shared[key]=uid(key));};/***/},/* 83 *//***/function(module,exports){// IE 8- don't enum bug keys
module.exports='constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');/***/},/* 84 *//***/function(module,exports,__webpack_require__){var document=__webpack_require__(2).document;module.exports=document&&document.documentElement;/***/},/* 85 *//***/function(module,exports,__webpack_require__){// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */var isObject=__webpack_require__(5);var anObject=__webpack_require__(1);var check=function check(O,proto){anObject(O);if(!isObject(proto)&&proto!==null)throw TypeError(proto+": can't set as prototype!");};module.exports={set:Object.setPrototypeOf||('__proto__'in{}?// eslint-disable-line
function(test,buggy,set){try{set=__webpack_require__(22)(Function.call,__webpack_require__(19).f(Object.prototype,'__proto__').set,2);set(test,[]);buggy=!(test instanceof Array);}catch(e){buggy=true;}return function setPrototypeOf(O,proto){check(O,proto);if(buggy)O.__proto__=proto;else set(O,proto);return O;};}({},false):undefined),check:check};/***/},/* 86 *//***/function(module,exports){module.exports='\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003'+'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';/***/},/* 87 *//***/function(module,exports,__webpack_require__){var isObject=__webpack_require__(5);var setPrototypeOf=__webpack_require__(85).set;module.exports=function(that,target,C){var S=target.constructor;var P;if(S!==C&&typeof S=='function'&&(P=S.prototype)!==C.prototype&&isObject(P)&&setPrototypeOf){setPrototypeOf(that,P);}return that;};/***/},/* 88 *//***/function(module,exports,__webpack_require__){"use strict";var toInteger=__webpack_require__(28);var defined=__webpack_require__(27);module.exports=function repeat(count){var str=String(defined(this));var res='';var n=toInteger(count);if(n<0||n==Infinity)throw RangeError("Count can't be negative");for(;n>0;(n>>>=1)&&(str+=str)){if(n&1)res+=str;}return res;};/***/},/* 89 *//***/function(module,exports){// 20.2.2.28 Math.sign(x)
module.exports=Math.sign||function sign(x){// eslint-disable-next-line no-self-compare
return(x=+x)==0||x!=x?x:x<0?-1:1;};/***/},/* 90 *//***/function(module,exports){// 20.2.2.14 Math.expm1(x)
var $expm1=Math.expm1;module.exports=!$expm1// Old FF bug
||$expm1(10)>22025.465794806719||$expm1(10)<22025.4657948067165168// Tor Browser bug
||$expm1(-2e-17)!=-2e-17?function expm1(x){return(x=+x)==0?x:x>-1e-6&&x<1e-6?x+x*x/2:Math.exp(x)-1;}:$expm1;/***/},/* 91 *//***/function(module,exports,__webpack_require__){var toInteger=__webpack_require__(28);var defined=__webpack_require__(27);// true  -> String#at
// false -> String#codePointAt
module.exports=function(TO_STRING){return function(that,pos){var s=String(defined(that));var i=toInteger(pos);var l=s.length;var a,b;if(i<0||i>=l)return TO_STRING?'':undefined;a=s.charCodeAt(i);return a<0xd800||a>0xdbff||i+1===l||(b=s.charCodeAt(i+1))<0xdc00||b>0xdfff?TO_STRING?s.charAt(i):a:TO_STRING?s.slice(i,i+2):(a-0xd800<<10)+(b-0xdc00)+0x10000;};};/***/},/* 92 *//***/function(module,exports,__webpack_require__){"use strict";var LIBRARY=__webpack_require__(38);var $export=__webpack_require__(0);var redefine=__webpack_require__(16);var hide=__webpack_require__(15);var has=__webpack_require__(14);var Iterators=__webpack_require__(50);var $iterCreate=__webpack_require__(93);var setToStringTag=__webpack_require__(48);var getPrototypeOf=__webpack_require__(20);var ITERATOR=__webpack_require__(6)('iterator');var BUGGY=!([].keys&&'next'in[].keys());// Safari has buggy iterators w/o `next`
var FF_ITERATOR='@@iterator';var KEYS='keys';var VALUES='values';var returnThis=function returnThis(){return this;};module.exports=function(Base,NAME,Constructor,next,DEFAULT,IS_SET,FORCED){$iterCreate(Constructor,NAME,next);var getMethod=function getMethod(kind){if(!BUGGY&&kind in proto)return proto[kind];switch(kind){case KEYS:return function keys(){return new Constructor(this,kind);};case VALUES:return function values(){return new Constructor(this,kind);};}return function entries(){return new Constructor(this,kind);};};var TAG=NAME+' Iterator';var DEF_VALUES=DEFAULT==VALUES;var VALUES_BUG=false;var proto=Base.prototype;var $native=proto[ITERATOR]||proto[FF_ITERATOR]||DEFAULT&&proto[DEFAULT];var $default=$native||getMethod(DEFAULT);var $entries=DEFAULT?!DEF_VALUES?$default:getMethod('entries'):undefined;var $anyNative=NAME=='Array'?proto.entries||$native:$native;var methods,key,IteratorPrototype;// Fix native
if($anyNative){IteratorPrototype=getPrototypeOf($anyNative.call(new Base()));if(IteratorPrototype!==Object.prototype&&IteratorPrototype.next){// Set @@toStringTag to native iterators
setToStringTag(IteratorPrototype,TAG,true);// fix for some old engines
if(!LIBRARY&&!has(IteratorPrototype,ITERATOR))hide(IteratorPrototype,ITERATOR,returnThis);}}// fix Array#{values, @@iterator}.name in V8 / FF
if(DEF_VALUES&&$native&&$native.name!==VALUES){VALUES_BUG=true;$default=function values(){return $native.call(this);};}// Define iterator
if((!LIBRARY||FORCED)&&(BUGGY||VALUES_BUG||!proto[ITERATOR])){hide(proto,ITERATOR,$default);}// Plug for library
Iterators[NAME]=$default;Iterators[TAG]=returnThis;if(DEFAULT){methods={values:DEF_VALUES?$default:getMethod(VALUES),keys:IS_SET?$default:getMethod(KEYS),entries:$entries};if(FORCED)for(key in methods){if(!(key in proto))redefine(proto,key,methods[key]);}else $export($export.P+$export.F*(BUGGY||VALUES_BUG),NAME,methods);}return methods;};/***/},/* 93 *//***/function(module,exports,__webpack_require__){"use strict";var create=__webpack_require__(40);var descriptor=__webpack_require__(36);var setToStringTag=__webpack_require__(48);var IteratorPrototype={};// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(15)(IteratorPrototype,__webpack_require__(6)('iterator'),function(){return this;});module.exports=function(Constructor,NAME,next){Constructor.prototype=create(IteratorPrototype,{next:descriptor(1,next)});setToStringTag(Constructor,NAME+' Iterator');};/***/},/* 94 *//***/function(module,exports,__webpack_require__){// helper for String#{startsWith, endsWith, includes}
var isRegExp=__webpack_require__(62);var defined=__webpack_require__(27);module.exports=function(that,searchString,NAME){if(isRegExp(searchString))throw TypeError('String#'+NAME+" doesn't accept regex!");return String(defined(that));};/***/},/* 95 *//***/function(module,exports,__webpack_require__){var MATCH=__webpack_require__(6)('match');module.exports=function(KEY){var re=/./;try{'/./'[KEY](re);}catch(e){try{re[MATCH]=false;return!'/./'[KEY](re);}catch(f){/* empty */}}return true;};/***/},/* 96 *//***/function(module,exports,__webpack_require__){// check on default Array iterator
var Iterators=__webpack_require__(50);var ITERATOR=__webpack_require__(6)('iterator');var ArrayProto=Array.prototype;module.exports=function(it){return it!==undefined&&(Iterators.Array===it||ArrayProto[ITERATOR]===it);};/***/},/* 97 *//***/function(module,exports,__webpack_require__){"use strict";var $defineProperty=__webpack_require__(8);var createDesc=__webpack_require__(36);module.exports=function(object,index,value){if(index in object)$defineProperty.f(object,index,createDesc(0,value));else object[index]=value;};/***/},/* 98 *//***/function(module,exports,__webpack_require__){var classof=__webpack_require__(55);var ITERATOR=__webpack_require__(6)('iterator');var Iterators=__webpack_require__(50);module.exports=__webpack_require__(25).getIteratorMethod=function(it){if(it!=undefined)return it[ITERATOR]||it['@@iterator']||Iterators[classof(it)];};/***/},/* 99 *//***/function(module,exports,__webpack_require__){// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor=__webpack_require__(307);module.exports=function(original,length){return new(speciesConstructor(original))(length);};/***/},/* 100 *//***/function(module,exports,__webpack_require__){"use strict";// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var toObject=__webpack_require__(11);var toAbsoluteIndex=__webpack_require__(39);var toLength=__webpack_require__(9);module.exports=function fill(value/* , start = 0, end = @length */){var O=toObject(this);var length=toLength(O.length);var aLen=arguments.length;var index=toAbsoluteIndex(aLen>1?arguments[1]:undefined,length);var end=aLen>2?arguments[2]:undefined;var endPos=end===undefined?length:toAbsoluteIndex(end,length);while(endPos>index){O[index++]=value;}return O;};/***/},/* 101 *//***/function(module,exports,__webpack_require__){"use strict";var addToUnscopables=__webpack_require__(35);var step=__webpack_require__(150);var Iterators=__webpack_require__(50);var toIObject=__webpack_require__(17);// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports=__webpack_require__(92)(Array,'Array',function(iterated,kind){this._t=toIObject(iterated);// target
this._i=0;// next index
this._k=kind;// kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
},function(){var O=this._t;var kind=this._k;var index=this._i++;if(!O||index>=O.length){this._t=undefined;return step(1);}if(kind=='keys')return step(0,index);if(kind=='values')return step(0,O[index]);return step(0,[index,O[index]]);},'values');// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments=Iterators.Array;addToUnscopables('keys');addToUnscopables('values');addToUnscopables('entries');/***/},/* 102 *//***/function(module,exports,__webpack_require__){var ctx=__webpack_require__(22);var invoke=__webpack_require__(61);var html=__webpack_require__(84);var cel=__webpack_require__(80);var global=__webpack_require__(2);var process=global.process;var setTask=global.setImmediate;var clearTask=global.clearImmediate;var MessageChannel=global.MessageChannel;var Dispatch=global.Dispatch;var counter=0;var queue={};var ONREADYSTATECHANGE='onreadystatechange';var defer,channel,port;var run=function run(){var id=+this;// eslint-disable-next-line no-prototype-builtins
if(queue.hasOwnProperty(id)){var fn=queue[id];delete queue[id];fn();}};var listener=function listener(event){run.call(event.data);};// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask||!clearTask){setTask=function setImmediate(fn){var args=[];var i=1;while(arguments.length>i){args.push(arguments[i++]);}queue[++counter]=function(){// eslint-disable-next-line no-new-func
invoke(typeof fn=='function'?fn:Function(fn),args);};defer(counter);return counter;};clearTask=function clearImmediate(id){delete queue[id];};// Node.js 0.8-
if(__webpack_require__(23)(process)=='process'){defer=function defer(id){process.nextTick(ctx(run,id,1));};// Sphere (JS game engine) Dispatch API
}else if(Dispatch&&Dispatch.now){defer=function defer(id){Dispatch.now(ctx(run,id,1));};// Browsers with MessageChannel, includes WebWorkers
}else if(MessageChannel){channel=new MessageChannel();port=channel.port2;channel.port1.onmessage=listener;defer=ctx(port.postMessage,port,1);// Browsers with postMessage, skip WebWorkers
// IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
}else if(global.addEventListener&&typeof postMessage=='function'&&!global.importScripts){defer=function defer(id){global.postMessage(id+'','*');};global.addEventListener('message',listener,false);// IE8-
}else if(ONREADYSTATECHANGE in cel('script')){defer=function defer(id){html.appendChild(cel('script'))[ONREADYSTATECHANGE]=function(){html.removeChild(this);run.call(id);};};// Rest old browsers
}else{defer=function defer(id){setTimeout(ctx(run,id,1),0);};}}module.exports={set:setTask,clear:clearTask};/***/},/* 103 *//***/function(module,exports,__webpack_require__){var global=__webpack_require__(2);var macrotask=__webpack_require__(102).set;var Observer=global.MutationObserver||global.WebKitMutationObserver;var process=global.process;var Promise=global.Promise;var isNode=__webpack_require__(23)(process)=='process';module.exports=function(){var head,last,notify;var flush=function flush(){var parent,fn;if(isNode&&(parent=process.domain))parent.exit();while(head){fn=head.fn;head=head.next;try{fn();}catch(e){if(head)notify();else last=undefined;throw e;}}last=undefined;if(parent)parent.enter();};// Node.js
if(isNode){notify=function notify(){process.nextTick(flush);};// browsers with MutationObserver
}else if(Observer){var toggle=true;var node=document.createTextNode('');new Observer(flush).observe(node,{characterData:true});// eslint-disable-line no-new
notify=function notify(){node.data=toggle=!toggle;};// environments with maybe non-completely correct, but existent Promise
}else if(Promise&&Promise.resolve){var promise=Promise.resolve();notify=function notify(){promise.then(flush);};// for other environments - macrotask based on:
// - setImmediate
// - MessageChannel
// - window.postMessag
// - onreadystatechange
// - setTimeout
}else{notify=function notify(){// strange IE + webpack dev server bug - use .call(global)
macrotask.call(global,flush);};}return function(fn){var task={fn:fn,next:undefined};if(last)last.next=task;if(!head){head=task;notify();}last=task;};};/***/},/* 104 *//***/function(module,exports,__webpack_require__){"use strict";// 25.4.1.5 NewPromiseCapability(C)
var aFunction=__webpack_require__(12);function PromiseCapability(C){var resolve,reject;this.promise=new C(function($$resolve,$$reject){if(resolve!==undefined||reject!==undefined)throw TypeError('Bad Promise constructor');resolve=$$resolve;reject=$$reject;});this.resolve=aFunction(resolve);this.reject=aFunction(reject);}module.exports.f=function(C){return new PromiseCapability(C);};/***/},/* 105 *//***/function(module,exports,__webpack_require__){"use strict";var global=__webpack_require__(2);var DESCRIPTORS=__webpack_require__(7);var LIBRARY=__webpack_require__(38);var $typed=__webpack_require__(68);var hide=__webpack_require__(15);var redefineAll=__webpack_require__(45);var fails=__webpack_require__(3);var anInstance=__webpack_require__(43);var toInteger=__webpack_require__(28);var toLength=__webpack_require__(9);var toIndex=__webpack_require__(159);var gOPN=__webpack_require__(41).f;var dP=__webpack_require__(8).f;var arrayFill=__webpack_require__(100);var setToStringTag=__webpack_require__(48);var ARRAY_BUFFER='ArrayBuffer';var DATA_VIEW='DataView';var PROTOTYPE='prototype';var WRONG_LENGTH='Wrong length!';var WRONG_INDEX='Wrong index!';var $ArrayBuffer=global[ARRAY_BUFFER];var $DataView=global[DATA_VIEW];var Math=global.Math;var RangeError=global.RangeError;// eslint-disable-next-line no-shadow-restricted-names
var Infinity=global.Infinity;var BaseBuffer=$ArrayBuffer;var abs=Math.abs;var pow=Math.pow;var floor=Math.floor;var log=Math.log;var LN2=Math.LN2;var BUFFER='buffer';var BYTE_LENGTH='byteLength';var BYTE_OFFSET='byteOffset';var $BUFFER=DESCRIPTORS?'_b':BUFFER;var $LENGTH=DESCRIPTORS?'_l':BYTE_LENGTH;var $OFFSET=DESCRIPTORS?'_o':BYTE_OFFSET;// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value,mLen,nBytes){var buffer=Array(nBytes);var eLen=nBytes*8-mLen-1;var eMax=(1<<eLen)-1;var eBias=eMax>>1;var rt=mLen===23?pow(2,-24)-pow(2,-77):0;var i=0;var s=value<0||value===0&&1/value<0?1:0;var e,m,c;value=abs(value);// eslint-disable-next-line no-self-compare
if(value!=value||value===Infinity){// eslint-disable-next-line no-self-compare
m=value!=value?1:0;e=eMax;}else{e=floor(log(value)/LN2);if(value*(c=pow(2,-e))<1){e--;c*=2;}if(e+eBias>=1){value+=rt/c;}else{value+=rt*pow(2,1-eBias);}if(value*c>=2){e++;c/=2;}if(e+eBias>=eMax){m=0;e=eMax;}else if(e+eBias>=1){m=(value*c-1)*pow(2,mLen);e=e+eBias;}else{m=value*pow(2,eBias-1)*pow(2,mLen);e=0;}}for(;mLen>=8;buffer[i++]=m&255,m/=256,mLen-=8){}e=e<<mLen|m;eLen+=mLen;for(;eLen>0;buffer[i++]=e&255,e/=256,eLen-=8){}buffer[--i]|=s*128;return buffer;}function unpackIEEE754(buffer,mLen,nBytes){var eLen=nBytes*8-mLen-1;var eMax=(1<<eLen)-1;var eBias=eMax>>1;var nBits=eLen-7;var i=nBytes-1;var s=buffer[i--];var e=s&127;var m;s>>=7;for(;nBits>0;e=e*256+buffer[i],i--,nBits-=8){}m=e&(1<<-nBits)-1;e>>=-nBits;nBits+=mLen;for(;nBits>0;m=m*256+buffer[i],i--,nBits-=8){}if(e===0){e=1-eBias;}else if(e===eMax){return m?NaN:s?-Infinity:Infinity;}else{m=m+pow(2,mLen);e=e-eBias;}return(s?-1:1)*m*pow(2,e-mLen);}function unpackI32(bytes){return bytes[3]<<24|bytes[2]<<16|bytes[1]<<8|bytes[0];}function packI8(it){return[it&0xff];}function packI16(it){return[it&0xff,it>>8&0xff];}function packI32(it){return[it&0xff,it>>8&0xff,it>>16&0xff,it>>24&0xff];}function packF64(it){return packIEEE754(it,52,8);}function packF32(it){return packIEEE754(it,23,4);}function addGetter(C,key,internal){dP(C[PROTOTYPE],key,{get:function get(){return this[internal];}});}function get(view,bytes,index,isLittleEndian){var numIndex=+index;var intIndex=toIndex(numIndex);if(intIndex+bytes>view[$LENGTH])throw RangeError(WRONG_INDEX);var store=view[$BUFFER]._b;var start=intIndex+view[$OFFSET];var pack=store.slice(start,start+bytes);return isLittleEndian?pack:pack.reverse();}function set(view,bytes,index,conversion,value,isLittleEndian){var numIndex=+index;var intIndex=toIndex(numIndex);if(intIndex+bytes>view[$LENGTH])throw RangeError(WRONG_INDEX);var store=view[$BUFFER]._b;var start=intIndex+view[$OFFSET];var pack=conversion(+value);for(var i=0;i<bytes;i++){store[start+i]=pack[isLittleEndian?i:bytes-i-1];}}if(!$typed.ABV){$ArrayBuffer=function ArrayBuffer(length){anInstance(this,$ArrayBuffer,ARRAY_BUFFER);var byteLength=toIndex(length);this._b=arrayFill.call(Array(byteLength),0);this[$LENGTH]=byteLength;};$DataView=function DataView(buffer,byteOffset,byteLength){anInstance(this,$DataView,DATA_VIEW);anInstance(buffer,$ArrayBuffer,DATA_VIEW);var bufferLength=buffer[$LENGTH];var offset=toInteger(byteOffset);if(offset<0||offset>bufferLength)throw RangeError('Wrong offset!');byteLength=byteLength===undefined?bufferLength-offset:toLength(byteLength);if(offset+byteLength>bufferLength)throw RangeError(WRONG_LENGTH);this[$BUFFER]=buffer;this[$OFFSET]=offset;this[$LENGTH]=byteLength;};if(DESCRIPTORS){addGetter($ArrayBuffer,BYTE_LENGTH,'_l');addGetter($DataView,BUFFER,'_b');addGetter($DataView,BYTE_LENGTH,'_l');addGetter($DataView,BYTE_OFFSET,'_o');}redefineAll($DataView[PROTOTYPE],{getInt8:function getInt8(byteOffset){return get(this,1,byteOffset)[0]<<24>>24;},getUint8:function getUint8(byteOffset){return get(this,1,byteOffset)[0];},getInt16:function getInt16(byteOffset/* , littleEndian */){var bytes=get(this,2,byteOffset,arguments[1]);return(bytes[1]<<8|bytes[0])<<16>>16;},getUint16:function getUint16(byteOffset/* , littleEndian */){var bytes=get(this,2,byteOffset,arguments[1]);return bytes[1]<<8|bytes[0];},getInt32:function getInt32(byteOffset/* , littleEndian */){return unpackI32(get(this,4,byteOffset,arguments[1]));},getUint32:function getUint32(byteOffset/* , littleEndian */){return unpackI32(get(this,4,byteOffset,arguments[1]))>>>0;},getFloat32:function getFloat32(byteOffset/* , littleEndian */){return unpackIEEE754(get(this,4,byteOffset,arguments[1]),23,4);},getFloat64:function getFloat64(byteOffset/* , littleEndian */){return unpackIEEE754(get(this,8,byteOffset,arguments[1]),52,8);},setInt8:function setInt8(byteOffset,value){set(this,1,byteOffset,packI8,value);},setUint8:function setUint8(byteOffset,value){set(this,1,byteOffset,packI8,value);},setInt16:function setInt16(byteOffset,value/* , littleEndian */){set(this,2,byteOffset,packI16,value,arguments[2]);},setUint16:function setUint16(byteOffset,value/* , littleEndian */){set(this,2,byteOffset,packI16,value,arguments[2]);},setInt32:function setInt32(byteOffset,value/* , littleEndian */){set(this,4,byteOffset,packI32,value,arguments[2]);},setUint32:function setUint32(byteOffset,value/* , littleEndian */){set(this,4,byteOffset,packI32,value,arguments[2]);},setFloat32:function setFloat32(byteOffset,value/* , littleEndian */){set(this,4,byteOffset,packF32,value,arguments[2]);},setFloat64:function setFloat64(byteOffset,value/* , littleEndian */){set(this,8,byteOffset,packF64,value,arguments[2]);}});}else{if(!fails(function(){$ArrayBuffer(1);})||!fails(function(){new $ArrayBuffer(-1);// eslint-disable-line no-new
})||fails(function(){new $ArrayBuffer();// eslint-disable-line no-new
new $ArrayBuffer(1.5);// eslint-disable-line no-new
new $ArrayBuffer(NaN);// eslint-disable-line no-new
return $ArrayBuffer.name!=ARRAY_BUFFER;})){$ArrayBuffer=function ArrayBuffer(length){anInstance(this,$ArrayBuffer);return new BaseBuffer(toIndex(length));};var ArrayBufferProto=$ArrayBuffer[PROTOTYPE]=BaseBuffer[PROTOTYPE];for(var keys=gOPN(BaseBuffer),j=0,key;keys.length>j;){if(!((key=keys[j++])in $ArrayBuffer))hide($ArrayBuffer,key,BaseBuffer[key]);}if(!LIBRARY)ArrayBufferProto.constructor=$ArrayBuffer;}// iOS Safari 7.x bug
var view=new $DataView(new $ArrayBuffer(2));var $setInt8=$DataView[PROTOTYPE].setInt8;view.setInt8(0,2147483648);view.setInt8(1,2147483649);if(view.getInt8(0)||!view.getInt8(1))redefineAll($DataView[PROTOTYPE],{setInt8:function setInt8(byteOffset,value){$setInt8.call(this,byteOffset,value<<24>>24);},setUint8:function setUint8(byteOffset,value){$setInt8.call(this,byteOffset,value<<24>>24);}},true);}setToStringTag($ArrayBuffer,ARRAY_BUFFER);setToStringTag($DataView,DATA_VIEW);hide($DataView[PROTOTYPE],$typed.VIEW,true);exports[ARRAY_BUFFER]=$ArrayBuffer;exports[DATA_VIEW]=$DataView;/***/},/* 106 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_tab_vue__=__webpack_require__(115);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_251b338f_hasScoped_false_vux_loader_src_before_template_compiler_loader_js_vux_loader_src_template_loader_js_vue_loader_lib_selector_type_template_index_0_tab_vue__=__webpack_require__(116);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(112);}var normalizeComponent=__webpack_require__(4);/* script *//* template *//* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__=null;/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_tab_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_251b338f_hasScoped_false_vux_loader_src_before_template_compiler_loader_js_vux_loader_src_template_loader_js_vue_loader_lib_selector_type_template_index_0_tab_vue__["a"/* default */],__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/vux/src/components/tab/tab.vue";if(Component.esModule&&Object.keys(Component.esModule).some(function(key){return key!=="default"&&key.substr(0,2)!=="__";})){console.error("named exports are not supported in *.vue files.");}if(Component.options.functional){console.error("[vue-loader] tab.vue: functional components are not supported with templates, they should use render functions.");}/* hot reload */if(false){(function(){var hotAPI=require("vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-251b338f",Component.options);}else{hotAPI.reload("data-v-251b338f",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 107 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_tab_item_vue__=__webpack_require__(117);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_75231e7e_hasScoped_false_vux_loader_src_before_template_compiler_loader_js_vux_loader_src_template_loader_js_vue_loader_lib_selector_type_template_index_0_tab_item_vue__=__webpack_require__(118);var disposed=false;var normalizeComponent=__webpack_require__(4);/* script *//* template *//* styles */var __vue_styles__=null;/* scopeId */var __vue_scopeId__=null;/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_tab_item_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_75231e7e_hasScoped_false_vux_loader_src_before_template_compiler_loader_js_vux_loader_src_template_loader_js_vue_loader_lib_selector_type_template_index_0_tab_item_vue__["a"/* default */],__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/vux/src/components/tab/tab-item.vue";if(Component.esModule&&Object.keys(Component.esModule).some(function(key){return key!=="default"&&key.substr(0,2)!=="__";})){console.error("named exports are not supported in *.vue files.");}if(Component.options.functional){console.error("[vue-loader] tab-item.vue: functional components are not supported with templates, they should use render functions.");}/* hot reload */if(false){(function(){var hotAPI=require("vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-75231e7e",Component.options);}else{hotAPI.reload("data-v-75231e7e",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 108 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_swiper_vue__=__webpack_require__(121);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_551f5463_hasScoped_false_vux_loader_src_before_template_compiler_loader_js_vux_loader_src_template_loader_js_vue_loader_lib_selector_type_template_index_0_swiper_vue__=__webpack_require__(123);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(119);}var normalizeComponent=__webpack_require__(4);/* script *//* template *//* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__=null;/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_swiper_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_551f5463_hasScoped_false_vux_loader_src_before_template_compiler_loader_js_vux_loader_src_template_loader_js_vue_loader_lib_selector_type_template_index_0_swiper_vue__["a"/* default */],__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/vux/src/components/swiper/swiper.vue";if(Component.esModule&&Object.keys(Component.esModule).some(function(key){return key!=="default"&&key.substr(0,2)!=="__";})){console.error("named exports are not supported in *.vue files.");}if(Component.options.functional){console.error("[vue-loader] swiper.vue: functional components are not supported with templates, they should use render functions.");}/* hot reload */if(false){(function(){var hotAPI=require("vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-551f5463",Component.options);}else{hotAPI.reload("data-v-551f5463",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 109 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_swiper_item_vue__=__webpack_require__(124);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_067c9726_hasScoped_false_vux_loader_src_before_template_compiler_loader_js_vux_loader_src_template_loader_js_vue_loader_lib_selector_type_template_index_0_swiper_item_vue__=__webpack_require__(125);var disposed=false;var normalizeComponent=__webpack_require__(4);/* script *//* template *//* styles */var __vue_styles__=null;/* scopeId */var __vue_scopeId__=null;/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_swiper_item_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_067c9726_hasScoped_false_vux_loader_src_before_template_compiler_loader_js_vux_loader_src_template_loader_js_vue_loader_lib_selector_type_template_index_0_swiper_item_vue__["a"/* default */],__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/vux/src/components/swiper/swiper-item.vue";if(Component.esModule&&Object.keys(Component.esModule).some(function(key){return key!=="default"&&key.substr(0,2)!=="__";})){console.error("named exports are not supported in *.vue files.");}if(Component.options.functional){console.error("[vue-loader] swiper-item.vue: functional components are not supported with templates, they should use render functions.");}/* hot reload */if(false){(function(){var hotAPI=require("vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-067c9726",Component.options);}else{hotAPI.reload("data-v-067c9726",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 110 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(128);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_778d5c53_hasScoped_false_vux_loader_src_before_template_compiler_loader_js_vux_loader_src_template_loader_js_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(129);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(126);}var normalizeComponent=__webpack_require__(4);/* script *//* template *//* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__=null;/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_778d5c53_hasScoped_false_vux_loader_src_before_template_compiler_loader_js_vux_loader_src_template_loader_js_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/vux/src/components/load-more/index.vue";if(Component.esModule&&Object.keys(Component.esModule).some(function(key){return key!=="default"&&key.substr(0,2)!=="__";})){console.error("named exports are not supported in *.vue files.");}if(Component.options.functional){console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.");}/* hot reload */if(false){(function(){var hotAPI=require("vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-778d5c53",Component.options);}else{hotAPI.reload("data-v-778d5c53",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 111 *//***/function(module,exports){(function(self){'use strict';if(self.fetch){return;}var support={searchParams:'URLSearchParams'in self,iterable:'Symbol'in self&&'iterator'in Symbol,blob:'FileReader'in self&&'Blob'in self&&function(){try{new Blob();return true;}catch(e){return false;}}(),formData:'FormData'in self,arrayBuffer:'ArrayBuffer'in self};if(support.arrayBuffer){var viewClasses=['[object Int8Array]','[object Uint8Array]','[object Uint8ClampedArray]','[object Int16Array]','[object Uint16Array]','[object Int32Array]','[object Uint32Array]','[object Float32Array]','[object Float64Array]'];var isDataView=function isDataView(obj){return obj&&DataView.prototype.isPrototypeOf(obj);};var isArrayBufferView=ArrayBuffer.isView||function(obj){return obj&&viewClasses.indexOf(Object.prototype.toString.call(obj))>-1;};}function normalizeName(name){if(typeof name!=='string'){name=String(name);}if(/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)){throw new TypeError('Invalid character in header field name');}return name.toLowerCase();}function normalizeValue(value){if(typeof value!=='string'){value=String(value);}return value;}// Build a destructive iterator for the value list
function iteratorFor(items){var iterator={next:function next(){var value=items.shift();return{done:value===undefined,value:value};}};if(support.iterable){iterator[Symbol.iterator]=function(){return iterator;};}return iterator;}function Headers(headers){this.map={};if(headers instanceof Headers){headers.forEach(function(value,name){this.append(name,value);},this);}else if(Array.isArray(headers)){headers.forEach(function(header){this.append(header[0],header[1]);},this);}else if(headers){Object.getOwnPropertyNames(headers).forEach(function(name){this.append(name,headers[name]);},this);}}Headers.prototype.append=function(name,value){name=normalizeName(name);value=normalizeValue(value);var oldValue=this.map[name];this.map[name]=oldValue?oldValue+','+value:value;};Headers.prototype['delete']=function(name){delete this.map[normalizeName(name)];};Headers.prototype.get=function(name){name=normalizeName(name);return this.has(name)?this.map[name]:null;};Headers.prototype.has=function(name){return this.map.hasOwnProperty(normalizeName(name));};Headers.prototype.set=function(name,value){this.map[normalizeName(name)]=normalizeValue(value);};Headers.prototype.forEach=function(callback,thisArg){for(var name in this.map){if(this.map.hasOwnProperty(name)){callback.call(thisArg,this.map[name],name,this);}}};Headers.prototype.keys=function(){var items=[];this.forEach(function(value,name){items.push(name);});return iteratorFor(items);};Headers.prototype.values=function(){var items=[];this.forEach(function(value){items.push(value);});return iteratorFor(items);};Headers.prototype.entries=function(){var items=[];this.forEach(function(value,name){items.push([name,value]);});return iteratorFor(items);};if(support.iterable){Headers.prototype[Symbol.iterator]=Headers.prototype.entries;}function consumed(body){if(body.bodyUsed){return Promise.reject(new TypeError('Already read'));}body.bodyUsed=true;}function fileReaderReady(reader){return new Promise(function(resolve,reject){reader.onload=function(){resolve(reader.result);};reader.onerror=function(){reject(reader.error);};});}function readBlobAsArrayBuffer(blob){var reader=new FileReader();var promise=fileReaderReady(reader);reader.readAsArrayBuffer(blob);return promise;}function readBlobAsText(blob){var reader=new FileReader();var promise=fileReaderReady(reader);reader.readAsText(blob);return promise;}function readArrayBufferAsText(buf){var view=new Uint8Array(buf);var chars=new Array(view.length);for(var i=0;i<view.length;i++){chars[i]=String.fromCharCode(view[i]);}return chars.join('');}function bufferClone(buf){if(buf.slice){return buf.slice(0);}else{var view=new Uint8Array(buf.byteLength);view.set(new Uint8Array(buf));return view.buffer;}}function Body(){this.bodyUsed=false;this._initBody=function(body){this._bodyInit=body;if(!body){this._bodyText='';}else if(typeof body==='string'){this._bodyText=body;}else if(support.blob&&Blob.prototype.isPrototypeOf(body)){this._bodyBlob=body;}else if(support.formData&&FormData.prototype.isPrototypeOf(body)){this._bodyFormData=body;}else if(support.searchParams&&URLSearchParams.prototype.isPrototypeOf(body)){this._bodyText=body.toString();}else if(support.arrayBuffer&&support.blob&&isDataView(body)){this._bodyArrayBuffer=bufferClone(body.buffer);// IE 10-11 can't handle a DataView body.
this._bodyInit=new Blob([this._bodyArrayBuffer]);}else if(support.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(body)||isArrayBufferView(body))){this._bodyArrayBuffer=bufferClone(body);}else{throw new Error('unsupported BodyInit type');}if(!this.headers.get('content-type')){if(typeof body==='string'){this.headers.set('content-type','text/plain;charset=UTF-8');}else if(this._bodyBlob&&this._bodyBlob.type){this.headers.set('content-type',this._bodyBlob.type);}else if(support.searchParams&&URLSearchParams.prototype.isPrototypeOf(body)){this.headers.set('content-type','application/x-www-form-urlencoded;charset=UTF-8');}}};if(support.blob){this.blob=function(){var rejected=consumed(this);if(rejected){return rejected;}if(this._bodyBlob){return Promise.resolve(this._bodyBlob);}else if(this._bodyArrayBuffer){return Promise.resolve(new Blob([this._bodyArrayBuffer]));}else if(this._bodyFormData){throw new Error('could not read FormData body as blob');}else{return Promise.resolve(new Blob([this._bodyText]));}};this.arrayBuffer=function(){if(this._bodyArrayBuffer){return consumed(this)||Promise.resolve(this._bodyArrayBuffer);}else{return this.blob().then(readBlobAsArrayBuffer);}};}this.text=function(){var rejected=consumed(this);if(rejected){return rejected;}if(this._bodyBlob){return readBlobAsText(this._bodyBlob);}else if(this._bodyArrayBuffer){return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));}else if(this._bodyFormData){throw new Error('could not read FormData body as text');}else{return Promise.resolve(this._bodyText);}};if(support.formData){this.formData=function(){return this.text().then(decode);};}this.json=function(){return this.text().then(JSON.parse);};return this;}// HTTP methods whose capitalization should be normalized
var methods=['DELETE','GET','HEAD','OPTIONS','POST','PUT'];function normalizeMethod(method){var upcased=method.toUpperCase();return methods.indexOf(upcased)>-1?upcased:method;}function Request(input,options){options=options||{};var body=options.body;if(input instanceof Request){if(input.bodyUsed){throw new TypeError('Already read');}this.url=input.url;this.credentials=input.credentials;if(!options.headers){this.headers=new Headers(input.headers);}this.method=input.method;this.mode=input.mode;if(!body&&input._bodyInit!=null){body=input._bodyInit;input.bodyUsed=true;}}else{this.url=String(input);}this.credentials=options.credentials||this.credentials||'omit';if(options.headers||!this.headers){this.headers=new Headers(options.headers);}this.method=normalizeMethod(options.method||this.method||'GET');this.mode=options.mode||this.mode||null;this.referrer=null;if((this.method==='GET'||this.method==='HEAD')&&body){throw new TypeError('Body not allowed for GET or HEAD requests');}this._initBody(body);}Request.prototype.clone=function(){return new Request(this,{body:this._bodyInit});};function decode(body){var form=new FormData();body.trim().split('&').forEach(function(bytes){if(bytes){var split=bytes.split('=');var name=split.shift().replace(/\+/g,' ');var value=split.join('=').replace(/\+/g,' ');form.append(decodeURIComponent(name),decodeURIComponent(value));}});return form;}function parseHeaders(rawHeaders){var headers=new Headers();rawHeaders.split(/\r?\n/).forEach(function(line){var parts=line.split(':');var key=parts.shift().trim();if(key){var value=parts.join(':').trim();headers.append(key,value);}});return headers;}Body.call(Request.prototype);function Response(bodyInit,options){if(!options){options={};}this.type='default';this.status='status'in options?options.status:200;this.ok=this.status>=200&&this.status<300;this.statusText='statusText'in options?options.statusText:'OK';this.headers=new Headers(options.headers);this.url=options.url||'';this._initBody(bodyInit);}Body.call(Response.prototype);Response.prototype.clone=function(){return new Response(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new Headers(this.headers),url:this.url});};Response.error=function(){var response=new Response(null,{status:0,statusText:''});response.type='error';return response;};var redirectStatuses=[301,302,303,307,308];Response.redirect=function(url,status){if(redirectStatuses.indexOf(status)===-1){throw new RangeError('Invalid status code');}return new Response(null,{status:status,headers:{location:url}});};self.Headers=Headers;self.Request=Request;self.Response=Response;self.fetch=function(input,init){return new Promise(function(resolve,reject){var request=new Request(input,init);var xhr=new XMLHttpRequest();xhr.onload=function(){var options={status:xhr.status,statusText:xhr.statusText,headers:parseHeaders(xhr.getAllResponseHeaders()||'')};options.url='responseURL'in xhr?xhr.responseURL:options.headers.get('X-Request-URL');var body='response'in xhr?xhr.response:xhr.responseText;resolve(new Response(body,options));};xhr.onerror=function(){reject(new TypeError('Network request failed'));};xhr.ontimeout=function(){reject(new TypeError('Network request failed'));};xhr.open(request.method,request.url,true);if(request.credentials==='include'){xhr.withCredentials=true;}if('responseType'in xhr&&support.blob){xhr.responseType='blob';}request.headers.forEach(function(value,name){xhr.setRequestHeader(name,value);});xhr.send(typeof request._bodyInit==='undefined'?null:request._bodyInit);});};self.fetch.polyfill=true;})(typeof self!=='undefined'?self:this);/***/},/* 112 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(113);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(47)("75c4ee0f",content,false);// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../../css-loader/index.js!../../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-251b338f\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../vux-loader/src/after-less-loader.js!../../../../less-loader/dist/cjs.js!../../../../vux-loader/src/style-loader.js!../../../../vue-loader/lib/selector.js?type=styles&index=0!./tab.vue",function(){var newContent=require("!!../../../../css-loader/index.js!../../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-251b338f\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../vux-loader/src/after-less-loader.js!../../../../less-loader/dist/cjs.js!../../../../vux-loader/src/style-loader.js!../../../../vue-loader/lib/selector.js?type=styles&index=0!./tab.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 113 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(46)(undefined);// imports
// module
exports.push([module.i,".vux-tab-ink-bar{position:absolute;height:2px;bottom:0;left:0;background-color:#04be02;text-align:center}.vux-tab-ink-bar-transition-forward{-webkit-transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s;transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s}.vux-tab-ink-bar-transition-backward{-webkit-transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1);transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1)}.vux-tab{display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;height:44px;position:relative}.vux-tab button{padding:0;border:0;outline:0;background:0 0;-webkit-appearance:none;appearance:none}.vux-tab .vux-tab-item{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%;height:100%;box-sizing:border-box;background:-webkit-linear-gradient(top,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background:linear-gradient(180deg,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background-size:100% 1px;font-size:14px;text-align:center;line-height:44px;color:#666}.vux-tab .vux-tab-item.vux-tab-selected{color:#04be02;border-bottom:3px solid #04be02}.vux-tab .vux-tab-item.vux-tab-disabled{color:#ddd}.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected{background:0 0}.vux-tab-bar-inner{display:block;background-color:#04be02;margin:auto;height:100%;-webkit-transition:width .3s cubic-bezier(.35,0,.25,1);transition:width .3s cubic-bezier(.35,0,.25,1)}.vux-tab-item-badge{position:absolute;top:0;bottom:0;box-sizing:border-box;display:inline-block;height:18px;min-width:18px;padding:0 4px;border-radius:30px;margin:auto 0 auto 4px;line-height:18px;font-size:11px;background-clip:padding-box;vertical-align:middle}",""]);// exports
/***/},/* 114 *//***/function(module,exports){/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */module.exports=function listToStyles(parentId,list){var styles=[];var newStyles={};for(var i=0;i<list.length;i++){var item=list[i];var id=item[0];var css=item[1];var media=item[2];var sourceMap=item[3];var part={id:parentId+':'+i,css:css,media:media,sourceMap:sourceMap};if(!newStyles[id]){styles.push(newStyles[id]={id:id,parts:[part]});}else{newStyles[id].parts.push(part);}}return styles;};/***/},/* 115 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__=__webpack_require__(72);//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={name:'tab',mixins:[__WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__["b"/* parentMixin */]],mounted:function mounted(){var _this=this;// stop bar anmination on first loading
this.$nextTick(function(){setTimeout(function(){_this.hasReady=true;},0);});},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:true},customBarWidth:[Function,String]},computed:{barLeft:function barLeft(){return this.currentIndex*(100/this.number)+'%';},barRight:function barRight(){return(this.number-this.currentIndex-1)*(100/this.number)+'%';},// when prop:custom-bar-width
innerBarStyle:function innerBarStyle(){return{width:typeof this.customBarWidth==='function'?this.customBarWidth(this.currentIndex):this.customBarWidth,backgroundColor:this.barActiveColor||this.activeColor};},// end
barStyle:function barStyle(){var commonStyle={left:this.barLeft,right:this.barRight,display:'block',height:this.lineWidth+'px',transition:!this.hasReady?'none':null};if(!this.customBarWidth){commonStyle.backgroundColor=this.barActiveColor||this.activeColor;}else{commonStyle.backgroundColor='transparent';// when=prop:custom-bar-width
}return commonStyle;},barClass:function barClass(){return{'vux-tab-ink-bar-transition-forward':this.direction==='forward','vux-tab-ink-bar-transition-backward':this.direction==='backward'};}},watch:{currentIndex:function currentIndex(newIndex,oldIndex){this.direction=newIndex>oldIndex?'forward':'backward';this.$emit('on-index-change',newIndex,oldIndex);}},data:function data(){return{direction:'forward',right:'100%',hasReady:false};}};/***/},/* 116 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-tab",class:{'vux-tab-no-animate':!_vm.animate}},[_vm._t("default"),_vm._v(" "),_vm.animate?_c('div',{staticClass:"vux-tab-ink-bar",class:_vm.barClass,style:_vm.barStyle},[_vm.customBarWidth?_c('span',{staticClass:"vux-tab-bar-inner",style:_vm.innerBarStyle}):_vm._e()]):_vm._e()],2);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns};/* harmony default export */__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-hot-reload-api").rerender("data-v-251b338f",esExports);}}/***/},/* 117 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__=__webpack_require__(72);//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={name:'tab-item',mixins:[__WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__["a"/* childMixin */]],props:{activeClass:String,disabled:Boolean,badgeBackground:{type:String,default:'#f74c31'},badgeColor:{type:String,default:'#fff'},badgeLabel:String},computed:{style:function style(){return{borderWidth:this.$parent.lineWidth+'px',borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?'none':'auto'};}}};/***/},/* 118 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-tab-item",class:[_vm.currentSelected?_vm.activeClass:'',{'vux-tab-selected':_vm.currentSelected,'vux-tab-disabled':_vm.disabled}],style:_vm.style,on:{"click":_vm.onItemClick}},[_vm._t("default"),_vm._v(" "),typeof _vm.badgeLabel!=='undefined'&&_vm.badgeLabel!==''?_c('span',{staticClass:"vux-tab-item-badge",style:{background:_vm.badgeBackground,color:_vm.badgeColor}},[_vm._v(_vm._s(_vm.badgeLabel))]):_vm._e()],2);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns};/* harmony default export */__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-hot-reload-api").rerender("data-v-75231e7e",esExports);}}/***/},/* 119 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(120);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(47)("75716047",content,false);// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../../css-loader/index.js!../../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-551f5463\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../vux-loader/src/after-less-loader.js!../../../../less-loader/dist/cjs.js!../../../../vux-loader/src/style-loader.js!../../../../vue-loader/lib/selector.js?type=styles&index=0!./swiper.vue",function(){var newContent=require("!!../../../../css-loader/index.js!../../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-551f5463\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../vux-loader/src/after-less-loader.js!../../../../less-loader/dist/cjs.js!../../../../vux-loader/src/style-loader.js!../../../../vue-loader/lib/selector.js?type=styles&index=0!./swiper.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 120 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(46)(undefined);// imports
// module
exports.push([module.i,".vux-slider{overflow:hidden;position:relative}.vux-slider .vux-indicator-right,.vux-slider>.vux-indicator{position:absolute;right:15px;bottom:10px}.vux-slider .vux-indicator-right>a,.vux-slider>.vux-indicator>a{float:left;margin-left:6px}.vux-slider .vux-indicator-right>a>.vux-icon-dot,.vux-slider>.vux-indicator>a>.vux-icon-dot{display:inline-block;vertical-align:middle;width:6px;height:6px;border-radius:3px;background-color:#d0cdd1}.vux-slider .vux-indicator-right>a>.vux-icon-dot.active,.vux-slider>.vux-indicator>a>.vux-icon-dot.active{background-color:#04be02}.vux-slider>.vux-indicator-center{right:50%;-webkit-transform:translateX(50%);transform:translateX(50%)}.vux-slider>.vux-indicator-left{left:15px;right:auto}.vux-slider>.vux-swiper{overflow:hidden;position:relative}.vux-slider>.vux-swiper>.vux-swiper-item{position:absolute;top:0;left:0;width:100%;height:100%}.vux-slider>.vux-swiper>.vux-swiper-item>a{display:block;width:100%;height:100%}.vux-slider>.vux-swiper>.vux-swiper-item>a>.vux-img{display:block;width:100%;height:100%;background:50% no-repeat;background-size:cover}.vux-slider>.vux-swiper>.vux-swiper-item>a>.vux-swiper-desc{position:absolute;left:0;right:0;bottom:0;height:1.4em;font-size:16px;padding:20px 50px 12px 13px;margin:0;background-image:-webkit-linear-gradient(top,transparent,rgba(0,0,0,.7));background-image:linear-gradient(180deg,transparent 0,rgba(0,0,0,.7));color:#fff;text-shadow:0 1px 0 rgba(0,0,0,.5);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}",""]);// exports
/***/},/* 121 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__swiper_js__=__webpack_require__(122);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__libs_router__=__webpack_require__(73);//
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
/* harmony default export */__webpack_exports__["a"]={name:'swiper',created:function created(){this.index=this.value||0;if(this.index){this.current=this.index;}},mounted:function mounted(){var _this2=this;this.hasTwoLoopItem();this.$nextTick(function(){if(!(_this2.list&&_this2.list.length===0)){_this2.render(_this2.index);}_this2.xheight=_this2.getHeight();});},methods:{hasTwoLoopItem:function hasTwoLoopItem(){if(this.list.length===2&&this.loop){this.listTwoLoopItem=this.list;}else{this.listTwoLoopItem=[];}},clickListItem:function clickListItem(item){Object(__WEBPACK_IMPORTED_MODULE_1__libs_router__["a"/* go */])(item.url,this.$router);this.$emit('on-click-list-item',JSON.parse(JSON.stringify(item)));},buildBackgroundUrl:function buildBackgroundUrl(url){return'url('+url+')';},render:function render(){var _this3=this;var index=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;this.swiper&&this.swiper.destroy();this.swiper=new __WEBPACK_IMPORTED_MODULE_0__swiper_js__["a"/* default */]({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on('swiped',function(prev,index){_this3.current=index%_this3.length;_this3.index=index%_this3.length;});if(index>0){this.swiper.go(index);}},rerender:function rerender(){var _this4=this;if(!this.$el||this.hasRender){return;}this.hasRender=true;this.hasTwoLoopItem();this.$nextTick(function(){_this4.index=_this4.value||0;_this4.current=_this4.value||0;_this4.length=_this4.list.length||_this4.$children.length;_this4.destroy();_this4.render(_this4.value);});},destroy:function destroy(){this.hasRender=false;this.swiper&&this.swiper.destroy();},getHeight:function getHeight(){// when list.length > 0, it's better to set height or ratio
var hasHeight=parseInt(this.height,10);if(hasHeight)return this.height;if(!hasHeight){if(this.aspectRatio){return this.$el.offsetWidth*this.aspectRatio+'px';}return'180px';}}},props:{list:{type:Array,default:function _default(){return[];}},direction:{type:String,default:'horizontal'},showDots:{type:Boolean,default:true},showDescMask:{type:Boolean,default:true},dotsPosition:{type:String,default:'right'},dotsClass:String,auto:{type:Boolean,default:false},loop:Boolean,interval:{type:Number,default:3000},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:'auto'},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function data(){return{hasRender:false,current:this.index||0,xheight:'auto',length:this.list.length,index:0,// issue #1484 Fix click to fail
listTwoLoopItem:[]};},watch:{list:function list(val){this.rerender();},current:function current(currentIndex){this.index=currentIndex;this.$emit('on-index-change',currentIndex);},index:function index(val){var _this=this;if(val!==this.current){this.$nextTick(function(){_this.swiper&&_this.swiper.go(val);});}this.$emit('input',val);},value:function value(val){this.index=val;}},beforeDestroy:function beforeDestroy(){this.destroy();}};/***/},/* 122 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_object_assign__=__webpack_require__(78);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_object_assign___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_object_assign__);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var arrayFrom=function arrayFrom(nodeList){return Array.prototype.slice.call(nodeList);};var Swiper=function(){function Swiper(options){_classCallCheck(this,Swiper);this._default={container:'.vux-swiper',item:'.vux-swiper-item',direction:'vertical',activeClass:'active',threshold:50,duration:300,auto:false,loop:false,interval:3000,height:'auto',minMovingDistance:0};this._options=__WEBPACK_IMPORTED_MODULE_0_object_assign___default()(this._default,options);this._options.height=this._options.height.replace('px','');this._start={};this._move={};this._end={};this._eventHandlers={};this._prev=this._current=this._goto=0;this._width=this._height=this._distance=0;this._offset=[];this.$box=this._options.container;this.$container=this._options.container.querySelector('.vux-swiper');this.$items=this.$container.querySelectorAll(this._options.item);this.count=this.$items.length;this.realCount=this.$items.length;// real items length
this._position=[];// used by go event
this._firstItemIndex=0;if(!this.count){return;}this._init();this._auto();this._bind();this._onResize();return this;}_createClass(Swiper,[{key:'_auto',value:function _auto(){var me=this;me.stop();if(me._options.auto){me.timer=setTimeout(function(){me.next();},me._options.interval);}}},{key:'updateItemWidth',value:function updateItemWidth(){this._width=this.$box.offsetWidth||document.documentElement.offsetWidth;this._distance=this._options.direction==='horizontal'?this._width:this._height;}},{key:'stop',value:function stop(){this.timer&&clearTimeout(this.timer);}},{key:'_loop',value:function _loop(){return this._options.loop&&this.realCount>=3;}},{key:'_onResize',value:function _onResize(){var me=this;this.resizeHandler=function(){setTimeout(function(){me.updateItemWidth();me._setOffset();me._setTransform();},100);};window.addEventListener('orientationchange',this.resizeHandler,false);}},{key:'_init',value:function _init(){this._height=this._options.height==='auto'?'auto':this._options.height-0;this.updateItemWidth();this._initPosition();this._activate(this._current);this._setOffset();this._setTransform();if(this._loop()){this._loopRender();}}},{key:'_initPosition',value:function _initPosition(){for(var i=0;i<this.realCount;i++){this._position.push(i);}}},{key:'_movePosition',value:function _movePosition(position){var me=this;if(position>0){var firstIndex=me._position.splice(0,1);me._position.push(firstIndex[0]);}else if(position<0){var lastIndex=me._position.pop();me._position.unshift(lastIndex);}}},{key:'_setOffset',value:function _setOffset(){var me=this;var index=me._position.indexOf(me._current);me._offset=[];arrayFrom(me.$items).forEach(function($item,key){me._offset.push((key-index)*me._distance);});}},{key:'_setTransition',value:function _setTransition(duration){duration=duration||this._options.duration||'none';var transition=duration==='none'?'none':duration+'ms';arrayFrom(this.$items).forEach(function($item,key){$item.style.webkitTransition=transition;$item.style.transition=transition;});}},{key:'_setTransform',value:function _setTransform(offset){var me=this;offset=offset||0;arrayFrom(me.$items).forEach(function($item,key){var distance=me._offset[key]+offset;var transform='translate3d('+distance+'px, 0, 0)';if(me._options.direction==='vertical'){transform='translate3d(0, '+distance+'px, 0)';}$item.style.webkitTransform=transform;$item.style.transform=transform;});}},{key:'_bind',value:function _bind(){var me=this;me.touchstartHandler=function(e){me.stop();me._start.x=e.changedTouches[0].pageX;me._start.y=e.changedTouches[0].pageY;me._setTransition('none');};me.touchmoveHandler=function(e){me._move.x=e.changedTouches[0].pageX;me._move.y=e.changedTouches[0].pageY;var distanceX=me._move.x-me._start.x;var distanceY=me._move.y-me._start.y;var distance=distanceY;var noScrollerY=Math.abs(distanceX)>Math.abs(distanceY);if(me._options.direction==='horizontal'&&noScrollerY){distance=distanceX;}if((me._options.minMovingDistance&&Math.abs(distance)>=me._options.minMovingDistance||!me._options.minMovingDistance)&&noScrollerY){me._setTransform(distance);}noScrollerY&&e.preventDefault();};me.touchendHandler=function(e){me._end.x=e.changedTouches[0].pageX;me._end.y=e.changedTouches[0].pageY;var distance=me._end.y-me._start.y;if(me._options.direction==='horizontal'){distance=me._end.x-me._start.x;}distance=me.getDistance(distance);if(distance!==0&&me._options.minMovingDistance&&Math.abs(distance)<me._options.minMovingDistance){return;}if(distance>me._options.threshold){me.move(-1);}else if(distance<-me._options.threshold){me.move(1);}else{me.move(0);}me._loopRender();};me.transitionEndHandler=function(e){me._activate(me._current);var cb=me._eventHandlers.swiped;cb&&cb.apply(me,[me._prev%me.count,me._current%me.count]);me._auto();me._loopRender();e.preventDefault();};me.$container.addEventListener('touchstart',me.touchstartHandler,false);me.$container.addEventListener('touchmove',me.touchmoveHandler,false);me.$container.addEventListener('touchend',me.touchendHandler,false);me.$items[1]&&me.$items[1].addEventListener('webkitTransitionEnd',me.transitionEndHandler,false);}},{key:'_loopRender',value:function _loopRender(){var me=this;if(me._loop()){// issue #507 (delete cloneNode)
if(me._offset[me._offset.length-1]===0){me.$container.appendChild(me.$items[0]);me._loopEvent(1);}else if(me._offset[0]===0){me.$container.insertBefore(me.$items[me.$items.length-1],me.$container.firstChild);me._loopEvent(-1);}}}},{key:'_loopEvent',value:function _loopEvent(num){var me=this;me._itemDestoy();me.$items=me.$container.querySelectorAll(me._options.item);me.$items[1]&&me.$items[1].addEventListener('webkitTransitionEnd',me.transitionEndHandler,false);me._movePosition(num);me._setOffset();me._setTransform();}},{key:'getDistance',value:function getDistance(distance){if(this._loop()){return distance;}else{if(distance>0&&this._current===0){return 0;}else if(distance<0&&this._current===this.realCount-1){return 0;}else{return distance;}}}},{key:'_moveIndex',value:function _moveIndex(num){if(num!==0){this._prev=this._current;this._current+=this.realCount;this._current+=num;this._current%=this.realCount;}}},{key:'_activate',value:function _activate(index){var clazz=this._options.activeClass;Array.prototype.forEach.call(this.$items,function($item,key){$item.classList.remove(clazz);if(index===Number($item.dataset.index)){$item.classList.add(clazz);}});}},{key:'go',value:function go(index){var me=this;me.stop();index=index||0;index+=this.realCount;index=index%this.realCount;index=this._position.indexOf(index)-this._position.indexOf(this._current);me._moveIndex(index);me._setOffset();me._setTransition();me._setTransform();me._auto();return this;}},{key:'next',value:function next(){this.move(1);return this;}},{key:'move',value:function move(num){this.go(this._current+num);return this;}},{key:'on',value:function on(event,callback){if(this._eventHandlers[event]){console.error('[swiper] event '+event+' is already register');}if(typeof callback!=='function'){console.error('[swiper] parameter callback must be a function');}this._eventHandlers[event]=callback;return this;}},{key:'_itemDestoy',value:function _itemDestoy(){var _this=this;this.$items.length&&arrayFrom(this.$items).forEach(function(item){item.removeEventListener('webkitTransitionEnd',_this.transitionEndHandler,false);});}},{key:'destroy',value:function destroy(){this.stop();this._current=0;this._setTransform(0);window.removeEventListener('orientationchange',this.resizeHandler,false);this.$container.removeEventListener('touchstart',this.touchstartHandler,false);this.$container.removeEventListener('touchmove',this.touchmoveHandler,false);this.$container.removeEventListener('touchend',this.touchendHandler,false);this._itemDestoy();// remove clone item (used by loop only 2)
if(this._options.loop&&this.count===2){var $item=this.$container.querySelector(this._options.item+'-clone');$item&&this.$container.removeChild($item);$item=this.$container.querySelector(this._options.item+'-clone');$item&&this.$container.removeChild($item);}}}]);return Swiper;}();/* harmony default export */__webpack_exports__["a"]=Swiper;/***/},/* 123 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-slider"},[_c('div',{staticClass:"vux-swiper",style:{height:_vm.xheight}},[_vm._t("default"),_vm._v(" "),_vm._l(_vm.list,function(item,index){return _c('div',{staticClass:"vux-swiper-item",attrs:{"data-index":index},on:{"click":function click($event){_vm.clickListItem(item);}}},[_c('a',{attrs:{"href":"javascript:"}},[_c('div',{staticClass:"vux-img",style:{backgroundImage:_vm.buildBackgroundUrl(item.img)}}),_vm._v(" "),_vm.showDescMask?_c('p',{staticClass:"vux-swiper-desc"},[_vm._v(_vm._s(item.title))]):_vm._e()])]);}),_vm._v(" "),_vm._l(_vm.listTwoLoopItem,function(item,index){return _vm.listTwoLoopItem.length>0?_c('div',{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":index},on:{"click":function click($event){_vm.clickListItem(item);}}},[_c('a',{attrs:{"href":"javascript:"}},[_c('div',{staticClass:"vux-img",style:{backgroundImage:_vm.buildBackgroundUrl(item.img)}}),_vm._v(" "),_vm.showDescMask?_c('p',{staticClass:"vux-swiper-desc"},[_vm._v(_vm._s(item.title))]):_vm._e()])]):_vm._e();})],2),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:_vm.showDots,expression:"showDots"}],class:[_vm.dotsClass,'vux-indicator','vux-indicator-'+_vm.dotsPosition]},_vm._l(_vm.length,function(key){return _c('a',{attrs:{"href":"javascript:"}},[_c('i',{staticClass:"vux-icon-dot",class:{'active':key-1===_vm.current}})]);}))]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns};/* harmony default export */__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-hot-reload-api").rerender("data-v-551f5463",esExports);}}/***/},/* 124 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";//
//
//
//
/* harmony default export */__webpack_exports__["a"]={name:'swiper-item',mounted:function mounted(){var _this=this;this.$nextTick(function(){_this.$parent.rerender();});},beforeDestroy:function beforeDestroy(){var $parent=this.$parent;this.$nextTick(function(){$parent.rerender();});}};/***/},/* 125 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-swiper-item"},[_vm._t("default")],2);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns};/* harmony default export */__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-hot-reload-api").rerender("data-v-067c9726",esExports);}}/***/},/* 126 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(127);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(47)("3c529f9c",content,false);// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../../css-loader/index.js!../../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-778d5c53\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../vux-loader/src/after-less-loader.js!../../../../less-loader/dist/cjs.js!../../../../vux-loader/src/style-loader.js!../../../../vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../../css-loader/index.js!../../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-778d5c53\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../vux-loader/src/after-less-loader.js!../../../../less-loader/dist/cjs.js!../../../../vux-loader/src/style-loader.js!../../../../vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 127 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(46)(undefined);// imports
// module
exports.push([module.i,".weui-loading{width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:weuiLoading 1s steps(12) infinite;animation:weuiLoading 1s steps(12) infinite;background:transparent url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=\") no-repeat;background-size:100%}.weui-loading.weui-loading_transparent{background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTAwIDEwMCc+PHBhdGggZmlsbD0nbm9uZScgZD0nTTAgMGgxMDB2MTAwSDB6Jy8+PHJlY3QgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjU2KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0zMCknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDEwNS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjQzKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA3NS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjM4KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2NSA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjMyKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTguNjYgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4yOCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoMTUwIDU0LjAyIDY1KScvPjxyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA1MCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjIpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKC0xNTAgNDUuOTggNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xNyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTEyMCA0MS4zNCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjE0KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtOTAgMzUgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtNjAgMjQuMDIgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4wMyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTMwIC01Ljk4IDY1KScvPjwvc3ZnPgo=\")}@-webkit-keyframes weuiLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes weuiLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.weui-loadmore{width:65%;margin:1.5em auto;line-height:1.6em;font-size:14px;text-align:center}.weui-loadmore__tips{display:inline-block;vertical-align:middle}.weui-loadmore_line{border-top:1px solid #e5e5e5;margin-top:2.4em}.weui-loadmore_line .weui-loadmore__tips{position:relative;top:-.9em;padding:0 .55em;background-color:#fff;color:#999}.weui-loadmore_dot .weui-loadmore__tips{padding:0 .16em}.weui-loadmore_dot .weui-loadmore__tips:before{content:\" \";width:4px;height:4px;border-radius:50%;background-color:#e5e5e5;display:inline-block;position:relative;vertical-align:0;top:-.16em}",""]);// exports
/***/},/* 128 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={name:'load-more',props:{showLoading:{type:Boolean,default:true},tip:String,backgroundColor:String},methods:{getStyle:function getStyle(){if(!this.showLoading&&this.tip){return{'background-color':this.backgroundColor};}}}};/***/},/* 129 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"weui-loadmore",class:{'weui-loadmore_line':!_vm.showLoading,'weui-loadmore_dot':!_vm.showLoading&&!_vm.tip}},[_vm.showLoading?_c('i',{staticClass:"weui-loading"}):_vm._e(),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:_vm.tip||!_vm.showLoading,expression:"tip || !showLoading"}],staticClass:"weui-loadmore__tips",style:_vm.getStyle()},[_vm._v(_vm._s(_vm.tip))])]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns};/* harmony default export */__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-hot-reload-api").rerender("data-v-778d5c53",esExports);}}/***/},/* 130 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};!(__WEBPACK_AMD_DEFINE_RESULT__=function(require,exports,module){"use strict";var Util=__webpack_require__(13);var Base=__webpack_require__(21);var Easing=__webpack_require__(131);var RAF=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60);};var vendors=['webkit','moz','ms','o'];var cancelRAF=window.cancelAnimationFrame;if(!cancelRAF){for(var i=0;i<vendors.length;i++){if(window[vendors[i]+'CancelAnimationFrame']||window[vendors[i]+'CancelRequestAnimationFrame']){cancelRAF=window[vendors[i]+'CancelAnimationFrame']||window[vendors[i]+'CancelRequestAnimationFrame'];}}}cancelRAF=cancelRAF||window.clearTimeout;function Bezier(x1,y1,x2,y2,epsilon){var curveX=function curveX(t){var v=1-t;return 3*v*v*t*x1+3*v*t*t*x2+t*t*t;};var curveY=function curveY(t){var v=1-t;return 3*v*v*t*y1+3*v*t*t*y2+t*t*t;};var derivativeCurveX=function derivativeCurveX(t){var v=1-t;return 3*(2*(t-1)*t+v*v)*x1+3*(-t*t*t+2*v*t)*x2;};return function(t){var x=t,t0,t1,t2,x2,d2,i;// First try a few iterations of Newton's method -- normally very fast.
for(t2=x,i=0;i<8;i++){x2=curveX(t2)-x;if(Math.abs(x2)<epsilon)return curveY(t2);d2=derivativeCurveX(t2);if(Math.abs(d2)<1e-6)break;t2=t2-x2/d2;}t0=0,t1=1,t2=x;if(t2<t0)return curveY(t0);if(t2>t1)return curveY(t1);// Fallback to the bisection method for reliability.
while(t0<t1){x2=curveX(t2);if(Math.abs(x2-x)<epsilon)return curveY(t2);if(x>x2)t0=t2;else t1=t2;t2=(t1-t0)*.5+t0;}// Failure
return curveY(t2);};};function Timer(cfg){var self=this;self.cfg=Util.mix({easing:"linear"},cfg);}Timer.MIN_DURATION=1;Util.extend(Timer,Base,{reset:function reset(cfg){var self=this;Util.mix(self.cfg,cfg);self.isfinished=false;self.percent=0;self._stop=null;},run:function run(){var self=this;var duration=self.cfg.duration;if(duration<=Timer.MIN_DURATION){self.isfinished=true;self.trigger("run",{percent:1});self.trigger("end",{percent:1});}if(self.isfinished)return;self._hasFinishedPercent=self._stop&&self._stop.percent||0;self._stop=null;self.start=Date.now();self.percent=0;// epsilon determines the precision of the solved values
var epsilon=1000/60/duration/4;var b=Easing[self.cfg.easing];self.easingFn=Bezier(b[0],b[1],b[2],b[3],epsilon);self._run();},_run:function _run(){var self=this;cancelRAF(self._raf);self._raf=RAF(function(){self.now=Date.now();self.duration=self.now-self.start>=self.cfg.duration?self.cfg.duration:self.now-self.start;self.progress=self.easingFn(self.duration/self.cfg.duration);self.percent=self.duration/self.cfg.duration+self._hasFinishedPercent;if(self.percent>=1||self._stop){self.percent=self._stop&&self._stop.percent?self._stop.percent:1;self.duration=self._stop&&self._stop.duration?self._stop.duration:self.duration;var param={percent:self.percent};self.trigger("stop",param);if(self.percent>=1){self.isfinished=true;self.trigger("end",{percent:1});}return;}self.trigger("run",{percent:self.progress,originPercent:self.percent});self._run();});},stop:function stop(){var self=this;self._stop={percent:self.percent,now:self.now};cancelRAF(self._raf);}});if((false?'undefined':_typeof(module))=='object'&&module.exports){module.exports=Timer;}/** ignored by jsdoc **/else{return Timer;}}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(10)(module));/***/},/* 131 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};!(__WEBPACK_AMD_DEFINE_RESULT__=function(require,exports,module){"use strict";//easing
var Easing={"linear":[0,0,1,1],"ease":[.25,.1,.25,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1],"quadratic":[0.33,0.66,0.66,1],"circular":[0.1,0.57,0.1,1],"bounce":[.71,1.35,.47,1.41],format:function format(easing){if(!easing)return;if(typeof easing==="string"&&this[easing]){return this[easing]instanceof Array?[" cubic-bezier(",this[easing],") "].join(""):this[easing];}if(easing instanceof Array){return[" cubic-bezier(",easing,") "].join("");}return easing;}};if((false?"undefined":_typeof(module))=='object'&&module.exports){module.exports=Easing;}/** ignored by jsdoc **/else{return Easing;}}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(10)(module));/***/},/* 132 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};!(__WEBPACK_AMD_DEFINE_RESULT__=function(require,exports,module){"use strict";var Util=__webpack_require__(13),Base=__webpack_require__(21),Animate=__webpack_require__(52),Boundry=__webpack_require__(204),Hammer=__webpack_require__(79),Sticky=__webpack_require__(205),Fixed=__webpack_require__(206);// boundry checked bounce effect
var BOUNDRY_CHECK_DURATION=500;var BOUNDRY_CHECK_EASING="ease";var BOUNDRY_CHECK_ACCELERATION=0.1;/** 
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
     */function XScroll(cfg){XScroll.superclass.constructor.call(this);this.userConfig=cfg;this.init();}Util.extend(XScroll,Base,{/**
         * version
         * @memberof XScroll
         * @type {string}
         */version:"3.0.13",/**
         * init scroll
         * @memberof XScroll
         * @return {XScroll}
         */init:function init(){var self=this;var defaultCfg={preventDefault:true,bounce:true,boundryCheck:true,useTransition:true,gpuAcceleration:true,BOUNDRY_CHECK_EASING:BOUNDRY_CHECK_EASING,BOUNDRY_CHECK_DURATION:BOUNDRY_CHECK_DURATION,BOUNDRY_CHECK_ACCELERATION:BOUNDRY_CHECK_ACCELERATION,useOriginScroll:false,zoomType:"y",indicatorInsets:{top:3,bottom:3,left:3,right:3,width:3,spacing:5},container:".xs-container",content:".xs-content",stickyElements:".xs-sticky",fixedElements:".xs-fixed",touchAction:"auto"};//generate guid
self.guid=Util.guid();self.renderTo=Util.getNode(self.userConfig.renderTo);//timer for animtion
self.__timers={};//config attributes on element
var elCfg=JSON.parse(self.renderTo.getAttribute('xs-cfg'));var userConfig=self.userConfig=Util.mix(Util.mix(defaultCfg,elCfg),self.userConfig);self.container=Util.getNode(userConfig.container,self.renderTo);self.content=Util.getNode(userConfig.content,self.renderTo);self.boundry=new Boundry();self.boundry.refresh();return self;},/**
         * destroy scroll
         * @memberof XScroll
         * @return {XScroll}
         */destroy:function destroy(){var self=this;self.mc&&self.mc.destroy();self.sticky&&self.sticky.destroy();self.fixed&&self.fixed.destroy();},_initContainer:function _initContainer(){},/**
         * @memberof XScroll
         * @return {XScroll}
         */enableGPUAcceleration:function enableGPUAcceleration(){this.userConfig.gpuAcceleration=true;return this;},/**
         * @memberof XScroll
         * @return {XScroll}
         */disableGPUAcceleration:function disableGPUAcceleration(){this.userConfig.gpuAcceleration=false;return this;},/**
         * get scroll offset
         * @memberof XScroll
         * @return {Object} {scrollTop:scrollTop,scrollLeft:scrollLeft}
         */getScrollPos:function getScrollPos(){var self=this;return{scrollLeft:self.getScrollLeft(),scrollTop:self.getScrollTop()};},/**
         * get scroll top value
         * @memberof XScroll
         * @return {number} scrollTop
         */getScrollTop:function getScrollTop(){},/**
         * get scroll left value
         * @memberof XScroll
         * @return {number} scrollLeft
         */getScrollLeft:function getScrollLeft(){},/**
         * scroll absolute to the destination
         * @memberof XScroll
         * @param scrollLeft {number} scrollLeft
         * @param scrollTop {number} scrollTop
         * @param duration {number} duration for animte
         * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
         **/scrollTo:function scrollTo(scrollLeft,scrollTop,duration,easing,callback){var self=this;var scrollLeft=undefined===scrollLeft||isNaN(scrollLeft)?-self.getScrollLeft():scrollLeft;var scrollTop=undefined===scrollTop||isNaN(scrollTop)?-self.getScrollTop():scrollTop;self.scrollLeft(scrollLeft,duration,easing,callback);self.scrollTop(scrollTop,duration,easing,callback);},/**
         * scroll relative to the destination
         * @memberof XScroll
         * @param scrollLeft {number} scrollLeft
         * @param scrollTop {number} scrollTop
         * @param duration {number} duration for animte
         * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
         **/scrollBy:function scrollBy(scrollLeft,scrollTop,duration,easing,callback){this.scrollByX(scrollLeft,duration,easing,callback);this.scrollByY(scrollTop,duration,easing,callback);},/**
         * horizontal scroll relative to the destination
         * @memberof XScroll
         * @param scrollLeft {number} scrollLeft
         * @param duration {number} duration for animte
         * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
         **/scrollLeftBy:function scrollLeftBy(scrollLeft,duration,easing,callback){this.scrollLeft(Number(scrollLeft)+Number(this.getScrollLeft()),duration,easing,callback);},/**
         * vertical scroll relative to the destination
         * @memberof XScroll
         * @param scrollTop {number} scrollTop
         * @param duration {number} duration for animte
         * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
         **/scrollTopBy:function scrollTopBy(scrollTop,duration,easing,callback){this.scrollTop(Number(scrollTop)+Number(this.getScrollTop()),duration,easing,callback);},/**
         * horizontal scroll absolute to the destination
         * @memberof XScroll
         * @param scrollLeft {number} scrollLeft
         * @param duration {number} duration for animte
         * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
         **/scrollLeft:function scrollLeft(_scrollLeft,duration,easing,callback){},/**
         * vertical scroll absolute to the destination
         * @memberof XScroll
         * @param scrollTop {number} scrollTop
         * @param duration {number} duration for animte
         * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
         **/scrollTop:function scrollTop(_scrollTop,duration,easing,callback){},/**
         * reset the boundry size
         * @memberof XScroll
         * @return {XScroll}
         **/resetSize:function resetSize(){var self=this;if(!self.container||!self.content)return;var userConfig=self.userConfig;var renderToStyle=getComputedStyle(self.renderTo);var width=self.width=(userConfig.width||self.renderTo.offsetWidth)-Util.px2Num(renderToStyle['padding-left'])-Util.px2Num(renderToStyle['padding-right']);var height=self.height=(userConfig.height||self.renderTo.offsetHeight)-Util.px2Num(renderToStyle['padding-top'])-Util.px2Num(renderToStyle['padding-bottom']);;var containerWidth=userConfig.containerWidth||self.content.offsetWidth;var containerHeight=userConfig.containerHeight||self.content.offsetHeight;self.containerWidth=containerWidth<self.width?self.width:containerWidth;self.containerHeight=containerHeight<self.height?self.height:containerHeight;self.boundry.refresh({width:self.width,height:self.height});return self;},/**
         * render scroll
         * @memberof XScroll
         * @return {XScroll}
         **/render:function render(){var self=this;self.resetSize();//init stickies
self.initSticky();//init fixed elements
self.initFixed();self.trigger("afterrender",{type:"afterrender"});self._bindEvt();//update touch-action 
self.initTouchAction();return self;},/**
         * init touch action
         * @memberof XScroll
         * @return {XScroll}
         */initTouchAction:function initTouchAction(){var self=this;self.mc.set({touchAction:self.userConfig.touchAction});return self;},initFixed:function initFixed(){var self=this,userConfig=self.userConfig;self.fixed=self.fixed||new Fixed({fixedElements:userConfig.fixedElements,xscroll:self,fixedRenderTo:userConfig.fixedRenderTo});self.fixed.render();self.resetSize();return self;},initSticky:function initSticky(){var self=this,userConfig=self.userConfig;var sticky=self.sticky=self.sticky||new Sticky({xscroll:self,zoomType:userConfig.zoomType,stickyRenderTo:userConfig.stickyRenderTo});sticky.render();},/**
         * bounce to the boundry vertical and horizontal
         * @memberof XScroll
         * @return {XScroll}
         **/boundryCheck:function boundryCheck(){return this;},/**
         * bounce to the boundry horizontal
         * @memberof XScroll
         * @return {XScroll}
         **/boundryCheckX:function boundryCheckX(){return this;},/**
         * bounce to the boundry vertical
         * @memberof XScroll
         * @return {XScroll}
         **/boundryCheckY:function boundryCheckY(){return this;},_bindEvt:function _bindEvt(){var self=this;if(self.___isEvtBind)return;self.___isEvtBind=true;var mc=self.mc=new Hammer.Manager(self.renderTo);var tap=new Hammer.Tap();var pan=new Hammer.Pan();var pinch=new Hammer.Pinch();mc.add([tap,pan]);//trigger all events 
self.mc.on("panstart pan panend pancancel pinchstart pinchmove pinchend pinchcancel pinchin pinchout",function(e){self.trigger(e.type,e);});//trigger touch events
var touchEvents=['touchstart','touchmove','touchend','touchcancel','mousedown'];for(var i=0,l=touchEvents.length;i<l;i++){self.renderTo.addEventListener(touchEvents[i],function(e){self.trigger(e.type,e);});}self.mc.on("tap",function(e){if(e.tapCount==1){e.type="tap";self.trigger(e.type,e);}else if(e.tapCount==2){e.type="doubletap";self.trigger("doubletap",e);}});return self;},_resetLockConfig:function _resetLockConfig(){},stop:function stop(){}});if((false?'undefined':_typeof(module))=='object'&&module.exports){module.exports=XScroll;}/** ignored by jsdoc **/else{return XScroll;}}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(10)(module));/***/},/* 133 *//***/function(module,exports){var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};var g;// This works in non-strict mode
g=function(){return this;}();try{// This works if eval is allowed (see CSP)
g=g||Function("return this")()||(1,eval)("this");}catch(e){// This works if the window reference is available
if((typeof window==="undefined"?"undefined":_typeof(window))==="object")g=window;}// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
module.exports=g;/***/},/* 134 *//***/function(module,exports,__webpack_require__){module.exports=!__webpack_require__(7)&&!__webpack_require__(3)(function(){return Object.defineProperty(__webpack_require__(80)('div'),'a',{get:function get(){return 7;}}).a!=7;});/***/},/* 135 *//***/function(module,exports,__webpack_require__){exports.f=__webpack_require__(6);/***/},/* 136 *//***/function(module,exports,__webpack_require__){var has=__webpack_require__(14);var toIObject=__webpack_require__(17);var arrayIndexOf=__webpack_require__(58)(false);var IE_PROTO=__webpack_require__(82)('IE_PROTO');module.exports=function(object,names){var O=toIObject(object);var i=0;var result=[];var key;for(key in O){if(key!=IE_PROTO)has(O,key)&&result.push(key);}// Don't enum bug & hidden keys
while(names.length>i){if(has(O,key=names[i++])){~arrayIndexOf(result,key)||result.push(key);}}return result;};/***/},/* 137 *//***/function(module,exports,__webpack_require__){var dP=__webpack_require__(8);var anObject=__webpack_require__(1);var getKeys=__webpack_require__(34);module.exports=__webpack_require__(7)?Object.defineProperties:function defineProperties(O,Properties){anObject(O);var keys=getKeys(Properties);var length=keys.length;var i=0;var P;while(length>i){dP.f(O,P=keys[i++],Properties[P]);}return O;};/***/},/* 138 *//***/function(module,exports,__webpack_require__){var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject=__webpack_require__(17);var gOPN=__webpack_require__(41).f;var toString={}.toString;var windowNames=(typeof window==='undefined'?'undefined':_typeof(window))=='object'&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];var getWindowNames=function getWindowNames(it){try{return gOPN(it);}catch(e){return windowNames.slice();}};module.exports.f=function getOwnPropertyNames(it){return windowNames&&toString.call(it)=='[object Window]'?getWindowNames(it):gOPN(toIObject(it));};/***/},/* 139 *//***/function(module,exports,__webpack_require__){"use strict";// 19.1.2.1 Object.assign(target, source, ...)
var getKeys=__webpack_require__(34);var gOPS=__webpack_require__(59);var pIE=__webpack_require__(54);var toObject=__webpack_require__(11);var IObject=__webpack_require__(53);var $assign=Object.assign;// should work with symbols and should have deterministic property order (V8 bug)
module.exports=!$assign||__webpack_require__(3)(function(){var A={};var B={};// eslint-disable-next-line no-undef
var S=Symbol();var K='abcdefghijklmnopqrst';A[S]=7;K.split('').forEach(function(k){B[k]=k;});return $assign({},A)[S]!=7||Object.keys($assign({},B)).join('')!=K;})?function assign(target,source){// eslint-disable-line no-unused-vars
var T=toObject(target);var aLen=arguments.length;var index=1;var getSymbols=gOPS.f;var isEnum=pIE.f;while(aLen>index){var S=IObject(arguments[index++]);var keys=getSymbols?getKeys(S).concat(getSymbols(S)):getKeys(S);var length=keys.length;var j=0;var key;while(length>j){if(isEnum.call(S,key=keys[j++]))T[key]=S[key];}}return T;}:$assign;/***/},/* 140 *//***/function(module,exports,__webpack_require__){"use strict";var aFunction=__webpack_require__(12);var isObject=__webpack_require__(5);var invoke=__webpack_require__(61);var arraySlice=[].slice;var factories={};var construct=function construct(F,len,args){if(!(len in factories)){for(var n=[],i=0;i<len;i++){n[i]='a['+i+']';}// eslint-disable-next-line no-new-func
factories[len]=Function('F,a','return new F('+n.join(',')+')');}return factories[len](F,args);};module.exports=Function.bind||function bind(that/* , ...args */){var fn=aFunction(this);var partArgs=arraySlice.call(arguments,1);var bound=function bound()/* args... */{var args=partArgs.concat(arraySlice.call(arguments));return this instanceof bound?construct(fn,args.length,args):invoke(fn,args,that);};if(isObject(fn.prototype))bound.prototype=fn.prototype;return bound;};/***/},/* 141 *//***/function(module,exports,__webpack_require__){var $parseInt=__webpack_require__(2).parseInt;var $trim=__webpack_require__(49).trim;var ws=__webpack_require__(86);var hex=/^[-+]?0[xX]/;module.exports=$parseInt(ws+'08')!==8||$parseInt(ws+'0x16')!==22?function parseInt(str,radix){var string=$trim(String(str),3);return $parseInt(string,radix>>>0||(hex.test(string)?16:10));}:$parseInt;/***/},/* 142 *//***/function(module,exports,__webpack_require__){var $parseFloat=__webpack_require__(2).parseFloat;var $trim=__webpack_require__(49).trim;module.exports=1/$parseFloat(__webpack_require__(86)+'-0')!==-Infinity?function parseFloat(str){var string=$trim(String(str),3);var result=$parseFloat(string);return result===0&&string.charAt(0)=='-'?-0:result;}:$parseFloat;/***/},/* 143 *//***/function(module,exports,__webpack_require__){var cof=__webpack_require__(23);module.exports=function(it,msg){if(typeof it!='number'&&cof(it)!='Number')throw TypeError(msg);return+it;};/***/},/* 144 *//***/function(module,exports,__webpack_require__){// 20.1.2.3 Number.isInteger(number)
var isObject=__webpack_require__(5);var floor=Math.floor;module.exports=function isInteger(it){return!isObject(it)&&isFinite(it)&&floor(it)===it;};/***/},/* 145 *//***/function(module,exports){// 20.2.2.20 Math.log1p(x)
module.exports=Math.log1p||function log1p(x){return(x=+x)>-1e-8&&x<1e-8?x-x*x/2:Math.log(1+x);};/***/},/* 146 *//***/function(module,exports,__webpack_require__){// 20.2.2.16 Math.fround(x)
var sign=__webpack_require__(89);var pow=Math.pow;var EPSILON=pow(2,-52);var EPSILON32=pow(2,-23);var MAX32=pow(2,127)*(2-EPSILON32);var MIN32=pow(2,-126);var roundTiesToEven=function roundTiesToEven(n){return n+1/EPSILON-1/EPSILON;};module.exports=Math.fround||function fround(x){var $abs=Math.abs(x);var $sign=sign(x);var a,result;if($abs<MIN32)return $sign*roundTiesToEven($abs/MIN32/EPSILON32)*MIN32*EPSILON32;a=(1+EPSILON32/EPSILON)*$abs;result=a-(a-$abs);// eslint-disable-next-line no-self-compare
if(result>MAX32||result!=result)return $sign*Infinity;return $sign*result;};/***/},/* 147 *//***/function(module,exports,__webpack_require__){// call something on iterator step with safe closing on error
var anObject=__webpack_require__(1);module.exports=function(iterator,fn,value,entries){try{return entries?fn(anObject(value)[0],value[1]):fn(value);// 7.4.6 IteratorClose(iterator, completion)
}catch(e){var ret=iterator['return'];if(ret!==undefined)anObject(ret.call(iterator));throw e;}};/***/},/* 148 *//***/function(module,exports,__webpack_require__){var aFunction=__webpack_require__(12);var toObject=__webpack_require__(11);var IObject=__webpack_require__(53);var toLength=__webpack_require__(9);module.exports=function(that,callbackfn,aLen,memo,isRight){aFunction(callbackfn);var O=toObject(that);var self=IObject(O);var length=toLength(O.length);var index=isRight?length-1:0;var i=isRight?-1:1;if(aLen<2)for(;;){if(index in self){memo=self[index];index+=i;break;}index+=i;if(isRight?index<0:length<=index){throw TypeError('Reduce of empty array with no initial value');}}for(;isRight?index>=0:length>index;index+=i){if(index in self){memo=callbackfn(memo,self[index],index,O);}}return memo;};/***/},/* 149 *//***/function(module,exports,__webpack_require__){"use strict";// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var toObject=__webpack_require__(11);var toAbsoluteIndex=__webpack_require__(39);var toLength=__webpack_require__(9);module.exports=[].copyWithin||function copyWithin(target/* = 0 */,start/* = 0, end = @length */){var O=toObject(this);var len=toLength(O.length);var to=toAbsoluteIndex(target,len);var from=toAbsoluteIndex(start,len);var end=arguments.length>2?arguments[2]:undefined;var count=Math.min((end===undefined?len:toAbsoluteIndex(end,len))-from,len-to);var inc=1;if(from<to&&to<from+count){inc=-1;from+=count-1;to+=count-1;}while(count-->0){if(from in O)O[to]=O[from];else delete O[to];to+=inc;from+=inc;}return O;};/***/},/* 150 *//***/function(module,exports){module.exports=function(done,value){return{value:value,done:!!done};};/***/},/* 151 *//***/function(module,exports,__webpack_require__){// 21.2.5.3 get RegExp.prototype.flags()
if(__webpack_require__(7)&&/./g.flags!='g')__webpack_require__(8).f(RegExp.prototype,'flags',{configurable:true,get:__webpack_require__(64)});/***/},/* 152 *//***/function(module,exports){module.exports=function(exec){try{return{e:false,v:exec()};}catch(e){return{e:true,v:e};}};/***/},/* 153 *//***/function(module,exports,__webpack_require__){var newPromiseCapability=__webpack_require__(104);module.exports=function(C,x){var promiseCapability=newPromiseCapability.f(C);var resolve=promiseCapability.resolve;resolve(x);return promiseCapability.promise;};/***/},/* 154 *//***/function(module,exports,__webpack_require__){"use strict";var strong=__webpack_require__(155);var validate=__webpack_require__(51);var MAP='Map';// 23.1 Map Objects
module.exports=__webpack_require__(67)(MAP,function(get){return function Map(){return get(this,arguments.length>0?arguments[0]:undefined);};},{// 23.1.3.6 Map.prototype.get(key)
get:function get(key){var entry=strong.getEntry(validate(this,MAP),key);return entry&&entry.v;},// 23.1.3.9 Map.prototype.set(key, value)
set:function set(key,value){return strong.def(validate(this,MAP),key===0?0:key,value);}},strong,true);/***/},/* 155 *//***/function(module,exports,__webpack_require__){"use strict";var dP=__webpack_require__(8).f;var create=__webpack_require__(40);var redefineAll=__webpack_require__(45);var ctx=__webpack_require__(22);var anInstance=__webpack_require__(43);var forOf=__webpack_require__(44);var $iterDefine=__webpack_require__(92);var step=__webpack_require__(150);var setSpecies=__webpack_require__(42);var DESCRIPTORS=__webpack_require__(7);var fastKey=__webpack_require__(33).fastKey;var validate=__webpack_require__(51);var SIZE=DESCRIPTORS?'_s':'size';var getEntry=function getEntry(that,key){// fast case
var index=fastKey(key);var entry;if(index!=='F')return that._i[index];// frozen object case
for(entry=that._f;entry;entry=entry.n){if(entry.k==key)return entry;}};module.exports={getConstructor:function getConstructor(wrapper,NAME,IS_MAP,ADDER){var C=wrapper(function(that,iterable){anInstance(that,C,NAME,'_i');that._t=NAME;// collection type
that._i=create(null);// index
that._f=undefined;// first entry
that._l=undefined;// last entry
that[SIZE]=0;// size
if(iterable!=undefined)forOf(iterable,IS_MAP,that[ADDER],that);});redefineAll(C.prototype,{// 23.1.3.1 Map.prototype.clear()
// 23.2.3.2 Set.prototype.clear()
clear:function clear(){for(var that=validate(this,NAME),data=that._i,entry=that._f;entry;entry=entry.n){entry.r=true;if(entry.p)entry.p=entry.p.n=undefined;delete data[entry.i];}that._f=that._l=undefined;that[SIZE]=0;},// 23.1.3.3 Map.prototype.delete(key)
// 23.2.3.4 Set.prototype.delete(value)
'delete':function _delete(key){var that=validate(this,NAME);var entry=getEntry(that,key);if(entry){var next=entry.n;var prev=entry.p;delete that._i[entry.i];entry.r=true;if(prev)prev.n=next;if(next)next.p=prev;if(that._f==entry)that._f=next;if(that._l==entry)that._l=prev;that[SIZE]--;}return!!entry;},// 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
// 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
forEach:function forEach(callbackfn/* , that = undefined */){validate(this,NAME);var f=ctx(callbackfn,arguments.length>1?arguments[1]:undefined,3);var entry;while(entry=entry?entry.n:this._f){f(entry.v,entry.k,this);// revert to the last existing entry
while(entry&&entry.r){entry=entry.p;}}},// 23.1.3.7 Map.prototype.has(key)
// 23.2.3.7 Set.prototype.has(value)
has:function has(key){return!!getEntry(validate(this,NAME),key);}});if(DESCRIPTORS)dP(C.prototype,'size',{get:function get(){return validate(this,NAME)[SIZE];}});return C;},def:function def(that,key,value){var entry=getEntry(that,key);var prev,index;// change existing entry
if(entry){entry.v=value;// create new entry
}else{that._l=entry={i:index=fastKey(key,true),// <- index
k:key,// <- key
v:value,// <- value
p:prev=that._l,// <- previous entry
n:undefined,// <- next entry
r:false// <- removed
};if(!that._f)that._f=entry;if(prev)prev.n=entry;that[SIZE]++;// add to index
if(index!=='F')that._i[index]=entry;}return that;},getEntry:getEntry,setStrong:function setStrong(C,NAME,IS_MAP){// add .keys, .values, .entries, [@@iterator]
// 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
$iterDefine(C,NAME,function(iterated,kind){this._t=validate(iterated,NAME);// target
this._k=kind;// kind
this._l=undefined;// previous
},function(){var that=this;var kind=that._k;var entry=that._l;// revert to the last existing entry
while(entry&&entry.r){entry=entry.p;}// get next entry
if(!that._t||!(that._l=entry=entry?entry.n:that._t._f)){// or finish the iteration
that._t=undefined;return step(1);}// return step by kind
if(kind=='keys')return step(0,entry.k);if(kind=='values')return step(0,entry.v);return step(0,[entry.k,entry.v]);},IS_MAP?'entries':'values',!IS_MAP,true);// add [@@species], 23.1.2.2, 23.2.2.2
setSpecies(NAME);}};/***/},/* 156 *//***/function(module,exports,__webpack_require__){"use strict";var strong=__webpack_require__(155);var validate=__webpack_require__(51);var SET='Set';// 23.2 Set Objects
module.exports=__webpack_require__(67)(SET,function(get){return function Set(){return get(this,arguments.length>0?arguments[0]:undefined);};},{// 23.2.3.1 Set.prototype.add(value)
add:function add(value){return strong.def(validate(this,SET),value=value===0?0:value,value);}},strong);/***/},/* 157 *//***/function(module,exports,__webpack_require__){"use strict";var each=__webpack_require__(30)(0);var redefine=__webpack_require__(16);var meta=__webpack_require__(33);var assign=__webpack_require__(139);var weak=__webpack_require__(158);var isObject=__webpack_require__(5);var fails=__webpack_require__(3);var validate=__webpack_require__(51);var WEAK_MAP='WeakMap';var getWeak=meta.getWeak;var isExtensible=Object.isExtensible;var uncaughtFrozenStore=weak.ufstore;var tmp={};var InternalMap;var wrapper=function wrapper(get){return function WeakMap(){return get(this,arguments.length>0?arguments[0]:undefined);};};var methods={// 23.3.3.3 WeakMap.prototype.get(key)
get:function get(key){if(isObject(key)){var data=getWeak(key);if(data===true)return uncaughtFrozenStore(validate(this,WEAK_MAP)).get(key);return data?data[this._i]:undefined;}},// 23.3.3.5 WeakMap.prototype.set(key, value)
set:function set(key,value){return weak.def(validate(this,WEAK_MAP),key,value);}};// 23.3 WeakMap Objects
var $WeakMap=module.exports=__webpack_require__(67)(WEAK_MAP,wrapper,methods,weak,true,true);// IE11 WeakMap frozen keys fix
if(fails(function(){return new $WeakMap().set((Object.freeze||Object)(tmp),7).get(tmp)!=7;})){InternalMap=weak.getConstructor(wrapper,WEAK_MAP);assign(InternalMap.prototype,methods);meta.NEED=true;each(['delete','has','get','set'],function(key){var proto=$WeakMap.prototype;var method=proto[key];redefine(proto,key,function(a,b){// store frozen objects on internal weakmap shim
if(isObject(a)&&!isExtensible(a)){if(!this._f)this._f=new InternalMap();var result=this._f[key](a,b);return key=='set'?this:result;// store all the rest on native weakmap
}return method.call(this,a,b);});});}/***/},/* 158 *//***/function(module,exports,__webpack_require__){"use strict";var redefineAll=__webpack_require__(45);var getWeak=__webpack_require__(33).getWeak;var anObject=__webpack_require__(1);var isObject=__webpack_require__(5);var anInstance=__webpack_require__(43);var forOf=__webpack_require__(44);var createArrayMethod=__webpack_require__(30);var $has=__webpack_require__(14);var validate=__webpack_require__(51);var arrayFind=createArrayMethod(5);var arrayFindIndex=createArrayMethod(6);var id=0;// fallback for uncaught frozen keys
var uncaughtFrozenStore=function uncaughtFrozenStore(that){return that._l||(that._l=new UncaughtFrozenStore());};var UncaughtFrozenStore=function UncaughtFrozenStore(){this.a=[];};var findUncaughtFrozen=function findUncaughtFrozen(store,key){return arrayFind(store.a,function(it){return it[0]===key;});};UncaughtFrozenStore.prototype={get:function get(key){var entry=findUncaughtFrozen(this,key);if(entry)return entry[1];},has:function has(key){return!!findUncaughtFrozen(this,key);},set:function set(key,value){var entry=findUncaughtFrozen(this,key);if(entry)entry[1]=value;else this.a.push([key,value]);},'delete':function _delete(key){var index=arrayFindIndex(this.a,function(it){return it[0]===key;});if(~index)this.a.splice(index,1);return!!~index;}};module.exports={getConstructor:function getConstructor(wrapper,NAME,IS_MAP,ADDER){var C=wrapper(function(that,iterable){anInstance(that,C,NAME,'_i');that._t=NAME;// collection type
that._i=id++;// collection id
that._l=undefined;// leak store for uncaught frozen objects
if(iterable!=undefined)forOf(iterable,IS_MAP,that[ADDER],that);});redefineAll(C.prototype,{// 23.3.3.2 WeakMap.prototype.delete(key)
// 23.4.3.3 WeakSet.prototype.delete(value)
'delete':function _delete(key){if(!isObject(key))return false;var data=getWeak(key);if(data===true)return uncaughtFrozenStore(validate(this,NAME))['delete'](key);return data&&$has(data,this._i)&&delete data[this._i];},// 23.3.3.4 WeakMap.prototype.has(key)
// 23.4.3.4 WeakSet.prototype.has(value)
has:function has(key){if(!isObject(key))return false;var data=getWeak(key);if(data===true)return uncaughtFrozenStore(validate(this,NAME)).has(key);return data&&$has(data,this._i);}});return C;},def:function def(that,key,value){var data=getWeak(anObject(key),true);if(data===true)uncaughtFrozenStore(that).set(key,value);else data[that._i]=value;return that;},ufstore:uncaughtFrozenStore};/***/},/* 159 *//***/function(module,exports,__webpack_require__){// https://tc39.github.io/ecma262/#sec-toindex
var toInteger=__webpack_require__(28);var toLength=__webpack_require__(9);module.exports=function(it){if(it===undefined)return 0;var number=toInteger(it);var length=toLength(number);if(number!==length)throw RangeError('Wrong length!');return length;};/***/},/* 160 *//***/function(module,exports,__webpack_require__){// all object keys, includes non-enumerable and symbols
var gOPN=__webpack_require__(41);var gOPS=__webpack_require__(59);var anObject=__webpack_require__(1);var Reflect=__webpack_require__(2).Reflect;module.exports=Reflect&&Reflect.ownKeys||function ownKeys(it){var keys=gOPN.f(anObject(it));var getSymbols=gOPS.f;return getSymbols?keys.concat(getSymbols(it)):keys;};/***/},/* 161 *//***/function(module,exports,__webpack_require__){"use strict";// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray=__webpack_require__(60);var isObject=__webpack_require__(5);var toLength=__webpack_require__(9);var ctx=__webpack_require__(22);var IS_CONCAT_SPREADABLE=__webpack_require__(6)('isConcatSpreadable');function flattenIntoArray(target,original,source,sourceLen,start,depth,mapper,thisArg){var targetIndex=start;var sourceIndex=0;var mapFn=mapper?ctx(mapper,thisArg,3):false;var element,spreadable;while(sourceIndex<sourceLen){if(sourceIndex in source){element=mapFn?mapFn(source[sourceIndex],sourceIndex,original):source[sourceIndex];spreadable=false;if(isObject(element)){spreadable=element[IS_CONCAT_SPREADABLE];spreadable=spreadable!==undefined?!!spreadable:isArray(element);}if(spreadable&&depth>0){targetIndex=flattenIntoArray(target,original,element,toLength(element.length),targetIndex,depth-1)-1;}else{if(targetIndex>=0x1fffffffffffff)throw TypeError();target[targetIndex]=element;}targetIndex++;}sourceIndex++;}return targetIndex;}module.exports=flattenIntoArray;/***/},/* 162 *//***/function(module,exports,__webpack_require__){// https://github.com/tc39/proposal-string-pad-start-end
var toLength=__webpack_require__(9);var repeat=__webpack_require__(88);var defined=__webpack_require__(27);module.exports=function(that,maxLength,fillString,left){var S=String(defined(that));var stringLength=S.length;var fillStr=fillString===undefined?' ':String(fillString);var intMaxLength=toLength(maxLength);if(intMaxLength<=stringLength||fillStr=='')return S;var fillLen=intMaxLength-stringLength;var stringFiller=repeat.call(fillStr,Math.ceil(fillLen/fillStr.length));if(stringFiller.length>fillLen)stringFiller=stringFiller.slice(0,fillLen);return left?stringFiller+S:S+stringFiller;};/***/},/* 163 *//***/function(module,exports,__webpack_require__){var getKeys=__webpack_require__(34);var toIObject=__webpack_require__(17);var isEnum=__webpack_require__(54).f;module.exports=function(isEntries){return function(it){var O=toIObject(it);var keys=getKeys(O);var length=keys.length;var i=0;var result=[];var key;while(length>i){if(isEnum.call(O,key=keys[i++])){result.push(isEntries?[key,O[key]]:O[key]);}}return result;};};/***/},/* 164 *//***/function(module,exports,__webpack_require__){// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof=__webpack_require__(55);var from=__webpack_require__(165);module.exports=function(NAME){return function toJSON(){if(classof(this)!=NAME)throw TypeError(NAME+"#toJSON isn't generic");return from(this);};};/***/},/* 165 *//***/function(module,exports,__webpack_require__){var forOf=__webpack_require__(44);module.exports=function(iter,ITERATOR){var result=[];forOf(iter,false,result.push,result,ITERATOR);return result;};/***/},/* 166 *//***/function(module,exports){// https://rwaldron.github.io/proposal-math-extensions/
module.exports=Math.scale||function scale(x,inLow,inHigh,outLow,outHigh){if(arguments.length===0// eslint-disable-next-line no-self-compare
||x!=x// eslint-disable-next-line no-self-compare
||inLow!=inLow// eslint-disable-next-line no-self-compare
||inHigh!=inHigh// eslint-disable-next-line no-self-compare
||outLow!=outLow// eslint-disable-next-line no-self-compare
||outHigh!=outHigh)return NaN;if(x===Infinity||x===-Infinity)return x;return(x-inLow)*(outHigh-outLow)/(inHigh-inLow)+outLow;};/***/},,,,,,,,,,,,,,,,,,,,,,,,,,,,/* 167 *//* 168 *//* 169 *//* 170 *//* 171 *//* 172 *//* 173 *//* 174 *//* 175 *//* 176 *//* 177 *//* 178 *//* 179 *//* 180 *//* 181 *//* 182 *//* 183 *//* 184 *//* 185 *//* 186 *//* 187 *//* 188 *//* 189 *//* 190 *//* 191 *//* 192 *//* 193 *//* 194 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__CourseTab_vue__=__webpack_require__(195);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__CourseTab_scss__=__webpack_require__(420);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__CourseTab_scss___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__CourseTab_scss__);if(true){__WEBPACK_IMPORTED_MODULE_0__CourseTab_vue__["a"/* default */].install=function(Vue){return Vue.component(__WEBPACK_IMPORTED_MODULE_0__CourseTab_vue__["a"/* default */].name,__WEBPACK_IMPORTED_MODULE_0__CourseTab_vue__["a"/* default */]);};}/* harmony default export */__webpack_exports__["default"]=__WEBPACK_IMPORTED_MODULE_0__CourseTab_vue__["a"/* default */];/***/},/* 195 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_CourseTab_vue__=__webpack_require__(196);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_512ec87c_hasScoped_false_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_CourseTab_vue__=__webpack_require__(419);var disposed=false;var normalizeComponent=__webpack_require__(4);/* script *//* template *//* styles */var __vue_styles__=null;/* scopeId */var __vue_scopeId__=null;/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_CourseTab_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_512ec87c_hasScoped_false_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_CourseTab_vue__["a"/* default */],__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="src/course-tab/CourseTab.vue";if(Component.esModule&&Object.keys(Component.esModule).some(function(key){return key!=="default"&&key.substr(0,2)!=="__";})){console.error("named exports are not supported in *.vue files.");}if(Component.options.functional){console.error("[vue-loader] CourseTab.vue: functional components are not supported with templates, they should use render functions.");}/* hot reload */if(false){(function(){var hotAPI=require("vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-512ec87c",Component.options);}else{hotAPI.reload("data-v-512ec87c",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 196 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_vux_src_components_tab_tab_vue__=__webpack_require__(106);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_tab_tab_item_vue__=__webpack_require__(107);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_vux_src_components_swiper_swiper_vue__=__webpack_require__(108);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_vux_src_components_swiper_swiper_item_vue__=__webpack_require__(109);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4_vux_src_components_load_more_index_vue__=__webpack_require__(110);/* harmony import */var __WEBPACK_IMPORTED_MODULE_5_vux_src_components_scroller_index_vue__=__webpack_require__(197);/* harmony import */var __WEBPACK_IMPORTED_MODULE_6__course_lists__=__webpack_require__(56);/* harmony import */var __WEBPACK_IMPORTED_MODULE_7_object_serialize__=__webpack_require__(213);/* harmony import */var __WEBPACK_IMPORTED_MODULE_8_whatwg_fetch__=__webpack_require__(111);/* harmony import */var __WEBPACK_IMPORTED_MODULE_8_whatwg_fetch___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_whatwg_fetch__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_9_babel_polyfill__=__webpack_require__(214);/* harmony import */var __WEBPACK_IMPORTED_MODULE_9_babel_polyfill___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_babel_polyfill__);function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}/* harmony default export */__webpack_exports__["a"]={name:'mm-course-tab',data:function data(){return{selected:'全部课程',index:0,width:0,showallType:false,swiperList:[],course:[],pageCount:10,courses:[],si:null,bottomCount:20,onFetching:false,scrollsHeight:window.innerHeight-window.innerWidth*0.25+'px',lock:false,platform:navigator.platform};},components:{Tab:__WEBPACK_IMPORTED_MODULE_0_vux_src_components_tab_tab_vue__["a"/* default */],TabItem:__WEBPACK_IMPORTED_MODULE_1_vux_src_components_tab_tab_item_vue__["a"/* default */],Swiper:__WEBPACK_IMPORTED_MODULE_2_vux_src_components_swiper_swiper_vue__["a"/* default */],SwiperItem:__WEBPACK_IMPORTED_MODULE_3_vux_src_components_swiper_swiper_item_vue__["a"/* default */],MmCourseList:__WEBPACK_IMPORTED_MODULE_6__course_lists__["default"],LoadMore:__WEBPACK_IMPORTED_MODULE_4_vux_src_components_load_more_index_vue__["a"/* default */],Scroller:__WEBPACK_IMPORTED_MODULE_5_vux_src_components_scroller_index_vue__["a"/* default */],scrollTop:0},methods:{onScrollBottom:function onScrollBottom(){if(!this.onFetching){this.onFetching=true;this.$refs.scrollerBottom[this.index].reset();this.listFunc(this.index);}},onScroll:function onScroll(_ref){var _ref$top=_ref.top,top=_ref$top===undefined?0:_ref$top;if(!this.lock){this.scrollTop=top;}},selectType:function selectType(ind){this.index=ind;this.showallType=false;},getList:function getList(){var _this=this;var ind=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var pageNum=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;var type=this.courses[ind]['data'];this.pageCount=+this.pageCounts||10;var body={pageNum:pageNum,pageCount:this.pageCount};if(typeof Object.assign!='function'){Object.assign=function(target){'use strict';if(target==null){throw new TypeError('Cannot convert undefined or null to object');}target=Object(target);for(var index=1;index<arguments.length;index++){var source=arguments[index];if(source!=null){for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}}return target;};}if(type){Object.assign(body,_defineProperty({},type,this.courses[ind][type]));}var canshu={method:"post",headers:{"Accept":"application/json","Content-Type":"application/x-www-form-urlencoded"},body:Object(__WEBPACK_IMPORTED_MODULE_7_object_serialize__["a"/* default */])(body)};return new Promise(function(resolve,reject){var requestHead=_this.requestHead||'';fetch(requestHead+'/api/course/all',canshu).then(function(resp){return resp.json();}).then(function(re){resolve(re.data);_this.courses[ind].page=pageNum;}).catch(function(){return reject();});});},setWidth:function setWidth(){this.width=document.body.scrollWidth*0.24*this.swiperList.length+'px';},listFunc:function listFunc(){var _this2=this;var val=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var _courses$val=this.courses[val],_courses$val$page=_courses$val.page,page=_courses$val$page===undefined?0:_courses$val$page,_courses$val$count=_courses$val.count,count=_courses$val$count===undefined?0:_courses$val$count;if((page-1)*this.pageCount>count){return;}var sl=this.swiperList[val];this.getList(val,this.courses[val].page).then(function(data){var message=[];if(data.count){message=data.list;}sl.count=data.count;sl.page=_this2.courses[val].page+1;var t=[].push.apply(sl.message||[],data.list);sl.message=sl.message||data.list;},function(){return sl.message={};}).then(function(){_this2.$set(_this2.swiperList,val,_this2.swiperList[val]);_this2.$refs.scrollerBottom[_this2.index].reset();_this2.onFetching=false;}).then(function(){if(_this2.platform==="Win32"){_this2.onScrollBottom();}});}},props:['tags','pageCounts','requestHead','min-moving-distance'],mounted:function mounted(){var _this3=this;this.setWidth();var screenX=void 0;document.body.addEventListener('touchstart',function(e){screenX=e.targetTouches[0].screenX;});document.body.addEventListener('touchmove',function(e){if(Math.abs(screenX-e.targetTouches[0].screenX)>50){_this3.lock=true;_this3.$refs.scrollerBottom[_this3.index].reset({top:_this3.scrollTop});}});document.body.addEventListener('touchend',function(e){_this3.lock=false;_this3.$refs.scrollerBottom[_this3.index].reset();});},created:function created(){var _this4=this;var _tags=this.tags,_tags$type=_tags.type,type=_tags$type===undefined?['vip']:_tags$type,_tags$category=_tags.category,category=_tags$category===undefined?['测','试','代','码']:_tags$category;var mycourse=[{name:'全部课程'}];var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=type[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var name=_step.value;mycourse.push({name:name,type:name,data:'type'});}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=category[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var _name=_step2.value;mycourse.push({name:_name,category:_name,data:'category'});}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}this.courses=mycourse;this.swiperList=mycourse;this.course=[].concat(_toConsumableArray(this.swiperList),['']);this.listFunc();document.body.onresize=function(){return _this4.setWidth();};},watch:{index:function index(val){var _this5=this;this.listFunc(val);var div=document.querySelector('.mm-course-tab >div');var left=div.scrollLeft.toFixed(0);var to=document.body.scrollWidth*0.24*(val-1).toFixed(0);clearInterval(this.si);if(left<to){this.si=setInterval(function(){div.scrollLeft=left++;if(left>=to){clearInterval(_this5.si);}},2);}else if(left>to){this.si=setInterval(function(){div.scrollLeft=left--;if(left<=to){clearInterval(_this5.si);}},2);}}}};/***/},/* 197 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(200);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_6ad07ef9_hasScoped_false_vux_loader_src_before_template_compiler_loader_js_vux_loader_src_template_loader_js_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(212);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(198);}var normalizeComponent=__webpack_require__(4);/* script *//* template *//* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__=null;/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_6ad07ef9_hasScoped_false_vux_loader_src_before_template_compiler_loader_js_vux_loader_src_template_loader_js_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/vux/src/components/scroller/index.vue";if(Component.esModule&&Object.keys(Component.esModule).some(function(key){return key!=="default"&&key.substr(0,2)!=="__";})){console.error("named exports are not supported in *.vue files.");}if(Component.options.functional){console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.");}/* hot reload */if(false){(function(){var hotAPI=require("vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-6ad07ef9",Component.options);}else{hotAPI.reload("data-v-6ad07ef9",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 198 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(199);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(47)("5a5dd80c",content,false);// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../../css-loader/index.js!../../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6ad07ef9\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../vux-loader/src/style-loader.js!../../../../vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../../css-loader/index.js!../../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6ad07ef9\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../vux-loader/src/style-loader.js!../../../../vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 199 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(46)(undefined);// imports
// module
exports.push([module.i,".xs-plugin-pullup-container{text-align:center}",""]);// exports
/***/},/* 200 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_object_assign__=__webpack_require__(78);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_object_assign___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_object_assign__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_vux_xscroll_build_cmd_xscroll_js__=__webpack_require__(201);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_vux_xscroll_build_cmd_xscroll_js___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vux_xscroll_build_cmd_xscroll_js__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_vux_xscroll_build_cmd_plugins_pulldown__=__webpack_require__(210);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_vux_xscroll_build_cmd_plugins_pulldown___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vux_xscroll_build_cmd_plugins_pulldown__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_vux_xscroll_build_cmd_plugins_pullup__=__webpack_require__(211);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_vux_xscroll_build_cmd_plugins_pullup___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vux_xscroll_build_cmd_plugins_pullup__);//
//
//
//
//
//
//
//
//
//
var pulldownDefaultConfig=function pulldownDefaultConfig(){return{content:'Pull Down To Refresh',height:60,autoRefresh:false,downContent:'Pull Down To Refresh',upContent:'Release To Refresh',loadingContent:'Loading...',clsPrefix:'xs-plugin-pulldown-'};};var pullupDefaultConfig=function pullupDefaultConfig(){return{content:'Pull Up To Refresh',pullUpHeight:60,height:40,autoRefresh:false,downContent:'Release To Refresh',upContent:'Pull Up To Refresh',loadingContent:'Loading...',clsPrefix:'xs-plugin-pullup-'};};/* harmony default export */__webpack_exports__["a"]={name:'scroller',props:{value:{type:Object,default:function _default(){return{pulldownStatus:'',pullupStatus:''};}},height:String,lockX:Boolean,lockY:Boolean,scrollbarX:Boolean,scrollbarY:Boolean,bounce:{type:Boolean,default:true},useOriginScroll:{type:Boolean,default:false},useTransition:{type:Boolean,default:true},preventDefault:{type:Boolean,default:false},stopPropagation:Boolean,boundryCheck:{type:Boolean,default:true},gpuAcceleration:{type:Boolean,default:true},usePulldown:{type:Boolean,default:false},usePullup:{type:Boolean,default:false},/**
    * refer to: http://xscroll.github.io/node_modules/xscroll/doc/PullDown.html
    */pulldownConfig:{type:Object,default:function _default(){return{};}},pullupConfig:{type:Object,default:function _default(){return{};}},enableHorizontalSwiping:{type:Boolean,default:false},scrollBottomOffset:{type:Number,default:0}},methods:{reset:function reset(scrollPosition,duration,easing){if(scrollPosition){if(typeof scrollPosition.left!=='undefined'){this._xscroll.scrollLeft(scrollPosition.left,duration,easing);}if(typeof scrollPosition.top!=='undefined'){this._xscroll.scrollTop(scrollPosition.top,duration,easing);}}this._xscroll&&this._xscroll.resetSize();},donePulldown:function donePulldown(){var _this=this;this.pulldown.reset(function(){// repaint
_this.reset();});this.currentValue.pulldownStatus='default';},disablePullup:function disablePullup(){// this._xscroll.unplug(this.pullup)
this.pullup.stop();this.currentValue.pullupStatus='disabled';},enablePullup:function enablePullup(){this.currentValue.pullupStatus='default';this.pullup.restart();},donePullup:function donePullup(){this.pullup.complete();this.reset();this.currentValue.pullupStatus='default';},getStyles:function getStyles(){var height=this.height;if(!this.height&&this.$el&&!this.$el.style.height&&this.lockX){height=document.documentElement.clientHeight+'px';this.reset();}if(this.height&&this.height.indexOf('-')===0){height=document.documentElement.clientHeight+parseInt(this.height)+'px';}this.styles={height:''+height};}},created:function created(){var _this2=this;if(!this.value){this.currentValue={pulldownStatus:'',pullupStatus:''};}else{this.currentValue=this.value;}this.handleOrientationchange=function(){setTimeout(function(){_this2.reset();},100);};},data:function data(){return{currentValue:{},styles:{}};},watch:{currentValue:{handler:function handler(val){this.$emit('input',pure(val));},deep:true},height:function height(){this.getStyles();},value:{handler:function handler(val){if(val.pullupStatus==='default'&&this.currentValue.pullupStatus!=='default'){this.donePullup();}if(val.pulldownStatus==='default'&&this.currentValue.pulldownStatus!=='default'){this.donePulldown();}if(val.pullupStatus==='disabled'&&this.currentValue.pullupStatus!=='disabled'){this.disablePullup();}if(val.pullupStatus==='enabled'&&this.currentValue.pullupStatus==='disabled'){this.enablePullup();}},deep:true}},mounted:function mounted(){var _this3=this;this.uuid=Math.random().toString(36).substring(3,8);this.$nextTick(function(){_this3.$el.setAttribute('id','vux-scroller-'+_this3.uuid);var content=null;if(_this3.$slots.default){content=_this3.$slots.default[0].elm;}if(!content){throw new Error('no content is found');}_this3._xscroll=new __WEBPACK_IMPORTED_MODULE_1_vux_xscroll_build_cmd_xscroll_js___default.a({renderTo:'#vux-scroller-'+_this3.uuid,lockX:_this3.lockX,lockY:_this3.lockY,scrollbarX:_this3.scrollbarX,scrollbarY:_this3.scrollbarY,content:content,bounce:_this3.bounce,useOriginScroll:_this3.useOriginScroll,useTransition:_this3.useTransition,preventDefault:_this3.preventDefault,boundryCheck:_this3.boundryCheck,gpuAcceleration:_this3.gpuAcceleration,stopPropagation:_this3.stopPropagation});_this3._xscroll.on('scroll',function(){if(_this3._xscroll){var top=_this3._xscroll.getScrollTop();_this3.$emit('on-scroll',{top:top,left:_this3._xscroll.getScrollLeft()});var containerHeight=_this3._xscroll.containerHeight;var scrollHeight=_this3._xscroll.height;if(top>=containerHeight-scrollHeight-_this3.scrollBottomOffset){_this3.$emit('on-scroll-bottom');}}});if(_this3.usePulldown){// if use slot=pulldown
var container=_this3.$slots.pulldown;var config=__WEBPACK_IMPORTED_MODULE_0_object_assign___default()(pulldownDefaultConfig(),_this3.pulldownConfig);if(container){config.container=container[0].elm;}_this3.pulldown=new __WEBPACK_IMPORTED_MODULE_2_vux_xscroll_build_cmd_plugins_pulldown___default.a(config);_this3._xscroll.plug(_this3.pulldown);_this3.pulldown.on('loading',function(e){_this3.$emit('on-pulldown-loading',_this3.uuid);});_this3.pulldown.on('statuschange',function(val){_this3.currentValue.pulldownStatus=val.newVal;});}if(_this3.usePullup){// if use slot=pullup
var _container=_this3.$slots.pullup;var _config=__WEBPACK_IMPORTED_MODULE_0_object_assign___default()(pullupDefaultConfig(),_this3.pullupConfig);if(_container){_config.container=_container[0].elm;}_this3.pullup=new __WEBPACK_IMPORTED_MODULE_3_vux_xscroll_build_cmd_plugins_pullup___default.a(_config);_this3._xscroll.plug(_this3.pullup);_this3.pullup.on('loading',function(e){_this3.$emit('on-pullup-loading',_this3.uuid);});_this3.pullup.on('statuschange',function(val){_this3.currentValue.pullupStatus=val.newVal;});}if(_this3.enableHorizontalSwiping){_this3._xscroll.on('panstart',function(e){if(e.direction===2||e.direction===4){e.preventDefault();if(_this3.scrollbarY){_this3._xscroll.userConfig.scrollbarY=false;}_this3._xscroll.userConfig.lockY=true;}});_this3._xscroll.on('panend',function(){if(_this3.scrollbarY){_this3._xscroll.userConfig.scrollbarY=true;}_this3._xscroll.userConfig.lockY=false;});}_this3._xscroll.render();window.addEventListener('orientationchange',_this3.handleOrientationchange,false);});this.getStyles();},beforeDestroy:function beforeDestroy(){if(this.pullup){this._xscroll.unplug(this.pullup);this.pullup.pluginDestructor();}if(this.pulldown){this._xscroll.unplug(this.pulldown);this.pulldown.pluginDestructor();}window.removeEventListener('orientationchange',this.handleOrientationchange,false);this._xscroll.destroy();this._xscroll=null;}};function pure(obj){return JSON.parse(JSON.stringify(obj));}/***/},/* 201 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};!(__WEBPACK_AMD_DEFINE_RESULT__=function(require,exports,module){"use strict";var Util=__webpack_require__(13),Base=__webpack_require__(21),Timer=__webpack_require__(130),Animate=__webpack_require__(52),Hammer=__webpack_require__(79),SimuScroll=__webpack_require__(203),OriginScroll=__webpack_require__(209);var XScroll=function XScroll(cfg){var _=cfg&&cfg.useOriginScroll?OriginScroll:SimuScroll;return new _(cfg);};/**
   * Util
   * @namespace Util
   * @type {Object}
   */XScroll.Util=Util;/**
   * Base
   * @namespace Base
   * @type {Base}
   */XScroll.Base=Base;/**
   * Timer
   * @namespace Timer
   * @type {Timer}
   */XScroll.Timer=Timer;/**
   * Animate
   * @namespace Animate
   * @type {Animate}
   */XScroll.Animate=Animate;/**
   * Hammer
   * @namespace Hammer
   * @type {Hammer}
   */XScroll.Hammer=Hammer;/**
   * plugins
   * @namespace Plugins
   * @type {Object}
   */XScroll.Plugins={};if((false?'undefined':_typeof(module))=='object'&&module.exports){module.exports=XScroll;}/** ignored by jsdoc **/else{return window.XScroll=XScroll;}}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(10)(module));/***/},/* 202 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};!(__WEBPACK_AMD_DEFINE_RESULT__=function(require,exports,module){"use strict";var Util=__webpack_require__(13);// Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.
var _once=function _once(func){var ran=false,memo;return function(){if(ran)return memo;ran=true;memo=func.apply(this,arguments);func=null;return memo;};};/**
   * @discription events
   * @mixin
   */var Events={// Bind an event to a `callback` function. Passing `"all"` will bind
// the callback to all events fired.
on:function on(name,callback,context){if(!eventsApi(this,'on',name,[callback,context])||!callback)return this;this._events||(this._events={});var events=this._events[name]||(this._events[name]=[]);events.push({callback:callback,context:context,ctx:context||this});return this;},// Bind an event to only be triggered a single time. After the first time
// the callback is invoked, it will be removed.
once:function once(name,callback,context){if(!eventsApi(this,'once',name,[callback,context])||!callback)return this;var self=this;var once=_once(function(){self.off(name,once);callback.apply(this,arguments);});once._callback=callback;return this.on(name,once,context);},// Remove one or many callbacks. If `context` is null, removes all
// callbacks with that function. If `callback` is null, removes all
// callbacks for the event. If `name` is null, removes all bound
// callbacks for all events.
off:function off(name,callback,context){if(!this._events||!eventsApi(this,'off',name,[callback,context]))return this;// Remove all callbacks for all events.
if(!name&&!callback&&!context){this._events=void 0;return this;}var names=name?[name]:Object.keys(this._events);for(var i=0,length=names.length;i<length;i++){name=names[i];// Bail out if there are no events stored.
var events=this._events[name];if(!events)continue;// Remove all callbacks for this event.
if(!callback&&!context){delete this._events[name];continue;}// Find any remaining events.
var remaining=[];for(var j=0,k=events.length;j<k;j++){var event=events[j];if(callback&&callback!==event.callback&&callback!==event.callback._callback||context&&context!==event.context){remaining.push(event);}}// Replace events if there are any remaining.  Otherwise, clean up.
if(remaining.length){this._events[name]=remaining;}else{delete this._events[name];}}return this;},// Trigger one or many events, firing all bound callbacks. Callbacks are
// passed the same arguments as `trigger` is, apart from the event name
// (unless you're listening on `"all"`, which will cause your callback to
// receive the true name of the event as the first argument).
trigger:function trigger(name){if(!this._events)return this;var args=Array.prototype.slice.call(arguments,1);if(!eventsApi(this,'trigger',name,args))return this;var events=this._events[name];var allEvents=this._events.all;if(events)triggerEvents(events,args);if(allEvents)triggerEvents(allEvents,arguments);return this;},// Inversion-of-control versions of `on` and `once`. Tell *this* object to
// listen to an event in another object ... keeping track of what it's
// listening to.
listenTo:function listenTo(obj,name,callback){var listeningTo=this._listeningTo||(this._listeningTo={});var id=obj._listenId||(obj._listenId=Util.guid('l'));listeningTo[id]=obj;if(!callback&&(typeof name==='undefined'?'undefined':_typeof(name))==='object')callback=this;obj.on(name,callback,this);return this;},listenToOnce:function listenToOnce(obj,name,callback){if((typeof name==='undefined'?'undefined':_typeof(name))==='object'){for(var event in name){this.listenToOnce(obj,event,name[event]);}return this;}var cb=_once(function(){this.stopListening(obj,name,cb);callback.apply(this,arguments);});cb._callback=callback;return this.listenTo(obj,name,cb);},// Tell this object to stop listening to either specific events ... or
// to every object it's currently listening to.
stopListening:function stopListening(obj,name,callback){var listeningTo=this._listeningTo;if(!listeningTo)return this;var remove=!name&&!callback;if(!callback&&(typeof name==='undefined'?'undefined':_typeof(name))==='object')callback=this;if(obj)(listeningTo={})[obj._listenId]=obj;for(var id in listeningTo){obj=listeningTo[id];obj.off(name,callback,this);if(remove||Util.isEmpty(obj._events))delete this._listeningTo[id];}return this;}};// Regular expression used to split event strings.
var eventSplitter=/\s+/;// Implement fancy features of the Events API such as multiple event
// names `"change blur"` and jQuery-style event maps `{change: action}`
// in terms of the existing API.
var eventsApi=function eventsApi(obj,action,name,rest){if(!name)return true;// Handle event maps.
if((typeof name==='undefined'?'undefined':_typeof(name))==='object'){for(var key in name){obj[action].apply(obj,[key,name[key]].concat(rest));}return false;}// Handle space separated event names.
if(eventSplitter.test(name)){var names=name.split(eventSplitter);for(var i=0,length=names.length;i<length;i++){obj[action].apply(obj,[names[i]].concat(rest));}return false;}return true;};// A difficult-to-believe, but optimized internal dispatch function for
// triggering events. Tries to keep the usual cases speedy (most internal
var triggerEvents=function triggerEvents(events,args){var ev,i=-1,l=events.length,a1=args[0],a2=args[1],a3=args[2];switch(args.length){case 0:while(++i<l){(ev=events[i]).callback.call(ev.ctx);}return;case 1:while(++i<l){(ev=events[i]).callback.call(ev.ctx,a1);}return;case 2:while(++i<l){(ev=events[i]).callback.call(ev.ctx,a1,a2);}return;case 3:while(++i<l){(ev=events[i]).callback.call(ev.ctx,a1,a2,a3);}return;default:while(++i<l){(ev=events[i]).callback.apply(ev.ctx,args);}return;}};// Aliases for backwards compatibility.
Events.bind=Events.on;Events.unbind=Events.off;if((false?'undefined':_typeof(module))=='object'&&module.exports){module.exports=Events;}/** ignored by jsdoc **/else{return Events;}}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(10)(module));/***/},/* 203 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};!(__WEBPACK_AMD_DEFINE_RESULT__=function(require,exports,module){"use strict";var Util=__webpack_require__(13),Base=__webpack_require__(21),Core=__webpack_require__(132),Animate=__webpack_require__(52),Hammer=__webpack_require__(79),ScrollBar=__webpack_require__(207),Controller=__webpack_require__(208);//reduced boundry pan distance
var PAN_RATE=1-0.618;//constant for scrolling acceleration
var SCROLL_ACCELERATION=0.0005;//constant for outside of boundry acceleration
var BOUNDRY_ACCELERATION=0.03;//transform-origin
var transformOrigin=Util.prefixStyle("transformOrigin");//transform
var transform=Util.prefixStyle("transform");/** 
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
   */function SimuScroll(cfg){SimuScroll.superclass.constructor.call(this,cfg);}Util.extend(SimuScroll,Core,{/** 
     * @memberof SimuScroll
     * @override
     */init:function init(){var self=this;var defaultCfg={preventDefault:true,preventTouchMove:true};SimuScroll.superclass.init.call(this);self.userConfig=Util.mix(defaultCfg,self.userConfig);self.SCROLL_ACCELERATION=self.userConfig.SCROLL_ACCELERATION||SCROLL_ACCELERATION;self.BOUNDRY_ACCELERATION=self.userConfig.BOUNDRY_ACCELERATION||BOUNDRY_ACCELERATION;self._initContainer();self.resetSize();//set overflow behaviors
self._setOverflowBehavior();self.defaltConfig={lockY:self.userConfig.lockY,lockX:self.userConfig.lockX};return self;},destroy:function destroy(){var self=this;SimuScroll.superclass.destroy.call(this);self.renderTo.style.overflow="";self.renderTo.style.touchAction="";self.container.style.transform="";self.container.style.transformOrigin="";self.content.style.transform="";self.content.style.transformOrigin="";self.off("touchstart mousedown",self._ontouchstart);self.off("touchmove",self._ontouchmove);window.removeEventListener("resize",self.resizeHandler,self);self.destroyScrollBars();},/**
     * set overflow behavior
     * @return {boolean} [description]
     */_setOverflowBehavior:function _setOverflowBehavior(){var self=this;var renderTo=self.renderTo;var computeStyle=getComputedStyle(renderTo);self.userConfig.lockX=undefined===self.userConfig.lockX?computeStyle['overflow-x']=="hidden"||self.width==self.containerWidth?true:false:self.userConfig.lockX;self.userConfig.lockY=undefined===self.userConfig.lockY?computeStyle['overflow-y']=="hidden"||self.height==self.containerHeight?true:false:self.userConfig.lockY;self.userConfig.scrollbarX=undefined===self.userConfig.scrollbarX?self.userConfig.lockX?false:true:self.userConfig.scrollbarX;self.userConfig.scrollbarY=undefined===self.userConfig.scrollbarY?self.userConfig.lockY?false:true:self.userConfig.scrollbarY;return self;},/**
     * reset lockX or lockY config to the default value
     */_resetLockConfig:function _resetLockConfig(){var self=this;self.userConfig.lockX=self.defaltConfig.lockX;self.userConfig.lockY=self.defaltConfig.lockY;return self;},/**
     * init container
     * @override
     * @return {SimuScroll}
     */_initContainer:function _initContainer(){var self=this;SimuScroll.superclass._initContainer.call(self);if(self.__isContainerInited||!self.container||!self.content)return;self.container.style[transformOrigin]="0 0";self.content.style[transformOrigin]="0 0";self.translate(0,0);self.__isContainerInited=true;return self;},/**
     * get scroll top value
     * @memberof SimuScroll
     * @return {number} scrollTop
     */getScrollTop:function getScrollTop(){var transY=window.getComputedStyle(this.container)[transform].match(/[-\d\.*\d*]+/g);return transY?Math.round(transY[5])===0?0:-Math.round(transY[5]):0;},/**
     * get scroll left value
     * @memberof SimuScroll
     * @return {number} scrollLeft
     */getScrollLeft:function getScrollLeft(){var transX=window.getComputedStyle(this.content)[transform].match(/[-\d\.*\d*]+/g);return transX?Math.round(transX[4])===0?0:-Math.round(transX[4]):0;},/**
     * horizontal scroll absolute to the destination
     * @memberof SimuScroll
     * @param scrollLeft {number} scrollLeft
     * @param duration {number} duration for animte
     * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
     **/scrollLeft:function scrollLeft(x,duration,easing,callback){if(this.userConfig.lockX)return;var translateZ=this.userConfig.gpuAcceleration?" translateZ(0) ":"";this.x=undefined===x||isNaN(x)||0===x?0:-Math.round(x);this._animate("x","translateX("+this.x+"px) scale("+this.scale+")"+translateZ,duration,easing,callback);return this;},/**
     * vertical scroll absolute to the destination
     * @memberof SimuScroll
     * @param scrollTop {number} scrollTop
     * @param duration {number} duration for animte
     * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
     **/scrollTop:function scrollTop(y,duration,easing,callback){if(this.userConfig.lockY)return;var translateZ=this.userConfig.gpuAcceleration?" translateZ(0) ":"";this.y=undefined===y||isNaN(y)||0===y?0:-Math.round(y);this._animate("y","translateY("+this.y+"px) "+translateZ,duration,easing,callback);return this;},/**
     * translate the scroller to a new destination includes x , y , scale
     * @memberof SimuScroll
     * @param x {number} x
     * @param y {number} y
     * @param scale {number} scale
     **/translate:function translate(x,y,scale){var translateZ=this.userConfig.gpuAcceleration?" translateZ(0) ":"";this.x=x||this.x||0;this.y=y||this.y||0;this.scale=scale||this.scale||1;this.content.style[transform]="translate("+this.x+"px,0px) scale("+this.scale+") "+translateZ;this.container.style[transform]="translate(0px,"+this.y+"px) "+translateZ;return this;},_animate:function _animate(type,transform,duration,easing,callback){var self=this;var duration=duration||0;var easing=easing||"quadratic";var el=type=="y"?self.container:self.content;var config={css:{transform:transform},duration:duration,easing:easing,run:function run(e){/**
           * @event {@link SimuScroll#"scroll"}
           */self.trigger("scroll",{scrollTop:self.getScrollTop(),scrollLeft:self.getScrollLeft(),type:"scroll"});},useTransition:self.userConfig.useTransition,end:function end(e){callback&&callback();if((self["_bounce"+type]===0||self["_bounce"+type]===undefined)&&easing!="linear"){self['isScrolling'+type.toUpperCase()]=false;self['isRealScrolling'+type.toUpperCase()]=false;self.trigger("scrollend",{type:"scrollend",scrollTop:self.getScrollTop(),scrollLeft:self.getScrollLeft(),zoomType:type,duration:duration,easing:easing});}}};var timer=self.__timers[type]=self.__timers[type]||new Animate(el,config);timer.stop();timer.reset(config);timer.run();self.trigger("scrollanimate",{type:"scrollanimate",scrollTop:-self.y,scrollLeft:-self.x,duration:duration,easing:easing,zoomType:type});return this;},_ontap:function _ontap(e){var self=this;self.boundryCheck();// self._unPreventHref(e);
if(!self.isRealScrollingX&&!self.isRealScrollingY){}// self._triggerClick(e);
// self._preventHref(e);
self.isRealScrollingY=false;self.isRealScrollingY=false;},_bindEvt:function _bindEvt(){SimuScroll.superclass._bindEvt.call(this);var self=this;if(self.__isEvtBind)return;self.__isEvtBind=true;var pinch=new Hammer.Pinch();self.mc.add(pinch);self.on("touchstart mousedown",self._ontouchstart,self);self.on("touchmove",self._ontouchmove,self);self.on("tap",self._ontap,self);self.on("panstart",self._onpanstart,self);self.on("pan",self._onpan,self);self.on("panend",self._onpanend,self);self.resizeHandler=function(e){setTimeout(function(){self.resetSize();self.boundryCheck(0);self.render();},100);};//window resize
window.addEventListener("resize",self.resizeHandler,self);return this;},_ontouchstart:function _ontouchstart(e){var self=this;if(!/(SELECT|INPUT|TEXTAREA)/i.test(e.target.tagName)&&self.userConfig.preventDefault){e.preventDefault();}self.stop();},_ontouchmove:function _ontouchmove(e){this.userConfig.preventTouchMove&&e.preventDefault();},_onpanstart:function _onpanstart(e){this.userConfig.preventTouchMove&&e.preventDefault();var self=this;var scrollLeft=self.getScrollLeft();var scrollTop=self.getScrollTop();self.stop();self.translate(-scrollLeft,-scrollTop);var threshold=self.mc.get("pan").options.threshold;self.thresholdY=e.direction=="8"?threshold:e.direction=="16"?-threshold:0;self.thresholdX=e.direction=="2"?threshold:e.direction=="4"?-threshold:0;return self;},_onpan:function _onpan(e){this.userConfig.preventTouchMove&&e.preventDefault();var self=this;var boundry=self.boundry;var userConfig=self.userConfig;var boundryCheck=userConfig.boundryCheck;var bounce=userConfig.bounce;var scrollTop=self.__topstart||(self.__topstart=-self.getScrollTop());var scrollLeft=self.__leftstart||(self.__leftstart=-self.getScrollLeft());var y=userConfig.lockY?Number(scrollTop):Number(scrollTop)+(e.deltaY+self.thresholdY);var x=userConfig.lockX?Number(scrollLeft):Number(scrollLeft)+(e.deltaX+self.thresholdX);var containerWidth=self.containerWidth;var containerHeight=self.containerHeight;if(boundryCheck){//over top
y=y>boundry.top?bounce?(y-boundry.top)*PAN_RATE+boundry.top:boundry.top:y;//over bottom
y=y<boundry.bottom-containerHeight?bounce?y+(boundry.bottom-containerHeight-y)*PAN_RATE:boundry.bottom-containerHeight:y;//over left
x=x>boundry.left?bounce?(x-boundry.left)*PAN_RATE+boundry.left:boundry.left:x;//over right
x=x<boundry.right-containerWidth?bounce?x+(boundry.right-containerWidth-x)*PAN_RATE:boundry.right-containerWidth:x;}//move to x,y
self.translate(x,y);//pan trigger the opposite direction
self.directionX=e.type=='panleft'?'right':e.type=='panright'?'left':'';self.directionY=e.type=='panup'?'down':e.type=='pandown'?'up':'';self.trigger("scroll",{scrollTop:-y,scrollLeft:-x,triggerType:"pan",type:"scroll"});return self;},_onpanend:function _onpanend(e){var self=this;var userConfig=self.userConfig;var transX=self.computeScroll("x",e.velocityX);var transY=self.computeScroll("y",e.velocityY);var scrollLeft=transX?transX.pos:0;var scrollTop=transY?transY.pos:0;var duration;if(transX&&transY&&transX.status=="inside"&&transY.status=="inside"&&transX.duration&&transY.duration){//ensure the same duration
duration=Math.max(transX.duration,transY.duration);}transX&&self.scrollLeft(scrollLeft,duration||transX.duration,transX.easing,function(e){self.boundryCheckX();});transY&&self.scrollTop(scrollTop,duration||transY.duration,transY.easing,function(e){self.boundryCheckY();});//judge the direction
self.directionX=e.velocityX<0?"left":"right";self.directionY=e.velocityY<0?"up":"down";//clear start
self.__topstart=null;self.__leftstart=null;return self;},/**
     * judge the scroller is out of boundry horizontally and vertically
     * @memberof SimuScroll
     * @return {boolean} isBoundryOut
     **/isBoundryOut:function isBoundryOut(){return this.isBoundryOutLeft()||this.isBoundryOutRight()||this.isBoundryOutTop()||this.isBoundryOutBottom();},/**
     * judge if the scroller is outsideof left
     * @memberof SimuScroll
     * @return {boolean} isBoundryOut
     **/isBoundryOutLeft:function isBoundryOutLeft(){return this.getBoundryOutLeft()>0?true:false;},/**
     * judge if the scroller is outsideof right
     * @memberof SimuScroll
     * @return {boolean} isBoundryOut
     **/isBoundryOutRight:function isBoundryOutRight(){return this.getBoundryOutRight()>0?true:false;},/**
     * judge if the scroller is outsideof top
     * @memberof SimuScroll
     * @return {boolean} isBoundryOut
     **/isBoundryOutTop:function isBoundryOutTop(){return this.getBoundryOutTop()>0?true:false;},/**
     * judge if the scroller is outsideof bottom
     * @memberof SimuScroll
     * @return {boolean} isBoundryOut
     **/isBoundryOutBottom:function isBoundryOutBottom(){return this.getBoundryOutBottom()>0?true:false;},/**
     * get the offset value outsideof top
     * @memberof SimuScroll
     * @return {number} offset
     **/getBoundryOutTop:function getBoundryOutTop(){return-this.boundry.top-this.getScrollTop();},/**
     * get the offset value outsideof left
     * @memberof SimuScroll
     * @return {number} offset
     **/getBoundryOutLeft:function getBoundryOutLeft(){return-this.boundry.left-this.getScrollLeft();},/**
     * get the offset value outsideof bottom
     * @memberof SimuScroll
     * @return {number} offset
     **/getBoundryOutBottom:function getBoundryOutBottom(){return this.boundry.bottom-this.containerHeight+this.getScrollTop();},/**
     * get the offset value outsideof right
     * @memberof SimuScroll
     * @return {number} offset
     **/getBoundryOutRight:function getBoundryOutRight(){return this.boundry.right-this.containerWidth+this.getScrollLeft();},/**
     * compute scroll transition by zoomType and velocity
     * @memberof SimuScroll
     * @param {string} zoomType zoomType of scrolling
     * @param {number} velocity velocity after panend
     * @example
     * var info = xscroll.computeScroll("x",2);
     * // return {pos:90,easing:"easing",status:"inside",duration:500}
     * @return {Object}
     **/computeScroll:function computeScroll(type,v){var self=this;var userConfig=self.userConfig;var boundry=self.boundry;var pos=type=="x"?self.getScrollLeft():self.getScrollTop();var boundryStart=type=="x"?boundry.left:boundry.top;var boundryEnd=type=="x"?boundry.right:boundry.bottom;var innerSize=type=="x"?self.containerWidth:self.containerHeight;var maxSpeed=userConfig.maxSpeed||2;var boundryCheck=userConfig.boundryCheck;var bounce=userConfig.bounce;var transition={};var status="inside";if(boundryCheck){if(type=="x"&&(self.isBoundryOutLeft()||self.isBoundryOutRight())){self.boundryCheckX();return;}else if(type=="y"&&(self.isBoundryOutTop()||self.isBoundryOutBottom())){self.boundryCheckY();return;}}if(type=="x"&&self.userConfig.lockX)return;if(type=="y"&&self.userConfig.lockY)return;v=v>maxSpeed?maxSpeed:v<-maxSpeed?-maxSpeed:v;var a=self.SCROLL_ACCELERATION*(v/(Math.abs(v)||1));var a2=self.BOUNDRY_ACCELERATION;var t=isNaN(v/a)?0:v/a;var s=Number(pos)+t*v/2;//over top boundry check bounce
if(s<-boundryStart&&boundryCheck){var _s=-boundryStart-pos;var _t=(Math.sqrt(-2*a*_s+v*v)+v)/a;var v0=v-a*_t;var _t2=Math.abs(v0/a2);var s2=v0/2*_t2;t=_t+_t2;s=bounce?-boundryStart+s2:-boundryStart;status="outside";}else if(s>innerSize-boundryEnd&&boundryCheck){var _s=boundryEnd-innerSize+pos;var _t=(Math.sqrt(-2*a*_s+v*v)-v)/a;var v0=v-a*_t;var _t2=Math.abs(v0/a2);var s2=v0/2*_t2;t=_t+_t2;s=bounce?innerSize-boundryEnd+s2:innerSize-boundryEnd;status="outside";}if(isNaN(s)||isNaN(t))return;transition.pos=s;transition.duration=t;transition.easing=Math.abs(v)>2?"circular":"quadratic";transition.status=status;var Type=type.toUpperCase();self['isScrolling'+Type]=true;self['isRealScrolling'+Type]=true;return transition;},/**
     * bounce to the boundry horizontal
     * @memberof SimuScroll
     * @return {SimuScroll}
     **/boundryCheckX:function boundryCheckX(duration,easing,callback){var self=this;if(!self.userConfig.boundryCheck)return;if(typeof arguments[0]=="function"){callback=arguments[0];duration=self.userConfig.BOUNDRY_CHECK_DURATION;easing=self.userConfig.BOUNDRY_CHECK_EASING;}else{duration=duration===0?0:self.userConfig.BOUNDRY_CHECK_DURATION,easing=easing||self.userConfig.BOUNDRY_CHECK_EASING;}if(!self.userConfig.bounce||self.userConfig.lockX)return;var boundry=self.boundry;if(self.isBoundryOutLeft()){self.scrollLeft(-boundry.left,duration,easing,callback);}else if(self.isBoundryOutRight()){self.scrollLeft(self.containerWidth-boundry.right,duration,easing,callback);}return self;},/**
     * bounce to the boundry vertical
     * @memberof SimuScroll
     * @return {SimuScroll}
     **/boundryCheckY:function boundryCheckY(duration,easing,callback){var self=this;if(!self.userConfig.boundryCheck)return;if(typeof arguments[0]=="function"){callback=arguments[0];duration=self.userConfig.BOUNDRY_CHECK_DURATION;easing=self.userConfig.BOUNDRY_CHECK_EASING;}else{duration=duration===0?0:self.userConfig.BOUNDRY_CHECK_DURATION,easing=easing||self.userConfig.BOUNDRY_CHECK_EASING;}if(!self.userConfig.boundryCheck||self.userConfig.lockY)return;var boundry=self.boundry;if(self.isBoundryOutTop()){self.scrollTop(-boundry.top,duration,easing,callback);}else if(self.isBoundryOutBottom()){self.scrollTop(self.containerHeight-boundry.bottom,duration,easing,callback);}return self;},/**
     * bounce to the boundry vertical and horizontal
     * @memberof SimuScroll
     * @return {SimuScroll}
     **/boundryCheck:function boundryCheck(duration,easing,callback){this.boundryCheckX(duration,easing,callback);this.boundryCheckY(duration,easing,callback);return this;},/**
     * stop scrolling immediatelly
     * @memberof SimuScroll
     * @return {SimuScroll}
     **/stop:function stop(){var self=this;self.__timers.x&&self.__timers.x.stop();self.__timers.y&&self.__timers.y.stop();if(self.isScrollingX||self.isScrollingY){var scrollTop=self.getScrollTop(),scrollLeft=self.getScrollLeft();self.trigger("scrollend",{scrollTop:scrollTop,scrollLeft:scrollLeft});self.trigger("stop",{scrollTop:scrollTop,scrollLeft:scrollLeft});self.isScrollingX=false;self.isScrollingY=false;}return self;},/**
     * render scroll
     * @memberof SimuScroll
     * @return {SimuScroll}
     **/render:function render(){var self=this;SimuScroll.superclass.render.call(this);//fixed for scrollbars
if(getComputedStyle(self.renderTo).position=="static"){self.renderTo.style.position="relative";}self.renderTo.style.overflow="hidden";self.initScrollBars();self.initController();return self;},/**
     * init scrollbars
     * @memberof SimuScroll
     * @return {SimuScroll}
     */initScrollBars:function initScrollBars(){var self=this;if(!self.userConfig.boundryCheck)return;var indicatorInsets=self.userConfig.indicatorInsets;if(self.userConfig.scrollbarX){self.scrollbarX=self.scrollbarX||new ScrollBar({xscroll:self,type:"x",spacing:indicatorInsets.spacing});self.scrollbarX.render();self.scrollbarX._update();self.scrollbarX.hide();}if(self.userConfig.scrollbarY){self.scrollbarY=self.scrollbarY||new ScrollBar({xscroll:self,type:"y",spacing:indicatorInsets.spacing});self.scrollbarY.render();self.scrollbarY._update();self.scrollbarY.hide();}return self;},/**
     * destroy scrollbars
     * @memberof SimuScroll
     * @return {SimuScroll}
     */destroyScrollBars:function destroyScrollBars(){this.scrollbarX&&this.scrollbarX.destroy();this.scrollbarY&&this.scrollbarY.destroy();return this;},/**
     * init controller for multi-scrollers
     * @memberof SimuScroll
     * @return {SimuScroll}
     */initController:function initController(){var self=this;self.controller=self.controller||new Controller({xscroll:self});return self;},_unPreventHref:function _unPreventHref(e){var target=Util.findParentEl(e.target,'a',this.renderTo);if(!target)return;if(target.tagName.toLowerCase()=="a"){var href=target.getAttribute("data-xs-href");if(href){target.setAttribute("href",href);}}},_preventHref:function _preventHref(e){var target=Util.findParentEl(e.target,'a',this.renderTo);if(!target)return;if(target.tagName.toLowerCase()=="a"){var href=target.getAttribute("href");href&&target.setAttribute("href","javascript:void(0)");href&&target.setAttribute("data-xs-href",href);}},_triggerClick:function _triggerClick(e){var target=e.target;if(!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)){var ev=document.createEvent('MouseEvents');ev.initMouseEvent('click',true,true,e.view,1,target.screenX,target.screenY,target.clientX,target.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null);target.dispatchEvent(ev);}}});if((false?'undefined':_typeof(module))=='object'&&module.exports){module.exports=SimuScroll;}/** ignored by jsdoc **/else{return SimuScroll;}}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(10)(module));/***/},/* 204 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};!(__WEBPACK_AMD_DEFINE_RESULT__=function(require,exports,module){"use strict";var Util=__webpack_require__(13);function Boundry(cfg){this.cfg=Util.mix({width:0,height:0},cfg);this.init();}Util.mix(Boundry.prototype,{init:function init(){var self=this;self._xtop=0;self._xright=0;self._xleft=0;self._xbottom=0;self.refresh({width:self.cfg.width,height:self.cfg.height});},reset:function reset(){this.resetTop();this.resetLeft();this.resetBottom();this.resetRight();return this;},resetTop:function resetTop(){this._xtop=0;this.refresh();return this;},resetLeft:function resetLeft(){this._xleft=0;this.refresh();return this;},resetBottom:function resetBottom(){this._xbottom=0;this.refresh();return this;},resetRight:function resetRight(){this._xright=0;this.refresh();return this;},expandTop:function expandTop(top){this._xtop=top;this.refresh();return this;},expandLeft:function expandLeft(left){this._xleft=left;this.refresh();return this;},expandRight:function expandRight(right){this._xright=right;this.refresh();return this;},expandBottom:function expandBottom(bottom){this._xbottom=bottom;this.refresh();return this;},refresh:function refresh(cfg){Util.mix(this.cfg,cfg);this.top=this._xtop;this.left=this._xleft;this.bottom=(cfg&&cfg.height||this.cfg.height||0)-this._xbottom;this.right=(cfg&&cfg.width||this.cfg.width||0)-this._xright;this.width=this.right-this.left>0?this.right-this.left:0;this.height=this.bottom-this.top>0?this.bottom-this.top:0;return this;}});if((false?'undefined':_typeof(module))=='object'&&module.exports){module.exports=Boundry;}/** ignored by jsdoc **/else{return Boundry;}}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(10)(module));/***/},/* 205 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};!(__WEBPACK_AMD_DEFINE_RESULT__=function(require,exports,module){"use strict";var Util=__webpack_require__(13);var Base=__webpack_require__(21);//transform
var transform=Util.prefixStyle("transform");// default render function for position:sticky elements
var defaultStickyRenderFunc=function defaultStickyRenderFunc(e){var stickyElement=e.stickyElement;var curStickyElement=e.curStickyElement;var xscroll=e.xscroll;var _=e._;var infinite=xscroll.getPlugin("infinite");if(infinite){infinite.userConfig.renderHook.call(self,stickyElement,curStickyElement);stickyElement.setAttribute("xs-guid",curStickyElement.guid);Util.addClass(stickyElement,curStickyElement.className);for(var attrName in curStickyElement.style){if(attrName!="display"&&attrName!="position"){//copy styles
stickyElement.style[attrName]=attrName==_.height?curStickyElement.style[attrName]+'px':curStickyElement.style[attrName];}}}else{var style=curStickyElement.getAttribute("style");stickyElement.innerHTML=curStickyElement.innerHTML;stickyElement.className=curStickyElement.className;style&&stickyElement.setAttribute("style",style);}};var Sticky=function Sticky(cfg){Sticky.superclass.constructor.call(this,cfg);this.userConfig=Util.mix({stickyRenderTo:undefined,forceSticky:true,prefix:"xs-sticky-container",stickyRenderFunc:defaultStickyRenderFunc,zoomType:"y"},cfg);this.init();};Util.extend(Sticky,Base,{init:function init(){var self=this,userConfig=self.userConfig,xscroll=self.xscroll=userConfig.xscroll;var isY=self.isY=!!(userConfig.zoomType=="y");self._={top:self.isY?"top":"left",left:self.isY?"left":"bottom",right:self.isY?"right":"top",height:self.isY?"height":"width",width:self.isY?"width":"height"};self.stickyRenderTo=Util.getNode(userConfig.stickyRenderTo);self._handlers=[];return self;},getStickiesPos:function getStickiesPos(){var self=this;var xscroll=self.xscroll;var isInfinite=self.isInfinite;var isY=self.isY;var _=self._;var stickiesPos=[];var getPos=function getPos(sticky){var pos={};if(isInfinite){pos[_.top]=isY?sticky._top:sticky._left;pos[_.height]=isY?sticky._height:sticky._width;}else{pos[_.top]=self.isY?Util.getOffsetTop(sticky):Util.getOffsetLeft(sticky);pos[_.height]=self.isY?sticky.offsetHeight:sticky.offsetWidth;}return pos;};for(var i=0;i<self.stickiesNum;i++){var pos=getPos(self.stickyElements[i]);self._handlers[i]=self._handlers[i]||self.createStickyEl();pos.el=self._handlers[i];pos.isRender=false;stickiesPos.push(pos);}return stickiesPos;},getStickyElements:function getStickyElements(){var self=this;var xscroll=self.xscroll;var userConfig=self.userConfig;var isInfinite=self.isInfinite;var infinite=xscroll.getPlugin("infinite");if(infinite){var stickyElements=[],serializedData=infinite.__serializedData;for(var i in serializedData){var rowData=serializedData[i];if(rowData&&rowData.style&&"sticky"==rowData.style.position){stickyElements.push(rowData);}}return stickyElements;}else{return Util.getNodes(xscroll.userConfig.stickyElements,xscroll.content);}},render:function render(force){var self=this;var userConfig=self.userConfig;var xscroll=self.xscroll;self.isInfinite=!!xscroll.getPlugin("infinite");var _=self._;self.stickyElements=self.getStickyElements();self.stickiesNum=self.stickyElements&&self.stickyElements.length;if(!self.stickiesNum)return;if(!self.stickyRenderTo){self.stickyRenderTo=document.createElement('div');xscroll.renderTo.appendChild(self.stickyRenderTo);}self.stickiesPos=self.getStickiesPos();var stickyRenderTo=self.stickyRenderTo;stickyRenderTo.style[_.top]=0;stickyRenderTo.style[_.left]=0;stickyRenderTo.style[_.right]=0;stickyRenderTo.style.position=xscroll.userConfig.useOriginScroll?"fixed":"absolute";Util.addClass(self.stickyRenderTo,userConfig.prefix);self.stickyHandler(force);self._bindEvt();},createStickyEl:function createStickyEl(){var self=this;var el=document.createElement('div');el.style.display="none";Util.addClass(el,"xs-sticky-handler");self.stickyRenderTo.appendChild(el);return el;},_bindEvt:function _bindEvt(){var self=this,xscroll=self.xscroll;xscroll.on("scroll",self.stickyHandler,self);},stickyHandler:function stickyHandler(force){var self=this;var xscroll=self.xscroll;var userConfig=self.userConfig;var scrollTop=self.isY?xscroll.getScrollTop():xscroll.getScrollLeft();var stickiesPos=self.stickiesPos;var _=self._;var indexes=[];for(var i=0,l=stickiesPos.length;i<l;i++){var top=stickiesPos[i][_.top];if(scrollTop>top){indexes.push(i);}}if(!indexes.length){if(self.stickyElement){self.stickyElement.style.display="none";}self.curStickyIndex=undefined;return;}var curStickyIndex=Math.max.apply(null,indexes);if(self.curStickyIndex!=curStickyIndex||force){var prevStickyIndex=self.curStickyIndex;self.curStickyIndex=curStickyIndex;self.curStickyElement=self.stickyElements[curStickyIndex];self.curStickyPos=stickiesPos[curStickyIndex];self.stickyElement=self.curStickyPos.el;for(var i=0,l=stickiesPos.length;i<l;i++){stickiesPos[i].el.style.display="none";}var eventsObj={stickyElement:self.stickyElement,curStickyIndex:self.curStickyIndex,prevStickyIndex:prevStickyIndex,curStickyPos:self.curStickyPos,isRender:self.curStickyPos.isRender};xscroll.trigger("beforestickychange",eventsObj);self._stickyRenderFunc(self);xscroll.trigger("stickychange",eventsObj);}var trans=0;if(self.stickiesPos[self.curStickyIndex+1]){var cur=self.stickiesPos[self.curStickyIndex];var next=self.stickiesPos[self.curStickyIndex+1];if(scrollTop+cur[_.height]>next[_.top]&&scrollTop+cur[_.height]<next[_.top]+cur[_.height]){trans=cur[_.height]+scrollTop-next[_.top];}else{trans=0;}}self.stickyElement.style[transform]=self.isY?"translateY(-"+trans+"px) translateZ(0)":"translateX(-"+trans+"px) translateZ(0)";},_stickyRenderFunc:function _stickyRenderFunc(e){var self=this;var _=self._;var stickyRenderFunc=self.userConfig.stickyRenderFunc;var el=self.curStickyPos.el;if(!self.curStickyPos.isRender){el.style[_.left]=0;el.style[_.right]=0;stickyRenderFunc&&stickyRenderFunc.call(self,e);}el.style.display="block";self.curStickyPos.isRender=true;},destroy:function destroy(){var self=this;self.stickyElements=undefined;self.stickiesNum=undefined;self.stickiesPos=undefined;Util.remove(self.stickyElement);self.stickyElement=undefined;}});if((false?'undefined':_typeof(module))=='object'&&module.exports){module.exports=Sticky;}/** ignored by jsdoc **/else{return Sticky;}}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(10)(module));/***/},/* 206 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};!(__WEBPACK_AMD_DEFINE_RESULT__=function(require,exports,module){"use strict";var Util=__webpack_require__(13);var Base=__webpack_require__(21);var transform=Util.prefixStyle("transform");var Fixed=function Fixed(cfg){Fixed.superclass.constructor.call(this,cfg);this.userConfig=Util.mix({fixedRenderTo:undefined,fixedElements:".xs-fixed",prefix:"xs-fixed-container",zoomType:"y"},cfg);this.init();};Util.extend(Fixed,Base,{fixedElements:[],init:function init(){var self=this,userConfig=self.userConfig,xscroll=self.xscroll=userConfig.xscroll,xscrollConfig=self.xscrollConfig=xscroll.userConfig;self.isY=!!(userConfig.zoomType=="y");self._=self.isY?{top:"top",height:"height",width:"width",offsetTop:"offsetTop"}:{top:"left",height:"width",width:"height",offsetTop:"offsetLeft"};self.fixedRenderTo=Util.getNode(userConfig.fixedRenderTo);return self;},render:function render(){var self=this;var xscroll=self.xscroll;self.infinite=xscroll.getPlugin("infinite");if(!self.fixedRenderTo){self.fixedRenderTo=document.createElement('div');xscroll.renderTo.appendChild(self.fixedRenderTo);}Util.addClass(self.fixedRenderTo,self.userConfig.prefix);var originalFixedElements=self.originalFixedElements=self.getFixedElements();for(var i=0,l=originalFixedElements.length;i<l;i++){self.renderFixedElement(originalFixedElements[i],i,self.fixedRenderTo);}return self;},getFixedElements:function getFixedElements(){var self=this;var infinite=self.infinite;var userConfig=self.userConfig;if(infinite){var els=[];for(var i in infinite.__serializedData){var data=infinite.__serializedData[i];if(data&&data.style&&data.style.position=="fixed"){els.push(data);}}return els;}else{return Util.getNodes(userConfig.fixedElements,self.xscroll.content);}},renderFixedElement:function renderFixedElement(el,fixedIndex,fixedRenderTo){var self=this;var isRender=true;var _=self._;var xscroll=self.xscroll;var userConfig=self.userConfig;var xscrollConfig=self.xscrollConfig;var useOriginScroll=xscrollConfig.useOriginScroll;var infinite=self.infinite;var fixedElement=self.fixedElements[fixedIndex];if(!self.fixedElements[fixedIndex]){isRender=false;if(useOriginScroll&&!infinite){//use original position:fixed stylesheet
el.style.position="fixed";el.style.display="block";}else{//deep clone fixed nodes and hide original nodes
fixedElement=document.createElement("div");if(infinite){fixedElement.setAttribute("style",Util.stringifyStyle(Util.mix(el.style,{display:"block",width:"100%"})));fixedElement.style[_.top]=(el.style[_.top]>=0?el.style[_.top]:el._top)+"px";if(el.style[_.height]){fixedElement.style[_.height]=el.style[_.height]+"px";}infinite.userConfig.renderHook.call(self,fixedElement,el);}else{fixedElement.style.display="block";fixedElement.style.position="absolute";fixedElement.style[_.width]="100%";fixedElement.innerHTML=el.innerHTML;fixedElement.className=el.className;fixedElement.setAttribute("style",el.getAttribute("style"));fixedElement.style[_.top]=el[_.offsetTop]+"px";el.style.display="none";}fixedRenderTo.appendChild(fixedElement);self.fixedElements.push(fixedElement);}}xscroll.trigger("fixedchange",{fixedIndex:fixedIndex,fixedElement:useOriginScroll?el:fixedElement,originalFixedElement:el,isRender:isRender});},destroy:function destroy(){var self=this;self.fixedElements=undefined;}});if((false?'undefined':_typeof(module))=='object'&&module.exports){module.exports=Fixed;}/** ignored by jsdoc **/else{return Fixed;}}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(10)(module));/***/},/* 207 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};!(__WEBPACK_AMD_DEFINE_RESULT__=function(require,exports,module){"use strict";var Util=__webpack_require__(13);var Animate=__webpack_require__(52);var MAX_BOUNCE_DISTANCE=40;var MIN_BAR_SCROLLED_SIZE=10;var MIN_BAR_SIZE=50;var transform=Util.prefixStyle("transform");var transformStr=Util.vendor?["-",Util.vendor,"-transform"].join(""):"transform";var transition=Util.prefixStyle("transition");var borderRadius=Util.prefixStyle("borderRadius");var transitionDuration=Util.prefixStyle("transitionDuration");var ScrollBar=function ScrollBar(cfg){this.userConfig=Util.mix({MIN_BAR_SCROLLED_SIZE:MIN_BAR_SCROLLED_SIZE,MIN_BAR_SIZE:MIN_BAR_SIZE,MAX_BOUNCE_DISTANCE:MAX_BOUNCE_DISTANCE,spacing:5},cfg);this.init(cfg.xscroll);};Util.mix(ScrollBar.prototype,{init:function init(xscroll){var self=this;self.xscroll=xscroll;self.type=self.userConfig.type;self.isY=self.type=="y"?true:false;self.scrollTopOrLeft=self.isY?"scrollTop":"scrollLeft";},destroy:function destroy(){var self=this;Util.remove(self.scrollbar);self.xscroll.off("scroll",self._scrollHandler,self);self.xscroll.off("scrollend",self._scrollEndHandler,self);},render:function render(){var self=this;var xscroll=self.xscroll;var boundry=xscroll.boundry;var indicatorInsets=self.xscroll.userConfig.indicatorInsets;var translateZ=xscroll.userConfig.gpuAcceleration?" translateZ(0) ":"";var transform=translateZ?transformStr+":"+translateZ+";":"";var commonCss="opacity:0;position:absolute;z-index:999;overflow:hidden;-webkit-border-radius:3px;-moz-border-radius:3px;-o-border-radius:3px;"+transform;indicatorInsets._xright=indicatorInsets.right+indicatorInsets.spacing;indicatorInsets._xbottom=indicatorInsets.bottom+indicatorInsets.spacing;var css=self.isY?Util.substitute("width:{width}px;bottom:{_xbottom}px;top:{top}px;right:{right}px;",indicatorInsets)+commonCss:Util.substitute("height:{width}px;left:{left}px;right:{_xright}px;bottom:{bottom}px;",indicatorInsets)+commonCss;if(!self.scrollbar){self.scrollbar=document.createElement("div");self.indicate=document.createElement("div");xscroll.renderTo.appendChild(self.scrollbar);self.scrollbar.appendChild(self.indicate);}self.scrollbar.style.cssText=css;var size=self.isY?"width:100%;":"height:100%;";self.indicate.style.cssText=size+"position:absolute;background:rgba(0,0,0,0.3);-webkit-border-radius:3px;-moz-border-radius:3px;-o-border-radius:3px;";self._update();self.hide(0);self._bindEvt();},_update:function _update(pos,duration,easing,callback){var self=this;var pos=undefined===pos?self.isY?self.xscroll.getScrollTop():self.xscroll.getScrollLeft():pos;var barInfo=self.computeScrollBar(pos);var size=self.isY?"height":"width";self.indicate.style[size]=Math.round(barInfo.size)+"px";if(duration&&easing){self.scrollTo(barInfo.pos,duration,easing,callback);}else{self.moveTo(barInfo.pos);}},//compute the position and size of the scrollbar
computeScrollBar:function computeScrollBar(pos){var self=this;var type=self.isY?"y":"x";var spacing=self.userConfig.spacing;var xscroll=self.xscroll;var boundry=xscroll.boundry;var userConfig=self.userConfig;var pos=self.isY?Math.round(pos)+boundry._xtop:Math.round(pos)+boundry._xleft;var MIN_BAR_SCROLLED_SIZE=userConfig.MIN_BAR_SCROLLED_SIZE;var MIN_BAR_SIZE=userConfig.MIN_BAR_SIZE;var MAX_BOUNCE_DISTANCE=userConfig.MAX_BOUNCE_DISTANCE;self.containerSize=self.isY?xscroll.containerHeight+boundry._xtop+boundry._xbottom:self.xscroll.containerWidth+boundry._xright+boundry._xleft;self.size=self.isY?boundry.cfg.height:boundry.cfg.width;self.indicateSize=self.isY?boundry.cfg.height-spacing*2:boundry.cfg.width-spacing*2;var indicateSize=self.indicateSize;var containerSize=self.containerSize;var barPos=indicateSize*pos/containerSize;var barSize=Math.round(indicateSize*self.size/containerSize);var overTop=self.isY?xscroll.getBoundryOutTop():xscroll.getBoundryOutLeft();var overBottom=self.isY?xscroll.getBoundryOutBottom():xscroll.getBoundryOutRight();var barShiftSize=MIN_BAR_SIZE-barSize>0?MIN_BAR_SIZE-barSize:0;barSize=barSize<MIN_BAR_SIZE?MIN_BAR_SIZE:barSize;barPos=(indicateSize-barShiftSize)*pos/containerSize;if(overTop>=0){var pct=overTop/MAX_BOUNCE_DISTANCE;pct=pct>1?1:pct;barPos=-pct*(barSize-MIN_BAR_SCROLLED_SIZE);}if(overBottom>=0){var pct=overBottom/MAX_BOUNCE_DISTANCE;pct=pct>1?1:pct;barPos=pct*(barSize-MIN_BAR_SCROLLED_SIZE)+indicateSize-barSize;}self.barPos=Math.round(barPos);return{size:Math.round(barSize),pos:self.barPos};},scrollTo:function scrollTo(pos,duration,easing,callback){var self=this;self.show();var translateZ=self.xscroll.userConfig.gpuAcceleration?" translateZ(0) ":"";var config={css:{transform:self.isY?"translateY("+pos+"px)"+translateZ:"translateX("+pos+"px)"+translateZ},duration:duration,easing:easing,useTransition:self.xscroll.userConfig.useTransition,end:callback};self.__timer=self.__timer||new Animate(self.indicate,config);//run
self.__timer.stop();self.__timer.reset(config);self.__timer.run();},moveTo:function moveTo(pos){var self=this;self.show();var translateZ=self.xscroll.userConfig.gpuAcceleration?" translateZ(0) ":"";self.isY?self.indicate.style[transform]="translateY("+pos+"px) "+translateZ:self.indicate.style[transform]="translateX("+pos+"px) "+translateZ;self.indicate.style[transition]="";},_scrollHandler:function _scrollHandler(e){var self=this;self._update(e[self.scrollTopOrLeft]);return self;},isBoundryOut:function isBoundryOut(){var self=this;return!self.isY?self.xscroll.isBoundryOutLeft()||self.xscroll.isBoundryOutRight():self.xscroll.isBoundryOutTop()||self.xscroll.isBoundryOutBottom();},_scrollEndHandler:function _scrollEndHandler(e){var self=this;if(!self.isBoundryOut()){self._update(e[self.scrollTopOrLeft]);self.hide();}return self;},_bindEvt:function _bindEvt(){var self=this;if(self.__isEvtBind)return;self.__isEvtBind=true;self.xscroll.on("scroll",self._scrollHandler,self);self.xscroll.on("scrollend",self._scrollEndHandler,self);},reset:function reset(){var self=this;self.pos=0;self._update();},hide:function hide(duration,easing,delay){var self=this;var duration=duration>=0?duration:300;var easing=easing||"ease-out";var delay=delay>=0?delay:100;self.scrollbar.style.opacity=0;self.scrollbar.style[transition]=["opacity ",duration,"ms "," ease-out ",delay,"ms"].join("");},show:function show(){var self=this;self.scrollbar.style.opacity=1;self.scrollbar.style[transition]="";}});if((false?'undefined':_typeof(module))=='object'&&module.exports){module.exports=ScrollBar;}/** ignored by jsdoc **/else{return ScrollBar;}}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(10)(module));/***/},/* 208 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};!(__WEBPACK_AMD_DEFINE_RESULT__=function(require,exports,module){/*
 	wrapped scroll controller
 */"use strict";var Util=__webpack_require__(13),Base=__webpack_require__(21);var Controller=function Controller(cfg){Controller.superclass.constructor.call(this,cfg);this.userConfig=Util.mix({},cfg);this.init();};Util.extend(Controller,Base,{init:function init(){var self=this;self.xscroll=self.userConfig.xscroll;},add:function add(scroll,cfg){var self=this;cfg=Util.extend({captureBounce:false,stopPropagation:true},cfg);if(!self.__scrolls){self.__scrolls={};}if(scroll.guid&&!self.__scrolls[scroll.guid]){scroll.parentscroll=self.xscroll;self._bind(scroll);return self.__scrolls[scroll.guid]=scroll;}return;},remove:function remove(scroll){var self=this;if(!scroll||!scroll.guid)return;var subscroll=self.__scrolls[scroll.guid];if(subscroll){subscroll.parentscroll=null;self._unbind(scroll);subscroll=null;}},get:function get(guid){if(guid){return this.__scrolls[guid];}return this.__scrolls;},_unbind:function _unbind(sub){},_bind:function _bind(sub){var self=this,xscroll=self.xscroll;xscroll.renderTo.addEventListener("touchstart",function(){xscroll._resetLockConfig();});sub.renderTo.addEventListener("touchstart",function(){sub._resetLockConfig();});xscroll.on("panend",xscroll._resetLockConfig);sub.on("panend",sub._resetLockConfig);sub.on("panstart",function(e){//vertical scroll enabled
if(!sub.userConfig.lockY&&!xscroll.userConfig.lockY){//outside of boundry
if(sub.isBoundryOut()){xscroll.userConfig.lockY=true;return;}if(e.direction==16&&sub.getBoundryOutTop()>=0){sub.userConfig.lockY=true;}else if(e.direction==8&&sub.getBoundryOutTop()>=0&&sub.getBoundryOutBottom()<0){xscroll.userConfig.lockY=true;}if(e.direction==8&&sub.getBoundryOutBottom()>=0){sub.userConfig.lockY=true;}else if(e.direction==16&&sub.getBoundryOutBottom()>=0&&sub.getBoundryOutTop()<0){xscroll.userConfig.lockY=true;}if(sub.getBoundryOutTop()<0&&sub.getBoundryOutBottom()<0){xscroll.userConfig.lockY=true;}}//horizontal scroll enabled
if(!sub.userConfig.lockX&&!xscroll.userConfig.lockX){if(sub.isBoundryOut()){xscroll.userConfig.lockX=true;return;}if(e.direction==4&&sub.getBoundryOutLeft()>=0){sub.userConfig.lockX=true;}else if(e.direction==2&&sub.getBoundryOutLeft()>=0&&sub.getBoundryOutRight()<0){xscroll.userConfig.lockX=true;}if(e.direction==2&&sub.getBoundryOutRight()>=0){sub.userConfig.lockX=true;}else if(e.direction==4&&sub.getBoundryOutRight()>=0&&sub.getBoundryOutLeft()<0){xscroll.userConfig.lockX=true;}if(sub.getBoundryOutLeft()<0&&sub.getBoundryOutRight()<0){xscroll.userConfig.lockX=true;}}if(!sub.userConfig.lockX&&xscroll.userConfig.lockX){//pan x
if(e.direction==2||e.direction==4){xscroll.userConfig.lockY=true;}else{sub.userConfig.lockX=true;}}if(!sub.userConfig.lockY&&xscroll.userConfig.lockY){//pan y
if(e.direction==8||e.direction==16){xscroll.userConfig.lockX=true;}else{sub.userConfig.lockY=true;}}});}});if((false?'undefined':_typeof(module))=='object'&&module.exports){module.exports=Controller;}/** ignored by jsdoc **/else{return Controller;}}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(10)(module));/***/},/* 209 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};!(__WEBPACK_AMD_DEFINE_RESULT__=function(require,exports,module){"use strict";var Util=__webpack_require__(13),Base=__webpack_require__(21),Core=__webpack_require__(132),Animate=__webpack_require__(52);var transformOrigin=Util.prefixStyle("transformOrigin");/** 
     * @constructor
     * @param {object} cfg config for scroll
     * @extends XScroll
     * @example
     * var xscroll = new OriginScroll({
     *    renderTo:"#scroll"
     * });
     * xscroll.render();
     */function OriginScroll(cfg){OriginScroll.superclass.constructor.call(this,cfg);}Util.extend(OriginScroll,Core,{init:function init(){var self=this;OriginScroll.superclass.init.call(this);self.resetSize();},/**
         * get scroll top value
         * @memberof OriginScroll
         * @return {number} scrollTop
         */getScrollTop:function getScrollTop(){return this.renderTo.scrollTop;},/**
         * get scroll left value
         * @memberof OriginScroll
         * @return {number} scrollLeft
         */getScrollLeft:function getScrollLeft(){return this.renderTo.scrollLeft;},/**
         * vertical scroll absolute to the destination
         * @memberof SimuScroll
         * @param scrollTop {number} scrollTop
         * @param duration {number} duration for animte
         * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
         **/scrollTop:function scrollTop(y,duration,easing,callback){var self=this;var y=Math.round(y);if(self.userConfig.lockY)return;var duration=duration||0;var easing=easing||"quadratic";var config={css:{scrollTop:y},duration:duration,easing:easing,run:function run(e){//trigger scroll event
self.trigger("scroll",{scrollTop:self.getScrollTop(),scrollLeft:self.getScrollLeft()});},useTransition:false,//scrollTop 
end:callback};self.__timers.y=self.__timers.y||new Animate(self.renderTo,config);//run
self.__timers.y.stop();self.__timers.y.reset(config);self.__timers.y.run();},/**
         * horizontal scroll absolute to the destination
         * @memberof SimuScroll
         * @param scrollLeft {number} scrollLeft
         * @param duration {number} duration for animte
         * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
         **/scrollLeft:function scrollLeft(x,duration,easing,callback){var self=this;var x=Math.round(x);if(self.userConfig.lockX)return;var duration=duration||0;var easing=easing||"quadratic";var config={css:{scrollLeft:x},duration:duration,easing:easing,run:function run(e){//trigger scroll event
self.trigger("scroll",{scrollTop:self.getScrollTop(),scrollLeft:self.getScrollLeft()});},useTransition:false,//scrollTop 
end:callback};self.__timers.x=self.__timers.x||new Animate(self.renderTo,config);//run
self.__timers.x.stop();self.__timers.x.reset(config);self.__timers.x.run();},_bindEvt:function _bindEvt(){OriginScroll.superclass._bindEvt.call(this);var self=this;if(self.__isEvtBind)return;self.__isEvtBind=true;self.renderTo.addEventListener("scroll",function(e){self.trigger("scroll",{type:"scroll",scrollTop:self.getScrollTop(),scrollLeft:self.getScrollLeft()});},false);}});if((false?'undefined':_typeof(module))=='object'&&module.exports){module.exports=OriginScroll;}/** ignored by jsdoc **/else{return OriginScroll;}}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(10)(module));/***/},/* 210 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};!(__WEBPACK_AMD_DEFINE_RESULT__=function(require,exports,module){"use strict";var Util=__webpack_require__(13);var Base=__webpack_require__(21);var clsPrefix;var containerCls;var content="Pull Down To Refresh";var loadingContent="Loading...";/**
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
  */var PullDown=function PullDown(cfg){PullDown.superclass.constructor.call(this,cfg);this.userConfig=Util.mix({content:content,height:60,autoRefresh:true,downContent:"Pull Down To Refresh",upContent:"Release To Refresh",loadingContent:loadingContent,clsPrefix:"xs-plugin-pulldown-"},cfg);};Util.extend(PullDown,Base,{/**
   * a pluginId
   * @memberOf PullDown
   * @type {string}
   */pluginId:"pulldown",/**
   * plugin initializer
   * @memberOf PullDown
   * @override Base
   * @return {PullDown}
   */pluginInitializer:function pluginInitializer(xscroll){var self=this;self.xscroll=xscroll.render();clsPrefix=self.userConfig.clsPrefix;self.render();return self;},/**
   * detroy the plugin
   * @memberOf PullDown
   * @override Base
   * @return {PullDown}
   */pluginDestructor:function pluginDestructor(){var self=this;Util.remove(self.pulldown);self.xscroll.off("panstart",self._panStartHandler,self);self.xscroll.off("pan",self._panHandler,self);self.xscroll.off("panend",self._panEndHandler,self);self.__isRender=false;self._evtBinded=false;},/**
   * render pulldown plugin
   * @memberOf PullDown
   * @return {PullDown}
   */render:function render(){var self=this;if(self.__isRender)return;self.__isRender=true;if(!self.userConfig.container){var containerCls=clsPrefix+"container";var height=self.userConfig.height||60;var pulldown=self.pulldown=document.createElement("div");pulldown.className=containerCls;pulldown.style.position="absolute";pulldown.style.width="100%";pulldown.style.height=height+"px";pulldown.style.lineHeight=height+"px";pulldown.style.top=-height+"px";pulldown.style.textAlign="center";self.xscroll.container.appendChild(pulldown);self.status='up';Util.addClass(pulldown,clsPrefix+self.status);pulldown.innerHTML=self.userConfig[self.status+"Content"]||self.userConfig.content;}else{// has customed container
self.pulldown=self.userConfig.container;}self._bindEvt();return self;},_bindEvt:function _bindEvt(){var self=this;if(self._evtBinded)return;self._evtBinded=true;var pulldown=self.pulldown;var xscroll=self.xscroll;xscroll.on("pan",self._panHandler,self);xscroll.on("panstart",self._panStartHandler,self);xscroll.on("panend",self._panEndHandler,self);},_changeStatus:function _changeStatus(status){var prevVal=this.status;this.status=status;if(!this.userConfig.container){Util.removeClass(this.pulldown,clsPrefix+prevVal);Util.addClass(this.pulldown,clsPrefix+status);if(this.userConfig[status+"Content"]){this.pulldown.innerHTML=this.userConfig[status+"Content"];}}if(prevVal!=status){this.trigger("statuschange",{prevVal:prevVal,newVal:status});if(status=="loading"){this.trigger("loading");}}},/**
   * reset the pulldown plugin
   * @memberOf PullDown
   * @param {function} callback
   * @return {PullDown}
   */reset:function reset(callback){this.xscroll.boundry.resetTop();this.xscroll.boundryCheckY(callback);this._expanded=false;return this;},_panStartHandler:function _panStartHandler(e){clearTimeout(this.loadingItv);},_panHandler:function _panHandler(e){var self=this;var scrollTop=self.xscroll.getScrollTop();if(scrollTop>0)return;self._changeStatus(Math.abs(scrollTop)<self.userConfig.height?"down":"up");},_panEndHandler:function _panEndHandler(e){var self=this;var xscroll=self.xscroll;var height=self.userConfig.height||60;var scrollTop=xscroll.getScrollTop();if(scrollTop<-height){//prevent default bounce
e.preventDefault();xscroll.boundry.resetTop();self._changeStatus("loading");xscroll.boundry.expandTop(height);xscroll.boundryCheckY(function(){});if(self.userConfig.autoRefresh){clearTimeout(self.loadingItv);self.loadingItv=setTimeout(function(){xscroll.boundry.resetTop();xscroll.boundryCheckY(function(){window.location.reload();});},800);}}}});if((false?'undefined':_typeof(module))=='object'&&module.exports){module.exports=PullDown;}/** ignored by jsdoc **/else if(window.XScroll&&window.XScroll.Plugins){return XScroll.Plugins.PullDown=PullDown;}}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(10)(module));/***/},/* 211 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};!(__WEBPACK_AMD_DEFINE_RESULT__=function(require,exports,module){"use strict";var Util=__webpack_require__(13);var Base=__webpack_require__(21);var clsPrefix;var containerCls;var loadingContent="Loading...";var upContent="Pull Up To Refresh";var downContent="Release To Refresh";var PULL_UP_HEIGHT=60;var HEIGHT=40;/**
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
  */var PullUp=function PullUp(cfg){PullUp.superclass.constructor.call(this);this.userConfig=Util.mix({upContent:upContent,downContent:downContent,pullUpHeight:PULL_UP_HEIGHT,height:HEIGHT,loadingContent:loadingContent,bufferHeight:0,clsPrefix:"xs-plugin-pullup-"},cfg);};Util.extend(PullUp,Base,{/**
   * a pluginId
   * @memberOf PullUp
   * @type {string}
   */pluginId:"pullup",/**
   * plugin initializer
   * @memberOf PullUp
   * @override Base
   * @return {PullUp}
   */pluginInitializer:function pluginInitializer(xscroll){var self=this;self.xscroll=xscroll.render();clsPrefix=self.userConfig.clsPrefix;self.render();return self;},/**
   * detroy the plugin
   * @memberOf PullUp
   * @override Base
   * @return {PullUp}
   */pluginDestructor:function pluginDestructor(){var self=this;Util.remove(self.pullup);self.xscroll.off("scrollend",self._scrollEndHandler,self);self.xscroll.off("scroll",self._scrollHandler,self);self.xscroll.off("pan",self._panHandler,self);self.xscroll.boundry.resetBottom();self.__isRender=false;self._evtBinded=false;},/**
   * disable the plugin
   * @memberOf PullUp
   * @override Base
   * @return {PullUp}
   */pluginDisable:function pluginDisable(){var self=this;self.userConfig.container||Util.remove(self.pullup);self.xscroll.off("scrollend",self._scrollEndHandler,self);self.xscroll.off("scroll",self._scrollHandler,self);self.xscroll.off("pan",self._panHandler,self);self.xscroll.boundry.resetBottom();self.__isRender=false;self._evtBinded=false;},/**
   * render pullup plugin
   * @memberOf PullUp
   * @return {PullUp}
   */render:function render(){var self=this;if(self.__isRender)return;self.__isRender=true;if(!self.userConfig.container){var containerCls=clsPrefix+"container";var height=self.userConfig.height;var pullup=self.pullup=document.createElement("div");pullup.className=containerCls;pullup.style.position="absolute";pullup.style.width="100%";pullup.style.height=height+"px";pullup.style.bottom=-height+"px";pullup.style.textAlign="center";self.xscroll.container.appendChild(pullup);Util.addClass(pullup,clsPrefix+self.status);pullup.innerHTML=self.userConfig[self.status+"Content"]||self.userConfig.content;}else{self.pullup=self.userConfig.container;}self.xscroll.boundry.expandBottom(self.userConfig.height);self.status='up';self._bindEvt();return self;},_bindEvt:function _bindEvt(){var self=this;if(self._evtBinded)return;self._evtBinded=true;var pullup=self.pullup;var xscroll=self.xscroll;xscroll.on("pan",self._panHandler,self);//load width a buffer
if(self.userConfig.bufferHeight>0){xscroll.on("scroll",self._scrollHandler,self);}//bounce bottom
xscroll.on("scrollend",self._scrollEndHandler,self);return self;},_scrollEndHandler:function _scrollEndHandler(e){var self=this,xscroll=self.xscroll,scrollTop=xscroll.getScrollTop();if(scrollTop==xscroll.containerHeight-xscroll.height+self.userConfig.height){self._changeStatus("loading");}return self;},_scrollHandler:function _scrollHandler(e){var self=this,xscroll=self.xscroll;if(!self.isLoading&&Math.abs(e.scrollTop)+xscroll.height+self.userConfig.height+self.userConfig.bufferHeight>=xscroll.containerHeight+xscroll.boundry._xtop+xscroll.boundry._xbottom){self._changeStatus("loading");}return self;},_panHandler:function _panHandler(e){var self=this;var xscroll=self.xscroll;var offsetTop=-xscroll.getScrollTop();if(offsetTop<xscroll.height-xscroll.containerHeight-self.userConfig.pullUpHeight){self._changeStatus("down");}else{self._changeStatus("up");}return self;},_changeStatus:function _changeStatus(status){if(status!="loading"&&this.isLoading)return;var prevVal=this.status;this.status=status;if(!this.userConfig.container){Util.removeClass(this.pullup,clsPrefix+prevVal);Util.addClass(this.pullup,clsPrefix+status);this.pullup.innerHTML=this.userConfig[status+"Content"];}if(prevVal!=status){this.trigger("statuschange",{prevVal:prevVal,newVal:status});if(status=="loading"){this.isLoading=true;this.trigger("loading");}}return this;},/**
   * notify pullup plugin to complete state after a remote data request
   * @memberOf PullUp
   * @return {PullUp}
   */complete:function complete(){var self=this;var xscroll=self.xscroll;self.isLoading=false;self._changeStatus("up");return self;},stop:function stop(){var xscroll=this.xscroll;this.isLoading=false;this._changeStatus("stop");this.pluginDisable();return this;},restart:function restart(){var xscroll=this.xscroll;this.isLoading=false;this._changeStatus("default");this.render();return this;}});if((false?'undefined':_typeof(module))=='object'&&module.exports){module.exports=PullUp;}/** ignored by jsdoc **/else if(window.XScroll&&window.XScroll.Plugins){return XScroll.Plugins.PullUp=PullUp;}}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(10)(module));/***/},/* 212 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:_vm.styles},[_c('div',{staticClass:"xs-container"},[_vm._t("default"),_vm._v(" "),_vm._t("pulldown"),_vm._v(" "),_vm._t("pullup")],2)]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns};/* harmony default export */__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-hot-reload-api").rerender("data-v-6ad07ef9",esExports);}}/***/},/* 213 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony default export */__webpack_exports__["a"]=function(obj){var n='';for(var m in obj){if(n){n+='&';}n+=m+'='+obj[m];}return n;};/***/},/* 214 *//***/function(module,exports,__webpack_require__){"use strict";/* WEBPACK VAR INJECTION */(function(global){__webpack_require__(215);__webpack_require__(415);__webpack_require__(416);if(global._babelPolyfill){throw new Error("only one instance of babel-polyfill is allowed");}global._babelPolyfill=true;var DEFINE_PROPERTY="defineProperty";function define(O,key,value){O[key]||Object[DEFINE_PROPERTY](O,key,{writable:true,configurable:true,value:value});}define(String.prototype,"padLeft","".padStart);define(String.prototype,"padRight","".padEnd);"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(key){[][key]&&define(Array,key,Function.call.bind([][key]));});/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(133));/***/},/* 215 *//***/function(module,exports,__webpack_require__){__webpack_require__(216);__webpack_require__(219);__webpack_require__(220);__webpack_require__(221);__webpack_require__(222);__webpack_require__(223);__webpack_require__(224);__webpack_require__(225);__webpack_require__(226);__webpack_require__(227);__webpack_require__(228);__webpack_require__(229);__webpack_require__(230);__webpack_require__(231);__webpack_require__(232);__webpack_require__(233);__webpack_require__(235);__webpack_require__(236);__webpack_require__(237);__webpack_require__(238);__webpack_require__(239);__webpack_require__(240);__webpack_require__(241);__webpack_require__(242);__webpack_require__(243);__webpack_require__(244);__webpack_require__(245);__webpack_require__(246);__webpack_require__(247);__webpack_require__(248);__webpack_require__(249);__webpack_require__(250);__webpack_require__(251);__webpack_require__(252);__webpack_require__(253);__webpack_require__(254);__webpack_require__(255);__webpack_require__(256);__webpack_require__(257);__webpack_require__(258);__webpack_require__(259);__webpack_require__(260);__webpack_require__(261);__webpack_require__(262);__webpack_require__(263);__webpack_require__(264);__webpack_require__(265);__webpack_require__(266);__webpack_require__(267);__webpack_require__(268);__webpack_require__(269);__webpack_require__(270);__webpack_require__(271);__webpack_require__(272);__webpack_require__(273);__webpack_require__(274);__webpack_require__(275);__webpack_require__(276);__webpack_require__(277);__webpack_require__(278);__webpack_require__(279);__webpack_require__(280);__webpack_require__(281);__webpack_require__(282);__webpack_require__(283);__webpack_require__(284);__webpack_require__(285);__webpack_require__(286);__webpack_require__(287);__webpack_require__(288);__webpack_require__(289);__webpack_require__(290);__webpack_require__(291);__webpack_require__(292);__webpack_require__(293);__webpack_require__(294);__webpack_require__(295);__webpack_require__(297);__webpack_require__(298);__webpack_require__(300);__webpack_require__(301);__webpack_require__(302);__webpack_require__(303);__webpack_require__(304);__webpack_require__(305);__webpack_require__(306);__webpack_require__(308);__webpack_require__(309);__webpack_require__(310);__webpack_require__(311);__webpack_require__(312);__webpack_require__(313);__webpack_require__(314);__webpack_require__(315);__webpack_require__(316);__webpack_require__(317);__webpack_require__(318);__webpack_require__(319);__webpack_require__(320);__webpack_require__(101);__webpack_require__(321);__webpack_require__(322);__webpack_require__(151);__webpack_require__(323);__webpack_require__(324);__webpack_require__(325);__webpack_require__(326);__webpack_require__(327);__webpack_require__(154);__webpack_require__(156);__webpack_require__(157);__webpack_require__(328);__webpack_require__(329);__webpack_require__(330);__webpack_require__(331);__webpack_require__(332);__webpack_require__(333);__webpack_require__(334);__webpack_require__(335);__webpack_require__(336);__webpack_require__(337);__webpack_require__(338);__webpack_require__(339);__webpack_require__(340);__webpack_require__(341);__webpack_require__(342);__webpack_require__(343);__webpack_require__(344);__webpack_require__(345);__webpack_require__(346);__webpack_require__(347);__webpack_require__(348);__webpack_require__(349);__webpack_require__(350);__webpack_require__(351);__webpack_require__(352);__webpack_require__(353);__webpack_require__(354);__webpack_require__(355);__webpack_require__(356);__webpack_require__(357);__webpack_require__(358);__webpack_require__(359);__webpack_require__(360);__webpack_require__(361);__webpack_require__(362);__webpack_require__(363);__webpack_require__(364);__webpack_require__(365);__webpack_require__(366);__webpack_require__(367);__webpack_require__(368);__webpack_require__(369);__webpack_require__(370);__webpack_require__(371);__webpack_require__(372);__webpack_require__(373);__webpack_require__(374);__webpack_require__(375);__webpack_require__(376);__webpack_require__(377);__webpack_require__(378);__webpack_require__(379);__webpack_require__(380);__webpack_require__(381);__webpack_require__(382);__webpack_require__(383);__webpack_require__(384);__webpack_require__(385);__webpack_require__(386);__webpack_require__(387);__webpack_require__(388);__webpack_require__(389);__webpack_require__(390);__webpack_require__(391);__webpack_require__(392);__webpack_require__(393);__webpack_require__(394);__webpack_require__(395);__webpack_require__(396);__webpack_require__(397);__webpack_require__(398);__webpack_require__(399);__webpack_require__(400);__webpack_require__(401);__webpack_require__(402);__webpack_require__(403);__webpack_require__(404);__webpack_require__(405);__webpack_require__(406);__webpack_require__(407);__webpack_require__(408);__webpack_require__(409);__webpack_require__(410);__webpack_require__(413);__webpack_require__(414);module.exports=__webpack_require__(25);/***/},/* 216 *//***/function(module,exports,__webpack_require__){"use strict";// ECMAScript 6 symbols shim
var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};var global=__webpack_require__(2);var has=__webpack_require__(14);var DESCRIPTORS=__webpack_require__(7);var $export=__webpack_require__(0);var redefine=__webpack_require__(16);var META=__webpack_require__(33).KEY;var $fails=__webpack_require__(3);var shared=__webpack_require__(57);var setToStringTag=__webpack_require__(48);var uid=__webpack_require__(37);var wks=__webpack_require__(6);var wksExt=__webpack_require__(135);var wksDefine=__webpack_require__(81);var keyOf=__webpack_require__(217);var enumKeys=__webpack_require__(218);var isArray=__webpack_require__(60);var anObject=__webpack_require__(1);var toIObject=__webpack_require__(17);var toPrimitive=__webpack_require__(26);var createDesc=__webpack_require__(36);var _create=__webpack_require__(40);var gOPNExt=__webpack_require__(138);var $GOPD=__webpack_require__(19);var $DP=__webpack_require__(8);var $keys=__webpack_require__(34);var gOPD=$GOPD.f;var dP=$DP.f;var gOPN=gOPNExt.f;var $Symbol=global.Symbol;var $JSON=global.JSON;var _stringify=$JSON&&$JSON.stringify;var PROTOTYPE='prototype';var HIDDEN=wks('_hidden');var TO_PRIMITIVE=wks('toPrimitive');var isEnum={}.propertyIsEnumerable;var SymbolRegistry=shared('symbol-registry');var AllSymbols=shared('symbols');var OPSymbols=shared('op-symbols');var ObjectProto=Object[PROTOTYPE];var USE_NATIVE=typeof $Symbol=='function';var QObject=global.QObject;// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter=!QObject||!QObject[PROTOTYPE]||!QObject[PROTOTYPE].findChild;// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc=DESCRIPTORS&&$fails(function(){return _create(dP({},'a',{get:function get(){return dP(this,'a',{value:7}).a;}})).a!=7;})?function(it,key,D){var protoDesc=gOPD(ObjectProto,key);if(protoDesc)delete ObjectProto[key];dP(it,key,D);if(protoDesc&&it!==ObjectProto)dP(ObjectProto,key,protoDesc);}:dP;var wrap=function wrap(tag){var sym=AllSymbols[tag]=_create($Symbol[PROTOTYPE]);sym._k=tag;return sym;};var isSymbol=USE_NATIVE&&_typeof($Symbol.iterator)=='symbol'?function(it){return(typeof it==='undefined'?'undefined':_typeof(it))=='symbol';}:function(it){return it instanceof $Symbol;};var $defineProperty=function defineProperty(it,key,D){if(it===ObjectProto)$defineProperty(OPSymbols,key,D);anObject(it);key=toPrimitive(key,true);anObject(D);if(has(AllSymbols,key)){if(!D.enumerable){if(!has(it,HIDDEN))dP(it,HIDDEN,createDesc(1,{}));it[HIDDEN][key]=true;}else{if(has(it,HIDDEN)&&it[HIDDEN][key])it[HIDDEN][key]=false;D=_create(D,{enumerable:createDesc(0,false)});}return setSymbolDesc(it,key,D);}return dP(it,key,D);};var $defineProperties=function defineProperties(it,P){anObject(it);var keys=enumKeys(P=toIObject(P));var i=0;var l=keys.length;var key;while(l>i){$defineProperty(it,key=keys[i++],P[key]);}return it;};var $create=function create(it,P){return P===undefined?_create(it):$defineProperties(_create(it),P);};var $propertyIsEnumerable=function propertyIsEnumerable(key){var E=isEnum.call(this,key=toPrimitive(key,true));if(this===ObjectProto&&has(AllSymbols,key)&&!has(OPSymbols,key))return false;return E||!has(this,key)||!has(AllSymbols,key)||has(this,HIDDEN)&&this[HIDDEN][key]?E:true;};var $getOwnPropertyDescriptor=function getOwnPropertyDescriptor(it,key){it=toIObject(it);key=toPrimitive(key,true);if(it===ObjectProto&&has(AllSymbols,key)&&!has(OPSymbols,key))return;var D=gOPD(it,key);if(D&&has(AllSymbols,key)&&!(has(it,HIDDEN)&&it[HIDDEN][key]))D.enumerable=true;return D;};var $getOwnPropertyNames=function getOwnPropertyNames(it){var names=gOPN(toIObject(it));var result=[];var i=0;var key;while(names.length>i){if(!has(AllSymbols,key=names[i++])&&key!=HIDDEN&&key!=META)result.push(key);}return result;};var $getOwnPropertySymbols=function getOwnPropertySymbols(it){var IS_OP=it===ObjectProto;var names=gOPN(IS_OP?OPSymbols:toIObject(it));var result=[];var i=0;var key;while(names.length>i){if(has(AllSymbols,key=names[i++])&&(IS_OP?has(ObjectProto,key):true))result.push(AllSymbols[key]);}return result;};// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){$Symbol=function _Symbol(){if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');var tag=uid(arguments.length>0?arguments[0]:undefined);var $set=function $set(value){if(this===ObjectProto)$set.call(OPSymbols,value);if(has(this,HIDDEN)&&has(this[HIDDEN],tag))this[HIDDEN][tag]=false;setSymbolDesc(this,tag,createDesc(1,value));};if(DESCRIPTORS&&setter)setSymbolDesc(ObjectProto,tag,{configurable:true,set:$set});return wrap(tag);};redefine($Symbol[PROTOTYPE],'toString',function toString(){return this._k;});$GOPD.f=$getOwnPropertyDescriptor;$DP.f=$defineProperty;__webpack_require__(41).f=gOPNExt.f=$getOwnPropertyNames;__webpack_require__(54).f=$propertyIsEnumerable;__webpack_require__(59).f=$getOwnPropertySymbols;if(DESCRIPTORS&&!__webpack_require__(38)){redefine(ObjectProto,'propertyIsEnumerable',$propertyIsEnumerable,true);}wksExt.f=function(name){return wrap(wks(name));};}$export($export.G+$export.W+$export.F*!USE_NATIVE,{Symbol:$Symbol});for(var es6Symbols=// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','),j=0;es6Symbols.length>j;){wks(es6Symbols[j++]);}for(var wellKnownSymbols=$keys(wks.store),k=0;wellKnownSymbols.length>k;){wksDefine(wellKnownSymbols[k++]);}$export($export.S+$export.F*!USE_NATIVE,'Symbol',{// 19.4.2.1 Symbol.for(key)
'for':function _for(key){return has(SymbolRegistry,key+='')?SymbolRegistry[key]:SymbolRegistry[key]=$Symbol(key);},// 19.4.2.5 Symbol.keyFor(sym)
keyFor:function keyFor(key){if(isSymbol(key))return keyOf(SymbolRegistry,key);throw TypeError(key+' is not a symbol!');},useSetter:function useSetter(){setter=true;},useSimple:function useSimple(){setter=false;}});$export($export.S+$export.F*!USE_NATIVE,'Object',{// 19.1.2.2 Object.create(O [, Properties])
create:$create,// 19.1.2.4 Object.defineProperty(O, P, Attributes)
defineProperty:$defineProperty,// 19.1.2.3 Object.defineProperties(O, Properties)
defineProperties:$defineProperties,// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
getOwnPropertyDescriptor:$getOwnPropertyDescriptor,// 19.1.2.7 Object.getOwnPropertyNames(O)
getOwnPropertyNames:$getOwnPropertyNames,// 19.1.2.8 Object.getOwnPropertySymbols(O)
getOwnPropertySymbols:$getOwnPropertySymbols});// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON&&$export($export.S+$export.F*(!USE_NATIVE||$fails(function(){var S=$Symbol();// MS Edge converts symbol values to JSON as {}
// WebKit converts symbol values to JSON as null
// V8 throws on boxed symbols
return _stringify([S])!='[null]'||_stringify({a:S})!='{}'||_stringify(Object(S))!='{}';})),'JSON',{stringify:function stringify(it){if(it===undefined||isSymbol(it))return;// IE8 returns string on undefined
var args=[it];var i=1;var replacer,$replacer;while(arguments.length>i){args.push(arguments[i++]);}replacer=args[1];if(typeof replacer=='function')$replacer=replacer;if($replacer||!isArray(replacer))replacer=function replacer(key,value){if($replacer)value=$replacer.call(this,key,value);if(!isSymbol(value))return value;};args[1]=replacer;return _stringify.apply($JSON,args);}});// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE]||__webpack_require__(15)($Symbol[PROTOTYPE],TO_PRIMITIVE,$Symbol[PROTOTYPE].valueOf);// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol,'Symbol');// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math,'Math',true);// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON,'JSON',true);/***/},/* 217 *//***/function(module,exports,__webpack_require__){var getKeys=__webpack_require__(34);var toIObject=__webpack_require__(17);module.exports=function(object,el){var O=toIObject(object);var keys=getKeys(O);var length=keys.length;var index=0;var key;while(length>index){if(O[key=keys[index++]]===el)return key;}};/***/},/* 218 *//***/function(module,exports,__webpack_require__){// all enumerable object keys, includes symbols
var getKeys=__webpack_require__(34);var gOPS=__webpack_require__(59);var pIE=__webpack_require__(54);module.exports=function(it){var result=getKeys(it);var getSymbols=gOPS.f;if(getSymbols){var symbols=getSymbols(it);var isEnum=pIE.f;var i=0;var key;while(symbols.length>i){if(isEnum.call(it,key=symbols[i++]))result.push(key);}}return result;};/***/},/* 219 *//***/function(module,exports,__webpack_require__){var $export=__webpack_require__(0);// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S,'Object',{create:__webpack_require__(40)});/***/},/* 220 *//***/function(module,exports,__webpack_require__){var $export=__webpack_require__(0);// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S+$export.F*!__webpack_require__(7),'Object',{defineProperty:__webpack_require__(8).f});/***/},/* 221 *//***/function(module,exports,__webpack_require__){var $export=__webpack_require__(0);// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S+$export.F*!__webpack_require__(7),'Object',{defineProperties:__webpack_require__(137)});/***/},/* 222 *//***/function(module,exports,__webpack_require__){// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject=__webpack_require__(17);var $getOwnPropertyDescriptor=__webpack_require__(19).f;__webpack_require__(29)('getOwnPropertyDescriptor',function(){return function getOwnPropertyDescriptor(it,key){return $getOwnPropertyDescriptor(toIObject(it),key);};});/***/},/* 223 *//***/function(module,exports,__webpack_require__){// 19.1.2.9 Object.getPrototypeOf(O)
var toObject=__webpack_require__(11);var $getPrototypeOf=__webpack_require__(20);__webpack_require__(29)('getPrototypeOf',function(){return function getPrototypeOf(it){return $getPrototypeOf(toObject(it));};});/***/},/* 224 *//***/function(module,exports,__webpack_require__){// 19.1.2.14 Object.keys(O)
var toObject=__webpack_require__(11);var $keys=__webpack_require__(34);__webpack_require__(29)('keys',function(){return function keys(it){return $keys(toObject(it));};});/***/},/* 225 *//***/function(module,exports,__webpack_require__){// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(29)('getOwnPropertyNames',function(){return __webpack_require__(138).f;});/***/},/* 226 *//***/function(module,exports,__webpack_require__){// 19.1.2.5 Object.freeze(O)
var isObject=__webpack_require__(5);var meta=__webpack_require__(33).onFreeze;__webpack_require__(29)('freeze',function($freeze){return function freeze(it){return $freeze&&isObject(it)?$freeze(meta(it)):it;};});/***/},/* 227 *//***/function(module,exports,__webpack_require__){// 19.1.2.17 Object.seal(O)
var isObject=__webpack_require__(5);var meta=__webpack_require__(33).onFreeze;__webpack_require__(29)('seal',function($seal){return function seal(it){return $seal&&isObject(it)?$seal(meta(it)):it;};});/***/},/* 228 *//***/function(module,exports,__webpack_require__){// 19.1.2.15 Object.preventExtensions(O)
var isObject=__webpack_require__(5);var meta=__webpack_require__(33).onFreeze;__webpack_require__(29)('preventExtensions',function($preventExtensions){return function preventExtensions(it){return $preventExtensions&&isObject(it)?$preventExtensions(meta(it)):it;};});/***/},/* 229 *//***/function(module,exports,__webpack_require__){// 19.1.2.12 Object.isFrozen(O)
var isObject=__webpack_require__(5);__webpack_require__(29)('isFrozen',function($isFrozen){return function isFrozen(it){return isObject(it)?$isFrozen?$isFrozen(it):false:true;};});/***/},/* 230 *//***/function(module,exports,__webpack_require__){// 19.1.2.13 Object.isSealed(O)
var isObject=__webpack_require__(5);__webpack_require__(29)('isSealed',function($isSealed){return function isSealed(it){return isObject(it)?$isSealed?$isSealed(it):false:true;};});/***/},/* 231 *//***/function(module,exports,__webpack_require__){// 19.1.2.11 Object.isExtensible(O)
var isObject=__webpack_require__(5);__webpack_require__(29)('isExtensible',function($isExtensible){return function isExtensible(it){return isObject(it)?$isExtensible?$isExtensible(it):true:false;};});/***/},/* 232 *//***/function(module,exports,__webpack_require__){// 19.1.3.1 Object.assign(target, source)
var $export=__webpack_require__(0);$export($export.S+$export.F,'Object',{assign:__webpack_require__(139)});/***/},/* 233 *//***/function(module,exports,__webpack_require__){// 19.1.3.10 Object.is(value1, value2)
var $export=__webpack_require__(0);$export($export.S,'Object',{is:__webpack_require__(234)});/***/},/* 234 *//***/function(module,exports){// 7.2.9 SameValue(x, y)
module.exports=Object.is||function is(x,y){// eslint-disable-next-line no-self-compare
return x===y?x!==0||1/x===1/y:x!=x&&y!=y;};/***/},/* 235 *//***/function(module,exports,__webpack_require__){// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export=__webpack_require__(0);$export($export.S,'Object',{setPrototypeOf:__webpack_require__(85).set});/***/},/* 236 *//***/function(module,exports,__webpack_require__){"use strict";// 19.1.3.6 Object.prototype.toString()
var classof=__webpack_require__(55);var test={};test[__webpack_require__(6)('toStringTag')]='z';if(test+''!='[object z]'){__webpack_require__(16)(Object.prototype,'toString',function toString(){return'[object '+classof(this)+']';},true);}/***/},/* 237 *//***/function(module,exports,__webpack_require__){// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export=__webpack_require__(0);$export($export.P,'Function',{bind:__webpack_require__(140)});/***/},/* 238 *//***/function(module,exports,__webpack_require__){var dP=__webpack_require__(8).f;var FProto=Function.prototype;var nameRE=/^\s*function ([^ (]*)/;var NAME='name';// 19.2.4.2 name
NAME in FProto||__webpack_require__(7)&&dP(FProto,NAME,{configurable:true,get:function get(){try{return(''+this).match(nameRE)[1];}catch(e){return'';}}});/***/},/* 239 *//***/function(module,exports,__webpack_require__){"use strict";var isObject=__webpack_require__(5);var getPrototypeOf=__webpack_require__(20);var HAS_INSTANCE=__webpack_require__(6)('hasInstance');var FunctionProto=Function.prototype;// 19.2.3.6 Function.prototype[@@hasInstance](V)
if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(8).f(FunctionProto,HAS_INSTANCE,{value:function value(O){if(typeof this!='function'||!isObject(O))return false;if(!isObject(this.prototype))return O instanceof this;// for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
while(O=getPrototypeOf(O)){if(this.prototype===O)return true;}return false;}});/***/},/* 240 *//***/function(module,exports,__webpack_require__){var $export=__webpack_require__(0);var $parseInt=__webpack_require__(141);// 18.2.5 parseInt(string, radix)
$export($export.G+$export.F*(parseInt!=$parseInt),{parseInt:$parseInt});/***/},/* 241 *//***/function(module,exports,__webpack_require__){var $export=__webpack_require__(0);var $parseFloat=__webpack_require__(142);// 18.2.4 parseFloat(string)
$export($export.G+$export.F*(parseFloat!=$parseFloat),{parseFloat:$parseFloat});/***/},/* 242 *//***/function(module,exports,__webpack_require__){"use strict";var global=__webpack_require__(2);var has=__webpack_require__(14);var cof=__webpack_require__(23);var inheritIfRequired=__webpack_require__(87);var toPrimitive=__webpack_require__(26);var fails=__webpack_require__(3);var gOPN=__webpack_require__(41).f;var gOPD=__webpack_require__(19).f;var dP=__webpack_require__(8).f;var $trim=__webpack_require__(49).trim;var NUMBER='Number';var $Number=global[NUMBER];var Base=$Number;var proto=$Number.prototype;// Opera ~12 has broken Object#toString
var BROKEN_COF=cof(__webpack_require__(40)(proto))==NUMBER;var TRIM='trim'in String.prototype;// 7.1.3 ToNumber(argument)
var toNumber=function toNumber(argument){var it=toPrimitive(argument,false);if(typeof it=='string'&&it.length>2){it=TRIM?it.trim():$trim(it,3);var first=it.charCodeAt(0);var third,radix,maxCode;if(first===43||first===45){third=it.charCodeAt(2);if(third===88||third===120)return NaN;// Number('+0x1') should be NaN, old V8 fix
}else if(first===48){switch(it.charCodeAt(1)){case 66:case 98:radix=2;maxCode=49;break;// fast equal /^0b[01]+$/i
case 79:case 111:radix=8;maxCode=55;break;// fast equal /^0o[0-7]+$/i
default:return+it;}for(var digits=it.slice(2),i=0,l=digits.length,code;i<l;i++){code=digits.charCodeAt(i);// parseInt parses a string to a first unavailable symbol
// but ToNumber should return NaN if a string contains unavailable symbols
if(code<48||code>maxCode)return NaN;}return parseInt(digits,radix);}}return+it;};if(!$Number(' 0o1')||!$Number('0b1')||$Number('+0x1')){$Number=function Number(value){var it=arguments.length<1?0:value;var that=this;return that instanceof $Number// check on 1..constructor(foo) case
&&(BROKEN_COF?fails(function(){proto.valueOf.call(that);}):cof(that)!=NUMBER)?inheritIfRequired(new Base(toNumber(it)),that,$Number):toNumber(it);};for(var keys=__webpack_require__(7)?gOPN(Base):(// ES3:
'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,'+// ES6 (in case, if modules with ES6 Number statics required before):
'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,'+'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','),j=0,key;keys.length>j;j++){if(has(Base,key=keys[j])&&!has($Number,key)){dP($Number,key,gOPD(Base,key));}}$Number.prototype=proto;proto.constructor=$Number;__webpack_require__(16)(global,NUMBER,$Number);}/***/},/* 243 *//***/function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(0);var toInteger=__webpack_require__(28);var aNumberValue=__webpack_require__(143);var repeat=__webpack_require__(88);var $toFixed=1.0.toFixed;var floor=Math.floor;var data=[0,0,0,0,0,0];var ERROR='Number.toFixed: incorrect invocation!';var ZERO='0';var multiply=function multiply(n,c){var i=-1;var c2=c;while(++i<6){c2+=n*data[i];data[i]=c2%1e7;c2=floor(c2/1e7);}};var divide=function divide(n){var i=6;var c=0;while(--i>=0){c+=data[i];data[i]=floor(c/n);c=c%n*1e7;}};var numToString=function numToString(){var i=6;var s='';while(--i>=0){if(s!==''||i===0||data[i]!==0){var t=String(data[i]);s=s===''?t:s+repeat.call(ZERO,7-t.length)+t;}}return s;};var pow=function pow(x,n,acc){return n===0?acc:n%2===1?pow(x,n-1,acc*x):pow(x*x,n/2,acc);};var log=function log(x){var n=0;var x2=x;while(x2>=4096){n+=12;x2/=4096;}while(x2>=2){n+=1;x2/=2;}return n;};$export($export.P+$export.F*(!!$toFixed&&(0.00008.toFixed(3)!=='0.000'||0.9.toFixed(0)!=='1'||1.255.toFixed(2)!=='1.25'||1000000000000000128.0.toFixed(0)!=='1000000000000000128')||!__webpack_require__(3)(function(){// V8 ~ Android 4.3-
$toFixed.call({});})),'Number',{toFixed:function toFixed(fractionDigits){var x=aNumberValue(this,ERROR);var f=toInteger(fractionDigits);var s='';var m=ZERO;var e,z,j,k;if(f<0||f>20)throw RangeError(ERROR);// eslint-disable-next-line no-self-compare
if(x!=x)return'NaN';if(x<=-1e21||x>=1e21)return String(x);if(x<0){s='-';x=-x;}if(x>1e-21){e=log(x*pow(2,69,1))-69;z=e<0?x*pow(2,-e,1):x/pow(2,e,1);z*=0x10000000000000;e=52-e;if(e>0){multiply(0,z);j=f;while(j>=7){multiply(1e7,0);j-=7;}multiply(pow(10,j,1),0);j=e-1;while(j>=23){divide(1<<23);j-=23;}divide(1<<j);multiply(1,1);divide(2);m=numToString();}else{multiply(0,z);multiply(1<<-e,0);m=numToString()+repeat.call(ZERO,f);}}if(f>0){k=m.length;m=s+(k<=f?'0.'+repeat.call(ZERO,f-k)+m:m.slice(0,k-f)+'.'+m.slice(k-f));}else{m=s+m;}return m;}});/***/},/* 244 *//***/function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(0);var $fails=__webpack_require__(3);var aNumberValue=__webpack_require__(143);var $toPrecision=1.0.toPrecision;$export($export.P+$export.F*($fails(function(){// IE7-
return $toPrecision.call(1,undefined)!=='1';})||!$fails(function(){// V8 ~ Android 4.3-
$toPrecision.call({});})),'Number',{toPrecision:function toPrecision(precision){var that=aNumberValue(this,'Number#toPrecision: incorrect invocation!');return precision===undefined?$toPrecision.call(that):$toPrecision.call(that,precision);}});/***/},/* 245 *//***/function(module,exports,__webpack_require__){// 20.1.2.1 Number.EPSILON
var $export=__webpack_require__(0);$export($export.S,'Number',{EPSILON:Math.pow(2,-52)});/***/},/* 246 *//***/function(module,exports,__webpack_require__){// 20.1.2.2 Number.isFinite(number)
var $export=__webpack_require__(0);var _isFinite=__webpack_require__(2).isFinite;$export($export.S,'Number',{isFinite:function isFinite(it){return typeof it=='number'&&_isFinite(it);}});/***/},/* 247 *//***/function(module,exports,__webpack_require__){// 20.1.2.3 Number.isInteger(number)
var $export=__webpack_require__(0);$export($export.S,'Number',{isInteger:__webpack_require__(144)});/***/},/* 248 *//***/function(module,exports,__webpack_require__){// 20.1.2.4 Number.isNaN(number)
var $export=__webpack_require__(0);$export($export.S,'Number',{isNaN:function isNaN(number){// eslint-disable-next-line no-self-compare
return number!=number;}});/***/},/* 249 *//***/function(module,exports,__webpack_require__){// 20.1.2.5 Number.isSafeInteger(number)
var $export=__webpack_require__(0);var isInteger=__webpack_require__(144);var abs=Math.abs;$export($export.S,'Number',{isSafeInteger:function isSafeInteger(number){return isInteger(number)&&abs(number)<=0x1fffffffffffff;}});/***/},/* 250 *//***/function(module,exports,__webpack_require__){// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export=__webpack_require__(0);$export($export.S,'Number',{MAX_SAFE_INTEGER:0x1fffffffffffff});/***/},/* 251 *//***/function(module,exports,__webpack_require__){// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export=__webpack_require__(0);$export($export.S,'Number',{MIN_SAFE_INTEGER:-0x1fffffffffffff});/***/},/* 252 *//***/function(module,exports,__webpack_require__){var $export=__webpack_require__(0);var $parseFloat=__webpack_require__(142);// 20.1.2.12 Number.parseFloat(string)
$export($export.S+$export.F*(Number.parseFloat!=$parseFloat),'Number',{parseFloat:$parseFloat});/***/},/* 253 *//***/function(module,exports,__webpack_require__){var $export=__webpack_require__(0);var $parseInt=__webpack_require__(141);// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S+$export.F*(Number.parseInt!=$parseInt),'Number',{parseInt:$parseInt});/***/},/* 254 *//***/function(module,exports,__webpack_require__){// 20.2.2.3 Math.acosh(x)
var $export=__webpack_require__(0);var log1p=__webpack_require__(145);var sqrt=Math.sqrt;var $acosh=Math.acosh;$export($export.S+$export.F*!($acosh// V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
&&Math.floor($acosh(Number.MAX_VALUE))==710// Tor Browser bug: Math.acosh(Infinity) -> NaN
&&$acosh(Infinity)==Infinity),'Math',{acosh:function acosh(x){return(x=+x)<1?NaN:x>94906265.62425156?Math.log(x)+Math.LN2:log1p(x-1+sqrt(x-1)*sqrt(x+1));}});/***/},/* 255 *//***/function(module,exports,__webpack_require__){// 20.2.2.5 Math.asinh(x)
var $export=__webpack_require__(0);var $asinh=Math.asinh;function asinh(x){return!isFinite(x=+x)||x==0?x:x<0?-asinh(-x):Math.log(x+Math.sqrt(x*x+1));}// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S+$export.F*!($asinh&&1/$asinh(0)>0),'Math',{asinh:asinh});/***/},/* 256 *//***/function(module,exports,__webpack_require__){// 20.2.2.7 Math.atanh(x)
var $export=__webpack_require__(0);var $atanh=Math.atanh;// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S+$export.F*!($atanh&&1/$atanh(-0)<0),'Math',{atanh:function atanh(x){return(x=+x)==0?x:Math.log((1+x)/(1-x))/2;}});/***/},/* 257 *//***/function(module,exports,__webpack_require__){// 20.2.2.9 Math.cbrt(x)
var $export=__webpack_require__(0);var sign=__webpack_require__(89);$export($export.S,'Math',{cbrt:function cbrt(x){return sign(x=+x)*Math.pow(Math.abs(x),1/3);}});/***/},/* 258 *//***/function(module,exports,__webpack_require__){// 20.2.2.11 Math.clz32(x)
var $export=__webpack_require__(0);$export($export.S,'Math',{clz32:function clz32(x){return(x>>>=0)?31-Math.floor(Math.log(x+0.5)*Math.LOG2E):32;}});/***/},/* 259 *//***/function(module,exports,__webpack_require__){// 20.2.2.12 Math.cosh(x)
var $export=__webpack_require__(0);var exp=Math.exp;$export($export.S,'Math',{cosh:function cosh(x){return(exp(x=+x)+exp(-x))/2;}});/***/},/* 260 *//***/function(module,exports,__webpack_require__){// 20.2.2.14 Math.expm1(x)
var $export=__webpack_require__(0);var $expm1=__webpack_require__(90);$export($export.S+$export.F*($expm1!=Math.expm1),'Math',{expm1:$expm1});/***/},/* 261 *//***/function(module,exports,__webpack_require__){// 20.2.2.16 Math.fround(x)
var $export=__webpack_require__(0);$export($export.S,'Math',{fround:__webpack_require__(146)});/***/},/* 262 *//***/function(module,exports,__webpack_require__){// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export=__webpack_require__(0);var abs=Math.abs;$export($export.S,'Math',{hypot:function hypot(value1,value2){// eslint-disable-line no-unused-vars
var sum=0;var i=0;var aLen=arguments.length;var larg=0;var arg,div;while(i<aLen){arg=abs(arguments[i++]);if(larg<arg){div=larg/arg;sum=sum*div*div+1;larg=arg;}else if(arg>0){div=arg/larg;sum+=div*div;}else sum+=arg;}return larg===Infinity?Infinity:larg*Math.sqrt(sum);}});/***/},/* 263 *//***/function(module,exports,__webpack_require__){// 20.2.2.18 Math.imul(x, y)
var $export=__webpack_require__(0);var $imul=Math.imul;// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S+$export.F*__webpack_require__(3)(function(){return $imul(0xffffffff,5)!=-5||$imul.length!=2;}),'Math',{imul:function imul(x,y){var UINT16=0xffff;var xn=+x;var yn=+y;var xl=UINT16&xn;var yl=UINT16&yn;return 0|xl*yl+((UINT16&xn>>>16)*yl+xl*(UINT16&yn>>>16)<<16>>>0);}});/***/},/* 264 *//***/function(module,exports,__webpack_require__){// 20.2.2.21 Math.log10(x)
var $export=__webpack_require__(0);$export($export.S,'Math',{log10:function log10(x){return Math.log(x)*Math.LOG10E;}});/***/},/* 265 *//***/function(module,exports,__webpack_require__){// 20.2.2.20 Math.log1p(x)
var $export=__webpack_require__(0);$export($export.S,'Math',{log1p:__webpack_require__(145)});/***/},/* 266 *//***/function(module,exports,__webpack_require__){// 20.2.2.22 Math.log2(x)
var $export=__webpack_require__(0);$export($export.S,'Math',{log2:function log2(x){return Math.log(x)/Math.LN2;}});/***/},/* 267 *//***/function(module,exports,__webpack_require__){// 20.2.2.28 Math.sign(x)
var $export=__webpack_require__(0);$export($export.S,'Math',{sign:__webpack_require__(89)});/***/},/* 268 *//***/function(module,exports,__webpack_require__){// 20.2.2.30 Math.sinh(x)
var $export=__webpack_require__(0);var expm1=__webpack_require__(90);var exp=Math.exp;// V8 near Chromium 38 has a problem with very small numbers
$export($export.S+$export.F*__webpack_require__(3)(function(){return!Math.sinh(-2e-17)!=-2e-17;}),'Math',{sinh:function sinh(x){return Math.abs(x=+x)<1?(expm1(x)-expm1(-x))/2:(exp(x-1)-exp(-x-1))*(Math.E/2);}});/***/},/* 269 *//***/function(module,exports,__webpack_require__){// 20.2.2.33 Math.tanh(x)
var $export=__webpack_require__(0);var expm1=__webpack_require__(90);var exp=Math.exp;$export($export.S,'Math',{tanh:function tanh(x){var a=expm1(x=+x);var b=expm1(-x);return a==Infinity?1:b==Infinity?-1:(a-b)/(exp(x)+exp(-x));}});/***/},/* 270 *//***/function(module,exports,__webpack_require__){// 20.2.2.34 Math.trunc(x)
var $export=__webpack_require__(0);$export($export.S,'Math',{trunc:function trunc(it){return(it>0?Math.floor:Math.ceil)(it);}});/***/},/* 271 *//***/function(module,exports,__webpack_require__){var $export=__webpack_require__(0);var toAbsoluteIndex=__webpack_require__(39);var fromCharCode=String.fromCharCode;var $fromCodePoint=String.fromCodePoint;// length should be 1, old FF problem
$export($export.S+$export.F*(!!$fromCodePoint&&$fromCodePoint.length!=1),'String',{// 21.1.2.2 String.fromCodePoint(...codePoints)
fromCodePoint:function fromCodePoint(x){// eslint-disable-line no-unused-vars
var res=[];var aLen=arguments.length;var i=0;var code;while(aLen>i){code=+arguments[i++];if(toAbsoluteIndex(code,0x10ffff)!==code)throw RangeError(code+' is not a valid code point');res.push(code<0x10000?fromCharCode(code):fromCharCode(((code-=0x10000)>>10)+0xd800,code%0x400+0xdc00));}return res.join('');}});/***/},/* 272 *//***/function(module,exports,__webpack_require__){var $export=__webpack_require__(0);var toIObject=__webpack_require__(17);var toLength=__webpack_require__(9);$export($export.S,'String',{// 21.1.2.4 String.raw(callSite, ...substitutions)
raw:function raw(callSite){var tpl=toIObject(callSite.raw);var len=toLength(tpl.length);var aLen=arguments.length;var res=[];var i=0;while(len>i){res.push(String(tpl[i++]));if(i<aLen)res.push(String(arguments[i]));}return res.join('');}});/***/},/* 273 *//***/function(module,exports,__webpack_require__){"use strict";// 21.1.3.25 String.prototype.trim()
__webpack_require__(49)('trim',function($trim){return function trim(){return $trim(this,3);};});/***/},/* 274 *//***/function(module,exports,__webpack_require__){"use strict";var $at=__webpack_require__(91)(true);// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(92)(String,'String',function(iterated){this._t=String(iterated);// target
this._i=0;// next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
},function(){var O=this._t;var index=this._i;var point;if(index>=O.length)return{value:undefined,done:true};point=$at(O,index);this._i+=point.length;return{value:point,done:false};});/***/},/* 275 *//***/function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(0);var $at=__webpack_require__(91)(false);$export($export.P,'String',{// 21.1.3.3 String.prototype.codePointAt(pos)
codePointAt:function codePointAt(pos){return $at(this,pos);}});/***/},/* 276 *//***/function(module,exports,__webpack_require__){"use strict";// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
var $export=__webpack_require__(0);var toLength=__webpack_require__(9);var context=__webpack_require__(94);var ENDS_WITH='endsWith';var $endsWith=''[ENDS_WITH];$export($export.P+$export.F*__webpack_require__(95)(ENDS_WITH),'String',{endsWith:function endsWith(searchString/* , endPosition = @length */){var that=context(this,searchString,ENDS_WITH);var endPosition=arguments.length>1?arguments[1]:undefined;var len=toLength(that.length);var end=endPosition===undefined?len:Math.min(toLength(endPosition),len);var search=String(searchString);return $endsWith?$endsWith.call(that,search,end):that.slice(end-search.length,end)===search;}});/***/},/* 277 *//***/function(module,exports,__webpack_require__){"use strict";// 21.1.3.7 String.prototype.includes(searchString, position = 0)
var $export=__webpack_require__(0);var context=__webpack_require__(94);var INCLUDES='includes';$export($export.P+$export.F*__webpack_require__(95)(INCLUDES),'String',{includes:function includes(searchString/* , position = 0 */){return!!~context(this,searchString,INCLUDES).indexOf(searchString,arguments.length>1?arguments[1]:undefined);}});/***/},/* 278 *//***/function(module,exports,__webpack_require__){var $export=__webpack_require__(0);$export($export.P,'String',{// 21.1.3.13 String.prototype.repeat(count)
repeat:__webpack_require__(88)});/***/},/* 279 *//***/function(module,exports,__webpack_require__){"use strict";// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
var $export=__webpack_require__(0);var toLength=__webpack_require__(9);var context=__webpack_require__(94);var STARTS_WITH='startsWith';var $startsWith=''[STARTS_WITH];$export($export.P+$export.F*__webpack_require__(95)(STARTS_WITH),'String',{startsWith:function startsWith(searchString/* , position = 0 */){var that=context(this,searchString,STARTS_WITH);var index=toLength(Math.min(arguments.length>1?arguments[1]:undefined,that.length));var search=String(searchString);return $startsWith?$startsWith.call(that,search,index):that.slice(index,index+search.length)===search;}});/***/},/* 280 *//***/function(module,exports,__webpack_require__){"use strict";// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(18)('anchor',function(createHTML){return function anchor(name){return createHTML(this,'a','name',name);};});/***/},/* 281 *//***/function(module,exports,__webpack_require__){"use strict";// B.2.3.3 String.prototype.big()
__webpack_require__(18)('big',function(createHTML){return function big(){return createHTML(this,'big','','');};});/***/},/* 282 *//***/function(module,exports,__webpack_require__){"use strict";// B.2.3.4 String.prototype.blink()
__webpack_require__(18)('blink',function(createHTML){return function blink(){return createHTML(this,'blink','','');};});/***/},/* 283 *//***/function(module,exports,__webpack_require__){"use strict";// B.2.3.5 String.prototype.bold()
__webpack_require__(18)('bold',function(createHTML){return function bold(){return createHTML(this,'b','','');};});/***/},/* 284 *//***/function(module,exports,__webpack_require__){"use strict";// B.2.3.6 String.prototype.fixed()
__webpack_require__(18)('fixed',function(createHTML){return function fixed(){return createHTML(this,'tt','','');};});/***/},/* 285 *//***/function(module,exports,__webpack_require__){"use strict";// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(18)('fontcolor',function(createHTML){return function fontcolor(color){return createHTML(this,'font','color',color);};});/***/},/* 286 *//***/function(module,exports,__webpack_require__){"use strict";// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(18)('fontsize',function(createHTML){return function fontsize(size){return createHTML(this,'font','size',size);};});/***/},/* 287 *//***/function(module,exports,__webpack_require__){"use strict";// B.2.3.9 String.prototype.italics()
__webpack_require__(18)('italics',function(createHTML){return function italics(){return createHTML(this,'i','','');};});/***/},/* 288 *//***/function(module,exports,__webpack_require__){"use strict";// B.2.3.10 String.prototype.link(url)
__webpack_require__(18)('link',function(createHTML){return function link(url){return createHTML(this,'a','href',url);};});/***/},/* 289 *//***/function(module,exports,__webpack_require__){"use strict";// B.2.3.11 String.prototype.small()
__webpack_require__(18)('small',function(createHTML){return function small(){return createHTML(this,'small','','');};});/***/},/* 290 *//***/function(module,exports,__webpack_require__){"use strict";// B.2.3.12 String.prototype.strike()
__webpack_require__(18)('strike',function(createHTML){return function strike(){return createHTML(this,'strike','','');};});/***/},/* 291 *//***/function(module,exports,__webpack_require__){"use strict";// B.2.3.13 String.prototype.sub()
__webpack_require__(18)('sub',function(createHTML){return function sub(){return createHTML(this,'sub','','');};});/***/},/* 292 *//***/function(module,exports,__webpack_require__){"use strict";// B.2.3.14 String.prototype.sup()
__webpack_require__(18)('sup',function(createHTML){return function sup(){return createHTML(this,'sup','','');};});/***/},/* 293 *//***/function(module,exports,__webpack_require__){// 20.3.3.1 / 15.9.4.4 Date.now()
var $export=__webpack_require__(0);$export($export.S,'Date',{now:function now(){return new Date().getTime();}});/***/},/* 294 *//***/function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(0);var toObject=__webpack_require__(11);var toPrimitive=__webpack_require__(26);$export($export.P+$export.F*__webpack_require__(3)(function(){return new Date(NaN).toJSON()!==null||Date.prototype.toJSON.call({toISOString:function toISOString(){return 1;}})!==1;}),'Date',{// eslint-disable-next-line no-unused-vars
toJSON:function toJSON(key){var O=toObject(this);var pv=toPrimitive(O);return typeof pv=='number'&&!isFinite(pv)?null:O.toISOString();}});/***/},/* 295 *//***/function(module,exports,__webpack_require__){// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export=__webpack_require__(0);var toISOString=__webpack_require__(296);// PhantomJS / old WebKit has a broken implementations
$export($export.P+$export.F*(Date.prototype.toISOString!==toISOString),'Date',{toISOString:toISOString});/***/},/* 296 *//***/function(module,exports,__webpack_require__){"use strict";// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails=__webpack_require__(3);var getTime=Date.prototype.getTime;var $toISOString=Date.prototype.toISOString;var lz=function lz(num){return num>9?num:'0'+num;};// PhantomJS / old WebKit has a broken implementations
module.exports=fails(function(){return $toISOString.call(new Date(-5e13-1))!='0385-07-25T07:06:39.999Z';})||!fails(function(){$toISOString.call(new Date(NaN));})?function toISOString(){if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');var d=this;var y=d.getUTCFullYear();var m=d.getUTCMilliseconds();var s=y<0?'-':y>9999?'+':'';return s+('00000'+Math.abs(y)).slice(s?-6:-4)+'-'+lz(d.getUTCMonth()+1)+'-'+lz(d.getUTCDate())+'T'+lz(d.getUTCHours())+':'+lz(d.getUTCMinutes())+':'+lz(d.getUTCSeconds())+'.'+(m>99?m:'0'+lz(m))+'Z';}:$toISOString;/***/},/* 297 *//***/function(module,exports,__webpack_require__){var DateProto=Date.prototype;var INVALID_DATE='Invalid Date';var TO_STRING='toString';var $toString=DateProto[TO_STRING];var getTime=DateProto.getTime;if(new Date(NaN)+''!=INVALID_DATE){__webpack_require__(16)(DateProto,TO_STRING,function toString(){var value=getTime.call(this);// eslint-disable-next-line no-self-compare
return value===value?$toString.call(this):INVALID_DATE;});}/***/},/* 298 *//***/function(module,exports,__webpack_require__){var TO_PRIMITIVE=__webpack_require__(6)('toPrimitive');var proto=Date.prototype;if(!(TO_PRIMITIVE in proto))__webpack_require__(15)(proto,TO_PRIMITIVE,__webpack_require__(299));/***/},/* 299 *//***/function(module,exports,__webpack_require__){"use strict";var anObject=__webpack_require__(1);var toPrimitive=__webpack_require__(26);var NUMBER='number';module.exports=function(hint){if(hint!=='string'&&hint!==NUMBER&&hint!=='default')throw TypeError('Incorrect hint');return toPrimitive(anObject(this),hint!=NUMBER);};/***/},/* 300 *//***/function(module,exports,__webpack_require__){// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export=__webpack_require__(0);$export($export.S,'Array',{isArray:__webpack_require__(60)});/***/},/* 301 *//***/function(module,exports,__webpack_require__){"use strict";var ctx=__webpack_require__(22);var $export=__webpack_require__(0);var toObject=__webpack_require__(11);var call=__webpack_require__(147);var isArrayIter=__webpack_require__(96);var toLength=__webpack_require__(9);var createProperty=__webpack_require__(97);var getIterFn=__webpack_require__(98);$export($export.S+$export.F*!__webpack_require__(63)(function(iter){Array.from(iter);}),'Array',{// 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
from:function from(arrayLike/* , mapfn = undefined, thisArg = undefined */){var O=toObject(arrayLike);var C=typeof this=='function'?this:Array;var aLen=arguments.length;var mapfn=aLen>1?arguments[1]:undefined;var mapping=mapfn!==undefined;var index=0;var iterFn=getIterFn(O);var length,result,step,iterator;if(mapping)mapfn=ctx(mapfn,aLen>2?arguments[2]:undefined,2);// if object isn't iterable or it's array with default iterator - use simple case
if(iterFn!=undefined&&!(C==Array&&isArrayIter(iterFn))){for(iterator=iterFn.call(O),result=new C();!(step=iterator.next()).done;index++){createProperty(result,index,mapping?call(iterator,mapfn,[step.value,index],true):step.value);}}else{length=toLength(O.length);for(result=new C(length);length>index;index++){createProperty(result,index,mapping?mapfn(O[index],index):O[index]);}}result.length=index;return result;}});/***/},/* 302 *//***/function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(0);var createProperty=__webpack_require__(97);// WebKit Array.of isn't generic
$export($export.S+$export.F*__webpack_require__(3)(function(){function F(){/* empty */}return!(Array.of.call(F)instanceof F);}),'Array',{// 22.1.2.3 Array.of( ...items)
of:function of()/* ...args */{var index=0;var aLen=arguments.length;var result=new(typeof this=='function'?this:Array)(aLen);while(aLen>index){createProperty(result,index,arguments[index++]);}result.length=aLen;return result;}});/***/},/* 303 *//***/function(module,exports,__webpack_require__){"use strict";// 22.1.3.13 Array.prototype.join(separator)
var $export=__webpack_require__(0);var toIObject=__webpack_require__(17);var arrayJoin=[].join;// fallback for not array-like strings
$export($export.P+$export.F*(__webpack_require__(53)!=Object||!__webpack_require__(24)(arrayJoin)),'Array',{join:function join(separator){return arrayJoin.call(toIObject(this),separator===undefined?',':separator);}});/***/},/* 304 *//***/function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(0);var html=__webpack_require__(84);var cof=__webpack_require__(23);var toAbsoluteIndex=__webpack_require__(39);var toLength=__webpack_require__(9);var arraySlice=[].slice;// fallback for not array-like ES3 strings and DOM objects
$export($export.P+$export.F*__webpack_require__(3)(function(){if(html)arraySlice.call(html);}),'Array',{slice:function slice(begin,end){var len=toLength(this.length);var klass=cof(this);end=end===undefined?len:end;if(klass=='Array')return arraySlice.call(this,begin,end);var start=toAbsoluteIndex(begin,len);var upTo=toAbsoluteIndex(end,len);var size=toLength(upTo-start);var cloned=Array(size);var i=0;for(;i<size;i++){cloned[i]=klass=='String'?this.charAt(start+i):this[start+i];}return cloned;}});/***/},/* 305 *//***/function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(0);var aFunction=__webpack_require__(12);var toObject=__webpack_require__(11);var fails=__webpack_require__(3);var $sort=[].sort;var test=[1,2,3];$export($export.P+$export.F*(fails(function(){// IE8-
test.sort(undefined);})||!fails(function(){// V8 bug
test.sort(null);// Old WebKit
})||!__webpack_require__(24)($sort)),'Array',{// 22.1.3.25 Array.prototype.sort(comparefn)
sort:function sort(comparefn){return comparefn===undefined?$sort.call(toObject(this)):$sort.call(toObject(this),aFunction(comparefn));}});/***/},/* 306 *//***/function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(0);var $forEach=__webpack_require__(30)(0);var STRICT=__webpack_require__(24)([].forEach,true);$export($export.P+$export.F*!STRICT,'Array',{// 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
forEach:function forEach(callbackfn/* , thisArg */){return $forEach(this,callbackfn,arguments[1]);}});/***/},/* 307 *//***/function(module,exports,__webpack_require__){var isObject=__webpack_require__(5);var isArray=__webpack_require__(60);var SPECIES=__webpack_require__(6)('species');module.exports=function(original){var C;if(isArray(original)){C=original.constructor;// cross-realm fallback
if(typeof C=='function'&&(C===Array||isArray(C.prototype)))C=undefined;if(isObject(C)){C=C[SPECIES];if(C===null)C=undefined;}}return C===undefined?Array:C;};/***/},/* 308 *//***/function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(0);var $map=__webpack_require__(30)(1);$export($export.P+$export.F*!__webpack_require__(24)([].map,true),'Array',{// 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
map:function map(callbackfn/* , thisArg */){return $map(this,callbackfn,arguments[1]);}});/***/},/* 309 *//***/function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(0);var $filter=__webpack_require__(30)(2);$export($export.P+$export.F*!__webpack_require__(24)([].filter,true),'Array',{// 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
filter:function filter(callbackfn/* , thisArg */){return $filter(this,callbackfn,arguments[1]);}});/***/},/* 310 *//***/function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(0);var $some=__webpack_require__(30)(3);$export($export.P+$export.F*!__webpack_require__(24)([].some,true),'Array',{// 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
some:function some(callbackfn/* , thisArg */){return $some(this,callbackfn,arguments[1]);}});/***/},/* 311 *//***/function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(0);var $every=__webpack_require__(30)(4);$export($export.P+$export.F*!__webpack_require__(24)([].every,true),'Array',{// 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
every:function every(callbackfn/* , thisArg */){return $every(this,callbackfn,arguments[1]);}});/***/},/* 312 *//***/function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(0);var $reduce=__webpack_require__(148);$export($export.P+$export.F*!__webpack_require__(24)([].reduce,true),'Array',{// 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
reduce:function reduce(callbackfn/* , initialValue */){return $reduce(this,callbackfn,arguments.length,arguments[1],false);}});/***/},/* 313 *//***/function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(0);var $reduce=__webpack_require__(148);$export($export.P+$export.F*!__webpack_require__(24)([].reduceRight,true),'Array',{// 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
reduceRight:function reduceRight(callbackfn/* , initialValue */){return $reduce(this,callbackfn,arguments.length,arguments[1],true);}});/***/},/* 314 *//***/function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(0);var $indexOf=__webpack_require__(58)(false);var $native=[].indexOf;var NEGATIVE_ZERO=!!$native&&1/[1].indexOf(1,-0)<0;$export($export.P+$export.F*(NEGATIVE_ZERO||!__webpack_require__(24)($native)),'Array',{// 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
indexOf:function indexOf(searchElement/* , fromIndex = 0 */){return NEGATIVE_ZERO// convert -0 to +0
?$native.apply(this,arguments)||0:$indexOf(this,searchElement,arguments[1]);}});/***/},/* 315 *//***/function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(0);var toIObject=__webpack_require__(17);var toInteger=__webpack_require__(28);var toLength=__webpack_require__(9);var $native=[].lastIndexOf;var NEGATIVE_ZERO=!!$native&&1/[1].lastIndexOf(1,-0)<0;$export($export.P+$export.F*(NEGATIVE_ZERO||!__webpack_require__(24)($native)),'Array',{// 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
lastIndexOf:function lastIndexOf(searchElement/* , fromIndex = @[*-1] */){// convert -0 to +0
if(NEGATIVE_ZERO)return $native.apply(this,arguments)||0;var O=toIObject(this);var length=toLength(O.length);var index=length-1;if(arguments.length>1)index=Math.min(index,toInteger(arguments[1]));if(index<0)index=length+index;for(;index>=0;index--){if(index in O)if(O[index]===searchElement)return index||0;}return-1;}});/***/},/* 316 *//***/function(module,exports,__webpack_require__){// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export=__webpack_require__(0);$export($export.P,'Array',{copyWithin:__webpack_require__(149)});__webpack_require__(35)('copyWithin');/***/},/* 317 *//***/function(module,exports,__webpack_require__){// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export=__webpack_require__(0);$export($export.P,'Array',{fill:__webpack_require__(100)});__webpack_require__(35)('fill');/***/},/* 318 *//***/function(module,exports,__webpack_require__){"use strict";// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export=__webpack_require__(0);var $find=__webpack_require__(30)(5);var KEY='find';var forced=true;// Shouldn't skip holes
if(KEY in[])Array(1)[KEY](function(){forced=false;});$export($export.P+$export.F*forced,'Array',{find:function find(callbackfn/* , that = undefined */){return $find(this,callbackfn,arguments.length>1?arguments[1]:undefined);}});__webpack_require__(35)(KEY);/***/},/* 319 *//***/function(module,exports,__webpack_require__){"use strict";// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export=__webpack_require__(0);var $find=__webpack_require__(30)(6);var KEY='findIndex';var forced=true;// Shouldn't skip holes
if(KEY in[])Array(1)[KEY](function(){forced=false;});$export($export.P+$export.F*forced,'Array',{findIndex:function findIndex(callbackfn/* , that = undefined */){return $find(this,callbackfn,arguments.length>1?arguments[1]:undefined);}});__webpack_require__(35)(KEY);/***/},/* 320 *//***/function(module,exports,__webpack_require__){__webpack_require__(42)('Array');/***/},/* 321 *//***/function(module,exports,__webpack_require__){var global=__webpack_require__(2);var inheritIfRequired=__webpack_require__(87);var dP=__webpack_require__(8).f;var gOPN=__webpack_require__(41).f;var isRegExp=__webpack_require__(62);var $flags=__webpack_require__(64);var $RegExp=global.RegExp;var Base=$RegExp;var proto=$RegExp.prototype;var re1=/a/g;var re2=/a/g;// "new" creates a new object, old webkit buggy here
var CORRECT_NEW=new $RegExp(re1)!==re1;if(__webpack_require__(7)&&(!CORRECT_NEW||__webpack_require__(3)(function(){re2[__webpack_require__(6)('match')]=false;// RegExp constructor can alter flags and IsRegExp works correct with @@match
return $RegExp(re1)!=re1||$RegExp(re2)==re2||$RegExp(re1,'i')!='/a/i';}))){$RegExp=function RegExp(p,f){var tiRE=this instanceof $RegExp;var piRE=isRegExp(p);var fiU=f===undefined;return!tiRE&&piRE&&p.constructor===$RegExp&&fiU?p:inheritIfRequired(CORRECT_NEW?new Base(piRE&&!fiU?p.source:p,f):Base((piRE=p instanceof $RegExp)?p.source:p,piRE&&fiU?$flags.call(p):f),tiRE?this:proto,$RegExp);};var proxy=function proxy(key){key in $RegExp||dP($RegExp,key,{configurable:true,get:function get(){return Base[key];},set:function set(it){Base[key]=it;}});};for(var keys=gOPN(Base),i=0;keys.length>i;){proxy(keys[i++]);}proto.constructor=$RegExp;$RegExp.prototype=proto;__webpack_require__(16)(global,'RegExp',$RegExp);}__webpack_require__(42)('RegExp');/***/},/* 322 *//***/function(module,exports,__webpack_require__){"use strict";__webpack_require__(151);var anObject=__webpack_require__(1);var $flags=__webpack_require__(64);var DESCRIPTORS=__webpack_require__(7);var TO_STRING='toString';var $toString=/./[TO_STRING];var define=function define(fn){__webpack_require__(16)(RegExp.prototype,TO_STRING,fn,true);};// 21.2.5.14 RegExp.prototype.toString()
if(__webpack_require__(3)(function(){return $toString.call({source:'a',flags:'b'})!='/a/b';})){define(function toString(){var R=anObject(this);return'/'.concat(R.source,'/','flags'in R?R.flags:!DESCRIPTORS&&R instanceof RegExp?$flags.call(R):undefined);});// FF44- RegExp#toString has a wrong name
}else if($toString.name!=TO_STRING){define(function toString(){return $toString.call(this);});}/***/},/* 323 *//***/function(module,exports,__webpack_require__){// @@match logic
__webpack_require__(65)('match',1,function(defined,MATCH,$match){// 21.1.3.11 String.prototype.match(regexp)
return[function match(regexp){'use strict';var O=defined(this);var fn=regexp==undefined?undefined:regexp[MATCH];return fn!==undefined?fn.call(regexp,O):new RegExp(regexp)[MATCH](String(O));},$match];});/***/},/* 324 *//***/function(module,exports,__webpack_require__){// @@replace logic
__webpack_require__(65)('replace',2,function(defined,REPLACE,$replace){// 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
return[function replace(searchValue,replaceValue){'use strict';var O=defined(this);var fn=searchValue==undefined?undefined:searchValue[REPLACE];return fn!==undefined?fn.call(searchValue,O,replaceValue):$replace.call(String(O),searchValue,replaceValue);},$replace];});/***/},/* 325 *//***/function(module,exports,__webpack_require__){// @@search logic
__webpack_require__(65)('search',1,function(defined,SEARCH,$search){// 21.1.3.15 String.prototype.search(regexp)
return[function search(regexp){'use strict';var O=defined(this);var fn=regexp==undefined?undefined:regexp[SEARCH];return fn!==undefined?fn.call(regexp,O):new RegExp(regexp)[SEARCH](String(O));},$search];});/***/},/* 326 *//***/function(module,exports,__webpack_require__){// @@split logic
__webpack_require__(65)('split',2,function(defined,SPLIT,$split){'use strict';var isRegExp=__webpack_require__(62);var _split=$split;var $push=[].push;var $SPLIT='split';var LENGTH='length';var LAST_INDEX='lastIndex';if('abbc'[$SPLIT](/(b)*/)[1]=='c'||'test'[$SPLIT](/(?:)/,-1)[LENGTH]!=4||'ab'[$SPLIT](/(?:ab)*/)[LENGTH]!=2||'.'[$SPLIT](/(.?)(.?)/)[LENGTH]!=4||'.'[$SPLIT](/()()/)[LENGTH]>1||''[$SPLIT](/.?/)[LENGTH]){var NPCG=/()??/.exec('')[1]===undefined;// nonparticipating capturing group
// based on es5-shim implementation, need to rework it
$split=function $split(separator,limit){var string=String(this);if(separator===undefined&&limit===0)return[];// If `separator` is not a regex, use native split
if(!isRegExp(separator))return _split.call(string,separator,limit);var output=[];var flags=(separator.ignoreCase?'i':'')+(separator.multiline?'m':'')+(separator.unicode?'u':'')+(separator.sticky?'y':'');var lastLastIndex=0;var splitLimit=limit===undefined?4294967295:limit>>>0;// Make `global` and avoid `lastIndex` issues by working with a copy
var separatorCopy=new RegExp(separator.source,flags+'g');var separator2,match,lastIndex,lastLength,i;// Doesn't need flags gy, but they don't hurt
if(!NPCG)separator2=new RegExp('^'+separatorCopy.source+'$(?!\\s)',flags);while(match=separatorCopy.exec(string)){// `separatorCopy.lastIndex` is not reliable cross-browser
lastIndex=match.index+match[0][LENGTH];if(lastIndex>lastLastIndex){output.push(string.slice(lastLastIndex,match.index));// Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
// eslint-disable-next-line no-loop-func
if(!NPCG&&match[LENGTH]>1)match[0].replace(separator2,function(){for(i=1;i<arguments[LENGTH]-2;i++){if(arguments[i]===undefined)match[i]=undefined;}});if(match[LENGTH]>1&&match.index<string[LENGTH])$push.apply(output,match.slice(1));lastLength=match[0][LENGTH];lastLastIndex=lastIndex;if(output[LENGTH]>=splitLimit)break;}if(separatorCopy[LAST_INDEX]===match.index)separatorCopy[LAST_INDEX]++;// Avoid an infinite loop
}if(lastLastIndex===string[LENGTH]){if(lastLength||!separatorCopy.test(''))output.push('');}else output.push(string.slice(lastLastIndex));return output[LENGTH]>splitLimit?output.slice(0,splitLimit):output;};// Chakra, V8
}else if('0'[$SPLIT](undefined,0)[LENGTH]){$split=function $split(separator,limit){return separator===undefined&&limit===0?[]:_split.call(this,separator,limit);};}// 21.1.3.17 String.prototype.split(separator, limit)
return[function split(separator,limit){var O=defined(this);var fn=separator==undefined?undefined:separator[SPLIT];return fn!==undefined?fn.call(separator,O,limit):$split.call(String(O),separator,limit);},$split];});/***/},/* 327 *//***/function(module,exports,__webpack_require__){"use strict";var LIBRARY=__webpack_require__(38);var global=__webpack_require__(2);var ctx=__webpack_require__(22);var classof=__webpack_require__(55);var $export=__webpack_require__(0);var isObject=__webpack_require__(5);var aFunction=__webpack_require__(12);var anInstance=__webpack_require__(43);var forOf=__webpack_require__(44);var speciesConstructor=__webpack_require__(66);var task=__webpack_require__(102).set;var microtask=__webpack_require__(103)();var newPromiseCapabilityModule=__webpack_require__(104);var perform=__webpack_require__(152);var promiseResolve=__webpack_require__(153);var PROMISE='Promise';var TypeError=global.TypeError;var process=global.process;var $Promise=global[PROMISE];var isNode=classof(process)=='process';var empty=function empty(){/* empty */};var Internal,newGenericPromiseCapability,OwnPromiseCapability,Wrapper;var newPromiseCapability=newGenericPromiseCapability=newPromiseCapabilityModule.f;var USE_NATIVE=!!function(){try{// correct subclassing with @@species support
var promise=$Promise.resolve(1);var FakePromise=(promise.constructor={})[__webpack_require__(6)('species')]=function(exec){exec(empty,empty);};// unhandled rejections tracking support, NodeJS Promise without it fails @@species test
return(isNode||typeof PromiseRejectionEvent=='function')&&promise.then(empty)instanceof FakePromise;}catch(e){/* empty */}}();// helpers
var sameConstructor=LIBRARY?function(a,b){// with library wrapper special case
return a===b||a===$Promise&&b===Wrapper;}:function(a,b){return a===b;};var isThenable=function isThenable(it){var then;return isObject(it)&&typeof(then=it.then)=='function'?then:false;};var notify=function notify(promise,isReject){if(promise._n)return;promise._n=true;var chain=promise._c;microtask(function(){var value=promise._v;var ok=promise._s==1;var i=0;var run=function run(reaction){var handler=ok?reaction.ok:reaction.fail;var resolve=reaction.resolve;var reject=reaction.reject;var domain=reaction.domain;var result,then;try{if(handler){if(!ok){if(promise._h==2)onHandleUnhandled(promise);promise._h=1;}if(handler===true)result=value;else{if(domain)domain.enter();result=handler(value);if(domain)domain.exit();}if(result===reaction.promise){reject(TypeError('Promise-chain cycle'));}else if(then=isThenable(result)){then.call(result,resolve,reject);}else resolve(result);}else reject(value);}catch(e){reject(e);}};while(chain.length>i){run(chain[i++]);}// variable length - can't use forEach
promise._c=[];promise._n=false;if(isReject&&!promise._h)onUnhandled(promise);});};var onUnhandled=function onUnhandled(promise){task.call(global,function(){var value=promise._v;var unhandled=isUnhandled(promise);var result,handler,console;if(unhandled){result=perform(function(){if(isNode){process.emit('unhandledRejection',value,promise);}else if(handler=global.onunhandledrejection){handler({promise:promise,reason:value});}else if((console=global.console)&&console.error){console.error('Unhandled promise rejection',value);}});// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
promise._h=isNode||isUnhandled(promise)?2:1;}promise._a=undefined;if(unhandled&&result.e)throw result.v;});};var isUnhandled=function isUnhandled(promise){if(promise._h==1)return false;var chain=promise._a||promise._c;var i=0;var reaction;while(chain.length>i){reaction=chain[i++];if(reaction.fail||!isUnhandled(reaction.promise))return false;}return true;};var onHandleUnhandled=function onHandleUnhandled(promise){task.call(global,function(){var handler;if(isNode){process.emit('rejectionHandled',promise);}else if(handler=global.onrejectionhandled){handler({promise:promise,reason:promise._v});}});};var $reject=function $reject(value){var promise=this;if(promise._d)return;promise._d=true;promise=promise._w||promise;// unwrap
promise._v=value;promise._s=2;if(!promise._a)promise._a=promise._c.slice();notify(promise,true);};var $resolve=function $resolve(value){var promise=this;var then;if(promise._d)return;promise._d=true;promise=promise._w||promise;// unwrap
try{if(promise===value)throw TypeError("Promise can't be resolved itself");if(then=isThenable(value)){microtask(function(){var wrapper={_w:promise,_d:false};// wrap
try{then.call(value,ctx($resolve,wrapper,1),ctx($reject,wrapper,1));}catch(e){$reject.call(wrapper,e);}});}else{promise._v=value;promise._s=1;notify(promise,false);}}catch(e){$reject.call({_w:promise,_d:false},e);// wrap
}};// constructor polyfill
if(!USE_NATIVE){// 25.4.3.1 Promise(executor)
$Promise=function Promise(executor){anInstance(this,$Promise,PROMISE,'_h');aFunction(executor);Internal.call(this);try{executor(ctx($resolve,this,1),ctx($reject,this,1));}catch(err){$reject.call(this,err);}};// eslint-disable-next-line no-unused-vars
Internal=function Promise(executor){this._c=[];// <- awaiting reactions
this._a=undefined;// <- checked in isUnhandled reactions
this._s=0;// <- state
this._d=false;// <- done
this._v=undefined;// <- value
this._h=0;// <- rejection state, 0 - default, 1 - handled, 2 - unhandled
this._n=false;// <- notify
};Internal.prototype=__webpack_require__(45)($Promise.prototype,{// 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
then:function then(onFulfilled,onRejected){var reaction=newPromiseCapability(speciesConstructor(this,$Promise));reaction.ok=typeof onFulfilled=='function'?onFulfilled:true;reaction.fail=typeof onRejected=='function'&&onRejected;reaction.domain=isNode?process.domain:undefined;this._c.push(reaction);if(this._a)this._a.push(reaction);if(this._s)notify(this,false);return reaction.promise;},// 25.4.5.1 Promise.prototype.catch(onRejected)
'catch':function _catch(onRejected){return this.then(undefined,onRejected);}});OwnPromiseCapability=function OwnPromiseCapability(){var promise=new Internal();this.promise=promise;this.resolve=ctx($resolve,promise,1);this.reject=ctx($reject,promise,1);};newPromiseCapabilityModule.f=newPromiseCapability=function newPromiseCapability(C){return sameConstructor($Promise,C)?new OwnPromiseCapability(C):newGenericPromiseCapability(C);};}$export($export.G+$export.W+$export.F*!USE_NATIVE,{Promise:$Promise});__webpack_require__(48)($Promise,PROMISE);__webpack_require__(42)(PROMISE);Wrapper=__webpack_require__(25)[PROMISE];// statics
$export($export.S+$export.F*!USE_NATIVE,PROMISE,{// 25.4.4.5 Promise.reject(r)
reject:function reject(r){var capability=newPromiseCapability(this);var $$reject=capability.reject;$$reject(r);return capability.promise;}});$export($export.S+$export.F*(LIBRARY||!USE_NATIVE),PROMISE,{// 25.4.4.6 Promise.resolve(x)
resolve:function resolve(x){// instanceof instead of internal slot check because we should fix it without replacement native Promise core
if(x instanceof $Promise&&sameConstructor(x.constructor,this))return x;return promiseResolve(this,x);}});$export($export.S+$export.F*!(USE_NATIVE&&__webpack_require__(63)(function(iter){$Promise.all(iter)['catch'](empty);})),PROMISE,{// 25.4.4.1 Promise.all(iterable)
all:function all(iterable){var C=this;var capability=newPromiseCapability(C);var resolve=capability.resolve;var reject=capability.reject;var result=perform(function(){var values=[];var index=0;var remaining=1;forOf(iterable,false,function(promise){var $index=index++;var alreadyCalled=false;values.push(undefined);remaining++;C.resolve(promise).then(function(value){if(alreadyCalled)return;alreadyCalled=true;values[$index]=value;--remaining||resolve(values);},reject);});--remaining||resolve(values);});if(result.e)reject(result.v);return capability.promise;},// 25.4.4.4 Promise.race(iterable)
race:function race(iterable){var C=this;var capability=newPromiseCapability(C);var reject=capability.reject;var result=perform(function(){forOf(iterable,false,function(promise){C.resolve(promise).then(capability.resolve,reject);});});if(result.e)reject(result.v);return capability.promise;}});/***/},/* 328 *//***/function(module,exports,__webpack_require__){"use strict";var weak=__webpack_require__(158);var validate=__webpack_require__(51);var WEAK_SET='WeakSet';// 23.4 WeakSet Objects
__webpack_require__(67)(WEAK_SET,function(get){return function WeakSet(){return get(this,arguments.length>0?arguments[0]:undefined);};},{// 23.4.3.1 WeakSet.prototype.add(value)
add:function add(value){return weak.def(validate(this,WEAK_SET),value,true);}},weak,false,true);/***/},/* 329 *//***/function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(0);var $typed=__webpack_require__(68);var buffer=__webpack_require__(105);var anObject=__webpack_require__(1);var toAbsoluteIndex=__webpack_require__(39);var toLength=__webpack_require__(9);var isObject=__webpack_require__(5);var ArrayBuffer=__webpack_require__(2).ArrayBuffer;var speciesConstructor=__webpack_require__(66);var $ArrayBuffer=buffer.ArrayBuffer;var $DataView=buffer.DataView;var $isView=$typed.ABV&&ArrayBuffer.isView;var $slice=$ArrayBuffer.prototype.slice;var VIEW=$typed.VIEW;var ARRAY_BUFFER='ArrayBuffer';$export($export.G+$export.W+$export.F*(ArrayBuffer!==$ArrayBuffer),{ArrayBuffer:$ArrayBuffer});$export($export.S+$export.F*!$typed.CONSTR,ARRAY_BUFFER,{// 24.1.3.1 ArrayBuffer.isView(arg)
isView:function isView(it){return $isView&&$isView(it)||isObject(it)&&VIEW in it;}});$export($export.P+$export.U+$export.F*__webpack_require__(3)(function(){return!new $ArrayBuffer(2).slice(1,undefined).byteLength;}),ARRAY_BUFFER,{// 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
slice:function slice(start,end){if($slice!==undefined&&end===undefined)return $slice.call(anObject(this),start);// FF fix
var len=anObject(this).byteLength;var first=toAbsoluteIndex(start,len);var final=toAbsoluteIndex(end===undefined?len:end,len);var result=new(speciesConstructor(this,$ArrayBuffer))(toLength(final-first));var viewS=new $DataView(this);var viewT=new $DataView(result);var index=0;while(first<final){viewT.setUint8(index++,viewS.getUint8(first++));}return result;}});__webpack_require__(42)(ARRAY_BUFFER);/***/},/* 330 *//***/function(module,exports,__webpack_require__){var $export=__webpack_require__(0);$export($export.G+$export.W+$export.F*!__webpack_require__(68).ABV,{DataView:__webpack_require__(105).DataView});/***/},/* 331 *//***/function(module,exports,__webpack_require__){__webpack_require__(31)('Int8',1,function(init){return function Int8Array(data,byteOffset,length){return init(this,data,byteOffset,length);};});/***/},/* 332 *//***/function(module,exports,__webpack_require__){__webpack_require__(31)('Uint8',1,function(init){return function Uint8Array(data,byteOffset,length){return init(this,data,byteOffset,length);};});/***/},/* 333 *//***/function(module,exports,__webpack_require__){__webpack_require__(31)('Uint8',1,function(init){return function Uint8ClampedArray(data,byteOffset,length){return init(this,data,byteOffset,length);};},true);/***/},/* 334 *//***/function(module,exports,__webpack_require__){__webpack_require__(31)('Int16',2,function(init){return function Int16Array(data,byteOffset,length){return init(this,data,byteOffset,length);};});/***/},/* 335 *//***/function(module,exports,__webpack_require__){__webpack_require__(31)('Uint16',2,function(init){return function Uint16Array(data,byteOffset,length){return init(this,data,byteOffset,length);};});/***/},/* 336 *//***/function(module,exports,__webpack_require__){__webpack_require__(31)('Int32',4,function(init){return function Int32Array(data,byteOffset,length){return init(this,data,byteOffset,length);};});/***/},/* 337 *//***/function(module,exports,__webpack_require__){__webpack_require__(31)('Uint32',4,function(init){return function Uint32Array(data,byteOffset,length){return init(this,data,byteOffset,length);};});/***/},/* 338 *//***/function(module,exports,__webpack_require__){__webpack_require__(31)('Float32',4,function(init){return function Float32Array(data,byteOffset,length){return init(this,data,byteOffset,length);};});/***/},/* 339 *//***/function(module,exports,__webpack_require__){__webpack_require__(31)('Float64',8,function(init){return function Float64Array(data,byteOffset,length){return init(this,data,byteOffset,length);};});/***/},/* 340 *//***/function(module,exports,__webpack_require__){// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export=__webpack_require__(0);var aFunction=__webpack_require__(12);var anObject=__webpack_require__(1);var rApply=(__webpack_require__(2).Reflect||{}).apply;var fApply=Function.apply;// MS Edge argumentsList argument is optional
$export($export.S+$export.F*!__webpack_require__(3)(function(){rApply(function(){/* empty */});}),'Reflect',{apply:function apply(target,thisArgument,argumentsList){var T=aFunction(target);var L=anObject(argumentsList);return rApply?rApply(T,thisArgument,L):fApply.call(T,thisArgument,L);}});/***/},/* 341 *//***/function(module,exports,__webpack_require__){// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export=__webpack_require__(0);var create=__webpack_require__(40);var aFunction=__webpack_require__(12);var anObject=__webpack_require__(1);var isObject=__webpack_require__(5);var fails=__webpack_require__(3);var bind=__webpack_require__(140);var rConstruct=(__webpack_require__(2).Reflect||{}).construct;// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG=fails(function(){function F(){/* empty */}return!(rConstruct(function(){/* empty */},[],F)instanceof F);});var ARGS_BUG=!fails(function(){rConstruct(function(){/* empty */});});$export($export.S+$export.F*(NEW_TARGET_BUG||ARGS_BUG),'Reflect',{construct:function construct(Target,args/* , newTarget */){aFunction(Target);anObject(args);var newTarget=arguments.length<3?Target:aFunction(arguments[2]);if(ARGS_BUG&&!NEW_TARGET_BUG)return rConstruct(Target,args,newTarget);if(Target==newTarget){// w/o altered newTarget, optimization for 0-4 arguments
switch(args.length){case 0:return new Target();case 1:return new Target(args[0]);case 2:return new Target(args[0],args[1]);case 3:return new Target(args[0],args[1],args[2]);case 4:return new Target(args[0],args[1],args[2],args[3]);}// w/o altered newTarget, lot of arguments case
var $args=[null];$args.push.apply($args,args);return new(bind.apply(Target,$args))();}// with altered newTarget, not support built-in constructors
var proto=newTarget.prototype;var instance=create(isObject(proto)?proto:Object.prototype);var result=Function.apply.call(Target,instance,args);return isObject(result)?result:instance;}});/***/},/* 342 *//***/function(module,exports,__webpack_require__){// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP=__webpack_require__(8);var $export=__webpack_require__(0);var anObject=__webpack_require__(1);var toPrimitive=__webpack_require__(26);// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S+$export.F*__webpack_require__(3)(function(){// eslint-disable-next-line no-undef
Reflect.defineProperty(dP.f({},1,{value:1}),1,{value:2});}),'Reflect',{defineProperty:function defineProperty(target,propertyKey,attributes){anObject(target);propertyKey=toPrimitive(propertyKey,true);anObject(attributes);try{dP.f(target,propertyKey,attributes);return true;}catch(e){return false;}}});/***/},/* 343 *//***/function(module,exports,__webpack_require__){// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export=__webpack_require__(0);var gOPD=__webpack_require__(19).f;var anObject=__webpack_require__(1);$export($export.S,'Reflect',{deleteProperty:function deleteProperty(target,propertyKey){var desc=gOPD(anObject(target),propertyKey);return desc&&!desc.configurable?false:delete target[propertyKey];}});/***/},/* 344 *//***/function(module,exports,__webpack_require__){"use strict";// 26.1.5 Reflect.enumerate(target)
var $export=__webpack_require__(0);var anObject=__webpack_require__(1);var Enumerate=function Enumerate(iterated){this._t=anObject(iterated);// target
this._i=0;// next index
var keys=this._k=[];// keys
var key;for(key in iterated){keys.push(key);}};__webpack_require__(93)(Enumerate,'Object',function(){var that=this;var keys=that._k;var key;do{if(that._i>=keys.length)return{value:undefined,done:true};}while(!((key=keys[that._i++])in that._t));return{value:key,done:false};});$export($export.S,'Reflect',{enumerate:function enumerate(target){return new Enumerate(target);}});/***/},/* 345 *//***/function(module,exports,__webpack_require__){// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD=__webpack_require__(19);var getPrototypeOf=__webpack_require__(20);var has=__webpack_require__(14);var $export=__webpack_require__(0);var isObject=__webpack_require__(5);var anObject=__webpack_require__(1);function get(target,propertyKey/* , receiver */){var receiver=arguments.length<3?target:arguments[2];var desc,proto;if(anObject(target)===receiver)return target[propertyKey];if(desc=gOPD.f(target,propertyKey))return has(desc,'value')?desc.value:desc.get!==undefined?desc.get.call(receiver):undefined;if(isObject(proto=getPrototypeOf(target)))return get(proto,propertyKey,receiver);}$export($export.S,'Reflect',{get:get});/***/},/* 346 *//***/function(module,exports,__webpack_require__){// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD=__webpack_require__(19);var $export=__webpack_require__(0);var anObject=__webpack_require__(1);$export($export.S,'Reflect',{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(target,propertyKey){return gOPD.f(anObject(target),propertyKey);}});/***/},/* 347 *//***/function(module,exports,__webpack_require__){// 26.1.8 Reflect.getPrototypeOf(target)
var $export=__webpack_require__(0);var getProto=__webpack_require__(20);var anObject=__webpack_require__(1);$export($export.S,'Reflect',{getPrototypeOf:function getPrototypeOf(target){return getProto(anObject(target));}});/***/},/* 348 *//***/function(module,exports,__webpack_require__){// 26.1.9 Reflect.has(target, propertyKey)
var $export=__webpack_require__(0);$export($export.S,'Reflect',{has:function has(target,propertyKey){return propertyKey in target;}});/***/},/* 349 *//***/function(module,exports,__webpack_require__){// 26.1.10 Reflect.isExtensible(target)
var $export=__webpack_require__(0);var anObject=__webpack_require__(1);var $isExtensible=Object.isExtensible;$export($export.S,'Reflect',{isExtensible:function isExtensible(target){anObject(target);return $isExtensible?$isExtensible(target):true;}});/***/},/* 350 *//***/function(module,exports,__webpack_require__){// 26.1.11 Reflect.ownKeys(target)
var $export=__webpack_require__(0);$export($export.S,'Reflect',{ownKeys:__webpack_require__(160)});/***/},/* 351 *//***/function(module,exports,__webpack_require__){// 26.1.12 Reflect.preventExtensions(target)
var $export=__webpack_require__(0);var anObject=__webpack_require__(1);var $preventExtensions=Object.preventExtensions;$export($export.S,'Reflect',{preventExtensions:function preventExtensions(target){anObject(target);try{if($preventExtensions)$preventExtensions(target);return true;}catch(e){return false;}}});/***/},/* 352 *//***/function(module,exports,__webpack_require__){// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP=__webpack_require__(8);var gOPD=__webpack_require__(19);var getPrototypeOf=__webpack_require__(20);var has=__webpack_require__(14);var $export=__webpack_require__(0);var createDesc=__webpack_require__(36);var anObject=__webpack_require__(1);var isObject=__webpack_require__(5);function set(target,propertyKey,V/* , receiver */){var receiver=arguments.length<4?target:arguments[3];var ownDesc=gOPD.f(anObject(target),propertyKey);var existingDescriptor,proto;if(!ownDesc){if(isObject(proto=getPrototypeOf(target))){return set(proto,propertyKey,V,receiver);}ownDesc=createDesc(0);}if(has(ownDesc,'value')){if(ownDesc.writable===false||!isObject(receiver))return false;existingDescriptor=gOPD.f(receiver,propertyKey)||createDesc(0);existingDescriptor.value=V;dP.f(receiver,propertyKey,existingDescriptor);return true;}return ownDesc.set===undefined?false:(ownDesc.set.call(receiver,V),true);}$export($export.S,'Reflect',{set:set});/***/},/* 353 *//***/function(module,exports,__webpack_require__){// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export=__webpack_require__(0);var setProto=__webpack_require__(85);if(setProto)$export($export.S,'Reflect',{setPrototypeOf:function setPrototypeOf(target,proto){setProto.check(target,proto);try{setProto.set(target,proto);return true;}catch(e){return false;}}});/***/},/* 354 *//***/function(module,exports,__webpack_require__){"use strict";// https://github.com/tc39/Array.prototype.includes
var $export=__webpack_require__(0);var $includes=__webpack_require__(58)(true);$export($export.P,'Array',{includes:function includes(el/* , fromIndex = 0 */){return $includes(this,el,arguments.length>1?arguments[1]:undefined);}});__webpack_require__(35)('includes');/***/},/* 355 *//***/function(module,exports,__webpack_require__){"use strict";// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export=__webpack_require__(0);var flattenIntoArray=__webpack_require__(161);var toObject=__webpack_require__(11);var toLength=__webpack_require__(9);var aFunction=__webpack_require__(12);var arraySpeciesCreate=__webpack_require__(99);$export($export.P,'Array',{flatMap:function flatMap(callbackfn/* , thisArg */){var O=toObject(this);var sourceLen,A;aFunction(callbackfn);sourceLen=toLength(O.length);A=arraySpeciesCreate(O,0);flattenIntoArray(A,O,O,sourceLen,0,1,callbackfn,arguments[1]);return A;}});__webpack_require__(35)('flatMap');/***/},/* 356 *//***/function(module,exports,__webpack_require__){"use strict";// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export=__webpack_require__(0);var flattenIntoArray=__webpack_require__(161);var toObject=__webpack_require__(11);var toLength=__webpack_require__(9);var toInteger=__webpack_require__(28);var arraySpeciesCreate=__webpack_require__(99);$export($export.P,'Array',{flatten:function flatten()/* depthArg = 1 */{var depthArg=arguments[0];var O=toObject(this);var sourceLen=toLength(O.length);var A=arraySpeciesCreate(O,0);flattenIntoArray(A,O,O,sourceLen,0,depthArg===undefined?1:toInteger(depthArg));return A;}});__webpack_require__(35)('flatten');/***/},/* 357 *//***/function(module,exports,__webpack_require__){"use strict";// https://github.com/mathiasbynens/String.prototype.at
var $export=__webpack_require__(0);var $at=__webpack_require__(91)(true);$export($export.P,'String',{at:function at(pos){return $at(this,pos);}});/***/},/* 358 *//***/function(module,exports,__webpack_require__){"use strict";// https://github.com/tc39/proposal-string-pad-start-end
var $export=__webpack_require__(0);var $pad=__webpack_require__(162);$export($export.P,'String',{padStart:function padStart(maxLength/* , fillString = ' ' */){return $pad(this,maxLength,arguments.length>1?arguments[1]:undefined,true);}});/***/},/* 359 *//***/function(module,exports,__webpack_require__){"use strict";// https://github.com/tc39/proposal-string-pad-start-end
var $export=__webpack_require__(0);var $pad=__webpack_require__(162);$export($export.P,'String',{padEnd:function padEnd(maxLength/* , fillString = ' ' */){return $pad(this,maxLength,arguments.length>1?arguments[1]:undefined,false);}});/***/},/* 360 *//***/function(module,exports,__webpack_require__){"use strict";// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(49)('trimLeft',function($trim){return function trimLeft(){return $trim(this,1);};},'trimStart');/***/},/* 361 *//***/function(module,exports,__webpack_require__){"use strict";// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(49)('trimRight',function($trim){return function trimRight(){return $trim(this,2);};},'trimEnd');/***/},/* 362 *//***/function(module,exports,__webpack_require__){"use strict";// https://tc39.github.io/String.prototype.matchAll/
var $export=__webpack_require__(0);var defined=__webpack_require__(27);var toLength=__webpack_require__(9);var isRegExp=__webpack_require__(62);var getFlags=__webpack_require__(64);var RegExpProto=RegExp.prototype;var $RegExpStringIterator=function $RegExpStringIterator(regexp,string){this._r=regexp;this._s=string;};__webpack_require__(93)($RegExpStringIterator,'RegExp String',function next(){var match=this._r.exec(this._s);return{value:match,done:match===null};});$export($export.P,'String',{matchAll:function matchAll(regexp){defined(this);if(!isRegExp(regexp))throw TypeError(regexp+' is not a regexp!');var S=String(this);var flags='flags'in RegExpProto?String(regexp.flags):getFlags.call(regexp);var rx=new RegExp(regexp.source,~flags.indexOf('g')?flags:'g'+flags);rx.lastIndex=toLength(regexp.lastIndex);return new $RegExpStringIterator(rx,S);}});/***/},/* 363 *//***/function(module,exports,__webpack_require__){__webpack_require__(81)('asyncIterator');/***/},/* 364 *//***/function(module,exports,__webpack_require__){__webpack_require__(81)('observable');/***/},/* 365 *//***/function(module,exports,__webpack_require__){// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export=__webpack_require__(0);var ownKeys=__webpack_require__(160);var toIObject=__webpack_require__(17);var gOPD=__webpack_require__(19);var createProperty=__webpack_require__(97);$export($export.S,'Object',{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(object){var O=toIObject(object);var getDesc=gOPD.f;var keys=ownKeys(O);var result={};var i=0;var key,desc;while(keys.length>i){desc=getDesc(O,key=keys[i++]);if(desc!==undefined)createProperty(result,key,desc);}return result;}});/***/},/* 366 *//***/function(module,exports,__webpack_require__){// https://github.com/tc39/proposal-object-values-entries
var $export=__webpack_require__(0);var $values=__webpack_require__(163)(false);$export($export.S,'Object',{values:function values(it){return $values(it);}});/***/},/* 367 *//***/function(module,exports,__webpack_require__){// https://github.com/tc39/proposal-object-values-entries
var $export=__webpack_require__(0);var $entries=__webpack_require__(163)(true);$export($export.S,'Object',{entries:function entries(it){return $entries(it);}});/***/},/* 368 *//***/function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(0);var toObject=__webpack_require__(11);var aFunction=__webpack_require__(12);var $defineProperty=__webpack_require__(8);// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__(7)&&$export($export.P+__webpack_require__(69),'Object',{__defineGetter__:function __defineGetter__(P,getter){$defineProperty.f(toObject(this),P,{get:aFunction(getter),enumerable:true,configurable:true});}});/***/},/* 369 *//***/function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(0);var toObject=__webpack_require__(11);var aFunction=__webpack_require__(12);var $defineProperty=__webpack_require__(8);// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__(7)&&$export($export.P+__webpack_require__(69),'Object',{__defineSetter__:function __defineSetter__(P,setter){$defineProperty.f(toObject(this),P,{set:aFunction(setter),enumerable:true,configurable:true});}});/***/},/* 370 *//***/function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(0);var toObject=__webpack_require__(11);var toPrimitive=__webpack_require__(26);var getPrototypeOf=__webpack_require__(20);var getOwnPropertyDescriptor=__webpack_require__(19).f;// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__(7)&&$export($export.P+__webpack_require__(69),'Object',{__lookupGetter__:function __lookupGetter__(P){var O=toObject(this);var K=toPrimitive(P,true);var D;do{if(D=getOwnPropertyDescriptor(O,K))return D.get;}while(O=getPrototypeOf(O));}});/***/},/* 371 *//***/function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(0);var toObject=__webpack_require__(11);var toPrimitive=__webpack_require__(26);var getPrototypeOf=__webpack_require__(20);var getOwnPropertyDescriptor=__webpack_require__(19).f;// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__(7)&&$export($export.P+__webpack_require__(69),'Object',{__lookupSetter__:function __lookupSetter__(P){var O=toObject(this);var K=toPrimitive(P,true);var D;do{if(D=getOwnPropertyDescriptor(O,K))return D.set;}while(O=getPrototypeOf(O));}});/***/},/* 372 *//***/function(module,exports,__webpack_require__){// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export=__webpack_require__(0);$export($export.P+$export.R,'Map',{toJSON:__webpack_require__(164)('Map')});/***/},/* 373 *//***/function(module,exports,__webpack_require__){// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export=__webpack_require__(0);$export($export.P+$export.R,'Set',{toJSON:__webpack_require__(164)('Set')});/***/},/* 374 *//***/function(module,exports,__webpack_require__){// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(70)('Map');/***/},/* 375 *//***/function(module,exports,__webpack_require__){// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(70)('Set');/***/},/* 376 *//***/function(module,exports,__webpack_require__){// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(70)('WeakMap');/***/},/* 377 *//***/function(module,exports,__webpack_require__){// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
__webpack_require__(70)('WeakSet');/***/},/* 378 *//***/function(module,exports,__webpack_require__){// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(71)('Map');/***/},/* 379 *//***/function(module,exports,__webpack_require__){// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(71)('Set');/***/},/* 380 *//***/function(module,exports,__webpack_require__){// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(71)('WeakMap');/***/},/* 381 *//***/function(module,exports,__webpack_require__){// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
__webpack_require__(71)('WeakSet');/***/},/* 382 *//***/function(module,exports,__webpack_require__){// https://github.com/tc39/proposal-global
var $export=__webpack_require__(0);$export($export.G,{global:__webpack_require__(2)});/***/},/* 383 *//***/function(module,exports,__webpack_require__){// https://github.com/tc39/proposal-global
var $export=__webpack_require__(0);$export($export.S,'System',{global:__webpack_require__(2)});/***/},/* 384 *//***/function(module,exports,__webpack_require__){// https://github.com/ljharb/proposal-is-error
var $export=__webpack_require__(0);var cof=__webpack_require__(23);$export($export.S,'Error',{isError:function isError(it){return cof(it)==='Error';}});/***/},/* 385 *//***/function(module,exports,__webpack_require__){// https://rwaldron.github.io/proposal-math-extensions/
var $export=__webpack_require__(0);$export($export.S,'Math',{clamp:function clamp(x,lower,upper){return Math.min(upper,Math.max(lower,x));}});/***/},/* 386 *//***/function(module,exports,__webpack_require__){// https://rwaldron.github.io/proposal-math-extensions/
var $export=__webpack_require__(0);$export($export.S,'Math',{DEG_PER_RAD:Math.PI/180});/***/},/* 387 *//***/function(module,exports,__webpack_require__){// https://rwaldron.github.io/proposal-math-extensions/
var $export=__webpack_require__(0);var RAD_PER_DEG=180/Math.PI;$export($export.S,'Math',{degrees:function degrees(radians){return radians*RAD_PER_DEG;}});/***/},/* 388 *//***/function(module,exports,__webpack_require__){// https://rwaldron.github.io/proposal-math-extensions/
var $export=__webpack_require__(0);var scale=__webpack_require__(166);var fround=__webpack_require__(146);$export($export.S,'Math',{fscale:function fscale(x,inLow,inHigh,outLow,outHigh){return fround(scale(x,inLow,inHigh,outLow,outHigh));}});/***/},/* 389 *//***/function(module,exports,__webpack_require__){// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export=__webpack_require__(0);$export($export.S,'Math',{iaddh:function iaddh(x0,x1,y0,y1){var $x0=x0>>>0;var $x1=x1>>>0;var $y0=y0>>>0;return $x1+(y1>>>0)+(($x0&$y0|($x0|$y0)&~($x0+$y0>>>0))>>>31)|0;}});/***/},/* 390 *//***/function(module,exports,__webpack_require__){// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export=__webpack_require__(0);$export($export.S,'Math',{isubh:function isubh(x0,x1,y0,y1){var $x0=x0>>>0;var $x1=x1>>>0;var $y0=y0>>>0;return $x1-(y1>>>0)-((~$x0&$y0|~($x0^$y0)&$x0-$y0>>>0)>>>31)|0;}});/***/},/* 391 *//***/function(module,exports,__webpack_require__){// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export=__webpack_require__(0);$export($export.S,'Math',{imulh:function imulh(u,v){var UINT16=0xffff;var $u=+u;var $v=+v;var u0=$u&UINT16;var v0=$v&UINT16;var u1=$u>>16;var v1=$v>>16;var t=(u1*v0>>>0)+(u0*v0>>>16);return u1*v1+(t>>16)+((u0*v1>>>0)+(t&UINT16)>>16);}});/***/},/* 392 *//***/function(module,exports,__webpack_require__){// https://rwaldron.github.io/proposal-math-extensions/
var $export=__webpack_require__(0);$export($export.S,'Math',{RAD_PER_DEG:180/Math.PI});/***/},/* 393 *//***/function(module,exports,__webpack_require__){// https://rwaldron.github.io/proposal-math-extensions/
var $export=__webpack_require__(0);var DEG_PER_RAD=Math.PI/180;$export($export.S,'Math',{radians:function radians(degrees){return degrees*DEG_PER_RAD;}});/***/},/* 394 *//***/function(module,exports,__webpack_require__){// https://rwaldron.github.io/proposal-math-extensions/
var $export=__webpack_require__(0);$export($export.S,'Math',{scale:__webpack_require__(166)});/***/},/* 395 *//***/function(module,exports,__webpack_require__){// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export=__webpack_require__(0);$export($export.S,'Math',{umulh:function umulh(u,v){var UINT16=0xffff;var $u=+u;var $v=+v;var u0=$u&UINT16;var v0=$v&UINT16;var u1=$u>>>16;var v1=$v>>>16;var t=(u1*v0>>>0)+(u0*v0>>>16);return u1*v1+(t>>>16)+((u0*v1>>>0)+(t&UINT16)>>>16);}});/***/},/* 396 *//***/function(module,exports,__webpack_require__){// http://jfbastien.github.io/papers/Math.signbit.html
var $export=__webpack_require__(0);$export($export.S,'Math',{signbit:function signbit(x){// eslint-disable-next-line no-self-compare
return(x=+x)!=x?x:x==0?1/x==Infinity:x>0;}});/***/},/* 397 *//***/function(module,exports,__webpack_require__){"use strict";// https://github.com/tc39/proposal-promise-finally
var $export=__webpack_require__(0);var core=__webpack_require__(25);var global=__webpack_require__(2);var speciesConstructor=__webpack_require__(66);var promiseResolve=__webpack_require__(153);$export($export.P+$export.R,'Promise',{'finally':function _finally(onFinally){var C=speciesConstructor(this,core.Promise||global.Promise);var isFunction=typeof onFinally=='function';return this.then(isFunction?function(x){return promiseResolve(C,onFinally()).then(function(){return x;});}:onFinally,isFunction?function(e){return promiseResolve(C,onFinally()).then(function(){throw e;});}:onFinally);}});/***/},/* 398 *//***/function(module,exports,__webpack_require__){"use strict";// https://github.com/tc39/proposal-promise-try
var $export=__webpack_require__(0);var newPromiseCapability=__webpack_require__(104);var perform=__webpack_require__(152);$export($export.S,'Promise',{'try':function _try(callbackfn){var promiseCapability=newPromiseCapability.f(this);var result=perform(callbackfn);(result.e?promiseCapability.reject:promiseCapability.resolve)(result.v);return promiseCapability.promise;}});/***/},/* 399 *//***/function(module,exports,__webpack_require__){var metadata=__webpack_require__(32);var anObject=__webpack_require__(1);var toMetaKey=metadata.key;var ordinaryDefineOwnMetadata=metadata.set;metadata.exp({defineMetadata:function defineMetadata(metadataKey,metadataValue,target,targetKey){ordinaryDefineOwnMetadata(metadataKey,metadataValue,anObject(target),toMetaKey(targetKey));}});/***/},/* 400 *//***/function(module,exports,__webpack_require__){var metadata=__webpack_require__(32);var anObject=__webpack_require__(1);var toMetaKey=metadata.key;var getOrCreateMetadataMap=metadata.map;var store=metadata.store;metadata.exp({deleteMetadata:function deleteMetadata(metadataKey,target/* , targetKey */){var targetKey=arguments.length<3?undefined:toMetaKey(arguments[2]);var metadataMap=getOrCreateMetadataMap(anObject(target),targetKey,false);if(metadataMap===undefined||!metadataMap['delete'](metadataKey))return false;if(metadataMap.size)return true;var targetMetadata=store.get(target);targetMetadata['delete'](targetKey);return!!targetMetadata.size||store['delete'](target);}});/***/},/* 401 *//***/function(module,exports,__webpack_require__){var metadata=__webpack_require__(32);var anObject=__webpack_require__(1);var getPrototypeOf=__webpack_require__(20);var ordinaryHasOwnMetadata=metadata.has;var ordinaryGetOwnMetadata=metadata.get;var toMetaKey=metadata.key;var ordinaryGetMetadata=function ordinaryGetMetadata(MetadataKey,O,P){var hasOwn=ordinaryHasOwnMetadata(MetadataKey,O,P);if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey,O,P);var parent=getPrototypeOf(O);return parent!==null?ordinaryGetMetadata(MetadataKey,parent,P):undefined;};metadata.exp({getMetadata:function getMetadata(metadataKey,target/* , targetKey */){return ordinaryGetMetadata(metadataKey,anObject(target),arguments.length<3?undefined:toMetaKey(arguments[2]));}});/***/},/* 402 *//***/function(module,exports,__webpack_require__){var Set=__webpack_require__(156);var from=__webpack_require__(165);var metadata=__webpack_require__(32);var anObject=__webpack_require__(1);var getPrototypeOf=__webpack_require__(20);var ordinaryOwnMetadataKeys=metadata.keys;var toMetaKey=metadata.key;var ordinaryMetadataKeys=function ordinaryMetadataKeys(O,P){var oKeys=ordinaryOwnMetadataKeys(O,P);var parent=getPrototypeOf(O);if(parent===null)return oKeys;var pKeys=ordinaryMetadataKeys(parent,P);return pKeys.length?oKeys.length?from(new Set(oKeys.concat(pKeys))):pKeys:oKeys;};metadata.exp({getMetadataKeys:function getMetadataKeys(target/* , targetKey */){return ordinaryMetadataKeys(anObject(target),arguments.length<2?undefined:toMetaKey(arguments[1]));}});/***/},/* 403 *//***/function(module,exports,__webpack_require__){var metadata=__webpack_require__(32);var anObject=__webpack_require__(1);var ordinaryGetOwnMetadata=metadata.get;var toMetaKey=metadata.key;metadata.exp({getOwnMetadata:function getOwnMetadata(metadataKey,target/* , targetKey */){return ordinaryGetOwnMetadata(metadataKey,anObject(target),arguments.length<3?undefined:toMetaKey(arguments[2]));}});/***/},/* 404 *//***/function(module,exports,__webpack_require__){var metadata=__webpack_require__(32);var anObject=__webpack_require__(1);var ordinaryOwnMetadataKeys=metadata.keys;var toMetaKey=metadata.key;metadata.exp({getOwnMetadataKeys:function getOwnMetadataKeys(target/* , targetKey */){return ordinaryOwnMetadataKeys(anObject(target),arguments.length<2?undefined:toMetaKey(arguments[1]));}});/***/},/* 405 *//***/function(module,exports,__webpack_require__){var metadata=__webpack_require__(32);var anObject=__webpack_require__(1);var getPrototypeOf=__webpack_require__(20);var ordinaryHasOwnMetadata=metadata.has;var toMetaKey=metadata.key;var ordinaryHasMetadata=function ordinaryHasMetadata(MetadataKey,O,P){var hasOwn=ordinaryHasOwnMetadata(MetadataKey,O,P);if(hasOwn)return true;var parent=getPrototypeOf(O);return parent!==null?ordinaryHasMetadata(MetadataKey,parent,P):false;};metadata.exp({hasMetadata:function hasMetadata(metadataKey,target/* , targetKey */){return ordinaryHasMetadata(metadataKey,anObject(target),arguments.length<3?undefined:toMetaKey(arguments[2]));}});/***/},/* 406 *//***/function(module,exports,__webpack_require__){var metadata=__webpack_require__(32);var anObject=__webpack_require__(1);var ordinaryHasOwnMetadata=metadata.has;var toMetaKey=metadata.key;metadata.exp({hasOwnMetadata:function hasOwnMetadata(metadataKey,target/* , targetKey */){return ordinaryHasOwnMetadata(metadataKey,anObject(target),arguments.length<3?undefined:toMetaKey(arguments[2]));}});/***/},/* 407 *//***/function(module,exports,__webpack_require__){var $metadata=__webpack_require__(32);var anObject=__webpack_require__(1);var aFunction=__webpack_require__(12);var toMetaKey=$metadata.key;var ordinaryDefineOwnMetadata=$metadata.set;$metadata.exp({metadata:function metadata(metadataKey,metadataValue){return function decorator(target,targetKey){ordinaryDefineOwnMetadata(metadataKey,metadataValue,(targetKey!==undefined?anObject:aFunction)(target),toMetaKey(targetKey));};}});/***/},/* 408 *//***/function(module,exports,__webpack_require__){// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export=__webpack_require__(0);var microtask=__webpack_require__(103)();var process=__webpack_require__(2).process;var isNode=__webpack_require__(23)(process)=='process';$export($export.G,{asap:function asap(fn){var domain=isNode&&process.domain;microtask(domain?domain.bind(fn):fn);}});/***/},/* 409 *//***/function(module,exports,__webpack_require__){"use strict";// https://github.com/zenparsing/es-observable
var $export=__webpack_require__(0);var global=__webpack_require__(2);var core=__webpack_require__(25);var microtask=__webpack_require__(103)();var OBSERVABLE=__webpack_require__(6)('observable');var aFunction=__webpack_require__(12);var anObject=__webpack_require__(1);var anInstance=__webpack_require__(43);var redefineAll=__webpack_require__(45);var hide=__webpack_require__(15);var forOf=__webpack_require__(44);var RETURN=forOf.RETURN;var getMethod=function getMethod(fn){return fn==null?undefined:aFunction(fn);};var cleanupSubscription=function cleanupSubscription(subscription){var cleanup=subscription._c;if(cleanup){subscription._c=undefined;cleanup();}};var subscriptionClosed=function subscriptionClosed(subscription){return subscription._o===undefined;};var closeSubscription=function closeSubscription(subscription){if(!subscriptionClosed(subscription)){subscription._o=undefined;cleanupSubscription(subscription);}};var Subscription=function Subscription(observer,subscriber){anObject(observer);this._c=undefined;this._o=observer;observer=new SubscriptionObserver(this);try{var cleanup=subscriber(observer);var subscription=cleanup;if(cleanup!=null){if(typeof cleanup.unsubscribe==='function')cleanup=function cleanup(){subscription.unsubscribe();};else aFunction(cleanup);this._c=cleanup;}}catch(e){observer.error(e);return;}if(subscriptionClosed(this))cleanupSubscription(this);};Subscription.prototype=redefineAll({},{unsubscribe:function unsubscribe(){closeSubscription(this);}});var SubscriptionObserver=function SubscriptionObserver(subscription){this._s=subscription;};SubscriptionObserver.prototype=redefineAll({},{next:function next(value){var subscription=this._s;if(!subscriptionClosed(subscription)){var observer=subscription._o;try{var m=getMethod(observer.next);if(m)return m.call(observer,value);}catch(e){try{closeSubscription(subscription);}finally{throw e;}}}},error:function error(value){var subscription=this._s;if(subscriptionClosed(subscription))throw value;var observer=subscription._o;subscription._o=undefined;try{var m=getMethod(observer.error);if(!m)throw value;value=m.call(observer,value);}catch(e){try{cleanupSubscription(subscription);}finally{throw e;}}cleanupSubscription(subscription);return value;},complete:function complete(value){var subscription=this._s;if(!subscriptionClosed(subscription)){var observer=subscription._o;subscription._o=undefined;try{var m=getMethod(observer.complete);value=m?m.call(observer,value):undefined;}catch(e){try{cleanupSubscription(subscription);}finally{throw e;}}cleanupSubscription(subscription);return value;}}});var $Observable=function Observable(subscriber){anInstance(this,$Observable,'Observable','_f')._f=aFunction(subscriber);};redefineAll($Observable.prototype,{subscribe:function subscribe(observer){return new Subscription(observer,this._f);},forEach:function forEach(fn){var that=this;return new(core.Promise||global.Promise)(function(resolve,reject){aFunction(fn);var subscription=that.subscribe({next:function next(value){try{return fn(value);}catch(e){reject(e);subscription.unsubscribe();}},error:reject,complete:resolve});});}});redefineAll($Observable,{from:function from(x){var C=typeof this==='function'?this:$Observable;var method=getMethod(anObject(x)[OBSERVABLE]);if(method){var observable=anObject(method.call(x));return observable.constructor===C?observable:new C(function(observer){return observable.subscribe(observer);});}return new C(function(observer){var done=false;microtask(function(){if(!done){try{if(forOf(x,false,function(it){observer.next(it);if(done)return RETURN;})===RETURN)return;}catch(e){if(done)throw e;observer.error(e);return;}observer.complete();}});return function(){done=true;};});},of:function of(){for(var i=0,l=arguments.length,items=Array(l);i<l;){items[i]=arguments[i++];}return new(typeof this==='function'?this:$Observable)(function(observer){var done=false;microtask(function(){if(!done){for(var j=0;j<items.length;++j){observer.next(items[j]);if(done)return;}observer.complete();}});return function(){done=true;};});}});hide($Observable.prototype,OBSERVABLE,function(){return this;});$export($export.G,{Observable:$Observable});__webpack_require__(42)('Observable');/***/},/* 410 *//***/function(module,exports,__webpack_require__){// ie9- setTimeout & setInterval additional parameters fix
var global=__webpack_require__(2);var $export=__webpack_require__(0);var invoke=__webpack_require__(61);var partial=__webpack_require__(411);var navigator=global.navigator;var MSIE=!!navigator&&/MSIE .\./.test(navigator.userAgent);// <- dirty ie9- check
var wrap=function wrap(set){return MSIE?function(fn,time/* , ...args */){return set(invoke(partial,[].slice.call(arguments,2),// eslint-disable-next-line no-new-func
typeof fn=='function'?fn:Function(fn)),time);}:set;};$export($export.G+$export.B+$export.F*MSIE,{setTimeout:wrap(global.setTimeout),setInterval:wrap(global.setInterval)});/***/},/* 411 *//***/function(module,exports,__webpack_require__){"use strict";var path=__webpack_require__(412);var invoke=__webpack_require__(61);var aFunction=__webpack_require__(12);module.exports=function()/* ...pargs */{var fn=aFunction(this);var length=arguments.length;var pargs=Array(length);var i=0;var _=path._;var holder=false;while(length>i){if((pargs[i]=arguments[i++])===_)holder=true;}return function()/* ...args */{var that=this;var aLen=arguments.length;var j=0;var k=0;var args;if(!holder&&!aLen)return invoke(fn,pargs,that);args=pargs.slice();if(holder)for(;length>j;j++){if(args[j]===_)args[j]=arguments[k++];}while(aLen>k){args.push(arguments[k++]);}return invoke(fn,args,that);};};/***/},/* 412 *//***/function(module,exports,__webpack_require__){module.exports=__webpack_require__(2);/***/},/* 413 *//***/function(module,exports,__webpack_require__){var $export=__webpack_require__(0);var $task=__webpack_require__(102);$export($export.G+$export.B,{setImmediate:$task.set,clearImmediate:$task.clear});/***/},/* 414 *//***/function(module,exports,__webpack_require__){var $iterators=__webpack_require__(101);var getKeys=__webpack_require__(34);var redefine=__webpack_require__(16);var global=__webpack_require__(2);var hide=__webpack_require__(15);var Iterators=__webpack_require__(50);var wks=__webpack_require__(6);var ITERATOR=wks('iterator');var TO_STRING_TAG=wks('toStringTag');var ArrayValues=Iterators.Array;var DOMIterables={CSSRuleList:true,// TODO: Not spec compliant, should be false.
CSSStyleDeclaration:false,CSSValueList:false,ClientRectList:false,DOMRectList:false,DOMStringList:false,DOMTokenList:true,DataTransferItemList:false,FileList:false,HTMLAllCollection:false,HTMLCollection:false,HTMLFormElement:false,HTMLSelectElement:false,MediaList:true,// TODO: Not spec compliant, should be false.
MimeTypeArray:false,NamedNodeMap:false,NodeList:true,PaintRequestList:false,Plugin:false,PluginArray:false,SVGLengthList:false,SVGNumberList:false,SVGPathSegList:false,SVGPointList:false,SVGStringList:false,SVGTransformList:false,SourceBufferList:false,StyleSheetList:true,// TODO: Not spec compliant, should be false.
TextTrackCueList:false,TextTrackList:false,TouchList:false};for(var collections=getKeys(DOMIterables),i=0;i<collections.length;i++){var NAME=collections[i];var explicit=DOMIterables[NAME];var Collection=global[NAME];var proto=Collection&&Collection.prototype;var key;if(proto){if(!proto[ITERATOR])hide(proto,ITERATOR,ArrayValues);if(!proto[TO_STRING_TAG])hide(proto,TO_STRING_TAG,NAME);Iterators[NAME]=ArrayValues;if(explicit)for(key in $iterators){if(!proto[key])redefine(proto,key,$iterators[key],true);}}}/***/},/* 415 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(global,module){var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof3(obj);};/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */!function(global){"use strict";var Op=Object.prototype;var hasOwn=Op.hasOwnProperty;var undefined;// More compressible than void 0.
var $Symbol=typeof Symbol==="function"?Symbol:{};var iteratorSymbol=$Symbol.iterator||"@@iterator";var asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator";var toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";var inModule=(false?"undefined":_typeof(module))==="object";var runtime=global.regeneratorRuntime;if(runtime){if(inModule){// If regeneratorRuntime is defined globally and we're in a module,
// make the exports object identical to regeneratorRuntime.
module.exports=runtime;}// Don't bother evaluating the rest of this file if the runtime was
// already defined globally.
return;}// Define the runtime globally (as expected by generated code) as either
// module.exports (if we're in a module) or a new, empty object.
runtime=global.regeneratorRuntime=inModule?module.exports:{};function wrap(innerFn,outerFn,self,tryLocsList){// If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator;var generator=Object.create(protoGenerator.prototype);var context=new Context(tryLocsList||[]);// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
generator._invoke=makeInvokeMethod(innerFn,self,context);return generator;}runtime.wrap=wrap;// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)};}catch(err){return{type:"throw",arg:err};}}var GenStateSuspendedStart="suspendedStart";var GenStateSuspendedYield="suspendedYield";var GenStateExecuting="executing";var GenStateCompleted="completed";// Returning this object from the innerFn has the same effect as
// breaking out of the dispatch switch statement.
var ContinueSentinel={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var IteratorPrototype={};IteratorPrototype[iteratorSymbol]=function(){return this;};var getProto=Object.getPrototypeOf;var NativeIteratorPrototype=getProto&&getProto(getProto(values([])));if(NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)){// This environment has a native %IteratorPrototype%; use it instead
// of the polyfill.
IteratorPrototype=NativeIteratorPrototype;}var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);GeneratorFunction.prototype=Gp.constructor=GeneratorFunctionPrototype;GeneratorFunctionPrototype.constructor=GeneratorFunction;GeneratorFunctionPrototype[toStringTagSymbol]=GeneratorFunction.displayName="GeneratorFunction";// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){prototype[method]=function(arg){return this._invoke(method,arg);};});}runtime.isGeneratorFunction=function(genFun){var ctor=typeof genFun==="function"&&genFun.constructor;return ctor?ctor===GeneratorFunction||// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(ctor.displayName||ctor.name)==="GeneratorFunction":false;};runtime.mark=function(genFun){if(Object.setPrototypeOf){Object.setPrototypeOf(genFun,GeneratorFunctionPrototype);}else{genFun.__proto__=GeneratorFunctionPrototype;if(!(toStringTagSymbol in genFun)){genFun[toStringTagSymbol]="GeneratorFunction";}}genFun.prototype=Object.create(Gp);return genFun;};// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
runtime.awrap=function(arg){return{__await:arg};};function AsyncIterator(generator){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if(record.type==="throw"){reject(record.arg);}else{var result=record.arg;var value=result.value;if(value&&(typeof value==="undefined"?"undefined":_typeof(value))==="object"&&hasOwn.call(value,"__await")){return Promise.resolve(value.__await).then(function(value){invoke("next",value,resolve,reject);},function(err){invoke("throw",err,resolve,reject);});}return Promise.resolve(value).then(function(unwrapped){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration. If the Promise is rejected, however, the
// result for this iteration will be rejected with the same
// reason. Note that rejections of yielded Promises are not
// thrown back into the generator function, as is the case
// when an awaited Promise is rejected. This difference in
// behavior between yield and await is important, because it
// allows the consumer to decide what to do with the yielded
// rejection (swallow it and continue, manually .throw it back
// into the generator, abandon iteration, whatever). With
// await, by contrast, there is no opportunity to examine the
// rejection reason outside the generator function, so the
// only option is to throw it from the await expression, and
// let the generator function handle the exception.
result.value=unwrapped;resolve(result);},reject);}}if(_typeof(global.process)==="object"&&global.process.domain){invoke=global.process.domain.bind(invoke);}var previousPromise;function enqueue(method,arg){function callInvokeWithMethodAndArg(){return new Promise(function(resolve,reject){invoke(method,arg,resolve,reject);});}return previousPromise=// If enqueue has been called before, then we want to wait until
// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
previousPromise?previousPromise.then(callInvokeWithMethodAndArg,// Avoid propagating failures to Promises returned by later
// invocations of the iterator.
callInvokeWithMethodAndArg):callInvokeWithMethodAndArg();}// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
this._invoke=enqueue;}defineIteratorMethods(AsyncIterator.prototype);AsyncIterator.prototype[asyncIteratorSymbol]=function(){return this;};runtime.AsyncIterator=AsyncIterator;// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
runtime.async=function(innerFn,outerFn,self,tryLocsList){var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList));return runtime.isGeneratorFunction(outerFn)?iter// If outerFn is a generator, return the full iterator.
:iter.next().then(function(result){return result.done?result.value:iter.next();});};function makeInvokeMethod(innerFn,self,context){var state=GenStateSuspendedStart;return function invoke(method,arg){if(state===GenStateExecuting){throw new Error("Generator is already running");}if(state===GenStateCompleted){if(method==="throw"){throw arg;}// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return doneResult();}context.method=method;context.arg=arg;while(true){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult;}}if(context.method==="next"){// Setting context._sent for legacy support of Babel's
// function.sent implementation.
context.sent=context._sent=context.arg;}else if(context.method==="throw"){if(state===GenStateSuspendedStart){state=GenStateCompleted;throw context.arg;}context.dispatchException(context.arg);}else if(context.method==="return"){context.abrupt("return",context.arg);}state=GenStateExecuting;var record=tryCatch(innerFn,self,context);if(record.type==="normal"){// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
state=context.done?GenStateCompleted:GenStateSuspendedYield;if(record.arg===ContinueSentinel){continue;}return{value:record.arg,done:context.done};}else if(record.type==="throw"){state=GenStateCompleted;// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
context.method="throw";context.arg=record.arg;}}};}// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(method===undefined){// A .throw or .return when the delegate iterator has no .throw
// method always terminates the yield* loop.
context.delegate=null;if(context.method==="throw"){if(delegate.iterator.return){// If the delegate iterator has a return method, give it a
// chance to clean up.
context.method="return";context.arg=undefined;maybeInvokeDelegate(delegate,context);if(context.method==="throw"){// If maybeInvokeDelegate(context) changed context.method from
// "return" to "throw", let that override the TypeError below.
return ContinueSentinel;}}context.method="throw";context.arg=new TypeError("The iterator does not provide a 'throw' method");}return ContinueSentinel;}var record=tryCatch(method,delegate.iterator,context.arg);if(record.type==="throw"){context.method="throw";context.arg=record.arg;context.delegate=null;return ContinueSentinel;}var info=record.arg;if(!info){context.method="throw";context.arg=new TypeError("iterator result is not an object");context.delegate=null;return ContinueSentinel;}if(info.done){// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
context[delegate.resultName]=info.value;// Resume execution at the desired location (see delegateYield).
context.next=delegate.nextLoc;// If context.method was "throw" but the delegate handled the
// exception, let the outer generator proceed normally. If
// context.method was "next", forget context.arg since it has been
// "consumed" by the delegate iterator. If context.method was
// "return", allow the original .return call to continue in the
// outer generator.
if(context.method!=="return"){context.method="next";context.arg=undefined;}}else{// Re-yield the result returned by the delegate method.
return info;}// The delegate iterator is finished, so forget it and continue with
// the outer generator.
context.delegate=null;return ContinueSentinel;}// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
defineIteratorMethods(Gp);Gp[toStringTagSymbol]="Generator";// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
Gp[iteratorSymbol]=function(){return this;};Gp.toString=function(){return"[object Generator]";};function pushTryEntry(locs){var entry={tryLoc:locs[0]};if(1 in locs){entry.catchLoc=locs[1];}if(2 in locs){entry.finallyLoc=locs[2];entry.afterLoc=locs[3];}this.tryEntries.push(entry);}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal";delete record.arg;entry.completion=record;}function Context(tryLocsList){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}];tryLocsList.forEach(pushTryEntry,this);this.reset(true);}runtime.keys=function(object){var keys=[];for(var key in object){keys.push(key);}keys.reverse();// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return function next(){while(keys.length){var key=keys.pop();if(key in object){next.value=key;next.done=false;return next;}}// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
next.done=true;return next;};};function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod){return iteratorMethod.call(iterable);}if(typeof iterable.next==="function"){return iterable;}if(!isNaN(iterable.length)){var i=-1,next=function next(){while(++i<iterable.length){if(hasOwn.call(iterable,i)){next.value=iterable[i];next.done=false;return next;}}next.value=undefined;next.done=true;return next;};return next.next=next;}}// Return an iterator with no values.
return{next:doneResult};}runtime.values=values;function doneResult(){return{value:undefined,done:true};}Context.prototype={constructor:Context,reset:function reset(skipTempReset){this.prev=0;this.next=0;// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=undefined;this.done=false;this.delegate=null;this.method="next";this.arg=undefined;this.tryEntries.forEach(resetTryEntry);if(!skipTempReset){for(var name in this){// Not sure about the optimal order of these conditions:
if(name.charAt(0)==="t"&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))){this[name]=undefined;}}}},stop:function stop(){this.done=true;var rootEntry=this.tryEntries[0];var rootRecord=rootEntry.completion;if(rootRecord.type==="throw"){throw rootRecord.arg;}return this.rval;},dispatchException:function dispatchException(exception){if(this.done){throw exception;}var context=this;function handle(loc,caught){record.type="throw";record.arg=exception;context.next=loc;if(caught){// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
context.method="next";context.arg=undefined;}return!!caught;}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];var record=entry.completion;if(entry.tryLoc==="root"){// Exception thrown outside of any try block that could handle
// it, so set the completion value of the entire function to
// throw the exception.
return handle("end");}if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc");var hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true);}else if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc);}}else if(hasCatch){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true);}}else if(hasFinally){if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc);}}else{throw new Error("try statement without catch or finally");}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break;}}if(finallyEntry&&(type==="break"||type==="continue")&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc){// Ignore the finally entry if control is not jumping to a
// location outside the try/catch block.
finallyEntry=null;}var record=finallyEntry?finallyEntry.completion:{};record.type=type;record.arg=arg;if(finallyEntry){this.method="next";this.next=finallyEntry.finallyLoc;return ContinueSentinel;}return this.complete(record);},complete:function complete(record,afterLoc){if(record.type==="throw"){throw record.arg;}if(record.type==="break"||record.type==="continue"){this.next=record.arg;}else if(record.type==="return"){this.rval=this.arg=record.arg;this.method="return";this.next="end";}else if(record.type==="normal"&&afterLoc){this.next=afterLoc;}return ContinueSentinel;},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc){this.complete(entry.completion,entry.afterLoc);resetTryEntry(entry);return ContinueSentinel;}}},"catch":function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if(record.type==="throw"){var thrown=record.arg;resetTryEntry(entry);}return thrown;}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw new Error("illegal catch attempt");},delegateYield:function delegateYield(iterable,resultName,nextLoc){this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc};if(this.method==="next"){// Deliberately forget the last sent value so that we don't
// accidentally pass it on to the delegate.
this.arg=undefined;}return ContinueSentinel;}};}(// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
(typeof global==="undefined"?"undefined":_typeof(global))==="object"?global:(typeof window==="undefined"?"undefined":_typeof(window))==="object"?window:(typeof self==="undefined"?"undefined":_typeof(self))==="object"?self:this);/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(133),__webpack_require__(10)(module));/***/},/* 416 *//***/function(module,exports,__webpack_require__){__webpack_require__(417);module.exports=__webpack_require__(25).RegExp.escape;/***/},/* 417 *//***/function(module,exports,__webpack_require__){// https://github.com/benjamingr/RexExp.escape
var $export=__webpack_require__(0);var $re=__webpack_require__(418)(/[\\^$*+?.()|[\]{}]/g,'\\$&');$export($export.S,'RegExp',{escape:function escape(it){return $re(it);}});/***/},/* 418 *//***/function(module,exports){module.exports=function(regExp,replace){var replacer=replace===Object(replace)?function(part){return replace[part];}:replace;return function(it){return String(it).replace(regExp,replacer);};};/***/},/* 419 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"mm-course-tab"},[_c('div',{staticStyle:{"width":"100%","overflow":"scroll","-webkit-overflow-scrolling":"touch"}},[_c('tab',{style:{width:_vm.width},attrs:{"defaultColor":"#666","activeColor":"#dc2832","line-width":2,"active-color":"#fc378c"},model:{value:_vm.index,callback:function callback($$v){_vm.index=$$v;},expression:"index"}},_vm._l(_vm.course,function(item,index){return _c('tab-item',{key:index,staticClass:"vux-center",attrs:{"disabled":!item,"selected":_vm.selected===item}},[_vm._v(_vm._s(item.name))]);}))],1),_vm._v(" "),_c('swiper',{attrs:{"show-dots":false,"id":"my-swiper","min-moving-distance":_vm.minMovingDistance},model:{value:_vm.index,callback:function callback($$v){_vm.index=$$v;},expression:"index"}},_vm._l(_vm.swiperList,function(item,index){return _c('swiper-item',{key:index},[_c('div',{staticClass:"tab-swiper vux-center"},[_c('scroller',{ref:"scrollerBottom",refInFor:true,attrs:{"height":_vm.platform==="Win32"?"auto":_vm.scrollsHeight,"lock-x":"","lock-y":_vm.lock,"scroll-bottom-offst":200},on:{"on-scroll-bottom":_vm.onScrollBottom,"on-scroll":_vm.onScroll}},[_c('div',[_vm._l(item.message,function(it){return item.message?_c('mm-course-list',{key:it,attrs:{"message":it,"to":"course_detl?courseId="+it._id}}):_vm._e();}),_vm._v(" "),!item.message?_c('load-more',{attrs:{"tip":"loading"}}):!item.count?_c('div',{staticClass:"nomessage"},[_c('img',{attrs:{"src":"https://cdn.xueyuan.xiaobao100.com/shield/image/plugin-pic/none.png","alt":""}}),_vm._v(" "),_c('span',[_vm._v("这里什么都没有，去别的地方看看吧~")])]):item.message&&item.message.length===item.count?_c('div',{staticClass:"weui-loadmore weui-loadmore_line"},[_c('span',{staticClass:"weui-loadmore__tips"},[_vm._v("已经到底了")])]):_vm._e()],2)])],1)]);})),_vm._v(" "),_c('em',{staticClass:"ifshowall",on:{"click":function click($event){_vm.showallType=!_vm.showallType;}}},[_c('i',{class:{on:_vm.showallType}})]),_vm._v(" "),_vm.showallType?_c('div',{staticClass:"all"},[_vm._v("全部分类")]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"alllist",class:{showallType:_vm.showallType}},[_c('dl',_vm._l(_vm.courses,function(item,ind){return _c('dd',{class:{on:ind===_vm.index},on:{"click":function click($event){_vm.selectType(ind);}}},[_vm._v(_vm._s(item.name))]);}))])],1);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns};/* harmony default export */__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-hot-reload-api").rerender("data-v-512ec87c",esExports);}}/***/},/* 420 *//***/function(module,exports){// removed by extract-text-webpack-plugin
/***/}]));});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Vue.js v2.4.2
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

function isFalse(v) {
  return v === false;
}

/**
 * Check if value is primitive
 */
function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean';
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}

var _toString = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]';
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex(val) {
  var n = parseFloat(val);
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString(val) {
  return val == null ? '' : (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? JSON.stringify(val, null, 2) : String(val);
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,is');

/**
 * Remove an item from an array
 */
function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
});

/**
 * Simple bind, faster than native
 */
function bind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn;
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

/**
 * Mix properties into target object.
 */
function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to;
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop(a, b, c) {}

/**
 * Always return false.
 */
var no = function no(a, b, c) {
  return false;
};

/**
 * Return same value
 */
var identity = function identity(_) {
  return _;
};

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys(modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || []);
  }, []).join(',');
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual(a, b) {
  if (a === b) {
    return true;
  }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}

function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }
  return -1;
}

/**
 * Ensure a function is called only once.
 */
function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = ['component', 'directive', 'filter'];

var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated'];

/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
};

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

/**
 * Define a property.
 */
function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }
      obj = obj[segments[i]];
    }
    return obj;
  };
}

/*  */

var warn = noop;
var tip = noop;
var formatComponentName = null; // work around flow check

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function classify(str) {
    return str.replace(classifyRE, function (c) {
      return c.toUpperCase();
    }).replace(/[-_]/g, '');
  };

  warn = function warn(msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && !config.silent) {
      console.error("[Vue warn]: " + msg + trace);
    }
  };

  tip = function tip(msg, vm) {
    if (hasConsole && !config.silent) {
      console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
    }
  };

  formatComponentName = function formatComponentName(vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }
    var name = typeof vm === 'string' ? vm : typeof vm === 'function' && vm.options ? vm.options.name : vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
  };

  var repeat = function repeat(str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) {
        res += str;
      }
      if (n > 1) {
        str += str;
      }
      n >>= 1;
    }
    return res;
  };

  var generateComponentTrace = function generateComponentTrace(vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree.map(function (vm, i) {
        return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
      }).join('\n');
    } else {
      return "\n\n(found in " + formatComponentName(vm) + ")";
    }
  };
}

/*  */

function handleError(err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    if (true) {
      warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err;
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefix has a "watch" function on Object.prototype...
var nativeWatch = {}.watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    }); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function isServerRendering() {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer;
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function logError(err) {
      console.error(err);
    };
    timerFunc = function timerFunc() {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) {
        setTimeout(noop);
      }
    };
  } else if (typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]')) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function timerFunc() {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function timerFunc() {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick(cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      });
    }
  };
}();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = function () {
    function Set() {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has(key) {
      return this.set[key] === true;
    };
    Set.prototype.add = function add(key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  }();
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep() {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub(sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend() {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify() {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget(_target) {
  if (Dep.target) {
    targetStack.push(Dep.target);
  }
  Dep.target = _target;
}

function popTarget() {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    var args = [],
        len = arguments.length;
    while (len--) {
      args[len] = arguments[len];
    }var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) {
      ob.observeArray(inserted);
    }
    // notify change
    ob.dep.notify();
    return result;
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto ? protoAugment : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk(obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray(items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment(target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe(value, asRootData) {
  if (!isObject(value)) {
    return;
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (observerState.shouldConvert && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob;
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1(obj, key, val, customSetter, shallow) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set(target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val;
  }
  var ob = target.__ob__;
  if (target._isVue || ob && ob.vmCount) {
    "development" !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }
  if (!ob) {
    target[key] = val;
    return val;
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val;
}

/**
 * Delete a property and trigger change if necessary.
 */
function del(target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return;
  }
  var ob = target.__ob__;
  if (target._isVue || ob && ob.vmCount) {
    "development" !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }
  if (!hasOwn(target, key)) {
    return;
  }
  delete target[key];
  if (!ob) {
    return;
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
    }
    return defaultStrat(parent, child);
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData(to, from) {
  if (!from) {
    return to;
  }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

/**
 * Data
 */
function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn() {
      return mergeData(typeof childVal === 'function' ? childVal.call(this) : childVal, typeof parentVal === 'function' ? parentVal.call(this) : parentVal);
    };
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);

      return parentVal;
    }
    return mergeDataOrFn.call(this, parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook(parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets(parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal ? extend(res, childVal) : res;
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) {
    parentVal = undefined;
  }
  if (childVal === nativeWatch) {
    childVal = undefined;
  }
  /* istanbul ignore if */
  if (!childVal) {
    return Object.create(parentVal || null);
  }
  if (!parentVal) {
    return childVal;
  }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }
  return ret;
};

/**
 * Other object hashes.
 */
strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal) {
  if (!parentVal) {
    return childVal;
  }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) {
    extend(ret, childVal);
  }
  return ret;
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

/**
 * Validate component names
 */
function checkComponents(options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps(options) {
  var props = options.props;
  if (!props) {
    return;
  }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val) ? val : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject(options) {
  var inject = options.inject;
  if (Array.isArray(inject)) {
    var normalized = options.inject = {};
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = inject[i];
    }
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives(options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions(parent, child, vm) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child);
  normalizeInject(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) {
    return assets[id];
  }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) {
    return assets[camelizedId];
  }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId];
  }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }
  return res;
}

/*  */

function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (true) {
    assertProp(prop, key, value, vm, absent);
  }
  return value;
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined;
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}

/**
 * Assert whether a prop is valid.
 */
function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    warn('Missing required prop: "' + name + '"', vm);
    return;
  }
  if (value == null && !prop.required) {
    return;
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn('Invalid prop: type check failed for prop "' + name + '".' + ' Expected ' + expectedTypes.map(capitalize).join(', ') + ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.', vm);
    return;
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType(value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === expectedType.toLowerCase();
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  };
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType(fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isType(type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type);
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true;
    }
  }
  /* istanbul ignore next */
  return false;
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
    mark = function mark(tag) {
      return perf.mark(tag);
    };
    measure = function measure(name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
  );

  var warnNonPresent = function warnNonPresent(target, key) {
    warn("Property or method \"" + key + "\" is not defined on the instance but " + "referenced during render. Make sure to declare reactive data " + "properties in the data option.", target);
  };

  var hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set(target, key, value) {
        if (isBuiltInModifier(key)) {
          warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  var hasHandler = {
    has: function has(target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed;
    }
  };

  var getHandler = {
    get: function get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key];
    }
  };

  initProxy = function initProxy(vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance;
};

Object.defineProperties(VNode.prototype, prototypeAccessors);

var createEmptyVNode = function createEmptyVNode(text) {
  if (text === void 0) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode(vnode) {
  var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  return cloned;
}

function cloneVNodes(vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res;
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  };
});

function createFnInvoker(fns) {
  function invoker() {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments);
    }
  }
  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove$$1, vm) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "development" !== 'production' && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook(def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData(data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return;
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
          tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
        }
      }
      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }
  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true;
    }
  }
  return false;
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }
  return children;
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren(children) {
  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function isTextNode(node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}

function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') {
      continue;
    }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, (nestedIndex || '') + "_" + i));
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        last.text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res;
}

/*  */

function ensureCtor(comp, base) {
  if (comp.__esModule && comp.default) {
    comp = comp.default;
  }
  return isObject(comp) ? base.extend(comp) : comp;
}

function createAsyncPlaceholder(factory, data, context, children, tag) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node;
}

function resolveAsyncComponent(factory, baseCtor, context) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp;
  }

  if (isDef(factory.resolved)) {
    return factory.resolved;
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function forceRender() {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject( true ? "timeout (" + res.timeout + "ms)" : null);
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}

/*  */

function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && isDef(c.componentOptions)) {
        return c;
      }
    }
  }
}

/*  */

/*  */

function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add(event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1(event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin(Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm;
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm;
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm;
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }
    return vm;
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, "event handler for \"" + event + "\"");
        }
      }
    }
    return vm;
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots(children, context) {
  var slots = {};
  if (!children) {
    return slots;
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) && child.data && child.data.slot != null) {
      var name = child.data.slot;
      var slot = slots[name] || (slots[name] = []);
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots;
}

function isWhitespace(node) {
  return node.isComment || node.text === ' ';
}

function resolveScopedSlots(fns, // see flow/vnode
res) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res;
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle(vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */
      , vm.$options._parentElm, vm.$options._refElm);
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return;
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
        warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        warn('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function updateComponent() {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(name + " render", startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(name + " patch", startTag, endTag);
    };
  } else {
    updateComponent = function updateComponent() {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  parentVnode.data.scopedSlots || // has new scoped slots
  vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listensers hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data && parentVnode.data.attrs;
  vm.$listeners = listeners;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) {
      return true;
    }
  }
  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return;
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, hook + " hook");
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue() {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) {
    return a.id - b.id;
  });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
        break;
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks(queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent(vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks(queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher(watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher(vm, expOrFn, cb, options) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true ? expOrFn.toString() : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
    }
  }
  this.value = this.lazy ? undefined : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get() {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
    } else {
      throw e;
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value;
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep(dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update() {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run() {
  if (this.active) {
    var value = this.get();
    if (value !== this.value ||
    // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated.
    isObject(value) || this.deep) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend() {
  var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown() {
  var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse(val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if (!isA && !isObject(val) || !Object.isExtensible(val)) {
    return;
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return;
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) {
    initProps(vm, opts.props);
  }
  if (opts.methods) {
    initMethods(vm, opts.methods);
  }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) {
    initComputed(vm, opts.computed);
  }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function checkOptionType(vm, name) {
  var option = vm.$options[name];
  if (!isPlainObject(option)) {
    warn("component option \"" + name + "\" should be an object.", vm);
  }
}

function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function loop(key) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      if (isReservedAttribute(key) || config.isReservedAttr(key)) {
        warn("\"" + key + "\" is a reserved attribute and cannot be used as component prop.", vm);
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) {
    loop(key);
  }observerState.shouldConvert = true;
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn("method \"" + key + "\" has already been defined as a data property.", vm);
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData(data, vm) {
  try {
    return data.call(vm);
  } catch (e) {
    handleError(e, vm, "data()");
    return {};
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed(vm, computed) {
  "development" !== 'production' && checkOptionType(vm, 'computed');
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn("Getter is missing for computed property \"" + key + "\".", vm);
    }
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn("The computed property \"" + key + "\" is already defined in data.", vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
      }
    }
  }
}

function defineComputed(target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get ? userDef.cache !== false ? createComputedGetter(key) : userDef.get : noop;
    sharedPropertyDefinition.set = userDef.set ? userDef.set : noop;
  }
  if ("development" !== 'production' && sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value;
    }
  };
}

function initMethods(vm, methods) {
  "development" !== 'production' && checkOptionType(vm, 'methods');
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    if (true) {
      if (methods[key] == null) {
        warn("method \"" + key + "\" has an undefined value in the component definition. " + "Did you reference the function correctly?", vm);
      }
      if (props && hasOwn(props, key)) {
        warn("method \"" + key + "\" has already been defined as a prop.", vm);
      }
    }
  }
}

function initWatch(vm, watch) {
  "development" !== 'production' && checkOptionType(vm, 'watch');
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, keyOrFn, handler, options) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options);
}

function stateMixin(Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () {
    return this._data;
  };
  var propsDef = {};
  propsDef.get = function () {
    return this._props;
  };
  if (true) {
    dataDef.set = function (newData) {
      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options);
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };
}

/*  */

function initProvide(vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function initInjections(vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject(inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break;
        }
        source = source.$parent;
      }
      if ("development" !== 'production' && !source) {
        warn("Injection \"" + key + "\" not found", vm);
      }
    }
    return result;
  }
}

/*  */

function createFunctionalComponent(Ctor, propsData, data, context, children) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || {});
    }
  } else {
    if (isDef(data.attrs)) {
      mergeProps(props, data.attrs);
    }
    if (isDef(data.props)) {
      mergeProps(props, data.props);
    }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function h(a, b, c, d) {
    return createElement(_context, a, b, c, d, true);
  };
  var vnode = Ctor.options.render.call(null, h, {
    data: data,
    props: props,
    children: children,
    parent: context,
    listeners: data.on || {},
    injections: resolveInject(Ctor.options.inject, context),
    slots: function slots() {
      return resolveSlots(children, context);
    }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    vnode.functionalOptions = Ctor.options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode;
}

function mergeProps(to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init(vnode, hydrating, parentElm, refElm) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(child, options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
    );
  },

  insert: function insert(vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy(vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent(Ctor, data, context, children, tag) {
  if (isUndef(Ctor)) {
    return;
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn("Invalid Component definition: " + String(Ctor), context);
    }
    return;
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }, asyncFactory);
  return vnode;
}

function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
parent, // activeInstance in lifecycle state
parentElm, refElm) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options);
}

function mergeHooks(data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1(one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  };
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel(options, data) {
  var prop = options.model && options.model.prop || 'value';
  var event = options.model && options.model.event || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (isDef(data) && isDef(data.__ob__)) {
    "development" !== 'production' && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
    return createEmptyVNode();
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode();
  }
  // warn against non-primitive key
  if ("development" !== 'production' && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
    warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) {
      applyNS(vnode, ns);
    }
    return vnode;
  } else {
    return createEmptyVNode();
  }
}

function applyNS(vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && isUndef(child.ns)) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList(val, render) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    ret._isVList = true;
  }
  return ret;
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot(name, fallback, props, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) {
    // scoped slot
    props = props || {};
    if (bindObject) {
      props = extend(extend({}, bindObject), props);
    }
    return scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && "development" !== 'production') {
      slotNodes._rendered && warn("Duplicate presence of slot \"" + name + "\" found in the same render tree " + "- this will likely cause render errors.", this);
      slotNodes._rendered = true;
    }
    return slotNodes || fallback;
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter(id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity;
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes(eventKeyCode, key, builtInAlias) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1;
  } else {
    return keyCodes !== eventKeyCode;
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function loop(key) {
        if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on["update:" + key] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) {
        loop(key);
      }
    }
  }
  return data;
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic(index, isInFor) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree);
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, "__static__" + index, false);
  return tree;
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce(tree, index, key) {
  markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], key + "_" + i, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners(data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn('v-on without argument expects an Object value', this);
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(ours, existing) : ours;
      }
    }
  }
  return data;
}

/*  */

function initRender(vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, false);
  };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, true);
  };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', vm.$options._parentListeners, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs, null, true);
    defineReactive$$1(vm, '$listeners', vm.$options._parentListeners, null, true);
  }
}

function renderMixin(Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = _parentVnode && _parentVnode.data.scopedSlots || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        vnode = vm.$options.renderError ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e) : vm._vnode;
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode;
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
  Vue.prototype._g = bindObjectListeners;
}

/*  */

var uid$1 = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-init:" + vm._uid;
      endTag = "vue-perf-end:" + vm._uid;
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(vm._name + " init", startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options;
}

function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {};
      }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified;
}

function dedupe(latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res;
  } else {
    return latest;
  }
}

function Vue$3(options) {
  if ("development" !== 'production' && !(this instanceof Vue$3)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse(Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this;
  };
}

/*  */

function initMixin$1(Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this;
  };
}

/*  */

function initExtend(Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var name = extendOptions.name || Super.options.name;
    if (true) {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
      }
    }

    var Sub = function VueComponent(options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps$1(Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1(Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters(Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if (true) {
          if (type === 'component' && config.isReservedTag(id)) {
            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp, Array];

function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  /* istanbul ignore next */
  return false;
}

function pruneCache(cache, current, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        if (cachedNode !== current) {
          pruneCacheEntry(cachedNode);
        }
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry(vnode) {
  if (vnode) {
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created() {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed() {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include(val) {
      pruneCache(this.cache, this._vnode, function (name) {
        return matches(val, name);
      });
    },
    exclude: function exclude(val) {
      pruneCache(this.cache, this._vnode, function (name) {
        return !matches(val, name);
      });
    }
  },

  render: function render() {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (this.include && !matches(this.include, name) || this.exclude && matches(this.exclude, name))) {
        return vnode;
      }
      var key = vnode.key == null
      // same constructor may get registered as different local components
      // so cid alone is not enough (#3269)
      ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode;
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI(Vue) {
  // config
  var configDef = {};
  configDef.get = function () {
    return config;
  };
  if (true) {
    configDef.set = function () {
      warn('Do not replace the Vue.config object, set individual fields instead.');
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext;
  }
});

Vue$3.version = '2.4.2';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function mustUseProp(tag, type, attr) {
  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function isXlink(name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};

var getXlinkProp = function getXlinkProp(name) {
  return isXlink(name) ? name.slice(6, name.length) : '';
};

var isFalsyAttrValue = function isFalsyAttrValue(val) {
  return val == null || val === false;
};

/*  */

function genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class);
}

function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class) ? [child.class, parent.class] : parent.class
  };
}

function renderClass(staticClass, dynamicClass) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */
  return '';
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }
  if (isObject(value)) {
    return stringifyObject(value);
  }
  if (typeof value === 'string') {
    return value;
  }
  /* istanbul ignore next */
  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) {
        res += ' ';
      }
      res += stringified;
    }
  }
  return res;
}

function stringifyObject(value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) {
        res += ' ';
      }
      res += key;
    }
  }
  return res;
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot');

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

var isPreTag = function isPreTag(tag) {
  return tag === 'pre';
};

var isReservedTag = function isReservedTag(tag) {
  return isHTMLTag(tag) || isSVG(tag);
};

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math';
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement(tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true;
  }
  if (isReservedTag(tag)) {
    return false;
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn('Cannot find element: ' + el);
      return document.createElement('div');
    }
    return selected;
  } else {
    return el;
  }
}

/*  */

function createElement$1(tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm;
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm;
}

function createElementNS(namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function setAttribute(node, key, val) {
  node.setAttribute(key, val);
}

var nodeOps = Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create(_, vnode) {
    registerRef(vnode);
  },
  update: function update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy(vnode) {
    registerRef(vnode, true);
  }
};

function registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) {
    return;
  }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode(a, b) {
  return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType(a, b) {
  if (a.tag !== 'input') {
    return true;
  }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB;
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) {
      map[key] = i;
    }
  }
  return map;
}

function createPatchFunction(backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove$$1() {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1;
  }

  function removeNode(el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          inPre++;
        }
        if (!inPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) && config.isUnknownElement(tag)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }
      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break;
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) {
        i.create(emptyNode, vnode);
      }
      if (isDef(i.insert)) {
        insertedVnodeQueue.push(vnode);
      }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope(vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) && i !== vnode.context && isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) {
        i(vnode);
      }
      for (i = 0; i < cbs.destroy.length; ++i) {
        cbs.destroy[i](vnode);
      }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) {
          // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if ("development" !== 'production' && !elmToMove) {
            warn('It seems there are duplicate keys that is causing an update error. ' + 'Make sure each v-for item has a unique key.');
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return;
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) {
        cbs.update[i](oldVnode, vnode);
      }
      if (isDef(i = data.hook) && isDef(i = i.update)) {
        i(oldVnode, vnode);
      }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) {
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
        }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
        i(oldVnode, vnode);
      }
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate(elm, vnode, insertedVnodeQueue) {
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.elm = elm;
      vnode.isAsyncPlaceholder = true;
      return true;
    }
    if (true) {
      if (!assertNodeMatch(elm, vnode)) {
        return false;
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode, true /* hydrating */);
      }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break;
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if ("development" !== 'production' && typeof console !== 'undefined' && !bailed) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false;
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true;
  }

  function assertNodeMatch(node, vnode) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) {
        invokeDestroyHook(oldVnode);
      }
      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if (true) {
              warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(vnode, insertedVnodeQueue,
        // extremely rare edge case: do not insert if old element is in a
        // leaving transition. Only happens when combining transition +
        // keep-alive + HOCs. (#4590)
        oldElm._leaveCb ? null : parentElm$1, nodeOps.nextSibling(oldElm));

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function callInsert() {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1(dirs, vm) {
  var res = Object.create(null);
  if (!dirs) {
    return res;
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res;
}

function getRawDirName(dir) {
  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
}

function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
    }
  }
}

var baseModules = [ref, directives];

/*  */

function updateAttrs(oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return;
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return;
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr(el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
    return;
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters(exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) {
        inSingle = false;
      }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) {
        inDouble = false;
      }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) {
        inTemplateString = false;
      }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) {
        inRegex = false;
      }
    } else if (c === 0x7C && // pipe
    exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22:
          inDouble = true;break; // "
        case 0x27:
          inSingle = true;break; // '
        case 0x60:
          inTemplateString = true;break; // `
        case 0x28:
          paren++;break; // (
        case 0x29:
          paren--;break; // )
        case 0x5B:
          square++;break; // [
        case 0x5D:
          square--;break; // ]
        case 0x7B:
          curly++;break; // {
        case 0x7D:
          curly--;break; // }
      }
      if (c === 0x2f) {
        // /
        var j = i - 1;
        var p = void 0;
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') {
            break;
          }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter() {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression;
}

function wrapFilter(exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return "_f(\"" + filter + "\")(" + exp + ")";
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return "_f(\"" + name + "\")(" + exp + "," + args;
  }
}

/*  */

function baseWarn(msg) {
  console.error("[Vue compiler]: " + msg);
}

function pluckModuleFunction(modules, key) {
  return modules ? modules.map(function (m) {
    return m[key];
  }).filter(function (_) {
    return _;
  }) : [];
}

function addProp(el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr(el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective(el, name, rawName, value, arg, modifiers) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler(el, name, value, modifiers, important, warn) {
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if ("development" !== 'production' && warn && modifiers && modifiers.prevent && modifiers.passive) {
    warn('passive and prevent can\'t be used together. ' + 'Passive handler can\'t prevent default event.');
  }
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers && modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }
  var events;
  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr(el, name, getStatic) {
  var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue);
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue);
    }
  }
}

function getAndRemoveAttr(el, name) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break;
      }
    }
  }
  return val;
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel(el, value, modifiers) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression = "(typeof " + baseValueExpression + " === 'string'" + "? " + baseValueExpression + ".trim()" + ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: "(" + value + ")",
    expression: "\"" + value + "\"",
    callback: "function (" + baseValueExpression + ") {" + assignment + "}"
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode(value, assignment) {
  var modelRs = parseModel(value);
  if (modelRs.idx === null) {
    return value + "=" + assignment;
  } else {
    return "$set(" + modelRs.exp + ", " + modelRs.idx + ", " + assignment + ")";
  }
}

/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;

function parseModel(val) {
  str = val;
  len = str.length;
  index$1 = expressionPos = expressionEndPos = 0;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    return {
      exp: val,
      idx: null
    };
  }

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.substring(0, expressionPos),
    idx: val.substring(expressionPos + 1, expressionEndPos)
  };
}

function next() {
  return str.charCodeAt(++index$1);
}

function eof() {
  return index$1 >= len;
}

function isStringStart(chr) {
  return chr === 0x22 || chr === 0x27;
}

function parseBracket(chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue;
    }
    if (chr === 0x5B) {
      inBracket++;
    }
    if (chr === 0x5D) {
      inBracket--;
    }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break;
    }
  }
}

function parseString(chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break;
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model(el, dir, _warn) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (tag === 'input' && dynamicType) {
      warn$1("<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" + "v-model does not support dynamic input types. Use v-if branches instead.");
    }
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.");
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false;
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false;
  } else if (true) {
    warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "v-model is not supported on this element type. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.');
  }

  // ensure runtime directive metadata
  return true;
}

function genCheckboxModel(el, value, modifiers) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked', "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === 'true' ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
  addHandler(el, CHECKBOX_RADIO_TOKEN, "var $$a=" + value + "," + '$$el=$event.target,' + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + 'if(Array.isArray($$a)){' + "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," + '$$i=_i($$a,$$v);' + "if($$el.checked){$$i<0&&(" + value + "=$$a.concat($$v))}" + "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" + "}else{" + genAssignmentCode(value, '$$c') + "}", null, true);
}

function genRadioModel(el, value, modifiers) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
  addProp(el, 'checked', "_q(" + value + "," + valueBinding + ")");
  addHandler(el, CHECKBOX_RADIO_TOKEN, genAssignmentCode(value, valueBinding), null, true);
}

function genSelect(el, value, modifiers) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + genAssignmentCode(value, assignment);
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel(el, value, modifiers) {
  var type = el.attrsMap.type;
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', "(" + value + ")");
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents(on) {
  var event;
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1(event, _handler, once$$1, capture, passive) {
  if (once$$1) {
    var oldHandler = _handler;
    var _target = target$1; // save current target element in closure
    _handler = function handler(ev) {
      var res = arguments.length === 1 ? oldHandler(ev) : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, _handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(event, _handler, supportsPassive ? { capture: capture, passive: passive } : capture);
}

function remove$2(event, handler, capture, _target) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners(oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return;
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps(oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return;
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) {
        vnode.children.length = 0;
      }
      if (cur === oldProps[key]) {
        continue;
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue(elm, vnode, checkVal) {
  return !elm.composing && (vnode.tag === 'option' || isDirty(elm, checkVal) || isInputChanged(elm, checkVal));
}

function isDirty(elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try {
    notInFocus = document.activeElement !== elm;
  } catch (e) {}
  return notInFocus && elm.value !== checkVal;
}

function isInputChanged(elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers) && modifiers.number) {
    return toNumber(value) !== toNumber(newVal);
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim();
  }
  return value !== newVal;
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData(data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle ? extend(data.staticStyle, style) : style;
}

// normalize possible array / string values into Object
function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }
  return bindingStyle;
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if (styleData = normalizeStyleData(vnode.data)) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while (parentNode = parentNode.parent) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res;
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function setProp(el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && prop in emptyStyle) {
    return prop;
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name;
    }
  }
});

function updateStyle(oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
    return;
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likley wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition(def$$1) {
  if (!def$$1) {
    return;
  }
  /* istanbul ignore else */
  if ((typeof def$$1 === 'undefined' ? 'undefined' : _typeof(def$$1)) === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res;
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1);
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: name + "-enter",
    enterToClass: name + "-enter-to",
    enterActiveClass: name + "-enter-active",
    leaveClass: name + "-leave",
    leaveToClass: name + "-leave-to",
    leaveActiveClass: name + "-leave-active"
  };
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout;

function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass(el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds(el, expectedType, cb) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) {
    return cb();
  }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function end() {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function onEnd(e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
}

function toMs(s) {
  return Number(s.slice(0, -1)) * 1000;
}

/*  */

function enter(vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return;
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return;
  }

  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;

  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;

  var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave(vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm();
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return;
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration(val, name, vnode) {
  if (typeof val !== 'number') {
    warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
  } else if (isNaN(val)) {
    warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
  }
}

function isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val);
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength(fn) {
  if (isUndef(fn)) {
    return false;
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
  } else {
    return (fn._length || fn.length) > 1;
  }
}

function _enter(_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1(vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [attrs, klass, events, domProps, style, transition];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted(el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function cb() {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) {
        return !looseEqual(o, prevOptions[i]);
      })) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
    return;
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return;
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function getValue(option) {
  return '_value' in option ? option._value : option.value;
}

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) {
    return;
  }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}

var show = {
  bind: function bind(el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update(el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) {
      return;
    }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}

function extractTransitionData(comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data;
}

function placeholder(h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    });
  }
}

function hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}

function isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}

function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render(h) {
    var this$1 = this;

    var children = this.$options._renderChildren;
    if (!children) {
      return;
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) {
      return c.tag || isAsyncPlaceholder(c);
    });
    /* istanbul ignore if */
    if (!children.length) {
      return;
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
      warn('invalid <transition> mode: ' + mode, this.$parent);
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild;
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild;
    }

    if (this._leaving) {
      return placeholder(h, rawChild);
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + this._uid + "-";
    child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) {
      return d.name === 'show';
    })) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild);
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild;
        }
        var delayedLeave;
        var performLeave = function performLeave() {
          delayedLeave();
        };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        });
      }
    }

    return rawChild;
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render(h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
          warn("<transition-group> children must be keyed: <" + name + ">");
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children);
  },

  beforeUpdate: function beforeUpdate() {
    // force removing pass
    this.__patch__(this._vnode, this.kept, false, // hydrating
    true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || 'v') + '-move';
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove(el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false;
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove;
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) {
          removeClass(clone, cls);
        });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return this._hasMove = info.hasTransform;
    }
  }
};

function callPendingCbs(c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if ("development" !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
    }
  }
  if ("development" !== 'production' && config.productionTip !== false && inBrowser && typeof console !== 'undefined') {
    console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
  }
}, 0);

/*  */

// check whether current browser encodes a char inside attribute values
function shouldDecode(content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = "<div a=\"" + content + "\"/>";
  return div.innerHTML.indexOf(encoded) > 0;
}

// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
});

function parseText(text, delimiters) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return;
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while (match = tagRE.exec(text)) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push("_s(" + exp + ")");
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+');
}

/*  */

function transformNode(el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn("class=\"" + staticClass + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.');
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData(el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + el.staticClass + ",";
  }
  if (el.classBinding) {
    data += "class:" + el.classBinding + ",";
  }
  return data;
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1(el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn("style=\"" + staticStyle + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div style="{{ val }}">, use <div :style="val">.');
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1(el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + el.staticStyle + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + el.styleBinding + "),";
  }
  return data;
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

var modules$1 = [klass$1, style$1];

/*  */

function text(el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', "_s(" + dir.value + ")");
  }
}

/*  */

function html(el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', "_s(" + dir.value + ")");
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr');

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source');

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track');

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var decoder;

var he = {
  decode: function decode(html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent;
  }
};

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var singleAttrIdentifier = /([^\s"'<>/=]+)/;
var singleAttrAssign = /(?:=)/;
var singleAttrValues = [
// attr value double quotes
/"([^"]*)"+/.source,
// attr value, single quotes
/'([^']*)'+/.source,
// attr value, no quotes
/([^\s"'=<>`]+)/.source];
var attribute = new RegExp('^\\s*' + singleAttrIdentifier.source + '(?:\\s*(' + singleAttrAssign.source + ')' + '\\s*(?:' + singleAttrValues.join('|') + '))?');

// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
var startTagOpen = new RegExp('^<' + qnameCapture);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function shouldIgnoreFirstNewline(tag, html) {
  return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
};

function decodeAttr(value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) {
    return decodingMap[match];
  });
}

function parseHTML(html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue;
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue;
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue;
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue;
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue;
        }
      }

      var text = void 0,
          rest = void 0,
          next = void 0;
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) {
            break;
          }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text.replace(/<!--([\s\S]*?)-->/g, '$1').replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return '';
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn("Mal-formatted tag at end of template: \"" + html + "\"");
      }
      break;
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance(n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag() {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match;
      }
    }
  }

  function handleStartTag(match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') {
          delete args[3];
        }
        if (args[4] === '') {
          delete args[4];
        }
        if (args[5] === '') {
          delete args[5];
        }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, options.shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag(tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) {
      start = index;
    }
    if (end == null) {
      end = index;
    }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break;
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' && (i > pos || !tagName) && options.warn) {
          options.warn("tag <" + stack[i].tag + "> has no matching end tag.");
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;

/**
 * Convert HTML string to AST.
 */
function parse(template, options) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce(msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre(element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldKeepComment: options.comments,
    start: function start(tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        parent: currentParent,
        children: []
      };
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<" + tag + ">" + ', as they will not be parsed.');
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        preTransforms[i](element, options);
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else {
        processFor(element);
        processIf(element);
        processOnce(element);
        processKey(element);

        // determine whether this is a plain element after
        // removing structural attributes
        element.plain = !element.key && !attrs.length;

        processRef(element);
        processSlot(element);
        processComponent(element);
        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
          transforms[i$1](element, options);
        }
        processAttrs(element);
      }

      function checkRootConstraints(el) {
        if (true) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce("Cannot use <" + el.tag + "> as component root element because it may " + 'contain multiple nodes.');
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements.');
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (true) {
          warnOnce("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.");
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) {
          // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }
      // apply post-transforms
      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
        postTransforms[i$2](element, options);
      }
    },

    end: function end() {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars(text) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce('Component template requires a root element, rather than just text.');
          } else if (text = text.trim()) {
            warnOnce("text \"" + text + "\" outside root element will be ignored.");
          }
        }
        return;
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text) {
        return;
      }
      var children = currentParent.children;
      text = inPre || text.trim() ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
      // only preserve whitespace if its not right after a starting tag
      : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment(text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root;
}

function processPre(el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs(el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processKey(el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef(el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor(el) {
  var exp;
  if (exp = getAndRemoveAttr(el, 'v-for')) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      "development" !== 'production' && warn$2("Invalid v-for expression: " + exp);
      return;
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf(el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions(el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') + " " + "used on element <" + el.tag + "> without corresponding v-if.");
  }
}

function findPrevElement(children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i];
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2("text \"" + children[i].text.trim() + "\" between v-if and v-else(-if) " + "will be ignored.");
      }
      children.pop();
    }
  }
}

function addIfCondition(el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce(el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot(el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.");
    }
  } else {
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    }
    if (el.tag === 'template') {
      el.slotScope = getAndRemoveAttr(el, 'scope');
    }
  }
}

function processComponent(el) {
  var binding;
  if (binding = getBindingAttr(el, 'is')) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs(el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) {
        // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') {
              name = 'innerHTML';
            }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(el, "update:" + camelize(name), genAssignmentCode(value, "$event"));
          }
        }
        if (isProp || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) {
        // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else {
        // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(name + "=\"" + value + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.');
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function checkInFor(el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true;
    }
    parent = parent.parent;
  }
  return false;
}

function parseModifiers(name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) {
      ret[m.slice(1)] = true;
    });
    return ret;
  }
}

function makeAttrsMap(attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if ("development" !== 'production' && map[attrs[i].name] && !isIE && !isEdge) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map;
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag(el) {
  return el.tag === 'script' || el.tag === 'style';
}

function isForbiddenTag(el) {
  return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug(attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res;
}

function checkForAliasModel(el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.");
    }
    _el = _el.parent;
  }
}

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize(root, options) {
  if (!root) {
    return;
  }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1(keys) {
  return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs' + (keys ? ',' + keys : ''));
}

function markStatic$1(node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (!isPlatformReservedTag(node.tag) && node.tag !== 'slot' && node.attrsMap['inline-template'] == null) {
      return;
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots(node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
      node.staticRoot = true;
      return;
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic(node) {
  if (node.type === 2) {
    // expression
    return false;
  }
  if (node.type === 3) {
    // text
    return true;
  }
  return !!(node.pre || !node.hasBindings && // no dynamic bindings
  !node.if && !node.for && // not v-if or v-for or v-else
  !isBuiltInTag(node.tag) && // not a built-in
  isPlatformReservedTag(node.tag) && // not a component
  !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
}

function isDirectChildOfTemplateFor(node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false;
    }
    if (node.for) {
      return true;
    }
  }
  return false;
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function genGuard(condition) {
  return "if(" + condition + ")return null;";
};

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers(events, isNative, warn) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    var handler = events[name];
    // #5330: warn click.right, since right clicks do not actually fire click events.
    if ("development" !== 'production' && name === 'click' && handler && handler.modifiers && handler.modifiers.right) {
      warn("Use \"contextmenu\" instead of \"click.right\" since right clicks " + "do not actually fire \"click\" events.");
    }
    res += "\"" + name + "\":" + genHandler(name, handler) + ",";
  }
  return res.slice(0, -1) + '}';
}

function genHandler(name, handler) {
  if (!handler) {
    return 'function(){}';
  }

  if (Array.isArray(handler)) {
    return "[" + handler.map(function (handler) {
      return genHandler(name, handler);
    }).join(',') + "]";
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression ? handler.value : "function($event){" + handler.value + "}"; // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath ? handler.value + '($event)' : isFunctionExpression ? "(" + handler.value + ")($event)" : handler.value;
    return "function($event){" + code + handlerCode + "}";
  }
}

function genKeyFilter(keys) {
  return "if(!('button' in $event)&&" + keys.map(genFilterCode).join('&&') + ")return null;";
}

function genFilterCode(key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return "$event.keyCode!==" + keyVal;
  }
  var alias = keyCodes[key];
  return "_k($event.keyCode," + JSON.stringify(key) + (alias ? ',' + JSON.stringify(alias) : '') + ")";
}

/*  */

function on(el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) {
    return "_g(" + code + "," + dir.value + ")";
  };
}

/*  */

function bind$1(el, dir) {
  el.wrapData = function (code) {
    return "_b(" + code + ",'" + el.tag + "'," + dir.value + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")";
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState(options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) {
    return !isReservedTag(el.tag);
  };
  this.onceId = 0;
  this.staticRenderFns = [];
};

function generate(ast, options) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: "with(this){return " + code + "}",
    staticRenderFns: state.staticRenderFns
  };
}

function genElement(el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state);
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state);
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state);
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state);
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0';
  } else if (el.tag === 'slot') {
    return genSlot(el, state);
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + el.tag + "'" + (data ? "," + data : '') + (children ? "," + children : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code;
  }
}

// hoist static sub-trees out
function genStatic(el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push("with(this){return " + genElement(el, state) + "}");
  return "_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")";
}

// v-once
function genOnce(el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state);
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break;
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn("v-once can only be used inside v-for that is keyed. ");
      return genElement(el, state);
    }
    return "_o(" + genElement(el, state) + "," + state.onceId++ + (key ? "," + key : "") + ")";
  } else {
    return genStatic(el, state);
  }
}

function genIf(el, state, altGen, altEmpty) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
}

function genIfConditions(conditions, state, altGen, altEmpty) {
  if (!conditions.length) {
    return altEmpty || '_e()';
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions, state, altGen, altEmpty);
  } else {
    return "" + genTernaryExp(condition.block);
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp(el) {
    return altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state);
  }
}

function genFor(el, state, altGen, altHelper) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
  var iterator2 = el.iterator2 ? "," + el.iterator2 : '';

  if ("development" !== 'production' && state.maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key) {
    state.warn("<" + el.tag + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + (altGen || genElement)(el, state) + '})';
}

function genData$2(el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) {
    data += dirs + ',';
  }

  // key
  if (el.key) {
    data += "key:" + el.key + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + el.ref + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + el.tag + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + genProps(el.attrs) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + genProps(el.props) + "},";
  }
  // event handlers
  if (el.events) {
    data += genHandlers(el.events, false, state.warn) + ",";
  }
  if (el.nativeEvents) {
    data += genHandlers(el.nativeEvents, true, state.warn) + ",";
  }
  // slot target
  if (el.slotTarget) {
    data += "slot:" + el.slotTarget + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += genScopedSlots(el.scopedSlots, state) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data;
}

function genDirectives(el, state) {
  var dirs = el.directives;
  if (!dirs) {
    return;
  }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : '') + (dir.arg ? ",arg:\"" + dir.arg + "\"" : '') + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']';
  }
}

function genInlineTemplate(el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (el.children.length > 1 || ast.type !== 1)) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function (code) {
      return "function(){" + code + "}";
    }).join(',') + "]}";
  }
}

function genScopedSlots(slots, state) {
  return "scopedSlots:_u([" + Object.keys(slots).map(function (key) {
    return genScopedSlot(key, slots[key], state);
  }).join(',') + "])";
}

function genScopedSlot(key, el, state) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state);
  }
  return "{key:" + key + ",fn:function(" + String(el.attrsMap.scope) + "){" + "return " + (el.tag === 'template' ? genChildren(el, state) || 'void 0' : genElement(el, state)) + "}}";
}

function genForScopedSlot(key, el, state) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
  var iterator2 = el.iterator2 ? "," + el.iterator2 : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + genScopedSlot(key, el, state) + '})';
}

function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 && el$1.for && el$1.tag !== 'template' && el$1.tag !== 'slot') {
      return (altGenElement || genElement)(el$1, state);
    }
    var normalizationType = checkSkip ? getNormalizationType(children, state.maybeComponent) : 0;
    var gen = altGenNode || genNode;
    return "[" + children.map(function (c) {
      return gen(c, state);
    }).join(',') + "]" + (normalizationType ? "," + normalizationType : '');
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType(children, maybeComponent) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue;
    }
    if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function (c) {
      return needsNormalization(c.block);
    })) {
      res = 2;
      break;
    }
    if (maybeComponent(el) || el.ifConditions && el.ifConditions.some(function (c) {
      return maybeComponent(c.block);
    })) {
      res = 1;
    }
  }
  return res;
}

function needsNormalization(el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot';
}

function genNode(node, state) {
  if (node.type === 1) {
    return genElement(node, state);
  }if (node.type === 3 && node.isComment) {
    return genComment(node);
  } else {
    return genText(node);
  }
}

function genText(text) {
  return "_v(" + (text.type === 2 ? text.expression // no need for () because already wrapped in _s()
  : transformSpecialNewlines(JSON.stringify(text.text))) + ")";
}

function genComment(comment) {
  return "_e(" + JSON.stringify(comment.text) + ")";
}

function genSlot(el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? "," + children : '');
  var attrs = el.attrs && "{" + el.attrs.map(function (a) {
    return camelize(a.name) + ":" + a.value;
  }).join(',') + "}";
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')';
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent(componentName, el, state) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return "_c(" + componentName + "," + genData$2(el, state) + (children ? "," + children : '') + ")";
}

function genProps(props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + prop.name + "\":" + transformSpecialNewlines(prop.value) + ",";
  }
  return res.slice(0, -1);
}

// #3895, #4268
function transformSpecialNewlines(text) {
  return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + 'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// check valid identifier for v-for
var identRE = /[A-Za-z_$][\w$]*/;

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors(ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors;
}

function checkNode(node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, "v-for=\"" + value + "\"", errors);
          } else if (onRE.test(name)) {
            checkEvent(value, name + "=\"" + value + "\"", errors);
          } else {
            checkExpression(value, name + "=\"" + value + "\"", errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent(exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push("avoid using JavaScript unary operator as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text.trim());
  }
  checkExpression(exp, text, errors);
}

function checkFor(node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier(ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push("invalid " + type + " \"" + ident + "\" in expression: " + text.trim());
  }
}

function checkExpression(exp, text, errors) {
  try {
    new Function("return " + exp);
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push("avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text.trim());
    } else {
      errors.push("invalid expression: " + text.trim());
    }
  }
}

/*  */

function createFunction(code, errors) {
  try {
    return new Function(code);
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop;
  }
}

function createCompileToFunctionFn(compile) {
  var cache = Object.create(null);

  return function compileToFunctions(template, options, vm) {
    options = options || {};

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
        }
      }
    }

    // check cache
    var key = options.delimiters ? String(options.delimiters) + template : template;
    if (cache[key]) {
      return cache[key];
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        warn("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function (e) {
          return "- " + e;
        }).join('\n') + '\n', vm);
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) {
          return tip(msg, vm);
        });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors);
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn("Failed to generate render function:\n\n" + fnGenErrors.map(function (ref) {
          var err = ref.err;
          var code = ref.code;

          return err.toString() + " in\n\n" + code + "\n";
        }).join('\n'), vm);
      }
    }

    return cache[key] = res;
  };
}

/*  */

function createCompilerCreator(baseCompile) {
  return function createCompiler(baseOptions) {
    function compile(template, options) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(Object.create(baseOptions.directives), options.directives);
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (true) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled;
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    };
  };
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile(template, options) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  };
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML;
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (el, hydrating) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
    return this;
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn("Template element not found or is empty: " + options.template, this);
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this;
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(this._name + " compile", 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating);
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML(el) {
  if (el.outerHTML) {
    return el.outerHTML;
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML;
  }
}

Vue$3.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["a"] = (Vue$3);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 10 */
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


/***/ })
/******/ ]);