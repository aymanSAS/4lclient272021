(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-538edc71"],{"102c":function(t,e,a){"use strict";a("275e")},"275e":function(t,e,a){},"2f0c":function(t,e,a){},"311e":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"visa"}},[a("h1",[t._v("Vue Visa Application")]),a("form",[t._m(0),a("br"),t._m(1),a("br"),t._m(2),a("br"),a("label",{attrs:{for:"passport number"}},[t._v("Passport Number:")]),a("input",{attrs:{type:"text",required:""}}),a("label",{attrs:{for:"duration"}},[t._v("Duration of stay:")]),a("input",{attrs:{type:"text",required:""}}),a("br"),a("br"),a("button",{on:{click:t.addVisa}},[t._v("Add another previous visa")]),a("br"),t._l(t.applicants,(function(e,i){return a("div",{key:i,staticClass:"previous"},[a("span",{on:{click:function(e){return t.deleteVisa(i)}}},[t._v("x")]),a("label",{attrs:{for:"duration"}},[t._v(t._s(i+1)+". Previous Visa:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.previous,expression:"applicant.previous"}],attrs:{type:"text",required:""},domProps:{value:e.previous},on:{input:function(a){a.target.composing||t.$set(e,"previous",a.target.value)}}}),a("label",{attrs:{for:"duration"}},[t._v("Year of expiration:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.expiration,expression:"applicant.expiration"}],attrs:{type:"text",required:""},domProps:{value:e.expiration},on:{input:function(a){a.target.composing||t.$set(e,"expiration",a.target.value)}}})])}))],2)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"first name"}},[t._v("First Name : "),a("input",{attrs:{type:"text",required:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"last name"}},[t._v("Last Name : "),a("input",{attrs:{type:"text",required:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"country"}},[t._v("Nationality : "),a("input",{attrs:{type:"text",required:""}})])}],n=(a("a434"),{name:"Visa",props:{msg:String},data:function(){return{applicants:[{previous:"",expiration:""}]}},methods:{addVisa:function(){this.applicants.push({previous:"",expiration:""})},deleteVisa:function(t){this.applicants.splice(t,1)}}}),o=n,r=(a("102c"),a("2877")),c=Object(r["a"])(o,i,s,!1,null,"e4aeddda",null);e["a"]=c.exports},"479c":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"tab-content"},[a("div",{staticClass:"tab-pane container active",attrs:{id:"home"}},[a("div",{staticClass:"assetcontainer"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md"},[a("form",{staticClass:"submit-form"},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"id"}},[t._v("ID :")]),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selSite,expression:"selSite"}],staticClass:"form-control",attrs:{type:"text",name:"id",readonly:""},domProps:{value:t.selSite},on:{input:function(e){e.target.composing||(t.selSite=e.target.value)}}})]),a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"veto"}},[t._v("Site No :")]),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.site.SiteCode,expression:"site.SiteCode"}],staticClass:"form-control",attrs:{type:"text",name:"veto"},domProps:{value:t.site.SiteCode},on:{input:function(e){e.target.composing||t.$set(t.site,"SiteCode",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Site Name :")]),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.site.Sitename,expression:"site.Sitename"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.site.Sitename},on:{input:function(e){e.target.composing||t.$set(t.site,"Sitename",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Supervision ID :")]),a("div",{staticClass:"col-sm-10"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.site.PlantNO,expression:"site.PlantNO"}],staticStyle:{width:"705px"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.site,"PlantNO",e.target.multiple?a:a[0])}}},t._l(t.content,(function(e){return a("option",{key:e.id,attrs:{value:""}},[t._v(" "+t._s(e.Sitename))])})),0),t._v(" "),a("input",{staticStyle:{width:"718px","margin-left":"30px","max-width":"48.8%"},attrs:{type:"text",id:"country",name:"country",value:"",readonly:""}})])]),t._m(1),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Plant No :")]),a("div",{staticClass:"col-sm-10"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.site.PlantNo,expression:"site.PlantNo"}],staticStyle:{width:"705px"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.site,"PlantNo",e.target.multiple?a:a[0])}}},[a("option",[t._v(" Veto")])]),t._v(" "),a("input",{staticStyle:{width:"718px","margin-left":"30px","max-width":"48.8%"},attrs:{type:"text",id:"country",name:"country",value:"",readonly:""}})])])])])])]),a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.Setit.apply(null,arguments)}}},[t._v("Save")]),a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.newSite.apply(null,arguments)}}},[t._v("New")]),a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.newSite.apply(null,arguments)}}},[t._v("Update")])]),a("div",{staticClass:"tab-pane container fade",attrs:{id:"menu1"}},[a("SiteTable",{attrs:{ays:t.content}})],1),a("div",{staticClass:"tab-pane container fade",attrs:{id:"menu2"}},[a("Visa")],1),a("div",{staticClass:"tab-pane container fade",attrs:{id:"ayman"}})])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"nav nav-tabs"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{"data-toggle":"tab",href:"#home"}},[t._v("New Site")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-toggle":"tab",href:"#menu1"}},[t._v("Sites Table ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Fax :")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control",attrs:{type:"text"}})])])}],n=a("311e"),o=a("1f57"),r=a("b85b"),c=void 0,l={name:"TabSites",data:function(){return{content:"",selSite:"",id1:"",site:{id:null,SiteCode:"",Sitename:"",PlantNo:""}}},components:{SiteTable:r["a"],Visa:n["a"]},mounted:function(){var t=this;o["a"].getSites().then((function(e){t.content=e.data})).catch((function(t){console.error(t)}))},methods:{Getit:function(){o["a"].getSites().then((function(t){c.content=t.data})).catch((function(t){console.error(t)}))},newSite:function(){this.submitted=!1,this.site={}},Setit:function(){var t=this,e={SiteCode:this.site.SiteCode,Sitename:this.site.Sitename,PlantNo:this.site.PlantNo};console.log(e),o["a"].setSite(e).then((function(e){o["a"].getSites().then((function(e){t.content=e.data,t.site.id=e.data[0].id})).catch((function(t){console.error(t)}))})).catch((function(t){console.log(t)}))}}},u=l,d=(a("7b55"),a("2877")),m=Object(d["a"])(u,i,s,!1,null,"13aa743a",null);e["a"]=m.exports},"699f":function(t,e,a){},"7b55":function(t,e,a){"use strict";a("699f")},"987c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("header",{staticClass:"jumbotron"},[a("h1",{directives:[{name:"formatme",rawName:"v-formatme.black",value:45,expression:"45",modifiers:{black:!0}}],staticStyle:{"text-align":"center","margin-bottom":"5px","margin-top":"-30px"}},[t._v("Sites")]),a("div",[a("TabSites")],1)])])},s=[],n=a("479c"),o=(a("9962"),a("1f57")),r=(a("c4c6"),a("bc3a"),a("8654")),c=(new r["a"]("",""),{name:"Sites",data:function(){return{content:{}}},components:{TabSites:n["a"]},mounted:function(){var t=this;o["a"].getSites().then((function(e){t.content=e.data})).catch((function(t){console.error(t)}))},methods:{Getit:function(){var t=this;o["a"].getSites().then((function(e){t.content=e.data})).catch((function(t){console.error(t)}))}}}),l=c,u=a("2877"),d=Object(u["a"])(l,i,s,!1,null,null,null);e["default"]=d.exports},a434:function(t,e,a){"use strict";var i=a("23e7"),s=a("23cb"),n=a("a691"),o=a("50c4"),r=a("7b0b"),c=a("65f0"),l=a("8418"),u=a("1dde"),d=u("splice"),m=Math.max,p=Math.min,v=9007199254740991,f="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var a,i,u,d,b,h,_=r(this),S=o(_.length),C=s(t,S),g=arguments.length;if(0===g?a=i=0:1===g?(a=0,i=S-C):(a=g-2,i=p(m(n(e),0),S-C)),S+a-i>v)throw TypeError(f);for(u=c(_,i),d=0;d<i;d++)b=C+d,b in _&&l(u,d,_[b]);if(u.length=i,a<i){for(d=C;d<S-i;d++)b=d+i,h=d+a,b in _?_[h]=_[b]:delete _[h];for(d=S;d>S-i+a;d--)delete _[d-1]}else if(a>i)for(d=S-i;d>C;d--)b=d+i-1,h=d+a-1,b in _?_[h]=_[b]:delete _[h];for(d=0;d<a;d++)_[d+C]=arguments[d+2];return _.length=S-i+a,u}})},b85b:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{clas:"sitetable"}},[a("form",{staticClass:"submit-form"},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"id"}},[t._v("ID :")]),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentSite.id,expression:"currentSite.id"}],staticClass:"form-control",attrs:{type:"text",name:"id",readonly:""},domProps:{value:t.currentSite.id},on:{input:function(e){e.target.composing||t.$set(t.currentSite,"id",e.target.value)}}})]),a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"veto"}},[t._v("Site No :")]),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentSite.siteCode,expression:"currentSite.siteCode"}],staticClass:"form-control",attrs:{type:"text",name:"veto"},domProps:{value:t.currentSite.siteCode},on:{input:function(e){e.target.composing||t.$set(t.currentSite,"siteCode",e.target.value)}}})]),a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Plant No :")]),a("div",{staticClass:"col-sm-10"},[a("select",{staticStyle:{width:"705px"}},t._l(t.ays,(function(e){return a("option",{key:e.id,on:{click:function(a){return t.getcat(e.id)}}},[t._v(" "+t._s(e.Sitename))])})),0)]),a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Mysite :")]),a("div",{staticClass:"col-sm-10"},[a("select",{staticStyle:{width:"705px"}},t._l(t.mysites,(function(e){return a("option",{key:e.id},[t._v(" "+t._s(e.Sitename))])})),0)])])]),a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.updateit.apply(null,arguments)}}},[t._v("Update")]),a("div",[a("table",{staticClass:"table"},[t._m(0),t._l(t.ays,(function(e){return a("tr",{key:e.id,class:{highlight:e.id==t.currentSite.id},on:{click:function(a){return t.selectRow(e.id,e.SiteCode)}}},[a("td",[t._v(" "+t._s(e.id)+" ")]),a("td",[t._v(" "+t._s(e.SiteCode)+" ")]),a("td",[t._v(" "+t._s(e.Sitename)+" ")]),a("td",[t._v(" "+t._s(e.PlantNo)+" ")])])}))],2)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("th",{attrs:{scope:"col"}},[t._v("id")]),a("th",{attrs:{scope:"col"}},[t._v("Site Code")]),a("th",{attrs:{scope:"col"}},[t._v("Site Name")]),a("th",{attrs:{scope:"col"}},[t._v("Plant No")])])}],n=a("1f57"),o={name:"SiteTable",data:function(){return{sites:[],currentSite:{id:"",siteCode:""},mysite:"",currentIndex:-1,site:"",mysites:""}},props:["ays","selectedsite"],computed:{d1:function(){}},methods:{selectRow:function(t,e){this.currentSite.id=t,this.currentSite.siteCode=e},selectSite:function(t){this.mysite=t},getcat:function(t){var e=this;n["a"].getmycat(t).then((function(t){e.mysites=t.data})).catch((function(t){console.error(t)}))},updateit:function(){var t=this,e={id:this.currentSite.id,SiteCode:this.currentSite.siteCode};console.log(e),n["a"].updateSite(e).then((function(e){n["a"].getSites().then((function(e){t.ays=e.data})).catch((function(t){console.error(t)})),console.log(e)})).catch((function(t){console.log(t)}))}}},r=o,c=(a("ccb0"),a("2877")),l=Object(c["a"])(r,i,s,!1,null,"623ff4ae",null);e["a"]=l.exports},ccb0:function(t,e,a){"use strict";a("2f0c")}}]);
//# sourceMappingURL=chunk-538edc71.5c55ac9a.js.map