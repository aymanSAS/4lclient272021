<template>


 <div clas="messagetable">






    <div class="col-sm-10">
         <!-- <label for ='select1' class="col-sm-3 col-form-label"   >Failure category:</label>
      <select    name='select1' style="width:400px;" v-model="ay1"  @change="loadsubcat(ay1.catcode)"  >
        <option value="" selected disabled hidden>Choose here</option>
       <option  v-for ="cat in cats" v-bind:key ="cat.catcode"  :value="cat">  {{cat.catname}}</option>
      </select>
      </div>
       <div class="col-sm-10">
         <label for ='select2' class="col-sm-3 col-form-label" > Failure Sub Category:</label>
      <select name='select2' style="width:400px;"  v-model="ay2" @change="loadfailure(ay2.subcatcode)"  >
       <option  v-for ="subcat in mysubcats" v-bind:key ="subcat.subcatcode"  :value="subcat"   >  {{subcat.subcatname}}</option>
      </select>
      </div>

      <div class="col-sm-10">
         <label for ='select3' class="col-sm-3 col-form-label"  > Failure Cause:</label>
      <select name='select3' style="width:400px;" v-model="ay3"  @change="changefcode(ay3.failurecode)"   >
        <option disabled value="">Please select one</option>
       <option  v-for ="failure in myfailures"  v-bind:key ="failure.id"  :value="failure"  > {{failure.failurename}}</option>
      </select> -->

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
    {{message.fcode}}
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
import UserService from '../services/user.service';
import { maintmode } from '../services/variables';
var m2=maintmode;
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
 //  this.timer = setInterval(this.Getmessages, 60000)
    },
  computed:{
   rotateprop:function(){
     this.propmessages=this.ays;
    return this.propmessages;
   }

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
        console.error(error);
      });
      },

       changefcode(code){
      this.currentmessage.fcode=code;
      },
    //   pingServer() {
    //   // Send the "pingServer" event to the server.
    //   this.$socket.emit('pingServer', 'PING!')
    // },
//
//  startInterval() {

//   setInterval(UserService.getMessages(), 1000);

//  },
//

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
     this.propmessages = result.data;
     if (this.propmessages.length){

       this.maintmode=m2;
     }
           })
      .catch(error => {
        console.error(error );
      });
 },

//
updateit(){
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

       console.log(res);
           })
      .catch(error => {
        console.log(error);
      });

      this.Getmessages();
 },
//
updatereject(){
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
