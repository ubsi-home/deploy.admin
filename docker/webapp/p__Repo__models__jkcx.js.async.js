(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[74],{GB2V:function(e,a,t){"use strict";t.r(a);var n=t("p0pE"),r=t.n(n),s=t("d6i3"),c=t.n(s),u=t("dCQc");a["default"]={namespace:"jkcxRepo",state:{data:{list:[],pagination:{}},requestResult:{}},effects:{fetch:c.a.mark(function e(a,t){var n,r,s,p,o;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=t.call,s=t.put,e.next=4,r(u["Qc"],n);case 4:return p=e.sent,o={},0===p.code&&(o=p.data),e.next=9,s({type:"save",payload:o});case 9:case"end":return e.stop()}},e)}),RequestFetch:c.a.mark(function e(a,t){var n,r,s,p,o;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=t.call,s=t.put,e.next=4,r(u["i"],n);case 4:return p=e.sent,o={},o=0===p.code?p.datad:p.message,e.next=9,s({type:"save1",payload:o});case 9:case"end":return e.stop()}},e)})},reducers:{save:function(e,a){return r()({},e,{data:a.payload})},save1:function(e,a){return r()({},e,{requestResult:a.payload})}}}}}]);