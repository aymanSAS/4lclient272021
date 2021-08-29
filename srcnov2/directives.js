import Vue from "vue";

//New directive
Vue.directive("formatme",{

bind:function(el,binding){
  el.style.fontSize=binding.value+'px';
  if(binding.modifiers.bold){
    el.style.fontWeight="bold";
    }
    if(binding.modifiers.red){
      el.style.color='red';
    }
    if(binding.modifiers.orange){
      el.style.color='orange';
    }
}


});