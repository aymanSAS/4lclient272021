<template>


 <div clas="MaintMessagesTable">
<label for="id" class="col-sm-2 col-form-label" >ID   :</label>
  <div class="col-sm-1">
      <input type="text" class="form-control" name ="id"  v-model="currentmessage.id"  readonly >
    </div>
   <div>
   <table class="table">
    <thead class="thead-dark" >
      <th scope="col">id</th>
      <th scope="col">Message</th>
      <th scope="col">Date</th>
      <th scope="col">Fcode</th>
      <th scope="col">Comment</th>

</thead>
<tr v-for ="message in propmessages" v-bind:key ="message.id"  @click="selectRow(message.id,message.fcode,message.comment)" :class="{'highlight': (message.id == currentmessage.id )}" >
<td>
    {{message.id}}
    </td>
    <td>
    <!-- {{message.payload}} -->
     Machine Stop
    </td>
    <td>
    {{message.date}}
    </td>
    <td>
    {{message.fcode}}
    </td>
    <td>
    {{message.Comment}}
    </td>
</tr>
</table>


   </div>
 </div>

</template>

<script>
import UserService from "../services/user.service";

export default {
  name: 'MaintMessagesTable',

  props:["ays","user","cats","subcats","failures"] ,
   data(){
  return {
  messages:[],
  currentmessage:{id:'',fcode:'',comment:''},
  mycat:'',
  propmessages:'',
  // selectedsite:'',
  currentIndex: -1,
  cat:'',
mycats:'',
 };
   },

  mounted (){
  this.rotateprop;
  this.Getmessages();
     },

     computed:{
   rotateprop:function(){
     this.propmessages=this.ays;
    return this.propmessages;
   }

  },
   methods:{
  selectRow(id,fcode,comment){
  this.currentmessage.id = id;
  this.currentmessage.fcode=fcode;
   this.currentmessage.comment=comment;

    },
   },
   Getmessages(){
   UserService.getMessages().then(result => {
     this.rotateprop;
     this.propmessages = result.data;
           })
      .catch(error => {
        console.error(error);
      });
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
