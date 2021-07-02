  import axios from 'axios';
 import authHeader from './auth-header';
 import { API_URL } from './variables.js'

//const API_URL = 'https://mserver.egyptiot.com/api/test/';
//const API_URL1 = 'https://mserver.egyptiot.com/site/';


//const API_URL='http://192.168.43.8:3090';
//const API_URL = url+'/api/test/';
//const API_URL1 = '/site/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL +'/api/test/' + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL +'/api/test/' + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL +'/api/test/' +  'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL +'/api/test/' + 'admin', { headers: authHeader() });
  }

  getMessages() {
   // return axios.get("https://mserver.egyptiot.com/opmessages", { headers: authHeader() });
    return axios.get(API_URL + "/opmessages", { headers: authHeader() });
  }
  //
  getmMessages() {
    // return axios.get("https://mserver.egyptiot.com/opmessages", { headers: authHeader() });
     return axios.get(API_URL + "/maintmessages", { headers: authHeader() });
   }
   //
   getManagerMessages(m) {
    // return axios.get("https://mserver.egyptiot.com/opmessages", { headers: authHeader() });
     return axios.get(API_URL + `/managermessages/${m}`, { headers: authHeader() });
   }
   //
  async updateMessages(data) {
   let r2=await  axios.post(API_URL+"/messageu",data, { headers: authHeader() });
   return r2;
   
  }
  // updateMessages(data) {
  //   return axios.post(API_URL+"/messageu",data, { headers: authHeader() });
  // }
  updateMessagesU(data) {
    return axios.post(API_URL+"/messageuInsertdate",data, { headers: authHeader() });
  }
  //
  createmessage(data) {
    return axios.post(API_URL+"/createmessage",data, { headers: authHeader() });
  }
  //
  mupdateMessages(data) {
    return axios.post(API_URL+"/mmessageu",data, { headers: authHeader() });
  }
  //
  updateMessagesftime(data) {
    return axios.post(API_URL+"/messageuftime",data, { headers: authHeader() });
  }
  //
  getSites() {
   // return axios.get("https://mserver.egyptiot.com/site", { headers: authHeader() });
    return axios.get(API_URL +"/site", { headers: authHeader() });

  }

  // setSite(data) {
  //      return axios.post(API_URL1,data, { headers: authHeader() });
  //    }
     /////
     setcat(data) {
      return axios.post(API_URL +'/cat',data, { headers: authHeader() });
    }
    setsubcat(data) {
      return axios.post(API_URL +'/subcat',data, { headers: authHeader() });
    }
    setfailure(data) {
      return axios.post(API_URL +'/failure',data, { headers: authHeader() });
    }
    delsubcat(id){
      return axios.get(API_URL +`/delsubcat/${id}`, { headers: authHeader() });
    }
    delcat(id){
      return axios.get(API_URL +`/delcat/${id}`, { headers: authHeader() });
    }
    delfailure(id){
      return axios.get(API_URL +`/delfailure/${id}`, { headers: authHeader() });
    }
    setfailure(data) {
      return axios.post(API_URL +'/failure',data, { headers: authHeader() });
    }
     updateSite(data) {
      return axios.post(API_URL+"/siteu",data, { headers: authHeader() });
    }
  //  user?ID=12345'  title=${title}  // ${data}
  getmycat(data){
  return axios.get(API_URL+`/catby/${data}`, { headers: authHeader() });
}
updateCat(data) {
  return axios.post(API_URL+"/catu",data, { headers: authHeader() });
}
updateSubcat(data) {
  return axios.post(API_URL+"/subcatu",data, { headers: authHeader() });
}
updateFailure(data) {
  return axios.post(API_URL+"/failureu",data, { headers: authHeader() });
}
getmysubcat(data){
  return axios.get(API_URL+`/subcatby/${data}`, { headers: authHeader() });
}
  getallcat(){
  return axios.get(API_URL + "/cat", { headers: authHeader() });
 }
 getallsubcat(){
  return axios.get(API_URL + "/subcat", { headers: authHeader() });
 }
   getallfailure(){
  return axios.get(API_URL + "/failure", { headers: authHeader() });
 }
 getmyfailure(data){
  return axios.get(API_URL+`/failureby/${data}`, { headers: authHeader() });
}
////
getftime(mid,vid){
  return axios.get(API_URL+`/allftime/${mid}/${vid}`, { headers: authHeader() });
}

getmtime(mid,vid){
  return axios.get(API_URL+`/allmtime/${mid}/${vid}`, { headers: authHeader() });
}
////manipulate PPD
getmyppd(data){
  return axios.get(API_URL+`/ppdby/${data}`, { headers: authHeader() });
}
updateppd(data) {
  return axios.post(API_URL+"/ppdu",data, { headers: authHeader() });
}

setppd(data) {
  return axios.post(API_URL +'/ppd',data, { headers: authHeader() });
}

delppd(id){
  return axios.get(API_URL +`/delppd/${id}`, { headers: authHeader() });
}

getallppd(){
  return axios.get(API_URL + "/ppd", { headers: authHeader() });
 }
//
getlastppd(){
  return axios.get(API_URL + "/lastppd", { headers: authHeader() });
 }
///////////////////////
}

export default new UserService();
