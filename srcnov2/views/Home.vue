<template>
  <div class="container">





<div>
 <h1> Welcome To Ay_Mobil_4L </h1>

       </div>

<!-- <div class="rounded" style="margin-left:10px;margin-top:10px;width:600px;padding:5px;height:200px;border:1.5px solid #000;">
</div> -->




  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'Home',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>


<style scoped>
.rcorners3 {
  border-radius: 15px 50px;
  background: rgb(255, 255, 255);
  padding: 20px;
  position: absolute;
    top:  50%;
    left: 50%;
    transform: translate(-50%,-50%);
    box-shadow: black;
    border: black;
}

</style>
