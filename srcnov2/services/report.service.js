import axios from 'axios';
import authHeader from './auth-header';
import { API_URL } from './variables.js'

class ReportService {


getftime(mid,vid){
 return axios.get(API_URL+`/allftime/${mid}/${vid}`, { headers: authHeader() });
}

getmtime(mid,vid){
 return axios.get(API_URL+`/allmtime/${mid}/${vid}`, { headers: authHeader() });
}

//
getmaintmode(mid){
  return axios.get(API_URL+`/maintmode/${mid}`, { headers: authHeader() });
 }
 sendonoff(data){
  //return axios.post(API_URL +'/cat',data, { headers: authHeader() });  /${mid}/${val}`
  return axios.get(API_URL+`/onoff/${data.mid}/${data.val}`,{ headers: authHeader() });
 }
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





}

export default new ReportService();
