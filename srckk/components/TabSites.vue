<template>



<div >
  <!-- Nav tabs -->
<ul class="nav nav-tabs" >
  <li class="nav-item">
    <a class="nav-link active" data-toggle="tab" href="#home">New Site</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#menu1">Sites Table </a>
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
          <label for="id" class="col-sm-2 col-form-label" >ID   :</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" name ="id" v-model="selSite"  readonly >
    </div>
    <label for="veto" class="col-sm-2 col-form-label" >Site No    :</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" name ="veto" v-model="site.SiteCode"  >
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label" >Site Name    :</label>
    <div class="col-sm-10">
      <input type="text" class="form-control"  v-model="site.Sitename" >
    </div>
  </div>
 <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Supervision ID    :</label>
    <div class="col-sm-10">
      <select style="width:705px;"  v-model="site.PlantNO">
        <option  v-for ="site in content" v-bind:key ="site.id" value >  {{site.Sitename}}</option>
      </select>  <input style="width:718px;margin-left: 30px;max-width: 48.8%;px;" type="text" id="country" name="country" value="" readonly>
    </div>
  </div>
 <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Fax    :</label>
     <div class="col-sm-10">
      <input type="text" class="form-control"   >
    </div>
  </div>
   <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label" >Plant No    :</label>
      <div class="col-sm-10">
      <select style="width:705px;" v-model="site.PlantNo">
        <option> Veto</option>

      </select>  <input  style="width:718px;margin-left: 30px;max-width: 48.8%;px;" type="text" id="country" name="country" value="" readonly>

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
  <button style="" type="button" class="btn btn-success" @click.prevent= "newSite">New</button>
<!-- </p> -->
<button style="" type="button" class="btn btn-success" @click.prevent= "newSite">Update</button>
     </div>
  <div class="tab-pane container fade" id="menu1">

      <SiteTable   :ays="content"  />

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
import SiteTable from "@/components/SiteTable";
// import SiteA from "@/models/site";
  //import Site1 from "@/models/site1";
//  let site= new SiteA();

export default {
  name: 'TabSites',
  data() {
    return {
      content: '',
      selSite:'',
      // user:'',
      id1:'',
       site:{
         id: null,
         SiteCode:"",
         Sitename:"",
         PlantNo:""
       }

    };
  },
    components: {SiteTable,Visa} ,
   mounted(){
  UserService.getSites().then(res => {
           this.content = res.data;
           //console.log(this.SelSite);
           }).catch(error => {
        console.error(error);

      })
   },

   methods:{
   Getit:()=>{
    //  let site=new Site();
     UserService.getSites().then(res => {
     this.content = res.data;
           })
      .catch(error => {
        console.error(error);
      });
 },
  newSite() {
      this.submitted = false;
      this.site = {};
  },
  Setit(){
// let data1={"SiteCode":"q11","Sitename":"sname11","PlantNo":"ppp1ff"};
  var data={
  SiteCode:this.site.SiteCode,
  Sitename:this.site.Sitename,
  PlantNo:this.site.PlantNo

};
console.log(data);
     UserService.setSite(data).then(res => {
      //  if (res.data[0].id){

     UserService.getSites().then(result => {
     this.content = result.data;
     this.site.id=result.data[0].id;
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
