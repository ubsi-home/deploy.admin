(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[101],{QSZ5:function(e,t,a){e.exports={header:"antd-pro-pages-xtgl-jsgl-components-yhgl-header",search:"antd-pro-pages-xtgl-jsgl-components-yhgl-search",cols:"antd-pro-pages-xtgl-jsgl-components-yhgl-cols",content:"antd-pro-pages-xtgl-jsgl-components-yhgl-content",btns:"antd-pro-pages-xtgl-jsgl-components-yhgl-btns",modelMsg:"antd-pro-pages-xtgl-jsgl-components-yhgl-modelMsg",check:"antd-pro-pages-xtgl-jsgl-components-yhgl-check",arrow:"antd-pro-pages-xtgl-jsgl-components-yhgl-arrow"}},tP6A:function(e,t,a){e.exports={header:"antd-pro-pages-xtgl-jsgl-index-header",search:"antd-pro-pages-xtgl-jsgl-index-search",cols:"antd-pro-pages-xtgl-jsgl-index-cols",content:"antd-pro-pages-xtgl-jsgl-index-content",btns:"antd-pro-pages-xtgl-jsgl-index-btns",modelMsg:"antd-pro-pages-xtgl-jsgl-index-modelMsg",check:"antd-pro-pages-xtgl-jsgl-index-check",arrow:"antd-pro-pages-xtgl-jsgl-index-arrow"}},zmqO:function(e,t,a){"use strict";a.r(t);a("2qtc");for(var l,n,s,r=a("kLXV"),o=(a("Pwec"),a("CtXQ")),i=(a("/zsF"),a("PArb")),c=(a("qVdP"),a("jsC+")),d=(a("lUTK"),a("BvKs")),u=(a("g9YV"),a("wCAj")),m=(a("+L6B"),a("2/Rp")),p=(a("P2fV"),a("NJEC")),h=(a("+BJd"),a("mr32")),g=(a("miYZ"),a("tsqr")),y=a("p0pE"),f=a.n(y),E=a("2Taf"),v=a.n(E),b=a("vZ4D"),k=a.n(b),x=a("l4Ni"),w=a.n(x),S=a("ujKo"),j=a.n(S),V=a("MhPg"),C=a.n(V),M=(a("5NDa"),a("5rEg")),A=(a("OaEy"),a("2fM7")),F=(a("y8nQ"),a("Vl3Y")),P=a("q1tI"),L=a.n(P),I=a("MuoO"),N=a("tP6A"),_=a.n(N),D=(a("bbsP"),a("/wGt")),R=a("QSZ5"),T=a.n(R),O=a("jehZ"),z=a.n(O),U=A["a"].Option,Y=A["a"].OptGroup,q=(l=Object(I["connect"])(function(e){var t=e.tag2,a=e.loading;return{tag2:t,loading:a.models.tag2}}),l((s=function(e){function t(e){var a;v()(this,t),a=w()(this,j()(t).call(this,e)),a.initSelectData=function(e){var t=e.code,l=e.datas;if(t&&t>=200&&t<300){var n=l?l.tags:[];a.setState({tags:n})}else a.showMessage("\u9519\u8bef\uff1a\u83b7\u53d6select Tags\u5931\u8d25\uff01",1)},a.handleChange=function(e){a.setState({value:e}),a.triggerChange(e)},a.triggerChange=function(e){var t=a.props.onChange;t&&t(e)};var l=e.defaultValue||[],n=l||[];return l&&Array.isArray(l)&&l.length>0&&a.handleChange(l),a.state={defaultValue:l,value:n||[],tags:[]},a}return C()(t,e),k()(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){var a,l=e.defaultValue;e.value;return l!=t.defaultValue&&(a||(a={},a.props={}),a.defaultValue=l,a.props.defaultValue=l),null}}]),k()(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.param,l=t.dispatch;if(a&&a.length>0){var n="";a&&Array.isArray(a)&&a.map(function(e,t){t==a.length-1?n+=e:n+=e+","});var s={env:n};try{l({type:"tag2/commonList",payload:s,callback:function(t){e.initSelectData(t)}})}catch(e){}}}},{key:"showMessage",value:function(e,t){t||(t=1),1===t?g["a"].error(e):2===t?g["a"].warning(e):3===t?g["a"].success(e):g["a"].error("\u9519\u8bef\uff1a\u9519\u8bef\u53c2\u6570\uff1alevel="+t)}},{key:"render",value:function(){var e=this.props,t=(e.name,e.size),a=e.style,l=(e.multiple,e.showArrow,e.width),n=e.disabled,s=this.state.defaultValue,r=this.state.tags,o={size:t||"default",style:f()({},a),width:l||"100%",mode:"multiple",placeholder:"\u8bf7\u9009\u62e9",disabled:n||!1},i=this.props.value;return L.a.createElement("div",null,L.a.createElement(A["a"],z()({},o,{onChange:this.handleChange,defaultValue:s||[],value:i,placeholder:"\u8bf7\u9009\u62e9"}),r?r.map(function(e){e._id,e.name;return L.a.createElement(Y,{label:e.name,key:e._id},e.tagValue?e.tagValue.map(function(e){return L.a.createElement(U,{value:e.value,key:e.value},e.value)}):"")}):""))}}]),t}(P["Component"]),n=s))||n),B=q,K=F["a"].Item,Z=A["a"].Option,J=function(e){function t(e){var a;return v()(this,t),a=w()(this,j()(t).call(this,e)),a.state={children:[],tagList:[]},a}return C()(t,e),k()(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.dispatch,l=t.authUsers;console.log(">>>>>>>> authUsers = ",l);var n=[];l.map(function(e){return n.push(e.id)}),this.setState({rows:l||[],selectedRowKeys:n}),console.log(">>>>>>>>>> this.state.rows = "+this.state.rows);var s=new Array;s.push("account",1),a({type:"common_yhgl/index",payload:{name:null,types:null,tags:null,roles:null,domain:"system",props:null,sortBy:s,skip:0,limit:0},callback:function(t){var a=t,l=[];a.map(function(e){l.push(L.a.createElement(Z,{key:e},e))}),e.setState({tagList:l})}})}},{key:"showDxmb",value:function(){this.setState({dxmbListStaus:!0})}},{key:"handleChange",value:function(e){this.setState({children:e})}},{key:"changeList",value:function(){this.setState({dxmbListStaus:!1})}},{key:"getList",value:function(e){this.setState({dxmbListStaus:!1});var t=[];e.map(function(e){t.push(e.name)}),this.setState({children:t})}},{key:"handleSearch",value:function(){var e=this.props,t=e.form,a=e.dispatch,l=t.getFieldValue("yhm")?t.getFieldValue("yhm"):null,n=t.getFieldValue("mz")?t.getFieldValue("mz"):null,s=t.getFieldValue("bq")?t.getFieldValue("bq"):[],r={},o="$regex";if(null==l||"null"==l);else{var i={};i[o]=l,console.log("====_account===",i),r.account=i}var c=new Array;c.push("account",1),a({type:"common_yhgl/dem",payload:{limit:0,skip:0,name:null==n?null:"/"+n,tags:0===s.length?null:s,domain:"system",props:0===Object.keys(r).length?null:r,sortBy:c,roles:null,types:null}})}},{key:"handleFormReset",value:function(){var e=this.props,t=e.form,a=e.dispatch;t.resetFields();var l=new Array;l.push("account",1),a({type:"common_yhgl/index",payload:{name:null,types:null,tags:null,roles:null,domain:"system",props:null,sortBy:l,skip:0,limit:0}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.form,l=t.data,n=t.yhglVisible,s=t.handleSelectedYhgl,r=t.handleYhglVisible,o=this.state,i=(o.dxmbListStaus,o.children,o.tagList,o.rows),p=(o.selectStaus,a.getFieldDecorator);console.log("===========rows ",i);var g={selectedRowKeys:this.state.selectedRowKeys,type:void 0===this.props.type?"checkbox":this.props.type,onChange:function(t,a){console.log("selectedRowKeys: ".concat(t),"selectedRows: ",a),console.log("========= selectedRows = ",a),e.setState({selectedRowKeys:t,rows:a})}},y=function(e){return L.a.createElement(d["a"],{style:{padding:"5px 10px"}},"\u68c0\u67e5\u5bf9\u8c61\u63cf\u8ff0\uff1a",e)},f=[{title:"\u7528\u6237\u540d",dataIndex:"yname",key:"yname",align:"center"},{title:"\u59d3\u540d",dataIndex:"name",key:"name",align:"center",render:function(e,t){return L.a.createElement(c["a"],{overlay:y(t.spt)},L.a.createElement("span",null,e))}},{title:"\u7528\u6237\u6807\u7b7e",key:"tags",align:"center",dataIndex:"tags",render:function(e){return L.a.createElement("span",null,e.map(function(e){return L.a.createElement(h["a"],{color:"blue",key:e},e.toUpperCase())}))}}],E=function(t){s(e.state.rows)};return L.a.createElement("div",null,L.a.createElement(D["a"],{title:"\u7528\u6237\u5217\u8868",width:"50%",onClose:function(){return r()},visible:n,destroyOnClose:!0},L.a.createElement("div",{className:T.a.header},L.a.createElement(F["a"],{onSubmit:this.handleSearch,layout:"inline"},L.a.createElement("div",{className:T.a.search},L.a.createElement("div",null,L.a.createElement("div",{className:T.a.cols},L.a.createElement(K,{label:L.a.createElement("span",{style:{width:"60px",display:"inline-block"}},"\u7528\u6237\u540d")},p("yhm")(L.a.createElement(M["a"],{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",style:{width:300}}))),L.a.createElement(K,{label:L.a.createElement("span",{style:{width:"60px",display:"inline-block"}},"\u540d\u5b57")},p("mz")(L.a.createElement(M["a"],{placeholder:"\u8bf7\u8f93\u5165\u540d\u5b57",style:{width:300}})))),L.a.createElement("div",{className:T.a.cols},L.a.createElement(K,{label:L.a.createElement("span",{style:{width:"60px",display:"inline-block"}},"\u6807\u7b7e")},p("bq")(L.a.createElement(B,{style:{width:300},param:["dev"]}))),L.a.createElement("div",null,L.a.createElement("span",{className:T.a.submitButtons},L.a.createElement(m["a"],{type:"primary",onClick:this.handleSearch.bind(this)},"\u67e5\u8be2"),L.a.createElement(m["a"],{style:{marginLeft:8},onClick:this.handleFormReset.bind(this)},"\u91cd\u7f6e")))))))),L.a.createElement("div",null,L.a.createElement("div",null,L.a.createElement(u["a"],{rowKey:function(e){return e.id},rowSelection:g,columns:f,dataSource:l,size:"small"})),L.a.createElement("div",{style:{position:"absolute",left:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right"}},L.a.createElement(m["a"],{onClick:function(){return r()},style:{marginRight:8}},"\u53d6\u6d88"),L.a.createElement(m["a"],{onClick:E,type:"primary"},"\u786e\u5b9a")))))}}]),t}(P["Component"]),Q=Object(I["connect"])(function(e){return e.common_yhgl})(F["a"].create()(J)),G=(a("ioi1"),a("IV+2"),a("P4xi")),X=a("6Hmz"),H=X["a"].xtgl_jsgl_addRole.key,$=X["a"].xtgl_jsgl_detail.key,W=X["a"].xtgl_jsgl_delete.key,ee=X["a"].xtgl_jsgl_userList.key,te=X["a"].xtgl_jsgl_addSubRole.key,ae=F["a"].Item,le=A["a"].Option,ne=M["a"].TextArea,se=[],re=0;re<20;re++)se.push({key:re.toString(),title:"content".concat(re+1),description:"description of content".concat(re+1)});se.filter(function(e){return+e.key%3>1}).map(function(e){return e.key});var oe=function(e){function t(){var e,a;v()(this,t);for(var l=arguments.length,n=new Array(l),s=0;s<l;s++)n[s]=arguments[s];return a=w()(this,(e=j()(t)).call.apply(e,[this].concat(n))),a.state={modelStaus:!1,modelTitle:"",modelType:"",modelContent:"",yh:[]},a.showModel=function(e,t,l){if(a.setState({modelStaus:!0,modelTitle:t,modelType:e,modelContent:l}),"02"===e){var n=a.props.dispatch,s=new Array;s.push("account",1),console.log("====val.node===",l.node);var r=new Array;r.push(l.node),n({type:"jsglModel/listUserByNode",payload:{name:null,types:null,tags:null,roles:r,domain:"system",props:null,sortBy:s,skip:0,limit:0},callback:function(e){console.log("=======91=====",e);var t=[];e.map(function(e){t.push({id:e._id,yname:e.account,name:e.name,tags:e.tags?e.tags:[],staus:e.status,spt:e.desc,email:e.email,phone:e.phone})}),a.setState({yh:t})}})}},a.closeModel=function(){a.setState({modelStaus:!1,modelTitle:"",modelType:"",modelContent:""})},a.handleSearch=function(){var e=a.props,t=e.form,l=e.dispatch,n=t.getFieldValue("name")?t.getFieldValue("name"):null,s=t.getFieldValue("tags")?t.getFieldValue("tags").join(","):null;l({type:"jsglModel/dem",payload:{depth:0,name:n,domain:"system",tags:s}})},a.handleFormReset=function(){var e=a.props,t=e.form,l=e.dispatch;t.resetFields(),l({type:"jsglModel/index",payload:{tags:null,depth:0,name:null,domain:"system"}})},a.showYhgl=function(e){!e||e.length<1?e=[]:e.map(function(t,a){var l=f()({id:t.key},t);e[a]=l}),console.log("========authUsers = ",e),a.setState({yhglVisible:"true",authUsers:e})},a.handleChange=function(e){var t=a.state.yh.filter(function(t){return t!==e});a.setState({yh:t})},a.getYhglMsg=function(e){a.setState({yhglVisible:"false"}),a.setState({yh:e})},a.close=function(){a.setState({yhglVisible:"false"})},a}return C()(t,e),k()(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;console.log("====jsgl======"),e({type:"jsglModel/index",payload:{tags:null,depth:0,name:null,domain:"system"}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.form,l=t.data,n=t.tagslist,s=t.nameList,y=t.nodeList,f=this.state,E=f.modelStaus,v=f.modelTitle,b=f.modelType,k=f.modelContent,x=f.yh,w=a.getFieldDecorator;console.log("====nameList====",s),console.log("====nodeList====",y);var S=[];n.forEach(function(e){S.push(L.a.createElement(le,{key:e},e))});var j=function(){var t=e.props.dispatch,l=a.getFieldValue("nameP")?a.getFieldValue("nameP"):null,n=a.getFieldValue("nodeP")?a.getFieldValue("nodeP"):null,r=a.getFieldValue("sptP")?a.getFieldValue("sptP"):null,o=a.getFieldValue("tagsP")?a.getFieldValue("tagsP"):null;if(null!==l){if(console.log("====nodeList===",y),console.log("====node===",n),"00"===b){var i={};if(s.includes(l))return g["a"].error("\u89d2\u8272\u540d\u79f0\u4e0d\u80fd\u91cd\u590d\uff01");if(y.includes(n))return g["a"].error("\u89d2\u8272\u8282\u70b9\u4e0d\u80fd\u91cd\u590d\uff01");if(null==l||"null"==l)return g["a"].error("\u89d2\u8272\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01");if(i.name=l,null==n||"null"==n)return g["a"].error("\u89d2\u8272\u8282\u70b9\u4e0d\u80fd\u4e3a\u7a7a\uff01");i.node=n,i.domain="system",i.status=0,i.desc=r,i.tags=o,console.log("======map===",i),t({type:"jsglModel/add",payload:{role:i},callback:function(t){console.log("e=====",t),0===t.code?(g["a"].success("\u589e\u52a0\u89d2\u8272\u6210\u529f"),e.handleSearch()):g["a"].error("\u589e\u52a0\u89d2\u8272\u5931\u8d25,\u539f\u56e0\u4e3a\uff1a".concat(t.message))}})}if("01"===b){var c={};if(null==l||"null"==l)return g["a"].error("\u89d2\u8272\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01");c.name=l,c.desc=r,c.tags=o,t({type:"jsglModel/set",payload:{roleId:k._id,props:c},callback:function(t){0===t.code?(g["a"].success("\u4fee\u6539\u89d2\u8272\u6210\u529f"),e.handleSearch()):g["a"].error("\u4fee\u6539\u89d2\u8272\u5931\u8d25,\u539f\u56e0\u4e3a\uff1a".concat(t.message))}})}if("02"===b){var d=[];if(e.state.yh)for(var u=0;u<e.state.yh.length;u++)d.push(e.state.yh[u].id);t({type:"jsglModel/addUser",payload:{roleID:k.node,userID:d?d.join(","):null,domain:"system"},callback:function(t){0===t.code?(g["a"].success("\u4fee\u6539\u89d2\u8272\u6210\u5458\u6210\u529f"),e.handleSearch()):g["a"].error("\u4fee\u6539\u89d2\u8272\u6210\u5458\u5931\u8d25,\u539f\u56e0\u4e3a\uff1a".concat(t.message))}})}if("03"===b&&t({type:"jsglModel/del",payload:{domain:"system",node:k.node},callback:function(t){0===t.code?(g["a"].success("\u5220\u9664\u89d2\u8272\u6210\u529f"),e.handleSearch()):g["a"].error("\u5220\u9664\u89d2\u8272\u5931\u8d25,\u539f\u56e0\u4e3a\uff1a".concat(t.message))}}),"04"===b){if(y.includes(n))return g["a"].error("\u89d2\u8272\u8282\u70b9\u4e0d\u80fd\u91cd\u590d\uff01");var m={};if(null==l||"null"==l)return g["a"].error("\u89d2\u8272\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01");if(m.name=l,null==n||"null"==n)return g["a"].error("\u89d2\u8272\u8282\u70b9\u4e0d\u80fd\u4e3a\u7a7a\uff01");m.node=k.node+"."+n,m.domain="system",m.status=0,m.desc=r,m.tags=o,console.log("======map===",m),t({type:"jsglModel/add",payload:{role:m},callback:function(t){0===t.code?(g["a"].success("\u589e\u52a0\u5b50\u89d2\u8272\u6210\u529f"),e.handleSearch()):g["a"].error("\u589e\u52a0\u5b50\u89d2\u8272\u5931\u8d25,\u539f\u56e0\u4e3a\uff1a".concat(t.message))}})}e.setState({modelStaus:!1,modelTitle:"",modelType:"",modelContent:""})}else g["a"].error("\u89d2\u8272\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a")},V=[{title:"\u7528\u6237\u540d",dataIndex:"yname",key:"yname",align:"center"},{title:"\u59d3\u540d",dataIndex:"name",key:"name",align:"center"},{title:"\u7528\u6237\u6807\u7b7e",key:"tags",align:"center",dataIndex:"tags",render:function(e){return L.a.createElement("span",null,e?e.map(function(e){return L.a.createElement(h["a"],{color:"blue",key:e},e.toUpperCase())}):[])}},{title:"\u64cd\u4f5c",align:"center",key:"action",render:function(t){return L.a.createElement(p["a"],{title:"\u786e\u5b9a\u8981\u5220\u9664\u6b64\u7528\u6237?",onConfirm:e.handleChange.bind(e,t),okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88"},L.a.createElement("a",{href:"javaSrcipt:;"},"\u5220\u9664"))}}];console.log("===modelContent===",k);var C="";if(null==k||"null"==k);else{var P=k.node;if(console.log("===jsjd==",P),"undefined"==P||void 0==P);else{var I=P.split(".");console.log("====jsjdllist===",I),C=I[I.length-1]}}console.log("===lastnode==",C);var N=L.a.createElement("div",{className:_.a.modelMsg},"03"===b?L.a.createElement("p",{style:{textAlign:"center",color:"red"}},"\u786e\u8ba4\u64cd\u4f5c\u5c06\u5220\u9664\u8be5\u89d2\u8272\u53ca\u5176\u5b50\u89d2\u8272\u7684\u6240\u6709\u76f8\u5173\u8bb0\u5f55\uff0c\u8bf7\u614e\u91cd\u9009\u62e9\u3002"):null,L.a.createElement(F["a"],{onSubmit:j},L.a.createElement(ae,{label:L.a.createElement("span",{style:{width:"90px",display:"inline-block"}},"\u6570\u636e\u57df")},w("sjyP",{initialValue:k?k.domain:"syetem"})(L.a.createElement(M["a"],{disabled:!0,style:{width:300}}))),L.a.createElement(ae,{label:L.a.createElement("span",{style:{width:"90px",display:"inline-block"}},"\u7236\u7ea7\u89d2\u8272")},w("fjjsP",{initialValue:"04"===b?k.name:k&&"00"!==b?k.parentName:" "})(L.a.createElement(M["a"],{disabled:!0,style:{width:300}}))),L.a.createElement(ae,{label:L.a.createElement("span",{style:{width:"90px",display:"inline-block"}},"\u7236\u7ea7\u89d2\u8272\u8282\u70b9")},w("fjjsPnode",{initialValue:"04"===b?k.node:k&&"00"!==b?k.parentNode:" "})(L.a.createElement(M["a"],{disabled:!0,style:{width:300}}))),L.a.createElement(ae,{label:L.a.createElement("span",{style:{width:"90px",display:"inline-block"}},L.a.createElement("span",{style:{paddingRight:"10px",color:"red"}},"*"),"\u89d2\u8272\u8282\u70b9")},w("nodeP",{rules:[{required:!0,message:"\u89d2\u8272\u8282\u70b9\u4e0d\u80fd\u4e3a\u7a7a"}],initialValue:k&&"04"!==b?C:null})(L.a.createElement(M["a"],{disabled:!("01"!==b),placeholder:"\u8bf7\u8f93\u5165\u89d2\u8272\u8282\u70b9",style:{width:300}}))),L.a.createElement(ae,{label:L.a.createElement("span",{style:{width:"90px",display:"inline-block"}},L.a.createElement("span",{style:{paddingRight:"10px",color:"red"}},"*"),"\u89d2\u8272\u540d\u79f0")},w("nameP",{rules:[{required:!0,message:"\u89d2\u8272\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}],initialValue:k&&"04"!==b?k.name:null})(L.a.createElement(M["a"],{disabled:!("03"!==b&&"02"!==b),placeholder:"\u8bf7\u8f93\u5165\u89d2\u8272\u540d\u79f0",style:{width:300}}))),L.a.createElement(ae,{label:L.a.createElement("span",{style:{width:"90px",display:"inline-block"}},"\u89d2\u8272\u63cf\u8ff0")},w("sptP",{initialValue:k&&"04"!==b?k.desc:null})(L.a.createElement(ne,{disabled:!("03"!==b&&"02"!==b),placeholder:"\u8bf7\u8f93\u5165\u89d2\u8272\u63cf\u8ff0",style:{width:300}}))),"03"===b||"02"===b?null:L.a.createElement(ae,{label:L.a.createElement("span",{style:{width:"90px",display:"inline-block"}},"\u89d2\u8272\u6807\u7b7e")},w("tagsP",{initialValue:k&&"04"!==b?k.tags:[]})(L.a.createElement(A["a"],{mode:"tags",style:{width:"300px"},placeholder:"\u8bf7\u8f93\u5165\u6807\u7b7e\uff01",allowClear:!0},S),{})),"02"===b?L.a.createElement("div",null,L.a.createElement(ae,{style:{marginRight:"42%"},label:L.a.createElement("span",{style:{width:"90px",display:"inline-block"}},"\u89d2\u8272\u6210\u5458")},L.a.createElement(m["a"],{type:"primary",size:"small",onClick:this.showYhgl.bind(this,x)},"\u9009\u62e9\u89d2\u8272\u6210\u5458")),L.a.createElement(u["a"],{columns:V,dataSource:x,size:"small"})):null)),D=function(e){return L.a.createElement(d["a"],{style:{padding:"5px 10px"}},"\u89d2\u8272\u63cf\u8ff0\uff1a",e)},R=function(t){return L.a.createElement(d["a"],null,L.a.createElement(d["a"].Item,null,L.a.createElement("span",{onClick:function(a){a&&a.preventDefault(),G["a"].checkAuthAndExecute(e.props.dispatch,W,e.showModel,["03","\u5220\u9664",t])}},"\u5220\u9664")),L.a.createElement(d["a"].Item,null,L.a.createElement("span",{onClick:function(a){a&&a.preventDefault(),G["a"].checkAuthAndExecute(e.props.dispatch,ee,e.showModel,["02","\u89d2\u8272\u6210\u5458",t])}},"\u89d2\u8272\u6210\u5458")),L.a.createElement(d["a"].Item,null,L.a.createElement("span",{onClick:function(a){a&&a.preventDefault(),G["a"].checkAuthAndExecute(e.props.dispatch,te,e.showModel,["04","\u589e\u52a0\u5b50\u89d2\u8272",t])}},"\u589e\u52a0\u5b50\u89d2\u8272")))},T=[{title:"\u89d2\u8272\u540d\u79f0",dataIndex:"name",key:"name",render:function(e,t){return L.a.createElement(c["a"],{overlay:D(t.desc)},L.a.createElement("span",null,e))}},{title:"\u89d2\u8272\u8282\u70b9",dataIndex:"node",key:"node",render:function(e,t){new Array;var a="",l=t.node;if(console.log("===jsjd==",l),"undefined"==l||void 0==l);else{var n=l.split(".");console.log("====jsjdllist===",n),a=n[n.length-1]}return L.a.createElement("span",null,a)}},{title:"\u89d2\u8272\u6807\u7b7e",key:"tags",align:"center",dataIndex:"tags",render:function(e){return e?L.a.createElement("span",null,e.map(function(e){return L.a.createElement(h["a"],{color:"blue",key:e},e.toUpperCase())})):null}},{title:"\u64cd\u4f5c",align:"center",key:"action",render:function(t){return L.a.createElement("span",null,L.a.createElement("a",{href:"javaSrcipt:;",onClick:function(a){a&&a.preventDefault(),G["a"].checkAuthAndExecute(e.props.dispatch,$,e.showModel,["01","\u8be6\u60c5",t])}},"\u8be6\u60c5"),L.a.createElement(i["a"],{type:"vertical"}),L.a.createElement(c["a"],{overlay:R(t)},L.a.createElement(m["a"],{size:"small"},"\u64cd\u4f5c ",L.a.createElement(o["a"],{type:"down"}))))}}];return L.a.createElement("div",null,L.a.createElement("div",{className:_.a.header},L.a.createElement(F["a"],{onSubmit:this.handleSearch,layout:"inline"},L.a.createElement("div",{className:_.a.search},L.a.createElement("div",null,L.a.createElement("div",{className:_.a.cols},L.a.createElement(ae,{label:L.a.createElement("span",{style:{width:"60px",display:"inline-block"}},"\u89d2\u8272\u540d\u79f0")},w("name")(L.a.createElement(M["a"],{placeholder:"\u8bf7\u8f93\u5165\u89d2\u8272\u540d\u79f0",style:{width:300}}))),L.a.createElement(ae,{label:L.a.createElement("span",{style:{width:"60px",display:"inline-block"}},"\u89d2\u8272\u6807\u7b7e")},w("tags")(L.a.createElement(A["a"],{mode:"tags",style:{width:"300px"},placeholder:"\u8bf7\u8f93\u5165\u6807\u7b7e\uff01",allowClear:!0},S),{}))),L.a.createElement("div",{className:_.a.cols})),L.a.createElement("span",{className:_.a.submitButtons},L.a.createElement(m["a"],{type:"primary",onClick:this.handleSearch.bind(this)},"\u67e5\u8be2"),L.a.createElement(m["a"],{style:{marginLeft:8},onClick:this.handleFormReset.bind(this)},"\u91cd\u7f6e"))))),L.a.createElement("div",{className:_.a.content},L.a.createElement("div",{className:_.a.btns},L.a.createElement(m["a"],{type:"primary",onClick:function(t){t&&t.preventDefault(),G["a"].checkAuthAndExecute(e.props.dispatch,H,e.showModel,["00","\u589e\u52a0\u89d2\u8272",null])}},L.a.createElement(o["a"],{type:"plus"}),"\u589e\u52a0\u89d2\u8272")),L.a.createElement("div",null,L.a.createElement(u["a"],{columns:T,dataSource:l,size:"small"}))),L.a.createElement(r["a"],{title:v,visible:E,onOk:j,onCancel:this.closeModel.bind(this),destroyOnClose:!0},L.a.createElement("div",{style:{margin:"0 auto"}},N)),"true"==this.state.yhglVisible?L.a.createElement(Q,{authUsers:this.state.authUsers||[],yhglVisible:"true"==this.state.yhglVisible,handleSelectedYhgl:this.getYhglMsg.bind(this),handleYhglVisible:this.close.bind(this)}):null)}}]),t}(P["Component"]);t["default"]=Object(I["connect"])(function(e){return e.jsglModel})(F["a"].create()(oe))}}]);