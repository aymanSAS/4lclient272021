<template>
  <div  >
    <header >
            <h1 v-formatme.orange="30">Batches</h1>
      <div style="width: 900px;width:100%"  class="jumbotron" >
        <Batch   />
       </div>
    </header>
  </div>
</template>
<script>
import Batch from "@/components/Batch.vue";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import authHeader from "../services/auth-header";
import axios from "axios";
import User from "../models/user";
let user = new User("", "");
export default {
  name: "Batch1",

  data() {
    return {
    content: {},
    };
  },
   components:{
    Batch,
  },
 };
</script>
