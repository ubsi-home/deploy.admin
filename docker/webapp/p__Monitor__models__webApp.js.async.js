(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[57],{HTfI:function(t,e,r){"use strict";r.r(e);var n=r("p0pE"),a=r.n(n),o=r("dCQc"),i=r("P4xi");function c(){c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new E(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var p={};function f(){}function h(){}function d(){}var v={};u(v,a,function(){return this});var y=Object.getPrototypeOf,w=y&&y(y(A([])));w&&w!==e&&r.call(w,a)&&(v=w);var g=d.prototype=f.prototype=Object.create(v);function m(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function x(t,e){function n(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,p=s.value;return p&&"object"==typeof p&&r.call(p,"__await")?e.resolve(p.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(p).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(u.arg)}var a;this._invoke=function(t,r){function o(){return new e(function(e,a){n(t,r,e,a)})}return a=a?a.then(o,o):o()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function A(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return h.prototype=d,u(g,"constructor",d),u(d,"constructor",h),h.displayName=u(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},m(x.prototype),u(x.prototype,o,function(){return this}),t.AsyncIterator=x,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new x(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},m(g),u(g,i,"Generator"),u(g,a,function(){return this}),u(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=A,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}e["default"]={namespace:"webApp",state:{data:{list:[],pagination:{}},tags:[],Urltags:[]},effects:{addWebApp:c().mark(function t(e,r){var n,a,u,s,l,p,f;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,a=e.callback,u=r.call,r.put,s=n.reqData,l=n.type,delete n.reqData,delete n.type,p="",0==l?p="\u8bbe\u7f6eACL":1==l?p="\u672c\u5730\u8def\u7531":2==l&&(p="\u65e5\u5fd7\u914d\u7f6e"),t.next=10,u(o["S"],n);case 10:f=t.sent,console.log("=====20====",f),i["a"].getAddAuditLog("\u4fee\u6539","WebApp\u53d1\u73b0-"+p+"-\u4fee\u6539",n,s,f),a(f);case 14:case"end":return t.stop()}},t)}),QueryWebApp:c().mark(function t(e,r){var n,a,i,u;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.callback,a=e.payload,i=r.call,r.put,t.next=4,i(o["g"],a);case 4:u=t.sent,n&&n(u);case 6:case"end":return t.stop()}},t)}),fetch:c().mark(function t(e,r){var n,a,i,u;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,a=e.callback,i=r.call,r.put,t.next=4,i(o["pd"],n);case 4:u=t.sent,a(u);case 6:case"end":return t.stop()}},t)}),queryWebApp:c().mark(function t(e,r){var n,a,i,u,s;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,a=e.callback,i=r.call,u=r.put,t.next=4,i(o["hc"],n);case 4:return s=t.sent,t.next=7,u({type:"save3",payload:s});case 7:a&&a();case 8:case"end":return t.stop()}},t)}),Tagsfetch:c().mark(function t(e,r){var n,a,i,u;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,a=e.callback,i=r.call,r.put,t.next=4,i(o["sd"],n);case 4:u=t.sent,a(u);case 6:case"end":return t.stop()}},t)}),UrlTagsfetch:c().mark(function t(e,r){var n,a,i,u;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,a=e.callback,i=r.call,r.put,t.next=4,i(o["nd"],n);case 4:u=t.sent,a(u);case 6:case"end":return t.stop()}},t)}),remove:c().mark(function t(e,r){var n,a,u,s;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,a=e.callback,u=r.call,r.put,t.next=4,u(o["Id"],n);case 4:s=t.sent,i["a"].getAddAuditLog("\u5220\u9664","\u624b\u52a8\u53d1\u73b0-"+n.type+"-\u5220\u9664",n,n,s),a(s);case 7:case"end":return t.stop()}},t)}),update:c().mark(function t(e,r){var n,a,u,s,l;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,a=e.callback,u=r.call,r.put,s=n.reqData,delete n.reqData,t.next=6,u(o["v"],n);case 6:l=t.sent,i["a"].getAddAuditLog("\u4fee\u6539","\u624b\u52a8\u53d1\u73b0-"+n.type+"-\u4fee\u6539",n,s,l),a(l);case 9:case"end":return t.stop()}},t)}),add:c().mark(function t(e,r){var n,a,u,s;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,a=e.callback,u=r.call,r.put,t.next=4,u(o["b"],n);case 4:s=t.sent,console.log("payload.type==============:",n.type),i["a"].getAddAuditLog("\u65b0\u589e","\u624b\u52a8\u53d1\u73b0-"+n.type+"-\u65b0\u589e",n,null,s),a(s);case 8:case"end":return t.stop()}},t)}),removeWebApp:c().mark(function t(e,r){var n,a,u,s,l;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,a=e.callback,u=r.call,r.put,s=n.reqData,delete n.reqData,console.log("payload============\uff1b",n),t.next=7,u(o["Md"],n);case 7:l=t.sent,i["a"].getAddAuditLog("\u5220\u9664","WebApp\u53d1\u73b0-\u5220\u9664",n,s,l),a(l);case 10:case"end":return t.stop()}},t)}),queryQX:c().mark(function t(e,r){var n,a,i,u,s;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,a=e.callback,i=r.call,u=r.put,t.next=4,i(o["Tc"],n);case 4:return s=t.sent,t.next=7,u({type:"save",payload:s});case 7:a&&a();case 8:case"end":return t.stop()}},t)})},reducers:{save:function(t,e){return a()({},t,{data:e.payload})},save1:function(t,e){return a()({},t,{tags:e.payload})},save2:function(t,e){return a()({},t,{Urltags:e.payload})},save3:function(t,e){return console.log("======action===",e),a()({},t,{WebAppData:e.payload})}}}}}]);