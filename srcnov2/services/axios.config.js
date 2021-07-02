import axios from 'axios';
import authHeader from './auth-header';
// const API_URL = 'http://192.168.43.8:3090/';
//axios.defaults.baseURL = 'https://mserver.egyptiot.com/'
// axios.defaults.baseURL = 'http://192.168.43.8:3090/'
axios.defaults.headers.common = authHeader();
export default axios1;
