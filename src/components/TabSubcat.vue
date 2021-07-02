<template>



<div >
  <!-- Nav tabs -->
<ul class="nav nav-tabs" >
  <li class="nav-item">
    <a class="nav-link active" data-toggle="tab" href="#home">New Sub category</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#menu1" >Sub Category Table </a>
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
          <input type="text" class="form-control" name ="id" v-model="subcat.id"  readonly >
          </div>
        </div>

     <div class="form-group row">   
    <label for="veto" class="col-sm-3 col-form-label" >Sub Category Code    :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" name ="veto" v-model="subcat.subcatcode"  >
    </div>
  </div>

  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label" >Sub Category  Name    :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control"  v-model="subcat.subcatname" >
    </div>
  </div>
 
<!-- <SelectCat  :mylabel="mylabel" :selectdata="allcats"  :savedone="subcat.catcode"/>
<span> aaa {{subcat.catcode}} </span> -->
<!-- <div class="col-sm-10"> -->
  <div class="form-group row">
         <label for ='select1' class="col-sm-3 col-form-label"   >Parent category:</label>
      <select    name='select1'  class="col-sm-4" style="width:300px;"  v-model="ay1"  @change="changefcode(ay1.catcode)"  >
        <option value="" selected disabled hidden>Choose here</option>
       <option  v-for ="cat in allcats" v-bind:key ="cat.catcode"  :value="cat">  {{cat.catname}}</option>

      </select>
      <div class="col-sm-2">
      <input name="infcode"  id="infcode"   style="width:100px;" type="text" class="form-control" v-model="subcat.catcode"  readonly  >
     
    </div>
      </div>
 <!-- <div class="form-group row">
     <label for="text" class="col-sm-5 col-form-label" >Selected Category Code    :</label>
     
    </div> -->
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

      <SubcatTable   :ays="content"  />

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
import SubcatTable from "@/components/SubcatTable";
import SelectCat from "@/components/SelectCat";
export default {
  name: 'TabSubcat',
  data() {
    return {
      content: '',
      mylabel:'Parent Category',
      selcat:'',
      allcats:'',
      id1:'',
      ay1:"",
         currentcode:"",
       subcat:{
         id: null,
         subcatcode:"",
         subcatname:"",
         catcode:"",
         
       }

    };
  },
    components: {SubcatTable,Visa,SelectCat} ,
   mounted(){
    //this.Getit();  
    this.GetCats();
   },

   methods:{
   Getit(){
     UserService.getallsubcat().then(res => {

     this.content = res.data;
     console.log('finshed' + this.content[0])
           })
      .catch(error => {
        console.error(error);
      });
 },
    changefcode(code){
      console.log(this.currentcode);
      this.subcat.catcode=code;
      },
 GetCats(){
     UserService.getallcat().then(res => {
     this.allcats = res.data;
           })
      .catch(error => {
        console.error(error);
      });
 },
  newsubcat() {
      this.submitted = false;
      this.subcat = {};
  },
  Setit(){
  var data1={
  subcatcode:this.subcat.subcatcode,
  subcatname:this.subcat.subcatname,
  catcode:this.subcat.catcode,

};
console.log(data1);
     UserService.setsubcat(data1).then(res => {
         }).catch(error => {console.log(error);
      });

      this.Getit();
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
