(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f347"],{b344:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"jumbotron",staticStyle:{width:"100%"}},[a("button",{staticClass:"btn btn-success",staticStyle:{float:"left","margin-top":"20","margin-right":"20px"},attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.Getallmtime(1)}}},[t._v("Last Month")]),a("button",{staticClass:"btn btn-success",staticStyle:{float:"left","margin-top":"20","margin-right":"120px"},attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.Getallmtime(0)}}},[t._v("Current Month")]),a("button",{staticClass:"btn btn-success",staticStyle:{float:"left","margin-top":"20","margin-right":"20px"},attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.generatepdf()}}},[t._v("KPIs")]),a("button",{staticClass:"btn btn-success",staticStyle:{float:"left","margin-top":"20","margin-right":"20px"},attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.getreport1()}}},[t._v(" Failures PDF")]),a("downloadexcel",{staticClass:"btn",attrs:{header:[t.$store.state.machineName+" Effieciency Report month  "+t.lastMonth+"-"+t.y,"PEI= "+t.PEI],fetch:t.reportex,fields:t.json_fields,type:"xls"}},[a("input",{attrs:{type:"image",src:"images/excel1.png",alt:"Excel",width:"50",height:"40"}})]),a("br"),a("h2",[t._v(" Effieciency Report "+t._s(t.lastMonth)+"-"+t._s(t.y)+" ")]),a("div",[a("div",{staticClass:"col-sm-1"}),a("div",{staticClass:"col-sm-1"}),a("span",[t._v(" PEI : "+t._s(t._f("formatNumber")(100*t.PEI))+" %")]),a("div",{staticClass:"jumbotron",staticStyle:{width:"100%"}},[a("table",{staticClass:"table",attrs:{name:"tbl1",id:"tbl1"}},[t._m(1),a("td",[t._v(" "+t._s(t._f("formatNumber")(t.RCLTOTAL))+" BBL")]),a("td",[t._v(" "+t._s(t._f("formatNumber")(t.PCL))+" BBL")]),a("td",[t._v(" "+t._s(t._f("formatNumber")(t.PEI))+" ")]),a("td",[t._v(" "+t._s(t._f("formatNumber")(t.qf))+" BBL ")]),a("td",[t._v(" "+t._s(t._f("formatNumber")(t.PPD||0))+" BBL")]),a("td",[t._v(" "+t._s(t._f("formatNumber")(t.max))+" BBL")]),a("td",[t._v(" "+t._s(t._f("formatNumber")(t.available))+" BBL")]),a("td",[t._v(" "+t._s(t._f("formatNumber")(t.CLOSED*t.BBL))+" BBL")]),a("td",[t._v(" "+t._s(t.BBL||0)+" BBL/hr")]),a("td",[t._v(" "+t._s(t.LTC1+t.LTC2||0)+" BBL")]),a("td",[t._v(" "+t._s(t.CHOcount||0)+" ")])])]),a("div",{staticClass:"jumbotron",staticStyle:{width:"100%"}},[a("table",{staticClass:"table"},[t._m(2),a("td",[t._v(" "+t._s(t._f("formatNumber")(t.MR))+" hrs")]),a("td",[t._v(" "+t._s(t._f("formatNumber")(t.EF))+" hrs")]),a("td",[t._v(" "+t._s(t._f("formatNumber")(t.RCLTOTAL/t.BBL))+" hrs")]),a("td",[t._v(" "+t._s(t._f("formatNumber")(t.RCLHF))+" hrs")]),a("td",[t._v(" "+t._s(t._f("formatNumber")(t.RCLHFO))+" hrs")]),a("td",[t._v(" "+t._s(t._f("formatNumber")(t.CHO))+" hrs ")]),a("td",[t._v(" "+t._s(t._f("formatNumber")(t.PL))+" hrs ")]),a("td",[t._v(" "+t._s(t._f("formatNumber")(t.OPL))+" hrs ")]),a("td",[t._v(" "+t._s(t._f("formatNumber")(t.PCLHF))+" hrs")])])]),a("table",{staticClass:"table"},[t._m(3),a("td",[t._v(" "+t._s(t._f("formatNumber")(t.offtime))+" hr")]),a("td",[t._v(" "+t._s(t._f("formatNumber")(t.ontime))+" hrs")])])])],1)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("th",{attrs:{scope:"col"}},[t._v("RCL")]),a("th",{attrs:{scope:"col"}},[t._v("PCL")]),a("th",{attrs:{scope:"col"}},[t._v(" PEI ")]),a("th",{attrs:{scope:"col"}},[t._v(" Quality Factor ")]),a("th",{attrs:{scope:"col"}},[t._v(" Actual ")]),a("th",{attrs:{scope:"col"}},[t._v(" Max ")]),a("th",{attrs:{scope:"col"}},[t._v(" Avaiable ")]),a("th",{attrs:{scope:"col"}},[t._v(" Closed ")]),a("th",{attrs:{scope:"col"}},[t._v(" Multiplier ")]),a("th",{attrs:{scope:"col"}},[t._v(" LTC ")]),a("th",{attrs:{scope:"col"}},[t._v(" CHO Count ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("th",{attrs:{scope:"col"}},[t._v("Maintenance Reliability")]),a("th",{attrs:{scope:"col"}},[t._v("External Fctor")]),a("th",{attrs:{scope:"col"}},[t._v("RCL by Time ")]),a("th",{attrs:{scope:"col"}},[t._v("RCL Human")]),a("th",{attrs:{scope:"col"}},[t._v("Other RCL Human")]),a("th",{attrs:{scope:"col"}},[t._v(" Change Over ")]),a("th",{attrs:{scope:"col"}},[t._v(" Planned Maintenance ")]),a("th",{attrs:{scope:"col"}},[t._v(" Other Planned Events ")]),a("th",{attrs:{scope:"col"}},[t._v(" PCL Human ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("th",{attrs:{scope:"col"}},[t._v("Off Time")]),a("th",{attrs:{scope:"col"}},[t._v("On Time ")])])}],s=a("ade3"),r=a("1da1"),i=(a("96cf"),a("d81d"),a("07ac"),a("c1df")),m=a.n(i),l=a("f2d9"),c=a("8baf"),d=a("b593"),f=(a("0da4"),a("30e7")),h=a("2899"),u=a("2461"),L=(a("9962"),a("1f57")),C=a("db04"),p=(a("c4c6"),a("bc3a"),a("8654")),v=(a("869b"),new p["a"]("",""),a("6612")),_={name:"Messages",data:function(){return{json_fields:{ID:"id",Message:"payload",Date:"date",Time:"time","End Date":"fdate",End_Time:"ftime",Period:"fperiod","OP Comment":"Comment","M Comment":"mcomment",Operator:"empno",fdesc:"fdesc",Cat:"fcat"},PPDmanual:"",offtime:"",ontime:"",runtime:"",stoptime:"",ppdconverter:1,content:{},lastMonth:"",y:"",cats:{},subcats:{},failures:{},ftime:"",fsecond:"",tp1:"",tp2:"",tp3:"",MR:"",PCL:"",RCLTOTAL:"",PEI:"",RCL:"",PL:"",EF:"",RCLHF:"",CHO:"",OPL:"",PCLHF:"",HF3:"",PPD:"",BBL:"",PCLHF1:"",PCLHF2:"",RCLHF1:"",RCLHF2:"",RCLHF3:"",available:"",max:"",RCLHFO:"",CLOSED:"",qf:"",LTC1:"",LTC2:"",CHOcount:""}},components:{MessagesTable:h["a"],MessagesDrop:u["a"],TabMenue:f["a"],downloadexcel:l["a"]},created:function(){this.GetBBL(this.$store.state.vardeleyMuliplier),this.GetPPD(this.$store.state.vardelayCarton),this.Getit(0),this.Getallmtime(0)},mounted:function(){this.GetBBL(this.$store.state.vardeleyMuliplier),this.GetPPD(this.$store.state.vardelayCarton),this.Getit(0),this.Getallmtime(0)},computed:{BBL2:function(){},report11:function(){var t=[],e=this.content.map((function(t){return{id:t.id,payload:t.payload,date:m()(String(t.date)).format("DD-MM-YYYY"),time:m()(String(t.date)).format("hh:mm:ss"),fdate:m()(String(t.ftime)).format("DD-MM-YYYY"),ftime:m()(String(t.ftime)).format("hh:mm:ss"),fperiod:t.fperiod,Comment:t.Comment,mcomment:t.mcomment,empno:t.empno,fcode:t.fcode,fcatcode:t.fcatcode}}));return t=e.map((function(t){return Object.values(t)})),t}},methods:{reportex:function(){var t=this.content.map((function(t){return{id:t.id,payload:t.payload,date:m()(String(t.date)).format("DD-MM-YYYY"),time:m()(String(t.date)).format("HH:mm:ss"),fdate:m()(String(t.ftime)).format("DD-MM-YYYY"),ftime:m()(String(t.ftime)).format("HH:mm:ss"),fperiod:t.fperiod,Comment:t.Comment,mcomment:t.mcomment,empno:t.empno,fdesc:t.fdesc,fcat:t.fcatcode}}));return t},fetchData:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=[{colA:"Hello",colB:"World"},{colA:"Multi-line",colB:"This is a long paragraph\nwith multiple lines\nthat should show in a single cell."},{colA:"Another",colB:"Regular cell"}],t.abrupt("return",e);case 2:case"end":return t.stop()}}),t)})))()},startDownload:function(){alert("Export failure to Excel sheet")},finishDownload:function(){alert("Exporting Is Finished")},Getit:function(t){var e=this;L["a"].getManagerMessages(t).then((function(t){e.content=t.data,console.log(e.content)})).catch((function(t){console.error(t)}))},GetBBL:function(t){var e=this;C["a"].getmaintmode(t).then((function(t){e.BBL=t.data[0].maintmode,console.log(e.maintmode)})).catch((function(t){console.error(t)}))},GetPPD:function(t){var e=this;C["a"].getmaintmode(t).then((function(t){e.ppdconverter=t.data[0].maintmode,console.log(e.maintmode)})).catch((function(t){console.error(t)}))},getreport1:function(){JSON.stringify(this.content);var t=new c["default"];t.addFileToVFS("Amiri-Regular.ttf",d["a"]),t.addFont("Amiri-Regular.ttf","custom","normal"),t.setFont("custom"),t.autoTable({doc:"#my-table"}),t.text("Failures Report ("+this.$store.state.machineName+"): "+this.lastMonth+" / "+this.y,11,11);var e=["ID","Message","Date","Time","End Date","End Time","Period","Op Comment","Mcomment","Operator","Fault","Cat"];t.setFontSize(8),t.addFileToVFS("Amiri-Regular.ttf",d["a"]),t.addFont("Amiri-Regular.ttf","custom","normal"),t.setFont("custom"),t.autoTable(Object(s["a"])({styles:{cellPadding:.5,fontSize:8,font:"custom",fontStyle:"normal"},columns:e,body:this.report11,tableLineWidth:.5,theme:"grid",margin:{left:1,right:1},headStyles:{fontSize:8}},"styles",{cellPadding:.5,fontSize:8})),t.save("R"+this.lastMonth+"-"+this.y)},Getallmtime:function(t){var e=this;this.Getit(t);var a=new Date;a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds();a.getMonth()+1-t<=0?(this.y=a.getFullYear()-1,this.lastMonth=a.getMonth()+1-t+12):(this.y=a.getFullYear(),this.lastMonth=a.getMonth()+1-t);var o={mid:"",vid:""};o.mid=this.$store.state.midDi0,o.vid=0,o.m=t,C["a"].getmtime(o.mid,o.vid,o.m).then((function(a){e.PPDmanual=.00629*a.data[0].PPDmanual,e.offtime=a.data[0].offtime,e.ontime=a.data[0].ontime,e.runtime=a.data[0].runtime,e.stoptime=a.data[0].stoptime,e.tp1=a.data[0].tp1,e.tp2=a.data[0].tp2,e.tp3=a.data[0].tp3,e.qf=a.data[0].qf,e.PCL=a.data[0].PCL*e.BBL,e.RCL=a.data[0].RCL*e.BBL+e.qf,e.HF3=e.tp3,e.EF=a.data[0].EF,e.CHO=a.data[0].CHO,e.PL=a.data[0].PL,e.OPL=a.data[0].OPL,e.CLOSED=a.data[0].CLOSED,e.PCLHF1=a.data[0].PCLHF1,e.PCLHF2=a.data[0].PCLHF2,e.PCLHF=e.PCLHF1+e.PCLHF2,e.RCLHF1=a.data[0].RCLHF1,e.RCLHF2=a.data[0].RCLHF2,e.RCLHF3=a.data[0].RCLHF3,e.PPD=(a.data[0].PPD+a.data[0].PPDmanual)*e.ppdconverter,e.CHOcount=a.data[0].CHOcount,e.LTC1=25*a.data[0].CHOcount,e.MR=a.data[0].MR+a.data[0].Jams;var o=new Date,n=o.getDate()-1,s=o.getHours(),r=o.getMinutes(),i=C["a"].getDaysInMonth(o.getMonth(),o.getFullYear());if(0==t)var m=(24*n+s+r/60)*e.BBL;if(1==t)m=24*i*e.BBL;var l=e.RCL+e.RCLHF*e.BBL;e.available=m-e.CLOSED*e.BBL,e.max=m;e.available,e.PCL,e.PPD;var c=e.LTC1+e.LTC2;e.RCLTOTAL=e.max-e.CLOSED*e.BBL-e.PPD-e.PCL-c,e.RCLHF=(e.RCLTOTAL-e.MR*e.BBL-e.EF*e.BBL-e.qf)/e.BBL,e.RCLHFO=e.RCLHF1+e.RCLHF2+e.RCLHF3,e.PEI=e.PPD/(e.PPD+e.RCLTOTAL)}))},generatepdf:function(){var t=new c["default"];t.text("Performance Report ("+this.$store.state.machineName+"): "+this.lastMonth+" / "+this.y,15,15),t.autoTable({head:[["Multiplier "]],body:[[this.BBL]]}),t.autoTable({head:[["RCL","PCL","PEI","LTC","CHO Count","CHO Time"]],body:[[v(this.RCLTOTAL).format("0.00")+" BBL",v(this.PCL).format("0.00")+" BBL",v(100*this.PEI).format("0.00")+" %",v(this.LTC1+this.LTC2).format("0.00")+" BBL",this.CHOcount,v(this.CHO).format("0.00")+" hr"]]}),t.autoTable({head:[["Quality-Factor","Max","Closed","Actual","Available"]],body:[[v(this.qf).format("0.00")+" BBL",v(this.max).format("0.00")+" BBL",v(this.CLOSED*this.BBL).format("0.00")+" BBL",v(this.PPD).format("0.00")+" BBL",v(this.available).format("0.00")]]}),t.autoTable({head:[["Maintenance Reliability","External Factor","RCL by time","RCL Human","Other RCL Human"]],body:[[v(this.MR).format("0.00")+" BBL",v(this.EF).format("0.00")+" BBL",v(this.RCL/this.BBL).format("0.00")+" hr",v(this.RCLHF).format("0.00")+" hr",v(this.RCLHFO).format("0.00")+" hr"]]}),t.autoTable({head:[["Planned Maintenance","Other Planned Events","PCL Human"]],body:[[v(this.PL).format("0.00")+" BBL",v(this.OPL).format("0.00")+" BBL",v(this.PCLHF).format("0.00")+" hr"]]}),t.autoTable({head:[["Manual Entry","Actual + Manual","rejected","Off Time","On Time"]],body:[[v(this.PPDmanual).format("0.00")+" BBL",v(this.PPD+this.PPDmanual).format("0.00")+" BBL",v(this.PPD-this.PPDmanual).format("0.00")+" BBL",v(this.offtime).format("0.00")+" hr",v(this.ontime).format("0.00")+" hr"]]}),t.save("PR"+this.lastMonth+"-"+this.y)},gen2:function(){var t=new c["default"],e=["id","name"],a=e.map((function(t){return{name:t,prompt:t,width:50,align:"center",padding:0}})),o=[{id:"ww",name:"Peter"},{id:"ff",name:"Chris"}];t.table(20,30,o,a),t.save("pdf.pdf")},Getallftime:function(){var t=this,e={mid:"",vid:""};e.mid=this.$store.state.midDi0,e.vid=1,L["a"].getftime(e.mid,e.vid).then((function(e){t.ftime=e.data[0].ftime,t.fsecond=e.data[0].fsecond})).catch((function(t){console.error(t)}))}}},P=_,b=a("2877"),B=Object(b["a"])(P,o,n,!1,null,null,null);e["default"]=B.exports}}]);
//# sourceMappingURL=chunk-2d20f347.6dcae139.js.map