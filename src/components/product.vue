<template>
 <div clas="cattable">
<div class="col-sm-10">
       
  <!-- <button style="margin-right:15px; margin-bottom:15px;" type="button" class="btn btn-danger" @click.prevent= "unlockit">Unlock 4L Machine
</button>
<button style="margin-right:50px;margin-bottom:15px; " type="button" class="btn btn-warning" @click.prevent= "lockit">Lock 4L Machine
</button> -->
      </div>

<form  class="submit-form">

        <div class="form-group row">
          <label for="id" class="col-sm-3 col-form-label" >ID   :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" name ="id" v-model="currentcat.id"  readonly >
    </div>
        </div>
      <div class="form-group row">
    <label for="veto" class="col-sm-3 col-form-label" >Product:</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" name ="veto" v-model="currentcat.productcode"  >
    </div>

      </div><div class="form-group row">
    <label for="veto" class="col-sm-3 col-form-label" >Product Description:</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" name ="veto" v-model="currentcat.desc"  >
    </div>
    </div>
     <div class="form-group row">
          <label for="sapid" class="col-sm-3 col-form-label" >Sap ID   :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" name ="sapid" v-model="currentcat.sapid">
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
      <th scope="col">ID</th>
      <th scope="col">Product</th>
      <th scope="col">Product Desc</th>
      <th scope="col">Sap ID</th>

    </thead>

<tr v-for ="cat in propcats" v-bind:key ="cat.id"  @click="selectRow(cat.id,cat.productcode,cat.desc,cat.sapid)"  :class="{'highlight': (cat.id == currentcat.id )}" >
<td>
    {{cat.id}}
    </td>
    <td>
    {{cat.productcode}}
    </td>
    <td>
    {{cat.desc}}
  </td>
  <td>
    {{cat.sapid}}
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
  name: 'Product',
  data(){
  return {
  currentcat:{id:'',productcode:'',desc:'',sapid:''},
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
   this.getproducts();
  // //this.startInterval();
  //  this.timer = setInterval(this.Getmessages, 10000)
    },
  methods:{
  selectRow(id,productcode,desc,sapid){
  this.currentcat.id = id;
  this.currentcat.productcode=productcode;
  this.currentcat.desc=desc;
  this.currentcat.sapid = sapid;
    },
lockmachine(){
  var d1={mid:'',val:''};
 d1.mid=1;
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
 d1.mid=1;
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

    this.lockmachine() ;
   
},
unlockit(){
 
    this.unlockmachine() ;
   
},
//
  // getcat(id){
  //    UserService.getmycat(id).then(result => {
  //    this.mycats = result.data;
  //          })
  //     .catch(error => {
  //       console.error(error);
  //     });
  //     },

 getproducts(){
     ReportService.getallproducts().then(result => {
     this.propcats = result.data;
           })
      .catch(error => {
        console.error(error);
      });
      },

/////////////////////
Setit(){
  var data1={
  productcode:this.currentcat.productcode,
  desc:this.currentcat.desc,
  sapid:this.currentcat.sapid,
};
console.log(data1);
if (!this.currentcat.id && this.currentcat.productcode && this.currentcat.desc ){
ReportService.createProduct(data1).then(res => {
         }).catch(error => {console.log(error);
      });
     this.getproducts();
 }
 else{
   alert('Not Permit');
 }
},
//////////////////////////


newsubcat() {
      this.submitted = false;
      this.currentcat = {id:'',productcode:'',desc:'',sapid:''};
      this.$refs.select3.selectedIndex="-1";
  },
  delit(){
  if (this.currentcat.id ){
  ReportService.delProduct(this.currentcat.id).then(res => {
         }).catch(error => {console.log(error);
      });
     this.getproducts();
      alert('deleted :' + this.currentcat.id);
 }
 else{
   alert('Not Permit');
 }
},
updateit(){
  var data={
    id:             this.currentcat.id,
    productcode:    this.currentcat.productcode,
    desc:           this.currentcat.desc,
    sapid:          this.currentcat.sapid,
 };
this.rotateprop;
console.log(data);
     ReportService.updateProduct(data).then(res => {
     this.getproducts();
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
