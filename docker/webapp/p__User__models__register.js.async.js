(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[86],{"0Fdr":function(e,n,a){"use strict";a.r(n);var t=a("p0pE"),r=a.n(t),o=a("d6i3"),c=a.n(o),s=a("7DNP"),i=a("dCQc"),l=a("34ay"),u=a("HZnN"),d=a("Qyje");function p(){return console.log("====window.location.href===",window.location.href),Object(d["parse"])(window.location.href.split("?")[1])}n["default"]={namespace:"register",state:{data:{}},effects:{setPassword:c.a.mark(function e(n,a){var t,r,o,s;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.payload,r=n.callback,o=a.call,a.put,console.log(t),e.next=5,o(i["Sd"],t);case 5:s=e.sent,r(s);case 7:case"end":return e.stop()}},e)}),login:c.a.mark(function e(n,a){var t,r,o,u,d,w,f,g,b,x,h,k,y,v,m;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.payload,r=n.callback,o=a.call,u=a.put,e.next=4,o(i["y"],t);case 4:return d=e.sent,console.log("=======29====",d),w=d.data,console.log("====response31===",w),e.next=10,u({type:"changeLoginStatus",payload:w});case 10:if(200!==w.code){e.next=30;break}if(f=w.loginuser,g=w.logintoken,b=w.loginrole,x=w.loginroleId,h=w.txFlag,Object(l["d"])(f,g,b,x,h),k=new URL(window.location.href),y=p(),v=y.redirect,!v){e.next=25;break}if(m=new URL(v),m.origin!==k.origin){e.next=23;break}v=v.substr(k.origin.length),v.match(/^\/.*#/)&&(v=v.substr(v.indexOf("#")+1)),e.next=25;break;case 23:return window.location.href=v,e.abrupt("return");case 25:return e.next=27,u(s["routerRedux"].replace(v||"/"));case 27:window.location.reload(),e.next=31;break;case 30:r(w);case 31:case"end":return e.stop()}},e)}),submit:c.a.mark(function e(n,a){var t,r,o,s;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.payload,r=a.call,o=a.put,e.next=4,r(i["ob"],t);case 4:return s=e.sent,e.next=7,o({type:"registerHandle",payload:s});case 7:case"end":return e.stop()}},e)}),getRandom:c.a.mark(function e(n,a){var t,r,o,s;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.payload,r=n.callback,o=a.call,a.put,e.next=4,o(i["xb"],t);case 4:s=e.sent,r(s);case 6:case"end":return e.stop()}},e)})},reducers:{registerHandle:function(e,n){var a=n.payload;return Object(l["c"])("user"),Object(u["b"])(),r()({},e,{data:a})},save:function(e,n){return r()({},e,{data:n.payload})},changeLoginStatus:function(e,n){var a=n.payload;return r()({},e,{status:a.code,type:"account"})}}}}}]);