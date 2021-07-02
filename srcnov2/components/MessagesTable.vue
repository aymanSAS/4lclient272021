<template>


 <div clas="messagetable">
<label  for="id" class="col-sm-2 col-form-label" >ID   :</label>

  <div class="col-sm-1">
      <input type="text" class="form-control" name ="id"  v-model="currentmessage.id"  readonly >
    </div>
        <br>
   <div>

   <table class="table">

    <thead class="thead-dark" >
      <th scope="col">id</th>
      <th scope="col">Message</th>
      <th scope="col">Date</th>
      <th scope="col">Fcode</th>
      <th scope="col">Op Comment</th>
      <th scope="col">Maint Comment</th>
       <th scope="col"> Type</th>

 <th scope="col">OP Time</th>
  <th scope="col">Maint Time</th>
   <th scope="col">Finish Time</th>

</thead>

<tr v-for ="message in ays" v-bind:key ="message.id"  @click="selectRow(message.id,message.fcode,message.comment)" :class="{'highlight': (message.id == currentmessage.id )}" >
<td>
    {{message.id}}
    </td>
    <td>
    <!-- {{message.payload}} -->
    Machine Stop
    </td>
    <td>
    {{message.date  | formatDate}}
    </td>
    <td>
    {{message.fcode}} .. {{message.fdesc}}
    </td>
    <td>
    {{message.Comment}}
    </td>
    <td>
    {{message.mcomment}}
    </td>
    <td>
    {{message.fsubcat}}
    </td>

      <td>
    {{message.tp1 || 0}}
    </td>
      <td>
    {{message.tp2 || 0}}
    </td>
      <td>
    {{message.tp3 || 0}}
    </td>
</tr>
<tr>
         <td><strong>Total</strong></td>
         <td></td>
          <td></td>
           <td></td>
            <td></td>
              <td></td>
                <td>  </td>
                  <td>{{tp1}}</td>
                    <td>{{tp2}}</td>
                     <td>{{tp3}}</td>

       </tr>
</table>


   </div>
 </div>

</template>

<script>

import ReportService from "../services/report.service";

export default {
  name: 'MessagesTable',

  props:["ays","user","cats","subcats","failures","tp1","tp2","tp3"] ,
   data(){
  return {
  messages:[],
  currentmessage:{id:'',fcode:'',comment:''},
  mycat:'',
  currentIndex: -1,
  cat:'',
  mycats:'',
      }
   },
    

  // computed: {
  //       // subtotalRow() {
  //       //   return this.messages.map((item) => {
  //       //     return Number(item.id )
  //       //   });
  //       // },
  //       // total() {
  //       //   // console.log(this.messages);
  //       //   var t1='';
  //       //   var t2='';

  //       //   return this.ays.reduce((total, item) => {
  //       //    // return (total + ReportService.timestrToSec(item.tp1) )  ;
  //       //   //  if (item.tp1 !==0) {
  //       //   //  t1= ReportService.timestrToSec(item.tp1);
  //       //   //  }
  //       //   // else{
  //       //   //   t1=0
  //       //   // }

  //       //   //  return (total +t1)
  //       //   }, 0);
  //       //         }
  //   },
  
   methods:{
  selectRow(id,fcode,comment){
  this.currentmessage.id = id;
  this.currentmessage.fcode=fcode;
  this.currentmessage.comment=comment;
    },

    
   }

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
