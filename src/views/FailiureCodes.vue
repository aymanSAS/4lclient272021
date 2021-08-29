<template>
  <div class="container">
    <header class="jumbotron">
      <h1 style="text-align:center;margin-bottom:5px;margin-top:-30px" v-formatme.black="45">Failiure Codes</h1>
      <div>
        <!-- <button class="btn btn-primary btn-sm col-xs-2" style="margin-bottom: 1em"  @click.prevent="Getit" > Get Messages</button> -->
        <TabFailiureCodes   />
              <!-- <MessagesDrop  :mydata="content" /> -->

       </div>
   <!-- <MessagesTable   :ays="content" /> -->
    </header>
  </div>
</template>
<script>
import TabFailiureCodes from "@/components/TabFailiureCodes.vue";
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
    };
  },
   components:{
  MessagesTable,MessagesDrop,TabFailiureCodes
  },
   mounted () {
    UserService.getMessages().then(res => {
    this.content = res.data;
           }).catch(error => {
        console.error(error);
      });
   
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
 };
</script>
