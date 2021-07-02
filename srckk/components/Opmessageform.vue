<template>
 <div clas="opmessageform">

      <div class="col-sm-10">
         <label for ='select1' class="col-sm-2 col-form-label" >Failure Category   :</label>
      <select name='select1' style="width:400px;" v-model="content.fcode" >
        <option value="" selected disabled hidden>Choose here</option>
       <option  v-for ="cat in cats" v-bind:key ="cat.catcode" @click="loadsubcat(cat.catcode)"  >  {{cat.catname}}</option>
      </select>
      </div>
       <div class="col-sm-10">
         <label for ='select2' class="col-sm-2 col-form-label" > Failure Sub Category:</label>
      <select name='select2' style="width:400px;" >
       <option  v-for ="failure in myfailures" v-bind:key ="failure.id"  @click="loadfailure(failure.fcode)" >  {{failure.fname}}</option>
      </select>
      </div>
      <div class="col-sm-10">

         <label for ='select3' class="col-sm-2 col-form-label" > Failure Cause:</label>
      <select name='select3' style="width:400px;" >
       <option  v-for ="cat in cats" v-bind:key ="cat.id"  >  {{cat.catcode}}</option>
      </select>
      </div>

    <label for="text" class="col-sm-2 col-form-label">Comment    :</label>
     <div class="col-sm-10">
      <input type="text" class="form-control"   >
    </div>

       <button style="" type="button" class="btn btn-success" @click.prevent= "Setit">Save</button>
      <!-- @click="getcat(cat.id)" -->
<MessagesTable   :ays="content"  :cats="cats" :subcats="subcats"  :failures="failures" />
 </div>

</template>

<script>
import UserService from "../services/user.service";
import MessagesTable from "@/components/MessagesTable";
export default {
  name: 'Opmessageform',
  components:{
  MessagesTable,
},
  data(){
 return {
   mysubcats:'',
   content:'',
   myfailure:''
 }
  },


  props:["cats","subcats","failures"] ,
  mounted () {
     this.Getit();
     },
  methods:{
    Getit(){
    UserService.getMessages().then(res => {
    this.content = res.data;
           })
      .catch(error => {
        console.error(error);
      });
 },
loadsubcat(id){
     UserService.getmysubcat(id).then(result => {
     this.mysubcats = result.data;
    //  this.subcats=this.mysubcats;
           })
      .catch(error => {
        console.error(error);
      });
 },
 loadfailure(id){
     UserService.getmyfailure(id).then(result => {
     this.myfailure = result.data;
    //  this.subcats=this.mysubcats;
           })
      .catch(error => {
        console.error(error);
      });
 },
  }
}
</script>
