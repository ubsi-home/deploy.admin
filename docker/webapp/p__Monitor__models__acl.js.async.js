(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{"8hjw":function(a,e,t){"use strict";t.r(e);var n=t("p0pE"),c=t.n(n),r=t("d6i3"),s=t.n(r),p=t("dCQc");e["default"]={namespace:"acl",state:{data:{list:[],pagination:{}}},effects:{fetch:s.a.mark(function a(e,t){var n,c,r,u;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callback,r=t.call,t.put,a.next=4,r(p["rd"],n);case 4:u=a.sent,c(u);case 6:case"end":return a.stop()}},a)}),WebAppAclfetch:s.a.mark(function a(e,t){var n,c,r,u,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callback,r=t.call,u=t.put,a.next=4,r(p["id"],n);case 4:return l=a.sent,a.next=7,u({type:"save",payload:l});case 7:c&&c();case 8:case"end":return a.stop()}},a)}),AddWebAppAclfetch:s.a.mark(function a(e,t){var n,c,r,u,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callback,r=t.call,u=t.put,a.next=4,r(p["c"],n);case 4:return l=a.sent,a.next=7,u({type:"save",payload:l});case 7:c&&c();case 8:case"end":return a.stop()}},a)}),submit:s.a.mark(function a(e,t){var n,c,r,u;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callback,r=t.call,t.put,a.next=4,r(p["be"],n);case 4:u=a.sent,c(u);case 6:case"end":return a.stop()}},a)})},reducers:{save:function(a,e){return c()({},a,{data:e.payload.datas})}}}}}]);