/*! For license information please see src_app_view_index_tsx.82dc5d37.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk_2mf=self.webpackChunk_2mf||[]).push([["src_app_view_index_tsx","node_modules_babel_runtime_helpers_esm_objectSpread2_js"],{3033:function(e,r,t){t.r(r),t.d(r,{Page:function(){return w},Widget:function(){return m}});var n=t(1413),o=t(2950),i=t(5754),c=t(9289),u=t(900),a=t(8668),f=t(5861),s=t(7757),l=t.n(s),d="senos",p={width:window.innerWidth},y=(0,c.createAsyncThunk)("".concat(d,"/setWidth"),(0,f.Z)(l().mark((function e(){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=window.innerWidth,e.abrupt("return",{width:r});case 2:case"end":return e.stop()}}),e)})))),b=(0,c.createSlice)({name:d,initialState:p,reducers:{},extraReducers:function(e){e.addCase(y.fulfilled,(function(e,r){var t=r.payload;Object.assign(e,t)}))}}).reducer,j=(0,c.configureStore)({middleware:u.Z,devTools:(0,a.Z)("Hello"),reducer:{ui:b}}),h=t(6478),v=t(184),O=function(){var e=(0,i.useDispatch)(),r=(0,i.useSelector)((function(e){return e.ui})).width;return(0,o.useEffect)((function(){window.onresize=function(){e(y())}}),[e]),(0,v.jsx)(h.Row,{gutter:[24,24],justify:"center",children:(0,v.jsxs)(h.Col,{span:24,children:[(0,v.jsx)(h.Typography.Title,{level:3,children:"Hello World from Remote Page."}),(0,v.jsx)(h.Typography.Text,{children:"Screen size: ".concat(r)})]})})},g=function(e){var r=e.backgroundColor,t=(0,i.useDispatch)(),n=(0,i.useSelector)((function(e){return e.ui})).width;return(0,o.useEffect)((function(){window.onresize=function(){t(y())}}),[t]),(0,v.jsx)(h.Row,{gutter:[24,24],children:(0,v.jsx)(h.Col,{span:24,children:(0,v.jsx)(h.Card,{bodyStyle:{backgroundColor:r},children:(0,v.jsx)(h.Row,{gutter:[16,16],children:(0,v.jsxs)(h.Col,{span:24,children:[(0,v.jsx)(h.Typography.Title,{level:3,children:"Hello World from Remote Widget."}),(0,v.jsx)(h.Typography.Text,{children:"Screen size: ".concat(n)})]})})})})})},w=(0,o.forwardRef)((function(e,r){return(0,v.jsx)(i.Provider,{store:j,children:(0,v.jsx)(O,(0,n.Z)((0,n.Z)({},e),{},{ref:r}))})})),m=(0,o.forwardRef)((function(e,r){return(0,v.jsx)(i.Provider,{store:j,children:(0,v.jsx)(g,(0,n.Z)((0,n.Z)({},e),{},{ref:r}))})}))},8668:function(e,r,t){t.d(r,{Z:function(){return i}});var n="production",o={env:n,basics:{development:{subversion:"devnet"},staging:{subversion:"devnet"},production:{subversion:"beta"}}.production},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SenOS";return"development"===o.env&&{name:e,actionSanitizer:function(e){return{payload:e.payload,type:e.type}}}}},900:function(e,r,t){var n=t(9289);BigInt.prototype.toJSON=function(){return this.toString()};var o=(0,n.getDefaultMiddleware)({serializableCheck:{isSerializable:function(e){return"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||function(e){if(null===e)return!1;var r=Object.getPrototypeOf(e);return null!==r&&null===Object.getPrototypeOf(r)}(e)||"bigint"===typeof e}}});r.Z=o},1725:function(e){var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var c,u,a=o(e),f=1;f<arguments.length;f++){for(var s in c=Object(arguments[f]))t.call(c,s)&&(a[s]=c[s]);if(r){u=r(c);for(var l=0;l<u.length;l++)n.call(c,u[l])&&(a[u[l]]=c[u[l]])}}return a}},6374:function(e,r,t){t(1725);var n=t(2950),o=60103;if(60107,"function"===typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),i("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function f(e,r,t){var n,i={},f=null,s=null;for(n in void 0!==t&&(f=""+t),void 0!==r.key&&(f=""+r.key),void 0!==r.ref&&(s=r.ref),r)u.call(r,n)&&!a.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:o,type:e,key:f,ref:s,props:i,_owner:c.current}}r.jsx=f,r.jsxs=f},184:function(e,r,t){e.exports=t(6374)},4942:function(e,r,t){function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.d(r,{Z:function(){return n}})},1413:function(e,r,t){t.d(r,{Z:function(){return i}});var n=t(4942);function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}}}]);
//# sourceMappingURL=src_app_view_index_tsx.82dc5d37.chunk.js.map