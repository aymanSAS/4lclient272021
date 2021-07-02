<template>
 <div class="dropdown">
  <!-- <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
    Choose Message
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" v-for ="message in content" v-bind:key ="message.id" href="#">{{message.payload}}</a>
     </div> -->

<select class="browser-default custom-select" style="margin-bottom: 1em" >
  <option selected>Open this select menu</option>
  <option v-for ="message in mydata" v-bind:key ="message.id">{{message.payload}}</option>
 
</select>


</div>

</template>

   
<script>

export default {
  name: 'MessagesDrop',
  // data() {
  //   return {
  //     mydata: '',
     
  //     user1:'',
    
  //   };
  // },
 props:["mydata",] ,
}
</script>