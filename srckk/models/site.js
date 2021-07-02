
 import axios from 'axios';
 import authHeader from '../services/auth-header';
 const API_URL = 'http://localhost:3090/site';
export default class SiteA {
    constructor(id,SiteCode,Sitename,PlantNo) {
      this.id = id;
      this.SiteCode = SiteCode;
      this.SiteName = Sitename;
      this.PlantNo=PlantNo;
     }
    //   getSite() {
    //   return axios.get(API_URL, { headers: authHeader() });
    // };
    // setSite=(data)=> {
    //   return axios.post(API_URL,data);
    // };

}
