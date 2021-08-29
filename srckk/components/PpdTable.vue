<template>
 <div clas="ppdtable">
<form  class="submit-form">

        <div class="form-group row">
          <label for="id" class="col-sm-3 col-form-label" >ID   :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" name ="id" v-model="currentcat.id"  readonly >
    </div>
        </div>
      <div class="form-group row">
    <label for="veto" class="col-sm-3 col-form-label" >Production    :</label>
    <div class="col-sm-5">
      <input type="number" class="form-control" name ="veto" v-model="currentcat.ppd"  >
    </div>
    </div>

  <div class="form-group row">
    <label for="qf" class="col-sm-3 col-form-label" >Quality Factor    :</label>
    <div class="col-sm-5">
      <input type="number" class="form-control" name ="qf" valu=0 v-model="currentcat.qf"  >
    </div>
    </div>

    
      <div class="form-group row">
    <label for="veto" class="col-sm-3 col-form-label" >Date    :</label>
    <div class="col-sm-5">
<!-- min="2017-06-01T08:30" max="2017-06-30T16:30" -->
      <input type="date" class="form-control"  name ="ppddate" ref="ppddate" v-model="currentcat.date"  >
    </div>
    </div>
 </form>
<!-- <button style="" type="button" class="btn btn-success" @click.prevent= "updateit">Update</button> -->
<!-- /////////////////////////////////////// BUTTON ///////////////////////// -->
  <!-- <p align="right"> -->
  <button style="margin-right:15px; margin-bottom:15px;" type="button" class="btn btn-success" @click.prevent= "Setit">Save</button>
<!-- </p> -->
<button style="margin-right:15px; margin-bottom:15px;" type="button" class="btn btn-success" @click.prevent= "updateit">Update</button>

 <!-- <p align="right"> -->
  <button style="margin-right:15px; margin-bottom:15px;" type="button" class="btn btn-warning" @click.prevent= "newsubcat">New</button>
<!-- </p> -->
 <button style=" margin-bottom:15px;" type="button" class="btn btn-danger" @click.prevent= "delit">Delete</button>
<!-- <button style="" type="button" class="btn btn-success" @click.prevent= "newsubcat">Update</button>
    -->

<!--  -->
   <div>
<table class="table">
    <thead class="thead-dark" >
      <th scope="col">id</th>
      <th scope="col">Production</th>
       <th scope="col">QF</th>
      <th scope="col">Date</th>

    </thead>

<tr v-for ="ppd in propcats" v-bind:key ="ppd.id"  @click="selectRow(ppd.id,ppd.ppd,ppd.date,ppd.qf)"  :class="{'highlight': (ppd.id == currentcat.id )}" >
<td>
    {{ppd.id}}
    </td>
    <td>
    {{ppd.ppd}}
    </td>
     <td>
    {{ppd.qf}}
    </td>
    <td>
    {{ppd.date  | formatDateOnly}}
  </td>
</tr>
</table>
</div>
</div>
</template>
<script>

import UserService from "../services/user.service";
export default {
  name: 'PpdTable',
  data(){
  return {
  currentcat:{id:'',ppd:0,date:'',insertdate:'',userno:'',qf:0},
  mycat:'',
  currentIndex: -1,
  cat:'',
  mycates:'',
  propcats:'',
 };
},
props:["ays","selectedcat"] ,
computed:{
 rotateprop:function(){
     this.propcats=this.ays;
    return this.propcats;
   }


 },
 mounted (){
  this.rotateprop;
   this.getppds();
  // //this.startInterval();
  //  this.timer = setInterval(this.Getmessages, 10000)
    },
  methods:{
  selectRow(id,ppd,mydate,qf){
  this.currentcat.id = id;
  this.currentcat.ppd=ppd;
  this.currentcat.date=this.$options.filters.formatDateOnly(mydate)  ;  //this.$options.filters.formatDateOnly(this.currentcat.date)
  this.currentcat.qf=qf;
  // this.currentcat.insertdate=insertdate;
  // this.currentcat.userno=userno;

    },

  getppd(id){
     UserService.getmyppd(id).then(result => {
     this.mycats = result.data;
           })
      .catch(error => {
        console.error(error);
      });
      },

 getppds(){
     UserService.getallppd().then(result => {
     this.propcats = result.data;
           })
      .catch(error => {
        console.error(error);
      });
      },
      Setit(){
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
//var dateTime=date
  var data1={
  ppd:this.currentcat.ppd,
  date:this.currentcat.date,
  insertdate:dateTime,
  qf:this.currentcat.qf,
};
console.log(data1);
if (!this.currentcat.id && this.currentcat.ppd && this.currentcat.date ){
UserService.setppd(data1).then(res => {
  
         }).catch(error => {  alert(error);
      });
     this.getppds();
 }
 else{
   alert('Not Permit');
 }
},



newsubcat() {
      this.submitted = false;
      this.currentcat = {id:'',ppd:'0',date:'',insertdate:'',userno:'',qf:0};
     // this.$refs.select3.selectedIndex="-1";
  },
  delit(){
  if (this.currentcat.id ){
  UserService.delppd(this.currentcat.id).then(res => {
         }).catch(error => {console.log(error);
      });
     this.getppds();
      alert('deleted :' + this.currentcat.id);
 }
 else{
   alert('Not Permit');
 }
},
updateit(){
if (!this.$refs.ppddate.value){
  alert('please insert date');
  return;
}
  var d = new Date("2015-03-25");
  d=this.$options.filters.formatDateOnly(this.currentcat.date);
  var data={
    id:this.currentcat.id,
    ppd:this.currentcat.ppd,
    date:d,
    isertdate:'2011-01-25',
    userno:'ay',
    qf:this.currentcat.qf,
 };
this.rotateprop;
console.log(data);
     UserService.updateppd(data).then(res => {
     
  this.getppds();
       console.log(res);
           })
      .catch(error => {
        console.log(error);
      });
 },
},
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
