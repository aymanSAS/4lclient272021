(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4502960a"],{"102c":function(t,s,a){"use strict";a("275e")},2461:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dropdown"},[a("select",{staticClass:"browser-default custom-select",staticStyle:{"margin-bottom":"1em"}},[a("option",{attrs:{selected:""}},[t._v("Open this select menu")]),t._l(t.mydata,(function(s){return a("option",{key:s.id},[t._v(t._s(s.payload))])}))],2)])},o=[],r={name:"MessagesDrop",props:["mydata"]},i=r,l=a("2877"),c=Object(l["a"])(i,e,o,!1,null,null,null);s["a"]=c.exports},"275e":function(t,s,a){},2899:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{clas:"messagetable"}},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"id"}},[t._v("ID :")]),a("div",{staticClass:"col-sm-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentmessage.id,expression:"currentmessage.id"}],staticClass:"form-control",attrs:{type:"text",name:"id",readonly:""},domProps:{value:t.currentmessage.id},on:{input:function(s){s.target.composing||t.$set(t.currentmessage,"id",s.target.value)}}})]),a("br"),a("div",[a("table",{staticClass:"table"},[t._m(0),t._l(t.ays,(function(s){return a("tr",{key:s.id,class:{highlight:s.id==t.currentmessage.id},on:{click:function(a){return t.selectRow(s.id,s.fcode,s.comment)}}},[a("td",[t._v(" "+t._s(s.id)+" ")]),a("td",[t._v(" Machine Stop ")]),a("td",[t._v(" "+t._s(t._f("formatDate")(s.date))+" ")]),a("td",[t._v(" "+t._s(s.fcode)+" .. "+t._s(s.fdesc)+" ")]),a("td",[t._v(" "+t._s(s.Comment)+" ")]),a("td",[t._v(" "+t._s(s.mcomment)+" ")]),a("td",[t._v(" "+t._s(s.tp2||0)+" ")]),a("td",[t._v(" "+t._s(s.fperiod||0)+" ")])])}))],2)])])},o=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",{staticClass:"thead-dark"},[a("th",{attrs:{scope:"col"}},[t._v("id")]),a("th",{attrs:{scope:"col"}},[t._v("Message")]),a("th",{attrs:{scope:"col"}},[t._v("Date")]),a("th",{attrs:{scope:"col"}},[t._v("Fcode")]),a("th",{attrs:{scope:"col"}},[t._v("Op Comment")]),a("th",{attrs:{scope:"col"}},[t._v("Maint Comment")]),a("th",{attrs:{scope:"col"}},[t._v("Maint Time")]),a("th",{attrs:{scope:"col"}},[t._v("Stop Period")])])}],r=(a("db04"),{name:"MessagesTable",props:["ays","user","cats","subcats","failures","tp1","tp2","tp3"],data:function(){return{messages:[],currentmessage:{id:"",fcode:"",comment:""},mycat:"",currentIndex:-1,cat:"",mycats:""}},methods:{selectRow:function(t,s,a){this.currentmessage.id=t,this.currentmessage.fcode=s,this.currentmessage.comment=a}}}),i=r,l=(a("5edc"),a("2877")),c=Object(l["a"])(i,e,o,!1,null,"1417c334",null);s["a"]=c.exports},"311e":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"visa"}},[a("h1",[t._v("Vue Visa Application")]),a("form",[t._m(0),a("br"),t._m(1),a("br"),t._m(2),a("br"),a("label",{attrs:{for:"passport number"}},[t._v("Passport Number:")]),a("input",{attrs:{type:"text",required:""}}),a("label",{attrs:{for:"duration"}},[t._v("Duration of stay:")]),a("input",{attrs:{type:"text",required:""}}),a("br"),a("br"),a("button",{on:{click:t.addVisa}},[t._v("Add another previous visa")]),a("br"),t._l(t.applicants,(function(s,e){return a("div",{key:e,staticClass:"previous"},[a("span",{on:{click:function(s){return t.deleteVisa(e)}}},[t._v("x")]),a("label",{attrs:{for:"duration"}},[t._v(t._s(e+1)+". Previous Visa:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.previous,expression:"applicant.previous"}],attrs:{type:"text",required:""},domProps:{value:s.previous},on:{input:function(a){a.target.composing||t.$set(s,"previous",a.target.value)}}}),a("label",{attrs:{for:"duration"}},[t._v("Year of expiration:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.expiration,expression:"applicant.expiration"}],attrs:{type:"text",required:""},domProps:{value:s.expiration},on:{input:function(a){a.target.composing||t.$set(s,"expiration",a.target.value)}}})])}))],2)])},o=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("label",{attrs:{for:"first name"}},[t._v("First Name : "),a("input",{attrs:{type:"text",required:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("label",{attrs:{for:"last name"}},[t._v("Last Name : "),a("input",{attrs:{type:"text",required:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("label",{attrs:{for:"country"}},[t._v("Nationality : "),a("input",{attrs:{type:"text",required:""}})])}],r=(a("a434"),{name:"Visa",props:{msg:String},data:function(){return{applicants:[{previous:"",expiration:""}]}},methods:{addVisa:function(){this.applicants.push({previous:"",expiration:""})},deleteVisa:function(t){this.applicants.splice(t,1)}}}),i=r,l=(a("102c"),a("2877")),c=Object(l["a"])(i,e,o,!1,null,"e4aeddda",null);s["a"]=c.exports},"4d60":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("header",{staticClass:"jumbotron"},[a("h1",{directives:[{name:"formatme",rawName:"v-formatme.black",value:45,expression:"45",modifiers:{black:!0}}],staticStyle:{"text-align":"center","margin-bottom":"5px","margin-top":"-30px"}},[t._v("Assets")]),a("div",[a("TabAssets")],1)])])},o=[],r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t._m(0),a("div",{staticClass:"tab-content"},[t._m(1),a("div",{staticClass:"tab-pane container fade",attrs:{id:"menu1"}},[a("MessagesTable",{attrs:{ays:t.content}})],1),a("div",{staticClass:"tab-pane container fade",attrs:{id:"menu2"}},[a("Visa")],1),a("div",{staticClass:"tab-pane container fade",attrs:{id:"ayman"}})])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"nav nav-tabs"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{"data-toggle":"tab",href:"#home"}},[t._v("New Asset")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-toggle":"tab",href:"#menu1"}},[t._v("Asset Table ")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tab-pane container active",attrs:{id:"home"}},[a("div",{staticClass:"assetcontainer"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("form",{attrs:{method:"POST"}},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"staticEmail"}},[t._v("Asset No :")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control",attrs:{type:"text"}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Asset Desc :")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control",attrs:{type:"text"}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Site Code :")]),a("div",{staticClass:"col-sm-10"},[a("select",{staticStyle:{width:"280px"}},[a("option",[t._v(" Veto")])]),t._v(" "),a("input",{staticStyle:{width:"390px","margin-left":"30px","max-width":"48.8%"},attrs:{type:"text",id:"country",name:"country",value:"",readonly:""}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Department :")]),a("div",{staticClass:"col-sm-10"},[a("select",{staticStyle:{width:"280px"}},[a("option",[t._v(" Veto")])]),t._v(" "),a("input",{staticStyle:{width:"390px","margin-left":"30px","max-width":"48.8%"},attrs:{type:"text",id:"country",name:"country",value:"",readonly:""}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Location :")]),a("div",{staticClass:"col-sm-10"},[a("select",{staticStyle:{width:"280px"}},[a("option",[t._v(" Veto")])]),t._v(" "),a("input",{staticStyle:{width:"390px","margin-left":"30px","max-width":"48.8%"},attrs:{type:"text",id:"country",name:"country",value:"",readonly:""}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Category :")]),a("div",{staticClass:"col-sm-10"},[a("select",{staticStyle:{width:"280px"}},[a("option",[t._v(" Veto")])]),t._v(" "),a("input",{staticStyle:{width:"390px","margin-left":"30px","max-width":"48.8%"},attrs:{type:"text",id:"country",name:"country",value:"",readonly:""}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Status :")]),a("div",{staticClass:"col-sm-10"},[a("select",{staticStyle:{width:"705px"}},[a("option",[t._v(" Veto")])])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Criticality :")]),a("div",{staticClass:"col-sm-10"},[a("select",{staticStyle:{width:"705px"}},[a("option",[t._v(" Veto")])])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Auth. Emp :")]),a("div",{staticClass:"col-sm-10"},[a("select",{staticStyle:{width:"705px"}},[a("option",[t._v(" Veto")])])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Tech. Notes :")]),a("div",{staticClass:"col-sm-10"},[a("textarea",{staticClass:"form-control",staticStyle:{height:"80px"},attrs:{type:"text"}})])]),a("br"),a("hr",{attrs:{size:"300",noshade:""}}),a("br"),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"staticEmail"}},[t._v("Manf :")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control",attrs:{type:"text"}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Model No :")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control",attrs:{type:"text"}})])])])]),a("div",{staticClass:"col-md-6"},[a("form",{attrs:{method:"POST"}},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Serial No :")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control",attrs:{type:"text"}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Contactor :")]),a("div",{staticClass:"col-sm-10"},[a("select",{staticStyle:{width:"705px"}},[a("option",[t._v(" Veto")])])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Waranty :")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control",attrs:{type:"checkbox"}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Waranty/Expire Date :")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control",attrs:{type:"date"}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Waranty Notes :")]),a("div",{staticClass:"col-sm-10"},[a("textarea",{staticClass:"form-control",staticStyle:{height:"80px"},attrs:{type:"text"}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Asset Notes :")]),a("div",{staticClass:"col-sm-10"},[a("textarea",{staticClass:"form-control",staticStyle:{height:"80px"},attrs:{type:"text"}})])]),a("br"),a("hr",{attrs:{size:"300",noshade:""}}),a("br"),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"staticEmail"}},[t._v("Supplier :")]),a("div",{staticClass:"col-sm-10"},[a("select",{staticStyle:{width:"705px"}},[a("option",[t._v(" Veto")])])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Purchase Price :")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"0"}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Date Aquired :")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control",attrs:{type:"date"}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Current Value :")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"0"}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Date Disposed :")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control",attrs:{type:"date"}})])])])])])]),a("p",{attrs:{align:"right"}},[a("button",{staticClass:"btn btn-success",attrs:{type:"button"}},[t._v("Save")])])])}],l=a("311e"),c=a("1f57"),n=a("2899"),m={name:"TabAssets",data:function(){return{content:"",user:""}},components:{MessagesTable:n["a"],Visa:l["a"]},mounted:function(){var t=this;c["a"].getMessages().then((function(s){t.content=s.data})).catch((function(t){console.error(t)}))},methods:{Getit:function(){var t=this;c["a"].getMessages().then((function(s){t.content=s.data})).catch((function(t){console.error(t)}))}}},d=m,u=(a("75cf"),a("2877")),p=Object(u["a"])(d,r,i,!1,null,"5d3ae0d6",null),f=p.exports,v=a("2461"),C=(a("9962"),a("c4c6"),a("bc3a"),a("8654")),b=(new C["a"]("",""),{name:"Messages",data:function(){return{content:{}}},components:{MessagesTable:n["a"],MessagesDrop:v["a"],TabAssets:f},mounted:function(){var t=this;c["a"].getMessages().then((function(s){t.content=s.data})).catch((function(t){console.error(t)}))},methods:{Getit:function(){var t=this;c["a"].getMessages().then((function(s){t.content=s.data})).catch((function(t){console.error(t)}))}}}),_=b,h=Object(u["a"])(_,e,o,!1,null,null,null);s["default"]=h.exports},"5edc":function(t,s,a){"use strict";a("7894")},7259:function(t,s,a){},"75cf":function(t,s,a){"use strict";a("7259")},7894:function(t,s,a){},a434:function(t,s,a){"use strict";var e=a("23e7"),o=a("23cb"),r=a("a691"),i=a("50c4"),l=a("7b0b"),c=a("65f0"),n=a("8418"),m=a("1dde"),d=m("splice"),u=Math.max,p=Math.min,f=9007199254740991,v="Maximum allowed length exceeded";e({target:"Array",proto:!0,forced:!d},{splice:function(t,s){var a,e,m,d,C,b,_=l(this),h=i(_.length),g=o(t,h),y=arguments.length;if(0===y?a=e=0:1===y?(a=0,e=h-g):(a=y-2,e=p(u(r(s),0),h-g)),h+a-e>f)throw TypeError(v);for(m=c(_,e),d=0;d<e;d++)C=g+d,C in _&&n(m,d,_[C]);if(m.length=e,a<e){for(d=g;d<h-e;d++)C=d+e,b=d+a,C in _?_[b]=_[C]:delete _[b];for(d=h;d>h-e+a;d--)delete _[d-1]}else if(a>e)for(d=h-e;d>g;d--)C=d+e-1,b=d+a-1,C in _?_[b]=_[C]:delete _[b];for(d=0;d<a;d++)_[d+g]=arguments[d+2];return _.length=h-e+a,m}})}}]);
//# sourceMappingURL=chunk-4502960a.6633c8a4.js.map