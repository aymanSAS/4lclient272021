<template>
  <div>
    <header >
      <br>
      <h1 v-formatme.orange="30">Failure Messages</h1>
      <div>

       </div>
       </header>
       <div style="width: 900px;width:100%"  class="jumbotron" >
   <MaintMessagesTable       />
    </div>
  </div>
</template>
<script>
import TabMenue from "@/components/TabMenue";
import MaintMessagesTable from "@/components/MaintMessagesTable";
import Opmessageform from "@/components/Opmessageform";
import MessagesDrop from "@/components/MessagesDrop";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import authHeader from "../services/auth-header";
import axios from "axios";
import User from "../models/user";
let user = new User("", "");



export default {
  name: "MaintMessages",

  data() {
    return {
      content: {},
      cats:{},
      subcats:{},
      failures:{},
    };
  },
   components:{
  MaintMessagesTable,MessagesDrop,TabMenue,Opmessageform
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
    beforeUpdated(){
   this.hide();
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
 hide: function() {
      // now we can use the reference to Choices to perform clean up here 
      // prior to removing the elements from the DOM
      this.MaintMessagesTable.destroy()
     // this.showChoices = false
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

     },
      };







</script>
