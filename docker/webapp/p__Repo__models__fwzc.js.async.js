(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[70],{AP7W:function(a,e,t){"use strict";t.r(e);var r=t("p0pE"),n=t.n(r),c=t("d6i3"),s=t.n(c),u=t("dCQc");e["default"]={namespace:"fwzc",state:{data:{},tags:[],versions:[],group:[],artifact:[],jar:{},cjar:{}},effects:{fetch:s.a.mark(function a(e,t){var r,n,c,p,o,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return r=e.payload,n=e.callback,c=t.call,p=t.put,a.next=4,c(u["Wc"],r);case 4:return o=a.sent,l={},200===o.code&&(l=o.datas),a.next=9,p({type:"save",payload:Array.isArray(l)?l:[]});case 9:n&&n();case 10:case"end":return a.stop()}},a)}),add:s.a.mark(function a(e,t){var r,n,c,p,o,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return r=e.payload,n=e.callback,c=t.call,p=t.put,a.next=4,c(u["O"],r);case 4:return o=a.sent,l={},0===o.code&&(l=o.data),a.next=9,p({type:"save",payload:l});case 9:n&&n();case 10:case"end":return a.stop()}},a)}),remove:s.a.mark(function a(e,t){var r,n,c,p,o,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return r=e.payload,n=e.callback,c=t.call,p=t.put,a.next=4,c(u["ib"],r);case 4:return o=a.sent,l={},0===o.code&&(l=o.data),a.next=9,p({type:"save",payload:l});case 9:n&&n();case 10:case"end":return a.stop()}},a)}),fetchTags:s.a.mark(function a(e,t){var r,n,c,p,o;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return r=e.callback,n=t.call,c=t.put,a.next=4,n(u["Oc"]);case 4:return p=a.sent,o={},0===p.code&&(o=p.data),a.next=9,c({type:"save2",payload:Array.isArray(o)?o:[]});case 9:r&&r();case 10:case"end":return a.stop()}},a)}),fetchVersions:s.a.mark(function a(e,t){var r,n,c,p,o,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return r=e.payload,n=e.callback,c=t.call,p=t.put,a.next=4,c(u["Bc"],r);case 4:return o=a.sent,l={},0===o.code&&(l=o.data),a.next=9,p({type:"save3",payload:Array.isArray(l)?l:[]});case 9:n&&n();case 10:case"end":return a.stop()}},a)}),fetchGroups:s.a.mark(function a(e,t){var r,n,c,p,o,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return r=e.payload,n=e.callback,c=t.call,p=t.put,a.next=4,c(u["Ac"],r);case 4:return o=a.sent,l={},0===o.code&&(l=o.data),a.next=9,p({type:"save4",payload:Array.isArray(l)?l:[]});case 9:n&&n();case 10:case"end":return a.stop()}},a)}),fetchAntifact:s.a.mark(function a(e,t){var r,n,c,p,o,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return r=e.payload,n=e.callback,c=t.call,p=t.put,a.next=4,c(u["ac"],r);case 4:return o=a.sent,l={},0===o.code&&(l=o.data),a.next=9,p({type:"save5",payload:Array.isArray(l)?l:[]});case 9:n&&n();case 10:case"end":return a.stop()}},a)}),fetchJarByGAV:s.a.mark(function a(e,t){var r,n,c,p,o,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return r=e.payload,n=e.callback,c=t.call,p=t.put,a.next=4,c(u["Cc"],r);case 4:return o=a.sent,l={},0===o.code&&(l=o.data),a.next=9,p({type:"save6",payload:l});case 9:n&&n();case 10:case"end":return a.stop()}},a)}),fetchJar:s.a.mark(function a(e,t){var r,n,c,p,o,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return r=e.payload,n=e.callback,c=t.call,p=t.put,a.next=4,c(u["Dc"],r);case 4:return o=a.sent,l={},0===o.code&&(l=o.data),a.next=9,p({type:"save7",payload:l});case 9:n&&n();case 10:case"end":return a.stop()}},a)})},reducers:{save:function(a,e){return n()({},a,{data:e.payload})},save2:function(a,e){return n()({},a,{tags:e.payload})},save3:function(a,e){return n()({},a,{versions:e.payload})},save4:function(a,e){return n()({},a,{group:e.payload})},save5:function(a,e){return n()({},a,{artifact:e.payload})},save6:function(a,e){return n()({},a,{jar:e.payload})},save7:function(a,e){return n()({},a,{cjar:e.payload})}}}}}]);