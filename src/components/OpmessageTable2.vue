<template>


 <div clas="messagetable">





<!-- <div class="rounded" style="margin-left:10px;margin-top:10px;width:600px;padding:5px;height:200px;border:1.5px solid #000;"> -->

    <div class="col-sm-10">
         <label for ='select1' class="col-sm-3 col-form-label"   >Failure category:</label>
      <select    name='select1' id='select1' ref="select1" style="width:400px;" v-model="ay1"  @change="loadsubcat(ay1.catcode)"  >
        <option value="" selected disabled hidden>Choose here</option>
       <option  v-for ="cat in cats" v-bind:key ="cat.catcode"  :value="cat">  {{cat.catname}}</option>
      </select>
      </div>
       <div class="col-sm-10">
         <label for ='select2' class="col-sm-3 col-form-label" > Failure Sub Category:</label>
      <select name='select2' style="width:400px;" ref="select2"  v-model="ay2" @change="loadfailure(ay2.subcatcode)"  >
       <option  v-for ="subcat in mysubcats" v-bind:key ="subcat.subcatcode"  :value="subcat"   >  {{subcat.subcatname}}</option>
      </select>
      </div>

      <div class="col-sm-10">
         <label for ='select3' class="col-sm-3 col-form-label"  > Failure Cause:</label>
      <select name='select3' ref="select3" style="width:400px;" v-model="ay3"  @change="changefcode(ay3.failurecode,ay3.failurename)"   >
        <option disabled value="">Please select one</option>
       <option  v-for ="failure in myfailures"  v-bind:key ="failure.id"  :value="failure"  > {{failure.failurename}} : {{failure.failurecode}}  </option>
      </select>

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

       <button style="float: left;margin-bottom:20px; margin-right:20px" type="button" class="btn btn-success" @click.prevent= "updateit">Save</button>
       <button style="float: left;margin-bottom:20px; margin-right:20px" type="button" class="btn btn-primary" @click.prevent= "Getmessages">Refresh</button>
       <button style="float: right;margin-bottom:20px; margin-right:20px" type="button" class="btn btn-success" @click.prevent= "Finishme">Finish</button>


   <div>

   <table  class="table">
    <thead class="thead-dark" >
      <th scope="col">id</th>
      <th scope="col">Message</th>
      <th scope="col">Date</th>
      <th scope="col">Fcode</th>
      <th scope="col">OP Comment</th>
      <!-- <th scope="col">Maint Comment</th> -->
</thead>
<tr v-for ="message in propmessages" v-bind:key ="message.id"  @click="selectRow(message.id,message.fcode,message.Comment)" :class="{'highlight': (message.id == currentmessage.id )}" >
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
    <td>
    {{message.Comment}}
    </td>

</tr>
</table>


   </div>
 </div>

</template>

<script>
import userService from '../services/user.service';
import UserService from "../services/user.service";
export default {
  name: 'OpmessageTable',
  props:["ays","user","cats","subcats","failures"] ,

  data(){
  return {
  messages:[],
  currentmessage:{id:'',fcode:'',comment:'',fdesc:''},
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


   ay1:'',
   ay2:'',
   ay3:'',
   }
   },
    mounted (){
  this.rotateprop;
  this.Getmessages();
  // this.chartData;
  // //this.startInterval();
  // this.timer = setInterval(this.Getmessages, 10000)
    },



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

//   setInterval(UserService.getMessages(), 1000);

//  },
//
Resetme(){
//this.$refs.select1.selectedIndex="1";
// this.$refs.select2.selectedIndex="-1";
//this.$refs.select3.selectedIndex="-1";
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
  var self = this;
   UserService.getMessages().then(result => {
     this.rotateprop;
     this.propmessages = result.data;
     self.watchdata=this.propmessages;
      this.Resetme();
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

     if(confirm(' هل انت متاكد من انتهاء سبب التوقف '   +  data.id   +'  واستمرار العمل؟' ) && this.currentmessage.id){
      userService.updateMessagesftime(data)
                .then(resp => {
                   console.log(res);
           })
      .catch(error => {
        console.log(error);
      });

      this.Getmessages();
     }
 },
//
updateit(){
  //console.log(this.$refs.select1.value);
 var selectedindex= this.$refs.select3.selectedIndex;
if (selectedindex==0){
alert ('you must select failure code');
exit();
}
  var data={
    id:this.currentmessage.id,
    fcode:this.currentmessage.fcode,
     comment:this.currentmessage.comment,
     fdesc:this.currentmessage.fdesc,

 };

console.log(data);

     UserService.updateMessages(data).then(res => {
       console.log(res);
           })
      .catch(error => {
        console.log(error);
      });
      this.Getmessages();
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
