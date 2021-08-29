<template>


 <div clas="messagetable">






    <div class="col-sm-10">
       
  <button style="margin-right:15px; margin-bottom:15px;" type="button" class="btn btn-danger" @click.prevent= "unlockit">Unlock 4L Machine
</button>
<button style="margin-right:50px;margin-bottom:15px; " type="button" class="btn btn-warning" @click.prevent= "lockit">Lock 4L Machine
</button>
      </div>



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
      <input name="infcode"  id="infcode"   style="width:400px;" type="text" class="form-control" v-model="currentmessage.fcode" readonly  >
    </div>
    </div>

 </div>

    <label for="text" class="col-sm-2 col-form-label" >Comment    :</label>
     <div class="col-sm-11">
      <input type="text" class="form-control" v-model="currentmessage.comment"  >
    </div>
    <br>
  
       <!-- <button  type="button" class="btn btn-success" @click.prevent= "updateit">Save</button> -->
<button style="margin-right:15px; margin-bottom:15px;" type="button" class="btn btn-success" @click.prevent= "updateit">Confirm and Finish
</button>
<button style="float: right;margin-bottom:20px; margin-right:20px" type="button" class="btn btn-warning" @click.prevent= "updatereject">Rejected Work Order
</button>
 <!-- <button @click="pingServer()">Ping Server</button> -->

   <div>

   <table  class="table">
    <thead class="thead-dark" >
      <th scope="col">id</th>
      <th scope="col">Message</th>
      <th scope="col">Date</th>
      <th scope="col">Fcode</th>
      <th scope="col">Comment</th>

</thead>
<tr v-for ="message in propmessages" v-bind:key ="message.id"  @click="selectRow(message.id,message.fcode,message.mcomment)" :class="{'highlight': (message.id == currentmessage.id )}" >
<td>
    {{message.id}}
    </td>
    <td>
    <!-- {{message.payload}} -->
     Machine Stop
    </td>
    <td>
    {{message.date | formatDate}}
    </td>
    <td>
    {{message.fdesc}}
    </td>
    <td>
    {{message.mcomment}}
    </td>
</tr>
</table>


   </div>
 </div>

</template>

<script>
import ReportService from "../services/report.service";
import UserService from '../services/user.service';
import { maintmode } from '../services/variables';
var m2=maintmode;
 var audioFile = new Audio('images/11.wav');
 var ack =0;
export default {
  name: 'OpmessageTable',
  props:["ays","user","cats","subcats","failures"] ,

  data(){
  return {
  messages:[],
  currentmessage:{id:'',fcode:'',comment:'',mreject:''},
  maintmode:'',
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
   ay1:'',
   ay2:'',
   ay3:'',
   timer:'',
  // SocketInstance=socketio('http://192.168.1.8:3000'),
   }
   },

    mounted (){
  this.rotateprop;
  this.Getmessages();
  //this.startInterval();
   this.timer = setInterval(this.Getmessages, 36000)
    },
    beforDestroyed(){
clearInterval(this.timer);

},
  computed:{
   rotateprop:function(){
     this.propmessages=this.ays;
    return this.propmessages;
   },
//    selectme(){
//    if (this.propmessages.length==0){
//      alert('ddd');
//    this.resetme();
// }
//    }

  },
    // sockets: {
    // connect() {
    //   // Fired when the socket connects.
    //   this.isConnected = true;
    // },

    // disconnect() {
    //   this.isConnected = false;
    // },

    // Fired when the server sends something on the "messageChannel" channel.
  //   messageChannel(data) {
  //     this.socketMessage = data
  //   }
  // },
   methods:{
      Getit(){
    UserService.getMessages().then(res => {
    this.content = res.data;
           })
      .catch(error => {
        this.$router.go(0);
        console.error(error);
      });
      },

       changefcode(code){
      this.currentmessage.fcode=code;
      },
      resetme(){
    this.currentmessage.id='';
      },
   

      loadsubcat(id){
     UserService.getmysubcat(id).then(result => {
     this.mysubcats = result.data;
    //  this.subcats=this.mysubcats;
           })
      .catch(error => {
        console.error(error);
      });
 },
loadfailure(id){
     UserService.getmyfailure(id).then(result => {
     this.myfailures = result.data;
    //  this.subcats=this.mysubcats;
           })
      .catch(error => {
        console.error(error);
      });
 },
//

//
Getmessages(){
   UserService.getmMessages().then(result => {
     this.rotateprop;
     var audioboolean=0;
     this.propmessages = result.data;
     if (this.propmessages.length & audioboolean==0 ){
       this.maintmode=m2;
       audioboolean=1;
      //  audioFile.muted='true';
      //  audioFile.autoplay='true';
       audioFile.play();
     }
           })
      .catch(error => {
        console.error(error );
      });
 },

lockmachine(){
  var d1={mid:'',val:''};
 d1.mid=this.$store.state.midDo0;
 d1.val='true';
    ReportService.sendonoff(d1)
     .then(resp => {
    console.log('send off ok');
           })
      .catch(error => {
        console.log(error);
      });
      //

},
unlockmachine(){
var d1={mid:'',val:''};
 d1.mid=this.$store.state.midDo0;
 d1.val='false';
    ReportService.sendonoff(d1)
     .then(resp => {
    console.log('send on ok');
           })
      .catch(error => {
        console.log(error);
      });
      //
},

lockit(){
 if (this.propmessages.length){
    this.lockmachine() ;
   }
},
unlockit(){
 if (this.propmessages.length){
    this.unlockmachine() ;
   }
},
//
updateit(){
  if  (!this.propmessages.length   ) {
   return;
       }
  if  (!this.currentmessage.id   ) {
   alert('يجب اختيار الرسالة من اسفل');
   return;
       }
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
  var data={
    id:this.currentmessage.id,
    mtime:dateTime,
    mcomment:this.currentmessage.comment,
    mreject:'2',
 };
console.log(data);
     UserService.mupdateMessages(data).then(res => {
     this.Getmessages();
     this.lockmachine();
    
       console.log(res);
           })
      .catch(error => {
        console.log(error);
      });
      //

      this.Getmessages();
 },
//
updatereject(){
    if  (!this.propmessages.length   ) {
   return;
       }
  if  (!this.currentmessage.id   ) {
   alert('يجب اختيار الرسالة من اسفل');
   return;
       }
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
  var data={
    id:this.currentmessage.id,
    mtime:dateTime,
    mcomment:this.currentmessage.comment,
    mreject:'1',
 };
console.log(data);
 if(confirm(' Are you sure to reject this work order id : '   +  data.id   ) ){
     UserService.mupdateMessages(data).then(res => {
       this.Getmessages();
    
       this.lockmachine();
       console.log(res);
           })
      .catch(error => {
        console.log(error);
      });

      this.Getmessages();
       }
 },


//
  selectRow(id,fcode,comment){
   // console.log("ff" + this.selectedsite);
  this.currentmessage.id = id;
  this.currentmessage.fcode=fcode;
   this.currentmessage.comment=comment;


    },
   }

}
</script>

<style scoped>
.highlight {
     background-color: Tomato;
}
tr:hover{
     cursor: pointer;
}

</style>
