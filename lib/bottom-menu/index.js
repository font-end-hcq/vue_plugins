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
/******/ 	return __webpack_require__(__webpack_require__.s = 167);
/******/ })
/************************************************************************/
/******/ ({

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bottonMenu_vue__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bottonMenu_scss__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bottonMenu_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__bottonMenu_scss__);


// const install = Vue =>Vue.component(bottonMenu.name, bottonMenu);

// export default bottonMenu

// let install = bottonMenu;
if (true) {
    __WEBPACK_IMPORTED_MODULE_0__bottonMenu_vue__["a" /* default */].install = function (Vue) {
        return Vue.component(__WEBPACK_IMPORTED_MODULE_0__bottonMenu_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__bottonMenu_vue__["a" /* default */]);
    };
}
/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__bottonMenu_vue__["a" /* default */]);

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_bottonMenu_vue__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fdb60a66_hasScoped_false_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_bottonMenu_vue__ = __webpack_require__(182);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_bottonMenu_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fdb60a66_hasScoped_false_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_bottonMenu_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/bottom-menu/bottonMenu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] bottonMenu.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fdb60a66", Component.options)
  } else {
    hotAPI.reload("data-v-fdb60a66", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_home_vue__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_home_on_vue__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_course_vue__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_course_on_vue__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_me_vue__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_me_on_vue__ = __webpack_require__(180);
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











/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'mm-bottom-menu',
  components: {
    Home: __WEBPACK_IMPORTED_MODULE_0__svg_home_vue__["a" /* default */],
    HomeOn: __WEBPACK_IMPORTED_MODULE_1__svg_home_on_vue__["a" /* default */],
    Course: __WEBPACK_IMPORTED_MODULE_2__svg_course_vue__["a" /* default */],
    CourseOn: __WEBPACK_IMPORTED_MODULE_3__svg_course_on_vue__["a" /* default */],
    Me: __WEBPACK_IMPORTED_MODULE_4__svg_me_vue__["a" /* default */],
    MeOn: __WEBPACK_IMPORTED_MODULE_5__svg_me_on_vue__["a" /* default */]
  },
  props: ['background', "type"],
  data: function data() {
    return {
      list: [{
        name: '首页',
        type: 'main',
        to: '/'
      }, {
        name: "全部课程",
        type: 'course',
        to: 'course'
      }, {
        name: '我的',
        type: 'me',
        to: 'mime'
      }]
    };
  },

  methods: {
    toOther: function toOther(to, run) {
      if (!run) {
        location.href = to;
      }
      // console.log(to,run)
      // if(this.$route.path!==`/${to}`){
      //
      // }
    }
  }
});

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cfcdd468_hasScoped_false_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__ = __webpack_require__(171);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cfcdd468_hasScoped_false_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/bottom-menu/svg/home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cfcdd468", Component.options)
  } else {
    hotAPI.reload("data-v-cfcdd468", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('svg', {
    attrs: {
      "viewBox": "0 0 46 46",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink"
    }
  }, [_c('defs'), _vm._v(" "), _c('g', {
    attrs: {
      "id": "Symbols",
      "stroke": "none",
      "stroke-width": "1",
      "fill": "none",
      "fill-rule": "evenodd"
    }
  }, [_c('g', {
    attrs: {
      "id": "home_1-copy",
      "fill-rule": "nonzero",
      "fill": "#858C96"
    }
  }, [_c('path', {
    attrs: {
      "d": "M40,20.668676 L40,39 C40,41.8237671 37.6509668,44 35,44 L29,44 C28.4477153,44 28,43.5522847 28,43 L28,36 C28,33.2303332 26.1330566,31 23,31 C19.8669434,31 18,33.2303332 18,36 L18,43 C18,43.5522847 17.5522847,44 17,44 L11.0000289,44 C8.3490621,44 6,41.8237671 6,39 L6,20.668676 L3.74234196,23.1700212 C3.37229947,23.5800053 2.73996294,23.6123845 2.3299788,23.242342 C1.91999465,22.8722995 1.88761555,22.2399629 2.25765804,21.8299788 L18.6665947,3.64989399 C19.6146447,2.59951341 20.9633494,2 22.3783045,2 L23.6216955,2 C25.0366506,2 26.3853553,2.59951341 27.3334053,3.64989399 L43.742342,21.8299788 C44.1123845,22.2399629 44.0800053,22.8722995 43.6700212,23.242342 C43.2600371,23.6123845 42.6277005,23.5800053 42.257658,23.1700212 L40,20.668676 L40,20.668676 Z M38,18.4528 L25.8487214,4.9899364 C25.2798914,4.35970805 24.4706686,4 23.6216955,4 L22.3783045,4 C21.5293314,4 20.7201086,4.35970805 20.1512786,4.9899364 L8,18.4528 L8,39 C8,40.6496145 9.38291298,42 11.0000289,42 L16,42 L16,36 C16,32.0158735 18.8642985,29 23,29 C27.1357015,29 30,32.0158735 30,36 L30,42 L35,42 C36.6171068,42 38,40.6496232 38,39 L38,18.4528 L38,18.4528 Z",
      "id": "Combined-Shape"
    }
  })])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-cfcdd468", esExports)
  }
}

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3a55d33c_hasScoped_false_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_home_on_vue__ = __webpack_require__(173);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3a55d33c_hasScoped_false_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_home_on_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/bottom-menu/svg/home_on.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] home_on.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a55d33c", Component.options)
  } else {
    hotAPI.reload("data-v-3a55d33c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('svg', {
    attrs: {
      "viewBox": "0 0 46 46",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink"
    }
  }, [_c('defs'), _vm._v(" "), _c('g', {
    attrs: {
      "id": "Symbols",
      "stroke": "none",
      "stroke-width": "1",
      "fill": "none",
      "fill-rule": "evenodd"
    }
  }, [_c('g', {
    attrs: {
      "id": "home_1",
      "fill": "#DC2832"
    }
  }, [_c('path', {
    attrs: {
      "d": "M27.8,44 L35,44 C37.6509668,44 39.8,41.7108845 39.8,38.8871174 L39.7999711,17.972067 L28.0911544,5.5000243 C24.9899354,2.19665589 20.7205916,2.50496703 17.9088167,5.5000243 L6.2,17.9720637 L6.2000289,38.8871174 C6.2000289,41.7108845 8.3490621,44 11.0000289,44 L18.2,44 L18.2,35.7626452 C18.2,32.9929784 20.3490332,30.7477198 23,30.7477198 C25.6509668,30.7477198 27.8,32.9929784 27.8,35.7626452 L27.8,44 Z",
      "id": "Combined-Shape"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M3.74234196,23.1700212 L20.1512786,4.9899364 C20.7201086,4.35970805 21.5293314,4 22.3783045,4 L23.6216955,4 C24.4706686,4 25.2798914,4.35970805 25.8487214,4.9899364 L42.257658,23.1700212 C42.6277005,23.5800053 43.2600371,23.6123845 43.6700212,23.242342 C44.0800053,22.8722995 44.1123845,22.2399629 43.742342,21.8299788 L27.3334053,3.64989399 C26.3853553,2.59951341 25.0366506,2 23.6216955,2 L22.3783045,2 C20.9633494,2 19.6146447,2.59951341 18.6665947,3.64989399 L2.25765804,21.8299788 C1.88761555,22.2399629 1.91999465,22.8722995 2.3299788,23.242342 C2.73996294,23.6123845 3.37229947,23.5800053 3.74234196,23.1700212 Z",
      "id": "Path-4",
      "fill-rule": "nonzero"
    }
  })])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3a55d33c", esExports)
  }
}

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d7b63c70_hasScoped_false_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_course_vue__ = __webpack_require__(175);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d7b63c70_hasScoped_false_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_course_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/bottom-menu/svg/course.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] course.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d7b63c70", Component.options)
  } else {
    hotAPI.reload("data-v-d7b63c70", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('svg', {
    attrs: {
      "viewBox": "0 0 46 46",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink"
    }
  }, [_c('defs'), _vm._v(" "), _c('g', {
    attrs: {
      "id": "Symbols",
      "stroke": "none",
      "stroke-width": "1",
      "fill": "none",
      "fill-rule": "evenodd"
    }
  }, [_c('g', {
    attrs: {
      "id": "all_1-copy",
      "stroke": "#858C96",
      "stroke-width": "2"
    }
  }, [_c('path', {
    attrs: {
      "d": "M21,21 L21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L21,21 Z",
      "id": "Rectangle-5"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M43,21 L43,12 C43,7.02943725 38.9705627,3 34,3 C29.0294373,3 25,7.02943725 25,12 C25,16.9705627 29.0294373,21 34,21 L43,21 Z",
      "id": "Rectangle-5",
      "transform": "translate(34.000000, 12.000000) scale(-1, 1) translate(-34.000000, -12.000000) "
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M21,43 L21,34 C21,29.0294373 16.9705627,25 12,25 C7.02943725,25 3,29.0294373 3,34 C3,38.9705627 7.02943725,43 12,43 L21,43 Z",
      "id": "Rectangle-5",
      "transform": "translate(12.000000, 34.000000) scale(1, -1) translate(-12.000000, -34.000000) "
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M43,43 L43,34 C43,29.0294373 38.9705627,25 34,25 C29.0294373,25 25,29.0294373 25,34 C25,38.9705627 29.0294373,43 34,43 L43,43 Z",
      "id": "Rectangle-5",
      "transform": "translate(34.000000, 34.000000) scale(-1, -1) translate(-34.000000, -34.000000) "
    }
  })])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d7b63c70", esExports)
  }
}

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_78b80e34_hasScoped_false_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_course_on_vue__ = __webpack_require__(177);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_78b80e34_hasScoped_false_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_course_on_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/bottom-menu/svg/course_on.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] course_on.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78b80e34", Component.options)
  } else {
    hotAPI.reload("data-v-78b80e34", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('svg', {
    attrs: {
      "viewBox": "0 0 46 46",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink"
    }
  }, [_c('defs'), _vm._v(" "), _c('g', {
    attrs: {
      "id": "Symbols",
      "stroke": "none",
      "stroke-width": "1",
      "fill": "none",
      "fill-rule": "evenodd"
    }
  }, [_c('g', {
    attrs: {
      "id": "all_1",
      "fill": "#DC2832"
    }
  }, [_c('path', {
    attrs: {
      "d": "M12,2 L12,2 L12,2 C17.5228475,2 22,6.4771525 22,12 L22,22 L12,22 L12,22 C6.4771525,22 2,17.5228475 2,12 L2,12 L2,12 C2,6.4771525 6.4771525,2 12,2 Z",
      "id": "Rectangle-5"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M34,2 L34,2 L34,2 C39.5228475,2 44,6.4771525 44,12 L44,22 L34,22 L34,22 C28.4771525,22 24,17.5228475 24,12 L24,12 L24,12 C24,6.4771525 28.4771525,2 34,2 Z",
      "id": "Rectangle-5",
      "transform": "translate(34.000000, 12.000000) scale(-1, 1) translate(-34.000000, -12.000000) "
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M12,24 L12,24 L12,24 C17.5228475,24 22,28.4771525 22,34 L22,44 L12,44 L12,44 C6.4771525,44 2,39.5228475 2,34 L2,34 L2,34 C2,28.4771525 6.4771525,24 12,24 Z",
      "id": "Rectangle-5",
      "transform": "translate(12.000000, 34.000000) scale(1, -1) translate(-12.000000, -34.000000) "
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M34,24 L34,24 L34,24 C39.5228475,24 44,28.4771525 44,34 L44,44 L34,44 L34,44 C28.4771525,44 24,39.5228475 24,34 L24,34 L24,34 C24,28.4771525 28.4771525,24 34,24 Z",
      "id": "Rectangle-5",
      "transform": "translate(34.000000, 34.000000) scale(-1, -1) translate(-34.000000, -34.000000) "
    }
  })])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-78b80e34", esExports)
  }
}

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_186ec976_hasScoped_false_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_me_vue__ = __webpack_require__(179);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_186ec976_hasScoped_false_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_me_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/bottom-menu/svg/me.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] me.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-186ec976", Component.options)
  } else {
    hotAPI.reload("data-v-186ec976", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('svg', {
    attrs: {
      "viewBox": "0 0 46 46",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink"
    }
  }, [_c('defs'), _vm._v(" "), _c('g', {
    attrs: {
      "id": "Symbols",
      "stroke": "none",
      "stroke-width": "1",
      "fill": "none",
      "fill-rule": "evenodd"
    }
  }, [_c('g', {
    attrs: {
      "id": "me_2-copy",
      "stroke": "#858C96",
      "stroke-width": "2"
    }
  }, [_c('path', {
    attrs: {
      "d": "M17.4974096,24.1702883 C18.2914917,24.8403743 18.7498492,25.8148464 18.7498492,26.8423273 L18.7498492,27.1429874 C18.7498492,28.4349931 18.0420642,29.6245426 16.89968,30.2678257 L5.09531433,36.9149322 C3.79453865,37.6474065 3,38.9827599 3,40.4211303 L3,40.7404442 C3,41.9640808 4.04268677,42.9706115 5.34619952,42.9706115 L23.0014631,42.9706129 L40.6595651,43 C41.9598941,43 43,41.9959606 43,40.7753974 L43,40.4560835 C43,39.017713 42.2054614,37.6823596 40.9046857,36.9498853 L29.1160837,30.3116556 C27.9639382,29.6628758 27.2501508,28.4632382 27.2501508,27.1603237 L27.2501508,26.8463524 C27.2501508,25.8209067 27.7067028,24.8481488 28.498093,24.1781148 C28.5642336,24.1221165 28.6216916,24.0717091 28.6701731,24.027263 C31.0567468,21.8393379 32.4996984,18.4074643 32.4996984,14.6697585 C32.4996984,8.18757089 28.2005657,3 22.9997989,3 C17.7990321,3 13.4998995,8.18757089 13.4998995,14.6697585 C13.4998995,18.3390614 14.8901689,21.7154991 17.2042554,23.9105349 C17.2818906,23.984176 17.3798663,24.0710994 17.4974096,24.1702883 Z",
      "id": "Combined-Shape"
    }
  })])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-186ec976", esExports)
  }
}

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_71727249_hasScoped_false_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_me_on_vue__ = __webpack_require__(181);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_71727249_hasScoped_false_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_me_on_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/bottom-menu/svg/me_on.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] me_on.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-71727249", Component.options)
  } else {
    hotAPI.reload("data-v-71727249", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('svg', {
    attrs: {
      "width": "46px",
      "height": "46px",
      "viewBox": "0 0 46 46",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink"
    }
  }, [_c('defs'), _vm._v(" "), _c('g', {
    attrs: {
      "id": "Symbols",
      "stroke": "none",
      "stroke-width": "1",
      "fill": "none",
      "fill-rule": "evenodd"
    }
  }, [_c('g', {
    attrs: {
      "id": "me_2",
      "fill": "#DC2832"
    }
  }, [_c('path', {
    attrs: {
      "d": "M16.8524941,24.9345422 C16.7210511,24.8236241 16.6089056,24.7241293 16.5160576,24.636058 C14.0705653,22.3163767 12.4998995,18.7143975 12.4998995,14.6697585 C12.4998995,7.6724441 17.2008646,2 22.9997989,2 C28.7987333,2 33.4996984,7.6724441 33.4996984,14.6697585 C33.4996984,18.7897592 31.8699565,22.4504507 29.3459368,24.7643813 C29.2871818,24.8182458 29.2199555,24.8772229 29.1442579,24.9413126 C28.575988,25.4224408 28.2501508,26.1166897 28.2501508,26.8463524 L28.2501508,27.1603237 C28.2501508,28.0991224 28.7667022,28.9672722 29.6067459,29.4403057 L41.3953478,36.0785354 C43.0082253,36.9867561 44,38.6535971 44,40.4560835 L44,40.7753974 C44,42.5562962 42.5044363,44 40.6595651,44 L22.9997989,43.9706115 L5.34619952,43.9706115 C3.49814455,43.9706115 2,42.5244164 2,40.7404442 L2,40.4211303 C2,38.618644 2.99177466,36.9518029 4.60465218,36.0435823 L16.4090179,29.3964758 C17.2393002,28.9289391 17.7498492,28.0708772 17.7498492,27.1429874 L17.7498492,26.8423273 C17.7498492,26.1112106 17.422717,25.4157246 16.8524941,24.9345422 Z",
      "id": "Combined-Shape"
    }
  })])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-71727249", esExports)
  }
}

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dl', {
    style: ({
      backgroundColor: _vm.background
    }),
    attrs: {
      "id": "my_bottom_menu"
    }
  }, _vm._l((_vm.list), function(item, index) {
    return _c('dd', {
      class: {
        on: +_vm.type === index + 1
      },
      on: {
        "click": function($event) {
          _vm.toOther(item.to, +_vm.type === index + 1)
        }
      }
    }, [(+_vm.type === index + 1) ? _c('object', [(item.type === "main") ? _c('home-on') : _vm._e(), _vm._v(" "), (item.type === "course") ? _c('course-on') : _vm._e(), _vm._v(" "), (item.type === "me") ? _c('me-on') : _vm._e()], 1) : _c('object', [(item.type === "main") ? _c('home') : _vm._e(), _vm._v(" "), (item.type === "course") ? _c('course') : _vm._e(), _vm._v(" "), (item.type === "me") ? _c('me') : _vm._e()], 1), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.name))])])
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fdb60a66", esExports)
  }
}

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 4:
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

/******/ });
});