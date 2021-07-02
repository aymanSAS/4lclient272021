<template>
  <div  >
    <header >
     <h1 v-formatme.black="30">Categories</h1>
      <div style="width: 900px;width:100%"  class="jumbotron" >
        <CatTable   />
       </div>
    </header>
  </div>
</template>
<script>
import CatTable from "@/components/CatTable.vue";
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
    CatTable,
  },
 };
</script>
