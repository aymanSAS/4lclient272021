<template>
  <div class="container">
   
       


 <!-- ///////////////////////////////////////////// -->


<div class="rounded" style="margin-left:442px;margin-top:220px;width:970px;padding:20px;height:380px;border:1.5px solid #000;">
<div>

<div class="container">
  <div class="row">
    <div class="col">
      <a href="/plant">
        <img src="images/related-companies.jpg" alt="..." class="img-thumbnail">
        <label style="text-align: center ;padding-left: 45px">Plant</label>
      </a>
    </div>
    <div class="col">
      <a href="/sites">
        <img src="images/516764.jpg" alt="..." class="img-thumbnail">
        <label style="text-align: center ;padding-left: 50px">Site</label>
      </a>
    </div>
    <div class="col">
      <a href="/departments">
        <img src="/images/Business-Department-icon (1).jpg" alt="..." class="img-thumbnail">
        <label style="text-align: center ;padding-left: 20px">Department</label>
      </a>
    </div> 
     <div class="col">
      <a href="/locations">
        <img src="/images/marker1.png" alt="..." class="img-thumbnail">
        <label style="text-align: center ;padding-left: 27px">Locations</label>
      </a>
    </div>
    <div class="col">
      <a href="/assets">
        <img src="/images/1098420.jpg" alt="..." class="img-thumbnail">
        <label style="text-align: center ;padding-left: 50px">Assets</label>
      </a>
    </div>
    <div class="col">
      <a href="/assettree">
        <img src="/images/elements_tree.jpg" alt="..." class="img-thumbnail">
        <label style="text-align: center ;padding-left: 20px">Asset Tree</label>
      </a>
    </div> 
 <br>
<hr noshade>
<br>

   </div>  
   <div class="row">
    <div class="col">
      <a href="/assetcat">
        <img src="/images/16643941.jpg" alt="..." class="img-thumbnail">
        <label style="text-align: center ;padding-left: 7px">Asset Categories</label>
      </a>
    </div> 
    <div class="col">
      <a href="/emp">
        <img src="/images/Users-Workers-icon.jpg" alt="..." class="img-thumbnail">
        <label style="text-align: center ;padding-left: 18px">Employees/<br>Requesters</label>
      </a>
    </div>
    <div class="col">
      <a href="/suppliers/">
        <img src="/images/supplier.jpg" alt="..." class="img-thumbnail">
        <label style="text-align: center ;padding-left: 18px">Suppliers/<br>Contractors</label>
      </a>
    </div>
    <div class="col">
      <a href="/failiurecodes">
        <img src="/images/no-barcode1.png" alt="..." class="img-thumbnail">
        <label style="text-align: center ;padding-left: 10px">Failiure Codes</label>
      </a>
    </div> 
     <div class="col">
      <a href="/safetyinstructions">
        <img src="/images/safety-hat.jpg" alt="..." class="img-thumbnail">
        <label style="text-align: center ;padding-left: 3px">Safety Instructions</label>
      </a>
    </div>
    <div class="col">
      <a href="/safety">
        <img src="/images/safety-vest-1.jpg" alt="..." class="img-thumbnail">
        <label style="text-align: center ;padding-left: 40px">Safety</label>
      </a>
   </div>  
  </div>
  </div>
    </div>
       </div>




<!-- /////////////////////////////////////////////// -->
 
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