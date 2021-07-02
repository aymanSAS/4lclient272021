<template>
 <div clas="subcattable">
<form  class="submit-form">

    <div class="form-group row">
      <label for="id" class="col-sm-3 col-form-label" >ID   :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" name ="id"  v-model="currentcat.id"  readonly >
    </div>
    </div>

    <div class="form-group row">
    <label for="veto" class="col-sm-3 col-form-label" >Sub Category Code    :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" name ="insubcat" v-model="currentcat.subcatcode"  >
    </div>
    </div>

    <div class="form-group row">
    <label for="veto" class="col-sm-3 col-form-label" >Sub Catoryeg Name    :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" name ="insubname" v-model="currentcat.subcatname"  >
    </div>
    </div>

 <div class="form-group row">
         <label for ='select1' class="col-sm-3 col-form-label"   >Parent category:</label>
      <select    name='select1' id="select1"  ref="select1" class="col-sm-4" style="width:300px;"  v-model="ay1"  @change="changefcode(ay1.catcode)"  >
        <option value="" selected disabled hidden>Choose here</option>
       <option  v-for ="cat in allcats" v-bind:key ="cat.catcode"  :value="cat">  {{cat.catname}}</option>

      </select>
      <div class="col-sm-2">
      <input name="infcode"  id="infcode"   style="width:100px;" type="text" class="form-control" v-model="currentcat.catcode"  readonly  >
    </div>
      </div>

 </form>

<!--  -->

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
      <th scope="col">Sub Category Code</th>
      <th scope="col"> Sub Category Name</th>
       <th scope="col"> Parent Category Code </th>
    </thead>

<tr v-for ="subcat in propcats" v-bind:key ="subcat.id"  @click="selectRow(subcat.id,subcat.subcatname,subcat.subcatcode,subcat.catcode)"  :class="{'highlight': (subcat.id == currentcat.id )}" >
<td>
    {{subcat.id}}
    </td>
    <td>
    {{subcat.subcatcode}}
    </td>
    <td>
    {{subcat.subcatname}}
  </td>
   <td>
    {{subcat.catcode}}
  </td>
</tr>
</table>
</div>
</div>
</template>
<script>

import UserService from "../services/user.service";
export default {
  name: 'SubcatTable',
  data(){
  return {
  currentcat:{id:'',subcatcode:'',subcatname:'',catcode:''},
  mycat:'',
  currentIndex: -1,
  subcat:'',
  mycates:'',
  propcats:'',
  allcats:'',
  ay1:'',
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
   this.getsubcats();
   this.GetCats();
  // //this.startInterval();
  //  this.timer = setInterval(this.Getmessages, 10000)
    },
  methods:{
  selectRow(id,name,code,catcode){
  this.currentcat.id = id;
  this.currentcat.subcatname=name;
  this.currentcat.subcatcode=code;
   this.currentcat.catcode=catcode;
    },
      changefcode(code){
      console.log(this.currentcat.catcode);
      this.currentcat.catcode=code;
      },
  getcat(id){
     UserService.getmysubcat(id).then(result => {
     this.mycats = result.data;
           })
      .catch(error => {
        console.error(error);
      });
      },
      //
Setit(){
  var data1={
  subcatcode:this.currentcat.subcatcode,
  subcatname:this.currentcat.subcatname,
  catcode:this.currentcat.catcode,

};
console.log(data1);
if (!this.currentcat.id && this.currentcat.subcatcode && this.currentcat.subcatname && this.currentcat.catcode){
UserService.setsubcat(data1).then(res => {
         }).catch(error => {console.log(error);
      });
     this.getsubcats();
 }
 else{
   alert('Not Permit');
 }
},
delit(){
  if (this.currentcat.id ){
  UserService.delsubcat(this.currentcat.id).then(res => {
         }).catch(error => {console.log(error);
      });
     this.getsubcats();
      alert('deleted :' + this.currentcat.id);
 }
 else{
   alert('Not Permit');
 }
},




      //
   GetCats(){
     UserService.getallcat().then(res => {
     this.allcats = res.data;
           })
      .catch(error => {
        console.error(error);
      });
 },

 //
 newsubcat() {

      this.submitted = false;
      this.currentcat = {id:'',subcatcode:'',subcatname:'',catcode:''};
      this.$refs.select1.selectedIndex="0";
// $('select1').currentIndex=-1;



  },

 //
 getsubcats(){
    //  this.rotateprop;
     UserService.getallsubcat().then(result => {
     this.propcats = result.data;
           })
      .catch(error => {
        console.error(error);
      });
      },
updateit(){
  var data={
    id:this.currentcat.id,
    subcatcode:this.currentcat.subcatcode,
    subcatname:this.currentcat.subcatname,
    catcode:this.currentcat.catcode,
 };
this.rotateprop;
console.log(data);
     UserService.updateSubcat(data).then(res => {
  this.getsubcats();
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
