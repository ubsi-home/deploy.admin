(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{fxxv:function(e,a,t){"use strict";t.r(a);var l,n,r,s,o=t("jehZ"),i=t.n(o),c=(t("IzEo"),t("bx4M")),p=(t("g9YV"),t("wCAj")),d=t("p0pE"),m=t.n(d),u=(t("+L6B"),t("2/Rp")),h=(t("14J3"),t("BMrR")),b=(t("7Kak"),t("9yH6")),E=(t("jCWc"),t("kPKH")),y=(t("5NDa"),t("5rEg")),g=(t("miYZ"),t("tsqr")),f=(t("/zsF"),t("PArb")),v=(t("+BJd"),t("mr32")),C=(t("Q9mQ"),t("diRs")),w=t("2Taf"),k=t.n(w),F=t("vZ4D"),V=t.n(F),M=t("l4Ni"),D=t.n(M),S=t("ujKo"),Y=t.n(S),L=t("MhPg"),x=t.n(L),A=(t("OaEy"),t("2fM7")),T=(t("2qtc"),t("kLXV")),q=(t("y8nQ"),t("Vl3Y")),O=t("q1tI"),_=t.n(O),G=t("MuoO"),H=t("wd/R"),I=t.n(H),R=t("3a4m"),K=t.n(R),j=t("zHco"),N=t("BSQV"),P=t.n(N),B=t("P5Jw"),J=y["a"].TextArea,z=q["a"].Item,Q=function(e){function a(e){var t;k()(this,a),t=D()(this,Y()(a).call(this,e)),t.state={key:""},t.randomKey=function(e,a,l){var n="",r=a,s=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(r=Math.round(Math.random()*(l-a))+a);for(var o=0;o<r;o++){var i=Math.round(Math.random()*(s.length-1));n+=s[i]}t.setState({key:n})},t.onCopy=function(){""==t.state.key?alert("\u8bf7\u5148\u66f4\u65b0\u5bc6\u94a5!"):alert("\u590d\u5236\u5bc6\u94a5\u5b8c\u6210!")},t.close=function(){var e=t.props.handleModalVisible;t.setState({key:""}),e()};var l=t.props.value;return console.log(l),t}return x()(a,e),V()(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.modalVisible,l=a.form,n=a.handleUpdate,r=(a.handleModalVisible,a.value),s=a.options;console.log(this.state),console.log(this.props);var o=function(a){var t=e.props.value;l.validateFields(function(a,r){a||(r.id=t._id,""!=e.state.key&&(r.key=e.state.key),n(r),l.resetFields())})},i=function(e){var a=e.target.value;l.setFieldsValue({status:a})};return _.a.createElement(T["a"],{destroyOnClose:!0,title:"\u5e94\u7528\u8be6\u60c5",visible:t,onOk:o,onCancel:this.close,width:"640px"},_.a.createElement("div",{className:P.a.tableListForm},_.a.createElement(z,{labelCol:{span:5},wrapperCol:{span:18},label:"\u5e94\u7528id"},r._id),_.a.createElement(z,{labelCol:{span:5},wrapperCol:{span:15},label:"\u5e94\u7528\u540d\u79f0"},l.getFieldDecorator("name",{initialValue:r.name,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5e94\u7528\u540d\u79f0\uff01"}]})(_.a.createElement(y["a"],{style:{width:"90%"},placeholder:"\u8bf7\u8f93\u5165"})),_.a.createElement("sapn",{style:{color:"red"}},"\xa0*")),_.a.createElement(z,{labelCol:{span:5},wrapperCol:{span:15},label:"\u5e94\u7528\u63cf\u8ff0"},l.getFieldDecorator("desc",{initialValue:r.desc,rules:[{required:!1}]})(_.a.createElement(J,{rows:6}))),_.a.createElement(z,{labelCol:{span:5},wrapperCol:{span:15},label:"\u5e94\u7528\u6240\u6709\u8005"},l.getFieldDecorator("owner",{initialValue:r.owner,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5e94\u7528\u6240\u6709\u8005\uff01"}]})(_.a.createElement(y["a"],{style:{width:"90%"}})),_.a.createElement("sapn",{style:{color:"red"}},"\xa0*")),_.a.createElement(z,{labelCol:{span:5},wrapperCol:{span:15},label:"\u5e94\u7528\u6807\u7b7e"},l.getFieldDecorator("tags",{initialValue:"{}"!==JSON.stringify(r.tags)?r.tags:"",rules:[{required:!1,message:"\u5e94\u7528\u6807\u7b7e!",type:"array"}]})(_.a.createElement(A["a"],{mode:"tags",style:{width:"100%"},placeholder:"\u5e94\u7528\u6807\u7b7e"},s))),_.a.createElement(z,{labelCol:{span:5},wrapperCol:{span:15},label:"\u72b6\u6001"},l.getFieldDecorator("status",{initialValue:r.status})(_.a.createElement(b["a"].Group,{onChange:i},_.a.createElement(b["a"],{value:0},"\u6b63\u5e38"),_.a.createElement(b["a"],{value:-1},"\u505c\u7528")))),_.a.createElement(z,{labelCol:{span:5},wrapperCol:{span:15},label:"\u5e94\u7528\u8054\u7cfb\u4eba"},l.getFieldDecorator("contacter",{initialValue:r.contacter,rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u5e94\u7528\u8054\u7cfb\u4eba\uff01"}]})(_.a.createElement(y["a"],null))),_.a.createElement(z,{labelCol:{span:5},wrapperCol:{span:15},label:"\u8054\u7cfb\u4eba\u90ae\u7bb1"},l.getFieldDecorator("email",{initialValue:r.email,rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u8054\u7cfb\u4eba\u90ae\u7bb1\uff01"}]})(_.a.createElement(y["a"],null))),_.a.createElement(z,{labelCol:{span:5},wrapperCol:{span:15},label:"\u8054\u7cfb\u4eba\u7535\u8bdd"},l.getFieldDecorator("phone",{initialValue:r.phone,rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u8054\u7cfb\u4eba\u7535\u8bdd\uff01"}]})(_.a.createElement(y["a"],null))),_.a.createElement(z,{labelCol:{span:5},wrapperCol:{span:15},label:"\u8ba4\u8bc1\u5bc6\u94a5"},_.a.createElement(u["a"],{onClick:function(){return e.randomKey(!1,32,32)}},"\u66f4\u65b0\u5bc6\u94a5"),"\xa0  ",_.a.createElement(B["CopyToClipboard"],{text:this.state.key,onCopy:this.onCopy},_.a.createElement(u["a"],null,"\u590d\u5236\u5bc6\u94a5"))),_.a.createElement(z,{labelCol:{span:5},wrapperCol:{span:15},label:"\u521b\u5efa\u65f6\u95f4"},I()(r.createTime).format("YYYY-MM-DD HH:mm:ss")),_.a.createElement(z,{labelCol:{span:5},wrapperCol:{span:15},label:"\u4fee\u6539\u65f6\u95f4"},I()(r.updateTime).format("YYYY-MM-DD HH:mm:ss")),_.a.createElement(z,{labelCol:{span:5},wrapperCol:{span:15},label:"\u5bc6\u94a5\u4fee\u6539\u65f6\u95f4"},I()(r.keyTime).format("YYYY-MM-DD HH:mm:ss")),_.a.createElement(z,{labelCol:{span:5},wrapperCol:{span:15},label:"\u4e0a\u6b21\u6210\u529f\u8ba4\u8bc1\u65f6\u95f4"},0==r.authTime?"":I()(r.authTime).format("YYYY-MM-DD HH:mm:ss"))))}}]),a}(O["PureComponent"]),U=q["a"].create()(Q),W=(A["a"].Option,A["a"].OptGroup,y["a"].TextArea),Z=q["a"].Item,X=function(e){function a(e){var t;k()(this,a),t=D()(this,Y()(a).call(this,e)),t.state={options:[],key:""},t.randomKey=function(e,a,l){var n="",r=a,s=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(r=Math.round(Math.random()*(l-a))+a);for(var o=0;o<r;o++){var i=Math.round(Math.random()*(s.length-1));n+=s[i]}t.setState({key:n})},t.onCopy=function(){""==t.state.key?alert("\u8bf7\u5148\u751f\u6210\u5bc6\u94a5!"):alert("\u590d\u5236\u5bc6\u94a5\u5b8c\u6210!")},t.close=function(){var e=t.props.handleModalVisible;t.setState({key:""}),e()};t.props.value;return t.randomKey(!1,32,32),t}return x()(a,e),V()(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.modalVisible,l=a.form,n=a.handleAdd,r=a.options;console.log(this.state),console.log(this.props);var s=function(a){l.validateFields(function(a,t){a||(""!=e.state.key?(console.log(t),t.key=e.state.key,l.resetFields(),n(t)):g["a"].warn("\u8bf7\u5148\u751f\u6210\u5bc6\u94a5!"))})},o=function(e){var a=e.target.value;l.setFieldsValue({status:a})};return _.a.createElement(T["a"],{destroyOnClose:!0,title:"\u6ce8\u518c\u5e94\u7528",visible:t,onOk:s,onCancel:this.close,width:"640px"},_.a.createElement("div",{className:P.a.tableListForm},_.a.createElement(Z,{labelCol:{span:5},wrapperCol:{span:18},label:"\u5e94\u7528id"},l.getFieldDecorator("id",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5e94\u7528id\uff01"}]})(_.a.createElement(y["a"],{placeholder:"",style:{width:"90%"}})),_.a.createElement("sapn",{style:{color:"red"}},"\xa0*")),_.a.createElement(Z,{labelCol:{span:5},wrapperCol:{span:18},label:"\u5e94\u7528\u540d\u5b57"},l.getFieldDecorator("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5e94\u7528\u540d\u5b57\uff01"}]})(_.a.createElement(y["a"],{placeholder:"",style:{width:"90%"}})),_.a.createElement("sapn",{style:{color:"red"}},"\xa0*")),_.a.createElement(Z,{labelCol:{span:5},wrapperCol:{span:18},label:"\u5e94\u7528\u63cf\u8ff0"},l.getFieldDecorator("desc",{rules:[]})(_.a.createElement(W,{placeholder:"",rows:6}))),_.a.createElement(Z,{labelCol:{span:5},wrapperCol:{span:18},label:"\u5e94\u7528\u6240\u6709\u8005"},l.getFieldDecorator("owner",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5e94\u7528\u6240\u6709\u8005"}]})(_.a.createElement(y["a"],{placeholder:"",style:{width:"90%"}})),_.a.createElement("sapn",{style:{color:"red"}},"\xa0*")),_.a.createElement(Z,{labelCol:{span:5},wrapperCol:{span:15},label:"\u5e94\u7528\u6807\u7b7e"},l.getFieldDecorator("tags",{rules:[{required:!1,message:"\u5e94\u7528\u6807\u7b7e!",type:"array"}]})(_.a.createElement(A["a"],{mode:"tags",style:{width:"100%"},placeholder:"\u5e94\u7528\u6807\u7b7e"},r))),_.a.createElement(Z,{labelCol:{span:5},wrapperCol:{span:15},label:"\u72b6\u6001"},l.getFieldDecorator("status",{initialValue:0})(_.a.createElement(b["a"].Group,{onChange:o},_.a.createElement(b["a"],{value:0},"\u6b63\u5e38"),_.a.createElement(b["a"],{value:-1},"\u505c\u7528")))),_.a.createElement(Z,{labelCol:{span:5},wrapperCol:{span:15},label:"\u5e94\u7528\u8054\u7cfb\u4eba"},l.getFieldDecorator("contacter",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u5e94\u7528\u8054\u7cfb\u4eba"}]})(_.a.createElement(y["a"],{placeholder:""}))),_.a.createElement(Z,{labelCol:{span:5},wrapperCol:{span:15},label:"\u8054\u7cfb\u4eba\u90ae\u7bb1"},l.getFieldDecorator("email",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u8054\u7cfb\u4eba\u90ae\u7bb1"}]})(_.a.createElement(y["a"],{placeholder:""}))),_.a.createElement(Z,{labelCol:{span:5},wrapperCol:{span:15},label:"\u8054\u7cfb\u4eba\u7535\u8bdd"},l.getFieldDecorator("phone",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u8054\u7cfb\u4eba\u7535\u8bdd"}]})(_.a.createElement(y["a"],{placeholder:""}))),_.a.createElement(Z,{labelCol:{span:5},wrapperCol:{span:15},label:"\u8ba4\u8bc1\u5bc6\u94a5"},_.a.createElement(u["a"],{onClick:function(){return e.randomKey(!1,32,32)}},"\u751f\u6210\u5bc6\u94a5"),"\xa0  ",_.a.createElement(B["CopyToClipboard"],{text:this.state.key,onCopy:this.onCopy},_.a.createElement(u["a"],null,"\u590d\u5236\u5bc6\u94a5")))))}}]),a}(O["PureComponent"]),$=q["a"].create()(X),ee=t("vSFf"),ae=t.n(ee),te=t("aqBw"),le=t.n(te),ne=t("P4xi"),re=t("6Hmz"),se=re["a"].WGGL_YYGL_ZCYY.key,oe=re["a"].WGGL_YYGL_DEL.key,ie=re["a"].WGGL_YYGL_DETAIL.key,ce=q["a"].Item,pe=T["a"].confirm,de=A["a"].Option,me=(l=Object(G["connect"])(function(e){var a=e.apps,t=e.loading;return{apps:a,loading:t.models.apps}}),n=q["a"].create(),l(r=n((s=function(e){function a(){var e,t;k()(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return t=D()(this,(e=Y()(a)).call.apply(e,[this].concat(n))),t.state={modalVisible:!1,options:[],modalVisible2:!1,data:[],applist:[],TagsList:[]},t.columns=[{title:"\u5e94\u7528id",dataIndex:"_id",align:"center",width:"15%"},{title:"\u5e94\u7528\u540d\u79f0",dataIndex:"name",align:"center",width:"20%",render:function(e,a){return _.a.createElement("div",null," ",_.a.createElement(C["a"],{content:a.desc},e))}},{title:"\u5e94\u7528\u6807\u7b7e",dataIndex:"tags",width:"40%",render:function(e){if(e)return _.a.createElement("span",null,e.map(function(e){return _.a.createElement(v["a"],{color:"blue",key:e},e)}))}},{title:"\u72b6\u6001",dataIndex:"status",align:"center",width:"15%",render:function(e){return 0===e?_.a.createElement("span",null,"\u6b63\u5e38"):_.a.createElement("span",null,"\u505c\u7528")}},{title:"\u64cd\u4f5c",align:"center",width:"15%",render:function(e){return _.a.createElement("span",null,_.a.createElement("a",{href:"javaSrcipt:;",onClick:function(a){a&&a.preventDefault(),ne["a"].checkAuthAndExecute(t.props.dispatch,oe,function(){return t.handleMenuClick(e._id)},[])}},"\u5220\u9664"),_.a.createElement(f["a"],{type:"vertical"}),_.a.createElement("a",{href:"javaSrcipt:;",onClick:function(a){a&&a.preventDefault(),ne["a"].checkAuthAndExecute(t.props.dispatch,ie,function(){return t.handleModalVisible2(!0,e)},[])}},"\u8be6\u60c5"))}}],t.previewItem=function(e){K.a.push("/profile/basic/".concat(e))},t.handleFormReset=function(){var e=new Array;e=["_id",1];var a=t.props,l=a.form,n=a.dispatch;l.resetFields(),t.setState({formValues:{}}),n({type:"apps/fetch",payload:{name:null,sortby:e,tags:null,limit:0,skip:0,status:0},callback:function(e){console.log("===170===",e),0===e.code&&t.setState({applist:e.data})}})},t.isEmptyObject=function(e){for(var a in e)return!1;return!0},t.handleMenuClick=function(e){var a=t.props,l=a.dispatch;a.form;pe({title:"\u786e\u8ba4\u64cd\u4f5c\u5c06\u5220\u9664\u5df2\u9009\u4e2d\u5e94\u7528\uff0c\u8bf7\u614e\u91cd\u9009\u62e9\u3002",okText:"\u786e\u8ba4",okType:"danger",cancelText:"\u653e\u5f03",onOk:function(){l({type:"apps/remove",payload:{id:e},callback:function(e){0===e.code?(g["a"].success("\u5220\u9664\u5e94\u7528\u6210\u529f\uff01"),t.handleFormReset()):g["a"].success("\u5220\u9664\u5e94\u7528\u5931\u8d25\uff01")}})},onCancel:function(){}})},t.handleSearch=function(e){e&&e.preventDefault();var a=new Array;a=["_id",1];var l=t.props,n=l.dispatch,r=l.form;r.validateFields(function(e,l){if(!e){var r={name:void 0==l.name?null:l.name,sortby:a,tags:void 0==l.tags?null:l.tags,limit:0,skip:0,status:l.status};t.setState({formValues:r}),n({type:"apps/fetch",payload:r,callback:function(e){t.setState({applist:e.data})}})}})},t.handleModalVisible=function(e){t.setState({modalVisible:!!e})},t.handleModalVisible2=function(e,a){t.setState({modalVisible2:!!e,record:a})},t.handleAdd=function(e){console.log("372=====",e);var a=t.props.dispatch,l={};l._id=e.id,l.name=e.name,l.status=e.status,void 0==e.desc||(l.desc=e.desc),void 0==e.owner||(l.owner=e.owner),void 0==e.contacter||(l.contacter=e.contacter),void 0==e.email||(l.email=e.email),void 0==e.phone||(l.phone=e.phone),void 0==e.tags||(l.tags=e.tags);var n=le.a.encode(e.key);a({type:"apps/add",payload:{app:l,key:n},callback:function(e){console.log("===416====",e),0===e.code?(g["a"].success("\u65b0\u589e\u5e94\u7528\u6210\u529f\uff01"),t.handleFormReset(),t.handleModalVisible()):g["a"].error("\u65b0\u589e\u5e94\u7528\u5931\u8d25\uff01")}})},t.handleUpdate=function(e){var a=t.props.dispatch;console.log(e);var l={};l._id=e.id,l.name=e.name,l.status=e.status,void 0==e.desc||(l.desc=e.desc),void 0==e.owner||(l.owner=e.owner),void 0==e.contacter||(l.contacter=e.contacter),void 0==e.email||(l.email=e.email),void 0==e.phone||(l.phone=e.phone),void 0==e.tags||(l.tags=e.tags);var n=le.a.encode(e.key);a({type:"apps/set",payload:{id:e.id,app:l,key:n},callback:function(e){0===e.code?(g["a"].success("\u4fee\u6539\u5e94\u7528\u6210\u529f\uff01"),t.handleFormReset(),t.handleModalVisible2()):g["a"].success("\u4fee\u6539\u5e94\u7528\u5931\u8d25\uff01")}})},t.handleCancel2=function(e){t.setState({visible2:!1}),t.handleSearch(e)},t.handleCancel3=function(e){t.setState({visible3:!1}),t.handleSearch(e)},t}return x()(a,e),V()(a,[{key:"componentDidMount",value:function(){var e=this,a=new Array;a=["_id",1];var t=this.props.dispatch;t({type:"apps/fetch",payload:{name:null,sortby:a,tags:null,limit:0,skip:0,status:0},callback:function(a){console.log("===170===",a),0===a.code&&e.setState({applist:a.data})}}),t({type:"apps/fetchAppTags",callback:function(a){0===a.code?e.setState({TagsList:a.data}):g["a"].error("\u67e5\u8be2\u5e94\u7528\u6807\u7b7e\u5931\u8d25\uff01")}})}},{key:"renderSimpleForm",value:function(e){var a=this.props.form.getFieldDecorator,t=this.state.formValues;return console.log("formValues",t),_.a.createElement(q["a"],{onSubmit:this.handleSearch,onReset:this.handleFormReset,layout:"inline"},_.a.createElement(h["a"],{gutter:{md:8,lg:24,xl:48}},_.a.createElement(E["a"],{md:8,sm:24},_.a.createElement(ce,{label:"\u5e94\u7528\u540d\u79f0"},a("name",{})(_.a.createElement(y["a"],null)))),_.a.createElement(E["a"],{md:8,sm:24},_.a.createElement(ce,{label:"\u5e94\u7528\u72b6\u6001"},a("status",{initialValue:0})(_.a.createElement(b["a"].Group,{onChange:this.onChangeStatus},_.a.createElement(b["a"],{value:0},"\u5168\u90e8"),_.a.createElement(b["a"],{value:1},"\u6b63\u5e38"),_.a.createElement(b["a"],{value:-1},"\u505c\u7528"))),"  "))),_.a.createElement(h["a"],{gutter:{md:8,lg:24,xl:48}},_.a.createElement(E["a"],{md:16,sm:24},_.a.createElement(ce,{label:"\u5e94\u7528\u6807\u7b7e"},a("tags",{rules:[{required:!1,message:"\u6807\u7b7e!",type:"array"}]})(_.a.createElement(A["a"],{mode:"multiple",style:{width:"100%"},placeholder:"\u5305\u62ec\u5e94\u7528\u5df2\u5b9a\u4e49\u7684\u5168\u90e8\u6807\u7b7e"},e)))),_.a.createElement(E["a"],{md:8,sm:24},_.a.createElement("span",null,_.a.createElement(u["a"],{type:"primary",htmlType:"submit"},"\u67e5\u8be2")),_.a.createElement("span",{style:{margin:"10px"}},_.a.createElement(u["a"],{type:"primary",htmlType:"reset"},"\u91cd\u7f6e")))))}},{key:"renderForm",value:function(e){return this.renderSimpleForm(e)}},{key:"render",value:function(){var e=this,a=this.props,t=a.apps,l=(t.data,t.pagination),n=a.loading,r=this.state,s=r.modalVisible,o=r.modalVisible2,d=r.record,h=r.applist,b=r.TagsList,E=this.props.apps,y=(E.tags,[]);b.forEach(function(e,a){y.push(_.a.createElement(de,{key:e},e))});var g={handleAdd:this.handleAdd,handleModalVisible:this.handleModalVisible,options:y},f=m()({showSizeChanger:!0,showQuickJumper:!0},l);return _.a.createElement(j["a"],{title:"\u67e5\u8be2\u8868\u683c"},_.a.createElement(c["a"],{bordered:!1},_.a.createElement("div",{className:ae.a.tableList},_.a.createElement("div",{className:ae.a.tableListForm},this.renderForm(y)),_.a.createElement("div",{className:ae.a.tableListOperator},_.a.createElement(u["a"],{icon:"plus",type:"primary",onClick:function(a){a&&a.preventDefault(),ne["a"].checkAuthAndExecute(e.props.dispatch,se,function(){return e.handleModalVisible(!0)},[])}},"\u6ce8\u518c\u5e94\u7528")),_.a.createElement(p["a"],{rowKey:"_id",loading:n,dataSource:void 0==h?[]:h[1],columns:this.columns,pagination:f,size:"small"}))),s?_.a.createElement($,i()({},g,{modalVisible:s})):null,o?_.a.createElement(U,{handleUpdate:this.handleUpdate,value:d,handleModalVisible:this.handleModalVisible2,modalVisible:o,options:y}):null)}}]),a}(O["PureComponent"]),r=s))||r)||r);a["default"]=me},vSFf:function(e,a,t){e.exports={tableList:"antd-pro-pages-gateway-apps-apps-tableList",tableListOperator:"antd-pro-pages-gateway-apps-apps-tableListOperator",tableListForm:"antd-pro-pages-gateway-apps-apps-tableListForm",submitButtons:"antd-pro-pages-gateway-apps-apps-submitButtons",tableListFormAdd:"antd-pro-pages-gateway-apps-apps-tableListFormAdd"}}}]);