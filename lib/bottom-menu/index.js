!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("index",[],t):"object"==typeof exports?exports.index=t():e.index=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/es/",t(t.s=10)}([function(e,t){e.exports=function(e,t,n,o,r){var u,s=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(u=e,s=e.default);var c="function"==typeof s?s.options:s;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),o&&(c._scopeId=o);var a;if(r?(a=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=a):n&&(a=n),a){var p=c.functional,f=p?c.render:c.beforeCreate;p?c.render=function(e,t){return a.call(t),f(e,t)}:c.beforeCreate=f?[].concat(f,a):[a]}return{esModule:u,exports:s,options:c}}},function(e,t){},,,function(e,t,n){var o=n(0)(n(7),n(17),null,null,null);o.options.__file="/Users/moia/Desktop/xiaobao-vue/mm_vue_plugins/src/bottonMenu/bottonMenu.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)}),o.options.functional,e.exports=o.exports},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"mm-bottom-menu",props:["background","type"],data:function(){return{list:[{name:"首页",type:"main",to:""},{name:"全部课程",type:"course",to:"course"},{name:"我的",type:"me",to:"me"}]}},methods:{toOther:function(e,t){this.$route.path!=="/"+e&&(location.hash=e)}}}},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),r=n.n(o),u=n(1),s=(n.n(u),r.a);s=function(e){return e.component(r.a.name,r.a)},t.default=s},,,,,,,function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("dl",{style:{backgroundColor:e.background},attrs:{id:"my_bottom_menu"}},e._l(e.list,function(t,o){return n("dd",{class:{on:e.type===t.type||+e.type===o+1,on:e.$route.path==="/"+t.to},on:{click:function(n){e.toOther(t.to,e.type===t.type||+e.type===o+1)}}},[n("i",{class:t.type}),e._v(" "),n("span",[e._v(e._s(t.name))])])}))},staticRenderFns:[]},e.exports.render._withStripped=!0}])});