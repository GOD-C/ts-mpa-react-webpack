/*!
 * Spark created at Tue May 21 2019 21:40:36 GMT+0800 (GMT+08:00) 
 * 
 */!function(c){function t(t){for(var e,n,r=t[0],o=t[1],u=t[2],i=0,a=[];i<r.length;i++)n=r[i],l[n]&&a.push(l[n][0]),l[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(c[e]=o[e]);for(s&&s(t);a.length;)a.shift()();return p.push.apply(p,u||[]),f()}function f(){for(var t,e=0;e<p.length;e++){for(var n=p[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==l[u]&&(r=!1)}r&&(p.splice(e--,1),t=i(i.s=n[0]))}return t}var n={},l={0:0},p=[];function i(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return c[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=c,i.c=n,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="./";var e=window.webpackJsonp=window.webpackJsonp||[],r=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var s=r;p.push([0,2]),f()}([function(t,l,p){"use strict";(function(t){var r,e=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),n=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(l,"__esModule",{value:!0});var u=n(p(2)),i=o(p(3));p(4),console.log(t.env);var a,c=(a=u.Component,e(f,a),f.prototype.render=function(){return u.default.createElement("div",null,this.state.t)},f.prototype.componentDidMount=function(){var t=this;console.log(this.arr),setTimeout(function(){t.setState({t:1})},2e3)},f);function f(t){var e=a.call(this,t)||this;return e.arr=["aaa"],e.state={t:2,b:2},e}i.default.render(u.default.createElement(c,{a:"1"}),document.querySelector("#app"))}).call(this,p(1))},,function(t,e){t.exports=React},function(t,e){t.exports=ReactDOM},function(t,e,n){}]);