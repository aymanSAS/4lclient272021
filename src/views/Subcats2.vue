<template>
  <div class="container">
    <header class="jumbotron">
      <h1 style="text-align:center;margin-bottom:5px;margin-top:-30px" v-formatme.black="45">Categories</h1>
      <div>
        <TabCat   />
       </div>
    </header>
  </div>
</template>
<script>
import TabCat from "@/components/TabCat.vue";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import authHeader from "../services/auth-header";
import axios from "axios";
import User from "../models/user";
let user = new User("", "");
export default {
  name: "Cats",

  data() {
    return {
    content: {},
    };
  },
   components:{
    TabCat,
  },
 };
</script>
