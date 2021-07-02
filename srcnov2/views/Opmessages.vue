<template>
<div>
  <div  >

    <header >
      <br>
      <h1 v-formatme.orange="30">Failure Messages</h1>
        </header>
  <div style="width: 900px;width:100%"  class="jumbotron" >

   <OpmessageTable   :ays="content"  :cats="cats" :subcats="subcats"  :failures="failures" />
</div>
</div>
    </div>


</template>
<script>
import Opmessageform from "@/components/Opmessageform";
import TabMenue from "@/components/TabMenue";
import OpmessageTable from "@/components/OpmessageTable";
import MessagesTable from "@/components/MessagesTable";

import MessagesDrop from "@/components/MessagesDrop";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import authHeader from "../services/auth-header";
import axios from "axios";
import User from "../models/user";
let user = new User("", "");



export default {
  name: "Messages",

  data() {
    return {
      content: {},
      cats:{},
      subcats:{},
      failures:{},
    };
  },
   components:{
  MessagesTable,MessagesDrop,TabMenue,OpmessageTable
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
  Getcat(){
    UserService.getallcat().then(res => {
    this.cats = res.data;
           })
      .catch(error => {
        console.error(error);
      });
     },
Getsubcat(){
    UserService.getmysubcat(4).then(res => {
    this.subcats = res.data;
           })
      .catch(error => {
        console.error(error);
      });
     },

 Getfailure(){
    UserService.getmyfailure(178).then(res => {
    this.failures = res.data;
           })
      .catch(error => {
        console.error(error);
      });
     },

     },
      };







</script>
