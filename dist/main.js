/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={934:(t,r,n)=>{n.d(r,{A:()=>c});var e=n(991),o=n.n(e),a=n(314),i=n.n(a)()(o());i.push([t.id,"*{margin:0;padding:0;box-sizing:border-box}h1{padding-left:100px}body{font-family:Arial,sans-serif;line-height:1.6;background-color:#f4f4f4;padding:20px}form{max-width:600px;margin:0 auto 20px;padding:20px;background:#fff;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,.1)}form label{display:block;margin-bottom:10px;font-weight:bold}form input{width:100%;padding:10px;margin-bottom:10px;border:1px solid #ddd;border-radius:4px}form button.search{display:block;width:100%;padding:10px;background:#5cb85c;border:none;border-radius:4px;color:#fff;font-size:16px;cursor:pointer}form button.search:hover{background:#4cae4c}button#saveTrip{width:20%;border:1px solid red}button#removeTrip{width:20%;border:1px solid red}#weather{display:none;max-width:600px;margin:0 auto;padding:20px;background:#fff;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,.1);text-align:center}#weather img{width:50px;height:50px;margin-top:10px}#weather.show{display:block}#image{max-width:100%;height:auto;border-radius:8px;display:block;margin:20px auto}#tripDetails{display:none;max-width:600px;margin:0 auto;padding:20px;background:#fff;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,.1);text-align:center}#tripDetails.show{display:block}#locationInfo{display:none;max-width:600px;margin:0 auto;padding:20px;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,.1);text-align:center}#locationInfo.show{display:block}","",{version:3,sources:["webpack://./src/client/styles/style.scss"],names:[],mappings:"AACA,EACI,QAAA,CACA,SAAA,CACA,qBAAA,CAEJ,GACI,kBAAA,CAGJ,KACI,4BAAA,CACA,eAAA,CACA,wBAAA,CACA,YAAA,CAIJ,KACI,eAAA,CACA,kBAAA,CACA,YAAA,CACA,eAAA,CACA,iBAAA,CACA,kCAAA,CAEA,WAEI,aAAA,CACA,kBAAA,CACA,gBAAA,CAIJ,WACI,UAAA,CACA,YAAA,CACA,kBAAA,CACA,qBAAA,CACA,iBAAA,CAGJ,mBACI,aAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,WAAA,CACA,iBAAA,CACA,UAAA,CACA,cAAA,CACA,cAAA,CAEA,yBACI,kBAAA,CAKR,gBACE,SAAA,CACA,oBAAA,CAGF,kBACE,SAAA,CACA,oBAAA,CAIN,SACI,YAAA,CACA,eAAA,CACA,aAAA,CACA,YAAA,CACA,eAAA,CACA,iBAAA,CACA,kCAAA,CACA,iBAAA,CAEA,aACI,UAAA,CACA,WAAA,CACA,eAAA,CAGR,cACI,aAAA,CAEJ,OACI,cAAA,CACA,WAAA,CACA,iBAAA,CACA,aAAA,CACA,gBAAA,CAEJ,aACI,YAAA,CACA,eAAA,CACA,aAAA,CACA,YAAA,CACA,eAAA,CACA,iBAAA,CACA,kCAAA,CACA,iBAAA,CAEJ,kBACI,aAAA,CAEJ,cACI,YAAA,CACA,eAAA,CACA,aAAA,CACA,YAAA,CAEA,iBAAA,CACA,kCAAA,CACA,iBAAA,CAEJ,mBACI,aAAA",sourcesContent:["\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\nh1{\r\n    padding-left: 100px;\r\n}\r\n\r\nbody {\r\n    font-family: Arial, sans-serif;\r\n    line-height: 1.6;\r\n    background-color: #f4f4f4;\r\n    padding: 20px;\r\n}\r\n\r\n\r\nform {\r\n    max-width: 600px;\r\n    margin: 0 auto 20px;\r\n    padding: 20px;\r\n    background: #fff;\r\n    border-radius: 8px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n\r\n    label {\r\n        \r\n        display: block;\r\n        margin-bottom: 10px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    \r\n    input{\r\n        width: 100%;\r\n        padding: 10px;\r\n        margin-bottom: 10px;\r\n        border: 1px solid #ddd;\r\n        border-radius: 4px;\r\n    }\r\n\r\n    button.search {\r\n        display: block;\r\n        width: 100%;\r\n        padding: 10px;\r\n        background: #5cb85c;\r\n        border: none;\r\n        border-radius: 4px;\r\n        color: #fff;\r\n        font-size: 16px;\r\n        cursor: pointer;\r\n\r\n        &:hover {\r\n            background: #4cae4c;\r\n        }\r\n    }\r\n}\r\nbutton {\r\n    &#saveTrip {\r\n      width: 20%;\r\n      border: 1px solid red;\r\n    }\r\n  \r\n    &#removeTrip {\r\n      width: 20%;\r\n      border: 1px solid red;\r\n    }\r\n  }\r\n\r\n#weather {\r\n    display: none;\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n    padding: 20px;\r\n    background: #fff;\r\n    border-radius: 8px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n    text-align: center;\r\n\r\n    img {\r\n        width: 50px;\r\n        height: 50px;\r\n        margin-top: 10px;\r\n    }\r\n}\r\n#weather.show{\r\n    display: block;\r\n}\r\n#image {\r\n    max-width: 100%;\r\n    height: auto;\r\n    border-radius: 8px;\r\n    display: block;\r\n    margin: 20px auto;\r\n}\r\n#tripDetails{\r\n    display: none;\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n    padding: 20px;\r\n    background: #ffffff;\r\n    border-radius: 8px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n    text-align: center;\r\n}\r\n#tripDetails.show{\r\n    display: block; \r\n}\r\n#locationInfo {\r\n    display: none;\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n    padding: 20px;\r\n    \r\n    border-radius: 8px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n    text-align: center;\r\n}\r\n#locationInfo.show{\r\n    display: block;\r\n}"],sourceRoot:""}]);const c=i},314:t=>{t.exports=function(t){var r=[];return r.toString=function(){return this.map((function(r){var n=t(r);return r[2]?"@media ".concat(r[2]," {").concat(n,"}"):n})).join("")},r.i=function(t,n,e){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(e)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);e&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),r.push(s))}},r}},991:t=>{function r(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}t.exports=function(t){var n,e,o=(e=4,function(t){if(Array.isArray(t))return t}(n=t)||function(t,r){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=n){var e,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(e=n.next()).done)&&(a.push(e.value),!r||a.length!==r);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(n,e)||function(t,n){if(t){if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if(!i)return a;if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(s," */"),A=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[a].concat(A).concat([u]).join("\n")}return[a].join("\n")}},72:t=>{var r=[];function n(t){for(var n=-1,e=0;e<r.length;e++)if(r[e].identifier===t){n=e;break}return n}function e(t,e){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],u=e.base?s[0]+e.base:s[0],A=a[u]||0,l="".concat(u," ").concat(A);a[u]=A+1;var p=n(l),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)r[p].references++,r[p].updater(d);else{var f=o(d,e);e.byIndex=c,r.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(t,r){var n=r.domAPI(r);return n.update(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap&&r.supports===t.supports&&r.layer===t.layer)return;n.update(t=r)}else n.remove()}}t.exports=function(t,o){var a=e(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);r[c].references--}for(var s=e(t,o),u=0;u<a.length;u++){var A=n(a[u]);0===r[A].references&&(r[A].updater(),r.splice(A,1))}a=s}}},659:t=>{var r={};t.exports=function(t,n){var e=function(t){if(void 0===r[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}r[t]=n}return r[t]}(t);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}},540:t=>{t.exports=function(t){var r=document.createElement("style");return t.setAttributes(r,t.attributes),t.insert(r,t.options),r}},56:(t,r,n)=>{t.exports=function(t){var r=n.nc;r&&t.setAttribute("nonce",r)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=t.insertStyleElement(t);return{update:function(n){!function(t,r,n){var e="";n.supports&&(e+="@supports (".concat(n.supports,") {")),n.media&&(e+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(e+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),e+=n.css,o&&(e+="}"),n.media&&(e+="}"),n.supports&&(e+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(e,t,r.options)}(r,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)}}}},113:t=>{t.exports=function(t,r){if(r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={id:e,exports:{}};return t[e](a,a.exports,n),a.exports}n.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return n.d(r,{a:r}),r},n.d=(t,r)=>{for(var e in r)n.o(r,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},n.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),n.nc=void 0,(()=>{function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(){r=function(){return e};var n,e={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,r,n){t[r]=n.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",A=c.toStringTag||"@@toStringTag";function l(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(n){l=function(t,r,n){return t[r]=n}}function p(t,r,n,e){var o=r&&r.prototype instanceof v?r:v,a=Object.create(o.prototype),c=new O(e||[]);return i(a,"_invoke",{value:B(t,n,c)}),a}function d(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var f="suspendedStart",h="suspendedYield",m="executing",g="completed",y={};function v(){}function b(){}function C(){}var x={};l(x,s,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(_([])));k&&k!==o&&a.call(k,s)&&(x=k);var E=C.prototype=v.prototype=Object.create(x);function I(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function L(r,n){function e(o,i,c,s){var u=d(r[o],r,i);if("throw"!==u.type){var A=u.arg,l=A.value;return l&&"object"==t(l)&&a.call(l,"__await")?n.resolve(l.__await).then((function(t){e("next",t,c,s)}),(function(t){e("throw",t,c,s)})):n.resolve(l).then((function(t){A.value=t,c(A)}),(function(t){return e("throw",t,c,s)}))}s(u.arg)}var o;i(this,"_invoke",{value:function(t,r){function a(){return new n((function(n,o){e(t,r,n,o)}))}return o=o?o.then(a,a):a()}})}function B(t,r,e){var o=f;return function(a,i){if(o===m)throw Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:n,done:!0}}for(e.method=a,e.arg=i;;){var c=e.delegate;if(c){var s=S(c,e);if(s){if(s===y)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===f)throw o=g,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=m;var u=d(t,r,e);if("normal"===u.type){if(o=e.done?g:h,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(o=g,e.method="throw",e.arg=u.arg)}}}function S(t,r){var e=r.method,o=t.iterator[e];if(o===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=n,S(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),y;var a=d(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=n),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function T(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function _(r){if(r||""===r){var e=r[s];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function t(){for(;++o<r.length;)if(a.call(r,o))return t.value=r[o],t.done=!1,t;return t.value=n,t.done=!0,t};return i.next=i}}throw new TypeError(t(r)+" is not iterable")}return b.prototype=C,i(E,"constructor",{value:C,configurable:!0}),i(C,"constructor",{value:b,configurable:!0}),b.displayName=l(C,A,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,l(t,A,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},I(L.prototype),l(L.prototype,u,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new L(p(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},I(E),l(E,A,"Generator"),l(E,s,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},e.values=_,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,o){return c.type="throw",c.arg=t,r.next=e,o&&(r.method="next",r.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc<=this.prev&&a.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var o=e;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;j(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:_(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=n),y}},e}function e(t,r,n,e,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?r(s):Promise.resolve(s).then(e,o)}function o(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=t.apply(r,n);function c(t){e(i,o,a,c,s,"next",t)}function s(t){e(i,o,a,c,s,"throw",t)}c(void 0)}))}}var a=function(){document.getElementById("form").addEventListener("submit",i)},i=function(){var t=o(r().mark((function t(n){var e,o,a,i,l;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e=document.getElementById("location").value,o=document.getElementById("date").value,t.next=5,c(e);case 5:return a=t.sent,t.next=8,s(a.lat,a.lng,o);case 8:return i=t.sent,t.next=11,u(e);case 11:l=t.sent,A(i,l,a,o),document.getElementById("locationInfo").classList.add("show");case 14:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),c=function(){var t=o(r().mark((function t(n){var e,o;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://api.geonames.org/searchJSON?q=".concat(n,"&maxRows=1&username=").concat("bushrajaber12"));case 2:return e=t.sent,t.next=5,e.json();case 5:return o=t.sent,t.abrupt("return",{lat:o.geonames[0].lat,lng:o.geonames[0].lng,city:o.geonames[0].name,country:o.geonames[0].countryName});case 7:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),s=function(){var t=o(r().mark((function t(n,e,o){var a,i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.weatherbit.io/v2.0/forecast/daily?lat=".concat(n,"&lon=").concat(e,"&key=").concat("fc919991d3f84c2da45e6baa3941d391","&days=1"));case 2:return a=t.sent,t.next=5,a.json();case 5:return i=t.sent,t.abrupt("return",{temp:i.data[0].temp,description:i.data[0].weather.description,icon:i.data[0].weather.icon});case 7:case"end":return t.stop()}}),t)})));return function(r,n,e){return t.apply(this,arguments)}}(),u=function(){var t=o(r().mark((function t(n){var e,o;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pixabay.com/api/?key=".concat("36321904-9ac5004dfd2288011aa37f6d3","&q=").concat(encodeURIComponent(n),"&image_type=photo"));case 2:return e=t.sent,t.next=5,e.json();case 5:return o=t.sent,t.abrupt("return",o.hits.length>0?o.hits[0].webformatURL:"");case 7:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),A=function(t,r,n,e){var o=new Date,a=new Date(e)-o,i=Math.ceil(a/864e5);document.getElementById("locationInfo").innerHTML="\n        <h3>Location Information</h3>\n        City: ".concat(n.city,"<br>\n        Country: ").concat(n.country,"<br><br>\n        <h3>Weather</h3>\n        Weather: ").concat(t.temp,"°C<br>\n        Description: ").concat(t.description,'<br>\n        <img src="https://www.weatherbit.io/static/img/icons/').concat(t.icon,'.png" alt="').concat(t.description,'"><br><br>\n        <h3>Trip Details</h3>\n        Date: ').concat(e,"<br>\n        Days left: ").concat(i,' days<br>\n        Flight Time: TBD<br>\n        <img src="').concat(r,'" alt="Trip Image" style="width:100%;"><br><br>\n        <button id="saveTrip" class="save-button">Save Trip</button>\n        <button id="removeTrip" class="remove-button">Remove Trip</button>\n    '),document.getElementById("saveTrip").addEventListener("click",l),document.getElementById("removeTrip").addEventListener("click",p)};function l(){var t={location:document.getElementById("location").value,date:document.getElementById("date").value};localStorage.setItem("savedTrip",JSON.stringify(t)),console.log("Trip saved!")}function p(){localStorage.removeItem("savedTrip"),console.log("Trip removed!")}"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js").then((function(t){console.log("ServiceWorker registration successful with scope: ",t.scope)}),(function(t){console.log("ServiceWorker registration failed: ",t)}))})),document.addEventListener("DOMContentLoaded",a);var d=n(72),f=n.n(d),h=n(825),m=n.n(h),g=n(659),y=n.n(g),v=n(56),b=n.n(v),C=n(540),x=n.n(C),w=n(113),k=n.n(w),E=n(934),I={};I.styleTagTransform=k(),I.setAttributes=b(),I.insert=y().bind(null,"head"),I.domAPI=m(),I.insertStyleElement=x(),f()(E.A,I),E.A&&E.A.locals&&E.A.locals,a()})()})();
//# sourceMappingURL=main.js.map