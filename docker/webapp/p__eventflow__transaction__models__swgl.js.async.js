(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[95],{J3X7:function(t,n,e){"use strict";e.r(n);var a=e("p0pE"),r=e.n(a),c=e("d6i3"),s=e.n(c),i=e("1l/V"),p=e.n(i),u=e("t3Un");e("Qyje");function o(t){return l.apply(this,arguments)}function l(){return l=p()(s.a.mark(function t(n){return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("/rest/script/transaction.admin.listBranch",{method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify(n)}));case 1:case"end":return t.stop()}},t)})),l.apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return d=p()(s.a.mark(function t(n){return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("/rest/script/transaction.admin.listTrans",{method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify(n)}));case 1:case"end":return t.stop()}},t)})),d.apply(this,arguments)}function f(t){return w.apply(this,arguments)}function w(){return w=p()(s.a.mark(function t(n){return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("params",n),t.abrupt("return",Object(u["a"])("/rest/script/transaction.admin.deleteTS",{method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify(n)}));case 2:case"end":return t.stop()}},t)})),w.apply(this,arguments)}function y(t){return b.apply(this,arguments)}function b(){return b=p()(s.a.mark(function t(n){return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("/rest/script/transaction.admin.retry",{method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify(n)}));case 1:case"end":return t.stop()}},t)})),b.apply(this,arguments)}function m(t){return T.apply(this,arguments)}function T(){return T=p()(s.a.mark(function t(n){return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("/rest/script/transaction.admin.stop",{method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify(n)}));case 1:case"end":return t.stop()}},t)})),T.apply(this,arguments)}n["default"]={namespace:"swglModel",state:{},effects:{listBranch:s.a.mark(function t(n,e){var a,r,c,i;return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=n.callback,r=n.payload,c=e.call,e.put,t.next=4,c(o,r);case 4:i=t.sent,a&&a(i);case 6:case"end":return t.stop()}},t)}),listTrans:s.a.mark(function t(n,e){var a,r,c,i;return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=n.callback,r=n.payload,c=e.call,e.put,t.next=4,c(h,r);case 4:i=t.sent,a&&a(i);case 6:case"end":return t.stop()}},t)}),deleteTS:s.a.mark(function t(n,e){var a,r,c,i;return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=n.callback,r=n.payload,c=e.call,e.put,t.next=4,c(f,r);case 4:i=t.sent,a&&a(i);case 6:case"end":return t.stop()}},t)}),retry:s.a.mark(function t(n,e){var a,r,c,i;return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=n.callback,r=n.payload,c=e.call,e.put,t.next=4,c(y,r);case 4:i=t.sent,a&&a(i);case 6:case"end":return t.stop()}},t)}),stop:s.a.mark(function t(n,e){var a,r,c,i;return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=n.callback,r=n.payload,c=e.call,e.put,t.next=4,c(m,r);case 4:i=t.sent,a&&a(i);case 6:case"end":return t.stop()}},t)})},reducers:{changeModal:function(t,n){var e=n.payload;return r()({},t,e)}}}}}]);