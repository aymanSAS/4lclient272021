<template>
  <div  >
    <header >
      <div class="container">


            <h1 v-formatme.orange="30">Targets</h1>
      <div style="width: 900px;width:100%"  class="jumbotron" >


        <div class="row">
  <label for="veto" class="col-sm-3 col-form-label" >Target PEI    :</label>
 <div class="col-sm-3">
      <!-- <input type="number" class="form-control" name ="veto"   > -->
       <input type="number" id="PEI" class="form-control" name="points" step="0.1" min="0.1" max="1"  v-model="myTargetPei">
      </div>
    <div class="col-sm">
        <button type="button" class="btn btn-warning" @click.prevent= "updateit($store.state.midTagetPei)"  >   Update </button>
    </div>


</div>

<br>
        <div class="row" >
  <label for="veto" class="col-sm-3 col-form-label" >Target Rate    :</label>
 <div class="col-sm-3">
      <!-- <input type="number" class="form-control" name ="veto" step="3"  > -->
      <input type="number" id="Rate" class="form-control" name="points" step="1" min="0" max="10000" v-model="myTargetRate">
      </div>

    <div class="col-sm">
        <button type="button" class="btn btn-warning" @click.prevent= "updateitRate($store.state.midTagetRate)">   Update </button>
    </div>





    <!-- v-model="currentcat.ppd" -->

</div>
</div>
       </div>
    </header>
  </div>
</template>
<script>

import AuthService from "../services/auth.service";
import ReportService from "../services/report.service";
import authHeader from "../services/auth-header";
import axios from "axios";
import User from "../models/user";
let user = new User("", "");
export default {
  name: "Batch1",

  data() {
    return {
    content: {},
    myTargetRate: '',
    myTargetPei: '',
    };
  },
   mounted(){
   this.getPei();
   this.getRate();
  },
  methods:{
    //updateitRate
updateit(m){
  var new1={mid:'',val:''}
  new1.mid=m;
  new1.val=this.myTargetPei;

  ReportService.setmaintmode(new1).then(res => {
    this.myTargetPei= res.data[0].maintmode
    console.log(this.maintmode);
           })
      .catch(error => {
        console.error(error);
      });

},
updateitRate(m){
  var new1={mid:'',val:''}
  new1.mid=m;
  new1.val=this.myTargetRate;

  ReportService.setmaintmode(new1).then(res => {
    this.myTargetPei= res.data[0].maintmode
    console.log(this.maintmode);
           })
      .catch(error => {
        console.error(error);
      });

},
getPei(){
ReportService.getmaintmode(this.$store.state.midTagetPei).then(res => {
    this.myTargetPei= res.data[0].maintmode
    console.log(this.maintmode);
           })
      .catch(error => {
        console.error(error);
      });
},
getRate(){
ReportService.getmaintmode(this.$store.state.midTagetRate).then(res => {
    this.myTargetRate= res.data[0].maintmode
    console.log(this.maintmode);
           })
      .catch(error => {
        console.error(error);
      });
},

   },

 };
</script>
