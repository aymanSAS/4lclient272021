<template>
  <div  >
    <header >
     <h1 v-formatme.black="30">Products</h1>
      <div style="width: 900px;width:100%"  class="jumbotron" >
        <Product  />
       </div>
    </header>
  </div>
</template>
<script>
import Product from "@/components/product.vue";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import authHeader from "../services/auth-header";
import axios from "axios";
import User from "../models/user";
let user = new User("", "");
export default {
  name: "pRODUCTS",

  data() {
    return {
    content: {},
    };
  },
   components:{
    Product,
  },
 };
</script>
