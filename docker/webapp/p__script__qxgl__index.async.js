(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[99],{TEGw:function(e,t,a){"use strict";a.r(t);a("bbsP");var l=a("/wGt"),n=(a("Pwec"),a("CtXQ")),r=(a("+L6B"),a("2/Rp")),s=(a("g9YV"),a("wCAj")),i=a("jehZ"),o=a.n(i),c=(a("7Kak"),a("9yH6")),u=(a("/zsF"),a("PArb")),d=(a("+BJd"),a("mr32")),p=(a("miYZ"),a("tsqr")),m=a("gWZ8"),h=a.n(m),g=a("2Taf"),y=a.n(g),f=a("vZ4D"),E=a.n(f),b=a("l4Ni"),x=a.n(b),v=a("ujKo"),w=a.n(v),k=a("MhPg"),S=a.n(k),_=(a("2qtc"),a("kLXV")),C=(a("5NDa"),a("5rEg")),T=(a("OaEy"),a("2fM7")),q=(a("y8nQ"),a("Vl3Y")),V=a("q1tI"),A=a.n(V),F=a("hheg"),D=a.n(F),M=a("wd/R"),N=a.n(M),L=a("MuoO"),R=a("CyYT"),Y=a("P4xi"),I=a("6Hmz"),J=I["a"].WebFW_DYQX_CX.key,j=I["a"].WebFW_DYQX_ACL.key,W=I["a"].WebFW_DYQX_ZZ.key,O=I["a"].WebFW_DYQX_JBs.key,X=I["a"].WebFW_DYQX_SC.key,Q=q["a"].Item,B=T["a"].Option,H=(C["a"].TextArea,_["a"].confirm),Z=function(e){function t(){var e,a;y()(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=x()(this,(e=w()(t)).call.apply(e,[this].concat(n))),a.state={AclList:[],Tableloading:!0,visible:!1,type:"",drawerTitle:"",acldata:null,jsglVisible:!1,roleType:null,role:[],roleName:[],edit_role:[],edit_roleName:[],cxRole:[],cxRoleName:[],alltags:null,scriptList:null,status:0,rolesList:[]},a.query=function(){a.props.dispatch({type:"qxglModel/listAcl",payload:{name:null,tags:null,roles:null,status:null,sortby:["name",1],skip:0,limit:0},callback:function(e){if("0"!=e.code)return p["a"].error("\u67e5\u8be2\u6743\u9650\u5217\u8868\u9519\u8bef\uff1a".concat(e.data));var t=e.data[1],l=[];t.forEach(function(e){e.roles&&l.push.apply(l,h()(e.roles))}),a.queryNameById(l),setTimeout(function(){a.setState({Tableloading:!1,AclList:t})},100)}})},a.queryNameById=function(e){e=Array.from(new Set(e));var t=[];e.map(function(e){var l=e.split(":");a.props.dispatch({type:"qxglModel/getRoles",payload:{domain:l[0],nodes:[l[1]]},callback:function(e){0==e.code&&(e.data[0]&&t.push(e.data[0]),a.setState({rolesList:t}))}})})},a.queryTags=function(){a.props.dispatch({type:"qxglModel/getTags",payload:{},callback:function(e){"0"==e.code?a.setState({alltags:e.data}):p["a"].error("\u67e5\u8be2\u6807\u7b7e\u51fa\u9519 ".concat(e.data))}})},a.del=function(e){var t=a.props.dispatch;_["a"].confirm({title:"\u786e\u8ba4\u5220\u9664 '".concat(e.name,"' \u5417?"),content:"",okText:"\u662f",okType:"danger",cancelText:"\u5426",onOk:function(){t({type:"qxglModel/delAcl",payload:{id:e._id},callback:function(e){"0"==e.code?(a.query(),p["a"].success("\u6743\u9650\u5220\u9664\u6210\u529f\uff01")):p["a"].error("\u5220\u9664\u6743\u9650\u5931\u8d25 \uff01".concat(e.data))}})},onCancel:function(){}})},a.handelRoles=function(e){var t=a.state.rolesList,l={},n=!0,r=!1,s=void 0;try{for(var i,o=t[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var c=i.value;if(c._id==e)return l._id=c._id,l.name=c.name,l}}catch(e){r=!0,s=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw s}}return l._id=e,l.name=e,l},a.openDrawer=function(e,t,l){a.state.rolesList;if(l){var n=l.roles,r=[];n&&n.forEach(function(e){r.push(a.handelRoles(e))}),console.log("===200===",r),setTimeout(function(){a.setState({visible:!0,type:e,drawerTitle:t,acldata:l,edit_role:r})},100)}else a.setState({visible:!0,type:e,drawerTitle:t});"03"==e&&(a.setState({drawerTitle:"\u8c03\u7528\u6743\u9650\u6b63\u5219\u8868\u8fbe\u5f0f\uff1a ".concat(l.name)}),a.props.dispatch({type:"qxglModel/getScript",payload:{name:l.name,tags:l.tags?l.tags:null,status:null,sortby:["name",1],skip:0,limit:0},callback:function(e){console.log(e),0==e.code?a.setState({scriptList:e.data[1]}):p["a"].error("\u811a\u672c\u67e5\u8be2\u51fa\u9519 ".concat(e.data))}}))},a.drawerClose=function(){a.setState({visible:!1,type:"",drawerTitle:"",acldata:null,scriptList:null})},a.handleSearch=function(){var e=a.props,t=e.form,l=e.dispatch,n=a.state.cxRole,r=[];n.map(function(e){return r.push(e._id)});var s=t.getFieldValue("cx_name")?t.getFieldValue("cx_name"):null,i=t.getFieldValue("cx_tags")?t.getFieldValue("cx_tags"):[],o=t.getFieldValue("cx_status");o=0==o?0:-1==o?-1:null,r=r.length>0?r:null,console.log("\u67e5\u8be2\u53c2\u6570",s,i,r,o),l({type:"qxglModel/listAcl",payload:{name:s,roles:r,tags:i.length>0?i:null,status:o,sortby:["name",1],skip:0,limit:0},callback:function(e){"0"==e.code?(p["a"].success("\u67e5\u8be2\u6210\u529f\uff01"),a.setState({AclList:e.data[1]}),console.log(e)):p["a"].error("\u67e5\u8be2\u51fa\u9519 ".concat(e.data))}})},a.handleSubmit=function(){var e=a.props,t=e.form,l=e.dispatch,n=a.state,r=n.role,s=n.edit_role;console.log("edit_role",s);var i=[],o=[];if(r.map(function(e){return i.push(e._id)}),s.map(function(e){return o.push(e._id)}),"01"==a.state.type){console.log("roleIDS",i);var c=t.getFieldValue("name")?t.getFieldValue("name"):null,u=t.getFieldValue("tags"),d=a.state.status;if(console.log("status",d),null==c)return p["a"].warning("\u6743\u9650\u540d\u79f0\u5fc5\u586b\uff01");l({type:"qxglModel/setAcl",payload:{acl:{name:c,roles:i.length>0?i:null,tags:u&&u.length>0?u:null,status:d,domain:"system"}},callback:function(e){"0"==e.code?(a.query(),p["a"].success("\u6743\u9650\u6dfb\u52a0\u6210\u529f\uff01"),a.setState({visible:!1})):p["a"].error("\u6743\u9650\u6dfb\u52a0\u5931\u8d25 \uff01".concat(e.data))}})}else if("02"==a.state.type){var m=t.getFieldValue("name")?t.getFieldValue("name"):null,h=t.getFieldValue("tags"),g=a.state.status;if(console.log("edit_roleIDS",o),null==m)return p["a"].warning("\u6743\u9650\u540d\u79f0\u5fc5\u586b\uff01");l({type:"qxglModel/setAcl",payload:{acl:{_id:a.state.acldata._id,name:m,roles:o.length>0?o:null,tags:h&&h.length>0?h:null,status:g}},callback:function(e){"0"==e.code?(a.query(),p["a"].success("\u6743\u9650\u4fee\u6539\u6210\u529f\uff01"),a.setState({visible:!1})):p["a"].error("\u4fee\u6539\u6743\u9650\u5931\u8d25 \uff01".concat(e.data))}})}},a.changeStatus=function(e){var t=e.target.value,l=a.state.type;"02"==l&&H(0==t?{title:"\u8b66\u544a",content:'\u8be5\u6b63\u5219\u8868\u8fbe\u5f0f\u72b6\u6001\u4fee\u6539\u4e3a"\u6b63\u5e38"\uff0c\u5219\u6b64\u6b63\u5219\u8868\u8fbe\u5f0f\u6240\u5bf9\u5e94\u7684\u63a5\u53e3\u5747\u53ef\u4ee5\u4f7f\u7528\uff0c\u662f\u5426\u7ee7\u7eed\u6388\u6743',okText:"\u786e\u5b9a",okType:"danger",cancelText:"\u53d6\u6d88",onOk:function(){a.setState({status:t})},onCancel:function(){}}:{title:"\u8b66\u544a",content:'\u8be5\u6b63\u5219\u8868\u8fbe\u5f0f\u72b6\u6001\u4fee\u6539\u4e3a"\u505c\u7528"\uff0c\u5219\u6b64\u6b63\u5219\u8868\u8fbe\u5f0f\u6240\u5bf9\u5e94\u7684\u63a5\u53e3\u5747\u5c06\u65e0\u6cd5\u4f7f\u7528\uff0c\u662f\u5426\u7ee7\u7eed\u6388\u6743',okText:"\u786e\u5b9a",okType:"danger",cancelText:"\u53d6\u6d88",onOk:function(){a.setState({status:t})},onCancel:function(){}})},a.handel=function(e){var t=a.state.rolesList,l=!0,n=!1,r=void 0;try{for(var s,i=t[Symbol.iterator]();!(l=(s=i.next()).done);l=!0){var o=s.value;if(o._id==e)return o.name}}catch(e){n=!0,r=e}finally{try{l||null==i.return||i.return()}finally{if(n)throw r}}return e},a}return S()(t,e),E()(t,[{key:"componentDidMount",value:function(){this.query(),this.queryTags()}},{key:"getJsglMsg",value:function(e){console.log("\u6dfb\u52a0role",e);var t=this.state,a=t.roleType;t.edit_role,t.cxRole,t.role;console.log("roleType",a);var l=[];e.length>0&&e.forEach(function(e){var t={};"01"==a?(t._id=e._id,t.name=e.name,l.push(t)):"02"==a?(t._id=e._id,t.name=e.name,l.push(t)):"03"==a&&(t._id=e._id,t.name=e.name,l.push(t))}),"01"==a?this.setState({cxRole:l}):"02"==a?this.setState({role:l}):"03"==a&&this.setState({edit_role:l}),this.setState({jsglVisible:!1})}},{key:"closeJsgl",value:function(){this.setState({jsglVisible:!1})}},{key:"handleChange",value:function(e,t){console.log("\u5220\u9664role",e);var a=this.state,l=a.edit_role,n=a.role,r=a.cxRole;if(console.log("==edit_role==",l),"01"==t){var s=[];e.map(function(e){r.map(function(t){e==t.name&&s.push(t)})}),this.setState({cxRoleName:e,cxRole:s})}else if("02"==t){var i=[];e.map(function(e){n.map(function(t){e==t.name&&i.push(t)})}),this.setState({roleName:e,role:i})}else if("03"==t){var o=[];e.map(function(e){l.map(function(t){e==t.name&&o.push(t)})}),console.log("======431===",o),this.setState({edit_roleName:e,edit_role:o})}}},{key:"showJsgl",value:function(e){console.log(e),this.setState({jsglVisible:!0,roleType:e})}},{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator,a=this.state,i=a.acldata,m=a.alltags,h=a.roleType,g=a.AclList,y=(a.rolesList,a.edit_roleName,a.roleName,a.cxRoleName,a.edit_role),f=a.role,E=a.cxRole,b=m&&m.map(function(e){return A.a.createElement(B,{key:e},e)}),x=[{title:"\u811a\u672c\u540d\u79f0",align:"center",dataIndex:"name"},{title:"\u8bf4\u660e",dataIndex:"desc",align:"center"},{title:"\u6807\u7b7e",align:"center",dataIndex:"tags",render:function(e){return A.a.createElement("span",null,e?e.map(function(e){return A.a.createElement(d["a"],{color:"blue",key:e},e)}):[])}},{title:"\u72b6\u6001",dataIndex:"status",align:"center",render:function(e){return A.a.createElement("span",null,"0"==e?"\u6b63\u5e38":"\u505c\u7528")}},{title:"\u65f6\u95f4",dataIndex:"updateTime",align:"center",render:function(e){return A.a.createElement("span",null,e&&N()(e).format("YYYY-MM-DD"),"\xa0",e&&N()(e).format("HH:mm:ss"))}}],v=[{title:"\u6b63\u5219\u8868\u8fbe\u5f0f",align:"center",render:function(t){return A.a.createElement("a",{onClick:function(a){a&&a.preventDefault(),Y["a"].checkAuthAndExecute(e.props.dispatch,W,function(){return e.openDrawer("02","\u6743\u9650\u8be6\u60c5",t)},[null])}},t.name)}},{title:"\u6807\u7b7e",align:"center",dataIndex:"tags",render:function(e){return A.a.createElement("span",null,e?e.map(function(e){return A.a.createElement(d["a"],{color:"blue",key:e},e)}):[])}},{title:"\u89d2\u8272",align:"center",dataIndex:"roles",width:"25%",render:function(t){return A.a.createElement("span",null,t?t.map(function(t){return A.a.createElement(d["a"],{color:"red"},e.handel(t))}):[])}},{title:"\u72b6\u6001",dataIndex:"status",align:"center",render:function(e){return A.a.createElement("span",null,"0"==e?"\u6b63\u5e38":"\u505c\u7528")}},{title:"\u65f6\u95f4",dataIndex:"updateTime",align:"center",render:function(e){return A.a.createElement("span",null,e&&N()(e).format("YYYY-MM-DD"),"\xa0",e&&N()(e).format("HH:mm:ss"))}},{title:"\u64cd\u4f5c",align:"center",width:"15%",render:function(t){return A.a.createElement(A.a.Fragment,null,A.a.createElement("a",{onClick:function(a){a&&a.preventDefault(),Y["a"].checkAuthAndExecute(e.props.dispatch,O,function(){return e.openDrawer("03","\u811a\u672c\u5217\u8868",t)},[null])}},"\u811a\u672c"),A.a.createElement(u["a"],{type:"vertical"}),A.a.createElement("a",{onClick:function(a){a&&a.preventDefault(),Y["a"].checkAuthAndExecute(e.props.dispatch,X,function(){return e.del(t)},[null])}},"\u5220\u9664"))}}],w={pageSize:15},k={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},S=A.a.createElement(A.a.Fragment,null,"01"==this.state.type?A.a.createElement(q["a"],o()({},k,{onSubmit:this.handleSubmit}),A.a.createElement(Q,{label:A.a.createElement("span",{style:{width:"80px",display:"inline-block"}},"\u6b63\u5219\u8868\u8fbe\u5f0f ")},t("name")(A.a.createElement("div",null,A.a.createElement(C["a"],{placeholder:"\u8bf7\u8f93\u5165\u5339\u914d\u811a\u672c\u540d\u79f0\u7684\u6b63\u5219\u8868\u8fbe\u5f0f",style:{width:360}}),A.a.createElement("span",{style:{color:"red",marginLeft:5}},"*")))),A.a.createElement(Q,{label:A.a.createElement("span",{style:{width:"60px",display:"inline-block"}},"\u89d2\u8272")},A.a.createElement(T["a"],{mode:"tags",style:{width:360},placeholder:"\u8bf7\u9009\u62e9\u89d2\u8272\uff01",onFocus:function(){return e.showJsgl("02")},dropdownStyle:{display:"none"},onChange:function(t){e.handleChange(t,"02")},value:f?f.map(function(e){return e.name}):void 0,allowClear:!0})),A.a.createElement(Q,{label:A.a.createElement("span",{style:{width:"60px",display:"inline-block"}},"\u6807\u7b7e")},t("tags")(A.a.createElement(T["a"],{mode:"tags",style:{width:360},placeholder:"\u8bf7\u8f93\u5165\u6807\u7b7e\uff01",allowClear:!0},b))),A.a.createElement(Q,{label:A.a.createElement("span",{style:{width:"60px",display:"inline-block"}},"\u72b6\u6001")},A.a.createElement(c["a"].Group,{onChange:this.changeStatus,defaultValue:0,style:{width:360}},A.a.createElement(c["a"],{value:0},"\u6b63\u5e38"),A.a.createElement(c["a"],{value:-1},"\u505c\u7528")))):"02"==this.state.type?A.a.createElement(q["a"],o()({},k,{onSubmit:this.handleSubmit}),A.a.createElement(Q,{label:A.a.createElement("span",{style:{width:"80px",display:"inline-block"}},"\u6b63\u5219\u8868\u8fbe\u5f0f")},t("name",{initialValue:i&&i.name})(A.a.createElement("div",null,A.a.createElement(C["a"],{placeholder:"\u8bf7\u8f93\u5165\u5339\u914d\u811a\u672c\u540d\u79f0\u7684\u6b63\u5219\u8868\u8fbe\u5f0f",defaultValue:i&&i.name,style:{width:360}}),A.a.createElement("span",{style:{color:"red",marginLeft:5}},"*")))),A.a.createElement(Q,{label:A.a.createElement("span",{style:{width:"60px",display:"inline-block"}},"\u89d2\u8272")},A.a.createElement(T["a"],{mode:"tags",style:{width:360},placeholder:"\u8bf7\u9009\u62e9\u89d2\u8272\uff01",onFocus:function(){return e.showJsgl("03")},dropdownStyle:{display:"none"},onChange:function(t){e.handleChange(t,"03")},value:y?y.map(function(e){return e.name}):void 0,allowClear:!0})),A.a.createElement(Q,{label:A.a.createElement("span",{style:{width:"60px",display:"inline-block"}},"\u6807\u7b7e")},t("tags",{initialValue:i?i.tags:void 0})(A.a.createElement(T["a"],{mode:"tags",style:{width:360},placeholder:"\u8bf7\u8f93\u5165\u6807\u7b7e\uff01",allowClear:!0},b))),A.a.createElement(Q,{label:A.a.createElement("span",{style:{width:"60px",display:"inline-block"}},"\u72b6\u6001")},A.a.createElement(c["a"].Group,{onChange:this.changeStatus,defaultValue:i?i.status:null,style:{width:360}},A.a.createElement(c["a"],{checked:0==this.state.status,value:0},"\u6b63\u5e38"),A.a.createElement(c["a"],{checked:-1==this.state.status,value:-1},"\u505c\u7528")))):"03"==this.state.type?A.a.createElement(s["a"],{pagination:w,columns:x,dataSource:this.state.scriptList,size:"small"}):null);return A.a.createElement("div",null,A.a.createElement("div",{className:D.a.header},A.a.createElement(q["a"],{onSubmit:this.handleSearch,layout:"inline"},A.a.createElement("div",{className:D.a.search},A.a.createElement("div",null,A.a.createElement("div",{className:D.a.cols},A.a.createElement(Q,{label:A.a.createElement("span",{style:{width:"60px",display:"inline-block"}},"\u811a\u672c\u540d\u79f0")},t("cx_name")(A.a.createElement(C["a"],{placeholder:"\u8bf7\u8f93\u5165\u811a\u672c\u540d\u79f0",style:{width:330}}))),A.a.createElement(Q,{label:A.a.createElement("span",{style:{width:"60px",display:"inline-block"}},"\u6807\u7b7e")},t("cx_tags")(A.a.createElement(T["a"],{mode:"tags",style:{width:330},placeholder:"\u8bf7\u8f93\u5165\u6807\u7b7e\uff01",allowClear:!0},b)))),A.a.createElement("div",{className:D.a.cols},A.a.createElement(Q,{label:A.a.createElement("span",{style:{width:"60px",display:"inline-block"}},"\u89d2\u8272")},A.a.createElement(T["a"],{mode:"tags",style:{width:330},placeholder:"\u8bf7\u9009\u62e9\u89d2\u8272\uff01",onFocus:function(){return e.showJsgl("01")},dropdownStyle:{display:"none"},onChange:function(t){e.handleChange(t,"01")},value:E?E.map(function(e){return e.name}):void 0,allowClear:!0})),A.a.createElement(Q,{label:A.a.createElement("span",{style:{width:"60px",display:"inline-block"}},"\u72b6\u6001")},t("cx_status")(A.a.createElement(T["a"],{style:{width:330},placeholder:"\u8bf7\u9009\u62e9\u72b6\u6001\uff01",allowClear:!0},A.a.createElement(B,{value:null},"\u5168\u90e8"),A.a.createElement(B,{value:0},"\u6b63\u5e38"),A.a.createElement(B,{value:-1},"\u505c\u7528")))))),A.a.createElement("span",{className:D.a.submitButtons},A.a.createElement(r["a"],{type:"primary",onClick:function(t){t&&t.preventDefault(),Y["a"].checkAuthAndExecute(e.props.dispatch,J,function(){return e.handleSearch()},[null])}},"\u67e5\u8be2"),A.a.createElement(r["a"],{style:{marginLeft:8},onClick:function(){e.props.form.resetFields(),e.query(),e.setState({cxRole:[]}),p["a"].success("\u91cd\u7f6e\u6210\u529f")}},"\u91cd\u7f6e"))))),A.a.createElement("div",{className:D.a.content},A.a.createElement("div",{className:D.a.btns},A.a.createElement(r["a"],{type:"primary",onClick:function(t){t&&t.preventDefault(),Y["a"].checkAuthAndExecute(e.props.dispatch,j,function(){return e.openDrawer("01","\u589e\u52a0\u811a\u672c\u8c03\u7528\u6743\u9650")},[null])}},A.a.createElement(n["a"],{type:"plus"}),"\u589e\u52a0\u811a\u672c\u8c03\u7528\u6743\u9650")),A.a.createElement("div",null,A.a.createElement(s["a"],{pagination:w,columns:v,dataSource:g,loading:this.state.Tableloading,size:"small"}))),A.a.createElement(l["a"],{title:A.a.createElement(A.a.Fragment,null,this.state.drawerTitle),onClose:this.drawerClose,visible:this.state.visible,destroyOnClose:!0},S,"03"!=this.state.type?A.a.createElement("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right"}},A.a.createElement(r["a"],{onClick:this.drawerClose,style:{marginRight:8}},"\u53d6\u6d88"),A.a.createElement(r["a"],{type:"primary",onClick:this.handleSubmit},"\u786e\u5b9a")):null),this.state.jsglVisible?A.a.createElement(R["a"],{jsglVisible:this.state.jsglVisible,handleSelectedJsgl:this.getJsglMsg.bind(this),handleJsglVisible:this.closeJsgl.bind(this),roleType:h,selectName:"01"==h?E:"02"==h?f:y}):null)}}]),t}(V["Component"]);t["default"]=Object(L["connect"])(function(e){return e.qxglModel})(q["a"].create()(Z))},hheg:function(e,t,a){e.exports={header:"antd-pro-pages-script-qxgl-index-header",search:"antd-pro-pages-script-qxgl-index-search",cols:"antd-pro-pages-script-qxgl-index-cols",content:"antd-pro-pages-script-qxgl-index-content",btns:"antd-pro-pages-script-qxgl-index-btns",modelMsg:"antd-pro-pages-script-qxgl-index-modelMsg"}}}]);