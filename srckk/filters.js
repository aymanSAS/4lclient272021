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
    return moment(String(value)).format('MM/DD/YYYY HH:mm')
  }
})
//
Date.prototype.addHours= function(h){
  var copiedDate = new Date(this.getTime());
  copiedDate.setHours(copiedDate.getHours()+h);
  return copiedDate;
}

//
Vue.filter('formatDateminus2h', function(value) {
  if (value) {
    var foo = new moment(value).add(-2, 'h').toDate();  // add -2 hours to readjust time 
    return moment(String(foo)).format('DD MMMM-YYYY HH:mm')
  }
})

//
var numeral = require("numeral");
Vue.filter("formatNumber", function (value) {
  return numeral(value).format("0.00"); // displaying other groupings/separators is possible, look at the docs
});
// Vue.filter('formatNumber', function (value) {
//   if (value){
//     return numeral(value).format('0,0000') // displaying other groupings/separators is possible, look at the docs

//   }
// })

Vue.filter('formatDateOnly', function(value) {
  if (value) {
    return moment(String(value)).format('YYYY-MM-DD')
  }
})
