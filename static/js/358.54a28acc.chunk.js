/*! For license information please see 358.54a28acc.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksenhub=self.webpackChunksenhub||[]).push([[358],{15659:function(e,r,n){n.d(r,{Z:function(){return i}});var t=n(19289);BigInt.prototype.toJSON=function(){return this.toString()};var o={serializableCheck:{isSerializable:function(e){return"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||function(e){if(null===e)return!1;var r=Object.getPrototypeOf(e);return null!==r&&null===Object.getPrototypeOf(r)}(e)||"bigint"===typeof e}}},a=n(84863),i=(0,t.configureStore)({middleware:function(e){return e(o)},devTools:!1,reducer:{main:a.Z}})},84863:function(e,r,n){n.d(r,{r:function(){return u}});var t=n(15861),o=n(87757),a=n.n(o),i=n(19289),c="main",u=(0,i.createAsyncThunk)("".concat(c,"/increaseCounter"),function(){var e=(0,t.Z)(a().mark((function e(r,n){var t,o,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.getState,o=t(),i=o.main.counter,e.abrupt("return",{counter:i+1});case 3:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()),s=(0,i.createSlice)({name:c,initialState:{counter:0},reducers:{},extraReducers:function(e){e.addCase(u.fulfilled,(function(e,r){var n=r.payload;Object.assign(e,n)}))}});r.Z=s.reducer},41156:function(e,r,n){n.r(r),n.d(r,{default:function(){return p}});var t=n(55754),o=n(49142),a=n(92950),i=n(78589),c=n(54738),u=n(84863),s=n(45263),l=function(){var e=(0,o.useWallet)().wallet.address,r=(0,t.useDispatch)(),n=(0,t.useSelector)((function(e){return e.main})).counter,l=(0,a.useCallback)((function(){return r((0,u.r)())}),[r]);return(0,s.jsxs)(i.Row,{gutter:[24,24],align:"middle",children:[(0,s.jsx)(i.Col,{span:24,children:(0,s.jsxs)(i.Space,{align:"center",children:[(0,s.jsx)(c.Z,{name:"newspaper-outline"}),(0,s.jsx)(i.Typography.Title,{level:4,children:"Page"})]})}),(0,s.jsx)(i.Col,{span:24,children:(0,s.jsxs)(i.Typography.Text,{children:["Address: ",e]})}),(0,s.jsx)(i.Col,{children:(0,s.jsxs)(i.Typography.Text,{children:["Counter: ",n]})}),(0,s.jsx)(i.Col,{children:(0,s.jsx)(i.Button,{onClick:l,children:"Increase"})})]})},f=n(15659),p=function(){return(0,s.jsx)(o.WalletProvider,{children:(0,s.jsx)(t.Provider,{store:f.Z,children:(0,s.jsx)(l,{})})})}},54738:function(e,r,n){var t=n(1413),o=n(45987),a=n(92950),i=n(45263),c=["name","className"],u=(0,a.forwardRef)((function(e,r){var n=e.name,a=e.className,u=(0,o.Z)(e,c),s=a?"anticon "+a:"anticon";return(0,i.jsx)("span",(0,t.Z)((0,t.Z)({className:s},u),{},{children:(0,i.jsx)("ion-icon",{ref:r,name:n})}))}));r.Z=u},25882:function(e){var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,c,u=o(e),s=1;s<arguments.length;s++){for(var l in i=Object(arguments[s]))n.call(i,l)&&(u[l]=i[l]);if(r){c=r(i);for(var f=0;f<c.length;f++)t.call(i,c[f])&&(u[c[f]]=i[c[f]])}}return u}},62175:function(e,r,n){n(25882);var t=n(92950),o=60103;if(60107,"function"===typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,n){var t,a={},s=null,l=null;for(t in void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,t)&&!u.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:o,type:e,key:s,ref:l,props:a,_owner:i.current}}r.jsx=s,r.jsxs=s},45263:function(e,r,n){e.exports=n(62175)}}]);
//# sourceMappingURL=358.54a28acc.chunk.js.map