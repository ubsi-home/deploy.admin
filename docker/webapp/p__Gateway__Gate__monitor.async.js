(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{Bmu8:function(e,t,a){e.exports={tableList:"antd-pro-pages-gateway-gate-gate-tableList",tableListOperator:"antd-pro-pages-gateway-gate-gate-tableListOperator",tableListForm:"antd-pro-pages-gateway-gate-gate-tableListForm",submitButtons:"antd-pro-pages-gateway-gate-gate-submitButtons",tableListFormAdd:"antd-pro-pages-gateway-gate-gate-tableListFormAdd"}},UPt0:function(e,t,a){e.exports={standardList:"antd-pro-pages-gateway-gate-rqlb-standardList",headerInfo:"antd-pro-pages-gateway-gate-rqlb-headerInfo",listContent:"antd-pro-pages-gateway-gate-rqlb-listContent",listContentItem:"antd-pro-pages-gateway-gate-rqlb-listContentItem",extraContentSearch:"antd-pro-pages-gateway-gate-rqlb-extraContentSearch",listCard:"antd-pro-pages-gateway-gate-rqlb-listCard",standardListForm:"antd-pro-pages-gateway-gate-rqlb-standardListForm",formResult:"antd-pro-pages-gateway-gate-rqlb-formResult"}},qBqJ:function(e,t,a){"use strict";a.r(t);a("g9YV");var n=a("wCAj"),r=(a("IzEo"),a("bx4M")),o=(a("14J3"),a("BMrR")),l=(a("5NDa"),a("5rEg")),i=(a("jCWc"),a("kPKH")),s=(a("+L6B"),a("2/Rp")),c=a("p0pE"),u=a.n(c),p=a("eHn4"),d=a.n(p),m=(a("/zsF"),a("PArb")),f=(a("Pwec"),a("CtXQ")),h=a("2Taf"),g=a.n(h),v=a("vZ4D"),y=a.n(v),b=a("MhPg"),E=a.n(b),w=a("l4Ni"),x=a.n(w),k=a("ujKo"),S=a.n(k),C=(a("y8nQ"),a("Vl3Y")),F=(a("OaEy"),a("2fM7")),R=a("q1tI"),M=a.n(R),V=a("MuoO"),A=a("wd/R"),I=a.n(A),O=a("zHco"),T=a("vQLQ"),z=a.n(T),D=a("Bmu8"),P=a.n(D),L=a("UPt0"),G=a.n(L),q=(a("2qtc"),a("kLXV")),B=(a("Znn+"),a("ZTPi")),Y=a("yP6+"),j=(a("1Gbu"),a("cQSq")),N=a.n(j),_=a("gWZ8"),H=a.n(_);function Q(e){var t=W();return function(){var a,n=S()(e);if(t){var r=S()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return x()(this,a)}}function W(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var J,U,K=function(e){E()(a,e);var t=Q(a);function a(e){return g()(this,a),t.call(this,e)}return y()(a,[{key:"render",value:function(){var e=function(e,t){var a=H()(e);return a.sort(function(e,a){var n=e[t]||"",r=a[t]||"";return n<r?1:n===r?0:-1}),a},t=N.a.DataView,a=Y["Guide"].Html,n=e(this.props.salesPieData,"count").length,r=n<=10?e(this.props.salesPieData,"count"):e(this.props.salesPieData,"count").slice(0,10),o=new t;o.source(r).transform({type:"percent",field:"count",dimension:"item",as:"percent"});return M.a.createElement("div",null,M.a.createElement(Y["Chart"],{data:o,padding:[12,50,200,50],forceFit:!0},M.a.createElement(Y["Coord"],{type:"theta",radius:1,innerRadius:.7}),M.a.createElement(Y["Axis"],{name:"percent"}),M.a.createElement(Y["Tooltip"],{showTitle:!1,itemTpl:'<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'}),M.a.createElement(Y["Guide"],null,M.a.createElement(a,{position:["50%","50%"],html:'<div style="color:#8c8c8c;font-size:1em;text-align: center;width: 10em">\n              \u7d2f\u8ba1\u8bbf\u95ee\u91cf<br>\n              <span style="color:#262626;font-size:1.5em;text-align: center;">'.concat(this.props.Amount,'</span>\n              <br><span>\u6700\u8fd1\u8bbf\u95ee\u91cf</span><br>\n              <span style="color:#262626;font-size:1.5em;text-align: center;">').concat(this.props.zuixinamount,"</span>\n              </div>")})),M.a.createElement(Y["Geom"],{type:"intervalStack",position:"percent",color:"item",tooltip:["item*percent",function(e,t){return t=(100*t).toFixed(2)+"%",{name:e,value:t}}],style:{lineWidth:.7,stroke:"#fff"}})))}}]),a}(M.a.Component),X=K;function Z(e){var t=$();return function(){var a,n=S()(e);if(t){var r=S()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return x()(this,a)}}function $(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var ee,te,ae,ne=B["a"].TabPane,re=(J=Object(V["connect"])(function(e){var t=e.gate,a=e.loading;return{gate:t,loading:a.models.gate}}),J(U=function(e){E()(a,e);var t=Z(a);function a(e){var n;return g()(this,a),n=t.call(this,e),n.state={accessData:"",time:0,titlemsg:"",timeagin:0,zuixinamount:0,salesType:"all",wfwlbvisible:!1},n.tick=function(e){var t=n.props.dispatch;t({type:"gate/groupAccessFetch",payload:{time:e},callback:function(){var e=n.state.accessData,t=n.props.gate,a=new Array;a=t.access;var r=a[a.length-1];for(var o in e.push(r),n.setState({accessData:e}),r)n.setState({time:r[o].time})}})},n.callback=function(e){var t=0,a=n.state.time;t=2==e?a-432e5:3==e?a-216e5:4==e?a-108e5:5==e?a-36e5:0,n.setState({timeagin:t});var r=n.props.dispatch;r({type:"gate/groupAccessFetch",payload:{time:t},callback:function(){var e=n.props.gate;n.setState({accessData:e.access})}})},n.wfwlbshowModal=function(){n.setState({wfwlbvisible:!0})},n.wfwlbhandleCancel=function(e){n.setState({wfwlbvisible:!1})},n}return y()(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.dispatch;t({type:"gate/groupAccessFetch",payload:{time:this.state.time},callback:function(){var t=e.props.gate,a=new Array;a=t.access;var n=a[a.length-1];for(var r in e.setState({accessData:t.access}),n)e.setState({time:n[r].time})}}),this.interval=setInterval(function(){return e.tick(e.state.time)},6e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,t=(e.title,e.height,e.padding,e.titleMap,e.borderWidth,e.loading,e.xzoptions),a=(this.state.salesType,new Array),l=new Array,c=this.state.accessData,u=new Array,p=new Map,d=0,m=c.length;u=c[m-1];var f=0;for(var h in u){var g=u[h];t.includes(g._id)&&(f+=g.curCount)}for(var v=new Map,y=0;y<c.length;y++){var b=c[y],E=0;for(var h in b)t.includes(b[h]._id)&&(d+=b[h].curCount,v.has(b[h].host+":"+b[h].port)?(E=v.get(b[h].host+":"+b[h].port)+b[h].curCount,v.set(b[h].host+":"+b[h].port,E)):v.set(b[h].host+":"+b[h].port,b[h].curCount),p.set("key",0))}var w=Array.from(v);p.delete("key");for(var x=Array.from(p),k=new Array,S=new Array,C=0,F=0;F<x.length;F++)""!=x[F][0]&&t.includes(x[F][0])&&(C+=x[F][1]);for(y=0;y<x.length;y++){var R=new Map,V=new Map;""!=x[y][0]&&(1*x[y][1]!==0&&t.includes(x[y][0])&&(R.item=x[y][0],R.count=x[y][1],V.name=x[y][0],V.amount=x[y][1],V.Percentage=(x[y][1]/C*100).toFixed(2)+"%",S.push(V),k.push(R)))}var A,I,O=new Array,T=new Array;for(y=0;y<w.length;y++){var z=new Map,D=new Map;z.item=w[y][0],z.count=w[y][1],D.name=w[y][0],D.amount=w[y][1],D.Percentage=(w[y][1]/d*100).toFixed(2)+"%",O.push(D),T.push(z)}var P=[];"1"==this.props.msgflag?(I=k,A=S,this.state.titlemsg="\u7f51\u5173\u8bbf\u95ee\u91cf\u7edf\u8ba1",P=[{title:"\u5fae\u670d\u52a1\u540d",dataIndex:"name"},{title:"\u8bbf\u95ee\u6570\u91cf",dataIndex:"amount",defaultSortOrder:"descend",sorter:function(e,t){return e.amount-t.amount}},{title:"\u767e\u5206\u6bd4",dataIndex:"Percentage"}]):"2"==this.props.msgflag&&(I=T,A=O,this.state.titlemsg="\u7f51\u5173\u8bbf\u95ee\u91cf\u7edf\u8ba1",P=[{title:"\u7f51\u5173",dataIndex:"name"},{title:"\u8bbf\u95ee\u6570\u91cf",dataIndex:"amount",defaultSortOrder:"descend",sorter:function(e,t){return e.amount-t.amount}},{title:"\u767e\u5206\u6bd4",dataIndex:"Percentage"}]);for(var L=0;L<c.length;L++){var G=0,j=new Map;for(var h in c[L]){var _=c[L][h];t.includes(_._id)&&(G+=_.curCount);var H=c[L][h].time}j.fwamount=G,j.timestamp=H,a.push(j)}0==l.length&&(l=[{timestamp:0,amount:0}]),0==a.length&&(a=[{timestamp:0,fwamount:0}]);var Q=null;Q=a,this.setState({zuixinamount:f,zAmount:d});var W=new N.a({state:{start:Q[0].timestamp,end:Q[Q.length-1].timestamp}}),J=W.createView();J.source(Q).transform({type:"filter",callback:function(e){var t=e.timestamp;return t<=W.state.end&&t>=W.state.start}}),J.transform({type:"fold",fields:["fwamount"],key:"city",value:"\u8bbf\u95ee\u91cf"});var U={timestamp:{type:"time",mask:"HH:mm",range:[0,1]}},K=M.a.createElement("div",null,M.a.createElement(s["a"],{key:"cancel",type:"primary",style:{marginRight:"20px"},onClick:this.wfwlbshowModal},"\u5217\u8868"));return M.a.createElement("div",null,M.a.createElement(o["a"],{span:24},M.a.createElement(i["a"],{span:15,style:{marginTop:"24px"}},M.a.createElement(r["a"],{bordered:!1,style:{height:"430px"}},M.a.createElement(B["a"],{defaultActiveKey:"1",onChange:this.callback.bind(this)},M.a.createElement(ne,{tab:"24\u5c0f\u65f6",key:"1"}),M.a.createElement(ne,{tab:"12\u5c0f\u65f6",key:"2"}),M.a.createElement(ne,{tab:"6\u5c0f\u65f6",key:"3"}),M.a.createElement(ne,{tab:"3\u5c0f\u65f6",key:"4"}),M.a.createElement(ne,{tab:"1\u5c0f\u65f6",key:"5"})),M.a.createElement("div",{style:{textAlign:"center"}},M.a.createElement("span",null,this.props.msg)),M.a.createElement(Y["Chart"],{height:350,data:J,scale:U,forceFit:!0,style:{marginLeft:"-40px",paddingTop:"10px"}},M.a.createElement(Y["Legend"],null),M.a.createElement(Y["Axis"],{name:"timestamp"}),M.a.createElement(Y["Axis"],{name:""}),M.a.createElement(Y["Tooltip"],{crosshairs:{type:"y"}}),M.a.createElement(Y["Geom"],{type:"line",position:"timestamp*\u8bbf\u95ee\u91cf",size:2})))),M.a.createElement(i["a"],{span:9,style:{marginTop:"24px"}},M.a.createElement(r["a"],{title:this.props.YBmsg,extra:K,bordered:!1,style:{marginLeft:"6%",height:"430px"}},M.a.createElement(X,{Amount:this.state.zAmount,salesPieData:I,zuixinamount:this.state.zuixinamount})))),M.a.createElement(q["a"],{title:this.state.titlemsg,visible:this.state.wfwlbvisible,onCancel:this.wfwlbhandleCancel,footer:null},M.a.createElement(n["a"],{columns:P,dataSource:A,size:"small"})))}}]),a}(R["PureComponent"]))||U),oe=re,le=(a("bbsP"),a("/wGt")),ie=(a("BSQV"),a("3a4m")),se=a.n(ie);function ce(e){var t=ue();return function(){var a,n=S()(e);if(t){var r=S()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return x()(this,a)}}function ue(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var pe=C["a"].Item,de=q["a"].confirm,me=F["a"].Option,fe=function(e){return Object.keys(e).map(function(t){return e[t]}).join(",")};ee=Object(V["connect"])(function(e){var t=e.gate,a=e.loading;return{gate:t,loading:a.models.gate}}),te=C["a"].create(),ee(ae=te(ae=function(e){E()(a,e);var t=ce(a);function a(){var e;g()(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),e.state={modalVisible:!1,formValues:{},options:[],modalVisible2:!1,groupOpt:""},e.columns=[{title:"\u7f51\u5173\u5206\u7ec4",dataIndex:"group",align:"center"},{title:"\u4e3b\u673a\u5730\u5740",dataIndex:"host",align:"center"},{title:"\u76d1\u542c\u7aef\u53e3",dataIndex:"port",align:"center"},{title:"\u6d3b\u52a8\u65f6\u95f4\u6233",dataIndex:"timeActive",align:"center",render:function(e){return M.a.createElement("span",null,I()(e).format("YYYY-MM-DD"),M.a.createElement("br",null),I()(e).format("HH:mm:ss"))}},{title:"\u542f\u52a8\u65f6\u95f4\u6233",dataIndex:"timeStart",align:"center",render:function(e){return M.a.createElement("span",null,I()(e).format("YYYY-MM-DD"),M.a.createElement("br",null),I()(e).format("HH:mm:ss"))}},{title:"\u64cd\u4f5c",align:"center",render:function(t){return M.a.createElement("span",null,M.a.createElement("a",{href:"javaSrcipt:;",onClick:function(){return e.handleMenuClick(t._id)}},"\u5220\u9664"),M.a.createElement(m["a"],{type:"vertical"}),M.a.createElement("a",{href:"javaSrcipt:;",onClick:function(){return e.handleModalVisible2(!0,t)}},"\u8bf7\u6c42\u7edf\u8ba1"))}}],e.handleStandardTableChange=function(t,a,n){var r=e.props.dispatch,o=e.state.formValues,l=Object.keys(a).reduce(function(e,t){var n=u()({},e);return n[t]=fe(a[t]),n},{}),i=u()({skip:(t.current-1)*t.pageSize,limit:t.pageSize},o,l);n.field&&(i.sorter="".concat(n.field,"_").concat(n.order)),r({type:"gate/fetch",payload:i})},e.previewItem=function(e){se.a.push("/profile/basic/".concat(e))},e.handleFormReset=function(){var t=e.props,a=t.form,n=t.dispatch;a.resetFields(),e.setState({formValues:{}}),n({type:"gate/fetch",payload:{limit:0,skip:0}})},e.handleMenuClick=function(t){var a=e.props,n=a.dispatch;a.form;de({title:"\u786e\u8ba4\u64cd\u4f5c\u5c06\u5220\u9664\u5df2\u9009\u4e2d\u7f51\u5173\uff0c\u8bf7\u614e\u91cd\u9009\u62e9\u3002",okText:"\u786e\u8ba4",okType:"danger",cancelText:"\u653e\u5f03",onOk:function(){n({type:"gate/remove",payload:{id:t},callback:function(){n({type:"gate/fetch",payload:{limit:0,skip:0}})}})},onCancel:function(){}})},e.setGroupOpt=function(){var t=e.props.gate.group;console.log(e.props.gate);var a=[];void 0!=t&&t.length>0&&t.forEach(function(e,t){a.push(M.a.createElement(me,{key:e},e))}),e.setState({groupOpt:a})},e.handleSearch=function(t){t&&t.preventDefault();var a=e.props,n=a.dispatch,r=a.form;r.validateFields(function(t,a){if(!t){console.log(a);var r={group:a.group,host:a.host,limit:0,skip:0};e.setState({formValues:r}),n({type:"gate/fetch",payload:r})}})},e.handleModalVisible=function(t){e.setState({modalVisible:!!t})},e.handleModalVisible2=function(t,a){e.setState({modalVisible2:!!t,record:a})},e.showModal2=function(t){e.setState({visible2:!0,jid_jcgx:t})},e.handleCancel2=function(t){e.setState({visible2:!1}),e.handleSearch(t)},e.showModal3=function(t){e.setState({visible3:!0,jid_jarbq:t})},e.handleCancel3=function(t){e.setState({visible3:!1}),e.handleSearch(t)},e}return y()(a,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;this.props.gate.group;e({type:"gate/fetch",payload:{limit:0,skip:0}}),e({type:"gate/fetchGroupInGate",payload:{}})}},{key:"renderSimpleForm",value:function(){var e=this.props.form.getFieldDecorator;return M.a.createElement(C["a"],{onSubmit:this.handleSearch,layout:"inline"},M.a.createElement(o["a"],{gutter:{md:8,lg:24,xl:48}},M.a.createElement(i["a"],{md:8,sm:24},M.a.createElement(pe,{label:"\u7f51\u5173\u5206\u7ec4"},e("group",{rules:[{required:!1,message:"\u7f51\u5173\u5206\u7ec4!"}]})(M.a.createElement(F["a"],{style:{width:"100%"},onFocus:this.setGroupOpt},this.state.groupOpt)))),M.a.createElement(i["a"],{md:8,sm:24},M.a.createElement(pe,{label:"\u4e3b\u673a\u5730\u5740"},e("host",{rules:[{required:!1,message:"\u4e3b\u673a\u5730\u5740!"}]})(M.a.createElement(l["a"],null)))),M.a.createElement(i["a"],{md:8,sm:24},M.a.createElement("span",{className:P.a.submitButtons},M.a.createElement(s["a"],{type:"primary",htmlType:"submit"},"\u67e5\u8be2")))))}},{key:"renderForm",value:function(){return this.renderSimpleForm(this.state)}},{key:"render",value:function(){var e=this.props,t=e.gate,a=t.data,o=t.pagination,l=e.loading,i=this.state,s=(i.modalVisible,i.modalVisible2),c=i.record,p=(this.handleAdd,this.handleModalVisible,u()({showSizeChanger:!0,showQuickJumper:!0},o));return M.a.createElement(O["a"],{title:"\u67e5\u8be2\u8868\u683c"},M.a.createElement(r["a"],{bordered:!1},M.a.createElement("div",{className:P.a.tableList},M.a.createElement("div",{className:P.a.tableListForm},this.renderForm()),M.a.createElement(n["a"],{rowKey:"_id",loading:l,dataSource:void 0==a?[]:a[1],columns:this.columns,pagination:p,size:"small"}))),s?M.a.createElement(we,{handleUpdate:this.handleUpdate,value:c,handleModalVisible:this.handleModalVisible2,modalVisible:s}):null)}}]),a}(R["PureComponent"]))||ae);function he(e){var t=ge();return function(){var a,n=S()(e);if(t){var r=S()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return x()(this,a)}}function ge(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}F["a"].Option,F["a"].OptGroup,l["a"].TextArea,C["a"].Item;var ve,ye,be,Ee=function(e){E()(a,e);var t=he(a);function a(e){var r;g()(this,a),r=t.call(this,e),r.expandedRowRender=function(e){var t=[{title:"\u63a5\u53e3\u540d\u79f0",dataIndex:"entry",key:"entry",render:function(e){if("activeGate"!=e)return M.a.createElement("span",null,e)}},{title:"\u8bf7\u6c42\u6570\u91cf",dataIndex:"count",key:"count",render:function(e){if("activeGate"!=e.entry)return M.a.createElement("span",null,e.count)}}];console.log(e);var a=[];for(var r in e.value)a.push({key:r,entry:r,count:e.value[r]});return M.a.createElement(n["a"],{columns:t,dataSource:a,pagination:!1})};var o=r.props.value;return console.log(o),r}return y()(a,[{key:"render",value:function(){var e=this.props,t=e.modalVisible,a=(e.form,e.handleUpdate,e.handleModalVisible),r=e.value,o=this.props.form;o.getFieldDecorator,o.getFieldValue;console.log(this.state),console.log(this.props);var l=[{title:"\u670d\u52a1\u540d\u79f0",dataIndex:"service",key:"service"}],i=[];for(var s in r.request)console.log(r.request[s]),console.log(s),i.push({key:s,service:s,value:r.request[s]});return M.a.createElement(le["a"],{title:r.host+":"+r.port+"\u8bf7\u6c42\u7edf\u8ba1",width:900,destroyOnClose:!0,visible:t,onClose:function(){return a()}}," ",M.a.createElement(n["a"],{className:"components-table-demo-nested",columns:l,expandedRowRender:this.expandedRowRender,dataSource:i,defaultExpandAllRows:!0}))}}]),a}(R["PureComponent"]),we=C["a"].create()(Ee),xe=a("P4xi"),ke=a("6Hmz");function Se(e){var t=Ce();return function(){var a,n=S()(e);if(t){var r=S()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return x()(this,a)}}function Ce(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var Fe=ke["a"].WGGL_WGYXJK_DEL.key,Re=ke["a"].WGGL_WGYXJK_QQTJ.key,Me=F["a"].Option,Ve=C["a"].Item,Ae=(ve=Object(V["connect"])(function(e){var t=e.gate,a=e.loading;return{gate:t,loading:a.effects["gate/fetch"]}}),ye=C["a"].create(),ve(be=ye(be=function(e){E()(a,e);var t=Se(a);function a(){var e;g()(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),e.state={groupOpt:"",div3:"none",div1:"block",div2:"none",div4:"none",modalVisible:!1,formValues:{},modalVisible2:!1,status:0,xzoptions:[]},e.columns=[{title:"\u7f51\u5173\u5206\u7ec4",dataIndex:"group",align:"center"},{title:"\u4e3b\u673a\u5730\u5740",dataIndex:"host",align:"center"},{title:"\u76d1\u542c\u7aef\u53e3",dataIndex:"port",align:"center"},{title:"\u5065\u5eb7\u72b6\u6001",dataIndex:"status",align:"center",render:function(e){return 1==e?M.a.createElement("span",null,M.a.createElement(f["a"],{type:"bulb",theme:"filled",twoToneColor:"#33FF33",style:{fontSize:"16px",color:"#33FF33"}})):2==e?M.a.createElement("span",null,M.a.createElement(f["a"],{type:"bulb",theme:"filled",twoToneColor:"#CC00FF",style:{fontSize:"16px",color:"#FF1111"}})):3==e?M.a.createElement("span",null,M.a.createElement(f["a"],{type:"bulb",theme:"filled",twoToneColor:"#F8F819",style:{fontSize:"16px",color:"#F8F819"}})):void 0}},{title:"\u542f\u52a8\u65f6\u95f4",dataIndex:"timeStart",align:"center",render:function(e){return M.a.createElement("span",null,I()(e).format("YYYY-MM-DD"),M.a.createElement("br",null),I()(e).format("HH:mm:ss"))}},{title:"\u64cd\u4f5c",align:"center",render:function(t){return M.a.createElement("span",null,M.a.createElement("a",{href:"javaSrcipt:;",onClick:function(a){a&&a.preventDefault(),xe["a"].checkAuthAndExecute(e.props.dispatch,Fe,e.handleMenuClick(t._id),[])}},"\u5220\u9664"),M.a.createElement(m["a"],{type:"vertical"}),M.a.createElement("a",{href:"javaSrcipt:;",onClick:function(a){a&&a.preventDefault(),xe["a"].checkAuthAndExecute(e.props.dispatch,Re,e.handleModalVisible2(!0,t),[])}},"\u8bf7\u6c42\u7edf\u8ba1"))}}],e.tick=function(t){e.props.dispatch},e.handleMenuClick=function(t){var a=e.props,n=a.dispatch;a.form;confirm({title:"\u786e\u8ba4\u64cd\u4f5c\u5c06\u5220\u9664\u5df2\u9009\u4e2d\u7f51\u5173\uff0c\u8bf7\u614e\u91cd\u9009\u62e9\u3002",okText:"\u786e\u8ba4",okType:"danger",cancelText:"\u653e\u5f03",onOk:function(){var e=this;n({type:"gate/remove",payload:{id:1*t},callback:function(){e.handleFormReset()}})},onCancel:function(){}})},e.handleFormReset=function(){var t=e.props,a=t.form,n=t.dispatch;a.resetFields(),e.setState({formValues:{}}),n({type:"gate/monitor",payload:{group:null,sortby:["group",-1,"timeStart",-1],host:null,port:null,limit:0,skip:0,status:0}})},e.setGroupOpt=function(){var t=e.props.gate.group,a=[];void 0!=t&&t.length>0&&t.forEach(function(e,t){a.push(M.a.createElement(Me,{key:e},e))}),e.setState({groupOpt:a})},e.handleChangeSalesType=function(t){e.setState({salesType:t.target.value})},e.handleModalVisible2=function(t,a){e.setState({modalVisible2:!!t,record:a})},e.showModal=function(t){e.setState({visible:!0,YxxxMessage:t})},e.handleCancel=function(t){e.setState({visible:!1})},e.handleCancel1=function(t){e.setState({visible1:!1})},e.handleCancel2=function(t){e.setState({visible2:!1})},e.showDrawer=function(){e.setState({cspzvisibleDrawer:!0})},e.onClose=function(){e.setState({cspzvisibleDrawer:!1})},e.div1=function(t){e.setState({div1:"block",div3:"none",div2:"none",div4:"none",newstatus:"",newtimeout:"0"});var a=e.props,n=a.dispatch,r=a.form;r.validateFields(function(t,a){if(!t){console.log(a);var r={group:void 0==a.group?null:a.group,host:void 0==a.host?null:a.group,port:void 0==a.port?null:a.port,sortby:["group",-1,"timeStart",-1],limit:0,skip:0,status:0};e.setState({formValues:r}),n({type:"gate/monitor",payload:r})}})},e.div2=function(t){e.setState({div1:"none",div2:"block",div3:"none",div4:"none",newstatus:"1",newtimeout:"0"});var a=e.props,n=a.dispatch,r=a.form;r.validateFields(function(t,a){if(!t){console.log(a);var r={group:void 0==a.group?null:a.group,host:void 0==a.host?null:a.group,port:void 0==a.port?null:a.port,limit:0,skip:0,status:1,sortby:["group",-1,"timeStart",-1]};e.setState({formValues:r}),n({type:"gate/monitor",payload:r})}})},e.div3=function(t){e.setState({div1:"none",div2:"none",div3:"block",div4:"none",newtimeout:"-1"});var a=e.props,n=a.dispatch,r=a.form;r.validateFields(function(t,a){if(!t){console.log(a);var r={group:void 0==a.group?null:a.group,host:void 0==a.host?null:a.group,port:void 0==a.port?null:a.port,limit:0,skip:0,status:3,sortby:["group",-1,"timeStart",-1]};e.setState({formValues:r}),n({type:"gate/monitor",payload:r})}})},e.div4=function(t){e.setState({div1:"none",div2:"none",div3:"none",div4:"block",newtimeout:"0"});var a=e.props,n=a.dispatch,r=a.form;r.validateFields(function(t,a){if(!t){console.log(a);var r={group:void 0==a.group?null:a.group,host:void 0==a.host?null:a.group,port:void 0==a.port?null:a.port,limit:0,skip:0,status:2,sortby:["group",-1,"timeStart",-1]};e.setState({formValues:r}),n({type:"gate/monitor",payload:r})}})},e.onTabChange=function(t,a){e.setState(d()({},a,t))},e.handleSearch=function(t){t&&t.preventDefault();var a=e.props,n=a.dispatch,r=a.form;r.validateFields(function(t,a){if(!t){console.log(a);var r={group:void 0==a.group?null:a.group,host:void 0==a.host?null:a.group,port:void 0==a.port?null:a.port,limit:0,skip:0,status:e.state.status,sortby:["group",-1,"timeStart",-1]};e.setState({formValues:r}),n({type:"gate/monitor",payload:r,callback:function(){var t=e.props,a=(t.loading,t.gate),n=new Array;if(void 0!=a.data&&a.data[0]>0)for(var r=0;r<a.data[1].length;r++)n.push(a.data[1][r]._id);e.setState({xzoptions:n})}})}})},e}return y()(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.dispatch;t({type:"gate/monitor",payload:{group:null,sortby:["group",-1,"timeStart",-1],host:null,port:null,limit:0,skip:0,status:0},callback:function(){var t=e.props,a=(t.loading,t.gate),n=new Array;if(void 0!=a.data&&a.data[0]>0)for(var r=0;r<a.data[1].length;r++)n.push(a.data[1][r]._id);e.setState({xzoptions:n})}}),t({type:"gate/fetchGroupInGate"})}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.state,t=(e.salesType,e.icontype,e.icontype1,e.record),a=e.modalVisible2,c=this.props,p=(c.rule,c.loading),d=(c.chart,c.access,c.form.getFieldDecorator),m=this.props.gate,f=m.data,h=m.pagination,g=u()({showSizeChanger:!0,showQuickJumper:!0},h),v=function(e){var t=e.title,a=e.value,n=e.bordered;return M.a.createElement("div",{className:G.a.headerInfo},M.a.createElement("span",null,t),M.a.createElement("p",null,a),n&&M.a.createElement("em",null))};s["a"];return M.a.createElement(O["a"],null,M.a.createElement("div",null,M.a.createElement(o["a"],{span:24},M.a.createElement(r["a"],null,M.a.createElement("div",{className:P.a.tableList},M.a.createElement("div",{className:P.a.tableListForm},M.a.createElement(C["a"],{onSubmit:this.handleSearch,layout:"inline",onReset:this.handleFormReset},M.a.createElement(o["a"],{gutter:{md:8,lg:24,xl:48}},M.a.createElement(i["a"],{span:5},M.a.createElement(Ve,{label:"\u7f51\u5173\u5206\u7ec4"},d("group",{rules:[{required:!1,message:"\u7f51\u5173\u5206\u7ec4!"}]})(M.a.createElement(F["a"],{style:{width:"110px"},onFocus:this.setGroupOpt},this.state.groupOpt)))),M.a.createElement(i["a"],{span:5},M.a.createElement(Ve,{label:"\u4e3b\u673a\u5730\u5740"},d("host",{rules:[{required:!1,message:"\u4e3b\u673a\u5730\u5740!"}]})(M.a.createElement(l["a"],{style:{width:"110px"}})))),M.a.createElement(i["a"],{span:5},M.a.createElement(Ve,{label:"\u4e3b\u673a\u7aef\u53e3"},d("port",{rules:[{required:!1,message:"\u4e3b\u673a\u7aef\u53e3!"}]})(M.a.createElement(l["a"],{style:{width:"110px"}})))),M.a.createElement(i["a"],{span:7,className:z.a.submitButtons},M.a.createElement("span",{style:{margin:"10px"}},M.a.createElement(s["a"],{type:"primary",htmlType:"submit"},"\u67e5\u8be2")),M.a.createElement("span",{style:{margin:"10px"}},M.a.createElement(s["a"],{type:"primary",htmlType:"reset"},"\u91cd\u7f6e")),M.a.createElement("span",{style:{margin:"10px"}},M.a.createElement(s["a"],{onClick:this.handleSearch},"\u5237\u65b0"))))))))),M.a.createElement(o["a"],{span:24,style:{marginTop:"24px"}},M.a.createElement("div",{className:G.a.standardList},M.a.createElement(r["a"],{bordered:!1},M.a.createElement(o["a"],null,M.a.createElement(i["a"],{onClick:this.div1.bind(this),style:{width:"25%",cursor:"pointer"},xs:24},M.a.createElement(v,{title:"\u7f51\u5173\u603b\u6570",value:void 0==f?[]:void 0!=f[2]?f[2].total:0,bordered:!0}),M.a.createElement("div",{style:{display:this.state.div1},className:z.a.hx})),M.a.createElement(i["a"],{onClick:this.div2.bind(this),style:{width:"25%",cursor:"pointer"},xs:24},M.a.createElement(v,{title:"\u6b63\u5e38",value:void 0==f?[]:void 0!=f[2]?f[2].normal:0,bordered:!0}),M.a.createElement("div",{style:{display:this.state.div2},className:z.a.hx})),M.a.createElement(i["a"],{onClick:this.div3.bind(this),style:{width:"25%",cursor:"pointer"},xs:24},M.a.createElement(v,{title:"\u5ef6\u65f6",value:void 0==f?[]:void 0!=f[2]?f[2].delay:0,bordered:!0}),M.a.createElement("div",{style:{display:this.state.div3},className:z.a.hx})),M.a.createElement(i["a"],{onClick:this.div4.bind(this),style:{width:"25%",cursor:"pointer"},xs:24},M.a.createElement(v,{title:"\u5931\u6548",value:void 0==f?[]:void 0!=f[2]?f[2].invalid:0,bordered:!0}),M.a.createElement("div",{style:{display:this.state.div4},className:z.a.hx})))))),M.a.createElement(o["a"],{span:24},M.a.createElement(oe,{msg:"\u8bbf\u95ee\u91cf\u7edf\u8ba1",msgflag:"2",YBmsg:"\u7f51\u5173\u8bbf\u95ee\u91cf\u5206\u5e03TOP10",xzoptions:this.state.xzoptions})),M.a.createElement(o["a"],{span:24,style:{marginTop:"24px"}},M.a.createElement(r["a"],{bordered:!1},M.a.createElement("div",{className:z.a.tableList},M.a.createElement(n["a"],{rowKey:"_id",loading:p,dataSource:void 0==f?[]:f[1],columns:this.columns,pagination:g,size:"small"}))))),a?M.a.createElement(we,{handleUpdate:this.handleUpdate,value:t,handleModalVisible:this.handleModalVisible2,modalVisible:a}):null)}}]),a}(R["PureComponent"]))||be)||be);t["default"]=Ae},vQLQ:function(e,t,a){e.exports={card:"antd-pro-pages-gateway-gate-style-card",heading:"antd-pro-pages-gateway-gate-style-heading",steps:"antd-pro-pages-gateway-gate-style-steps",errorIcon:"antd-pro-pages-gateway-gate-style-errorIcon",errorPopover:"antd-pro-pages-gateway-gate-style-errorPopover",errorListItem:"antd-pro-pages-gateway-gate-style-errorListItem",errorField:"antd-pro-pages-gateway-gate-style-errorField",editable:"antd-pro-pages-gateway-gate-style-editable",advancedForm:"antd-pro-pages-gateway-gate-style-advancedForm",optional:"antd-pro-pages-gateway-gate-style-optional",hx:"antd-pro-pages-gateway-gate-style-hx",antmodel:"antd-pro-pages-gateway-gate-style-antmodel",antformitem:"antd-pro-pages-gateway-gate-style-antformitem",anttablethead:"antd-pro-pages-gateway-gate-style-anttablethead",antcolsmoffset4:"antd-pro-pages-gateway-gate-style-antcolsmoffset4",antformitemcontrol:"antd-pro-pages-gateway-gate-style-antformitemcontrol"}}}]);