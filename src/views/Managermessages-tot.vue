<template>

 <!-- style="margin-left:-250px;padding-left:120px;" -->
  <div >
    <header >
       <br>
  </header>
<div style="width:100%"  class="jumbotron" >   
  
<button style="float: left;margin-top:20; margin-right:20px" type="button" class="btn btn-success" @click.prevent= "Getallmtime(1)">Last Month</button>
<button style="float: left;margin-top:20; margin-right:120px" type="button" class="btn btn-success" @click.prevent= "Getallmtime(0)">Current Month</button>
<!-- <button style="float: left;margin-top:20; margin-right:120px" type="button" class="btn btn-success" @click.prevent= "Getallmtime(2)">-2 Month</button>
<button style="float: left;margin-top:20; margin-right:120px" type="button" class="btn btn-success" @click.prevent= "Getallmtime(3)">-3 Month</button> -->
<button style="float: left;margin-top:20; margin-right:20px" type="button" class="btn btn-success" @click.prevent= "generatepdf()">KPIs</button>
<button style="float: left;margin-top:20; margin-right:20px" type="button" class="btn btn-success" @click.prevent= "getreport1()"> Failures PDF</button>


<downloadexcel
      class = "btn"
       :header= "[$store.state.machineName+' Effieciency Report month  '+ lastMonth+'-'+y ,'PEI= ' + PEI]"  
      :fetch   = "reportex"
      :fields = "json_fields"
      type    = "xls">
    <!-- <button  img ="images/excel1.png"  style="float: left;margin-top:20; margin-right:20px" type="button" class="btn btn-success"> Excel</button> -->
    <!-- <h3> Export Excel</h3> -->
   <input type="image" src="images/excel1.png" alt="Excel" width="50" height="40"> 
       <!-- <button img src="excel1.png" >Download Excel </button> -->
    </downloadexcel>

      <br>

      <h2 > Effieciency Report {{lastMonth}}-{{y}}  </h2>
        


      <div>

        <div class="col-sm-1">
                 <!-- <button style="float: left;margin-top:20; margin-right:20px" type="button" class="btn btn-success" @click.prevent= "generatepdf()">Generate PDF</button>
                 <button style="float: left;margin-top:20; margin-right:20px" type="button" class="btn btn-success" @click.prevent= "getreport1()">Monthly Failures PDF</button> -->
    </div>

      <div class="col-sm-1">

    </div>

 <!-- <button style="float: left;margin-top:20; margin-right:20px" type="button" class="btn btn-success" @click.prevent= "Getallmtime(1)">Last Month</button>
 <button style="float: left;margin-top:20; margin-right:20px" type="button" class="btn btn-success" @click.prevent= "Getallmtime(0)">Current Month</button> -->
 <span> PEI :  {{PEI*100 | formatNumber}}  %</span>
     <div style="width: 900px;width:100%"  class="jumbotron" >
  <table name='tbl1' id='tbl1' class="table">
    <thead class="thead-dark" >
      <th scope="col">RCL</th>
      <th scope="col">PCL</th>
       <th scope="col"> PEI </th>
      <th scope="col"> Quality Factor </th>
      <th scope="col"> Actual </th>
       <th scope="col"> Max </th>
       <th scope="col"> Avaiable </th>
      <th scope="col"> Closed </th>
      <th scope="col"> Multiplier </th>
       <th scope="col"> LTC </th>
     <th scope="col"> CHO Count </th>

      </thead>

  <td>  {{RCLTOTAL  | formatNumber  }} BBL</td>
  <td>  {{PCL | formatNumber}} BBL</td>
  <td>  {{PEI | formatNumber}} </td>
   <td>  {{qf | formatNumber}} BBL </td>
  <td>  {{(PPD || 0)| formatNumber}} BBL</td>
   <td>  {{max | formatNumber}} BBL</td>
  <td>  {{available | formatNumber}} BBL</td>
  <td>  {{CLOSED * BBL | formatNumber}} BBL</td>
   <td>  {{BBL || 0}} BBL/hr</td>
    <td>  {{LTC1 +LTC2 || 0}} BBL</td>
  <td>  {{CHOcount || 0}} </td>
 

    </table>
    </div>
     <div style="width: 900px;width:100%"  class="jumbotron" >
 <table  class="table">
    <thead class="thead-dark" >

      <th scope="col">Maintenance Reliability</th>
      <th scope="col">External Fctor</th>
      <th scope="col">RCL by Time </th>
      <th scope="col">RCL Human</th>
       <th scope="col">Other RCL Human</th>
      <th scope="col"> Change Over </th>
      <th scope="col"> Planned Maintenance  </th>
      <th scope="col"> Other Planned Events </th>
      <th scope="col"> PCL Human </th>

      </thead>

  <td>  {{MR | formatNumber}} hrs</td>
  <td>  {{EF | formatNumber}} hrs</td>
   <td>  {{RCLTOTAL/BBL | formatNumber}} hrs</td>
  <td>  {{RCLHF | formatNumber}} hrs</td>
  <td>  {{RCLHFO | formatNumber}} hrs</td>

  <td>  {{CHO | formatNumber}} hrs </td>
  <td>  {{PL | formatNumber}} hrs </td>
  <td>  {{OPL | formatNumber}} hrs </td>
  <td>  {{PCLHF | formatNumber}} hrs</td>

    </table>
 </div>
 
 
 <table  class="table">
    <thead class="thead-dark" >

      <!-- <th scope="col">Manual Entry Production </th>
      <th scope="col">Actual+Manual Entry Production </th>
       <th scope="col">Rejected Production </th> -->
      <th scope="col">Off Time</th>
      <th scope="col">On Time </th>
      <!-- <th scope="col">Run Time</th>
       <th scope="col">Stop Time</th> -->
           </thead>

  <!-- <td>  {{PPDmanual | formatNumber}} BBL</td>
  <td>  {{(PPDmanual+PPD) | formatNumber}} BBL</td>
  <td>  {{(PPDmanual-PPD) | formatNumber}} BBL</td> -->
  <td>  {{offtime | formatNumber}} hr</td>
   <td>  {{ontime | formatNumber}} hrs</td>
  <!-- <td>  {{runtime | formatNumber}} hrs</td>
  <td>  {{stoptime | formatNumber}} hrs</td> -->

     </table>
 
       
     </div>
     
       <!-- <div style="width: 900px;width:100%"  class="jumbotron" > -->
   <!-- <MessagesTable   :ays="content"  :cats="cats" :subcats="subcats"  :failures="failures" :tp1="tp1" :tp2="tp2" :tp3="tp3" /> -->
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import downloadexcel from "vue-json-excel";
import JsonExcel from 'vue-json-excel'
import jsPDF from 'jspdf';
//import 'jspdf-customfonts';
import {Amiri_Normal} from "../assets/fonts/Amiri-Regular-normal.js";
import 'jspdf-autotable';
import TabMenue from "@/components/TabMenue";
import MessagesTable from "@/components/MessagesTable";
import MessagesDrop from "@/components/MessagesDrop";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import ReportService from "../services/report.service";
import authHeader from "../services/auth-header";
import axios from "axios";
import User from "../models/user";

import { BBL } from "../services/variables.js"
let user = new User("", "");

var numeral = require("numeral");

export default {
  name: "Messages",

  data() {
    return {
        json_fields: {
          'ID': 'id',
          'Message': 'payload',
          'Date': 'date',
         'Time': 'time',
          'End Date':'fdate',
         'End_Time' :  'ftime',
          'Period': 'fperiod',
          'OP Comment': 'Comment',
          'M Comment' :'mcomment',
          'Operator': 'empno',
          'fdesc': 'fdesc',
          'Cat':'fcat',
         
      },  
      PPDmanual:'',
      offtime:'',
      ontime:'',
      runtime:'',
      stoptime:'',

      ppdconverter:1,
      content: {},
      lastMonth:'',
      y:'',
      cats:{},
      subcats:{},
      failures:{},
      ftime:'',
      fsecond:'',
      tp1:'',
      tp2:'',
      tp3:'',
      MR:'',
      PCL:'',
      RCLTOTAL:'',
      PEI:'',
      RCL:'',
      PL:'',
      EF:'',
      RCLHF:'',
      CHO:'',
      OPL:'',
      PCLHF:'',
      HF3:'',
      PPD:'',
      BBL:'',
      PCLHF1:'',
      PCLHF2:'',
      RCLHF1:'',
      RCLHF2:'',
      RCLHF3:'',
      available:'',
      max:'',
      RCLHFO:'',
      CLOSED:'',
      qf:'',
      LTC1:'',
      LTC2:'',
      CHOcount:'',
    };
  },
   components:{
  MessagesTable,MessagesDrop,TabMenue, downloadexcel
  },
  created(){
  this.GetBBL(this.$store.state.vardeleyMuliplier);
  this.GetPPD(this.$store.state.vardelayCarton);
  this.Getit(0);
  this.Getallmtime(0);
  },
   mounted () {
  this.GetBBL(this.$store.state.vardeleyMuliplier);
    //vardelayCarton:11,   /// 11:4l   22:1l   ///the two machines is 1 
  this.GetPPD(this.$store.state.vardelayCarton);
  this.Getit(0);
  this.Getallmtime(0);
   }, 
computed:{
BBL2(){
} , 
report11 () {
  var answer=[];
   const ff=  this.content.map(function(hobby) {
    return {
        id: hobby.id,
        payload: hobby.payload,
         date: moment(String(hobby.date)).format('DD-MM-YYYY'),
        time:moment(String(hobby.date)).format('hh:mm:ss'),
        fdate:moment(String(hobby.ftime)).format('DD-MM-YYYY'),
        ftime:moment(String(hobby.ftime)).format('hh:mm:ss'),
        fperiod: hobby.fperiod,
        Comment: hobby.Comment,
        mcomment:hobby.mcomment,
        empno: hobby.empno,
        fcode:hobby.fcode,
        fcatcode:hobby.fcatcode,
           }
        });
   answer=ff.map(el=>Object.values(el));
   return  answer
  },
},
  methods:{
    reportex () {
   const gg=  this.content.map(function(hobby) {
    return {
         id: hobby.id,
        payload: hobby.payload,
        date: moment(String(hobby.date)).format('DD-MM-YYYY'),
        time:moment(String(hobby.date)).format('HH:mm:ss'),
        fdate:moment(String(hobby.ftime)).format('DD-MM-YYYY'),
        ftime:moment(String(hobby.ftime)).format('HH:mm:ss'),
        fperiod: hobby.fperiod,
        Comment: hobby.Comment,
        mcomment:hobby.mcomment,
        empno: hobby.empno,
        fdesc:hobby.fdesc,
        fcat :hobby.fcatcode,
       
           }
        });
   return  gg
  },
    async fetchData(){
      // const response = await axios.get('https://holidayapi.com/v1/holidays?key=a4b2083b-1577-4acd-9408-6e529996b129&country=US&year=2017&month=09');
      // console.log(response);
      var dd=[
        { colA: "Hello", colB: "World" },
        {
          colA: "Multi-line",
          /* Multi-line value: */
          colB:
            "This is a long paragraph\nwith multiple lines\nthat should show in a single cell."
        },
        { colA: "Another", colB: "Regular cell" }
      ]
      return dd;
    },
startDownload(){
        alert('Export failure to Excel sheet');
    },
finishDownload(){
        alert('Exporting Is Finished');
    }  ,
Getit(m){

    UserService.getManagerMessages(m).then(res => {
    this.content = res.data;
    console.log(this.content);
           })
      .catch(error => {
        console.error(error);
      });
 },
GetBBL(mid){
    ReportService.getmaintmode(mid).then(res => {
    this.BBL = res.data[0].maintmode
    console.log(this.maintmode);
           })
      .catch(error => {
        console.error(error);
      });
     },
GetPPD(mid){
    ReportService.getmaintmode(mid).then(res => {
    this.ppdconverter = res.data[0].maintmode
    console.log(this.maintmode);
           })
      .catch(error => {
        console.error(error);
      });
     },
 getreport1(){

let jsObject = JSON.stringify(this.content);
var doc = new jsPDF();
doc.addFileToVFS('Amiri-Regular.ttf',Amiri_Normal);
doc.addFont('Amiri-Regular.ttf', 'custom', 'normal');
doc.setFont('custom');

doc.autoTable({doc:'#my-table'});

doc.text('Failures Report ('+this.$store.state.machineName+'): '+ this.lastMonth +' / ' + this.y,11,11) ;
var columns = ['ID','Message','Date','Time','End Date','End Time','Period','Op Comment','Mcomment','Operator','Fault','Cat'];
  doc.setFontSize(8);
doc.addFileToVFS('Amiri-Regular.ttf',Amiri_Normal);
doc.addFont('Amiri-Regular.ttf', 'custom', 'normal');
doc.setFont('custom');
  doc.autoTable({ 
  
   styles: {cellPadding: 0.5, fontSize: 8,font:'custom',fontStyle: 'normal',} ,
    columns,
    body:this.report11 ,
    tableLineWidth:.5
    ,theme:'grid'
    , margin: {left: 1,right:1}
    ,headStyles: {fontSize: 8}
    , styles: {cellPadding: 0.5, fontSize: 8} 
      });

//doc.setFontSize(12);   
doc.save('R'+ this.lastMonth +'-' + this.y)
 },

 Getallmtime(m){
 this.Getit(m);
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
if ((today.getMonth()+1-m) <= 0){
this.y=today.getFullYear()-1;
this.lastMonth=today.getMonth()+1-m+12;
}
else {
this.y=today.getFullYear();
this.lastMonth=today.getMonth()+1-m;
}






    var d1={mid:'',vid:''};
    d1.mid=this.$store.state.midDi0;
    d1.vid=0;
    d1.m=m
    ReportService.getmtime(d1.mid,d1.vid,d1.m).then(res => {
      this.PPDmanual=res.data[0].PPDmanual * 0.00629;
      this.offtime=res.data[0].offtime;
      this.ontime=res.data[0].ontime;
      this.runtime=res.data[0].runtime;
      this.stoptime=res.data[0].stoptime;
    this.tp1 = res.data[0].tp1   ///msecond/3600;
    this.tp2 = res.data[0].tp2   ///msecond/3600;
    this.tp3= res.data[0].tp3
     this.qf=res.data[0].qf;
    this.PCL=res.data[0].PCL *this.BBL  //fperiod fcatcode=PL
    this.RCL=(res.data[0].RCL * this.BBL )+ this.qf;
    this.HF3=this.tp3
    //this.BBL=this.g1;
    this.EF=res.data[0].EF   //fperiod when fsubcat=EF
    this.CHO=res.data[0].CHO //fperiod ..fsubcat=CHO
    this.PL=res.data[0].PL   // fperiod fsubcat=PL
    this.OPL=res.data[0].OPL // fperiod  fsubcaat=OPL
    this.CLOSED=res.data[0].CLOSED; // fperiod   fcatcode=CLOSED
    this.PCLHF1=res.data[0].PCLHF1  //'tp1 fcateode=PL'
    this.PCLHF2=res.data[0].PCLHF2  //'tp3 fcatcode=PL'
     this.PCLHF= this.PCLHF1+ this.PCLHF2;
    this.RCLHF1=res.data[0].RCLHF1  //'tp1 fcatcode=REG'
    this.RCLHF2=res.data[0].RCLHF2  //'tp3 fcatcode=REG' 
    this.RCLHF3=res.data[0].RCLHF3  //tp2 fcatcode=REG' when rejected   ...mreject=1
    this.PPD=(res.data[0].PPD+res.data[0].PPDmanual)*this.ppdconverter; 
    this.CHOcount= res.data[0].CHOcount;
    this.LTC1= res.data[0].CHOcount * 25;  //no of cho in the month * 25BBL for 4/5L machine

    
    this.MR=res.data[0].MR +res.data[0].Jams////////////- res.data[0].RCLHF3  ;........tp2 when reject=1 (maint mode ok)
    //this.RCLHF=this.RCLHF1 + this.RCLHF2 +this.RCLHF3 ; //+this.PCLHF1 + this.PCLHF2;..




  var today = new Date();
  var todaydate=today.getDate()-1;
  var todayH=today.getHours();
  var todayM=today.getMinutes();

  var daysinlastmonth=ReportService.getDaysInMonth(today.getMonth(),today.getFullYear());
if (m==0){
var max=((todaydate *24) +(todayH) + (todayM/60) )  *this.BBL;
}
if (m==1){

var max=daysinlastmonth *24*this.BBL;
}

var RCLX=this.RCL+(this.RCLHF)*this.BBL; //sum of RCL from api and caloculated RCLHF before available calc.
this.available= max- this.CLOSED*this.BBL;
this.max=max;
var RCL2 = this.available-RCLX-(this.PCL)-this.PPD;
 //this.RCLTOTAL=RCLX+RCL2;
var LTC=this.LTC1+this.LTC2;
this.RCLTOTAL=this.max-this.CLOSED*this.BBL-this.PPD-this.PCL-LTC;
this.RCLHF= (this.RCLTOTAL-this.MR*this.BBL-this.EF*this.BBL-this.qf)/this.BBL;
//this.RCLHFO=RCL2/this.BBL;
this.RCLHFO=this.RCLHF1+this.RCLHF2+this.RCLHF3;

this.PEI= this.PPD/(this.PPD+(this.RCLTOTAL));
//RCLV=RCLTOTAL
      });
     },
     //
generatepdf(){
const doc = new jsPDF()
doc.text('Performance Report ('+this.$store.state.machineName+'): '+ this.lastMonth +' / ' + this.y,15,15) ;
doc.autoTable({
  head: [['Multiplier ']],
  body: [
    [(this.BBL ) ],
  ],
})

doc.autoTable({
  head: [['RCL', 'PCL', 'PEI','LTC','CHO Count','CHO Time']],
  body: [
    [numeral(this.RCLTOTAL).format("0.00") +' BBL', numeral(this.PCL ).format("0.00")+' BBL', (numeral(this.PEI *100 ).format("0.00")) +' %',numeral(this.LTC1+this.LTC2 ).format("0.00")+' BBL',this.CHOcount,numeral(this.CHO).format("0.00")+' hr'],
  ],
})
 //
doc.autoTable({
  head: [['Quality-Factor', 'Max', 'Closed','Actual','Available']],
  body: [
    [numeral(this.qf ).format("0.00")+' BBL', numeral(this.max ).format("0.00") +' BBL', numeral(this.CLOSED * this.BBL ).format("0.00")+' BBL',numeral(this.PPD).format("0.00")+' BBL',numeral(this.available  ).format("0.00")],
  ],
})
doc.autoTable({
  head: [['Maintenance Reliability', 'External Factor', 'RCL by time','RCL Human','Other RCL Human']],
  body: [
    [numeral(this.MR ).format("0.00")+' BBL', numeral(this.EF ).format("0.00") +' BBL', numeral(this.RCL / this.BBL ).format("0.00")+' hr',numeral(this.RCLHF).format("0.00")+' hr',numeral(this.RCLHFO).format("0.00")+' hr'],
    
  ],
})
//
doc.autoTable({
  head: [['Planned Maintenance', 'Other Planned Events', 'PCL Human']],
  body: [
    [(numeral(this.PL).format("0.00") )+' BBL', numeral(this.OPL  ).format("0.00") +' BBL', numeral(this.PCLHF ).format("0.00")+' hr'],
   
  ],
})
doc.autoTable({
  head: [['Manual Entry', 'Actual + Manual', 'rejected','Off Time','On Time']],
  body: [
    [(numeral(this.PPDmanual).format("0.00") )+' BBL', numeral(this.PPD +this.PPDmanual).format("0.00") +' BBL', numeral(this.PPD-this.PPDmanual ).format("0.00")+' BBL',numeral(this.offtime).format("0.00")+' hr',numeral(this.ontime).format("0.00")+' hr'],
   
  ],
})
doc.save('PR'+ this.lastMonth +'-' + this.y)
},
gen2(){
  const pdf = new jsPDF();
      let header = ["id","name"];
      let headerConfig = header.map(key=>({ 'name': key,
      'prompt': key,
      'width':50,
      'align':'center',
      'padding':0}));
     let data = [{id: 'ww', name: "Peter"},{id: 'ff', name: "Chris"}];
     // let data=this.content;
      pdf.table(20, 30, data, headerConfig);
      pdf.save("pdf.pdf");
},
     //
     Getallftime(){
    var d1={mid:'',vid:''};
    d1.mid=this.$store.state.midDi0;
    d1.vid=1;
    UserService.getftime(d1.mid,d1.vid).then(res => {
    this.ftime = res.data[0].ftime;
    this.fsecond = res.data[0].fsecond;
           })
      .catch(error => {
        console.error(error);
      });
     },
/////
     },
      };







</script>
