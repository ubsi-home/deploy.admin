(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[64],{PLDp:function(t,e,n){"use strict";n.r(e);var r=n("p0pE"),a=n.n(r),o=n("dCQc");function c(){c=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),c=new D(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return S()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=b(c,n);if(i){if(i===p)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,c),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var p={};function h(){}function f(){}function d(){}var m={};s(m,a,function(){return this});var y=Object.getPrototypeOf,v=y&&y(y(T([])));v&&v!==e&&n.call(v,a)&&(m=v);var w=d.prototype=h.prototype=Object.create(m);function g(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function x(t,e){function r(a,o,c,i){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,p=u.value;return p&&"object"==typeof p&&n.call(p,"__await")?e.resolve(p.__await).then(function(t){r("next",t,c,i)},function(t){r("throw",t,c,i)}):e.resolve(p).then(function(t){u.value=t,c(u)},function(t){return r("throw",t,c,i)})}i(s.arg)}var a;this._invoke=function(t,n){function o(){return new e(function(e,a){r(t,n,e,a)})}return a=a?a.then(o,o):o()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,p;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=d,s(w,"constructor",d),s(d,"constructor",f),f.displayName=s(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,i,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},g(x.prototype),s(x.prototype,o,function(){return this}),t.AsyncIterator=x,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var c=new x(u(e,n,r,a),o);return t.isGeneratorFunction(n)?c:c.next().then(function(t){return t.done?t.value:c.next()})},g(w),s(w,i,"Generator"),s(w,a,function(){return this}),s(w,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(i&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}e["default"]={namespace:"ptaskManagement",state:{data:[],show:[],showNewData:[],spt:[]},effects:{index:c().mark(function t(e,n){var r,a,i,s,u,l,p,h,f;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,a=n.call,i=n.put,console.log("1111111"),s={limit:0,skip:0,cid:r.cid,name:null,tags:null},t.next=6,a(o["Kb"],s);case 6:return u=t.sent,l=[],p=[],u.data[1].map(function(t,e){l.push({key:e,mark:t._id,name:t.name,explanation:t.tips,tags:t.tags?t.tags:[],caseentrys:t.caseentrys,caseentrys1:t.caseentrys?t.caseentrys.toString():null,circuit:t.cases,code:t.threads,prepare:t.prepare,longTime:t.period,executionTime:0===t.last?"--":"".concat(new Date(t.last).toLocaleDateString().replace(/\//g,"-")," ").concat(new Date(t.last).toTimeString().substr(0,8)),updateTime:t.time,pcase:t.pcase,updateDate:"".concat(new Date(t.time).toLocaleDateString().replace(/\//g,"-")," ").concat(new Date(t.time).toTimeString().substr(0,8))}),p.push({name:t.name})}),h={},f=p.reduce(function(t,e){return!h[e.name]&&(h[e.name]=t.push(e)),t},[]),t.next=14,i({type:"TestScriptApi"});case 14:return console.log("2222222"),t.next=17,i({type:"changeModal",payload:{data:l,nameList:f}});case 17:return t.next=19,i({type:"getTestPcase"});case 19:case"end":return t.stop()}},t)}),getTestPcase:c().mark(function t(e,n){var r,a,i,s,u;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.payload,r=n.call,a=n.put,i={entry:null,services:null,tags:null,limit:0,skip:0},t.next=5,r(o["Jb"],i);case 5:return s=t.sent,u=[],s.data[1].map(function(t){u.push({name:"".concat(t.service,":").concat(t.entry,"[").concat(t.tips,"]"),tid:"(".concat(t._id,")")})}),t.next=10,a({type:"changeModal",payload:{csList:u}});case 10:case"end":return t.stop()}},t)}),getTags:c().mark(function t(e,n){var r,a,i,s;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.payload,r=e.callback,a=n.call,i=n.put,t.next=4,a(o["Mb"]);case 4:return s=t.sent,t.next=7,i({type:"changeModal",payload:{tags:s.data}});case 7:r(s.data);case 8:case"end":return t.stop()}},t)}),plus:c().mark(function t(e,n){var r,a,i,s;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,a=e.callback,i=n.call,n.put,t.next=4,i(o["l"],r);case 4:s=t.sent,a(s);case 6:case"end":return t.stop()}},t)}),del:c().mark(function t(e,n){var r,a,i,s;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,a=e.callback,i=n.call,n.put,t.next=4,i(o["n"],r);case 4:s=t.sent,a(s);case 6:case"end":return t.stop()}},t)}),delM:c().mark(function t(e,n){var r,a,i,s;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,a=e.callback,i=n.call,n.put,t.next=4,i(o["m"],r);case 4:s=t.sent,a(s);case 6:case"end":return t.stop()}},t)}),set:c().mark(function t(e,n){var r,a,i,s;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,a=e.callback,i=n.call,n.put,t.next=4,i(o["t"],r);case 4:s=t.sent,a(s);case 6:case"end":return t.stop()}},t)}),run:c().mark(function t(e,n){var r,a,i,s;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,a=e.callback,i=n.call,n.put,t.next=4,i(o["q"],r);case 4:s=t.sent,a(s);case 6:case"end":return t.stop()}},t)}),search:c().mark(function t(e,n){var r,a,i,s,u;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,a=n.call,i=n.put,t.next=4,a(o["Kb"],r);case 4:return s=t.sent,u=[],s.data[1].map(function(t,e){u.push({key:e,mark:t._id,name:t.name,explanation:t.tips,tags:t.tags?t.tags:[],caseentrys:t.caseentrys,caseentrys1:t.caseentrys?t.caseentrys.toString():null,circuit:t.cases,code:t.threads,prepare:t.prepare,longTime:t.period,pcase:t.pcase,executionTime:0===t.last?"--":"".concat(new Date(t.last).toLocaleDateString().replace(/\//g,"-")," ").concat(new Date(t.last).toTimeString().substr(0,8)),updateTime:t.time,updateDate:"".concat(new Date(t.time).toLocaleDateString().replace(/\//g,"-")," ").concat(new Date(t.time).toTimeString().substr(0,8))})}),t.next=9,i({type:"changeModal",payload:{data:u}});case 9:case"end":return t.stop()}},t)}),getNewTags:c().mark(function t(e,n){var r,a,i,s,u,l,p;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.payload,r=n.call,a=n.put,i={limit:"0",skip:"0"},t.next=5,r(o["Kb"],i);case 5:return s=t.sent,u=[],s.datas[1].map(function(t){u.push({name:t.name})}),l={},p=u.reduce(function(t,e){return!l[e.name]&&(l[e.name]=t.push(e)),t},[]),t.next=12,a({type:"changeModal",payload:{nameList:p}});case 12:case"end":return t.stop()}},t)}),runSpit:c().mark(function t(e,n){var r,a,i,s;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,a=e.callback,i=n.call,n.put,t.next=4,i(o["r"],r);case 4:s=t.sent,a(s.data);case 6:case"end":return t.stop()}},t)}),TestScriptApi:c().mark(function t(e,n){var r,a,i,s,u,l,p,h;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.payload,e.callback,r=n.call,a=n.put,t.next=4,r(o["s"]);case 4:for(p in i=t.sent,s=[],u=Object.keys(i.data),l=[],i.data)s.push(i.data[p]);for(h=0;h<s.length;h++)l.push("".concat(u[h],":").concat(s[h]));return t.next=12,a({type:"changeModal",payload:{spt:l}});case 12:case"end":return t.stop()}},t)}),show:c().mark(function t(e,n){var r,a,i,s,u;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,e.callback,a=n.call,i=n.put,t.next=4,a(o["p"],r);case 4:return s=t.sent,u=[],(new Date).getTime(),s.data[1].map(function(t,e){u.push({key:e,mark:t._id,name:t.tname,container:"\u6d4b\u8bd5\u6d41\u7a0b",threadsCode:t.threads,startTime:"".concat(new Date(t.time0).toLocaleDateString().replace(/\//g,"-")," ").concat(new Date(t.time0).toTimeString().substr(0,8)),endTime:t.time1,endDate:0!=t.time1?"".concat(new Date(t.time1).toLocaleDateString().replace(/\//g,"-")," ").concat(new Date(t.time1).toTimeString().substr(0,8)):"",testTime:0!=t.time1?((t.time1-t.time0)/1e3).toFixed(2)+"s":"",completeNumbers:t.nover,successNumbers:t.nokey,averageDuration:"".concat(t.atime,"ms")})}),t.next=10,i({type:"changeModal",payload:{show:u}});case 10:case"end":return t.stop()}},t)}),showNewData:c().mark(function t(e,n){var r,a,i,s,u;return c().wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,e.callback,a=n.call,i=n.put,t.next=4,a(o["o"],r);case 4:return s=t.sent,u=[],s.datas.map(function(t,e){u.push({code:t.index,service:t.service,entry:t.entry,tips:t.tips,completeNums:t.nover,successNums:t.nokey,averageDuration:"".concat(t.atime,"ms")})}),t.next=9,i({type:"changeModal",payload:{showNewData:u}});case 9:case"end":return t.stop()}},t)})},reducers:{changeModal:function(t,e){var n=e.payload;return a()({},t,n)}}}}}]);