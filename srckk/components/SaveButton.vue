<template>

<button type="button" class="btn btn-success">Save</button>
</template>
<script>
// 
import Visa from '@/components/Visa.vue'
import UserService from "../services/user.service";
import MessagesTable from "@/components/MessagesTable";
export default {
  name: 'SaveButton',
  data() {
    return {
      content: '',

      user:'',


    };
  },
    components: {MessagesTable,Visa} ,
   mounted(){
   UserService.getMessages().then(res => {
    this.content = res.data;
           }).catch(error => {
        console.error(error);
      })
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

}




</script>
