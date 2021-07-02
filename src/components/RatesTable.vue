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
      <th scope="col">Date</th>
      <th scope="col">Count Rate</th>
      <th scope="col">BBL Rate</th>
      <!-- <th scope="col">Mode</th>
      <th scope="col">Run ID</th>
      <th scope="col">Product ID</th> -->
     

</thead>

<tr v-for ="message in ays" v-bind:key ="message.id"  @click="selectRow(message.id,message.fcode,message.comment)" :class="{'highlight': (message.id == currentmessage.id )}" >
<td>
    {{message.id}}
    </td>
    <td>
    {{message.date  | formatDate}}
    </td>
    <td>
    {{message.ppmcount}} 
    </td>
    <td>
    {{message.ppmrate}}
    </td>
    <!-- <td>
    {{message.bbl }}
    </td> -->
    <!-- <td>
    {{message.runid }}
    </td>
      <td>
    {{message.productcode }}
    </td> -->
</tr>

</table>


   </div>
 </div>

</template>

<script>

import ReportService from "../services/report.service";

export default {
  name: 'RatesTable',

  props:["ays"] ,
   data(){
  return {
  messages:[],
  currentmessage:{id:'',ppmcount:'',ppmrate:'',date:'',bbl:'',runid:'',productcode:''},
  mycat:'',
  currentIndex: -1,
  cat:'',
  mycats:'',
      }
   },

   methods:{
  selectRow(id,ppmcount,ppmrate,date,bbl,runid,productcode){
  this.currentmessage.id = id;
  this.currentmessage.ppmcount=ppmcount;
  this.currentmessage.ppmrate=ppmrate;
  this.currentmessage.date=date;
  this.currentmessage.bbl=bbl;
  this.currentmessage.runid=runid;
  this.currentmessage.productcode=productcode;

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
