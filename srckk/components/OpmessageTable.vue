<template>


 <div clas="messagetable">



<!-- <hr> -->
 <div >

<img  style="margin-top: -60px;margin-left: 0px;" v-if="propmessages.length > 0 & maintmode==0" src="images/unlock-icon-s8.png" alt="Lock" width="50" height="60"  > 
<img  style="margin-top: -60px;margin-left: 0px;"  v-else-if="propmessages.length ==0 " src="images/unlock-icon-8.png" alt="UNLock" width="50" height="60"  > 

 </div>


<!-- <div >

  <h3 v-if="propmessages.length > 0 & maintmode==0 "  style="margin-left:100; margin-bottom:5px; color:white; background:red;" >                LOCK                     </h3>
  <h3 v-else-if="propmessages.length == 0" style="margin-left:100; margin-bottom:5px; color:white; background:green;" >                UNLOCK                     </h3>

</div> -->

   


 <div class="col-sm-10">
   

         <!-- <label for ='l1' class="col-sm-3 col-form-label"   >Main  category:</label> -->
         
      <ul id="l1" ref="l1" >
       <li  type="button" style=" left;margin-bottom:20px; margin-right:20px" class="btn btn-success"   v-for ="cat in cats" v-bind:key ="cat.catcode" :value="cat.catcode"   @click="loadsubcat(cat.catcode)"  >  {{cat.catname}}   </li>
       <!-- <li type="button" style=" left;margin-bottom:20px; margin-left:250px" class="btn btn-success" v-if="propmessages.length > 0"> Stop </li> -->
      </ul>
      </div>

<hr >
 <div class="col-sm-10">
         <!-- <label for ='l1' class="col-sm-3 col-form-label"   >Sub  category:</label> -->
      <ul id="l2" ref="l2" >
       <li  type="button" style=" left;margin-bottom:20px; margin-right:20px" class="btn btn-primary" v-for ="subcat in mysubcats" v-bind:key ="subcat.subcatcode"    @click="loadfailure(subcat.subcatcode)"  >  {{subcat.subcatname}}   </li>
      </ul>
      </div>
<hr >

 <div class="col-sm-10">
         <!-- <label for ='l1' class="col-sm-3 col-form-label"   >Failure :</label> -->
      <ul id="l3" ref="l3" >
       <li  type="button" style=" left;margin-bottom:20px; margin-right:20px" class="btn btn-warning" v-for ="failure in myfailures" v-bind:key ="failure.failurecode"     @click="changefcode(failure.failurecode,failure.failurename)" >  {{failure.failurename}}   </li>
      </ul>
      </div>
<hr>

 <div class="row">
    <div class="col-sm">
      <label for="id" class="col-sm-2 col-form-label" >ID   :</label>
    <div class="col-sm-1">
    <input style="width:400px" type="text" class="form-control" name ="id" ref="id" v-model="currentmessage.id"  readonly >
    </div>
    </div>

    <div class="col-sm">
     <label for="text" class="col-sm-5 col-form-label" >Failure Code    :</label>
     <div class="col-sm-1">
      <input v-if=(currentmessage.fcode)  name="infcode"  id="infcode" ref='refid' style= "width:400px; background:red;" type="text" class="form-control"  v-model="currentmessage.fcode" readonly  >
    </div>
    </div>

 </div>

    <label for="text" class="col-sm-2 col-form-label" >Comment    :</label>
     <div class="col-sm-11">
      <input type="text" class="form-control" v-model="currentmessage.comment"  >
    </div>
    <br>

<div >

  <p  v-if="maintmode > 0" style="margin-left:420px; margin-bottom:4px;" class="blink-bg"> *                 Maintenance Mode                     *</p>
  <!-- <p v-else-if="propmessages.length > 0 & maintmode == 0"  style="margin-left:420px; margin-bottom:4px; background:red;"  class="blink-run" > *                 Stop Mode                     *</p>
  <p  v-else-if ="propmessages.length == 0"  style="margin-left:420px; margin-bottom:4px; background:green;"  class="blink-run"> *                 Run Mode                     *</p> -->


</div>




       <button style="float: left;margin-bottom:20px; margin-right:20px" type="button" class="btn btn-success" @click.prevent= "updateit">Save</button>
       <button style="float: left;mif argin-bottom:20px; margin-right:20px" type="button" class="btn btn-primary" @click.prevent= "Getmessages">Refresh</button>
       <button style="float: right;margin-bottom:20px; margin-right:20px" type="button" class="btn btn-success" @click.prevent= "Finishme">Finish</button>


   <div>
 <!-- <button v-on:click="sendMessage('hellow ayman ff')"> Send Message  </button> -->
   <table  ref='table1' class="table">
    <thead class="thead-dark" >
      <th scope="col">id</th>
      <th scope="col">Message</th>
      <th scope="col">Date</th>
      <th scope="col">Fcode</th>
      <th scope="col">OP Comment</th>
      <th scope="col">Maintenance </th>
      <!-- <th scope="col">Rejected </th> -->
      <!-- <th scope="col">Maint Comment</th> -->
</thead>
<tr v-for ="message in propmessages" v-bind:key ="message.id"  @click="selectRow(message.id,message.fcode,message.Comment,message.mtime,message.fsubcat,message.fcatcode,message.mreject,message.insertdate)" :class="{'highlight': (message.id == currentmessage.id )} ||{'ay':(!currentmessage.id)}" >
<td>
    {{message.id}}
    </td>
    <td>
    <!-- {{message.payload}} -->
     Machine Stop
    </td>
    <td>
    <!-- {{message.date  | formatDateminus2h}} -->
     {{message.date | formatDate }}
    </td>
    <td>
    {{message.fcode}} .. {{message.fdesc}}
    </td>
    <td >
    {{message.Comment}}
    </td>
     <td style="color:blue" v-if="message.mreject==2">
     Finished
    </td>
    <td style="color:red" v-if="message.mreject==1">
     Rejected
    </td>
</tr>
</table>


   </div>
 </div>

</template>

<script>
import moment from 'moment';
import UserService from "../services/user.service";
import ReportService from "../services/report.service";
import User from "../models/user";
//import authHeader from '"../services/auth-header';
import authHeader from '../services/auth-header';
export default {
  name: 'OpmessageTable',
  props:["ays","user1","cats","subcats","failures"] ,

  data(){
  return {
  user: new User('', ''),
  messages:[],
  bsubcat:'',
  maintmode:'',
  currentmessage:{id:'',fcode:'',comment:'',fdesc:'',mtime:'',subcat:'',catcode:'',mreject:'',insertdate:''},
  mycat:'',
  fcode:'',
  mysubcats:'',
  content:'',
  myfailures:'',
  // selectedsite:'',
   currentIndex: -1,
   cat:'',
   mycats:'',
   propmessages:'',
   timer:'',
  connection:null,


  lastppd:'',
   ay1:'',
   ay2:'',
   ay3:'',
   }
   },
//    created:function(){
//     console.log('start conn to websocket server');
//    // this.connection=new WebSocket("wss://echo.websocket.org")
//      this.connection=new WebSocket("ws://192.168.1.8:8082")
//     this.connection.onopen=function(event){CLOSED
//   console.log(event);
//   console.log('succeffullt connected to the echo webosocket server');

// }
//  this.connection.onmessage=function(event){
//  console.log(event);
// ///this.connection.send("hey ayman");

//  }
// this.connection.addEventListener("message",({data})=>{
//   //aleret(data);
//   console.log(data);
// })
// //
// this.connection.onmessage = function(message) {

//       console.log('Socket server message', message);
//      // let data = JSON.parse(message.data);
//       //document.getElementById('response').innerHTML = JSON.stringify(data, null, 2);
//     };


// //
// this.connection.onmessage = function(message) {

//       console.log('Socket server message', message);
//       let data = JSON.parse(message.data);
//       document.getElementById('response').innerHTML = JSON.stringify(data, null, 2);
//     };
//   },
//    created:function(){
// console.log('start conn to websocket server');
// //this.connection=new WebSocket("wss://echo.websocket.org")
// this.connection=new WebSocket("http://192.168.1.8:3000");

// this.connection.onopen=function(egetlastppdted to the echo webosocket server');

// }
// this.connection.onmessage=function(event){
// console.log(event);

// }
  // },
    mounted (){
  this.getlastppd();
  this.rotateprop;
  this.Getmessages();
  this.timer = setInterval(this.getinterval, 2000)
    },

// sockets: {
//     connect() {
//       // Fired when the socket connects.
//       this.isConnected = true;
//     },

//     disconnect() {
//       this.isConnected = false;
//     },

//     // Fired when the server sends something on the "messageChannel" channel.
//     messageChannel(data) {
//       this.socketMessage = data
//     }
//   },

  computed:{
   rotateprop:function(){
     this.propmessages=this.ays;
    return this.propmessages;
   },
    currentUser() {
      return this.$store.state.auth.user;
    },

  },
   methods:{
      Getit(){
    UserService.getMessages().then(res => {
    this.content = res.data;
           })
      .catch(error => {
        console.error(error);
      });
      },

       changefcode(code,codedesc){
          this.$refs.l3.hidden=0;
       this.currentmessage.fcode=code;
       this.currentmessage.fdesc=codedesc;


      },

//
Resetme(){
this.currentmessage='';
},
Getmaintmode(mid){
    ReportService.getmaintmode(mid).then(res => {
    this.maintmode = res.data[0].maintmode
    console.log(this.maintmode);
           })
      .catch(error => {
        console.error(error);
      });
     },

      loadsubcat(id){
      if (id == 'CLOSED'){
      // alert(id);
       this.changefcode('CLOSED','Machine is closed');
          return
        }
     this.$refs.l2.hidden=0;
      this.$refs.l3.hidden=1;
     UserService.getmysubcat(id).then(result => {
     this.mysubcats = result.data;
    //  this.subcats=this.mysubcats;
           })
      .catch(error => {
        console.error(error);
      });
 },
loadfailure(id){
  this.$refs.l3.hidden=0;
  this.bsubcat=id;
     UserService.getmyfailure(id).then(result => {
     this.myfailures = result.data;
           })
      .catch(error => {
        console.log(error);
      });
 },
//
//
Getmessages(){
  var self = this;
   UserService.getMessages().then(result => {
     this.rotateprop;
     this.propmessages = result.data;
     self.watchdata=this.propmessages;
     // this.Resetme();
      this.Getmaintmode(100);
      if (this.propmessages.length){
      this.selectRow(this.propmessages[0].id,this.propmessages[0].fcode,this.propmessages[0].Comment,this.propmessages[0].mtime,this.propmessages[0].fsubcat,this.propmessages[0].fcatcode,this.propmessages[0].mreject,this.propmessages[0].insertdate)
      }
      })
      .catch(error => {
        console.error(error);
      });
 },
 createmessageRUN(){
 var new1 =  {};   ///object to represent message
    var today = new Date();  //current date
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getUTCHours() +2 +":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    // var e11= JSON.parse(message);
    // var s1=e11.s;
    new1.date=dateTime;
    new1.mid=1;
    new1.vid=1;
    new1.payload='Machine 10  Run '  ;
      UserService.createmessage(new1)
},
 Finishme(){
if  (!this.propmessages.length   ) {
   return;
       }
if(this.currentmessage.fcode=='CLOSED')  {
  this.getlastppd();
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
//var dateTime=date
var d1= moment(String(this.lastppd)).format('YYYY-MM-DD');
var d2= moment(String(dateTime)).format('YYYY-MM-DD')
if (d1 !==d2){
 
 alert(' must enter PPD !  ');
 return
}
}     
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;


   var data={
    id:this.currentmessage.id,
    ftime:dateTime,
   
    empno:this.currentUser.username,
 }
;

  if  (!this.currentmessage.id   ) {
   alert('يجب اختيار الرسالة من اسفل');
   return;
       }
   if  (!this.currentmessage.insertdate  ) {
   alert('  يجب اختيار نوع التوقف');
   //alert(this.currentmessage.insertdate);
   return;
       }
  if  (!this.currentmessage.mtime  && this.currentmessage.subcat=='MR' ) {
   alert('يجب تأكيد اصلاح العطل من الصيانة ');
   return;
       }

     if(confirm(' هل انت متاكد من انتهاء سبب التوقف '   +  data.id   +'  واستمرار العمل؟' ) ){


      UserService.updateMessagesftime(data)
     .then(resp => {
       
     this.Getmessages();
     this.$refs.l3.hidden=1;
       this.$refs.l2.hidden=1;
      this.$refs.refid.hidden=1;
           })
      .catch(error => {
        console.log(error);
      });
 var d1={mid:'',val:''};
 d1.mid=1;
 d1.val='false';

 ReportService.sendonoff(d1).then(resp => {
   
     this.createmessageRUN();
      
           })
      .catch(error => {
        console.log(error);
      })
   
      }
 
      
 },

 sendMessage:function(message){
  console.log(this.connection);
  this.connection.send(message);
},
///
getinterval(){
  
  if (!this.propmessages.length ||  this.maintmode > 0){
    

    this.Getmessages();
  }
}
,



/////////////

getlastppd(){
UserService.getlastppd().then(res=>{
 this.lastppd = res.data[0].insertdate;
   console.log(this.lastppd);
//    var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date+' '+time;
// //var dateTime=date
// var d1= moment(String(this.lastppd)).format('YYYY-MM-DD');
// var d2= moment(String(dateTime)).format('YYYY-MM-DD')
// if (d1 !==d2){
 
//  alert(' must enter PPD   '+   d1  + '     '+d2);
// }
           })
      .catch(error => {
        console.error(error);
      });
},

////
updateit(){
 
  if  (!this.propmessages.length   ) {
   return;
       }
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
  //console.log(this.$refs.select1.value);
 var selectedindex= this.$refs.l3.hidden;
 //alert(this.currentmessage.fcode);
//if (selectedindex==0){
  if (!this.currentmessage.fcode){
alert ('you must select failure code');
return;
}
// || (this.currentmessage.mreject ==1  && this.maintmode )
if (this.currentmessage.mreject ==2   ){

alert ('No permession..  ' );
return;
}
if (this.currentmessage.mreject ==1 && this.currentmessage.comment==null){
  alert ('insert comment  أدخل تعليق' );
return;
}

if (!this.currentmessage.insertdate ) {

var data={
    id:this.currentmessage.id,
    fcode:this.currentmessage.fcode,
     comment:this.currentmessage.comment,
     fdesc:this.currentmessage.fdesc,
     insertdate:dateTime,
     empno:this.currentUser.username ,
}
}
else{
var data={
    id:this.currentmessage.id,
    fcode:this.currentmessage.fcode,
     comment:this.currentmessage.comment,
     fdesc:this.currentmessage.fdesc,
     empno:this.currentUser.username ,
}
}

console.log(data);
///////////////CHO
if (this.bsubcat=='CHO'){
    alert('CHO');
 var d1={mid:'',val:''};    ///CHO PMAC 5/3/2021
 d1.mid=1;
 d1.val='false';
   
      UserService.updateMessages(data)
     .then(res => {
       console.log(res);
           })
         .catch(error => {
        console.log(error);
      });
       ReportService.sendonoff(d1)
     .then(resp => {
    console.log('send off ok');
           })
      .catch(error => {
        console.log(error);
      });
        this.Getmessages();
       this.$refs.l3.hidden=1;
       this.$refs.l2.hidden=1;
      this.$refs.refid.hidden=1;
return;
}     
  if (this.bsubcat=='MR'){
    alert('عطل صيانه');

 UserService.updateMessages(data)
     .then(res => {
       console.log(res);
           })
         .catch(error => {
        console.log(error);
      });
//  var d1={mid:'',val:''};    ///canceled code due to PMAC 5/3/2021
//  d1.mid=1;
//  d1.val='false';
//     ReportService.sendonoff(d1)
//      .then(resp => {
//     console.log('send off ok');
//            })
//       .catch(error => {
//         console.log(error);
//       });


       this.Getmessages();
       this.$refs.l3.hidden=1;
       this.$refs.l2.hidden=1;
      this.$refs.refid.hidden=1;

      return;
  }

  UserService.updateMessages(data)
     .then(res => {
       console.log(res);
           })
           .catch(error => {
        console.log(error);
      });



   this.Getmessages();
   this.$refs.l3.hidden=1;
   this.$refs.l2.hidden=1;
   this.$refs.refid.hidden=1;
 },
//
  selectRow(id,fcode,comment,mtime,subcat,catcode,mreject,insertdate){
   // console.log("ff" + this.selectedsite);
this.currentmessage.id = id;
this.currentmessage.fcode=fcode;
this.currentmessage.comment=comment;
this.currentmessage.mtime=mtime;
this.currentmessage.subcat=subcat;
this.currentmessage.catcode=catcode;
this.currentmessage.mreject=mreject;
this.currentmessage.insertdate=insertdate;
    },
   }

}
</script>

<style scoped>
.highlight {
     background-color: Tomato;
}
.ay {
     background-color: white;
}
tr:hover{
     cursor: pointer;
}

.blink-bg{
		color: rgb(6, 31, 51);
		padding: 10px;
		display: inline-block;
		border-radius: 40px;

		animation: blinkingBackground 5s infinite;
	}
	@keyframes blinkingBackground{
		0%		{ background-color: #23a77f;}
		25%		{ background-color: #d6d6c8;}
		50%		{ background-color: #ef0a1a;}
		75%		{ background-color: #d6d6c8;}
		100%	        { background-color: #d6d6c8;}
	}

.blink-run{
		color: rgb(94, 199, 45);
		padding: 10px;
		display: inline-block;
		border-radius: 40px;

		animation: blinkingBackground 20s infinite;
	}
	@keyframes blinkingBackground{
		0%		{ background-color: #23a77f;}
		25%		{ background-color: #d6d6c8;}
		50%		{ background-color: hsl(138, 92%, 49%);}
		75%		{ background-color: #d6d6c8;}
		100%	        { background-color: #d6d6c8;}
	}


</style>

