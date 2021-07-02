<template>
 <div clas="batchtable">
<form  class="submit-form">
  
<!-- <h1>ff {{ss}}</h1> -->
    <div class="form-group row">
      <label for="id" class="col-sm-3 col-form-label" >ID   :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" name ="id" id="id" ref="id" v-model="currentcat.id"  readonly >
    </div>
    </div>

    <div class="form-group row">
    <label for="veto" class="col-sm-3 col-form-label" >Run ID    :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" name ="insubcat" v-model="currentcat.runid"  >
    </div>
    </div>

    <!-- <div class="form-group row">
    <label for="psdate" class="col-sm-3 col-form-label" >Start Date   :</label>
    <div class="col-sm-5">
      <input type="date" class="form-control" name ="psdate" v-model="currentcat.startdate"  readonly >
    </div>
    </div>

       <div class="form-group row">
    <label for="veto" class="col-sm-3 col-form-label" >End Date:</label>
    <div class="col-sm-5">
      <input type="date" class="form-control"  name ="penddate" ref="penddate" v-model="currentcat.enddate"  readonly >
    </div>
    </div> -->

 <!-- <div class="form-group row">
    <label for="veto" class="col-sm-3 col-form-label" >Mode  :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" name ="insubname" v-model="currentcat.mode"  >
    </div>
    </div> -->
    
  

     <!-- <div class="form-group row">
    <label for="veto" class="col-sm-3 col-form-label" >Batch ID   :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" name ="insubname" v-model="currentcat.batchid"  >
    </div>
    </div> -->

     <!-- <div class="form-group row">
    <label for="veto" class="col-sm-3 col-form-label" >Sap ID   :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" name ="insubname" v-model="currentcat.sapid"  >
    </div>
    </div> -->
  <div class="form-group row">
      <label for ='select11' class="col-sm-3 col-form-label"   >Mode:</label>
      <select    name='select11' id="select11"  ref="select11" class="col-sm-4" style="width:300px;" v-model="currentcat.mode"   >
        <option value="4"   >4l Mode</option>
        <option value="5"   >5L Mode</option>
      </select>
      </div> 
 <div class="form-group row">
         <label for ='select1' class="col-sm-3 col-form-label"   >Products:</label>
      <select    name='select1' id="select1"  ref="select1" class="col-sm-4" style="width:300px;"  v-model="ay1"  @change="changefcode(ay1.productcode)"  >
        <option value="" selected disabled hidden>Choose here</option>
       <option  v-for ="product in allproducts" v-bind:key ="product.productcode"  :value="product">  {{product.desc}}</option>

      </select>
      <div class="col-sm-2">
      <input name="infcode"  id="infcode"   style="width:100px;" type="text" class="form-control" v-model="currentcat.productcode"  readonly  >
    </div>
      </div>

 </form>

<!--  -->

<!-- /////////////////////////////////////// BUTTON ///////////////////////// -->
  <!-- <p align="right"> -->
  <button  style="margin-right:15px; margin-bottom:15px;" type="button" class="btn btn-success" @click.prevent= "Setit">Save</button>
<!-- </p> -->
<!-- <button style="margin-right:15px; margin-bottom:15px;" type="button" class="btn btn-success" @click.prevent= "updateit">Update</button> -->

 <!-- <p align="right"> -->
  <!-- <button style="margin-right:15px; margin-bottom:15px;" type="button" class="btn btn-warning" @click.prevent= "newsubcat">New</button> -->
<!-- </p> -->
 <button style=" margin-bottom:15px;" type="button" class="btn btn-danger" @click.prevent= "delit">Delete</button>
<!-- <button style="" type="button" class="btn btn-success" @click.prevent= "newsubcat">Update</button>
    -->

<!--  -->
  <button style="margin-left:400px; margin-bottom:15px;" type="button" class="btn btn-warning" @click.prevent= "updateit(1)">إنهاء التشغيله ومتابعه العمل </button>
  <button style="margin-left:40px; margin-bottom:15px;" type="button" class="btn btn-danger" @click.prevent= "updateit(2)">إنهاء التشغيله ونهايه اليوم</button>

   <div v-if=" typeof propcats[0] !='undefined'">
<table  v-if=" propcats[0].enddate == null " id='batchtable' ref="batchtable"  class="table">
    <thead class="thead-dark" >
      <th scope="col">ID</th>
      <th scope="col">Run ID</th>
      <th scope="col"> Start Date</th>
      <th scope="col">End Date</th>
      <th scope="col">Mode</th>
      <th scope="col">Product Code</th>
      <th scope="col">Batch ID</th>
      <th scope="col">Sap ID</th>
    </thead>

<tr v-for ="batch in propcats"    v-bind:key ="batch.id"  @click="selectRow(batch.id,batch.runid,batch.startdate,batch.enddate,batch.mode,batch.batchid,batch.sapid,batch.productcode,)"  :class="{'highlight': (batch.id == currentcat.id )}" >
<td>
    {{batch.id}}
    </td>
    <td>
    {{batch.runid}}
    </td>
    <td>
    {{batch.startdate | formatDateOnly}}
  </td>
   <td>
    {{batch.enddate | formatDateOnly}}
  </td>
   <td>
    {{batch.mode}}
  </td>
   <td>
    {{batch.productcode}}
  </td>
   <td>
    {{batch.batchid}}
  </td>
   <td>
    {{batch.sapid}}
  </td>
   <td>
    {{batch.empno}}
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
  name: 'Batch',
  data(){
  return {
  currentcat:{id:'',runid:'',startdate:'',enddate:'',mode:'',batchid:'',sapid:'',productcode:'',empno:''},
  mycat:'',
  currentIndex: -1,
  subcat:'',
  mycates:'',
  propcats:'',
  allcats:'',
  lastbatch:'',
  allproducts:'',
  ay1:'',
  //ss:'',
 };
 
},
props:["ays"] ,
computed:{
  
 rotateprop:function(){
   let vm =this
    vm.propcats=vm.ays;
    return vm.propcats;
   },
    currentUser() {
      var u=this.$store.state.auth.user;
      return u;
    },
   cdate(){
return this.propcats[0].enddate;
   } ,
ss:function(){
     var ss=this.$store.state.mycode;
    return ss;
   }
 //
 },
  activated(){


  },
 created(){
 

 //this.rotateprop;
 },
 mounted (){
 //setTimeout(()=>{ this.selectRow(this.propcats[0].id,this.propcats[0].runid,this.propcats[0].startdate,this.propcats[0].enddate,this.propcats[0].mode,this.propcats[0].batchid,this.propcats[0].sapid,this.propcats[0].productcode)},500);

//console.log(this.$store.state.user2.username);
// this.rotateprop();
this.getbatches();

  //this.getbatches();
  //this.rotateprop;
   this.GetProducts();
 // this.selectRow(this.propcats[0].id,this.propcats[0].runid,this.propcats[0].startdate,this.propcats[0].enddate,this.propcats[0].mode,this.propcats[0].bachid,this.propcats[0].sapid,this.propcats[0].productcode)
  // //this.startInterval();
  //  this.timer = setInterval(this.Getmessages, 10000)
    },
  methods:{
  selectRow(id,runid,startdate,enddate,mode,batchid,sapid,productcode){
  this.currentcat.id = id;
  this.currentcat.runid=runid;
  this.currentcat.startdate=this.$options.filters.formatDateOnly(startdate);   //this.$options.filters.formatDateOnly
   this.currentcat.enddate=this.$options.filters.formatDateOnly(enddate);
   this.currentcat.mode =mode;
   this.currentcat.productcode = productcode;
   this.currentcat.batchid = batchid;
   this.currentcat.sapid = sapid;
   //this.currentcat.empno = empno;
    },
      changefcode(code){
      //console.log(this.currentcat.catcode);
      this.currentcat.productcode=code;
      },
  // getproducts(id){
  //    UserService.getmysubcat(id).then(result => {
  //    this.mycats = result.data;
  //          })
  //     .catch(error => {
  //       console.error(error);
  //     });
  //     },
      //
Setit(){
 
 //if((this.propcats.startdate) & (!this.$refs.batchtable.hidden)){
 if((this.propcats[0].startdate!=null) & (this.propcats[0].enddate==null)){
     
  alert('Not permit....') ;
  return;
 }
  let today=new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
  var data1={
  runid:this.currentcat.runid,
  startdate:dateTime,
//  endate:this.currentcat.endate,
    mode:this.currentcat.mode,
    productcode:this.currentcat.productcode,
    batchid:this.currentcat.batchid,
    sapid:this.currentcat.sapid,
   // empno:this.currentUser,
};
console.log(data1);
if (!this.currentcat.id && this.currentcat.runid && this.currentcat.mode && this.currentcat.productcode){
ReportService.letmode(data1).then(res => {
         }).catch(error => {console.log(error)}).then(res=>{this.getbatches();})
     // window.location.replace('/messages'); 
      this.$router.push('/messages');   
 }
 else{
   alert('Not Permit');
 }
},


delit(){
 //this.selectRow(this.propcats[0].id,this.propcats[0].runid,this.propcats[0].startdate,this.propcats[0].enddate,this.propcats[0].mode,this.propcats[0].batchid,this.propcats[0].sapid,this.propcats[0].productcode)
if (!this.$refs.id.value){
  alert('You must select from table');
 //this.selectRow(this.propcats[0].id,this.propcats[0].runid,this.propcats[0].startdate,this.propcats[0].enddate,this.propcats[0].mode,this.propcats[0].batchid,this.propcats[0].sapid,this.propcats[0].productcode)

  return;
  }
  if (!confirm('Are you sure ?')){
  return;
  }

  if (this.currentcat.id !=null){
  ReportService.delbatch(this.currentcat.id).then(res => {
         }).catch(error => {console.log(error);
      });
     this.getbatches();
      alert('deleted :' + this.currentcat.id);
 }
 else{
   alert('Not Permit');
 }
},

 getbatches(){
    //  this.rotateprop;
    var vm=this;
     ReportService.getlastmode().then(function(result)  {

     
    //  this.propmessages = result.data;
    //  this.watchdata=this.propmessages; 
    if (result.data!= undefined){
     vm.rotateprop;
     vm.propcats = result.data;
    }  
     
           })
      .catch(error => {
        console.error(error);
      });
      },


      //
   GetProducts(){
     ReportService.getallproducts().then(res => {
     this.allproducts = res.data;
           })
      .catch(error => {
        console.error(error);
      });
 },

 //
 newBatch() {

      this.submitted = false;
      this.currentcat = {};
      //this.$refs.select1.selectedIndex="0";
// $('select1').currentIndex=-1;



  },

 //
//  getsubcats(){
//     //  this.rotateprop;
//      UserService.getallsubcat().then(result => {
//      this.propcats = result.data;
//            })
//       .catch(error => {
//         console.error(error);
//       });
//       },
updateit(close){
if (!this.currentcat.id){
alert ('Please choose run from table')  
return;
}  
let today=new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;


  var data={
    id:this.currentcat.id,
    enddate:dateTime,
    dayend:close,
  
 };
this.rotateprop;
console.log(data);
     ReportService.batchesupdate(data).then(res => {
  this.getbatches();
       console.log(res);
           })
      .catch(error => {
        console.log(error);
      }).then(result=> {this.newBatch()});
// window.location.replace('/messages');
 this.$router.push('/messages');
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
