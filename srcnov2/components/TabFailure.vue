<template>



<div >
  <!-- Nav tabs -->
<ul class="nav nav-tabs" >
  <li class="nav-item">
    <a class="nav-link active" data-toggle="tab" href="#home">New Failure</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#menu1">Failure Table </a>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane container active" id="home">
    <div class="assetcontainer">
 <div class="row">

    <div class="col-md">
     <form  class="submit-form">
        <div class="form-group row">

          <label for="id" class="col-sm-3 col-form-label" >ID   :</label>
         <div class="col-sm-5">
          <input type="text" class="form-control" name ="id" v-model="selcat"  readonly >
          </div>
        </div>

     <div class="form-group row">   
    <label for="veto" class="col-sm-3 col-form-label" >Failure Code    :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" name ="veto" v-model="cat.fcode"  >
    </div>
  </div>

  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label" >Failure  Name    :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control"  v-model="cat.fname" >
    </div>
  </div>
 


 </form>
 </div>

</div>
</div>
<!-- /////////////////////////////////////// BUTTON ///////////////////////// -->
  <!-- <p align="right"> -->
  <button style="" type="button" class="btn btn-success" @click.prevent= "Setit">Save</button>
<!-- </p> -->
 <!-- <p align="right"> -->
  <button style="" type="button" class="btn btn-success" @click.prevent= "newsubcat">New</button>
<!-- </p> -->
<button style="" type="button" class="btn btn-success" @click.prevent= "newsubcat">Update</button>
     </div>
  <div class="tab-pane container fade" id="menu1">

      <FailureTable   :ays="content"  />

  </div>
  <div class="tab-pane container fade" id="menu2"> <Visa /></div>
  <div class="tab-pane container fade" id="ayman">

  </div>
  </div>





</div>
</template>
<script>
//
import Visa from '@/components/Visa.vue'
import UserService from "../services/user.service";
import FailureTable from "@/components/FailureTable";

export default {
  name: 'TabFailure',
  data() {
    return {
      content: '',
      selcat:'',
      id1:'',
       cat:{
         id: null,
         fcode:"",
         fname:"",
       
       }

    };
  },
    components: {FailureTable,Visa} ,
   mounted(){
    this.Getit();  
   },

   methods:{
   Getit(){
     UserService.getallfailure().then(res => {
     this.content = res.data;
           })
      .catch(error => {
        console.error(error);
      });
 },
  newfailure() {
      this.submitted = false;
      this.cat = {};
  },
  Setit(){
  var data={
  catcode:this.cat.fcode,
  catname:this.cat.fname,

};
console.log(data);
     UserService.setfailure(data).then(res => {
     UserService.getallfailure().then(result => {
     this.content = result.data;
     this.cat.id=result.data[0].id;
           })
      .catch(error => { console.error(error); });}).catch(error => {console.log(error);

      });
 }


},



}




</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#menu1{
  margin-top: 50px;
}
#visa {
  margin: 5px auto;
  max-width: 700px;
}
label{
  display: block;
  margin: 0px 0 0px;
}
input {
  font-size:18px;
  border: 1px double rgb(102, 97, 96) ;
  border-radius: 4px;

}
button {
  font-size: 16px;
 background: rgb(64, 179, 140);
  padding: 0.4rem 1.3rem;
  text-align: center;
  border: none;
  cursor: pointer;
  border-radius: 2px;
 margin: 25px;

}
span{
  width: 5px;
  float: right;
  cursor: pointer;
}
span:hover{
  color: brown;
}
.previous{
  border: 1.5px solid;
  padding:5px;
  margin-bottom: 2px;
}
.assetcontainer{
  margin-top: 50px;
  margin-left: 10px;
}
</style>
