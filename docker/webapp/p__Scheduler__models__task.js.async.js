(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[82],{irkD:function(a,e,t){"use strict";t.r(e);var n=t("p0pE"),r=t.n(n),c=t("d6i3"),s=t.n(c),o=t("dCQc");e["default"]={namespace:"task",state:{data:{list:[],pagination:{}},tags:[],events:[],code:[],exec:[],codeString:{},spt:[]},effects:{fetch:s.a.mark(function a(e,t){var n,r,c,u;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=e.callback,c=t.call,t.put,console.log(n),a.next=5,c(o["cd"],n);case 5:u=a.sent,r(u);case 7:case"end":return a.stop()}},a)}),exec:s.a.mark(function a(e,t){var n,r,c,u,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=t.call,c=t.put,console.log(n),a.next=5,r(o["hc"],n);case 5:return u=a.sent,l={},200===u.code&&(l=u.datas),a.next=10,c({type:"saveExec",payload:Array.isArray(l)?l:[]});case 10:case"end":return a.stop()}},a)}),add:s.a.mark(function a(e,t){var n,r,c,u;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=e.callback,c=t.call,t.put,a.next=4,c(o["P"],n);case 4:u=a.sent,r(u);case 6:case"end":return a.stop()}},a)}),set:s.a.mark(function a(e,t){var n,r,c,u;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=e.callback,c=t.call,t.put,a.next=4,c(o["Yd"],n);case 4:u=a.sent,r(u);case 6:case"end":return a.stop()}},a)}),remove:s.a.mark(function a(e,t){var n,r,c,u;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=e.callback,c=t.call,t.put,a.next=4,c(o["jb"],n);case 4:u=a.sent,r(u);case 6:case"end":return a.stop()}},a)}),get:s.a.mark(function a(e,t){var n,r,c,u;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=e.callback,c=t.call,t.put,a.next=4,c(o["tb"],n);case 4:u=a.sent,r(u);case 6:case"end":return a.stop()}},a)}),run:s.a.mark(function a(e,t){var n,r,c,u;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=e.callback,c=t.call,t.put,a.next=4,c(o["Fd"],n);case 4:u=a.sent,r(u);case 6:case"end":return a.stop()}},a)}),tasktag:s.a.mark(function a(e,t){var n,r,c,u;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=e.callback,c=t.call,t.put,a.next=4,c(o["ed"],n);case 4:u=a.sent,r(u);case 6:case"end":return a.stop()}},a)}),taskevent:s.a.mark(function a(e,t){var n,r,c,u;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=e.callback,c=t.call,t.put,a.next=4,c(o["dd"],n);case 4:u=a.sent,r(u);case 6:case"end":return a.stop()}},a)}),codefetch:s.a.mark(function a(e,t){var n,r,c,u,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=t.call,c=t.put,a.next=4,r(o["dc"],n);case 4:return u=a.sent,l={},0===u.code&&(l=u.data),a.next=9,c({type:"save",payload:Array.isArray(l)?l:[]});case 9:callback&&callback();case 10:case"end":return a.stop()}},a)}),TestScriptApi:s.a.mark(function a(e,t){var n,r,c,u,l,p,i,d;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return e.payload,e.callback,n=t.call,r=t.put,a.next=4,n(o["s"]);case 4:for(i in c=a.sent,console.log(c.datas),u=[],l=Object.keys(c.datas),console.log(l),p=[],c.datas)u.push(c.datas[i]);for(d=0;d<u.length;d++)p.push("$.".concat(l[d],":").concat(u[d]));return console.log(p),a.next=15,r({type:"saveApi",payload:Array.isArray(p)?p:[]});case 15:case"end":return a.stop()}},a)})},reducers:{save:function(a,e){return r()({},a,{data:e.payload})},saveExec:function(a,e){return r()({},a,{exec:e.payload})},saveCode:function(a,e){return r()({},a,{code:e.payload})},saveTags:function(a,e){return r()({},a,{tags:e.payload})},saveEvents:function(a,e){return r()({},a,{events:e.payload})},saveCodeString:function(a,e){return r()({},a,{codeString:e.payload})},saveApi:function(a,e){return r()({},a,{spt:e.payload})}}}}}]);