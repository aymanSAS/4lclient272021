<template>
 <div clas="failuretable">
<form  class="submit-form">

    <div class="form-group row">
      <label for="id" class="col-sm-3 col-form-label" >ID   :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" name ="id" v-model="currentcat.id"  readonly >
    </div>
    </div>

    <div class="form-group row">
    <label for="veto" class="col-sm-3 col-form-label" >Failure Code    :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" name ="insubcat" v-model="currentcat.failurecode"  >
    </div>
    </div>

    <div class="form-group row">
    <label for="veto" class="col-sm-3 col-form-label" >Failure Name    :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" name ="insubname" v-model="currentcat.failurename"  >
    </div>
    </div>

<div class="form-group row">
         <label for ='select1' class="col-sm-3 col-form-label"   >Parent Subcategory:</label>
      <select    name='select1' id="select1" class="col-sm-4" style="width:300px;"  v-model="ay1"  @change="changefcode(ay1.subcatcode)"  >
        <option value="" selected disabled hidden>Choose here</option>
       <option  v-for ="cat in subcats" v-bind:key ="cat.subcatcode"  :value="cat">  {{cat.subcatname}}</option>

      </select>
      <div class="col-sm-2">
      <input name="infcode"  id="infcode"   style="width:100px;" type="text" class="form-control" v-model="currentcat.subcatcode"  readonly  >
    </div>
      </div>


 </form>

<!-- /////////////////////////////////////// BUTTON ///////////////////////// -->
  <!-- <p align="right"> -->
  <button style="margin-right:15px; margin-bottom:15px;" type="button" class="btn btn-success" @click.prevent= "Setit">Save</button>
<!-- </p> -->
<button style="margin-right:15px; margin-bottom:15px;" type="button" class="btn btn-success" @click.prevent= "updateit">Update</button>

 <!-- <p align="right"> -->
  <button style="margin-right:15px; margin-bottom:15px;" type="button" class="btn btn-warning" @click.prevent= "newfailure">New</button>
<!-- </p> -->
 <button style=" margin-bottom:15px;" type="button" class="btn btn-danger" @click.prevent= "delit">Delete</button>
<!-- <button style="" type="button" class="btn btn-success" @click.prevent= "newsubcat">Update</button>
    -->

   <div>
<table class="table">
    <thead class="thead-dark" >
      <th scope="col">id</th>
      <th scope="col">Failure Code</th>
      <th scope="col"> Failure Name</th>
       <th scope="col"> Parent Sub Category </th>
    </thead>

<tr v-for ="failure in propcats" v-bind:key ="failure.id"  @click="selectRow(failure.id,failure.failurename,failure.failurecode,failure.subcatcode)"  :class="{'highlight': (failure.id == currentcat.id )}" >
<td>
    {{failure.id}}
    </td>
    <td>
    {{failure.failurecode}}
    </td>
    <td>
    {{failure.failurename}}
  </td>
   <td>
    {{failure.subcatcode}}
  </td>
</tr>
</table>
</div>
</div>
</template>
<script>

import UserService from "../services/user.service";
export default {
  name: 'FailureTable',
  data(){
  return {
  currentcat:{id:'',failurename:'',failurecode:'',subcatcode:''},
  mycat:'',
  currentIndex: -1,
  failure:'',
  subcats:'',
  mycates:'',
  ay1:'',
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
   this.getfailures();
   this.getsubcats();
  // //this.startInterval();
  //  this.timer = setInterval(this.Getmessages, 10000)
    },
  methods:{
  selectRow(id,name,code,subcode){
  this.currentcat.id = id;
  this.currentcat.failurename=name;
  this.currentcat.failurecode=code;
  this.currentcat.subcatcode=subcode;
    },
  getcat(id){
     UserService.getmyfailure(id).then(result => {
     this.mycats = result.data;
           })
      .catch(error => {
        console.error(error);
      });
      },
        changefcode(code){
      console.log(this.currentcat.subcatcode);
      this.currentcat.subcatcode=code;
      },
  getsubcats(){
    //  this.rotateprop;
     UserService.getallsubcat().then(result => {
     this.subcats = result.data;
           })
      .catch(error => {
        console.error(error);
      });
      },
 getfailures(){
     UserService.getallfailure().then(result => {
     this.propcats = result.data;
           })
      .catch(error => {
        console.error(error);
      });
      },
      //
 newfailure() {
      this.submitted = false;
      this.currentcat = {id:'',failurecode:'',failurename:'',subcatcode:''};
 },

 Setit(){
  var data1={
  failurecode:this.currentcat.failurecode,
  failurename:this.currentcat.failurename,
  subcatcode:this.currentcat.subcatcode,

};
console.log(data1);
if (!this.currentcat.id && this.currentcat.failurecode && this.currentcat.failurename && this.currentcat.subcatcode){
UserService.setfailure(data1).then(res => {
         }).catch(error => {console.log(error);
      });
     this.getfailures();
 }
 else{
   alert('Not permit');
 }
},

 delit(){
  if (this.currentcat.id ){
  UserService.delfailure(this.currentcat.id).then(res => {
       this.newfailure();   }).catch(error => {console.log(error);
      });
        this.newfailure();
     this.getfailures();
      alert('deleted :' + this.currentcat.id);

 }
 else{
   alert('Not Permit');
 }
},
updateit(){
  var data={
    id:this.currentcat.id,
    failurecode:this.currentcat.failurecode,
    failurename:this.currentcat.failurename,
    subcatcode: this.currentcat.subcatcode,
 };
this.rotateprop;
console.log(data);
     UserService.updateFailure(data).then(res => {
  this.getfailures();
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
