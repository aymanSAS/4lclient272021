(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41a0f673"],{2131:function(t,a,e){},"8af0":function(t,a,e){"use strict";e.r(a);var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("header",[e("h1",{directives:[{name:"formatme",rawName:"v-formatme.black",value:30,expression:"30",modifiers:{black:!0}}]},[t._v("Categories")]),e("div",{staticClass:"jumbotron",staticStyle:{width:"100%"}},[e("CatTable")],1)])])},n=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{clas:"cattable"}},[e("div",{staticClass:"col-sm-10"},[e("button",{staticClass:"btn btn-danger",staticStyle:{"margin-right":"15px","margin-bottom":"15px"},attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.unlockit.apply(null,arguments)}}},[t._v("Unlock 4L Machine ")]),e("button",{staticClass:"btn btn-warning",staticStyle:{"margin-right":"50px","margin-bottom":"15px"},attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.lockit.apply(null,arguments)}}},[t._v("Lock 4L Machine ")])]),e("form",{staticClass:"submit-form"},[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-3 col-form-label",attrs:{for:"id"}},[t._v("ID :")]),e("div",{staticClass:"col-sm-5"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.currentcat.id,expression:"currentcat.id"}],staticClass:"form-control",attrs:{type:"text",name:"id",readonly:""},domProps:{value:t.currentcat.id},on:{input:function(a){a.target.composing||t.$set(t.currentcat,"id",a.target.value)}}})])]),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-3 col-form-label",attrs:{for:"veto"}},[t._v("Cat Code :")]),e("div",{staticClass:"col-sm-5"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.currentcat.catcode,expression:"currentcat.catcode"}],staticClass:"form-control",attrs:{type:"text",name:"veto"},domProps:{value:t.currentcat.catcode},on:{input:function(a){a.target.composing||t.$set(t.currentcat,"catcode",a.target.value)}}})])]),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-3 col-form-label",attrs:{for:"veto"}},[t._v("Cat Name :")]),e("div",{staticClass:"col-sm-5"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.currentcat.catname,expression:"currentcat.catname"}],staticClass:"form-control",attrs:{type:"text",name:"veto"},domProps:{value:t.currentcat.catname},on:{input:function(a){a.target.composing||t.$set(t.currentcat,"catname",a.target.value)}}})])])]),e("button",{staticClass:"btn btn-success",staticStyle:{"margin-right":"15px","margin-bottom":"15px"},attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.Setit.apply(null,arguments)}}},[t._v("Save")]),e("button",{staticClass:"btn btn-success",staticStyle:{"margin-right":"15px","margin-bottom":"15px"},attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.updateit.apply(null,arguments)}}},[t._v("Update")]),e("button",{staticClass:"btn btn-warning",staticStyle:{"margin-right":"15px","margin-bottom":"15px"},attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.newsubcat.apply(null,arguments)}}},[t._v("New")]),e("button",{staticClass:"btn btn-danger",staticStyle:{"margin-bottom":"15px"},attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.delit.apply(null,arguments)}}},[t._v("Delete")]),e("div",[e("table",{staticClass:"table"},[t._m(0),t._l(t.propcats,(function(a){return e("tr",{key:a.id,class:{highlight:a.id==t.currentcat.id},on:{click:function(e){return t.selectRow(a.id,a.catname,a.catcode)}}},[e("td",[t._v(" "+t._s(a.id)+" ")]),e("td",[t._v(" "+t._s(a.catcode)+" ")]),e("td",[t._v(" "+t._s(a.catname)+" ")])])}))],2)])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticClass:"thead-dark"},[e("th",{attrs:{scope:"col"}},[t._v("id")]),e("th",{attrs:{scope:"col"}},[t._v("Category Code")]),e("th",{attrs:{scope:"col"}},[t._v("Category Name")])])}],r=e("1f57"),i=e("db04"),l={name:"CatTable",data:function(){return{currentcat:{id:"",catname:"",catcode:""},mycat:"",currentIndex:-1,cat:"",mycates:"",propcats:""}},props:["ays","selectedcat"],computed:{rotateprop:function(){return this.propcats=this.ays,this.propcats}},mounted:function(){this.rotateprop,this.getcats()},methods:{selectRow:function(t,a,e){this.currentcat.id=t,this.currentcat.catname=a,this.currentcat.catcode=e},lockmachine:function(){var t={mid:"",val:""};t.mid=this.$store.state.midDo0,t.val="true",i["a"].sendonoff(t).then((function(t){console.log("send off ok")})).catch((function(t){console.log(t)}))},unlockmachine:function(){var t={mid:"",val:""};t.mid=this.$store.state.midDo0,t.val="false",i["a"].sendonoff(t).then((function(t){console.log("send on ok")})).catch((function(t){console.log(t)}))},lockit:function(){this.lockmachine()},unlockit:function(){this.unlockmachine()},getcat:function(t){var a=this;r["a"].getmycat(t).then((function(t){a.mycats=t.data})).catch((function(t){console.error(t)}))},getcats:function(){var t=this;r["a"].getallcat().then((function(a){t.propcats=a.data})).catch((function(t){console.error(t)}))},Setit:function(){var t={catcode:this.currentcat.catcode,catname:this.currentcat.catname};console.log(t),!this.currentcat.id&&this.currentcat.catcode&&this.currentcat.catname?(r["a"].setcat(t).then((function(t){})).catch((function(t){console.log(t)})),this.getcats()):alert("Not Permit")},newsubcat:function(){this.submitted=!1,this.currentcat={id:"",catcode:"",catname:""},this.$refs.select3.selectedIndex="-1"},delit:function(){this.currentcat.id?(r["a"].delcat(this.currentcat.id).then((function(t){})).catch((function(t){console.log(t)})),this.getcats(),alert("deleted :"+this.currentcat.id)):alert("Not Permit")},updateit:function(){var t=this,a={id:this.currentcat.id,catcode:this.currentcat.catcode,catname:this.currentcat.catname};this.rotateprop,console.log(a),r["a"].updateCat(a).then((function(a){t.getcats(),console.log(a)})).catch((function(t){console.log(t)}))}}},u=l,d=(e("b4b0"),e("2877")),m=Object(d["a"])(u,o,s,!1,null,"c85df96a",null),p=m.exports,f=(e("9962"),e("c4c6"),e("bc3a"),e("8654")),h=(new f["a"]("",""),{name:"Cats",data:function(){return{content:{}}},components:{CatTable:p}}),v=h,b=Object(d["a"])(v,c,n,!1,null,null,null);a["default"]=b.exports},b4b0:function(t,a,e){"use strict";e("2131")}}]);
//# sourceMappingURL=chunk-41a0f673.325acda0.js.map