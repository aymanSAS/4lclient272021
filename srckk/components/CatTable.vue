<template>
 <div clas="cattable">
<form  class="submit-form">

        <div class="form-group row">
          <label for="id" class="col-sm-3 col-form-label" >ID   :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" name ="id" v-model="currentcat.id"  readonly >
    </div>
        </div>
      <div class="form-group row">
    <label for="veto" class="col-sm-3 col-form-label" >Cat Code    :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" name ="veto" v-model="currentcat.catcode"  >
    </div>

      </div><div class="form-group row">
    <label for="veto" class="col-sm-3 col-form-label" >Cat Name    :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" name ="veto" v-model="currentcat.catname"  >
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
      <th scope="col">Category Code</th>
      <th scope="col">Category Name</th>

    </thead>

<tr v-for ="cat in propcats" v-bind:key ="cat.id"  @click="selectRow(cat.id,cat.catname,cat.catcode)"  :class="{'highlight': (cat.id == currentcat.id )}" >
<td>
    {{cat.id}}
    </td>
    <td>
    {{cat.catcode}}
    </td>
    <td>
    {{cat.catname}}
  </td>
</tr>
</table>
</div>
</div>
</template>
<script>

import UserService from "../services/user.service";
export default {
  name: 'CatTable',
  data(){
  return {
  currentcat:{id:'',catname:'',catcode:''},
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
   this.getcats();
  // //this.startInterval();
  //  this.timer = setInterval(this.Getmessages, 10000)
    },
  methods:{
  selectRow(id,name,code){
  this.currentcat.id = id;
  this.currentcat.catname=name;
  this.currentcat.catcode=code;
    },

  getcat(id){
     UserService.getmycat(id).then(result => {
     this.mycats = result.data;
           })
      .catch(error => {
        console.error(error);
      });
      },

 getcats(){
     UserService.getallcat().then(result => {
     this.propcats = result.data;
           })
      .catch(error => {
        console.error(error);
      });
      },

/////////////////////
Setit(){
  var data1={
  catcode:this.currentcat.catcode,
  catname:this.currentcat.catname,
};
console.log(data1);
if (!this.currentcat.id && this.currentcat.catcode && this.currentcat.catname ){
UserService.setcat(data1).then(res => {
         }).catch(error => {console.log(error);
      });
     this.getcats();
 }
 else{
   alert('Not Permit');
 }
},
//////////////////////////


newsubcat() {
      this.submitted = false;
      this.currentcat = {id:'',catcode:'',catname:''};
      this.$refs.select3.selectedIndex="-1";
  },
  delit(){
  if (this.currentcat.id ){
  UserService.delcat(this.currentcat.id).then(res => {
         }).catch(error => {console.log(error);
      });
     this.getcats();
      alert('deleted :' + this.currentcat.id);
 }
 else{
   alert('Not Permit');
 }
},
updateit(){
  var data={
    id:this.currentcat.id,
    catcode:this.currentcat.catcode,
    catname:this.currentcat.catname,
 };
this.rotateprop;
console.log(data);
     UserService.updateCat(data).then(res => {
  this.getcats();
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
