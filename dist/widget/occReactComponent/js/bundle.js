define(["knockout","https://unpkg.com/react@16.5.2/umd/react.production.min","https://unpkg.com/react-dom@16.5.2/umd/react-dom.production.min"],function(e,t,n){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./app/js/index.jsx")}({"./app/js/app/App.jsx":function(e,t,n){var o;void 0===(o=function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(e){return e&&e.__esModule?e:{default:e}}(n("react"));t.default=function(){return e.default.createElement("div",null,"Hello")}}.apply(t,[]))||(e.exports=o)},"./app/js/index.jsx":function(e,t,n){var o,r;void 0===(r=function(){"use strict";var u=a(n("react")),c=a(n("react-dom")),i=a(n("./app/js/app/App.jsx"));function a(e){return e&&e.__esModule?e:{default:e}}o=[n("knockout")],void 0===(r=function(e){var t;return{inited:!1,onLoad:function(e){t=u.default.createElement(i.default,null)},beforeAppear:function(e){},onRender:function(){console.log(this,e,document.getElementById("occReactComponent")),c.default.render(t,document.getElementById("occReactComponent"))}}}.apply(t,o))||(e.exports=r)}.apply(t,o=[]))||(e.exports=r)},knockout:function(t,n){t.exports=e},react:function(e,n){e.exports=t},"react-dom":function(e,t){e.exports=n}})});