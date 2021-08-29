<template>
   <div class="form-group row">  
    <label for="selectcat" class="col-sm-3 col-form-label" >{{mylabel}}</label>
    
    <select class="col-sm-5" style="margin-bottom: 1em" name="selectcat"  v-model="this.value">
    <option selected>Choose</option>
     <option v-for ="cat in selectdata" v-bind:key ="cat.id" :value="cat.catcode">{{cat.catname}}</option>
          </select>
          
    </div>
</template>
<script>

export default {
  name: 'MessagesDrop',
  props:["selectdata","savedone","mylabel"] ,
 

data(){
  return {
    bsaved:'',
  }
  },
 //

mounted(){
    this.rotateprop; 
   
   },

 //
   computed:{
    rotateprop:function(){
     this.bsaved=this.savedone;
    return this.propmessages;
   }
 },

}
</script>