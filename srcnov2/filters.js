import Vue from "vue";

Vue.filter("ucase" , function(val){
  return val.toUpperCase();
})
Vue.filter("reverse",function(val){
  return val.split("").reverse("").join("");
})
Vue.filter("shorten",function(val,l,suffix){
  return val.substring(0,l )+ suffix;

})


import moment from 'moment'

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
})



Vue.filter('formatDateOnly', function(value) {
  if (value) {
    return moment(String(value)).format('YYYY-MM-DD')
  }
})
