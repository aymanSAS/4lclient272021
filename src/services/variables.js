// variables.js

//import ReportService from "./report.service";
import ReportService from "../services/report.service";
//export const API_URL = 'http://192.168.43.8:3090';   //fro ARCC
//export const API_URL = 'http://192.168.1.8:3090';   //from home
export const API_URL = 'https://mserver.egyptiot.com';  //From DO
export const maintmode = 0 ;
//export const BBL = 188 ;
// export const settings = {
//   some: 'Settings'
// }

// import ReportService from "../services/report.service";
//export var  BBL = ReportService.getval(4);
   
// import ReportService from "../services/report.service";
// export function getval(mid){
//     var q=0;
//     ReportService.getmaintmode(mid).then(res => {
//      q=res.data[0].maintmode;
//     console.log('BBL= ' + q);
//            })
//       .catch(error => {
//         console.error(error);
//       });
//       return   q ;
//      }

     