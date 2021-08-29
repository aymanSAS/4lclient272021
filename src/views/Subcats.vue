<template>
  <div  >
    <header >
            <h1 v-formatme.orange="30">Sub Categories</h1>
      <div style="width: 900px;width:100%"  class="jumbotron" >
        <SubcatTable   />
       </div>
    </header>
  </div>
</template>
<script>
import SubcatTable from "@/components/SubcatTable.vue";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import authHeader from "../services/auth-header";
import axios from "axios";
import User from "../models/user";
let user = new User("", "");
export default {
  name: "SubCats",

  data() {
    return {
    content: {},
    };
  },
   components:{
    SubcatTable,
  },
 };
</script>
