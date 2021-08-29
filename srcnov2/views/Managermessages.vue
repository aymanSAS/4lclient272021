<template>

 <!-- style="margin-left:-250px;padding-left:120px;" -->
  <div >
    <header >
      <br>
      <h1 v-formatme.orange="30">Failure Messages</h1>
      <div>
        <div class="col-sm-1">
     
    </div>
   
     <label  for="id2" class="col-sm-2 col-form-label" >RCL   :</label>
       <input type="text" class="form-control" name ="id2"  v-model="tp2"  readonly >
       <label  for="id3" class="col-sm-2 col-form-label" >PCL   :</label>
        <input type="text" class="form-control" name ="id3"  v-model="PCL"  readonly >
        <!-- // -->
         <label  for="id1" class="col-sm-2 col-form-label" >MR   :</label>
         <input type="text" class="form-control" name ="id1"  v-model="MR"  readonly >
        <label  for="id1" class="col-sm-2 col-form-label" >EF   :</label>
         <input type="text" class="form-control" name ="id1"  v-model="EF"  readonly >
        <label  for="id1" class="col-sm-2 col-form-label" >RCLHF   :</label>
         <input type="text" class="form-control" name ="id1"  v-model="RCLHF"  readonly >
        <label  for="id1" class="col-sm-2 col-form-label" >CHO   :</label>
         <input type="text" class="form-control" name ="id1"  v-model="CHO"  readonly >
        <label  for="id1" class="col-sm-2 col-form-label" >PL   :</label>
         <input type="text" class="form-control" name ="id1"  v-model="PL"  readonly >
        <label  for="id1" class="col-sm-2 col-form-label" >OPL   :</label>
         <input type="text" class="form-control" name ="id1"  v-model="OPL"  readonly >
        <label  for="id1" class="col-sm-2 col-form-label" >PCLHF   :</label>
         <input type="text" class="form-control" name ="id1"  v-model="PCLHF"  readonly >     
        <!-- // -->
         <label  for="id1" class="col-sm-2 col-form-label" >PEI   :</label>
         <input type="text" class="form-control" name ="id1"  v-model="PEI"  readonly >

  <label  for="id1" class="col-sm-2 col-form-label" >PPD   :</label>
         <input type="text" class="form-control" name ="id1"  v-model="PPD"  readonly >
        <br>
        <!-- <button class="btn btn-primary btn-sm col-xs-2" style="margin-bottom: 1em"  @click.prevent="Getit" > Get Messages</button> -->
        <!-- <TabMenue   /> -->
        <!-- <MessagesDrop  :mydata="content" /> -->
        <!-- <button class="btn btn-primary btn-sm col-xs-2" style="margin-bottom: 1em"  @click.prevent="Getallftime" > Get Failure Time</button>
<span> alltime : {{ftime}} and Bysecond : {{fsecond}} </span> -->
       </div>
       </header>
       <div style="width: 900px;width:100%"  class="jumbotron" >
   <MessagesTable   :ays="content"  :cats="cats" :subcats="subcats"  :failures="failures" :tp1="tp1" :tp2="tp2" :tp3="tp3" />
    </div>
  </div>
</template>
<script>
import TabMenue from "@/components/TabMenue";
import MessagesTable from "@/components/MessagesTable";
import MessagesDrop from "@/components/MessagesDrop";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import ReportService from "../services/report.service";
import authHeader from "../services/auth-header";
import axios from "axios";
import User from "../models/user";

import { BBL } from "../services/variables.js"
let user = new User("", "");



export default {
  name: "Messages",

  data() {
    return {
      content: {},
      cats:{},
      subcats:{},
      failures:{},
      ftime:'',
      fsecond:'',
      tp1:'',
      tp2:'',
      tp3:'',
      MR:'',
      PCL:'',
      PEI:'',
      RCL:'',
      PL:'',
      EF:'',
      RCLHF:'',
      CHO:'',
      OPL:'',
      PCLHF:'',
      HF3:'',
      PPD:'',
    };
  },
   components:{
  MessagesTable,MessagesDrop,TabMenue
  },
   mounted () {
    // UserService.getMessages().then(res => {
    // this.content = res.data;
    //        }).catch(error => {
    //     console.error(error);
    //   });
   this.Getit();
   this.Getcat();
   this.Getsubcat();
   this.Getfailure();
   this.Getallmtime();
   },
  methods:{
  Getit(){
    UserService.getManagerMessages().then(res => {
    this.content = res.data;
           })
      .catch(error => {
        console.error(error);
      });
 },
  Getcat(){
    UserService.getmycat().then(res => {
    this.cats = res.data;
           })
      .catch(error => {
        console.error(error);
      });
     },
Getsubcat(){
    UserService.getmycat().then(res => {
    this.subcats = res.data;
           })
      .catch(error => {
        console.error(error);
      });
     },

 Getfailure(){
    UserService.getmycat().then(res => {
    this.failures = res.data;
           })
      .catch(error => {
        console.error(error);
      });
     },
     //
     Getallmtime(){
    var d1={mid:'',vid:''};
    d1.mid=1;
    d1.vid=0;
    ReportService.getmtime(d1.mid,d1.vid).then(res => {
    //this.chartData.datasets[0].data[0] = res.data[0].rsecond/3600;
    this.tp1 = res.data[0].tp1   ///msecond/3600;
    this.tp2 = res.data[0].tp2   ///msecond/3600;
    this.tp3= res.data[0].tp3 
    this.PCL=this.tp1+this.tp3
    this.HF3=this.tp3

    this.MR=res.data[0].MR
    this.EF=res.data[0].EF
    this.RCLHF=res.data[0].RCLHF
    this.CHO=res.data[0].CHO
    this.PL=res.data[0].PL
    this.OPL=res.data[0].OPL
    this.RCLHF=res.data[0].RCLHF 
   
   this.PPD=res.data[0].PPD 


    //const x=variables.BBL
    this.RCL=this.MR+this.EF+this.RCLHF
    this.PEI= 20000/(2000+(this.RCL)*BBL)
    //res.data[0].mtime + res.data[0].ftime ;
      });
     },
     //
     Getallftime(){
    var d1={mid:'',vid:''};
    d1.mid=1;
    d1.vid=1;
    UserService.getftime(d1.mid,d1.vid).then(res => {
    this.ftime = res.data[0].ftime;
    this.fsecond = res.data[0].fsecond;
           })
      .catch(error => {
        console.error(error);
      });
     },
/////
     },
      };







</script>
