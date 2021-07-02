<template>
  <div class="container">
    <header class="jumbotron">
      <h1 style="text-align:center;margin-bottom:5px;margin-top:-30px" v-formatme.black="45">Producy and Quality Factor </h1>
      <div>
        <PpdTable   />
       </div>
    </header>
  </div>
</template>
<script>
import PpdTable from "@/components/PpdTable.vue";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import authHeader from "../services/auth-header";
import axios from "axios";
import User from "../models/user";
let user = new User("", "");
export default {
  name: "Ppd",

  data() {
    return {
    content: {},
    };
  },
   components:{
    PpdTable,
  },
 };
</script>
