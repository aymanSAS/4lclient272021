import axios from 'axios';
import authHeader from './auth-header';
import { API_URL } from './variables.js'
var q=0;
class ReportService {


getftime(mid,vid){
 return axios.get(API_URL+`/allftime/${mid}/${vid}`, { headers: authHeader() });
}

getmtime(mid,vid,m){
 return axios.get(API_URL+`/allmtime/${mid}/${vid}/${m}`, { headers: authHeader() });
}
//
//get rates from api  1/6/2021
getrates(){
  return axios.get(API_URL+`/rates`, { headers: authHeader() });
 }
 getmonthrates(m){
  return axios.get(API_URL+`/monthrates/${m}`, { headers: authHeader() });
 }
 getdayrates(m){
  return axios.get(API_URL+`/dayrates/${m}`, { headers: authHeader() });
 }
 getlastmode(){
  return axios.get(API_URL+`/lastbatch`, { headers: authHeader() });
 }
 //
 getlastbatchnotend(){
  return axios.get(API_URL+`/lastbatchnotend`, { headers: authHeader() });
 } 
//
getmtimeC(mid,vid){
  return axios.get(API_URL+`/allmtimeC/${mid}/${vid}`, { headers: authHeader() });
 }
//
getmaintmode(mid){
  return axios.get(API_URL+`/maintmode/${mid}`, { headers: authHeader() });
 }
 ////
 getrunmode(mid){
  return axios.get(API_URL+`/runmode/${mid}`, { headers: authHeader() });
 }
 ////
 getlockmode(mid){
  return axios.get(API_URL+`/lockmode/${mid}`, { headers: authHeader() });
 }
///lastbatch

//to create new batch
 letmode(data){
  return axios.post(API_URL+`/letmode`,data, { headers: authHeader() });
 }
 batchesupdate(data) {
  return axios.post(API_URL+"/batchesu",data, { headers: authHeader() });
}
delbatch(id){
  return axios.get(API_URL +`/delbatch/${id}`, { headers: authHeader() });
}
  // getval(mid){
  
  // this.getmaintmode(mid).then(res => {
  //  q1 = res.data[0].maintmode;
  //  alert(q1+'1st');
  //  return q1;
  //         })
  //   .catch(error => {
  //     console.error(error);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  //   });
  //   // alert(q1+'ffgg');
  //   // return q1;
  
  //  }
 sendonoff(data){
  //return axios.post(API_URL +'/cat',data, { headers: authHeader() });  /${mid}/${val}`
  return axios.get(API_URL+`/onoff/${data.mid}/${data.val}`,{ headers: authHeader() });
 }
 getallproducts(){
  return axios.get(API_URL+`/allproducts`, { headers: authHeader() });
 }
 //function api to update product from backend
 updateProduct(data){
  return axios.post(API_URL+`/updateproduct`,data, { headers: authHeader() });
 }
 //function api to delete product from backend
 delProduct(id){
  return axios.get(API_URL +`/delproduct/${id}`, { headers: authHeader() });
}
 //function api to create new product from backend
 createProduct(data){
  return axios.post(API_URL+`/createproduct`,data, { headers: authHeader() });
 }
 //
///////////////////////
 timestrToSec(timestr) {
  var parts = timestr.split(":");
  return (parts[0] * 3600) +
         (parts[1] * 60) +
         (+parts[2]);
}

 pad(num) {
  if(num < 10) {
    return "0" + num;
  } else {
    return "" + num;
  }
}

 formatTime(seconds) {
  return [pad(Math.floor(seconds/3600)),
          pad(Math.floor(seconds/60)%60),
          pad(seconds%60),
          ].join(":");
}
//
sec2time(timeInSeconds) {
  var pad = function(num, size) { return ('000' + num).slice(size * -1); },
  time = parseFloat(timeInSeconds).toFixed(3),
  hours = Math.floor(time / 60 / 60),
  minutes = Math.floor(time / 60) % 60,
  seconds = Math.floor(time - minutes * 60),
  milliseconds = time.slice(-3);

  return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2) + ',' + pad(milliseconds, 3);
}


 getDaysInMonth = function(month,year) {
  // Here January is 1 based
  //Day 0 is the last day in the previous month
 return new Date(year, month, 0).getDate();
// Here January is 0 based
// return new Date(year, month+1, 0).getDate();
};


}

export default new ReportService();
