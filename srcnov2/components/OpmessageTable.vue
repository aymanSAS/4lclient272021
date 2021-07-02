<template>


 <div clas="messagetable">
<hr>
 <div class="col-sm-10">
         <label for ='l1' class="col-sm-3 col-form-label"   >Main  category:</label>
      <ul id="l1" ref="l1" >
       <li  type="button" style=" left;margin-bottom:20px; margin-right:20px" class="btn btn-success"   v-for ="cat in cats" v-bind:key ="cat.catcode" :value="cat.catcode"   @click="loadsubcat(cat.catcode)"  >  {{cat.catname}}   </li>
      </ul>
      </div>

<hr >
 <div class="col-sm-10">
         <label for ='l1' class="col-sm-3 col-form-label"   >Sub  category:</label>
      <ul id="l2" ref="l2" >
       <li  type="button" style=" left;margin-bottom:20px; margin-right:20px" class="btn btn-primary" v-for ="subcat in mysubcats" v-bind:key ="subcat.subcatcode"    @click="loadfailure(subcat.subcatcode)"  >  {{subcat.subcatname}}   </li>
      </ul>
      </div>
<hr >

 <div class="col-sm-10">
         <label for ='l1' class="col-sm-3 col-form-label"   >Failure :</label>
      <ul id="l3" ref="l3" >
       <li  type="button" style=" left;margin-bottom:20px; margin-right:20px" class="btn btn-warning" v-for ="failure in myfailures" v-bind:key ="failure.failurecode"     @click="changefcode(failure.failurecode,failure.failurename)" >  {{failure.failurename}}   </li>
      </ul>
      </div>
<hr>

 <div class="row">
    <div class="col-sm">
      <label for="id" class="col-sm-2 col-form-label" >ID   :</label>
    <div class="col-sm-1">
    <input style="width:400px" type="text" class="form-control" name ="id"  v-model="currentmessage.id"  readonly >
    </div>
    </div>

    <div class="col-sm">
     <label for="text" class="col-sm-5 col-form-label" >Failure Code    :</label>
     <div class="col-sm-1">
      <input name="infcode"  id="infcode"   style="width:400px;" type="text" class="form-control"  v-model="currentmessage.fcode" readonly  >
    </div>
    </div>

 </div>

    <label for="text" class="col-sm-2 col-form-label" >Comment    :</label>
     <div class="col-sm-11">
      <input type="text" class="form-control" v-model="currentmessage.comment"  >
    </div>
    <br>

<div v-if="maintmode > 0">
  <h3  style="margin-left:220px; margin-bottom:4px;" class="blink-bg"> Maintenance Mode </h3>
  <!-- <blink style="color:red"> Maintenance Mode </blink> -->
</div>


       <button style="float: left;margin-bottom:20px; margin-right:20px" type="button" class="btn btn-success" @click.prevent= "updateit">Save</button>
       <button style="float: left;margin-bottom:20px; margin-right:20px" type="button" class="btn btn-primary" @click.prevent= "Getmessages">Refresh</button>
       <button style="float: right;margin-bottom:20px; margin-right:20px" type="button" class="btn btn-success" @click.prevent= "Finishme">Finish</button>


   <div>
 <!-- <button v-on:click="sendMessage('hellow ayman ff')"> Send Message  </button> -->
   <table  class="table">
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
    {{message.date  | formatDate}}
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

import UserService from "../services/user.service";
import ReportService from "../services/report.service";

export default {
  name: 'OpmessageTable',
  props:["ays","user","cats","subcats","failures"] ,

  data(){
  return {
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


   ay1:'',
   ay2:'',
   ay3:'',
   }
   },
//    created:function(){
//     console.log('start conn to websocket server');
//    // this.connection=new WebSocket("wss://echo.websocket.org")
//      this.connection=new WebSocket("ws://192.168.1.8:8082")
//     this.connection.onopen=function(event){
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

// this.connection.onopen=function(event){
//   console.log(event);
//   console.log('succeffullt connected to the echo webosocket server');

// }
// this.connection.onmessage=function(event){
// console.log(event);

// }
  // },
    mounted (){
  this.rotateprop;
  this.Getmessages();
  // this.chartData;
  //this.startInterval();
   this.timer = setInterval(this.Getmessages, 5000)
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
   }

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
       this.currentmessage.fcode=code;
       this.currentmessage.fdesc=codedesc;


      },

//
//  startInterval() {

//  setInterval(UserService.getMessages(),60000);

//  },
//
Resetme(){
//this.$refs.select1.selectedIndex="1";
// this.$refs.select2.selectedIndex="-1";
//this.$refs.select3.selectedIndex="-1";
},
      loadsubcat(id){
        if (!this.currentmessage.id){
          alert ('select error from below');
          return;
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
        console.subcaterror(error);
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
      this.Resetme();
      this.Getmaintmode(100);
           })
      .catch(error => {
        console.error(error);
      });
 },

 Finishme(){
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
   var data={
    id:this.currentmessage.id,
    ftime:dateTime,
 };
 //alert(this.currentmessage.mtime);  || this.currentmessage.mtime
  if  (!this.currentmessage.id   ) {
   alert('يجب اختيار الرسالة من اسفل');
   return;
       }
   if  (!this.currentmessage.insertdate  ) {
   alert('  يجب اختيار نوع التوقف');
   //alert(this.currentmessage.insertdate);
   return;
       }
  if  (!this.currentmessage.mtime  && this.currentmessage.subcat=='subcat01' ) {
   alert('يجب تأكيد اصلاح العطل من الصيانة ');
   return;
       }

     if(confirm(' هل انت متاكد من انتهاء سبب التوقف '   +  data.id   +'  واستمرار العمل؟' ) ){


      UserService.updateMessagesftime(data)
     .then(resp => {
     this.Getmessages();
           })
      .catch(error => {
        console.log(error);
      });
 var d1={mid:'',val:''};
 d1.mid=1;
 d1.val='false';
 ReportService.sendonoff(d1)
     .then(resp => {
    console.log('send off ok');
           })
      .catch(error => {
        console.log(error);
      });
      }
 },
//   ReportService.sendonoff(d1)
//      .then(resp => {
// console.log('send off ok');
// .catch(error => {
//         console.log(error);
//       });

//
 sendMessage:function(message){
  console.log(this.connection);
  this.connection.send(message);
},
///
Getmaintmode(mid){
    // var d1={mid:'',maintmode:''};
    // d1.mid=100;
    // d1.maintmode=0;
    ReportService.getmaintmode(mid).then(res => {
    this.maintmode = res.data[0].maintmode
    console.log(this.maintmode);
           })
      .catch(error => {
        console.error(error);
      });
     },



////
updateit(){
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
if (this.currentmessage.mreject ==2){
alert ('No permession..  ' );
return;
}
// if(confirm(' هل انت متاكد من انتهاء سبب التوقف '   +  data.id   +'  واستمرار العمل؟' ) ){
 //if (this.currentmessage.mtime){
//    if ( this.currentmessage.mtime  ){
//   alert ('hhhh'+ this.currentmessage.mtime);
//   return;
// }
 //}

  var data={
    id:this.currentmessage.id,
    fcode:this.currentmessage.fcode,
     comment:this.currentmessage.comment,
     fdesc:this.currentmessage.fdesc,
     insertdate:dateTime,

 };

console.log(data);


  if (this.bsubcat=='MR'){
    alert('عطل صيانه');
 UserService.updateMessages(data)
     .then(res => {
       console.log(res);
           })

         .catch(error => {
        console.log(error);
      });
 var d1={mid:'',val:''};
 d1.mid=1;
 d1.val='false';
    ReportService.sendonoff(d1)
     .then(resp => {
    console.log('send off ok');
           })
      .catch(error => {
        console.log(error);
      });
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
		color: #fff;
		padding: 10px;
		display: inline-block;
		border-radius: 5px;
		animation: blinkingBackground 2s infinite;
	}
	@keyframes blinkingBackground{
		0%		{ background-color: #10c018;}
		25%		{ background-color: #1056c0;}
		50%		{ background-color: #ef0a1a;}
		75%		{ background-color: #254878;}
		100%	        { background-color: #04a1d5;}
	}

</style>

