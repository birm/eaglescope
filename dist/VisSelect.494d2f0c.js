parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"J4Nk":[function(require,module,exports) {
"use strict";var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable;function n(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function o(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(r){return t[r]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}module.exports=o()?Object.assign:function(o,c){for(var a,i,s=n(o),f=1;f<arguments.length;f++){for(var u in a=Object(arguments[f]))t.call(a,u)&&(s[u]=a[u]);if(r){i=r(a);for(var b=0;b<i.length;b++)e.call(a,i[b])&&(s[i[b]]=a[i[b]])}}return s};
},{}],"awqi":[function(require,module,exports) {
"use strict";var e=require("object-assign"),t="function"==typeof Symbol&&Symbol.for,r=t?Symbol.for("react.element"):60103,n=t?Symbol.for("react.portal"):60106,o=t?Symbol.for("react.fragment"):60107,u=t?Symbol.for("react.strict_mode"):60108,l=t?Symbol.for("react.profiler"):60114,f=t?Symbol.for("react.provider"):60109,c=t?Symbol.for("react.context"):60110,i=t?Symbol.for("react.concurrent_mode"):60111,a=t?Symbol.for("react.forward_ref"):60112,s=t?Symbol.for("react.suspense"):60113,p=t?Symbol.for("react.memo"):60115,y=t?Symbol.for("react.lazy"):60116,d="function"==typeof Symbol&&Symbol.iterator;function v(e,t,r,n,o,u,l,f){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,o,u,l,f],i=0;(e=Error(t.replace(/%s/g,function(){return c[i++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}function m(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);v(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function _(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||h}function S(){}function k(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||h}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&m("85"),this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=_.prototype;var g=k.prototype=new S;g.constructor=k,e(g,_.prototype),g.isPureReactComponent=!0;var $={current:null},x={current:null},C=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var o=void 0,u={},l=null,f=null;if(null!=t)for(o in void 0!==t.ref&&(f=t.ref),void 0!==t.key&&(l=""+t.key),t)C.call(t,o)&&!w.hasOwnProperty(o)&&(u[o]=t[o]);var c=arguments.length-2;if(1===c)u.children=n;else if(1<c){for(var i=Array(c),a=0;a<c;a++)i[a]=arguments[a+2];u.children=i}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===u[o]&&(u[o]=c[o]);return{$$typeof:r,type:e,key:l,ref:f,props:u,_owner:x.current}}function R(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}function j(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}var O=/\/+/g,A=[];function I(e,t,r,n){if(A.length){var o=A.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function U(e,t,o,u){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var f=!1;if(null===e)f=!0;else switch(l){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case r:case n:f=!0}}if(f)return o(u,e,""===t?"."+F(e,0):t),1;if(f=0,t=""===t?".":t+":",Array.isArray(e))for(var c=0;c<e.length;c++){var i=t+F(l=e[c],c);f+=U(l,i,o,u)}else if(null===e||"object"!=typeof e?i=null:i="function"==typeof(i=d&&e[d]||e["@@iterator"])?i:null,"function"==typeof i)for(e=i.call(e),c=0;!(l=e.next()).done;)f+=U(l=l.value,i=t+F(l,c++),o,u);else"object"===l&&m("31","[object Object]"===(o=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":o,"");return f}function q(e,t,r){return null==e?0:U(e,"",t,r)}function F(e,t){return"object"==typeof e&&null!==e&&null!=e.key?j(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function V(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,n,r,function(e){return e}):null!=e&&(E(e)&&(e=R(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(O,"$&/")+"/")+r)),n.push(e))}function D(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(O,"$&/")+"/"),q(e,V,t=I(t,u,n,o)),M(t)}function T(){var e=$.current;return null===e&&m("321"),e}var N={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return D(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;q(e,L,t=I(null,null,t,r)),M(t)},count:function(e){return q(e,function(){return null},null)},toArray:function(e){var t=[];return D(e,t,null,function(e){return e}),t},only:function(e){return E(e)||m("143"),e}},createRef:function(){return{current:null}},Component:_,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:a,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return T().useCallback(e,t)},useContext:function(e,t){return T().useContext(e,t)},useEffect:function(e,t){return T().useEffect(e,t)},useImperativeHandle:function(e,t,r){return T().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return T().useLayoutEffect(e,t)},useMemo:function(e,t){return T().useMemo(e,t)},useReducer:function(e,t,r){return T().useReducer(e,t,r)},useRef:function(e){return T().useRef(e)},useState:function(e){return T().useState(e)},Fragment:o,StrictMode:u,Suspense:s,createElement:P,cloneElement:function(t,n,o){null==t&&m("267",t);var u=void 0,l=e({},t.props),f=t.key,c=t.ref,i=t._owner;if(null!=n){void 0!==n.ref&&(c=n.ref,i=x.current),void 0!==n.key&&(f=""+n.key);var a=void 0;for(u in t.type&&t.type.defaultProps&&(a=t.type.defaultProps),n)C.call(n,u)&&!w.hasOwnProperty(u)&&(l[u]=void 0===n[u]&&void 0!==a?a[u]:n[u])}if(1===(u=arguments.length-2))l.children=o;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];l.children=a}return{$$typeof:r,type:t.type,key:f,ref:c,props:l,_owner:i}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.8.6",unstable_ConcurrentMode:i,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:$,ReactCurrentOwner:x,assign:e}},z={default:N},B=z&&N||z;module.exports=B.default||B;
},{"object-assign":"J4Nk"}],"1n8/":[function(require,module,exports) {
"use strict";module.exports=require("./cjs/react.production.min.js");
},{"./cjs/react.production.min.js":"awqi"}],"72XQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),e=require("react"),n=r(e);function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=function(e){function r(t,e){i(this,r);var n=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,t,e));return n.props=t,n.ctx=e,n.id=t.id||"_"+Math.random().toString(36).substr(2,9),n.height=n.props.h||n.props.height||1,n.width=n.props.w||n.props.width||1,n.state={},n.state.filter={},n.state.ready=!1,n.state.baseData=[],n.state.filteredData=[],n.supportsContext=!0,n.supportsInteraction=!0,n.filterIn=n.filterIn.bind(n),n.filterOut=n.filterOut.bind(n),n.initData=n.initData.bind(n),window.addEventListner("filterOut",n.filterOut,!1),window.addEventListner("initData",n.initData,!1),n}return o(r,n.default.Component),t(r,[{key:"filterIn",value:function(t){this.setState(function(e){e.filter=t});var e=new CustomEvent("filterIn",{detail:{id:this.id,filter:t}});window.dispatchEvent(e)}},{key:"filterOut",value:function(t){d=t.detail.data,this.setState(function(t){t.filteredData=d})}},{key:"initData",value:function(t){d=t.detail.data,this.setState(function(t){t.baseData=d,t.filteredData=d})}},{key:"render",value:function(){return console.warn("Not meant to render BaseVis itself..."),n.default.createElement("p",null," BaseVisualization ")}}]),r}();exports.default=u;
},{"react":"1n8/"}],"e/qp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),t=require("react"),r=u(t),n=require("./BaseVisualization.js"),o=u(n);function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=function(t){function n(e,t){return i(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t))}return c(n,o.default),e(n,[{key:"render",value:function(){r.default.createElement("p",null," Sample Vis ")}}]),n}();exports.default=f;
},{"react":"1n8/","./BaseVisualization.js":"72XQ"}],"uZcD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./SampleVisualization.js"),t=r(e);function r(e){return e&&e.__esModule?e:{default:e}}var u={};Vistypes.Sample=t.default,exports.default=u;
},{"./SampleVisualization.js":"e/qp"}],"zRxe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),t=require("react"),n=i(t),r=require("./VisTypes.js"),o=i(r);function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(t){function r(e,t){s(this,r);var n=u(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,t));return n.height=e.h||e.height||1,n.width=e.w||e.width||1,n.state={selected:null},n.selectVis=n.selectVis.bind(n),n}return a(r,n.default.Component),e(r,[{key:"selectVis",value:function(e){o.default.hasOwnProperty(e)?(this.setState(function(t){t.selection=e}),this.vis=o.default[this.state.selection]):(alert("that vis does not seem to exist."),console.error(e+" not found in VisTypes.js"))}},{key:"render",value:function(){if(this.state.selection){var e=this.vis;return n.default.createElement(e,{h:"{this.height}",w:"{this.width}"})}return n.default.createElement("p",null,JSON.stringify(o.default.keys()))}}]),r}();exports.default=l;
},{"react":"1n8/","./VisTypes.js":"uZcD"}]},{},["zRxe"], null)
//# sourceMappingURL=/VisSelect.494d2f0c.map