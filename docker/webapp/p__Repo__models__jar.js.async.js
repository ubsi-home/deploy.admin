(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[71],{fQSM:function(a,e,t){"use strict";t.r(e);var n=t("p0pE"),r=t.n(n),c=(t("miYZ"),t("tsqr")),s=t("d6i3"),o=t.n(s),u=t("dCQc");e["default"]={namespace:"jar",state:{data:{list:[],pagination:{}},tags:[]},effects:{fetch:o.a.mark(function a(e,t){var n,r,c,s,p;return o.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=t.call,c=t.put,a.next=4,r(u["Bc"],n);case 4:return s=a.sent,p={},0===s.code&&(p=s.data),a.next=9,c({type:"save",payload:Array.isArray(p)?p:[]});case 9:case"end":return a.stop()}},a)}),add:o.a.mark(function a(e,t){var n,r,s,p,d,l;return o.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=e.callback,s=t.call,p=t.put,a.next=4,s(u["H"],n);case 4:return d=a.sent,0===d.code?c["a"].success("\u6dfb\u52a0\u6210\u529f"):c["a"].error("\u6dfb\u52a0\u5931\u8d25,"+d.data),l={},0===d.code&&(l=d.data),a.next=10,p({type:"save",payload:l});case 10:r&&r();case 11:case"end":return a.stop()}},a)}),remove:o.a.mark(function a(e,t){var n,r,c,s,p,d;return o.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=e.callback,c=t.call,s=t.put,a.next=4,c(u["cb"],n);case 4:return p=a.sent,d={},200===p.code&&(d=p.datas),a.next=9,s({type:"save1",payload:d});case 9:r&&r();case 10:case"end":return a.stop()}},a)}),fetchTags:o.a.mark(function a(e,t){var n,r,c,s,p,d;return o.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=e.callback,c=t.call,s=t.put,a.next=4,c(u["Oc"],n);case 4:return p=a.sent,d={},console.log("1111",p),0===p.code&&(d=p.data),console.log("2222",d),a.next=11,s({type:"save2",payload:Array.isArray(d)?d:[]});case 11:r&&r();case 12:case"end":return a.stop()}},a)})},reducers:{save:function(a,e){return r()({},a,{data:e.payload})},save1:function(a){return r()({},a)},save2:function(a,e){return r()({},a,{tags:e.payload})}}}}}]);