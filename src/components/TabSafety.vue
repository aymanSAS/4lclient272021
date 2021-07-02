<template>



<div >
  <!-- Nav tabs -->
<ul class="nav nav-tabs" >
  <li class="nav-item">
    <a class="nav-link active" data-toggle="tab" href="#home">New Safety</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#menu1">Safety Table </a>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane container active" id="home">
    <div class="assetcontainer">
 <div class="row"> 
    
    <div class="col-md">
     <form method="POST">
        <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Safety No    :</label>
    <div class="col-sm-10">
      <input type="text" class="form-control"   >
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Safety Name    :</label>
    <div class="col-sm-10">
      <input type="text" class="form-control"   >
    </div>
  </div>
   

  
 </form>
 </div>


</div>
</div>
     

     <!-- /////////////////////////////////////// BUTTON ///////////////////////// -->
  <p align="right">
  <button style="" type="button" class="btn btn-success">Save</button>
</p>


     </div>
  <div class="tab-pane container fade" id="menu1">
    
      <SiteTable   :ays="content" />
   
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
import MessagesTable from "@/components/MessagesTable";
import SiteTable from '@/components/SiteTable.vue'
import Site from "@/models/site";
  //import Site1 from "@/models/site1";
  let site= new Site();
export default {
  name: 'TabSafety',
  data() {
    return {
      content: '',

      user:'',


    };
  },
    components: {SiteTable,Visa} ,
   mounted(){
   site.getSite().then(res => {
    this.content = res.data;
           }).catch(error => {
        console.error(error);
      })
   },
   methods:{
   Getit(){
    site.getSite().then(res => {
    this.content = res.data;
           })
      .catch(error => {
        console.error(error);
      });
 }

}

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