(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[47],{dAYd:function(a,e,t){"use strict";t.r(e);var n=t("p0pE"),c=t.n(n),r=t("d6i3"),s=t.n(r),u=t("dCQc");e["default"]={namespace:"bdly",state:{data:{list:[],pagination:{}},WebAppdata:[],rule:[],ServicEntry:[]},effects:{Fwylfetch:s.a.mark(function a(e,t){var n,c,r,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callback,r=t.call,t.put,a.next=4,r(u["qd"],n);case 4:l=a.sent,c&&c(l);case 6:case"end":return a.stop()}},a)}),Rulefetch:s.a.mark(function a(e,t){var n,c,r,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,c=t.call,r=t.put,a.next=4,c(u["Uc"],n);case 4:return l=a.sent,a.next=7,r({type:"save2",payload:l});case 7:callback&&callback();case 8:case"end":return a.stop()}},a)}),fetch:s.a.mark(function a(e,t){var n,c,r,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callback,r=t.call,t.put,a.next=4,r(u["ud"],n);case 4:l=a.sent,c(l);case 6:case"end":return a.stop()}},a)}),WebAppBdlyfetch:s.a.mark(function a(e,t){var n,c,r,l,p;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callback,r=t.call,l=t.put,a.next=4,r(u["sd"],n);case 4:return p=a.sent,a.next=7,l({type:"save1",payload:p});case 7:c&&c();case 8:case"end":return a.stop()}},a)}),ServicEntryfetch:s.a.mark(function a(e,t){var n,c,r,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callback,r=t.call,t.put,a.next=4,r(u["Vc"],n);case 4:l=a.sent,c(l);case 6:case"end":return a.stop()}},a)}),AddWebAppBdlyfetch:s.a.mark(function a(e,t){var n,c,r,l,p;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callback,r=t.call,l=t.put,a.next=4,r(u["d"],n);case 4:return p=a.sent,a.next=7,l({type:"save",payload:p});case 7:c&&c();case 8:case"end":return a.stop()}},a)}),FWYLsubmit:s.a.mark(function a(e,t){var n,c,r,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callback,r=t.call,t.put,a.next=4,r(u["a"],n);case 4:l=a.sent,c(l);case 6:case"end":return a.stop()}},a)}),submit:s.a.mark(function a(e,t){var n,c,r,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callback,r=t.call,t.put,a.next=4,r(u["de"],n);case 4:l=a.sent,c(l);case 6:case"end":return a.stop()}},a)})},reducers:{save:function(a,e){return c()({},a,{data:e.payload.datas})},save1:function(a,e){return console.log("==action==",e),c()({},a,{WebAppdata:e.payload.datas})},save2:function(a,e){return c()({},a,{rule:e.payload})},save3:function(a,e){return c()({},a,{ServicEntry:e.payload.datas})},save4:function(a,e){return c()({},a,{fwyl:e.payload.datas})}}}}}]);