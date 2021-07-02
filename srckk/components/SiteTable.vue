<template>
 <div clas="sitetable">
<form  class="submit-form">

        <div class="form-group row">
          <label for="id" class="col-sm-2 col-form-label" >ID   :</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" name ="id" v-model="currentSite.id"  readonly >
    </div>
    <label for="veto" class="col-sm-2 col-form-label" >Site No    :</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" name ="veto" v-model="currentSite.siteCode"  >
    </div>


    <label for="inputPassword" class="col-sm-2 col-form-label" >Plant No    :</label>
      <div class="col-sm-10">
      <select style="width:705px;" >
       <option  v-for ="site in ays" v-bind:key ="site.id" @click="getcat(site.id)" >  {{site.Sitename}}</option>
      </select>
      </div>
        <label for="inputPassword" class="col-sm-2 col-form-label" >Mysite   :</label>
      <div class="col-sm-10">
      <select style="width:705px;" >
       <option  v-for ="site in mysites" v-bind:key ="site.id" >  {{site.Sitename}}</option>
      </select>
      </div>
      </div>
 </form>
<button style="" type="button" class="btn btn-success" @click.prevent= "updateit">Update</button>

   <div>
<table class="table">
    <thead class="thead-dark" >
      <th scope="col">id</th>
      <th scope="col">Site Code</th>
      <th scope="col">Site Name</th>
       <th scope="col">Plant No</th>
    </thead>

<tr v-for ="site in ays" v-bind:key ="site.id"  @click="selectRow(site.id,site.SiteCode)"  :class="{'highlight': (site.id == currentSite.id )}" >
<td>
    {{site.id}}
    </td>
    <td>
    {{site.SiteCode}}
    </td>
    <td>
    {{site.Sitename}}
    </td>
    <td>
    {{site.PlantNo}}
    </td>
</tr>
</table>


   </div>
 </div>

</template>

<script>
import UserService from "../services/user.service";
export default {
  name: 'SiteTable',
  // d1:'',
  // selectedsite:'',
  data(){
  return {
  sites:[],
  currentSite:{id:'',siteCode:''},
  mysite:'',
  // selectedsite:'',
  currentIndex: -1,
  site:'',
mysites:'',
 };
},
props:["ays","selectedsite"] ,
computed:{
 d1 :function(){
   // return this.selectedsite;
 // this.selectedsite= currentSite;
 // this.site.SiteCode=site.SiteCode;
 return
 this.selectedsite= currentSite;
 this.site.id;
 this.site.SiteCode;
 }
 },
  methods:{
  selectRow(site,code){
   // console.log("ff" + this.selectedsite);
  this.currentSite.id = site;
  this.currentSite.siteCode=code;
    },
    selectSite(site){
   // console.log("ff" + this.selectedsite);
  this.mysite = site;
  
    },
    getcat(id){
     UserService.getmycat(id).then(result => {
     this.mysites = result.data;
           })
      .catch(error => {
        console.error(error);
      });
 },

updateit(){
  var data={
    id:this.currentSite.id,
  SiteCode:this.currentSite.siteCode,
 };
 
console.log(data);
     UserService.updateSite(data).then(res => {
     UserService.getSites().then(result => {
     this.ays = result.data;
     //this.site.id=result.data[0].id;
           })
      .catch(error => {
        console.error(error);
      });
       console.log(res);
           })
      .catch(error => {
        console.log(error);
      });
 },


 //
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
