<template>



<div >
  <!-- Nav tabs -->
<ul class="nav nav-tabs" >
  <li class="nav-item">
    <a class="nav-link active" data-toggle="tab" href="#home">Messgaes</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#menu1">New </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#menu2">Menu 2</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#ayman">Ayman</a>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane container active" id="home">
     <button class="btn btn-primary btn-sm col-xs-2" style="margin-bottom: 1em"  @click.prevent="Getit" > Get Messages</button>
     <MessagesTable   :ays="content" />
     </div>
  <div class="tab-pane container fade" id="menu1">
  </div>
  <div class="tab-pane container fade" id="menu2"> <Visa /></div>
  <div class="tab-pane container fade" id="ayman">

  </div>
  </div>

  <!-- /////////////////////////////////////// BUTTON ///////////////////////// -->
  <p align="right">
  <button style="" type="button" class="btn btn-success">Save</button>
</p>




</div>
</template>
<script>
//  
import Visa from '@/components/Visa.vue'
import UserService from "../services/user.service";
import MessagesTable from "@/components/MessagesTable";
export default {
  name: 'TabMenue',
  data() {
    return {
      content: '',

      user:'',


    };
  },
    components: {MessagesTable,Visa} ,
   mounted(){
   UserService.getMessages().then(res => {
    this.content = res.data;
           }).catch(error => {
        console.error(error);
      })
   },
   methods:{
   Getit(){
    UserService.getMessages().then(res => {
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
</style>